# TODO — Comparateur de programmes 2027

> Liste vivante. On la met à jour dès qu'un élément apparaît. Statuts : ⬜ à faire · 🔄 en cours · ✅ fait · ⏸ en attente/différé.

## Process (à appliquer pour chaque nouveau programme)

- 📌 **Process d'extraction / uniformisation** — suivre `data/PROCESS-extraction.md` pour TOUT nouveau programme. But : que les données de tous les programmes se lisent de façon **identique** au moment de comparer (sinon biais par candidat = viole le test de renversement). Le document est autonome : il gère la vérification de source, la récupération au moindre coût, les PDF multi-colonnes / sites en JavaScript, la fidélité verbatim (QC ≥ 10 échantillons), la structuration JSON et la baseline. ⚠️ Le pilote actuel s'en est bien sorti **parce que le PDF Écologistes est numéroté** ; un programme non numéroté ou scanné demandera la procédure de repli (extraction par colonnes ou réécriture `.md` relue) décrite à l'étape 2.
- ⬜ **Enrichir le process** dès qu'un nouveau type de source ou un nouveau piège apparaît (mettre à jour `data/PROCESS-extraction.md`).

## À faire — court terme

- ⬜ **S'assurer du choix éditorial** — revoir et valider les décisions de rattachement (cf. `data/choix-editoriaux.md`) ; en particulier repasser le mapping *provisoire* des sous-sections LFI de la matrice v0.2 en classification propre **multi-étiquetée**.
- ✅ **URL publique du programme Écologistes trouvée** — `source_url` renseignés dans `data/candidats/ecologistes.json` avec fragment `#page=N` (pagination physique = pagination imprimée, vérifiée). Réserve : le PDF est derrière un challenge Cloudflare (accès automatisé bloqué, OK depuis un navigateur humain).
- ✅ **2ᵉ méta-thème pilote « Justice, sécurité & libertés »** — chaîne rejouée sur un thème clivant/asymétrique (`data/pilote-justice-securite.md` ; 5 mesures ajoutées par candidat). A prouvé : l'axe rend visible une divergence de *cadrage* à substance identique (drogues : santé vs sécurité) ; multi-étiquetage enfin exercé (4/10 mesures cotaguées).
- ⬜ **Étendre le pilote fiscalité** aux mesures non traitées (fraude, dette, collectivités, succession…).
- ⬜ **Baseline « ce qui est fait »** — pour chaque mesure du pilote : état actuel chiffré et sourcé (INSEE, budget, loi votée), jamais de qualificatif politique.
- ⬜ **Fixer l'unité de comparaison** — trancher : programme de candidat vs plateforme de parti. Écologistes = plateforme sans candidat·e désigné·e ; LFI = candidat déclaré (Mélenchon). À documenter dans le cadrage.

## À faire — moyen terme

- ⬜ **Classification fine** des 66 chapitres EELV et 89 sous-sections LFI → méta-thèmes (multi-étiquetée), alimentant `data/candidats/*.json`.
- ⬜ **Normaliser le programme Écologistes** en markdown (même squelette que LFI) — **seulement si** le pilote montre qu'on en a besoin partout. Corrige aussi le trou de traçabilité (EELV n'existe qu'en PDF dans le dépôt) et le problème d'ordre de lecture 2 colonnes.
- ⬜ **Page publique « règle de mapping »** (garde-fou n°2) — exposer taxonomie + critères + choix éditoriaux.
- ⬜ **Bouton de correction** par mesure (issue GitHub ou formulaire simple, sans backend).

## Backlog / veille

- ⏸ **Surveiller l'arrivée de nouveaux programmes** (autres candidats 2027) et les passer au même socle.
- ⬜ **Amorcer le code Next.js** (App Router, SSG) une fois assez de mesures réelles dans le JSON — pas avant.
- ⬜ **Recherche/filtre par tag** (demande utilisateur explicite) — l'utilisateur doit pouvoir lister les mesures d'un thème donné en filtrant sur `themes.includes(tag)` côté client. Suppose un tagging systématique et complet de chaque mesure (déjà appliqué au pilote justice).
- ⬜ **Versionner en tags datés** (ex. `taxonomie-v0.1`, `pilote-fiscalite`) selon le cadrage « versions, pas flux ».

## Fait

- ✅ Socle de 15 méta-thèmes neutres (`data/taxonomie.json`) + choix éditoriaux (`data/choix-editoriaux.md`).
- ✅ Captation + vérif (10/10) du programme LFI complet (`data/sources/lfi-avenir-en-commun-2025.md`).
- ✅ Matrice comparative v0.2 (couverture symétrique 15/15 ; v0.1 obsolète).
- ✅ Dépôt git initialisé et horodaté.
- ✅ **Pilote « Fiscalité »** — chaîne complète prouvée sur les 2 programmes (`data/candidats/lfi.json`, `data/candidats/ecologistes.json`, vue comparée `data/pilote-fiscalite.md`). 5 axes alignés, baseline sourcée.
- ✅ Process d'extraction autonome documenté (`data/PROCESS-extraction.md`).
