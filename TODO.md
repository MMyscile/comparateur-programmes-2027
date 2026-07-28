# TODO — Comparateur de programmes 2027

> Liste vivante. On la met à jour dès qu'un élément apparaît. Statuts : ⬜ à faire · 🔄 en cours · ✅ fait · ⏸ en attente/différé.
> Urgence : 🔴 urgent (bloque ou expose) · 🟠 important (prochaine séance) · 🟢 peut attendre.

## Process (à appliquer pour chaque nouveau programme)

- 📌 **Process d'extraction / uniformisation** — suivre `data/PROCESS-extraction.md` pour TOUT nouveau programme. But : que les données de tous les programmes se lisent de façon **identique** au moment de comparer (sinon biais par candidat = viole le test de renversement). Le document est autonome : il gère la vérification de source, la récupération au moindre coût, les PDF multi-colonnes / sites en JavaScript, la fidélité verbatim (QC ≥ 10 échantillons), la structuration JSON et la baseline. ⚠️ Le pilote actuel s'en est bien sorti **parce que le PDF Écologistes est numéroté** ; un programme non numéroté ou scanné demandera la procédure de repli (extraction par colonnes ou réécriture `.md` relue) décrite à l'étape 2.
- ⬜ 🟢 **Enrichir le process** dès qu'un nouveau type de source ou un nouveau piège apparaît (mettre à jour `data/PROCESS-extraction.md`).

## À faire — court terme

- ✅ **Incrément du 2026-07-28 committé** (296d3a6, tag `justice-detaillee-2026-07`) — beaucoup de travail non committé : 64 mesures justice fusionnées, correction fidélité `lfi-police-12`, thématique `justice-civile`, cotag tabac, script `check-data`, filtres UI (panneau repliable, URL partageable, sticky, facettes), agent `extracteur`, enrichissements process, archive PDF EELV. Le projet repose sur git pour la traçabilité : un incrément non committé n'est pas tracé.
- ✅ **Repo GitHub publié** — https://github.com/MMyscile/comparateur-programmes-2027 (public), bouton « Signaler » branché (garde-fou n°4 opérationnel). Prérequis Vercel réglé.
- ⬜ 🟠 **Traiter les alertes Dependabot** — GitHub signale 34 vulnérabilités sur les dépendances (1 critique, 13 hautes ; probablement Next 14.2.15 et transitive) : `npm audit` + mise à jour de Next vers le dernier patch 14.x.
- ⬜ 🟠 **Ménage post-fusion** — supprimer `data/drafts/*.draft.json` (doublons des données fusionnées ; risque d'édition par erreur + `check-data` les valide en prebuild, donc un futur renommage de thématique casserait le build sur des fichiers morts) ; déplacer `justice.rapport.md` vers `data/rapports/`. Garder les 2 pilotes (`pilote-fiscalite.md`, `pilote-justice-securite.md`) : archives du raisonnement, git les trace.
- ⬜ 🟠 **S'assurer du choix éditorial** — revoir et valider les décisions de rattachement (cf. `data/choix-editoriaux.md`) ; en particulier repasser le mapping *provisoire* des sous-sections LFI de la matrice v0.2 en classification propre **multi-étiquetée**.
- ⬜ 🟠 **Fixer l'unité de comparaison** — trancher : programme de candidat vs plateforme de parti. Écologistes = plateforme sans candidat·e désigné·e ; LFI = candidat déclaré (Mélenchon). À documenter dans le cadrage.
- ⬜ 🟠 **Étendre le pilote fiscalité** aux mesures non traitées (fraude, dette, collectivités, succession…) — bon candidat pour le 2ᵉ run de l'agent `extracteur`.
- ⬜ 🟠 **Baseline « ce qui est fait »** — vérifier que chaque axe a une baseline chiffrée et sourcée à jour (INSEE, budget, loi votée), jamais de qualificatif politique.
- ✅ **URL publique du programme Écologistes trouvée** — `source_url` renseignés dans `data/candidats/ecologistes.json` avec fragment `#page=N` (pagination physique = pagination imprimée, vérifiée). Réserve : le PDF est derrière un challenge Cloudflare (accès automatisé bloqué, OK depuis un navigateur humain).
- ✅ **2ᵉ méta-thème pilote « Justice, sécurité & libertés »** — chaîne rejouée sur un thème clivant/asymétrique (`data/pilote-justice-securite.md` ; 5 mesures ajoutées par candidat). A prouvé : l'axe rend visible une divergence de *cadrage* à substance identique (drogues : santé vs sécurité) ; multi-étiquetage enfin exercé (4/10 mesures cotaguées).

## À faire — moyen terme

- ⬜ 🟢 **Déployer sur Vercel** (statique, gratuit) — dès que le repo est publié.
- ⬜ 🟢 **Page publique « règle de mapping »** (garde-fou n°2) — intégrer le contenu de `data/choix-editoriaux.md` à la page Méthodologie (seule pièce des docs internes qui a vocation à être affichée sur le site ; le reste est public via le repo GitHub, ce qui suffit à la traçabilité).
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
