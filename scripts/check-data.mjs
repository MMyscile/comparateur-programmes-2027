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
    if (t.source_url != null && (typeof t.source_url !== "string" || !t.source_url.startsWith("http")))
      err(f, "source_url : URL http(s) attendue si présente");
  }
}

// --- Verdict --------------------------------------------------------------
if (erreurs.length > 0) {
  console.error(`✗ check-data : ${erreurs.length} erreur(s)\n`);
  for (const e of erreurs) console.error("  • " + e);
  process.exit(1);
}
console.log("✓ check-data : données cohérentes (taxonomie, axes, mesures, brouillons).");
