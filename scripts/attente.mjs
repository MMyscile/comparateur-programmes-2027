#!/usr/bin/env node
/**
 * Liste d'attente du projet : affiche ce qui est dû (npm run attente).
 *
 * Pourquoi : deux angles morts que rien n'outillait (décision éditoriale n° 26).
 *   - les *reliquats* (propositions repérées, non extraites) vivaient en prose dans de longs
 *     rapports, sans qu'aucun script ne les suive ;
 *   - les *à-revoir* n'avaient que les lignes « Pour revenir dessus » du journal, qui disent
 *     comment revenir mais jamais quand.
 *
 * Chaque entrée porte un déclencheur. Sans argument, le script affiche tout, groupé par
 * déclencheur, en signalant les échéances calendaires dépassées. Avec un id de méta-thème en
 * argument, il affiche ce que l'ouverture de ce chantier rend exigible.
 *
 *   npm run attente                       → tout
 *   npm run attente -- sante              → ce que le chantier Santé rend exigible
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");
const fichier = join(racine, "data/attente.json");

if (!existsSync(fichier)) {
  console.log("Aucune liste d'attente (data/attente.json absent).");
  process.exit(0);
}

const { entrees = [] } = JSON.parse(readFileSync(fichier, "utf8"));
const taxonomie = JSON.parse(readFileSync(join(racine, "data/taxonomie.json"), "utf8"));
const libelleTheme = new Map(taxonomie.themes.map((t) => [t.id, t.label]));

const chantierDemande = process.argv[2];
const aujourdhui = new Date().toISOString().slice(0, 10);

const NATURE = { reliquat: "reliquat", "a-revoir": "à revoir" };

function afficher(titre, lot) {
  if (lot.length === 0) return;
  console.log(`\n${titre}`);
  for (const e of lot) {
    const nature = NATURE[e.nature] ?? e.nature;
    console.log(`  • [${nature}] ${e.objet}`);
    if (e.chantier) console.log(`      chantier : ${libelleTheme.get(e.chantier) ?? e.chantier}`);
    if (e.date_echeance) console.log(`      échéance : ${e.date_echeance}`);
    if (e.candidat) console.log(`      candidat : ${e.candidat}`);
    if (e.reference) console.log(`      voir : ${e.reference}`);
  }
}

// --- Mode « ce chantier rend exigible quoi ? » -----------------------------
if (chantierDemande) {
  if (!libelleTheme.has(chantierDemande)) {
    console.error(`✗ Méta-thème inconnu : "${chantierDemande}"`);
    console.error(`  Attendu l'un de : ${[...libelleTheme.keys()].join(", ")}`);
    process.exit(1);
  }
  const dus = entrees.filter((e) => e.chantier === chantierDemande);
  console.log(`\nChantier « ${libelleTheme.get(chantierDemande)} » — ${dus.length} entrée(s) en attente`);
  afficher("À traiter :", dus);
  if (dus.length === 0) console.log("  (rien en attente pour ce chantier)");
  console.log("");
  process.exit(0);
}

// --- Mode complet ----------------------------------------------------------
const echues = entrees.filter((e) => e.date_echeance && e.date_echeance <= aujourdhui);
const avantPublication = entrees.filter((e) => e.declencheur === "avant-publication");
const nouveauCandidat = entrees.filter((e) => e.declencheur === "nouveau-candidat");
const parChantier = new Map();
for (const e of entrees.filter((x) => x.declencheur === "chantier")) {
  if (!parChantier.has(e.chantier)) parChantier.set(e.chantier, []);
  parChantier.get(e.chantier).push(e);
}
const dates = entrees.filter((e) => e.declencheur === "date" && !echues.includes(e));

console.log(`Liste d'attente — ${entrees.length} entrée(s)`);
console.log(
  `  ${entrees.filter((e) => e.nature === "reliquat").length} reliquat(s) · ` +
    `${entrees.filter((e) => e.nature === "a-revoir").length} à revoir`
);

if (echues.length > 0) afficher("⚠ ÉCHÉANCE DÉPASSÉE", echues);
afficher("À traiter avant de publier l'incrément en cours :", avantPublication);
afficher("À reprendre à l'ajout d'un nouveau programme :", nouveauCandidat);

for (const [chantier, lot] of [...parChantier].sort()) {
  afficher(`Chantier « ${libelleTheme.get(chantier) ?? chantier} » :`, lot);
}

afficher("À échéance calendaire :", dates);
console.log("");
