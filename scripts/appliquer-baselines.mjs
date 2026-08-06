#!/usr/bin/env node
/**
 * Applique un rapport de l'agent `verificateur-sources` à data/axes.json
 * (npm run appliquer-baselines -- <rapport.md> [options]).
 *
 * Pourquoi ce script plutôt qu'un copier-coller : un rapport de baselines, c'est
 * une dizaine de textes de 1 000 signes et 200 URLs. Recopier à la main, c'est
 * introduire des écarts silencieux entre ce que le rapport a vérifié et ce que le
 * site publie — exactement ce que le garde-fou n°5 interdit. Le script lit le
 * rapport comme source de vérité et écrit sans reformuler.
 *
 * Ce qu'il attend du rapport, par axe (les trois lots du 2026-08-02 ont produit
 * ces variantes de titre, toutes acceptées) :
 *
 *   ## <n>. `<id-axe>` — <libellé>
 *   **Texte de baseline proposé :**   ou   ### Texte de baseline proposé
 *   > le texte, sur une ou plusieurs lignes de citation
 *   **Sources :**  ou  **Sources (une par fait) :**  ou  ### Sources (une par fait)
 *   - <fait> : [<libellé>](<url>) (niveau).
 *
 * Garde-fous, dans l'ordre où ils comptent :
 *  1. `--essai` n'écrit rien et montre ce qui changerait.
 *  2. Un axe dont la baseline est DÉJÀ identique est ignoré : rejouer un rapport
 *     complété après une interruption est sans effet sur ce qui est posé.
 *  3. Un axe dont la baseline existe et DIFFÈRE n'est jamais écrasé sans
 *     `--remplacer=<id>`. C'est le cas d'une baseline à resserrer (fisc-verte
 *     après la décision n° 28) : le remplacement doit être un acte nommé.
 *  4. Rien n'est écrit tant que le rapport entier n'est pas parsé : un rapport
 *     tronqué par une interruption échoue sans laisser axes.json à moitié appliqué.
 *  5. Un axe portant une RÉSERVE de l'agent n'est pas appliqué en silence. Le
 *     script ne lisait que la baseline et les URLs : les verdicts ⚠️, les faits ❓
 *     et les remarques en italique mouraient au moment de l'application. C'est ce
 *     qui a publié la source CVAE de niveau 4 alors que l'agent avait lui-même
 *     signalé le problème et proposé le correctif (constaté le 2026-08-05). Les
 *     réserves sont donc extraites, affichées, et bloquent l'écriture tant que
 *     `--reserves-lues` n'est pas passé.
 *
 * Le script ne vérifie pas les faits — c'est le travail de l'agent — et ne teste
 * pas les URLs (voir `npm run verif-liens`). Après application :
 * `npm run check-data` puis `npm run etat-sources`.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");

// Les refus de ce script sont des situations prévues (rapport tronqué, baseline à
// remplacer) et non des bugs : message lisible, pas de trace de pile.
const echec = (msg) => {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
};

// --- arguments --------------------------------------------------------------
const args = process.argv.slice(2);
const rapport = args.find((a) => !a.startsWith("--"));
const opt = (nom) => args.find((a) => a.startsWith(`--${nom}=`))?.split("=").slice(1).join("=");
const essai = args.includes("--essai");
const reservesLues = args.includes("--reserves-lues");
const stamp = opt("date") ?? new Date().toISOString().slice(0, 10);
const remplacables = new Set((opt("remplacer") ?? "").split(",").filter(Boolean));

// --- réserves ---------------------------------------------------------------
// Ce que l'agent signale sans que le format ne le range nulle part. Chercher ces
// marques dans le texte du rapport est ce qui manquait : elles étaient écrites,
// lues par personne.
const TOURNURES = [
  "à confirmer", "l'éditeur peut", "l'éditeur pourra", "sous réserve", "à vérifier",
  "n'a pas pu", "je n'ai pas pu", "non retrouvé", "non retrouvée", "reste à",
  "faute de", "je recommande", "à trancher", "prudence",
];

// Retire le gras (`**Sources :**`) et les liens markdown. Les liens comptent :
// un titre d'ouvrage y est en italique — `[RTE, *Bilan électrique 2025*, …](url)`
// — et se ferait prendre pour une remarque de l'agent.
const sansGrasNiLiens = (s) =>
  s.replace(/\*\*[^*]*\*\*/g, "").replace(/\[[^\]]*\]\([^)]*\)/g, "");

