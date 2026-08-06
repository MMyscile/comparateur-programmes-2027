#!/usr/bin/env node
/**
 * Contrôle des liens publiés (npm run verif-liens [-- options]).
 *
 * Pourquoi : `baseline_verifiee` atteste qu'un passage a eu lieu, pas que le fait
 * affirmé se trouve dans la page citée. Le balayage du 2026-08-02 a trouvé deux
 * liens morts sur des axes pourtant stampés « vérifiés », et `fisc-tva` citait
 * une fiche qui ne traitait pas les taux affirmés. Le défaut à traquer n'est donc
 * pas le lien mort : c'est le **lien hors sujet**.
 *
 * Trois pièges connus, tous rencontrés le 2026-08-05, et tous câblés ici — sans
 * eux le contrôle produirait surtout des faux positifs :
 *  1. `legifrance.gouv.fr` renvoie 403 aux requêtes automatisées **même quand la
 *     page existe**. Jamais « mort » : `npm run legifrance` fait foi.
 *  2. `vie-publique.fr` rend en JavaScript (coquille de ~200 signes) **et répond
 *     200 sur tout**, y compris sur une URL inexistante. Son code HTTP ne prouve
 *     rien, et une page vide n'est pas un lien mort.
 *  3. On cherche dans le **HTML complet**, jamais dans le texte visible :
 *     `innerText` masque les sections repliées (`loi Attal`, déclarée fautive à
 *     tort pour cette raison).
 *
 * D'où trois états, et non deux : ok · mort · invérifiable. Plus un signalement
 * « hors sujet ? » qui est une **piste**, pas un verdict : à un lien répond un
 * fait, et seul l'éditeur peut dire lequel.
 *
 * Ce script ne remplace pas `npm run verif-miroirs` (correspondance PDF ↔ miroir),
 * ni l'agent `verificateur-sources` (fraîcheur et exactitude des faits).
 */
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");

// --- domaines qui ne se laissent pas contrôler par requête -------------------
const NON_TESTABLES = [
  ["legifrance.gouv.fr", "403 systématique même page existante → npm run legifrance"],
  ["vie-publique.fr", "rendu JavaScript et 200 sur tout → navigateur réel"],
  ["economie.gouv.fr", "refuse l'automatisation → navigateur réel"],
  ["interieur.gouv.fr", "refuse l'automatisation → navigateur réel"],
  ["budget.gouv.fr", "refuse l'automatisation → navigateur réel"],
  ["eur-lex.europa.eu", "202 à corps vide sur tout, même à curl → navigateur réel"],
];

// Un lien européen peut être vivant, à jour, et servir de l'ANGLAIS : le suffixe
// `_fr` d'une URL `ec.europa.eu` ne garantit rien. Trois entrées de glossaire en
// ont été victimes (politique commune de la pêche, MACF, Mercosur), et EUR-Lex
// sert l'anglais par défaut quand aucune langue n'est demandée.
const MOTS_FR = ["le", "la", "les", "des", "pour", "dans", "est", "sur", "qui", "aux"];
const MOTS_EN = ["the", "of", "and", "for", "with", "this", "are", "that", "from"];
const compteMots = (t, mots) =>
  mots.reduce((n, m) => n + (t.match(new RegExp(`\\b${m}\\b`, "gi")) || []).length, 0);

/** Renvoie true si la page sert manifestement de l'anglais. */
function servDeLAnglais(html) {
  const t = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<[^>]+>/g, " ");
  const fr = compteMots(t, MOTS_FR);
  const en = compteMots(t, MOTS_EN);
  return en > 40 && en > fr * 1.3;
}

/** Les URLs qui demandent explicitement l'anglais, ou n'en demandent aucune. */
const ANGLAIS_DANS_L_URL = /eur-lex\.europa\.eu\/.*(\/oj\/eng|:en:|\/oj$)/;

const args = process.argv.slice(2);
const opt = (n) => args.find((a) => a.startsWith(`--${n}=`))?.split("=").slice(1).join("=");
const filtre = opt("seulement");
const quoi = args.includes("--axes") ? "axes" : args.includes("--glossaire") ? "glossaire" : "tout";
const paralleles = Number(opt("paralleles") ?? 6);

