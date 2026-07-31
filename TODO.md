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
- ⬜ 🟢 **Relancer `verificateur-sources`** après chaque loi de finances / LFSS / statistique majeure (prochaine échéance naturelle : PLF 2027, automne 2026) — l'agent vérifie aussi la cohérence chiffres ↔ URL citée. **Suivi** : `npm run etat-sources` affiche l'état de vérification par axe (champ `baseline_verifiee` de `data/axes.json`). Flux : (1) après la loi, mettre à jour `DERNIER_EVENEMENT` dans `scripts/etat-sources.mjs` → les axes plus anciens passent « à re-vérifier » ; (2) relancer l'agent sur ce périmètre ; (3) à l'application du rapport, actualiser `baseline_verifiee` sur les axes traités. Les 28 axes sont stampés `2026-07-29`.
- ✅ **PR Dependabot Next 15 testée et mergée** (2026-07-29, commit 8e959cb) — testée dans un worktree isolé (merge main + `npm install` + `npm run build` + vérification navigateur : hydratation des filtres OK, console vide, Méthodologie OK). Next 15.5.21 fonctionne avec React 18.3.1 (pas de saut React 19 nécessaire). `eslint-config-next` aligné en 15.x au passage. Les 16 « high » Next sont corrigées ; `npm audit` signale encore 17 « high » mais ce sont d'autres avis (sharp, postcss embarqué, brace-expansion) — outils de build uniquement, rien de servi en prod statique.
- ✅ **Baselines vérifiées** (2026-07-28) — les 10 axes passés en revue contre l'actualité (dont loi de finances 2026 promulguée le 19/02/2026). 3 corrections : `fisc-fortune` (mention de la nouvelle taxe de 20 % sur les actifs non professionnels des holdings patrimoniales, art. 235 ter C CGI), `fisc-is` (surtaxe grandes entreprises prolongée : taux effectif 30,1 % / 35,3 % au-delà de 1,5 / 3 Md€ de CA), `just-prison` (les chiffres du 01/06/2026 citaient un article sur ceux de février — source remplacée par la statistique mensuelle du ministère de la Justice). `fisc-ir` vérifié exact (181 917 € = indexation +0,9 % LF 2026). Les 6 autres baselines tiennent.
- ✅ **URL publique du programme Écologistes trouvée** — `source_url` renseignés dans `data/candidats/ecologistes.json` avec fragment `#page=N` (pagination physique = pagination imprimée, vérifiée). Réserve : le PDF est derrière un challenge Cloudflare (accès automatisé bloqué, OK depuis un navigateur humain).
- ✅ **2ᵉ méta-thème pilote « Justice, sécurité & libertés »** — chaîne rejouée sur un thème clivant/asymétrique (`data/pilote-justice-securite.md` ; 5 mesures ajoutées par candidat). A prouvé : l'axe rend visible une divergence de *cadrage* à substance identique (drogues : santé vs sécurité) ; multi-étiquetage enfin exercé (4/10 mesures cotaguées).