function reservesDe(bloc, id) {
  const trouvees = [];
  const lignes = bloc.split("\n");

  const verdict = lignes.find((l) => /^\*\*Verdict/.test(l));
  if (verdict && /[⚠️❌]/u.test(verdict))
    trouvees.push(`verdict : ${verdict.replace(/\*\*/g, "").trim()}`);

  // Bloc « Sources » : niveau annoncé et remarques en italique de l'agent.
  const titreSources = bloc.match(/^(?:\*\*|#{2,4} )Sources[^\n]*$/m);
  if (titreSources) {
    for (const l of bloc.slice(bloc.indexOf(titreSources[0])).split("\n").slice(1)) {
      if (!l.startsWith("- ")) {
        if (trouvees.length && l.trim() === "") continue;
        if (!l.startsWith("- ") && l.trim() !== "" && !l.startsWith(" ")) break;
      }
      if (!l.startsWith("- ")) continue;
      if (!/\((?:[1-4])\)/.test(l))
        trouvees.push(`source sans niveau annoté : ${l.slice(2, 110).trim()}`);
      const ital = sansGrasNiLiens(l).match(/(?:^|[^*])\*([^*\n]{15,})\*/);
      if (ital) trouvees.push(`remarque de l'agent : ${ital[1].trim()}`);
    }
  }

  // Faits écartés et tournures d'incertitude, partout dans la section.
  for (const l of lignes) {
    const nu = l.trim();
    // Ni le texte de baseline (`>`) ni le tableau récapitulatif (`|`) ne sont des réserves.
    if (!nu || nu.startsWith(">") || nu.startsWith("|")) continue;
    if (nu.includes("❓")) trouvees.push(`fait ❓ : ${nu.replace(/\*\*/g, "").slice(0, 110)}`);
    else {
      const t = TOURNURES.find((x) => nu.toLowerCase().includes(x));
      if (t) trouvees.push(`« ${t} » : ${nu.replace(/\*\*/g, "").slice(0, 110)}`);
    }
  }
  return [...new Set(trouvees)].map((r) => ({ id, texte: r }));
}

if (!rapport) {
  console.error(`usage : npm run appliquer-baselines -- <rapport.md> [options]

  --essai                 n'écrit rien, montre ce qui changerait
  --date=AAAA-MM-JJ       date posée dans baseline_verifiee (défaut : aujourd'hui)
  --remplacer=id1,id2     autorise l'écrasement d'une baseline existante différente
  --reserves-lues         applique malgré les réserves de l'agent (après les avoir lues)
`);
  process.exit(1);
}
if (!/^\d{4}-\d{2}-\d{2}$/.test(stamp)) echec(`--date : AAAA-MM-JJ attendu (reçu "${stamp}")`);

// --- lecture du rapport -----------------------------------------------------
const texte = readFileSync(rapport, "utf8");
const blocs = texte.split(/^## \d+\. `/m).slice(1);
if (!blocs.length) echec(`${rapport} : aucune section « ## <n>. \`<axe>\` » trouvée`);

const propositions = [];
for (const bloc of blocs) {
  const id = bloc.slice(0, bloc.indexOf("`"));

  const titreBaseline = bloc.match(/^(?:\*\*|#{2,4} )Texte de baseline[^\n]*$/m);
  if (!titreBaseline) echec(`${id} : pas de « Texte de baseline proposé »`);
  const citation = [];
  let commencee = false;
  for (const ligne of bloc.slice(bloc.indexOf(titreBaseline[0])).split("\n")) {
    if (ligne.startsWith(">")) {
      commencee = true;
      citation.push(ligne.replace(/^>\s?/, "").trim());
    } else if (commencee && ligne.trim() === "") continue;
    else if (commencee) break;
  }
  const baseline = citation.join(" ").replace(/\s+/g, " ").trim();
  if (!baseline) echec(`${id} : bloc de citation vide sous « Texte de baseline proposé »`);

  const titreSources = bloc.match(/^(?:\*\*|#{2,4} )Sources[^\n]*$/m);
  if (!titreSources) echec(`${id} : pas de bloc « Sources »`);
  const urls = [];
  for (const ligne of bloc.slice(bloc.indexOf(titreSources[0])).split("\n").slice(1)) {
    if (ligne.startsWith("- ")) {
      // Les parenthèses INTERNES à l'URL comptent : `…/rome_statute(f).pdf` était
      // coupé à `rome_statute(f` par un `[^)]+`, et cette URL tronquée répond 200
      // sur une page anglaise sans rapport — vivante, donc invisible à tout
      // contrôle de survie (trouvé le 2026-08-06 sur `eco-justice-environnementale`).
      for (const m of ligne.matchAll(/\((https?:\/\/(?:[^()\s]|\([^()\s]*\))+)\)/g))
        if (!urls.includes(m[1])) urls.push(m[1]);
    } else if (urls.length && ligne.trim() !== "") break;
  }
  if (!urls.length) echec(`${id} : aucune URL dans le bloc « Sources »`);

  propositions.push({ id, baseline, urls, reserves: reservesDe(bloc, id) });
}

// --- réserves : jamais appliquées en silence --------------------------------
const reserves = propositions.flatMap((p) => p.reserves);
if (reserves.length) {
  const axes = new Set(reserves.map((r) => r.id));
  console.log(
    `\n⚠️  ${reserves.length} réserve(s) de l'agent sur ${axes.size} axe(s) — ` +
      `à lire avant d'appliquer :\n`
  );
  for (const id of axes) {
    console.log(`  ${id}`);
    for (const r of reserves.filter((x) => x.id === id)) console.log(`    · ${r.texte}`);
    console.log("");
  }
  if (!essai && !reservesLues)
    echec(
      `Rien n'a été écrit. Ces réserves sont écrites dans le rapport et le script les\n` +
        `  laissait tomber : c'est ainsi qu'une source de niveau 4 a été publiée le 29/07\n` +
        `  alors que l'agent avait signalé le problème (CVAE, corrigé le 05/08).\n` +
        `  Les lire, corriger le rapport si besoin, puis relancer avec --reserves-lues.`
    );
}

// --- application ------------------------------------------------------------
const chemin = join(racine, "data/axes.json");
const fichier = JSON.parse(readFileSync(chemin, "utf8"));

const bilan = { poses: 0, remplaces: 0, inchanges: 0 };
for (const p of propositions) {
  const axe = fichier.axes.find((a) => a.id === p.id);
  if (!axe) echec(`axe inconnu dans data/axes.json : ${p.id}`);

  if (axe.baseline_reel === p.baseline) {
    console.log(`·  ${p.id.padEnd(32)} inchangé`);
    bilan.inchanges++;
    continue;
  }
  if (axe.baseline_reel && !remplacables.has(p.id))
    echec(
      `${p.id} : une baseline différente de celle du rapport existe déjà.\n` +
        `  C'est le cas si l'éditeur a corrigé cette baseline à la main : rejouer le rapport\n` +
        `  annulerait sa correction. Comparer, puis relancer avec --remplacer=${p.id} si\n` +
        `  le remplacement est bien voulu.`
    );
  if (axe.baseline_reel) {
    console.log(`⚠️  ${p.id.padEnd(32)} baseline précédente remplacée (autorisée)`);
    bilan.remplaces++;
  } else {
    console.log(`✓  ${p.id.padEnd(32)} ${String(p.baseline.length).padStart(4)} signes · ${p.urls.length} sources`);
    bilan.poses++;
  }
  axe.baseline_reel = p.baseline;
  axe.source_baseline = p.urls;
  axe.baseline_verifiee = stamp;
}

const modifie = bilan.poses + bilan.remplaces;
if (essai) {
  console.log(`\n[essai] ${modifie} axe(s) seraient modifiés, ${bilan.inchanges} inchangé(s). Rien n'a été écrit.`);
  process.exit(0);
}
if (modifie === 0) {
  console.log(`\nRien à appliquer : les ${bilan.inchanges} axes du rapport sont déjà à jour.`);
  process.exit(0);
}

fichier.date_maj = stamp;
writeFileSync(chemin, JSON.stringify(fichier, null, 2) + "\n");
console.log(
  `\n✓ data/axes.json : ${bilan.poses} baseline(s) posée(s), ${bilan.remplaces} remplacée(s), ` +
    `${bilan.inchanges} inchangée(s) — stamp ${stamp}.`
);
console.log("  Enchaîner avec : npm run check-data && npm run etat-sources");
