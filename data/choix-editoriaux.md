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
> ⚠️ **Révisée par la décision n° 18** (2026-07-31) : l'axe est scindé en deux. Lire les deux.
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

> ⚠️ **Révisée par la décision n° 29** le jour même : le bloc passe de 4 à 7 mesures et part sur un
> axe dédié sous Écologie — la porte de sortie que cette décision-ci avait elle-même écrite.

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

> ⚠️ **Complétée par la décision n° 28** le jour même : ce qu'elle tranchait tient (la douane
> écologique ne retourne pas en reliquat), mais les 13 mesures sont réparties sur **deux** axes.

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

## 27. Les arbitrages restants du chantier Écologie, passés au filtre des règles 16, 17, 24 et 25 (2026-07-31)

> Les quatre rapports d'extraction du chantier laissaient **28 questions ouvertes**. Elles ont été
> reprises une par une et confrontées aux règles générales posées le même jour. Celles que les règles
> tranchent sont ci-dessous **avec la règle invoquée**, pour que chaque ligne soit vérifiable par un
> lecteur qui ne referait pas le raisonnement. Trois ne sont pas tranchables ainsi — les règles se
> taisent, ou elles contredisent une décision antérieure : elles sont listées au §27.e et attendent
> l'éditeur. Les questions sont numérotées comme dans les rapports (`data/drafts/*.rapport.md`,
> déplacés dans `data/rapports/` après fusion).

### 27.a Passe complémentaire — anomalies de source (§6.1)

| Anomalie | Décision | Règle invoquée |
|---|---|---|
| LFI 18.2 : deux propositions dans un seul bloc HTML, séparées par `\x0b` + « • » | **Découpage confirmé** en `lfi-ocean-20` et `lfi-ocean-21` ; le fait est consigné dans leur `rubrique_origine`. La section 18.2 compte donc 6 blocs mais 7 propositions | modèle v0.2 (« une mesure = une proposition ») ; les laisser réunies serait une synthèse (garde-fou n° 1). La n° 24 confirme : le programme leur donne deux objets distincts (navires de souveraineté / puissance polaire) |
| EELV ch. 11 : propositions 8 (p. 46) et 9 (p. 47) au texte identique à deux détails typographiques près | **Une seule extraite** (prop. 8). Duplication de la source, à cheval sur un saut de page, consignée comme telle | n° 24 *a contrario* : même chapitre, même motif, même texte — rien ne les distingue, ce n'est pas deux propositions. Extraire les deux créerait une mesure fantôme |
| EELV : renvois internes dans le verbatim (ch. 12 prop. 8 : « [cf aussi la proposition […] 8-2] ») | **Conservés dans le verbatim** | fidélité (garde-fou n° 1) : c'est du texte écrit par les auteurs de la proposition, pas une étiquette de mise en page. À distinguer des badges `[EUROPE]`, remontés au §27.e |

### 27.b Passe complémentaire — questions de classement (§6.2)