- ✅ **Refonte : Méthodologie scindée en deux pages tournées vers le lecteur** (2026-07-29, cadrage validé par l'éditeur le jour même) —
  - **Page « À propos »** (`data/a-propos.md`, « je » anonyme) : pourquoi le site existe (programmes denses/nombreux/tardifs/mal rangés → d'une difficulté personnelle à une solution citoyenne), qui écrit, « un avis assumé — pourquoi s'y fier quand même » (biais exposés, critiquables, corrigeables), rôle de l'IA explicité (dépouillement assisté, décisions humaines), état du site (v0.1 preuve de moteur).
  - **Page « Méthodologie » recentrée lecteur** : garde-fous, taxonomie, version publique de la règle de classement (`data/regle-mapping.md` — la règle en clair, le test du parti masqué, 2 cas racontés, lien vers le journal). Jargon retiré (« règle de classement », plus « mapping »).
  - **Préambule + lexique en tête du journal** (`data/choix-editoriaux.md`) : dit ce qu'est le document (registre brut, non réécrit, historique git), aiguille les lecteurs « démarche » vers À propos/Méthodologie, lexique des termes internes (cotag, axe, LFI 5.2, identifiants…).
  - « À propos » ajouté à la navigation et au pied de page. Contenus éditoriaux dans `data/*.md` (source unique, rendus au build via composant partagé `src/components/Markdown.tsx`).

- ⬜ 🟠 **Réécrire les textes éditoriaux dans la voix de l'éditeur** — le fond des textes publiés le 29/07 est validé, mais la forme est celle d'une IA, pas celle de Michaël. À reprendre par lui, directement dans les fichiers (le site suit au build) : `data/a-propos.md`, `data/regle-mapping.md`, préambule de `data/choix-editoriaux.md`. Règle apprise au passage : pas d'auto-justification (ex. de l'anonymat) — énoncer, ne pas plaider.

## 🔴 REPRISE — état exact du chantier Écologie au 2026-07-31 (fin de séance)

> À lire en premier pour reprendre. Rédigé avant une remise à zéro du contexte : rien de ce qui suit
> n'existe ailleurs que dans ce fichier, `data/choix-editoriaux.md` et `data/attente.json`.

### ⚠️ Avertissements avant toute manipulation

1. **`data/drafts/` n'est PAS suivi sur `main`** (12 fichiers, ~250 mesures et 5 rapports) : un
   `git clean` les efface de l'arbre de travail. Ils sont **sauvegardés sur la branche
   `wip/ecologie-brouillons`** (commit `769e3f8`, poussée sur GitHub) — donc récupérables :
   `git checkout wip/ecologie-brouillons -- data/drafts && git reset data/drafts`.
   ⚠️ Cette branche **ne doit pas être mergée dans `main`** : son build échoue par construction
   (voir point 2), et les brouillons ont vocation à être fusionnés puis supprimés, pas versionnés.
   ⚠️ Passer de cette branche à `main` **retire les brouillons de l'arbre de travail** (git les
   considère comme suivis d'un côté, absents de l'autre) — les restaurer avec la commande ci-dessus.
