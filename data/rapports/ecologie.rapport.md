# Rapport d'extraction — Méta-thème « Écologie, climat & énergie »

- **Date** : 2026-07-31
- **Livrables** : `data/drafts/lfi-ecologie.draft.json`, `data/drafts/ecologistes-ecologie.draft.json`, ce rapport.
- **Statut** : **brouillon**. Rien n'a été écrit dans `data/candidats/*`, `data/axes.json`,
  `data/taxonomie.json`, `data/choix-editoriaux.md` ni `src/`. Aucun commit.
- **Périmètre traité** (fixé par l'éditeur) : Écologistes ch. **1 et 4→10** ; LFI ch. **12→14**.

---

## 0. Étape 0 — Vérification des sources (rappel, sources déjà en base)

| | Écologistes | LFI |
|---|---|---|
| Document | « Le nouveau programme des Écologistes » (PDF « VDEF Programme.pdf », 208 p., juillet 2026) | « L'Avenir en Commun », édition 2025 (site melenchon2027.fr) |
| Officielle ? | Oui — `lesecologistes.fr` (site du parti) | Oui — `melenchon2027.fr` (site de campagne du candidat) |
| Présidentielle 2027 ? | Oui — plateforme portée par Marine Tondelier, candidate désignée le 08/12/2025 (réserve primaire du 11/10/2026 documentée dans `etat_programme`) | Oui — programme présenté le 28/01/2025 pour 2027 |
| Bon périmètre ? | Oui — plateforme de parti portée par la candidate (tranché le 2026-07-28, CLAUDE.md) | Oui. **Piège évité** : le PDF « PROGRAMME-FRONT-POPULAIRE » (coalition NFP 2024, législatives) n'est pas utilisé |
| Archives brutes | `data/sources/raw/ecologistes_vdef-programme_pdf.tar.gz` | `data/sources/raw/lfi-melenchon2027-2025_html.tar.gz` |

**Méthode de récupération** : aucun re-téléchargement (moindre coût). L'extraction a été faite
**depuis les miroirs `.md` normalisés** (`data/sources/*.md`), qui font l'ordre de lecture ; les
archives brutes n'ont servi qu'au **contrôle qualité** (§2). Les `source_url` des mesures pointent
toujours vers l'original publié par le candidat :

- Écologistes : `https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=N`
  (mécanique reprise à l'identique des mesures existantes de `data/candidats/ecologistes.json`).
- LFI : `https://melenchon2027.fr/programme2025/livre/chapitreN/sM`.

---

## 1. Volumes extraits

### 1.a Vue d'ensemble

| | Écologistes | LFI | Total |
|---|---|---|---|
| Chapitres/sections couverts | 8 chapitres (1, 4, 5, 6, 7, 8, 9, 10) | 14 sous-sections (12.1→12.3, 13.1→13.5, 14.1→14.6) | — |
| Propositions présentes dans le périmètre | 65 | 150 (151 lignes du miroir, dont 2 qui forment **une seule** proposition, cf. §6.2) | 215 |
| **Mesures extraites (draft)** | **65** | **116** | **181** |
| Reliquats signalés (autre méta-thème) | 0 | 34 | 34 |
| `synthese: true` produits | 0 | 0 | 0 |

Aucun résumé, aucune fusion de propositions : **une mesure = une proposition mot-pour-mot**.
Seules transformations appliquées (conventions déjà en vigueur dans le corpus) : normalisation des
espaces, ajout d'un point final quand la proposition source n'a pas de ponctuation terminale
(3 cas côté Écologistes, 116 cas côté LFI — le site LFI ne ponctue jamais ses puces), et sortie du
badge `[EUROPE]` du verbatim vers `rubrique_origine` (5 mesures Écologistes concernées).

### 1.b Détail Écologistes (65 mesures)

| Chapitre | Propositions | Extraites | Pages PDF |
|---|---|---|---|
| 1 — Gagner la bataille du climat | 12 | 12 | 16-18 |
| 4 — Adapter la France à +4°C | 8 (numérotées 1-5, 7-9 : **la source saute le n° 6**) | 8 | 27-28 |
| 5 — Restaurer la biodiversité terrestre | 6 | 6 | 29-30 |
| 6 — Prendre soin des océans et de ses artisans | 9 | 9 | 32-33 |
| 7 — Protéger nos forêts et l'économie sylvicole | 6 | 6 | 35 |
| 8 — Améliorer la condition animale | 9 | 9 | 36-37 |
| 9 — Sanctuariser l'accès à l'eau potable | 9 | 9 | 41-42 |
| 10 — Préserver la terre | 6 | 6 | 44 |

### 1.c Détail LFI (116 mesures, 34 reliquats)

| Sous-section | Propositions | Extraites | Reliquats |
|---|---|---|---|
| 12.1 — La bifurcation écologique pour une société de l'harmonie | 12 | 10 | 2 |
| 12.2 — L'organisation de l'État au service de la planification écologique | 10 | 6 | 4 |
| 12.3 — Les Outre-mer, avant-postes de la planification écologique | 8 | 5 | 3 |
| 13.1 — Investir pour lancer la bifurcation de notre économie | 5 | 4 | 1 |
| 13.2 — Développer les transports publics écologiques… | 14 | 0 | **14** |
| 13.3 — Organiser le 100 % d'énergies renouvelables en 2050… | 17 | 17 | 0 |
| 13.4 — Consommer autrement, une France « zéro déchet » | 10 | 10 | 0 |
| 13.5 — Souveraineté alimentaire et révolution agricole… | 11 | 2 | 9 |
| 14.1 — Pollutions : désempoisonner le monde | 7 | 7 | 0 |
| 14.2 — L'eau, enjeu central pour l'Humanité | 18 | 17 | 1 |
| 14.3 — Le droit à l'eau dans les Outre-mer | 9 | 9 | 0 |
| 14.4 — Défendre la forêt, poumon de la planète | 17 | 17 | 0 |
| 14.5 — Rompre avec la maltraitance animale | 8 | 8 | 0 |
| 14.6 — Sauver l'écosystème et la biodiversité | 4 | 4 | 0 |

Les encarts « À savoir » (sondages Harris/Ifop) ne sont **pas** des propositions : exclus.

---

## 2. Contrôle qualité de fidélité (obligatoire)

Le QC a été mené **contre les sources originales archivées**, pas contre les miroirs `.md`
(sinon le test ne prouverait rien de plus que la normalisation déjà faite).

### 2.a LFI — 116/116 identiques

Méthode : extraction des blocs `<div class="mesure">` **et** `<div class="mesure-cle">` (+ les
`<p class="wp-block-paragraph">` pour le cas coupé du §6.2) des 14 pages HTML archivées
(`lfi_sub/chapitreN_sM.html`, capté le 2026-07-25), puis comparaison **caractère par caractère**
de chaque verbatim du draft avec le bloc source, après neutralisation des espaces multiples et
de la convention de point final.

> **116/116 identiques** (donc a fortiori ≥ 10/10 sur échantillon).

Douze échantillons tirés au sort et vérifiés individuellement (graine 2027) :
`lfi-planification-14`, `lfi-eau-outremer-07`, `lfi-planification-11`, `lfi-planification-02`,
`lfi-pesticides-01`, `lfi-eau-ressource-06`, `lfi-condition-animale-01`, `lfi-eau-service-07`,
`lfi-forets-14`, `lfi-toxiques-07`, `lfi-condition-animale-03`, `lfi-energie-prix-01` →
**12/12 identiques**.

*Faux négatif écarté* : un premier passage ne cherchait que `class="mesure"` et « ratait » les 12
premières propositions de sous-section, qui portent en réalité la classe `mesure-cle`. Aucune
divergence de texte : c'est le testeur qui était incomplet (cf. §7, piège à consigner).

### 2.b Écologistes — 63/65 stricts, 65/65 après neutralisation des traits d'union

Méthode : `pdftotext -bbox-layout` sur les pages 16-45 du PDF archivé, puis **reconstruction de
l'ordre de lecture par coordonnées** (chaque ligne est affectée à la colonne gauche si son centre
est à gauche de x=297 pt **ou** si sa largeur dépasse 250 pt — cas des chapôs de proposition qui
courent sur les deux colonnes ; tri par colonne, puis y, puis x). Le texte ainsi reconstitué est
l'ordre où un humain lit la page. Chaque verbatim est ensuite cherché comme **sous-chaîne exacte**.

> **63/65 sous-chaînes exactes.** Les 2 « échecs » sont les deux mots composés coupés en fin de
> ligne dans le PDF, que la normalisation `.md` a restaurés à raison (piège (e) du process) :
> `méga-bassines` (p. 41, coupé « méga- / bassines ») et `bien-être` (p. 37, coupé par un trait
> d'union conditionnel U+00AD). Après neutralisation des traits d'union et espaces :
> **65/65 identiques**.

Douze échantillons tirés au sort et vérifiés individuellement (graine 2027) :
`eco-sols-02`, `eco-eau-ressource-03`, `eco-eau-ressource-02`, `eco-ocean-05`,
`eco-energie-prix-02`, `eco-adaptation-05`, `eco-adaptation-06`, `eco-forets-01`, `eco-ocean-06`,
`eco-energie-03`, `eco-ocean-07`, `eco-ocean-09` → **12/12 identiques**.

*Note de méthode* : le test de « sous-séquence ordonnée de tokens » utilisé lors de la
normalisation donnait ici 59/65, avec 6 faux négatifs dus à l'entrelacement des colonnes. La
reconstruction par coordonnées est plus sûre et permet un vrai contrôle caractère-par-caractère
sur un PDF deux colonnes (cf. §7).

---

## 3. Axes proposés (unité de comparaison)

20 axes proposés, grain fin conservé comme en fiscalité et justice. Numérotation `ordre` 24→43
(les axes existants occupent 1→23). **Aucun identifiant n'entre en collision avec `data/axes.json`.**

| Axe proposé | Thème | Label | Ordre | EELV | LFI |
|---|---|---|---|---|---|
| `eco-planification` | ecologie-climat-energie | Planification écologique & objectifs climatiques | 24 | 2 | 15 |
| `eco-energie-mix` | ecologie-climat-energie | Mix énergétique & énergies renouvelables | 25 | 6 | 5 |
| `eco-nucleaire` | ecologie-climat-energie | Nucléaire : sortie, sûreté, déchets | 26 | 2 | 3 |
| `eco-energie-prix` | ecologie-climat-energie | Prix de l'énergie, marché et service public de l'énergie | 27 | 2 | 3 |
| `eco-renovation` | ecologie-climat-energie | Rénovation énergétique & sobriété des bâtiments | 28 | 1 | 7 |
| `eco-adaptation` | ecologie-climat-energie | Adaptation au changement climatique & risques naturels | 29 | 8 | 3 |
| `eco-eau-ressource` | ecologie-climat-energie | Eau : partage de la ressource, qualité des milieux & gouvernance des bassins | 30 | 6 | 9 |
| `eco-eau-service` | ecologie-climat-energie | Droit à l'eau : gestion publique, tarification & assainissement | 31 | 3 | 8 |
| `eco-eau-outremer` | ecologie-climat-energie | Eau et assainissement dans les Outre-mer | 32 | 0 | 9 |
| `eco-biodiversite` | ecologie-climat-energie | Biodiversité terrestre & espaces protégés | 33 | 4 | 4 |
| `eco-ocean` | ecologie-climat-energie | Océans, littoraux & fonds marins | 34 | 9 | 1 |
| `eco-forets` | ecologie-climat-energie | Forêts & filière bois | 35 | 6 | 16 |
| `eco-pesticides` | ecologie-climat-energie | Pesticides & intrants agricoles | 36 | 1 | 1 |
| `eco-sols` | ecologie-climat-energie | Sols, artificialisation & foncier | 37 | 6 | 2 |
| `eco-dechets` | ecologie-climat-energie | Déchets, réemploi & durabilité des produits | 38 | 0 | 6 |
| `eco-publicite` | ecologie-climat-energie | Publicité, greenwashing & sobriété de la consommation | 39 | 0 | 4 |
| `eco-investissement` | ecologie-climat-energie | Financement de la transition écologique | 40 | 0 | 2 |
| `eco-emplois-transition` | ecologie-climat-energie | Emplois, formation & reconversions de la transition | 41 | 0 | 3 |
| `agri-condition-animale` | **agriculture-alimentation** | Condition animale (élevage, chasse, expérimentation) | 42 | 9 | 8 |
| `sante-toxiques` | **sante** | Pollutions, toxiques & risques industriels | 43 | 0 | 7 |

**Alignement** : 13 axes sur 20 portent des mesures des deux candidats. Les 7 axes à un seul
candidat ne sont **pas** un déséquilibre programmatique : dans 6 cas sur 7, la matière de l'autre
candidat existe mais est **hors du périmètre confié** (cf. §4.2). C'est le point le plus important
de ce rapport pour la suite du chantier.

### 3.a Pistes de baseline (à vérifier — travail de `verificateur-sources`, pas validé ici)

Chaque piste indique **où chercher**, pas ce qu'il faut écrire. Aucun chiffre ci-dessous n'a été
vérifié par mes soins.

| Axe | Piste de baseline chiffrable | Où la chercher |
|---|---|---|
| `eco-planification` | Objectif de réduction des émissions inscrit dans la loi énergie-climat (n° 2019-1147) et dans le cadre européen ; état d'adoption de la SNBC-3 et de la PPE3 ; émissions annuelles constatées | legifrance.gouv.fr ; citepa.org (inventaire Secten) ; hautconseilclimat.fr (rapport annuel) ; ecologie.gouv.fr |
| `eco-energie-mix` | Part des EnR dans la consommation finale brute d'énergie et dans la production d'électricité ; objectif européen assigné à la France | SDES « Chiffres clés des énergies renouvelables » ; RTE, *Bilan électrique* ; Eurostat SHARES |
| `eco-nucleaire` | Nombre de réacteurs en service et part du nucléaire dans la production électrique ; suppression du plafond de 50 % par la loi n° 2023-491 ; état du programme EPR2 et du projet Cigéo | legifrance.gouv.fr ; RTE ; ASNR (ex-ASN/IRSN) ; andra.fr |
| `eco-energie-prix` | Niveau du tarif réglementé de vente d'électricité et de l'accise sur l'électricité ; fin de l'ARENH au 31/12/2025 et dispositif qui lui succède ; taux de TVA sur l'abonnement | cre.fr ; service-public.gouv.fr ; legifrance.gouv.fr |
| `eco-renovation` | Nombre de rénovations d'ampleur financées par MaPrimeRénov' ; nombre de passoires thermiques (DPE F-G) ; calendrier légal d'interdiction de location (loi Climat et résilience n° 2021-1104) | anah.gouv.fr (bilan annuel) ; SDES/ONPE ; legifrance.gouv.fr |
| `eco-adaptation` | PNACC-3 (trajectoire de référence retenue, nombre de mesures, budget) ; dotation du Fonds Barnier ; taux de surprime du régime CatNat | ecologie.gouv.fr (PNACC-3) ; legifrance (arrêté surprime CatNat) ; ccr.fr |
| `eco-eau-ressource` | Objectif de sobriété du Plan Eau (mars 2023) ; part des masses d'eau de surface en bon état écologique ; nombre de retenues de substitution autorisées | ecologie.gouv.fr ; eaufrance.fr ; OFB |
| `eco-eau-service` | Prix moyen du m³ d'eau ; rendement moyen des réseaux ; répartition régie / délégation de service public | services.eaufrance.fr (observatoire SISPEA) ; FP2E |
| `eco-eau-outremer` | Taux de fuites des réseaux en Guadeloupe et à Mayotte ; nombre d'habitants soumis à des tours d'eau ; plan Eau DOM | Cour des comptes (rapports eau Outre-mer) ; Sénat (rapports d'information) ; ministère des Outre-mer |
| `eco-biodiversite` | Part du territoire en aires protégées et en **protection forte** ; adoption et financement de la Stratégie nationale biodiversité 2030 | OFB ; ecologie.gouv.fr (SNB 2030) |
| `eco-ocean` | Part des eaux françaises sous aire marine protégée vs sous protection forte ; état des stocks halieutiques exploités durablement ; règles PCP en vigueur | OFB ; Ifremer (diagnostic annuel des stocks) ; Commission européenne (DG MARE) |
| `eco-forets` | Surface forestière et évolution du puits de carbone forestier ; effectifs de l'ONF et contrat État-ONF en cours | IGN (inventaire forestier national) ; Citepa ; onf.fr |
| `eco-pesticides` | Indicateur NODU / HRI-1 et trajectoire du plan Écophyto 2030 ; statut légal des néonicotinoïdes (loi n° 2016-1087) | agriculture.gouv.fr ; anses.fr ; legifrance.gouv.fr |
| `eco-sols` | Rythme annuel d'artificialisation ; objectif ZAN de la loi n° 2021-1104 et modifications apportées depuis (lois n° 2023-630 et suivantes) | Cerema (portail de l'artificialisation) ; legifrance.gouv.fr |
| `eco-dechets` | Production de déchets par habitant ; taux de recyclage des emballages ménagers ; dispositifs de la loi AGEC n° 2020-105 effectivement entrés en vigueur (indices de réparabilité et de durabilité, consigne) | ADEME ; legifrance.gouv.fr |
| `eco-publicite` | Interdiction de la publicité pour les énergies fossiles (art. 7 loi n° 2021-1104) ; encadrement des allégations de neutralité carbone (décret n° 2022-539) ; statut de l'ARPP (autorégulation) | legifrance.gouv.fr ; ADEME ; arpp.org |
| `eco-investissement` | Besoin d'investissement annuel supplémentaire chiffré par le rapport Pisani-Ferry/Mahfouz ; montants engagés (France 2030, budget vert du PLF) | France Stratégie ; budget.gouv.fr (budget vert) |
| `eco-emplois-transition` | Effectifs des « métiers verts et verdissants » ; dispositifs existants de reconversion (Transitions collectives) | SDES ; DARES ; travail-emploi.gouv.fr |
| `agri-condition-animale` | Statut juridique de l'animal (art. 515-14 du code civil, L.214-1 du code rural) ; mesures de la loi n° 2021-1539 déjà en vigueur (broyage des poussins, cirques 2028) ; part des poules pondeuses élevées hors cage | legifrance.gouv.fr ; ITAVI/CNPO ; agriculture.gouv.fr |
| `sante-toxiques` | Loi PFAS n° 2025-188 (périmètre et calendrier d'interdiction) ; nombre annuel d'inspections d'ICPE ; montant de l'amende administrative maximale ICPE ; plan chlordécone en cours | legifrance.gouv.fr ; ecologie.gouv.fr (bilan de l'inspection des installations classées) ; DGPR |

### 3.b Bloc copiable pour `data/axes.json` (à compléter par les baselines vérifiées)

```json
[
  { "id": "eco-planification", "theme": "ecologie-climat-energie", "label": "Planification écologique & objectifs climatiques", "ordre": 24 },
  { "id": "eco-energie-mix", "theme": "ecologie-climat-energie", "label": "Mix énergétique & énergies renouvelables", "ordre": 25 },
  { "id": "eco-nucleaire", "theme": "ecologie-climat-energie", "label": "Nucléaire : sortie, sûreté, déchets", "ordre": 26 },
  { "id": "eco-energie-prix", "theme": "ecologie-climat-energie", "label": "Prix de l'énergie, marché et service public de l'énergie", "ordre": 27 },
  { "id": "eco-renovation", "theme": "ecologie-climat-energie", "label": "Rénovation énergétique & sobriété des bâtiments", "ordre": 28 },
  { "id": "eco-adaptation", "theme": "ecologie-climat-energie", "label": "Adaptation au changement climatique & risques naturels", "ordre": 29 },
  { "id": "eco-eau-ressource", "theme": "ecologie-climat-energie", "label": "Eau : partage de la ressource, qualité des milieux & gouvernance des bassins", "ordre": 30 },
  { "id": "eco-eau-service", "theme": "ecologie-climat-energie", "label": "Droit à l'eau : gestion publique, tarification & assainissement", "ordre": 31 },
  { "id": "eco-eau-outremer", "theme": "ecologie-climat-energie", "label": "Eau et assainissement dans les Outre-mer", "ordre": 32 },
  { "id": "eco-biodiversite", "theme": "ecologie-climat-energie", "label": "Biodiversité terrestre & espaces protégés", "ordre": 33 },
  { "id": "eco-ocean", "theme": "ecologie-climat-energie", "label": "Océans, littoraux & fonds marins", "ordre": 34 },
  { "id": "eco-forets", "theme": "ecologie-climat-energie", "label": "Forêts & filière bois", "ordre": 35 },
  { "id": "eco-pesticides", "theme": "ecologie-climat-energie", "label": "Pesticides & intrants agricoles", "ordre": 36 },
  { "id": "eco-sols", "theme": "ecologie-climat-energie", "label": "Sols, artificialisation & foncier", "ordre": 37 },
  { "id": "eco-dechets", "theme": "ecologie-climat-energie", "label": "Déchets, réemploi & durabilité des produits", "ordre": 38 },
  { "id": "eco-publicite", "theme": "ecologie-climat-energie", "label": "Publicité, greenwashing & sobriété de la consommation", "ordre": 39 },
  { "id": "eco-investissement", "theme": "ecologie-climat-energie", "label": "Financement de la transition écologique", "ordre": 40 },
  { "id": "eco-emplois-transition", "theme": "ecologie-climat-energie", "label": "Emplois, formation & reconversions de la transition", "ordre": 41 },
  { "id": "agri-condition-animale", "theme": "agriculture-alimentation", "label": "Condition animale (élevage, chasse, expérimentation)", "ordre": 42 },
  { "id": "sante-toxiques", "theme": "sante", "label": "Pollutions, toxiques & risques industriels", "ordre": 43 }
]
```

---

## 4. Reliquats et renvois hors périmètre

### 4.1 Reliquats LFI — 34 propositions à réabsorber au bon chantier

Rencontrées dans les chapitres 12-14 mais relevant manifestement d'un autre méta-thème. **Non
extraites** dans le draft écologie ; verbatim reproduit ici pour que le chantier compétent puisse
les reprendre sans relire la source.

**12.1 — La bifurcation écologique pour une société de l'harmonie** (2)
- *Économie / industrie* — « Créer une Agence pour les relocalisations dépendant du Conseil à la planification écologique, chargée de recenser les secteurs industriels indispensables à la souveraineté nationale et à la bifurcation écologique, et d'établir un plan de relocalisation pour chaque filière ou production stratégique identifiée. »
- *Transports / logistique* — « Mettre en place une logistique verte : rompre avec les flux tendus, développer les modes de transport propres et structurer une logistique territoriale, notamment en renforçant le rôle du train, du fluvial et en mutualisant les flux du dernier kilomètre. »

**12.2 — L'organisation de l'État au service de la planification écologique** (4)
- *Institutions & démocratie* — « Supprimer les régions transfrontalières (ou eurorégions) »
- *Institutions & démocratie* — « Interdire le « droit à la différenciation » – qui permettrait que des règles différentes s'appliquent selon les territoires – afin de garantir l'égalité entre les citoyens. »
- *Institutions & démocratie* — « Réserver le statut de collectivité unique aux territoires insulaires et des Outre-mer. »
- *Institutions & démocratie* — « Recomposer les assemblées régionales à partir des élections des conseillers départementaux. »

**12.3 — Les Outre-mer, avant-postes de la planification écologique** (3)
- *Europe / international & fiscalité* — « Instaurer un bouclier douanier via une taxe kilométrique en faveur des productions locales à faible empreinte écologique. »
- *Europe / international* — « Appliquer une préférence commerciale pour les produits ultramarins vers l'Hexagone et l'Europe et nouer des partenariats commerciaux équilibrés avec les voisins régionaux. »
- *Agriculture & alimentation* — « Tendre vers l'autosuffisance alimentaire grâce à l'agriculture paysanne écologique et des filières agroalimentaires locales. »

**13.1 — Investir pour lancer la bifurcation de notre économie** (1)
- *Fiscalité* (axe existant `fisc-aides-entreprises` ou `fisc-niches`) — « Annuler les cadeaux fiscaux accordés sans contrepartie aux plus grandes entreprises ces dix dernières années. »

**13.2 — Développer les transports publics écologiques, repenser la mobilité individuelle** (14 — chapitre entier)
- *Logement, transports & territoires* — « Créer un pôle public des transports et de la mobilité. »
- « Renationaliser la SNCF et refuser la mise en concurrence des lignes de transport. »
- « Refuser la suppression des lignes ferroviaires du quotidien et en réouvrir, augmenter le nombre de trains et garantir des tarifs accessibles, maintenir des guichets physiques dans les gares. »
- « Créer une commission d'enquête sur le chantier ferroviaire du Lyon-Turin, projet écocidaire au coût démesuré. »
- « Revenir sur la liquidation de Fret SNCF poussée par la Commission européenne et mise en place par le gouvernement ; défendre l'opérateur public et développer massivement le fret ferroviaire en rendant obligatoire le raccordement des plateformes logistiques. »
- « Développer les transports publics à la demande hors des zones denses de transport public. »
- « Supprimer les lignes aériennes quand l'alternative en train est inférieure à quatre heures. »
- « Repenser la mobilité individuelle en développant les usages partagés de la voiture et les mobilités douces (comme le vélo) »
- « Limiter la taille, le poids et les dimensions des SUV autorisés à la vente et développer la construction française de véhicules électriques légers. »
- « Décréter un moratoire sur les zones à faibles émissions (ZFE) dans leur conception actuelle, dont les critères induisent des inégalités sociales et une trop grande tolérance à l'égard de certains véhicules, notamment les SUV, qualifiés à tort de non-polluants. »
- « Garantir l'accès aux réseaux dans les territoires peu dotés en transports collectifs par le soutien aux garages solidaires et une aide suffisante à la réparation dans le cadre du contrôle technique. »
- « Adopter un plan de développement du ferroutage et de report modal (cabotage maritime, fluvial et dirigeable) »
- « Renationaliser les autoroutes, en revenant sur les hausses de prix passées, ainsi que les aéroports stratégiques. »
- « Engager un plan spécifique de développement des transports collectifs en Outre-mer, quasi inexistants aujourd'hui, sur le modèle du projet de tram-train à La Réunion. »

**13.5 — Souveraineté alimentaire et révolution agricole** (9)
- *Agriculture & alimentation* — « Instaurer une agriculture relocalisée, diversifiée et écologique et créer 300 000 emplois agricoles. »
- « Garantir des prix rémunérateurs aux producteurs par des prix planchers pour les agriculteurs, interdire les ventes à perte et mettre en place une caisse de défaisance pour reprendre les dettes agricoles des convertis au 100 % bio. »
- *Protection sociale* — « Garantir aux agricultrices et agriculteurs le droit à une retraite digne en engageant une réforme du système des retraites agricoles. »
- « Refondre la PAC (politique agricole commune) et orienter les aides publiques agricoles pour favoriser la production écologiquement soutenable, l'intensité en main d'œuvre des exploitations et le développement des protéines végétales. »
- « Faire une réforme agraire pour encourager l'installation de nouveaux agriculteurs et permettre le développement d'un tissu de nombreuses exploitations à taille humaine. »
- *Europe / international & agriculture* — « Instaurer un protectionnisme écologique en fonction des conditions de production et de rémunération du travail agricole : appliquer la clause de sauvegarde pour interdire l'importation de produits mettant en cause une norme sanitaire nationale et garantir un prix minimum d'entrée face à la concurrence déloyale. »
- « Limiter le prix final des produits alimentaires en fixant des coefficients multiplicateurs et en encadrant les marges des industries agro-alimentaires et de la grande distribution. »
- « Développer les circuits courts pour réduire la circulation des marchandises et l'utilisation d'emballages. »
- « Protéger nos produits du terroir de la concurrence internationale en garantissant les moyens de l'Institut national de l'origine et de la qualité (INAO), qui permet de maintenir l'Appellation d'origine protégée (AOP), l'Appellation d'origine contrôlée (AOC) et l'Indication géographique protégée (IGP) »

**14.2 — L'eau, enjeu central pour l'Humanité** (1)
- *Logement, transports & territoires* — « Systématiser le recours au fret fluvial dès que possible en respectant la biodiversité. »

### 4.2 Renvois : contenu écologie **hors** du périmètre confié (repéré, non extrait)

C'est le point d'attention principal. Sept axes proposés sont aujourd'hui déséquilibrés parce que
la matière de l'autre candidat se trouve dans un chapitre hors périmètre.

| Axe concerné | Manque | Où se trouve la matière |
|---|---|---|
| `eco-renovation` (LFI 7 / EELV 1) | Écologistes | **ch. 2 « Pouvoir se loger décemment »**, propositions 8 (500 000 rénovations performantes/an, précarité énergétique), 9 (fin du fioul en 2032), 10 (reconversion de la filière bâtiment) |
| `eco-dechets` et `eco-publicite` (LFI 10 / EELV 0) | Écologistes | **ch. 19 « Prioriser l'économie circulaire »** (10 propositions : écoconception, réemploi, REP, fast fashion, et prop. 5 « Encadrer strictement la publicité ») |
| `sante-toxiques` (LFI 7 / EELV 0) | Écologistes | **ch. 28 « Sortir de la civilisation des toxiques »** (12 propositions : PFAS, pollueur-payeur, ICPE, qualité de l'air) — chapitre rattaché à `sante` par la décision éditoriale n° 2 |
| `eco-investissement` et `eco-emplois-transition` (LFI 2+3 / EELV 0) | Écologistes | **ch. 20 « Planifier une nouvelle industrialisation »** (fonds souverain, loi de programmation industrielle, électrification des procédés) |
| `eco-ocean` (EELV 9 / LFI 1) | LFI | **ch. 18.1 « Protéger les mers et océans » (13 propositions) et 18.2 « Être à la hauteur de la responsabilité maritime française » (6 propositions)** — l'essentiel de la matière océan de LFI est là |
| `eco-investissement` / `eco-emplois-transition` | LFI (complément) | **ch. 9.3 « Lancer des grands chantiers écologiques, créateurs d'emplois »** |
| `eco-biodiversite` (volet international) | LFI (complément) | **ch. 16.6 « Étendre les protections du droit international aux biens communs planétaires »** |
| `eco-pesticides` / `agri-condition-animale` | Écologistes (complément) | **ch. 12 « Transformer notre modèle agricole »** — renvoi explicite depuis la proposition 8-2 du programme (« cf. aussi les propositions 12-8 et 12-9 ») ; et **ch. 11-8** (réduction de la consommation de produits animaux), cité par l'introduction du ch. 8 |
| `eco-eau-outremer` (LFI 9 / EELV 0) | Écologistes | **ch. 46 « Accomplir l'égalité avec tous les territoires dits d'Outre-mer »** (à vérifier) |
| Axe transports (à créer) | les deux | **EELV ch. 3** (12 propositions) ↔ **LFI 13.2** (14 propositions, en reliquat ci-dessus) : les deux corpus sont complets et directement comparables, il ne manque que le chantier |

**Recommandation** (décision éditeur) : avant de publier les axes `eco-renovation`, `eco-dechets`,
`eco-publicite`, `sante-toxiques`, `eco-investissement`, `eco-emplois-transition` et `eco-ocean`,
faire une passe complémentaire sur EELV ch. 2/19/20/28/46 et LFI ch. 18. Sinon l'affichage
laissera croire à un silence programmatique qui n'existe pas — ce serait un biais de lecture
créé par le découpage du chantier, pas par les programmes.

---

## 5. Thématiques fines à créer dans `data/taxonomie.json` (propositions)

Le méta-thème `ecologie-climat-energie` ne compte aujourd'hui que **3 thématiques fines**
(`fiscalite-verte`, `climat-adaptation`, `justice-environnementale`) : insuffisant pour taguer
181 mesures. 21 thématiques sont proposées ci-dessous (je ne modifie pas le fichier).

### Sous `ecologie-climat-energie`
| id proposé | Label | Justification (1 ligne) |
|---|---|---|
| `climat-attenuation` | Climat : objectifs & décarbonation | Pendant « atténuation » de `climat-adaptation`, qui ne couvre que l'adaptation |
| `energie-production` | Énergie : production, mix & réseaux | Sujet massif (renouvelables, réseaux, stockage) sans étagère à ce jour |
| `nucleaire` | Nucléaire | Point de clivage explicite entre programmes ; doit être filtrable seul |
| `energie-prix-marche` | Prix de l'énergie & marché de l'électricité | Sujet de pouvoir d'achat, distinct du mix (tarifs, ARENH, libéralisation) |
| `sobriete-efficacite` | Sobriété & efficacité énergétique | Regroupe rénovation thermique, CEE, sobriété du tertiaire |
| `biodiversite` | Biodiversité & espaces naturels | Critère de rattachement déjà présent dans le méta-thème, sans thématique |
| `ocean-littoral` | Océans, littoraux & fonds marins | Idem ; distinguer l'écosystème de l'activité de pêche (décision n° 11) |
| `forets` | Forêts & sylviculture | Idem ; 22 mesures concernées |
| `eau` | Eau & milieux aquatiques | Idem ; 43 mesures concernées, le plus gros volume du chantier |
| `sols-artificialisation` | Sols & artificialisation | Décision n° 9 range les sols en écologie mais aucune thématique ne l'incarne |
| `dechets-economie-circulaire` | Déchets & économie circulaire | Sujet autonome (réemploi, durabilité des produits, REP) |
| `pollutions-toxiques` | Pollutions & substances toxiques | Permet de retrouver sous le filtre Écologie des mesures dont le principal est `sante` (cf. décision n° 2 et cas `lfi-drogues-07`) |
| `publicite-consommation` | Publicité & sobriété de la consommation | 4 mesures LFI + 1 EELV ; alternative possible : rattacher à `culture-sport-medias` |

### Sous `agriculture-alimentation`
| id proposé | Label | Justification |
|---|---|---|
| `peche-aquaculture` | Pêche & aquaculture (activité) | Application directe de la décision n° 11 (activité vs écosystème), aujourd'hui impossible faute de tag |
| `foncier-agricole` | Foncier agricole | SAFER, accaparement, transmission : distinct de `sols-artificialisation` |
| `pesticides-intrants` | Pesticides & intrants | Objet à cheval agriculture/biodiversité/santé, très cotagué |

### Sous `sante`
| id proposé | Label | Justification |
|---|---|---|
| `sante-environnementale` | Santé environnementale | Nommée dans les critères de `sante` (décision n° 2) mais sans thématique existante |

### Sous `justice-securite-libertes`
| id proposé | Label | Justification |
|---|---|---|
| `securite-civile` | Sécurité civile & gestion de crise | Pompiers, SDIS, moyens anti-incendie : ni police, ni justice, ni défense |

### Sous `logement-transports-territoires`
| id proposé | Label | Justification |
|---|---|---|
| `logement` | Logement & habitat | Nécessaire au cotag des mesures de rénovation thermique |
| `mobilites` | Mobilités & transports | Nécessaire au chantier transports (reliquats du §4.1) |

### Sous `economie-travail-entreprises`
| id proposé | Label | Justification |
|---|---|---|
| `emploi-travail` | Emploi, travail & reconversions | Cotag des mesures de reconversion et de conditions de travail (nucléaire, forêt, mer) |

> ⚠️ Tant que ces thématiques n'existent pas dans `data/taxonomie.json`, les drafts référencent
> des identifiants inconnus. C'est signalé dans le champ `_draft.avertissement_thematiques` de
> chaque fichier. Le typage `src/lib/types.ts` ne l'attrapera pas (les thématiques sont des
> `string[]`) : la vérification est à faire à la fusion.

---

## 6. Cas-frontières et cotags — questions fermées pour l'éditeur

### 6.1 Classement

| # | Question | Réponse retenue par défaut dans le draft |
|---|---|---|
| Q1 | L'axe `agri-condition-animale` doit-il rester sous `agriculture-alimentation` (décision n° 13) plutôt que sous `ecologie-climat-energie` ? — sachant que la table de rattachement par chapitre range EELV ch. 8 sous écologie. **Oui / Non** | **Oui** (décision n° 13, plus fine et plus récente) — conséquence : 17 mesures sortent de la page Écologie sauf cotag `biodiversite` |
| Q2 | L'axe `sante-toxiques` doit-il rester sous `sante` (décision n° 2 + `rattachements-lfi.md` : 14.1 → santé principal) plutôt que sous `ecologie-climat-energie` ? **Oui / Non** | **Oui** — visibilité écologie assurée par le cotag `pollutions-toxiques` |
| Q3 | Faut-il scinder l'eau en trois axes (`eco-eau-ressource`, `eco-eau-service`, `eco-eau-outremer`) plutôt qu'un axe `eco-eau` unique ? **Oui / Non** | **Oui** (43 mesures : un axe unique serait illisible) |
| Q4 | `eco-publicite` doit-il rester un axe distinct de `eco-dechets` ? **Oui / Non** | **Oui** (l'objet est la demande, pas le déchet) |
| Q5 | LFI 12.1 « Instaurer un crime climatique de dissimulation et de tromperie sur les émissions carbone des entreprises » : la laisser dans `eco-planification` plutôt que dans l'axe existant `just-justice` (où vivent les mesures EELV de justice environnementale) ? **Oui / Non** | **Oui**, avec cotag `justice-environnementale` |
| Q6 | EELV 1-12 (marché carbone ETS2, fonds social pour le climat) : la laisser dans `eco-energie-prix` plutôt que dans l'axe existant `fisc-verte` ? **Oui / Non** | **Oui**, avec cotag `fiscalite-verte` |
| Q7 | EELV 1-5 (réforme des Certificats d'économie d'énergie) : la laisser dans `eco-renovation` plutôt que dans `eco-energie-prix` ? **Oui / Non** | **Oui** (les CEE financent d'abord la rénovation) |
| Q8 | EELV 10-5 (découplage taxe foncière / THRS, taxe additionnelle au profit des EPFL) : la laisser dans `eco-sols` (objectif affiché = préserver les terres agricoles) plutôt que dans l'axe existant `fisc-fonciere` ? **Oui / Non** | **Oui**, avec cotags `finances-locales` et `impots-menages` |
| Q9 | EELV 10-3 et 10-4 (SAFER, offices fonciers solidaires, accaparement des terres) : les garder dans `eco-sols` avec `foncier-agricole` en thématique **principale** plutôt que les renvoyer au chantier Agriculture ? **Oui / Non** | **Oui** (elles restent visibles sous les deux filtres) |
| Q10 | LFI 13.5 « Planifier la réduction progressive des doses d'engrais et de pesticides… » : l'extraire ici dans `eco-pesticides` (pour l'aligner avec EELV 5-1) alors que son chapitre d'origine est agricole ? **Oui / Non** | **Oui** — sans elle, l'axe `eco-pesticides` n'aurait qu'un seul candidat |
| Q11 | LFI 12.2 « Redécouper les Régions à partir des bassins versants et leur confier l'eau comme première responsabilité » : la classer dans `eco-eau-ressource` plutôt qu'en reliquat Institutions ? **Oui / Non** | **Oui** (l'objet visé est la gestion de l'eau) |
| Q12 | LFI 12.2 (implication des communes, assemblées citoyennes régionales, ingénierie territoriale) : les garder dans `eco-planification` plutôt qu'en reliquat Institutions ? **Oui / Non** | **Oui** (leur objet est explicitement la planification écologique) |
| Q13 | EELV 4-7, 4-8 (missions de la sécurité civile, statut du pompier volontaire) et LFI 14.4 (moyens de lutte contre les feux de forêt) : les garder dans `eco-adaptation` plutôt que les renvoyer au chantier Sécurité ? **Oui / Non** | **Oui**, avec cotag `securite-civile` |
| Q14 | EELV 4-9 (tourisme durable, surtourisme) : la garder dans `eco-adaptation` ? **Oui / Non** | **Oui** — mais c'est la mesure la plus contestable de l'axe (objet = économie touristique) |
| Q15 | LFI 14.1 « Prendre en charge et indemniser les victimes […] des essais nucléaires français » : cotag `nucleaire` en plus de `sante-environnementale` / `pollutions-toxiques` ? **Oui / Non** | **Oui** (elle doit apparaître sous le filtre Nucléaire) |
| Q16 | Les 14 propositions transports de LFI 13.2 doivent-elles rester **hors** du draft écologie (reliquat), en attendant un chantier transports où elles seront comparées à EELV ch. 3 ? **Oui / Non** | **Oui** |

### 6.2 Test de renversement

Chaque axe a été nommé par son **objet de politique publique**, jamais par le cadrage d'un parti :
« planification écologique » (formule LFI), « bifurcation », « prospérité écologique » (formule
EELV) et « harmonie avec la nature » n'apparaissent dans aucun label d'axe ni de thématique
proposés — conformément au principe n° 1 de `choix-editoriaux.md`. Seule exception à surveiller :
l'axe `eco-planification`, dont le label contient « planification écologique ». Le mot est
utilisé par les deux programmes (LFI 12.1/12.2, EELV 5-4 « Créer une planification écologique
cohérente ») et par le vocabulaire administratif français (SGPE), mais l'éditeur peut préférer
**« Objectifs climatiques & gouvernance de la transition »** s'il juge le terme trop marqué.

---

## 7. Points douteux, anomalies de source et propositions d'enrichissement du process

### 7.1 Anomalies de source rencontrées (conservées telles quelles, signalées)

1. **Écologistes, ch. 4 — numérotation trouée** : la source passe de la proposition 5 à la
   proposition 7, sans texte intermédiaire. Anomalie déjà consignée par le rapport de
   normalisation. Les numéros imprimés ont été conservés dans `rubrique_origine` : il n'existe
   donc pas de mesure « proposition 6 » pour ce chapitre. **Rien n'a été perdu**, mais un
   relecteur qui compte les mesures verra un trou.
2. **LFI 13.5 — proposition coupée par la source elle-même** : la source publie
   `<div class="mesure">Mettre en place un plan de protection généralisée du foncier agricole,
   forestier</div>` puis, dans un paragraphe ordinaire,
   `<p>et naturel en vue de mettre en œuvre le « zéro artificialisation nette » des sols dès 2027
   en hexagone</p>`. C'est **une seule phrase**. Elle a été recollée en une mesure
   (`lfi-sols-02`), et le fait est consigné dans son `rubrique_origine`. Le miroir `.md` la
   présente encore sur deux lignes. **À confirmer par l'éditeur.**
3. **Écologistes, ch. 8 prop. 2** : le verbatim se termine par un renvoi interne
   « [cf aussi les propositions sur la transition de l'élevage et les systèmes pastoraux 12-8 et
   12-9] ». Conservé (fidélité), mais l'éditeur peut vouloir le sortir comme les badges `[EUROPE]`.
   Même question pour les « [cf proposition 20-5] » présents ailleurs dans le programme.
4. **Écologistes — micro-artefacts** hérités du PDF et conservés bruts : ponctuation manquante en
   fin de phrase (ch. 9 prop. 1 : « …fruits locaux…) Ralentir le cycle de l'eau »), espaces
   manquantes. Non corrigés : ce serait modifier le verbatim.
5. **LFI — ponctuation** : le site ne termine jamais ses puces par un point. La convention du
   corpus (point final ajouté) a été appliquée aux 116 mesures, comme pour les 97 mesures LFI
   déjà en base.
6. **Écologistes — badges `[EUROPE]`** : 5 mesures concernées (`eco-energie-prix-02`,
   `eco-ocean-07/08/09`, `eco-forets-06`). Badge retiré du verbatim, reporté en
   `rubrique_origine` sous la forme « (proposition N, badge [EUROPE]) », comme pour
   `eco-terrorisme-09` déjà en base.

### 7.2 Décisions que je n'ai pas prises (et que je n'ai pas devinées)

- Le rattachement de méta-thème des axes `agri-condition-animale` et `sante-toxiques` (Q1, Q2) :
  la table de rattachement par chapitre et les décisions n° 2/13 de `choix-editoriaux.md` ne
  disent pas exactement la même chose selon qu'on lit au grain chapitre ou au grain mesure.
- La création des 21 thématiques fines (§5).
- L'opportunité d'une passe complémentaire hors périmètre (§4.2) avant publication.

### 7.3 Enrichissements proposés pour `data/PROCESS-extraction.md` (je ne l'ai pas modifié)

1. **§4 — QC caractère-par-caractère sur PDF deux colonnes.** Ajouter la méthode
   `pdftotext -bbox-layout` + reconstruction de l'ordre de lecture par coordonnées :
   affecter chaque `<line>` à la colonne gauche si son centre est à gauche de la médiane de page
   **ou si sa largeur dépasse ~250 pt** (chapô courant sur les deux colonnes), puis trier par
   (colonne, y, x). Sur ce PDF, le test de « sous-séquence ordonnée de tokens » donnait 59/65 avec
   6 faux négatifs ; la reconstruction par coordonnées donne 63/65 en sous-chaîne **exacte**, les
   2 restants étant les mots composés restaurés (`méga-bassines`, `bien-être`), soit 65/65 après
   neutralisation des traits d'union. C'est un vrai contrôle caractère-par-caractère, pas un proxy.
2. **§1 — piège HTML LFI.** Les pages `melenchon2027.fr/programme2025/livre/chapitreN/sM` utilisent
   **deux** classes pour les propositions : `<div class="mesure">` et, pour la **première
   proposition de chaque sous-section**, `<div class="mesure-cle">`. Un extracteur ou un testeur
   qui n'interroge que `class="mesure"` perd systématiquement 1 proposition par sous-section
   (12 sur 116 ici).
3. **§1 — deuxième piège HTML LFI.** Une proposition peut être coupée par la source entre un
   `<div class="mesure">` et un `<p class="wp-block-paragraph">` qui suit (cas 13.5). À détecter
   en repérant les paragraphes qui commencent par une minuscule ou une conjonction.
4. **§7 — règle de grain.** Quand un chantier est défini par une liste de chapitres, il faut
   systématiquement produire (a) la liste des reliquats (contenu d'un autre méta-thème trouvé
   dans le périmètre) et (b) la liste des renvois (contenu du méta-thème trouvé hors périmètre) —
   sans quoi le déséquilibre d'un axe entre candidats devient impossible à interpréter.

---

## 8. Fichiers produits

- `data/drafts/lfi-ecologie.draft.json` — 116 mesures.
- `data/drafts/ecologistes-ecologie.draft.json` — 65 mesures.
- `data/drafts/ecologie.rapport.md` — ce rapport.

Aucun fichier de `data/candidats/`, `data/axes.json`, `data/taxonomie.json`,
`data/choix-editoriaux.md` ou `src/` n'a été touché. Aucun commit n'a été fait.