| # | Décision | Règle invoquée |
|---|---|---|
| Q1 | **Oui** — EELV 2-10 et 20-2 restent sur leur axe sectoriel ; seule 19-7, entièrement consacrée aux métiers, va sur `eco-emplois-transition` | précédents du 1er lot (`lfi-renovation-05`, `lfi-forets-10` : la formation embarquée dans une mesure sectorielle y reste). **n° 16** : l'argument « répondre Non porterait l'axe à 3/3 » est un argument d'équilibre — écarté, le précédent tient seul |
| Q2 | **Oui** — EELV 28-12 (plastique à usage unique, consigne) sur `eco-dechets`, cotag `pollutions-toxiques` conservé ; 28-11 (export de déchets toxiques) reste sur `sante-toxiques` | **n° 24** : la rubrique est santé, mais le motif écrit et l'instrument sont déchets/consigne. Test de renversement : `lfi-dechets-02` en est le pendant mot pour mot |
| Q4 | **Oui** — LFI 18.2 (ports, emploi maritime, navires) reste sur `eco-ocean` | test de renversement : EELV ch. 6 « Prendre soin des océans **et de ses artisans** » a été traité ainsi au 1er lot. Le refuser à l'un en l'accordant à l'autre serait un classement par candidat |
| Q6 | **Non** (le défaut du rapport est renversé) — LFI 16.6-1 (crime d'écocide) et 16.6-2 (tribunal international de justice climatique) ne vont **pas** sur `eco-biodiversite` : elles rejoignent le bloc « justice environnementale » | **n° 20** (ne pas disperser des objets voisins sur deux axes) + **n° 24** (rubrique 16.6 « Étendre les protections du droit international aux biens communs planétaires »). La destination exacte du bloc — `just-justice` ou axe dédié — est remontée au §27.e |
| Q7 | **Suit le bloc** — LFI 16.6-5 (traité contraignant les multinationales sur les droits humains et l'environnement) va où vont Q6 | **n° 24** (même rubrique, même instrument : du droit international contraignant) + **n° 25** (elle est extraite, elle se classe). Réserve assumée : c'est la plus faible du bloc côté écologie — inscrite à `data/attente.json` |
| Q8 | **Oui** — LFI 16.6-10 (Casques bleus pour les catastrophes naturelles) sur `eco-adaptation`, cotag `securite-civile` | précédent déjà au journal (EELV 4-7/4-8 + LFI 14.4 : la sécurité civile reste sur `eco-adaptation` quand le motif écrit est le risque climatique) |
| Q9 | **Oui** — les 9 propositions de LFI 9.3 sont dispersées sur leur axe d'objet | modèle v0.2 : l'axe est l'objet de politique publique. **n° 16** : les grouper sur `eco-investissement` reviendrait à choisir un classement pour étoffer une colonne |
| Q10 | **Oui** — LFI 9.3-7 (diagnostic des ouvrages d'art) sur `eco-adaptation`, cotag `mobilites` | **n° 24** : la rubrique dit le motif — « Lancer des grands chantiers écologiques, créateurs d'emplois » — et digues et barrages relèvent de la prévention des risques. Réserve ponts/viaducs inscrite à `data/attente.json` (chantier Transports) |
| Q14 | **Oui** — EELV 11-8 (réduction de la consommation de produits animaux) sur le volet **agricole** de la condition animale, **et création de la thématique `alimentation`** sous `agriculture-alimentation` | **n° 18** (l'élevage reste sous Agriculture) + **n° 24** (l'introduction du ch. 8 cite la proposition explicitement) + **n° 25** : « quitte à créer le tag manquant ». Corrige l'angle mort signalé au §7.3 du rapport — sa dimension alimentaire n'était filtrable nulle part |

### 27.c Passe industrie — LFI ch. 9.2 (§5)

| # | Décision | Règle invoquée |
|---|---|---|
| Q2 | **Oui** — `lfi-investissement-06` (Code des marchés publics : entreprises sociales, écologiques et locales) reste sur `eco-investissement` | **n° 25** : elle est extraite, elle se classe, et aucun axe ne la reçoit mieux. Sa jumelle « critères de localisation » est en reliquat Économie : les réunir est inscrit à `data/attente.json` |
| Q3 | **Oui** — `lfi-investissement-07` (conditionner les aides d'État) reste sur `eco-investissement` | **n° 16** : deux mesures Écologistes portant le même instrument (`eco-investissement-01`, `-04`) y sont déjà ; les séparer supprimerait le lieu où les deux programmes se répondent |
| Q4 | **Oui** — la réquisition d'intérêt général (9.2 n° 14) reste en reliquat Économie | **n° 24** : aucune finalité écologique écrite, contrairement à `lfi-emplois-transition-03` (« dans un but écologique »). **n° 16** : l'argument « l'axe passerait à 1/4 » est écarté. Frontière de la **n° 25** : repérée, non extraite |
| Q5 | **Oui** — « Relocaliser les productions essentielles » (9.2 n° 1) reste en reliquat Économie | **n° 24** : motif écrit = indépendance nationale, sans mention écologique. À noter pour la suite : l'axe « Souveraineté productive & relocalisation » existe désormais et cette proposition en est la candidate n° 1 — mais la **frontière de la n° 25** tient (repérée, non extraite), et la classer seule préempterait le découpage d'un chapitre dont 10 autres propositions attendent le chantier Économie |
| Q7 | **Non** — `lfi-investissement-04` prend `entreprises` en thématique **principale**, `climat-attenuation` en cotag | elle part sur « Souveraineté productive & relocalisation », dont le journal a déjà écrit que l'objet premier est la souveraineté économique. **n° 15** : l'objet décide. L'objection « sinon elle disparaît du filtre Écologie » tombe — le cotag l'y maintient |

### 27.d Passes fiscalité verte et micro-passe (§7 des deux rapports)

| # | Décision | Règle invoquée |
|---|---|---|
| FV-Q1 | **Oui** — `lfi-fisc-verte-06` (niches sur le kérosène) sur `fisc-verte`, avec `eco-fisc-verte-1` déjà là. Les deux mesures de **tri général** des niches (`eco-fisc-niches-1`, `lfi-fisc-niches-01`) restent, elles, sur `fisc-niches` | **n° 17** : la baseline de `fisc-verte` nomme précisément le fait mesuré (« 8,1 Md€ de dépenses défavorables à l'environnement, **dont les taux réduits de taxation des carburants** ») ; celle de `fisc-niches` mesure le **stock** de 465 niches, ce que visent les deux mesures de tri. Symétrie préservée : la paire kérosène n'est pas séparée |
| FV-Q2 | **Oui** — `lfi-fisc-verte-05` (protectionnisme écologique agricole) sur `fisc-verte` | **n° 25** + seul endroit où les deux programmes se répondent sur cet instrument. Réserve « ses critères écrits sont sanitaires et sociaux » inscrite à `data/attente.json` (chantier Agriculture) |
| FV-Q3 | **Déjà tranchée « Non »** par la décision n° 24 : `lfi-fisc-verte-03` (taxe kilométrique du ch. 9.2) sort de l'axe. ⚠️ **Le brouillon la contient encore : à retirer au moment de la fusion** et à verser en reliquat Économie | n° 24 |
| FV-Q4 | **Oui** — `eco-fisc-verte-2` (EELV 20-7) sur `fisc-verte` | déjà couverte par la **décision n° 22**, qui nomme explicitement Écologistes 20-7 |
| FV-Q5 | **Non** — `lfi-fisc-verte-01` prend `commerce-exterieur` en principale et `fiscalite-verte` en cotag ; même renversement pour les autres mesures purement douanières signalées au §8.1 du rapport de micro-passe | la condition posée par le rapport (« possible seulement si la thématique est créée ») est levée : `commerce-exterieur` a été créée par la **décision n° 23**. **n° 15** : l'objet décide |
| FV-Q6 | **Oui** — cotag `fiscalite-verte` sur les 4 mesures déjà en base (`eco-fisc-niches-1`, `eco-fisc-tva`, `lfi-fisc-niches-01`, `lfi-fisc-fortune`), **sans les déplacer** | procédé déjà retenu deux fois : EELV 1-12, puis les 4 mesures de justice environnementale (**n° 20**). Rendre visible sous un filtre ne demande pas de déplacer un axe |
| FV-Q7 | **Remontée à l'éditeur** — cf. §27.e | **n° 17** contre décision n° 22 |
| FV-Q8 | **Sans objet** — la micro-passe demandée a eu lieu | — |
| µ-Q1 | **Oui** — le Crédit impôt recherche (EELV 25-8 et LFI 5.5) est traité **ensemble** sur `fisc-aides-entreprises` au chantier compétent ; aucune des deux n'entre ici | frontière de la **n° 25** (repérées, non extraites) + **n° 16** : séparer par candidat deux propositions portant le même instrument est un classement qui dépend de qui propose |
| µ-Q2 | **Oui** — les 4 propositions de fiscalité des transports d'EELV (ch. 3) restent au chantier Mobilités | frontière de la **n° 25** ; l'instrument dominant de chaque proposition est l'interdiction ou la planification modale, pas l'impôt. Réserve sur la fiscalité aérienne (prolongement direct d'`eco-fisc-verte-1`) inscrite à `data/attente.json` |
| µ-Q3 | **Oui** — LFI 17.2 bloc 1 (« Abroger les accords de libre-échange en vigueur ») reste **hors** de l'axe | **n° 24**, appliquée à la lettre : la rubrique donne le motif — « Désobéir à chaque fois que c'est nécessaire pour mettre en œuvre notre programme » —, là où Écologistes motive sa proposition jumelle par « le climat et la biodiversité ». Deux motifs, deux mesures. **Conséquence assumée et à écrire** : le lecteur verra une proposition Écologistes sur les traités sans réponse LFI **alors que LFI en a une**. Ce n'est **pas** un silence réel au sens de la n° 21 : à dire dans l'`ecart_synthese` et inscrit à `data/attente.json` |
| µ-Q4 | **Oui** — `eco-fisc-verte-7` (ressources propres de l'UE) sur `fisc-verte` | **n° 16** : le MACF y est l'instrument nommé, comme dans `eco-fisc-verte-3` ; deux propositions MACF sur deux axes différents ne se compareraient nulle part |
| µ-Q5 | **Oui** — `eco-fisc-verte-6` (Contribution Climat Énergie aux collectivités) sur `fisc-verte`, cotag `finances-locales` | **n° 17** : le fait qui la mesure est l'état de la composante carbone des accises, pas la DGF — la baseline de `fisc-collectivites` ne dit rien d'elle |
| µ-Q6 | **Oui** — `eco-fisc-verte-5` (traités de commerce et d'investissement) sur `fisc-verte` | l'axe accueille déjà de la protection commerciale non fiscale (`lfi-fisc-verte-01`) et c'est le vis-à-vis de `lfi-fisc-verte-07`. Cette réponse **nourrit** la question du §27.e : l'axe n'est plus fiscal |
| µ-Q7 | **Sans objet** — déjà inscrit à `data/attente.json` (`revoir-baseline-fisc-verte`, déclencheur `avant-publication`) | n° 26 |

### 27.e Les trois questions que les règles ne tranchaient pas — arbitrées par l'éditeur le 31/07

Elles sont devenues les décisions **n° 28** (scission de `fisc-verte`), **n° 29** (axe
« Justice environnementale ») et **n° 30** (badges `[EUROPE]`) ci-dessous.

## 28. `fisc-verte` scindé en deux axes (2026-07-31)

- **Décision.** L'axe est scindé : **« Fiscalité environnementale »** (`fisc-verte`, id conservé —
  niches sur le kérosène, Contribution Climat Énergie) et **« Commerce extérieur & protection
  écologique aux frontières »** (axe nouveau — MACF, droits de douane écologiques, clauses miroirs,
  traités de commerce, protectionnisme écologique agricole).
- **Règle invoquée : n° 17.** Les deux moitiés n'ont aucune baseline commune : le budget vert, le
  malus au poids et la TIRUERT d'un côté ; le MACF, les droits de douane et les clauses miroirs de
  l'autre. 10 des 13 mesures relevaient de la seconde et n'étaient couvertes par aucun fait de la
  baseline en place. Deux baselines sans recouvrement = deux axes.
- **Ce que la décision n° 22 tranchait, et qui n'est pas remis en cause.** Elle disait : *ne pas
  laisser la protection commerciale écologique en reliquat*, parce qu'un sujet traité par les deux
  candidats n'avait alors aucun lieu de comparaison. Ce motif est tenu — les deux axes ont chacun
  deux colonnes (≈ 2/1 et ≈ 5/5), rien ne retourne en reliquat. Elle avait choisi le seul axe qui
  existait à ce moment-là, et signalait elle-même que la baseline ne suivait plus.
- **Méta-thème du nouvel axe : `europe-international-defense`**, cotags `fiscalite-verte` et
  écologie pour qu'il reste visible sous le filtre Écologie. Même forme que la décision n° 19
  (les pesticides sous Agriculture, cotags écologie) : l'objet décide du rangement, les cotags
  font la visibilité. Le libellé « Fiscalité environnementale », devenu inexact pour 10 mesures
  sur 13, redevient exact pour les 3 qui restent.
- **Pour revenir dessus.** Refusionner les deux axes et écrire une baseline qui affirme des faits
  sans lien de mesure entre eux.

## 29. Axe « Justice environnementale » créé sous Écologie — révision de la décision n° 20 (2026-07-31)

- **Décision.** Les mesures de justice environnementale quittent `just-justice` pour un axe dédié
  sous `ecologie-climat-energie`, cotag justice. Y entrent les 4 mesures déjà en base
  (`lfi-justice-12`, `eco-justice-08`, `eco-justice-11`, le crime climatique de dissimulation) et
  celles arbitrées au §27.b : LFI 16.6-1 (écocide), 16.6-2 (tribunal international de justice
  climatique), 16.6-5 (traité contraignant les multinationales).
- **Règle invoquée : n° 17.** La baseline de `just-justice` parle de magistrats pour
  100 000 habitants et de budget de la justice : elle ne mesure rien de ce bloc. La baseline du
  nouvel axe est distincte et sourçable (pôles régionaux environnementaux créés par la loi du
  24 décembre 2020, contentieux de l'environnement, CJIP environnementales).
- **Pourquoi maintenant.** La décision n° 20 avait regroupé sur `just-justice` quand le bloc
  comptait 4 mesures, et avait écrit sa propre porte de sortie : « créer un axe justice
  environnementale sous Écologie et y déplacer les quatre ». Le bloc passe à 7 : la base factuelle
  a bougé, exactement comme pour la décision n° 13 révisée par la n° 18. Ce que la n° 20 protégeait
  — ne pas disperser des objets voisins selon le candidat — est mieux servi par un axe qui les
  tient tous que par un axe qui n'en mesure aucun.
- **Rangement sous Écologie et non sous Justice** : la thématique `justice-environnementale` est
  déjà rangée sous `ecologie-climat-energie` dans la taxonomie ; l'inverse créerait deux vérités
  contradictoires dans la même grille.
- **Pour revenir dessus.** Redissoudre l'axe dans `just-justice` et assumer la baseline muette.

## 30. Badges `[EUROPE]` : hors du verbatim, et un cotag jugé au fond — des deux côtés (2026-07-31)

- **Décision, en trois temps.**
  1. Le badge `[EUROPE]` **reste hors du verbatim** et est consigné dans `rubrique_origine`, à côté
     du chapitre et de la page (« proposition 7, badge [EUROPE] »). Il concerne 46 propositions
     d'Écologistes. *Vérifié à la fusion du 01/08 : c'était déjà la pratique dans les 5 mesures
     publiées comme dans les 12 mesures des brouillons — la décision entérine l'existant au lieu de
     le corriger. Le miroir `.md`, lui, conserve le badge en ligne, ce qui est correct : c'est un
     miroir de la source, pas une donnée du site.*
  2. Une mesure qui **relève d'une politique européenne** porte le cotag `cooperation-europeenne`.
     Le critère est le **fond de la mesure**, pas la présence du badge : le badge est un indice
     fort côté Écologistes (application de la n° 24 — la source dit où elle range et pourquoi),
     jamais une preuve suffisante ni nécessaire.
  3. Le **même critère est repassé sur le corpus LFI**, qui n'étiquette pas ses propositions :
     le cotag est ajouté là où il manque.
- **Pourquoi le point 3 n'est pas optionnel.** Sans lui, 46 mesures d'un seul programme
  remonteraient sous le filtre Europe, et le lecteur conclurait qu'un candidat porte l'échelon
  européen et l'autre pas — alors que LFI y consacre un chapitre entier (17, « Utiliser tous les
  leviers d'action face aux institutions européennes » et « Désobéir… »). Ce serait un écart
  fabriqué par la mise en page d'un programme, pas par les programmes : **n° 16**, et test de
  renversement.
- **Alternative écartée.** Un champ de modèle `portee` (européen / national / international) :
  filtrable et propre, mais renseigné chez le candidat qui étiquette et vide chez l'autre —
  le même artefact, inscrit cette fois dans le modèle de données.
- **Pour revenir dessus.** Réintégrer le badge dans le verbatim, en assumant que le lecteur lit
  « [EUROPE] » comme un mot de la proposition.

## 31. L'étiquette de maturité quitte la mesure ; un fait daté prend sa place (2026-08-04)

- **Décision, en deux temps.**
  1. L'étiquette `etat_maturite` (mûr / ébauche / périmé / pas-encore) **n'est plus affichée sur la
     proposition**. Le champ reste dans les données — rien n'est effacé, la décision est réversible.
  2. Une proposition rattrapée par un fait daté porte désormais une **astérisque** renvoyant à un
     champ `fait_posterieur` : `{ texte, source_url, date }`, affiché sous le verbatim.
- **Pourquoi retirer l'étiquette.** Deux défauts distincts.
  - *Elle ne distinguait rien* : les **437 mesures sur 437** portaient « mûr ». Les quatre états
    décrivent l'état d'un **programme**, pas d'une phrase — « pas encore de programme » a un sens
    pour un candidat, aucun pour une proposition isolée. L'information utile existe déjà ailleurs,
    au bon niveau : `etat_programme`, sur le candidat.
  - *« Périmé » est un verdict, pas un fait.* Le site n'a pas à tamponner la proposition d'un
    candidat ; il a à montrer l'écart au réel et à laisser conclure.
- **Pourquoi la note est plus honnête que l'étiquette.** L'obsolescence est **par clause**, l'étiquette
  était **par mesure**. Cas d'espèce, `lfi-energie-prix-02` : la phrase empile trois demandes
  (annuler la libéralisation / stopper la privatisation des barrages / pôle public en renationalisant
  EDF et Engie) ; seule la deuxième est rattrapée, par la loi n° 2026-554 du 29/06/2026. La marquer
  « périmée » aurait affirmé que la proposition entière est morte — la trahison que le garde-fou n° 1
  interdit. Et le précédent aurait mordu sur des dizaines de propositions multi-leviers des deux
  programmes.
- **La règle de rédaction, non négociable : le fait, jamais le verdict.** On écrit ce que la loi a
  changé, avec sa source et sa date. On n'écrit pas « cette mesure est dépassée ». `check-data`
  refuse une note contenant *périmé / dépassé / obsolète / caduc / plus d'actualité*, comme il refuse
  une note sans source ou datée d'avant la publication du programme.
- **Ce que cette décision corrige au passage.** L'analyse qui l'a précédée affirmait que « renationaliser
  EDF » était sans objet dès la publication (EDF appartient à 100 % à l'État depuis 2023). C'était une
  erreur d'éditeur : la phrase vise **EDF et Engie** — Engie reste cotée, l'État en détient environ un
  quart — et LFI porte publiquement cette demande après 2023 (communiqué du 29/02/2024 : loi « vidée de
  sa substance »), la « renationalisation » désignant chez eux la sortie du marché et le statut, pas le
  registre des actionnaires. **Juger un mot du candidat contre sa propre définition, puis le déclarer
  inexact, c'est exactement ce que le principe fondateur interdit.** Aucune note n'a été posée sur ce
  point.
- **Alternative écartée.** Garder l'étiquette en renommant « périmé » en quelque chose de plus neutre
  (« daté », « à actualiser ») : le mot changeait, le défaut de grain restait — un tampon unique sur
  une phrase qui contient plusieurs demandes.
- **Pour revenir dessus.** Le champ `etat_maturite` est intact dans les données : réafficher le badge
  est un retour en arrière d'une ligne dans `Comparateur.tsx`.

## 32. Un fait *antérieur* peut être nécessaire à la lecture : champ `contexte_lecture` (2026-08-05)

- **Décision.** Un second champ optionnel sur la mesure, `contexte_lecture` : `{ texte, source_url }`,
  **sans contrainte de date**, affiché sous le verbatim avec un renvoi `†` (le `*` restant réservé à
  `fait_posterieur`). Quand les deux existent, l'antérieur s'affiche en premier : il éclaire la
  phrase, quand le postérieur la rattrape.
- **Le cas fondateur, `lfi-energie-prix-02`.** La proposition demande de « créer un pôle public de
  l'énergie […] en renationalisant EDF et Engie ». Un lecteur qui sait qu'EDF appartient à 100 % à
  l'État lira la demande comme absurde ou dépassée — c'est exactement le piège dans lequel
  l'assistant est tombé le 04/08 (décision n° 31). Le désamorcer demande deux faits, pas une
  explication.
- **Pourquoi un nouveau champ plutôt qu'élargir `fait_posterieur`.** La nationalisation d'EDF date du
  08/06/2023, soit **avant** le programme de janvier 2025 : ce n'est pas un fait postérieur.
  L'alternative — accepter des dates antérieures dans `fait_posterieur` — a été écartée parce que
  **la contrainte de date est précisément ce qui aurait bloqué l'erreur du 04/08** : `check-data`
  refuse d'opposer un fait de 2023 à un texte de 2025. Élargir le champ aurait désarmé le contrôle
  qui attrape la faute qui motive tout ce chantier. Vérifié en conditions réelles : la note fautive
  du 04/08, rejouée, est refusée, et le message aiguille désormais vers `contexte_lecture`.
- **Ce que le champ n'a pas le droit d'être.** Privé de contrainte de date, il repose sur deux
  garde-fous que `check-data` fait respecter :
  - **pas de verdict** (*périmé / dépassé / obsolète / caduc / plus d'actualité*), comme pour la note
    datée ;
  - **pas de glose sur l'intention du candidat** (*en réalité / veut dire / entend par / il faut
    comprendre / autrement dit*). Expliquer ce qu'un candidat « veut vraiment dire », c'est juger son
    mot contre notre définition — ce que le principe fondateur interdit, et l'erreur même du 04/08.
  - source obligatoire, et un `date` y est **refusé** : un fait daté postérieur relève de l'autre champ.
  Les quatre refus ont été déclenchés à dessein avant publication ; un garde-fou jamais éprouvé ne
  protège de rien.
- **La note retenue**, deux faits, aucune interprétation : « *l'État détient 100 % du capital d'EDF
  depuis le retrait de la cote de juin 2023 ; Engie reste cotée, l'État en détenant 22,64 % au
  31 mai 2026.* »
- **Trouvé en la sourçant.** Le jaune budgétaire « État actionnaire » porte les deux chiffres dans un
  même tableau, mais il est arrêté au **30/06/2024** et donne Engie à **23,64 %** — Engie publie
  **22,64 % au 31/05/2026**. Reprendre le document officiel sans vérifier sa fraîcheur aurait publié
  un chiffre faux. D'où deux sources et non une : `source_url` accepte désormais une liste, comme
  `source_baseline`, la règle « un lien par fait affirmé » valant ici aussi.
- **Pour revenir dessus.** Le champ est optionnel et n'est porté que par une mesure : le retirer est
  sans effet sur le reste.
