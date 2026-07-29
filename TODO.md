# TODO — Comparateur de programmes 2027

> Liste vivante. On la met à jour dès qu'un élément apparaît. Statuts : ⬜ à faire · 🔄 en cours · ✅ fait · ⏸ en attente/différé.
> Urgence : 🔴 urgent (bloque ou expose) · 🟠 important (prochaine séance) · 🟢 peut attendre.

## Process (à appliquer pour chaque nouveau programme)

- 📌 **Process d'extraction / uniformisation** — suivre `data/PROCESS-extraction.md` pour TOUT nouveau programme. But : que les données de tous les programmes se lisent de façon **identique** au moment de comparer (sinon biais par candidat = viole le test de renversement). Le document est autonome : il gère la vérification de source, la récupération au moindre coût, les PDF multi-colonnes / sites en JavaScript, la fidélité verbatim (QC ≥ 10 échantillons), la structuration JSON et la baseline. ⚠️ Le pilote actuel s'en est bien sorti **parce que le PDF Écologistes est numéroté** ; un programme non numéroté ou scanné demandera la procédure de repli (extraction par colonnes ou réécriture `.md` relue) décrite à l'étape 2.
- ⬜ 🟢 **Enrichir le process** dès qu'un nouveau type de source ou un nouveau piège apparaît (mettre à jour `data/PROCESS-extraction.md`).

## À faire — court terme

