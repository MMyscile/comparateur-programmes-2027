#!/usr/bin/env node
/**
 * État de vérification des baselines (npm run etat-sources).
 *
 * Réponse en une commande à « où en est-on, que reste-t-il à (re)vérifier ? » au
 * démarrage d'une session — sans recroiser les rapports datés à la main.
 *
 * - « À vérifier »   : axe sans `baseline_verifiee` (jamais passé par l'agent).
 * - « À re-vérifier » : axe dont la date est ANTÉRIEURE au dernier événement qui
 *   peut périmer une baseline (loi de finances / LFSS). Mets DERNIER_EVENEMENT à jour
 *   après chaque loi majeure : toutes les baselines plus anciennes seront signalées.
 */
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Dernier événement susceptible de périmer une baseline (à actualiser à chaque loi de finances / LFSS).
const DERNIER_EVENEMENT = { date: "2026-02-19", nom: "loi de finances 2026" };

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");
const axes = JSON.parse(readFileSync(join(racine, "data/axes.json"), "utf8")).axes;

const jamais = axes.filter((a) => !a.baseline_verifiee);
const perimes = axes.filter((a) => a.baseline_verifiee && a.baseline_verifiee < DERNIER_EVENEMENT.date);
const ok = axes.filter((a) => a.baseline_verifiee && a.baseline_verifiee >= DERNIER_EVENEMENT.date);

const pc = (n) => `${n}/${axes.length}`;
console.log(`\nÉtat de vérification des baselines — ${axes.length} axes`);
console.log(`Référence de péremption : ${DERNIER_EVENEMENT.nom} (${DERNIER_EVENEMENT.date})\n`);
console.log(`  ✅ à jour        ${pc(ok.length)}`);
console.log(`  🔁 à re-vérifier ${pc(perimes.length)} (vérifiés avant l'événement de référence)`);
console.log(`  ⬜ jamais vérifié ${pc(jamais.length)}\n`);

const liste = (titre, arr) => {
  if (!arr.length) return;
  console.log(titre);
  for (const a of arr)
    console.log(`   - ${a.id.padEnd(24)} ${a.baseline_verifiee ?? "—"}  ${a.label}`);
  console.log("");
};
liste("🔁 À RE-VÉRIFIER :", perimes);
liste("⬜ JAMAIS VÉRIFIÉ :", jamais);

if (!perimes.length && !jamais.length)
  console.log("Tout est à jour. Relancer l'agent verificateur-sources après la prochaine loi de finances / LFSS.\n");
