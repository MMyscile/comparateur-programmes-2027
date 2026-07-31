# Choix éditoriaux du socle de méta-thèmes

## Avant de lire — à qui s'adresse ce document

Ce document est le **registre de travail brut** des décisions de classement du
[comparateur de programmes 2027](https://comparateur-programmes-2027.vercel.app) : chaque
décision y est consignée telle qu'elle a été prise, datée, avec les alternatives écartées.
Il est publié tel quel, sans réécriture — l'historique complet de ses modifications est
conservé par git.

Si vous cherchez à **comprendre la démarche** du site, ce n'est pas la bonne porte d'entrée :
lisez plutôt les pages [À propos](https://comparateur-programmes-2027.vercel.app/a-propos) et
[Méthodologie](https://comparateur-programmes-2027.vercel.app/methodologie), écrites pour ça.
Ce document sert à **vérifier** : contrôler qu'une décision de classement a bien été prise
comme la règle publiée le prétend.

Lexique des termes techniques récurrents :

- **mesure** : une proposition d'un programme, recopiée mot pour mot ;
- **axe** : l'unité de comparaison du site (ex. « TVA ») — regroupe les mesures comparables des candidats ;
- **méta-thème**, puis **thématique** : les deux niveaux de la grille de classement (le rayon, puis l'étagère) ;
- **cotag / multi-étiquetage** : une mesure rangée sous plusieurs thématiques à la fois ;
- **baseline** : « ce qui est fait aujourd'hui », l'état actuel chiffré et sourcé d'un axe ;
- **test de renversement** : un classement doit rester défendable une fois le nom du parti masqué ;
- **LFI 5.2, ch. 17…** : renvois aux chapitres et sections des programmes sources ;
- **`lfi-drogues-07`** et codes similaires : identifiants internes des mesures dans les données du site ;
- **CLAUDE.md, `taxonomie.json`…** : fichiers internes du dépôt (cadrage du projet, données).

---

> Ce fichier documente les décisions de cadrage derrière `taxonomie.json`.
> Objectif : **honnêteté traçable** (CLAUDE.md), pas neutralité impossible.
> Chaque choix est réversible — la colonne « Pour revenir dessus » dit quoi éditer.
>
> Dernière mise à jour : 2026-07-29 (préambule) · Taxonomie v0.2.0

## Principes qui gouvernent tous les choix

1. **Neutralité des intitulés (test de renversement, garde-fou n°3).** Les méta-thèmes sont des *domaines de politique publique* (logique quasi-ministérielle), jamais des cadrages de parti. Sont **exclus** par principe : « prospérité écologique », « révolution citoyenne », « planification écologique », « harmonie avec la nature », etc. Un classement doit tenir étiquette de parti masquée.
2. **Classer par objectif + levier principal**, pas par mot-clé. Une mesure va dans le domaine qu'elle vise et actionne d'abord.
3. **Le multi-étiquetage est la soupape.** Une mesure peut porter plusieurs `themes`. Les cas-frontières se cotaguent au lieu d'être tranchés arbitrairement (voir champ `voir_aussi` de chaque thème).

---

## Décisions à assumer (et comment les rouvrir)

### 1. Grain : 15 méta-thèmes
- **Décision.** 15 domaines.
- **Alternatives.** ~10 (fusions) ; ou plus fin (2e niveau de sous-thèmes).
- **Pourquoi.** Assez fin pour que 66 chapitres (Écologistes) et 18 (LFI) se rangent proprement ; assez large pour rester stable dans le temps et accueillir d'autres programmes.
- **Pour revenir dessus.** Fusionner/scinder des objets du tableau `themes` dans `taxonomie.json`.

### 2. Santé environnementale → `sante` (pas `ecologie-climat-energie`)
- **Décision.** Les mesures « toxiques/polluants » (ex. Écologistes ch. 28) sont classées en **Santé**, avec cotag `ecologie-climat-energie` recommandé.
- **Alternative.** Les mettre en Écologie.
- **Pourquoi.** Leur objectif premier est un **résultat sanitaire humain** ; le levier est la prévention/santé. Le multi-étiquetage évite de perdre la dimension écologique.
- **Pour revenir dessus.** Déplacer le critère « santé environnementale » de `sante` vers `ecologie-climat-energie`, ou en faire un thème à part.

### 3. Médias → `culture-sport-medias` (pas `justice-securite-libertes`)
- **Décision.** Pluralisme/indépendance des médias rangés avec la Culture.
- **Alternative.** Les traiter comme une liberté publique (thème 2).
- **Pourquoi.** Continuité avec la politique culturelle et de l'information ; évite de sur-charger le thème sécurité/libertés.
- **Pour revenir dessus.** Déplacer le critère « Médias » vers `justice-securite-libertes`.

### 4. Laïcité → `institutions-democratie`
- **Décision.** Rangée avec les institutions et la vie publique.
- **Alternatives.** `justice-securite-libertes` ; ou `egalites-discriminations`.
- **Pourquoi.** Traitée comme principe d'organisation de la République plutôt que comme enjeu d'ordre public ou d'égalité.
- **Pour revenir dessus.** Déplacer le critère « Laïcité ».

### 5. Immigration & asile = thème autonome (n°13)
- **Décision.** Domaine séparé, non fondu dans sécurité.
- **Alternative.** L'intégrer à `justice-securite-libertes`.
- **Pourquoi.** Indispensable au test de renversement : un programme (RN, LR…) qui en fait un axe majeur doit être visible sans être réinterprété via le prisme sécuritaire.
- **Pour revenir dessus.** Supprimer le thème et déplacer ses critères — mais **déconseillé** (affaiblit la neutralité).

### 6. Numérique & technologies = thème autonome (n°15)
- **Décision.** Domaine séparé.
- **Alternative.** Le fondre dans `economie-travail-entreprises` (ou éclater entre économie/sécurité).
- **Pourquoi.** Évite d'invisibiliser les programmes qui en font un axe ; enjeu transversal (souveraineté, IA, données).
- **Pour revenir dessus.** Fusionner avec l'économie.

### 7. Europe + international + défense regroupés (n°14)
- **Décision.** Un seul domaine.
- **Alternative.** Scinder « Europe » d'un côté, « International & défense » de l'autre.
- **Pourquoi.** Masse de mesures modérée à ce stade ; regroupement lisible. À scinder si le volume le justifie.
- **Pour revenir dessus.** Créer un thème `europe` distinct.

### 8. Agriculture & alimentation séparée de l'écologie (n°10 vs n°9)
- **Décision.** Domaine propre.
- **Alternative.** Fondre dans `ecologie-climat-energie`.
- **Pourquoi.** Enjeux de revenus paysans, foncier et alimentation débordent l'écologie ; poids majeur dans le débat.
- **Pour revenir dessus.** Fusionner les deux thèmes.

### 9. Eau et sols → `ecologie-climat-energie` (pas `agriculture-alimentation`)
- **Décision.** Ressources (eau potable, sols) classées en Écologie.
- **Alternative.** En Agriculture (usage agricole dominant de l'eau/des sols).
- **Pourquoi.** Traitées comme ressources et communs, en amont des usages.
- **Pour revenir dessus.** Déplacer les critères « Eau, sols » vers `agriculture-alimentation`.

### 10. Quartiers populaires → `logement-transports-territoires` (pas `egalites-discriminations`)
- **Décision.** Rangés avec l'aménagement du territoire.
- **Alternative.** En Égalités (dimension discrimination territoriale/sociale).
- **Pourquoi.** Traités comme enjeu d'égalité **territoriale** (avec ruralités et Outre-mer), pas identitaire.
- **Pour revenir dessus.** Déplacer le critère « quartiers populaires ».

### 11. Pêche/sylviculture : activité vs écosystème
- **Décision.** L'**activité** (revenus, filière) → `agriculture-alimentation` ; l'**écosystème** (océan, forêt) → `ecologie-climat-energie`.
- **Pourquoi.** Sépare le levier économique du levier de protection. Cas typique de cotag.
- **Pour revenir dessus.** Fusionner le traitement dans un seul thème.

### 12. Petite enfance → `protection-sociale-solidarites` (2026-07-28)
- **Décision.** Accueil 0-3 ans (crèches, modes de garde) classé en protection sociale, cotag éducation.
- **Alternative.** Éducation (continuité du parcours éducatif — c'était la proposition initiale).
- **Pourquoi.** Le mode de garde est traité comme une prestation familiale (logique CAF), pas comme un cycle scolaire.
- **Pour revenir dessus.** Inverser principal/cotag sur les rattachements concernés (LFI 5.2).

### 13. Condition animale → `agriculture-alimentation` + thématique `condition-animale` (2026-07-28)
- **Décision.** Élevage et bien-être animal en Agriculture (application de la décision n°11 : l'élevage est une activité), cotag écologie ; thématique fine `condition-animale` créée dans `taxonomie.json`.
- **Alternative.** Écologie (fidèle au cadrage « harmonie avec la nature » de la source LFI) ; la protection des espèces **sauvages** y reste.
- **Pourquoi.** Sur pièces (LFI 14.5) : 6 mesures sur 8 portent sur les pratiques d'élevage.
- **Pour revenir dessus.** Déplacer la thématique `condition-animale` vers `ecologie-climat-energie`.

### 14. Service citoyen / conscription → `education-recherche-jeunesse` (2026-07-28)
- **Décision.** Dispositifs de service citoyen des jeunes (LFI 5.7) classés Jeunesse, cotag défense quand une formation militaire ou des réserves sont impliquées.
- **Alternative.** Défense (conscription) ou sécurité civile (justice-sécurité).
- **Pourquoi.** L'objet premier est un dispositif jeunesse (formation, permis, mise à niveau, remplacement du SNU).
- **Pour revenir dessus.** Déplacer le critère vers `europe-international-defense`.

### 15. Espace : international par défaut, recherche au cas par cas (2026-07-28)
- **Décision.** La politique spatiale se classe `europe-international-defense` quand la dimension internationale/souveraineté domine (traités, armement, coopérations) ; une mesure **sans** dimension internationale (ex. moyens du CNES) se classe `education-recherche-jeunesse`. Règle appliquée au grain mesure.
- **Pourquoi.** C'est le contenu de la mesure qui décide, pas le chapitre source.
- **Pour revenir dessus.** Fixer un principal unique pour tout le spatial.

---

## Rattachements sources (traçabilité)

Correspondance chapitres source → méta-thèmes (preuve de couverture). À maintenir quand une source est ajoutée.

> Pour LFI, le grain fin (89 sous-sections, multi-étiqueté) est dans `data/rattachements-lfi.md`
> (2026-07-28) ; le tableau ci-dessous reste la vue agrégée par chapitre.

| Méta-thème | Écologistes (ch.) | LFI — L'Avenir en Commun 2025 (ch.) |
|---|---|---|
| institutions-democratie | 47, 48, 49, 54, 59 | 1, (3) |
| justice-securite-libertes | 50, 51, 52, 53, 57, 58 | 4 |
| economie-travail-entreprises | 13, 14, 15, 16, 19, 20 | 2, 8, 9 |
| fiscalite-budget-finances | 17, 18 | 6 |
| protection-sociale-solidarites | 31, 32, 33, 34, 35, 36, 37, 39 | 7 |
| sante | 28, 29, 30 | 15 |
| education-recherche-jeunesse | 23, 24, 25 | 5 |
| culture-sport-medias | 26, 27, 55 | 11 |
| ecologie-climat-energie | 1, 4, 5, 6, 7, 8, 9, 10 | 12, 13, 14 |
| agriculture-alimentation | 11, 12 | *(dispersé dans 9/12)* |
| logement-transports-territoires | 2, 3, 22, 44, 45, 46 | *(transversal, pas de chapitre dédié)* |
| egalites-discriminations | 38, 40, 41, 42, 43 | (10) |
| immigration-asile | 56 | (10) |
| europe-international-defense | 60, 61, 62, 63, 64, 65, 66 | 16, 17, 18 |
| numerique-technologies | 21 | *(transversal, pas de chapitre dédié)* |

> Parenthèses = rattachement partiel (le chapitre source couvre plusieurs domaines).
> Les 66 chapitres Écologistes sont tous couverts ; les 18 chapitres LFI aussi (certains éclatés sur plusieurs domaines). Les mentions « transversal/dispersé » signalent des **vides de structure** côté LFI — information utile, pas une erreur.

## Thématique « Justice civile & accès au droit » (`justice-civile`) — ajoutée 2026-07-28

**Critère de rattachement** : organisation et moyens de la justice **non pénale** — justice civile,
prud'homale et sociale (contentieux du travail, de la Sécurité sociale), aide juridictionnelle et
accès au droit. La chaîne pénale (poursuites, jugement pénal, parquet) reste sous `justice-penale`.

**Pourquoi** : lors du détail des axes justice (extraction 2026-07-28), des mesures EELV sur les
prud'hommes et le contentieux de la Sécurité sociale étaient taguées `justice-penale` faute de
thématique adaptée — un filtre « justice pénale » affichait du droit du travail. Constat consigné
au §4.7 de `data/rapports/justice.rapport.md`.

**Test de renversement** : le critère (pénal vs civil/social) est une distinction juridique
standard, indépendante de l'étiquette partisane.

## Cas-frontière tabac (`lfi-drogues-07`) — tranché 2026-07-28

Mesure LFI « trafic de cigarettes / jeunesse zéro tabac » (chapitre 15.3 « Addictions et drogues »).
Cotag `addictions` (principal — le fond : le tabac n'est pas un stupéfiant) + `drogues-stupefiants`
(rattachement au chapitre source, et cohérence avec l'axe `just-drogues` où la mesure s'affiche).
Sans le second tag, la mesure était invisible sous le filtre « Drogues & stupéfiants » alors
qu'elle vit dans l'axe drogues — paradoxe corrigé par le multi-étiquetage.

---

# Chantier « Écologie, climat & énergie » — arbitrages du 2026-07-31

> Décisions prises pendant l'intégration du 3ᵉ méta-thème (LFI + Écologistes). Contexte :
> quatre passes d'extraction successives (périmètre initial, complément, industrie, fiscalité
> environnementale). Les rapports correspondants vivent dans `data/drafts/*.rapport.md` puis
> `data/rapports/` après fusion.

## 16. Le sens de la mesure prime, jamais l'équilibre entre programmes (2026-07-31)

- **Décision.** Un choix de classement ne se justifie **jamais** par le nombre de mesures qu'il
  laisserait au programme d'en face. Seuls comptent l'objet de politique publique de la mesure et
  les précédents de ce journal. Si un programme est muet là où l'autre est prolixe, c'est un
  **résultat** de la comparaison.
- **Alternative écartée.** Ajuster le découpage des axes pour équilibrer les colonnes.
- **Pourquoi.** Une grille qui épouse le contenu des programmes en présence bougerait à chaque
  nouveau candidat, et les versions datées cesseraient d'être comparables entre elles. C'est aussi
  une violation du test de renversement : le classement doit tenir sans regarder qui propose quoi.
- **Exception, à ne pas confondre.** Un déséquilibre qui vient de **notre propre découpage
  d'extraction** (un chapitre non confié à l'agent) est un artefact : il se corrige par une passe
  complémentaire, pas par un choix de classement. Trois passes de complément ont été déclenchées
  à ce titre pendant ce chantier.
- **Pour revenir dessus.** Assumer que la grille s'adapte au corpus disponible.

## 17. Test de la baseline pour créer (ou fusionner) un axe (2026-07-31)

- **Décision.** On crée un axe distinct si — et seulement si — on peut lui écrire **une** baseline
  chiffrable et sourçable. Si le regroupement envisagé en exigerait plusieurs sans recouvrement,
  c'est qu'il s'agit de plusieurs axes ; si deux axes partageraient la même baseline, c'est qu'ils
  n'en font qu'un.
- **Pourquoi.** L'axe porte la baseline (modèle v0.2). Le test rend la décision vérifiable au lieu
  de reposer sur l'intuition, et il découle directement du garde-fou n° 5.
- **Applications de ce chantier.** Eau scindée en 3 axes (état écologique des cours d'eau / taux de
  fuite des réseaux / situation ultramarine = trois réalités mesurées séparément) ; axe
  « Décarbonation de l'industrie » séparé de « Financement de la transition » (émissions du secteur
  industriel et contrats de transition vs volume d'investissement climat) ; antibiorésistance
  renvoyée au chantier Santé (consommation d'antibiotiques et taux de résistance = baseline sans
  recouvrement avec les seuils de qualité de l'air et le régime ICPE de l'axe toxiques).
- **Publié.** Ce test est désormais énoncé dans la version publique de la règle de classement
  (`data/regle-mapping.md`), avec l'exemple de l'eau.

## 18. Condition animale — révision de la décision n° 13, scindée au grain mesure (2026-07-31)

- **Décision.** L'axe unique `agri-condition-animale` est **scindé en deux** : les mesures portant
  sur l'élevage, l'aquaculture, l'abattage et le transport d'animaux restent sous
  `agriculture-alimentation` ; celles portant sur la chasse, la corrida, les animaux de compagnie,
  la personnalité juridique de l'animal et l'expérimentation animale passent sous
  `ecologie-climat-energie`.
- **Alternative écartée.** Garder un axe unique, d'un côté ou de l'autre.
- **Pourquoi.** La décision n° 13 avait été prise **sur le seul corpus LFI** (« 6 mesures sur 8
  portent sur les pratiques d'élevage », LFI 14.5). L'arrivée d'Écologistes ch. 8 a déplacé la base
  factuelle : sur les 20 mesures de l'axe complet, environ 60 % relèvent de l'élevage et 30 % n'ont
  aucun rapport avec l'agriculture (EHPAD, expérimentation, statut juridique). Application de la
  décision n° 15 : c'est le contenu de la mesure qui décide, pas le chapitre source.
- **Pour revenir dessus.** Refusionner les deux axes et choisir un méta-thème unique.

## 19. Pesticides → `agriculture-alimentation` (2026-07-31)

- **Décision.** L'axe pesticides est rangé sous Agriculture & alimentation, cotags écologie
  (`biodiversite`, `eau`) pour rester visible sous le filtre Écologie.
- **Pourquoi.** Réguler les doses de pesticides, c'est réguler une **pratique agricole** —
  application directe de la décision n° 11 (l'activité relève d'Agriculture) et cohérence avec le
  traitement de l'élevage. Baseline attendue : le plan Écophyto, copiloté Agriculture/Écologie.
- **À noter.** Écologistes range sa proposition dans un chapitre *biodiversité*, LFI dans un
  chapitre *agriculture* : même objet, deux cadrages — divergence à documenter dans
  `ecart_synthese`, comme les drogues (santé vs sécurité) au pilote Justice.

## 20. Justice environnementale regroupée sur `just-justice` (2026-07-31)

- **Décision.** La mesure LFI « crime climatique de dissimulation » rejoint l'axe existant
  `just-justice`, où vivent déjà les 3 mesures de justice environnementale (`lfi-justice-12`,
  `eco-justice-08`, `eco-justice-11`). Un cotag écologie est ajouté **aux quatre**.
- **Alternative écartée.** La classer sur `eco-planification` (défaut proposé par l'agent).
- **Pourquoi.** Les trois mesures existantes étaient jusqu'ici invisibles depuis la page Écologie —
  angle mort corrigé au passage. Surtout, disperser des objets voisins sur deux axes **selon le
  candidat** échouerait au test de renversement.
- **Pour revenir dessus.** Créer un axe « justice environnementale » sous Écologie et y déplacer les quatre.

## 21. Silences réels vs artefacts de découpage — l'eau en Outre-mer (2026-07-31)

- **Décision.** L'axe `eco-eau-outremer` est conservé bien qu'aucune mesure Écologistes ne s'y
  range (9 LFI / 0 EELV).
- **Pourquoi.** Le chapitre 46 d'Écologistes (Outre-mer) a été **lu intégralement** : il ne contient
  aucune proposition dédiée à l'eau. Le déséquilibre est donc un **silence réel** — LFI consacre une
  sous-section au sujet, Écologistes traite l'Outre-mer comme un chapitre de territoire. Le
  redistribuer ferait disparaître une information. Application de la décision n° 16.
- **Chantier ouvert.** Le site ne distingue pas encore, dans une cellule vide, le silence réel de
  l'extraction non faite. Marqueur axe × candidat à concevoir (voir `TODO.md`).

## 22. Douane et fiscalité écologiques regroupées sur `fisc-verte` (2026-07-31)

- **Décision.** Les propositions de protection commerciale à motif écologique des deux programmes
  (Écologistes 20-7/20-8, LFI 9.2 et 12.3) sont extraites sur l'axe **existant** `fisc-verte`,
  et non dispersées en reliquats.
- **Pourquoi.** Trois passes successives les avaient mises en reliquat chacune pour de bonnes
  raisons locales ; le résultat était qu'un sujet traité par les **deux** candidats n'avait aucun
  lieu de comparaison. L'axe passe de 1 candidat à 2.
- **Conséquence à traiter.** La baseline de `fisc-verte` (budget vert, malus au poids, TIRUERT) ne
  couvre plus l'axe élargi, et son `ecart_synthese` devient faux. À reprendre par
  `verificateur-sources` avant publication.

## 23. Thématiques créées pendant ce chantier (2026-07-31)

- `collectivites-territoriales` sous `institutions-democratie` — ce méta-thème n'avait **aucune**
  thématique. Sert au tag institutionnel des mesures de gouvernance locale de la planification
  écologique, et resservira au chantier Institutions (reliquats du ch. 12.2 de LFI).
- `commerce-exterieur` sous `europe-international-defense` — aucune étagère n'existait pour la
  douane, alors que la majorité des mesures de `fisc-verte` sont douanières. (L'axe compte
  13 mesures après la micro-passe du 31/07 : 7 Écologistes / 6 LFI.)

## Cas-frontières tranchés au fil du chantier (2026-07-31)

| Mesure | Décision | Motif |
|---|---|---|
| EELV 1-12 (marché carbone ETS2, fonds social climat) | axe `eco-energie-prix`, cotag `fiscalite-verte` | l'ETS2 touche le prix payé pour se chauffer et se déplacer |
| EELV 1-5 (Certificats d'économie d'énergie) | axe `eco-renovation`, cotag `energie-prix-marche` | les CEE financent d'abord des travaux de rénovation |
| EELV 10-5 (taxe foncière / THRS, EPFL) | axe `eco-sols`, cotags `finances-locales` + `impots-menages` | objectif affiché = préserver les terres agricoles ; l'outil est fiscal |
| EELV 10-3 et 10-4 (SAFER, accaparement des terres) | axe `eco-sols`, thématique principale `foncier-agricole` | indissociables du bloc foncier du même chapitre (ZAN, loi foncière) |
| LFI 12.2 (redécoupage par bassins versants) | axe `eco-eau-ressource`, cotag `collectivites-territoriales` | l'objet visé est la gestion de l'eau ; le redécoupage en est l'instrument |
| LFI 12.2 (communes, assemblées citoyennes, ingénierie territoriale) | axe `eco-planification`, cotag `collectivites-territoriales` | le chapitre s'intitule « L'organisation de l'État au service de la planification écologique » : leur objet **est** la planification |
| EELV 4-7/4-8 + LFI 14.4 (sécurité civile, pompiers, feux) | axe `eco-adaptation`, cotag `securite-civile` | motif explicite dans les deux programmes : intensification des risques climatiques |
| EELV 4-9 (tourisme durable, surtourisme) | axe `eco-adaptation`, cotags `mobilites` + `logement` | même forme que la mesure « territoires montagnards » déjà sur l'axe : une activité économique à réorganiser à cause du climat. Sortir l'une imposerait de sortir l'autre |
| EELV 28-4 (ZFE, Crit'Air) | axe `sante-toxiques`, cotag `mobilites` | objet affiché = qualité de l'air. **Vigilance** : LFI a la position inverse (moratoire), en reliquat Transports — les deux positions ne se rencontreront qu'au chantier Transports, à réunir alors sur un axe commun |
| EELV 28-6 (antibiorésistance) | **axe « Prévention & santé publique » créé sous `sante`** | baseline sans recouvrement avec l'axe toxiques (décision n° 17). D'abord mise en reliquat, puis classée en application de la décision n° 25 : elle était déjà extraite |
| LFI 9.3-9 et 13.3 (écoconstruction) | les **deux** publiées | deux propositions réellement publiées dans deux chapitres ; n'en garder qu'une serait une synthèse (garde-fou n° 1) |
| LFI 9.2 (contrôle des investissements étrangers) et EELV 20-3 (entreprises stratégiques) | **axe « Souveraineté productive & relocalisation » créé sous `economie-travail-entreprises`**, les deux mesures dessus, cotag écologie | objet premier = souveraineté économique, l'écologie n'y est qu'un périmètre. Traitées identiquement des deux côtés (test de renversement). D'abord mises toutes deux en reliquat, puis classées en application de la décision n° 25 |
| `eco-publicite` | axe distinct de `eco-dechets` | l'objet est la demande, pas le traitement du déchet |
| Label de l'axe `eco-planification` | « planification écologique » **conservé** | terme employé par l'administration (SGPE) et par les deux programmes, pas seulement par un parti. À reproposer si de nouveaux programmes le rendent marqué |

## 24. La rubrique d'origine est une pièce à verser au dossier (2026-07-31)

- **Décision.** Avant d'arbitrer un cas-frontière, on regarde **où le programme a lui-même rangé la
  proposition** et **quel motif il lui donne**. Ce n'est pas décisif — la décision n° 15 reste :
  c'est le contenu de la mesure qui décide, pas le chapitre source — mais c'est un indice fort de
  l'intention de l'auteur, et il doit être consulté d'emblée plutôt qu'après coup.
- **Cas qui a motivé la règle.** LFI propose deux fois une « taxe kilométrique aux frontières » :
  une fois au ch. 9.2 (« Réindustrialiser et relocaliser »), motif = dissuader les délocalisations ;
  une fois au ch. 12.3 (« Les Outre-mer, avant-postes de la planification écologique »), motif =
  « productions locales à faible empreinte écologique ». Le programme les distingue lui-même :
  la seconde va sur `fisc-verte`, la première en reliquat Économie. Les réunir aurait été corriger
  le programme, pas le restituer.
- **Règle pratique.** Deux propositions décrivant le même dispositif ne sont pas forcément la même
  mesure : comparer leurs chapitres et leurs motifs écrits avant de les regrouper.
- **Publié.** Énoncé dans la version publique de la règle de classement (`data/regle-mapping.md`).

## 25. Créer plutôt qu'attendre — une mesure extraite se classe toujours (2026-07-31)

- **Décision.** Une proposition **déjà extraite** est toujours classée, quitte à créer l'axe ou la
  thématique qui manque, y compris s'ils relèvent d'un chantier non démarré. On ne la laisse jamais
  sans rattachement en attendant le chantier compétent.
- **Frontière.** La règle porte sur ce qu'on a **en main**. Une proposition seulement *repérée*
  dans un chapitre hors périmètre (non extraite) reste un reliquat : la classer supposerait de
  découper des axes sur un corpus qu'on n'a pas lu. Le reliquat n'est donc plus un fourre-tout,
  il a un sens précis — « repéré, pas extrait ».
- **Pourquoi.** Le multi-étiquetage est une règle publiée (« une mesure peut porter plusieurs
  étiquettes ») : refuser un tag parce que son chantier n'a pas commencé revient à ne pas
  appliquer une règle qu'on affiche. Et une thématique mal taillée se renomme mécaniquement,
  alors qu'une mesure non classée disparaît du site sans que rien ne le signale.
- **Conséquences immédiates.** Deux décisions prises plus tôt le même jour ont été révisées :
  l'antibiorésistance (Écologistes 28-6) et les deux mesures de souveraineté productive
  (LFI 9.2 / Écologistes 20-3) sont classées sur des axes créés pour elles, au lieu d'être
  renvoyées en reliquat.
- **Garantie associée.** Cette règle ne tient que si l'on revient effectivement sur ce qui est
  provisoire. D'où la liste d'attente `data/attente.json` (décision n° 26).

## 26. Liste d'attente unique, avec déclencheur (2026-07-31)

- **Décision.** Un fichier versionné `data/attente.json` recense **deux natures d'entrées** :
  les **reliquats** (propositions repérées, non extraites, avec verbatim et chantier de
  destination) et les **à-revoir** (décisions déjà prises sur une base qui peut bouger). Chaque
  entrée porte un **déclencheur** : ce qui la rend exigible (« le chantier Transports démarre »,
  « un nouveau candidat est ajouté », « après la primaire du 11/10/2026 »). Validé par
  `check-data` ; `npm run attente` affiche ce qui est dû.
- **Pourquoi.** Deux angles morts symétriques, tous deux non outillés jusqu'ici :
  1. **Les reliquats** vivaient en prose dans de longs rapports. 52 propositions étaient parquées
     sans qu'aucun script ne les suive, et aucun chantier ne les récupère automatiquement.
  2. **Les décisions à réexaminer** n'avaient que les lignes « Pour revenir dessus » de ce journal,
     qui disent *comment* revenir mais jamais *quand*. Démonstration le jour même : la décision
     n° 13 (condition animale) n'a été révisée que parce qu'on est tombé dessus par hasard en
     préparant un arbitrage — sa base factuelle s'était écroulée à l'arrivée du 2ᵉ programme, et
     rien ne l'avait signalé. Avec dix candidats, ce hasard ne se reproduira pas.
- **Pour revenir dessus.** Revenir aux rapports en prose comme seule mémoire.