if (args.includes("--aide")) {
  console.log(`usage : npm run verif-liens [-- options]

  --axes | --glossaire    ne contrôler qu'une source (défaut : les deux)
  --seulement=<motif>     ne garder que les entrées dont l'id/le terme contient <motif>
  --paralleles=N          requêtes simultanées (défaut 6)
`);
  process.exit(0);
}

// --- normalisation ----------------------------------------------------------
const sansAccents = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const norm = (s) => sansAccents(s).replace(/[’']/g, "'").toLowerCase();
/** « 63,2 GW », « 1 850 000 » : les espaces d'un nombre varient d'une page à l'autre. */
const collerLesNombres = (s) => s.replace(/(\d)[\s  ](?=\d)/g, "$1");

/**
 * Ce qu'on s'attend à retrouver dans la page. Pour un terme de glossaire, le terme.
 * Pour une baseline, ses faits chiffrés : ce sont eux qui distinguent une source
 * qui porte le fait d'une source qui parle vaguement du sujet.
 */
function attendus(texte) {
  const t = collerLesNombres(texte);
  const jetons = new Set();
  for (const m of t.matchAll(/n°\s?(\d{4}-\d+)/g)) jetons.add(m[1]);
  for (const m of t.matchAll(/(\d+(?:[.,]\d+)?)\s?(%|Md€|M€|GW|TWh|MW|km|ha|m³)/g))
    jetons.add(m[1].replace(",", "."));
  for (const m of t.matchAll(/\b((?:19|20)\d{2})\b/g)) jetons.add(m[1]);
  return [...jetons];
}

function contient(html, cles) {
  const h = collerLesNombres(norm(html));
  return cles.some((c) => h.includes(norm(c).replace(",", ".")) || h.includes(norm(c)));
}

/**
 * Pour un terme de glossaire, la comparaison littérale ne vaut rien : la page
 * officielle écrit « stratégie nationale bas-carbone » là où le verbatim écrit
 * « Stratégie Nationale Bas Carbone », et « de la pêche » là où l'autre programme
 * écrit « des pêches ». On compare donc des mots réduits (sans accent, sans
 * pluriel, ponctuation aplatie) — et on exige qu'ils soient TOUS présents.
 */
const motsReduits = (s) =>
  norm(s)
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((m) => m.length >= 4)
    .map((m) => m.replace(/s$/, ""));

function porteLeTerme(html, terme) {
  const attendus = motsReduits(terme);
  if (!attendus.length) return contient(html, [terme]);
  const presents = new Set(motsReduits(html));
  return attendus.every((m) => presents.has(m));
}

// --- collecte ---------------------------------------------------------------
const cibles = [];
if (quoi !== "glossaire") {
  const axes = JSON.parse(readFileSync(join(racine, "data/axes.json"), "utf8")).axes;
  for (const a of axes) {
    const urls = Array.isArray(a.source_baseline)
      ? a.source_baseline
      : a.source_baseline
        ? [a.source_baseline]
        : [];
    for (const url of urls)
      cibles.push({ ou: "axe", cle: a.id, url, attendus: attendus(a.baseline_reel ?? "") });
  }
}
if (quoi !== "axes") {
  const termes = JSON.parse(readFileSync(join(racine, "data/glossaire.json"), "utf8")).termes;
  for (const t of termes)
    if (t.source_url)
      cibles.push({ ou: "glossaire", cle: t.terme, url: t.source_url, attendus: [t.terme] });
}
const aFaire = filtre ? cibles.filter((c) => c.cle.includes(filtre)) : cibles;
if (!aFaire.length) {
  console.error("Aucune cible — vérifier --seulement.");
  process.exit(1);
}

// --- contrôle ---------------------------------------------------------------
const ENTETES = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
  "Accept-Language": "fr-FR,fr;q=0.9",
};

async function controler(c) {
  if (ANGLAIS_DANS_L_URL.test(c.url))
    return { ...c, etat: "anglais", motif: "l'URL demande l'anglais (ou aucune langue)" };
  const bloque = NON_TESTABLES.find(([d]) => c.url.includes(d));
  if (bloque) return { ...c, etat: "invérifiable", motif: bloque[1] };
  try {
    const r = await fetch(c.url, {
      redirect: "follow",
      headers: ENTETES,
      signal: AbortSignal.timeout(30000),
    });
    // 401/403/429 = refus d'automatisation, pas page absente. Les confondre, c'est
    // l'erreur que `legifrance.gouv.fr` a déjà value au projet. Seule l'absence
    // (404/410) est un lien mort.
    if ([401, 403, 429].includes(r.status))
      return { ...c, etat: "invérifiable", motif: `HTTP ${r.status} — refus d'automatisation` };
    if (r.status === 404 || r.status === 410)
      return { ...c, etat: "mort", motif: `HTTP ${r.status}`, statut: r.status };
    if (r.status >= 400)
      return { ...c, etat: "invérifiable", motif: `HTTP ${r.status}` };
    const type = r.headers.get("content-type") ?? "";
    if (type.includes("pdf"))
      return { ...c, etat: "invérifiable", motif: "PDF — contrôle du contenu à faire à part" };
    const html = await r.text();
    if (html.length < 3000)
      return { ...c, etat: "invérifiable", motif: `corps de ${html.length} signes (rendu JS ?)` };
    if (servDeLAnglais(html))
      return { ...c, etat: "anglais", motif: "page vivante mais servie en anglais" };
    if (c.ou === "glossaire")
      return porteLeTerme(html, c.cle)
        ? { ...c, etat: "ok" }
        : { ...c, etat: "hors-sujet ?", motif: "le terme défini n'est pas dans la page" };
    if (!c.attendus.length)
      return { ...c, etat: "invérifiable", motif: "aucun fait chiffré à chercher" };
    return contient(html, c.attendus)
      ? { ...c, etat: "ok" }
      : { ...c, etat: "hors-sujet ?", motif: `aucun de ${c.attendus.length} fait(s) retrouvé` };
  } catch (e) {
    // Un échec de requête n'est JAMAIS un lien mort : seul un 404/410 prouve
    // l'absence. Constaté le 2026-08-06 — deux PDF Agreste faisaient échouer
    // `fetch` alors que `curl` les sert en 200. Accuser la page d'un défaut du
    // client, c'est envoyer l'éditeur réparer ce qui n'est pas cassé.
    return { ...c, etat: "invérifiable", motif: `requête échouée : ${String(e?.message ?? e).slice(0, 60)}` };
  }
}

const resultats = [];
let curseur = 0;
await Promise.all(
  Array.from({ length: Math.min(paralleles, aFaire.length) }, async () => {
    while (curseur < aFaire.length) {
      const c = aFaire[curseur++];
      const r = await controler(c);
      resultats.push(r);
      const marque = { ok: "·", mort: "✗", "hors-sujet ?": "?", invérifiable: "~", anglais: "en" }[r.etat];
      process.stdout.write(marque);
    }
  })
);
process.stdout.write("\n");

// --- rapport ----------------------------------------------------------------
const par = (e) => resultats.filter((r) => r.etat === e);
const montrer = (titre, liste, note) => {
  if (!liste.length) return;
  console.log(`\n${titre} (${liste.length})${note ? `\n${note}` : ""}`);
  for (const r of liste.sort((a, b) => a.cle.localeCompare(b.cle)))
    console.log(`  ${r.ou === "axe" ? "axe" : "glo"} ${r.cle.padEnd(30)} ${r.motif ?? ""}\n      ${r.url}`);
};

montrer("✗ LIENS MORTS", par("mort"), "  Le seul état qui exige une correction.");
montrer(
  "en SERVIS EN ANGLAIS — un site en français ne doit pas y renvoyer",
  par("anglais"),
  "  Le suffixe `_fr` d'une URL europa.eu ne garantit rien, et EUR-Lex sert\n" +
    "  l'anglais quand aucune langue n'est demandée (`?locale=fr`, `/oj/fra`, `:fr:`)."
);
montrer(
  "? À REGARDER — le fait affirmé n'a pas été retrouvé dans la page",
  par("hors-sujet ?"),
  "  Piste, pas verdict : la page peut porter le fait sous une autre écriture,\n" +
    "  ou le lien peut répondre à un autre fait de la baseline."
);
montrer(
  "~ INVÉRIFIABLES — à ouvrir à la main",
  par("invérifiable"),
  "  Ni bons ni mauvais : le contrôle automatique ne peut rien en dire."
);

console.log(
  `\n${resultats.length} liens : ${par("ok").length} ok · ${par("mort").length} morts · ` +
    `${par("anglais").length} en anglais · ${par("hors-sujet ?").length} à regarder · ` +
    `${par("invérifiable").length} invérifiables`
);
process.exit(par("mort").length ? 1 : 0);
