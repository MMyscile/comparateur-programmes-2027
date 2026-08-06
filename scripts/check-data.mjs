#!/usr/bin/env node
/**
 * Contrôle d'intégrité des données (lancé en prebuild + à la main : npm run check-data).
 *
 * Pourquoi : TypeScript ne valide pas le JSON au runtime — une donnée qui dérive du
 * schéma v0.2 (src/lib/types.ts, la référence) passerait silencieusement au build.
 * Ce script vérifie les champs requis ET l'intégrité référentielle entre fichiers.
 *
 * Valide aussi data/drafts/*.draft.json (brouillons de l'agent extracteur) s'il y en a.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");
const lire = (p) => JSON.parse(readFileSync(join(racine, p), "utf8"));

const erreurs = [];
const err = (fichier, msg) => erreurs.push(`${fichier} — ${msg}`);

// --- Référentiels ---------------------------------------------------------
const taxonomie = lire("data/taxonomie.json");
const axes = lire("data/axes.json").axes;

const themesIds = new Set(taxonomie.themes.map((t) => t.id));
const thematiquesIds = new Set(
  taxonomie.themes.flatMap((t) => (t.thematiques ?? []).map((th) => th.id))
);
const axesIds = new Set(axes.map((a) => a.id));
const ETATS = new Set(["mur", "ebauche", "perime", "pas-encore"]);

// --- Axes -----------------------------------------------------------------
for (const a of axes) {
  const f = `data/axes.json [${a.id}]`;
  if (!themesIds.has(a.theme)) err(f, `theme inconnu : "${a.theme}"`);
  for (const champ of ["label", "baseline_reel", "ecart_synthese"])
    if (!a[champ]) err(f, `champ manquant ou vide : ${champ}`);
  // source_baseline : une URL (string) ou une liste d'URLs — un lien par fait affirmé.
  const sources = Array.isArray(a.source_baseline) ? a.source_baseline : [a.source_baseline];
  if (sources.length === 0 || sources.some((s) => typeof s !== "string" || !s.startsWith("http")))
    err(f, "source_baseline : URL(s) http(s) requise(s), champ manquant, vide ou invalide");
  // baseline_verifiee (optionnel) : date AAAA-MM-JJ du dernier passage du vérificateur.
  if (a.baseline_verifiee != null && !/^\d{4}-\d{2}-\d{2}$/.test(a.baseline_verifiee))
    err(f, `baseline_verifiee : date AAAA-MM-JJ attendue (reçu : "${a.baseline_verifiee}")`);
}

// --- Mesures (candidats + brouillons) -------------------------------------
const REQUIS = [
  "id", "candidat", "axe", "thematiques", "verbatim",
  "source_url", "rubrique_origine", "date_publication", "etat_maturite",
];

function verifierMesures(fichier, mesures, { brouillon = false, candidatAttendu } = {}) {
  const idsVus = new Set();
  for (const m of mesures) {
    const f = `${fichier} [${m.id ?? "sans id"}]`;
    for (const champ of REQUIS)
      if (m[champ] == null || m[champ] === "" || (Array.isArray(m[champ]) && m[champ].length === 0))
        err(f, `champ manquant ou vide : ${champ}`);
    if (m.id && idsVus.has(m.id)) err(f, "id en double");
    idsVus.add(m.id);
    if (candidatAttendu && m.candidat !== candidatAttendu)
      err(f, `candidat "${m.candidat}" ≠ fichier "${candidatAttendu}"`);
    if (m.axe && !axesIds.has(m.axe))
      err(f, `axe inconnu : "${m.axe}"${brouillon ? " (à créer dans data/axes.json au moment de la fusion ?)" : ""}`);
    for (const th of m.thematiques ?? [])
      if (!thematiquesIds.has(th)) err(f, `thematique inconnue : "${th}" (niveau fin requis, pas le méta-thème)`);
    if (m.etat_maturite && !ETATS.has(m.etat_maturite))
      err(f, `etat_maturite invalide : "${m.etat_maturite}"`);
    if (brouillon && m.synthese)
      err(f, "synthese:true interdit en sortie d'extraction (PROCESS §5)");
    // Une note ne doit jamais redevenir le tampon que la décision n° 31 a retiré :
    // le fait et sa source, jamais le verdict.
    const VERDICT = /périmé|dépassé|obsolète|caduque?|plus d'actualité/i;
    // …ni une glose sur ce que le candidat « veut dire » : juger un mot du candidat
    // contre sa propre définition est ce que le principe fondateur interdit (n° 31).
    const GLOSE = /en réalité|en fait,|veut dire|entend par|il faut comprendre|autrement dit/i;

    // fait_posterieur (optionnel, décision n° 31) : un fait daté et sourcé, POSTÉRIEUR
    // à la publication. La contrainte de date n'est pas décorative — c'est elle qui
    // aurait bloqué l'erreur du 2026-08-04 (un fait de 2023 opposé à un texte de 2025).
    if (m.fait_posterieur != null) {
      const fp = m.fait_posterieur;
      const g = `${f} fait_posterieur`;
      if (!fp.texte) err(g, "champ manquant ou vide : texte");
      if (typeof fp.source_url !== "string" || !fp.source_url.startsWith("http"))
        err(g, "source_url : URL http(s) requise — un fait sans source ne s'affiche pas");
      if (!/^\d{4}-\d{2}-\d{2}$/.test(fp.date ?? ""))
        err(g, `date : AAAA-MM-JJ attendu (reçu : "${fp.date}")`);
      else if (m.date_publication && fp.date <= m.date_publication)
        err(
          g,
          `date ${fp.date} n'est pas postérieure à la publication (${m.date_publication})` +
            " — un fait antérieur relève de contexte_lecture (décision n° 32)"
        );
      if (VERDICT.test(fp.texte ?? ""))
        err(g, "texte : énoncer le fait, pas le verdict (décision n° 31)");
    }

    // contexte_lecture (optionnel, décision n° 32) : un fait ANTÉRIEUR sans lequel la
    // proposition se lit de travers. Pas de contrainte de date — c'est sa raison d'être —
    // donc les deux autres garde-fous portent seuls : source obligatoire, et ni verdict
    // ni glose sur l'intention du candidat.
    if (m.contexte_lecture != null) {
      const cl = m.contexte_lecture;
      const g = `${f} contexte_lecture`;
      if (!cl.texte) err(g, "champ manquant ou vide : texte");
      // Liste acceptée : « un lien par fait affirmé », comme pour source_baseline.
      const urls = [].concat(cl.source_url ?? []);
      if (!urls.length) err(g, "source_url : URL requise — un fait sans source ne s'affiche pas");
      for (const u of urls)
        if (typeof u !== "string" || !u.startsWith("http"))
          err(g, `source_url : URL http(s) attendue (reçu : ${JSON.stringify(u)})`);
      if ("date" in cl)
        err(g, "date : champ interdit ici — un fait daté postérieur relève de fait_posterieur");
      if (VERDICT.test(cl.texte ?? ""))
        err(g, "texte : énoncer le fait, pas le verdict (décision n° 31)");
      if (GLOSE.test(cl.texte ?? ""))
        err(g, "texte : pas de glose sur l'intention du candidat (décision n° 32)");
    }
  }
  return idsVus;
}

const tousIds = new Set();
for (const fichier of readdirSync(join(racine, "data/candidats"))) {
  if (!fichier.endsWith(".json")) continue;
  const d = lire(`data/candidats/${fichier}`);
  const attendu = d.candidat?.id ?? fichier.replace(/\.json$/, "");
  const ids = verifierMesures(`data/candidats/${fichier}`, d.mesures ?? [], { candidatAttendu: attendu });
  for (const id of ids) {
    if (tousIds.has(id)) err(`data/candidats/${fichier}`, `id "${id}" déjà utilisé dans un autre fichier`);
    tousIds.add(id);
  }
}

const dossierDrafts = join(racine, "data/drafts");
if (existsSync(dossierDrafts)) {
  for (const fichier of readdirSync(dossierDrafts)) {
    if (!fichier.endsWith(".draft.json")) continue;
    const d = lire(`data/drafts/${fichier}`);
    const mesures = Array.isArray(d) ? d : d.mesures ?? [];
    verifierMesures(`data/drafts/${fichier}`, mesures, { brouillon: true });
  }
}

// --- Glossaire ------------------------------------------------------------
if (existsSync(join(racine, "data/glossaire.json"))) {
  const termes = lire("data/glossaire.json").termes ?? [];
  const vus = new Set();
  for (const t of termes) {
    const f = `data/glossaire.json [${t.terme ?? "sans terme"}]`;
    if (!t.terme) err(f, "champ manquant ou vide : terme");
    if (!t.definition) err(f, "champ manquant ou vide : definition");
    const cle = (t.terme ?? "").toLowerCase();
    if (vus.has(cle)) err(f, "terme en double");
    vus.add(cle);
    // source_url accepte une liste, même règle que source_baseline : un lien par
    // fait affirmé. Cas fondateur « flat tax » : le surnom et le taux 2026 n'ont
    // pas de source commune.
    if (t.source_url != null) {
      const urls = [].concat(t.source_url);
      if (!urls.length) err(f, "source_url : liste vide — retirer le champ ou le renseigner");
      for (const u of urls)
        if (typeof u !== "string" || !u.startsWith("http"))
          err(f, `source_url : URL http(s) attendue (reçu : ${JSON.stringify(u)})`);
    }
    // contextes (optionnel) : portée de l'entrée = ids de mesures existantes.
    // Une portée qui pointe vers une mesure disparue rendrait le terme invisible
    // sans erreur visible — d'où la vérification référentielle.
    if (t.contextes != null) {
      if (!Array.isArray(t.contextes) || t.contextes.length === 0)
        err(f, "contextes : liste non vide d'ids de mesures attendue si présent (absent = portée globale)");
      else
        for (const id of t.contextes)
          if (typeof id !== "string" || !tousIds.has(id))
            err(f, `contextes : mesure inconnue "${id}"`);
    }
  }
}

// --- Liste d'attente (data/attente.json) ----------------------------------
// Reliquats et décisions à réexaminer (décision éditoriale n° 26). Le risque qu'on couvre ici :
// une entrée dont le déclencheur pointe vers un méta-thème inexistant ne serait jamais affichée
// par `npm run attente` — elle disparaîtrait sans erreur visible, ce qui est précisément le
// travers que cette liste corrige.
if (existsSync(join(racine, "data/attente.json"))) {
  const entrees = lire("data/attente.json").entrees ?? [];
  const DECLENCHEURS = new Set(["chantier", "nouveau-candidat", "avant-publication", "date"]);
  const NATURES = new Set(["reliquat", "a-revoir"]);
  const idsVus = new Set();
  for (const e of entrees) {
    const f = `data/attente.json [${e.id ?? "sans id"}]`;
    for (const champ of ["id", "nature", "objet", "declencheur", "date_inscription"])
      if (!e[champ]) err(f, `champ manquant ou vide : ${champ}`);
    if (e.id && idsVus.has(e.id)) err(f, "id en double");
    idsVus.add(e.id);
    if (e.nature && !NATURES.has(e.nature)) err(f, `nature invalide : "${e.nature}"`);
    if (e.declencheur && !DECLENCHEURS.has(e.declencheur))
      err(f, `declencheur invalide : "${e.declencheur}"`);
    if (e.declencheur === "chantier" && !themesIds.has(e.chantier))
      err(f, `chantier inconnu ou manquant : "${e.chantier}" (méta-thème de data/taxonomie.json attendu)`);
    if (e.declencheur === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(e.date_echeance ?? ""))
      err(f, "date_echeance : date AAAA-MM-JJ requise quand declencheur = date");
    if (e.date_inscription && !/^\d{4}-\d{2}-\d{2}$/.test(e.date_inscription))
      err(f, `date_inscription : date AAAA-MM-JJ attendue (reçu : "${e.date_inscription}")`);
    // Un reliquat sans verbatim obligerait à rouvrir la source : c'est ce qu'on veut éviter.
    if (e.nature === "reliquat" && !e.verbatim)
      err(f, "verbatim requis pour un reliquat (sinon il faut relire la source du programme)");
  }
}

// --- Verdict --------------------------------------------------------------
if (erreurs.length > 0) {
  console.error(`✗ check-data : ${erreurs.length} erreur(s)\n`);
  for (const e of erreurs) console.error("  • " + e);
  process.exit(1);
}
console.log("✓ check-data : données cohérentes (taxonomie, axes, mesures, brouillons).");
