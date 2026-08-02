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
 *
 * Le script ne vérifie pas les faits — c'est le travail de l'agent — et ne teste
 * pas les URLs. Après application : `npm run check-data` puis `npm run etat-sources`.
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
const stamp = opt("date") ?? new Date().toISOString().slice(0, 10);
const remplacables = new Set((opt("remplacer") ?? "").split(",").filter(Boolean));

if (!rapport) {
  console.error(`usage : npm run appliquer-baselines -- <rapport.md> [options]

  --essai                 n'écrit rien, montre ce qui changerait
  --date=AAAA-MM-JJ       date posée dans baseline_verifiee (défaut : aujourd'hui)
  --remplacer=id1,id2     autorise l'écrasement d'une baseline existante différente
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
      for (const m of ligne.matchAll(/\((https?:\/\/[^)\s]+)\)/g))
        if (!urls.includes(m[1])) urls.push(m[1]);
    } else if (urls.length && ligne.trim() !== "") break;
  }
  if (!urls.length) echec(`${id} : aucune URL dans le bloc « Sources »`);

  propositions.push({ id, baseline, urls });
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