2. **`npm run build` échoue en local tant que les brouillons sont là** : `check-data` tourne en
   `prebuild` et sort 419 erreurs, **toutes situées dans `data/drafts/`** (axes et thématiques pas
   encore créés — c'est normal et attendu). Les données publiées sont saines. Pour vérifier un build :
   écarter temporairement `data/drafts/`, builder, remettre. Vérifié le 31/07 : l'arbre committé build.
3. **Ne pas committer les brouillons en l'état** — le déploiement Vercel casserait.

### Ce qui est fait

- **5 passes d'extraction rendues**, toutes avec QC de fidélité au vert :
  | brouillon | contenu | QC |
  |---|---|---|
  | `ecologie.rapport.md` + 2 drafts | périmètre initial, 181 mesures (EELV 65 / LFI 116) | LFI 116/116, EELV 65/65 |
  | `ecologie-complement.*` | 68 mesures (EELV 32 / LFI 36) — comble 7 axes déséquilibrés par le découpage | 36/36 et 32/32 |
  | `ecologie-industrie.*` | LFI ch. 9.2, 4 mesures + 11 reliquats Économie | 4/4 exhaustif |
  | `fisc-verte.rapport.md` + draft | 8 mesures douanières/fiscales sur l'axe **existant** `fisc-verte` | 8/8 exhaustif |
  | `fisc-verte-micro.*` | 5 mesures (chapitres jamais ouverts) | 5/5 exhaustif |
- **2 commits** : `5b7339d` (glossaire, portée contextuelle, 41 termes) et `121bee2` (décisions 16-26
  + `npm run attente`). Rien n'est poussé.
- **26 décisions éditoriales** dans `data/choix-editoriaux.md`, dont 11 prises le 31/07.

### Les 4 règles générales posées le 31/07 (elles tranchent la suite)

- **n° 16** — le sens de la mesure prime, **jamais** l'équilibre du nombre de mesures entre programmes.
  Exception : un déséquilibre venu de *notre propre découpage d'extraction* est un artefact, corrigé
  par une passe complémentaire (3 ont été déclenchées à ce titre), jamais par un choix de classement.
- **n° 17** — **test de la baseline** : on crée un axe si et seulement si on peut lui écrire UNE
  baseline chiffrable et sourçable.
- **n° 24** — la **rubrique d'origine** est une pièce à verser au dossier : deux propositions décrivant
  le même dispositif ne sont pas la même mesure si le programme les range dans deux chapitres avec
  deux motifs différents.
- **n° 25** — **créer plutôt qu'attendre** : une mesure *déjà extraite* se classe toujours, quitte à
  créer l'axe ou le tag manquant. Le reliquat ne vaut que pour ce qui est *repéré mais non extrait*.

### PROCHAINE ACTION (méthode validée par l'éditeur)

Passer les **~28 arbitrages restants** au filtre des règles 16, 17, 24 et 25 :
inscrire au journal celles que les règles tranchent **en nommant la règle invoquée** (pour que ce
soit vérifiable), et ne remonter à l'éditeur que celles que les règles ne règlent pas ou sur
lesquelles elles se contredisent.

Où sont ces arbitrages :
- `data/drafts/ecologie-complement.rapport.md` §6.2 → Q1, Q2, Q4, Q6, Q7, Q8, Q9, Q10, Q14 (les autres sont tranchées) ; §6.1 → 3 anomalies de source
- `data/drafts/ecologie-industrie.rapport.md` §5 → Q2, Q3, Q4, Q5, Q7 (Q1 et Q6 tranchées)
- `data/drafts/fisc-verte.rapport.md` §7 et `fisc-verte-micro.rapport.md` §7 → Q1 à Q8 et Q1 à Q7

### Puis la fusion — à créer au moment de fusionner

**Axes** (le bloc copiable des 20 axes du périmètre initial est au §3.b de `ecologie.rapport.md`) :
- les 3 axes eau : `eco-eau-ressource`, `eco-eau-service`, `eco-eau-outremer` (le 9/0 d'`eco-eau-outremer`
  est un **silence réel** — ch. 46 EELV lu intégralement, décision n° 21)
- axe **« Décarbonation de l'industrie »** (nouveau, décision par test de baseline) — `eco-investissement`
  redevient strictement le financement
- axe **« Prévention & santé publique »** sous `sante` (nouveau, pour l'antibiorésistance)
- axe **« Souveraineté productive & relocalisation »** sous `economie-travail-entreprises` (nouveau,
  pour LFI 9.2 contrôle des investissements étrangers + EELV 20-3)
- condition animale **scindée en 2 axes** (décision n° 18) : élevage/aquaculture/abattage/transport sous
  Agriculture ; chasse/corrida/animaux de compagnie/personnalité juridique/expérimentation sous Écologie
- axe **pesticides sous Agriculture** (décision n° 19), cotags `biodiversite` + `eau`

**Thématiques** — les 21 proposées au §5 de `ecologie.rapport.md`, plus :
`collectivites-territoriales` (sous `institutions-democratie`, qui n'en a aucune),
`commerce-exterieur` (sous `europe-international-defense`),
`recherche` et `formation` (sous `education-recherche-jeunesse`, qui n'en a aucune ;
« formation professionnelle » écarté car il désigne en France un domaine précis).

**À faire aussi pendant la fusion** :
- verser les **reliquats dans `data/attente.json`** (nature `reliquat`, verbatim obligatoire) — c'est
  le seul moment où l'état final est connu, un reliquat se définissant par ce qui n'a pas été fusionné.
  Les verbatims sont dans les §4/§7 des 5 rapports.
- déplacer les rapports de `data/drafts/` vers `data/rapports/`, supprimer les `*.draft.json`.

**Ensuite** : `verificateur-sources` sur les nouvelles baselines (dont **`fisc-verte`, dont la baseline
ne couvre plus 10 des 13 mesures et l'`ecart_synthese` devient faux** — entrée `avant-publication` dans
`npm run attente`), puis agent `glossaire` sur les nouveaux verbatims, puis `check-data` + build + QC
navigateur + commit + **tag daté**.

---

## Plan d'attaque — V1 complète sur les 2 programmes (LFI + EELV)

> Objectif : couvrir les **15 méta-thèmes pour les 2 programmes déjà en base**, avec la rigueur des pilotes (fiscalité, justice). Ce n'est PAS encore « éclairer le vote » (cadrage V1) mais **prouver le moteur complet** sur 2 programmes. L'ajout d'autres candidats = versions ultérieures.
>
> **État : 2/15 méta-thèmes faits** (171 mesures). **Fondations prêtes** : les 2 programmes normalisés en `.md`, 3 agents projet (`extracteur`, `verificateur-sources`, `glossaire`), suivi `npm run etat-sources`, glossaire + matcher, déploiement Vercel auto.

**Boucle par méta-thème** (chaîne éprouvée, à répéter pour chacun des 13 restants) :
1. `extracteur` sur le méta-thème, les 2 programmes, depuis les `.md` → brouillons `data/drafts/`.
2. **Arbitrage éditeur** : cas-frontières, cotags, nouveaux axes (en questions fermées).
3. Fusion brouillons → `data/candidats/*.json` ; brouillons supprimés.
4. `verificateur-sources` sur les baselines des nouveaux axes → stamper `baseline_verifiee`.
5. `glossaire` sur les nouveaux verbatims → arbitrer / intégrer.
6. `check-data` + build + QC navigateur + commit + **tag daté** (versions, pas flux).

**Ordre proposé** (choix éditeur 30/07 : commencer par Écologie) :
1. 🔄 🔴 Écologie, climat & énergie — **EN COURS, extraction finie, arbitrages en cours** (voir « Reprise » ci-dessous)
2. ⬜ Protection sociale & solidarités (EELV 31-37,39 / LFI 7)
3. ⬜ Économie, travail & entreprises (EELV 13-16,19,20 / LFI 2,8,9)
4. ⬜ Santé (EELV 28-30 / LFI 15)
5. ⬜ Éducation, recherche & jeunesse (EELV 23-25 / LFI 5) — ⚠️ ch23 EELV à relire d'abord
6. ⬜ Europe, international & défense (EELV 60-66 / LFI 16-18)
7. ⬜ Logement, transports & territoires (EELV 2,3,22,44-46 / LFI transversal)
8. ⬜ Égalités & discriminations (EELV 38,40-43 / LFI ch10 partiel)
9. ⬜ Institutions & démocratie (EELV 47-49,54,59 / LFI 1, ch3 partiel)
10. ⬜ Culture, sport & médias (EELV 26,27,55 / LFI 11)
11. ⬜ Agriculture & alimentation (EELV 11,12 / LFI dispersé ch9/12)
12. ⬜ Immigration & asile (EELV 56 / LFI ch10 partiel)
13. ⬜ Numérique & technologies (EELV 21 / LFI transversal)

**Points de vigilance** : LFI dispersé/transversal sur logement et numérique → repérage transversal, pas lecture de chapitre. Reliquats à réabsorber au bon chantier (LFI 6.3 → économie ; ch 3.2 LFI hors finances locales → institutions). Après le 11/10/2026 (primaire gauche unie) : acter le statut candidat.

**Définition de « fini » (V1, 2 programmes)** : les 15 méta-thèmes renseignés pour LFI et EELV ; chaque mesure sourcée ; chaque axe avec `baseline_verifiee` ; glossaire couvrant le vocabulaire des verbatims ; pages À propos + Méthodologie réécrites dans la voix de l'éditeur ; contextualisation du glossaire livrée ; tag de version daté (ex. `v1-2-programmes`).

## À faire — moyen terme

- 🔄 🟠 **Glossaire au survol des termes techniques** — prototype livré le 2026-07-29 sur un terme (« numerus clausus », mesure `eco-prison-01`, désormais sourcé Sénat le 30/07). Agent projet `glossaire` créé le 30/07 (`.claude/agents/glossaire.md`) : propose des définitions neutres et sourcées des termes des verbatims, ne modifie jamais `glossaire.json`, ne committe pas → l'éditeur arbitre et intègre. 1er run lancé en tâche de fond (rapport attendu : `data/rapports/glossaire-propositions-2026-07-30.md`). À relancer après chaque nouvelle extraction de mesures. ✅ Matcher `Verbatim.tsx` durci le 30/07 (frontières de mot Unicode `\p{L}/\p{N}`, flag `u`) — les collisions de sous-chaîne ne sont plus un risque. **État au 31/07** : **41 termes intégrés** (numerus clausus + 23 concepts + 12 du lot 2 + Bâle V, superprofits [source Sénat], Community Reinvestment Act [source Réserve fédérale US] + `Séparatisme` et `Sécurité globale`, à portée limitée). Décisions éditeur actées : sigles déjà développés dans leur phrase = non repris ; dispositifs nommés = tout inclure ; ❓ = sourcés. Plus aucun terme en attente. Rapport : `data/rapports/glossaire-propositions-2026-07-30.md`. Mécanique en place et validée (build statique OK, verbatim intact, accessibilité focus/`aria-describedby` vérifiée en navigateur) :
  - **Surcouche non destructive (garde-fou n°1)** — `src/components/Verbatim.tsx` repère les termes dans le verbatim sans modifier le texte (le terme est stylé + déclencheur d'infobulle). Chaîne source intacte dans les données.
  - **Infobulle accessible** — s'ouvre au survol, au focus clavier ET au tap (bouton épinglable), se ferme à Échap ; `role="tooltip"` + `aria-describedby`. Non bloquante (pas de dialog modal).
  - **Données** — `data/glossaire.json` (terme → définition [+ `source_url` optionnel]), détection côté client (casse ignorée, termes multi-mots, plus longs d'abord). Validé par `check-data` (champs requis, doublons, URL).
  - **✅ Exception contextuelle (contextualisation)** (2026-07-31) — champ optionnel `contextes` (liste d'ids de mesures) livré : une entrée est soit **globale** (champ absent = comportement d'avant), soit **limitée aux mesures listées**. `Verbatim` reçoit désormais `mesureId` et filtre le glossaire avant de construire le matcher ; `check-data` valide que chaque id de `contextes` existe bien parmi les mesures publiées (une portée pointant vers une mesure disparue rendrait le terme invisible sans erreur visible). Fichiers : `src/lib/types.ts`, `src/components/Verbatim.tsx`, `src/components/Comparateur.tsx`, `scripts/check-data.mjs`. **`Séparatisme` et `Sécurité globale` intégrés** avec portée = `eco-police-4` → **41 termes**. QC : `check-data` ✅ (+ test négatif : les 2 branches d'erreur se déclenchent), `lint` ✅, `build` ✅, et vérification sur le HTML rendu **dans les deux sens** — portée sur `eco-police-4` : les 2 termes sont des déclencheurs d'infobulle ; portée basculée ailleurs : plus d'infobulle **mais le mot reste présent dans le texte** (verbatim intact, garde-fou n°1).
    - **Décision prise au passage** : une occurrence répétée d'un même terme se surligne **partout** dans le verbatim (comportement existant conservé — les verbatims sont courts, une seule proposition ; surligner la 1re seulement pénaliserait la lecture en diagonale). À rouvrir si des verbatims longs rendent l'effet bruyant.

- ✅ **Déployé sur Vercel** (2026-07-29) — production : https://comparateur-programmes-2027.vercel.app (compte `midenzer0`, projet connecté au repo GitHub : chaque push sur `main` redéploie automatiquement).
- ✅ **Page publique « règle de mapping »** (2026-07-29, garde-fou n°2) — `data/choix-editoriaux.md` est rendu tel quel (source unique, chargé au build) en bas de la page Méthodologie via `react-markdown` + `remark-gfm` + `@tailwindcss/typography`, avec lien vers le fichier sur GitHub pour l'historique.
- ⬜ 🟢 **Classification fine** des 66 chapitres EELV et 89 sous-sections LFI → méta-thèmes (multi-étiquetée), alimentant `data/candidats/*.json`.
- ✅ **Programme Écologistes normalisé en markdown** (2026-07-30, agent en tâche de fond) — `data/sources/ecologistes-programme-2026.md` (~58 800 mots : avant-propos + 8 parties + 66 chapitres + 551 propositions), squelette LFI. QC agent (étape 4) au vert : comparaison token-par-token vs `layout.txt` = 0 mot inventé / 0 perte ; 14/14 échantillons fidèles. Rapport : `data/rapports/normalisation-eelv-2026-07-30.md`. Coquille ch46 (Outre-mer numéroté 45) signalée. Ferme le trou de traçabilité (EELV n'existait qu'en PDF) et l'ordre de lecture 2 colonnes. **Relecture éditeur ciblée à faire** : ch23 reconstruit à la main (grille 3 colonnes, pages ~89-91) ; anomalies source conservées telles quelles (ch4 saute la prop 6 ; ch57 a deux « 4 » ; ch11 props 8-9 quasi identiques = doublon probable du PDF) ; badges `[EUROPE]` à sortir en `rubrique_origine` au stade JSON.
- ⬜ 🟠 **Boucle d'extraction par méta-thème** — après le `.md` EELV, commencer par **Écologie, climat & énergie** (choix éditeur 30/07). Chaîne éprouvée : agent `extracteur` → brouillons → arbitrages éditeur (cas-frontières/cotags) → fusion dans `data/candidats/*` → `verificateur-sources` sur les nouvelles baselines → `check-data` + build + commit + tag daté. 13 méta-thèmes restants au total (2/15 traités : fiscalité, justice).
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