- ✅ **Incrément du 2026-07-28 committé** (296d3a6, tag `justice-detaillee-2026-07`) — beaucoup de travail non committé : 64 mesures justice fusionnées, correction fidélité `lfi-police-12`, thématique `justice-civile`, cotag tabac, script `check-data`, filtres UI (panneau repliable, URL partageable, sticky, facettes), agent `extracteur`, enrichissements process, archive PDF EELV. Le projet repose sur git pour la traçabilité : un incrément non committé n'est pas tracé.
- ✅ **Repo GitHub publié** — https://github.com/MMyscile/comparateur-programmes-2027 (public), bouton « Signaler » branché (garde-fou n°4 opérationnel). Prérequis Vercel réglé.
- ✅ **Alertes Dependabot traitées** (2026-07-28) — Next 14.2.15 → 14.2.35 (+ eslint-config-next) : la critique et les vulnérabilités corrigeables en 14.x sont réglées, build OK. Restent 16 « high » corrigées seulement dans Next 15/16 : toutes portent sur des surfaces serveur (middleware, Server Actions, image optimization) absentes d'un export statique — risque réel nul en prod, mais Dependabot continuera de les signaler tant qu'on reste en 14.x. Migration Next 15 à trancher plus tard.
- ✅ **Ménage post-fusion** (2026-07-28) — `data/drafts/*.draft.json` supprimés, `justice.rapport.md` déplacé vers `data/rapports/`, `check-data` passe. Les 2 pilotes conservés.
- ✅ **Choix éditorial assuré** (2026-07-28) — classification multi-étiquetée des 89 sous-sections LFI dans `data/rattachements-lfi.md` (corrige l'oubli de 9.3 dans la matrice v0.2), **validée** : 9 cas-frontières arbitrés un par un par l'éditeur, 4 précédents reportés dans `choix-editoriaux.md` (décisions 12-15, dont thématique `condition-animale` créée dans la taxonomie).
- ✅ **Unité de comparaison fixée** (2026-07-28) — le postulat « Écologistes sans candidat·e » était périmé : Marine Tondelier est candidate déclarée (22/10/2025) et désignée par le parti (08/12/2025, 86 %), sous réserve de la primaire de la gauche unie du **11/10/2026**. L'unité « programme de candidat » du CLAUDE.md tient donc pour les deux ; réserve primaire documentée dans `etat_programme` (fiche mise à jour). ⏰ Rendez-vous après le 11/10/2026 pour acter le résultat de la primaire.
- ✅ **Pilote fiscalité étendu** (2026-07-29, 2ᵉ run de l'agent `extracteur`) — 69 mesures fusionnées (LFI 54→97, EELV 48→74), 18 nouveaux axes fiscalité/finances (grain fin conservé après arbitrage éditeur), 7 thématiques fines ajoutées. QC 10/10 par programme + contrôle exhaustif 70/70. Baselines des 18 axes vérifiées par le nouvel agent `verificateur-sources` (rapport `data/rapports/verification-baselines-2026-07-29.md` : 5 ✅ / 10 ⚠️ / 3 ❌ corrigées avant publication). Rapport d'extraction : `data/rapports/fiscalite-2.rapport.md`. Brouillons supprimés après fusion.
- ⬜ 🟢 **Reliquats fiscalité** — (a) mesure « indicateurs de progrès humain » (LFI 6.3) écartée : à reprendre au chantier **économie** ; (b) confirmer à l'œil nu le chiffre DMTG 21,2 Md€ dans le PDF DGFiP n° 43 (lien dans le rapport de vérification) ; (c) compléter la référence Légifrance de la LFSS 2026 (numéro non retrouvé) ; (d) reste du ch. 3.2 LFI (hors finances locales) non extrait — chantier institutions.
- ⬜ 🟢 **Relancer `verificateur-sources`** après chaque loi de finances / LFSS / statistique majeure (prochaine échéance naturelle : PLF 2027, automne 2026) — l'agent vérifie aussi la cohérence chiffres ↔ URL citée.
- ✅ **PR Dependabot Next 15 testée et mergée** (2026-07-29, commit 8e959cb) — testée dans un worktree isolé (merge main + `npm install` + `npm run build` + vérification navigateur : hydratation des filtres OK, console vide, Méthodologie OK). Next 15.5.21 fonctionne avec React 18.3.1 (pas de saut React 19 nécessaire). `eslint-config-next` aligné en 15.x au passage. Les 16 « high » Next sont corrigées ; `npm audit` signale encore 17 « high » mais ce sont d'autres avis (sharp, postcss embarqué, brace-expansion) — outils de build uniquement, rien de servi en prod statique.
- ✅ **Baselines vérifiées** (2026-07-28) — les 10 axes passés en revue contre l'actualité (dont loi de finances 2026 promulguée le 19/02/2026). 3 corrections : `fisc-fortune` (mention de la nouvelle taxe de 20 % sur les actifs non professionnels des holdings patrimoniales, art. 235 ter C CGI), `fisc-is` (surtaxe grandes entreprises prolongée : taux effectif 30,1 % / 35,3 % au-delà de 1,5 / 3 Md€ de CA), `just-prison` (les chiffres du 01/06/2026 citaient un article sur ceux de février — source remplacée par la statistique mensuelle du ministère de la Justice). `fisc-ir` vérifié exact (181 917 € = indexation +0,9 % LF 2026). Les 6 autres baselines tiennent.
- ✅ **URL publique du programme Écologistes trouvée** — `source_url` renseignés dans `data/candidats/ecologistes.json` avec fragment `#page=N` (pagination physique = pagination imprimée, vérifiée). Réserve : le PDF est derrière un challenge Cloudflare (accès automatisé bloqué, OK depuis un navigateur humain).
- ✅ **2ᵉ méta-thème pilote « Justice, sécurité & libertés »** — chaîne rejouée sur un thème clivant/asymétrique (`data/pilote-justice-securite.md` ; 5 mesures ajoutées par candidat). A prouvé : l'axe rend visible une divergence de *cadrage* à substance identique (drogues : santé vs sécurité) ; multi-étiquetage enfin exercé (4/10 mesures cotaguées).

## À faire — moyen terme

- ✅ **Déployé sur Vercel** (2026-07-29) — production : https://comparateur-programmes-2027.vercel.app (compte `midenzer0`, projet connecté au repo GitHub : chaque push sur `main` redéploie automatiquement).
- ✅ **Page publique « règle de mapping »** (2026-07-29, garde-fou n°2) — `data/choix-editoriaux.md` est rendu tel quel (source unique, chargé au build) en bas de la page Méthodologie via `react-markdown` + `remark-gfm` + `@tailwindcss/typography`, avec lien vers le fichier sur GitHub pour l'historique.
- ⬜ 🟢 **Classification fine** des 66 chapitres EELV et 89 sous-sections LFI → méta-thèmes (multi-étiquetée), alimentant `data/candidats/*.json`.
- ⬜ 🟢 **Normaliser le programme Écologistes** en markdown (même squelette que LFI) — **seulement si** le besoin se confirme au-delà des extractions ciblées. Corrige aussi le trou de traçabilité (EELV n'existe qu'en PDF dans le dépôt) et le problème d'ordre de lecture 2 colonnes.
- ⬜ 🟢 **Versionner en tags datés** (ex. `justice-detaillee-2026-07`) selon le cadrage « versions, pas flux » — commencer au prochain commit.

## Backlog / veille

- ⏸ 🟢 **Surveiller l'arrivée de nouveaux programmes** (autres candidats 2027) et les passer au même socle via l'agent `extracteur`.

## Fait

- ✅ Socle de 15 méta-thèmes neutres (`data/taxonomie.json`) + choix éditoriaux (`data/choix-editoriaux.md`).
- ✅ Captation + vérif (10/10) du programme LFI complet (`data/sources/lfi-avenir-en-commun-2025.md`).
- ✅ Matrice comparative v0.2 (couverture symétrique 15/15 ; v0.1 obsolète).
- ✅ Dépôt git initialisé et horodaté.
- ✅ **Pilote « Fiscalité »** — chaîne complète prouvée sur les 2 programmes (`data/candidats/lfi.json`, `data/candidats/ecologistes.json`, vue comparée `data/pilote-fiscalite.md`). 5 axes alignés, baseline sourcée.
- ✅ Process d'extraction autonome documenté (`data/PROCESS-extraction.md`).
- ✅ **Site Next.js V1 amorcé** (App Router, TS strict, Tailwind, export statique). Charge les JSON, comparaison par thème → axe, filtres candidat/thème + recherche par tag, page Méthodologie, liens sources + baseline, bouton de correction. `npm run dev` / `npm run build`.
- ✅ **Modèle v0.2 « une mesure = une proposition »** — grain corrigé. `data/axes.json` (axe = unité de comparaison, porte la baseline + synthèse d'écart). Axe Police détaillé (8 EELV + 20 LFI).
- ✅ **Agent `extracteur`** (`.claude/agents/extracteur.md`) — applique `PROCESS-extraction.md` → brouillons dans `data/drafts/`, jamais de modification de `data/candidats/*` ni de commit.
- ✅ **4 axes justice détaillés** (2026-07-28, 1er run de l'agent) — 64 mesures fusionnées (LFI 29→54, EELV 17→48), **plus aucune mesure `synthese: true`**. QC 64/64 + contre-vérification éditeur. Corrections au passage : fidélité `lfi-police-12`, thématique `justice-civile` (documentée), cotag tabac `addictions`+`drogues-stupefiants` (documenté), 3 pièges → process, PDF EELV archivé.
- ✅ **Filtres UI améliorés** (2026-07-28) — panneau repliable + chips, indeterminate, segmented control candidat, filtres dans l'URL (partageables), barre sticky, tags cliquables, compteurs de facettes, a11y (aria-live, aria-labelledby).
- ✅ **`npm run check-data`** — validation d'intégrité des données (champs requis, ids uniques, axes/thématiques existants, états valides, brouillons inclus), branchée en `prebuild`.
- ✅ **Agent `verificateur-sources` + multi-sourçage** (2026-07-29) — agent de vérification datée des baselines (hiérarchie Légifrance > administrations > institutions européennes > presse jamais seule, pièges documentés : recodification silencieuse, voté ≠ promulgué, faits négatifs). `source_baseline` accepte désormais une liste d'URLs (règle : un lien par fait affirmé) — types, UI et check-data adaptés.
