# Rapport d'extraction — Écologie : **3ᵉ passe**, volet industriel LFI (ch. 9.2)

- **Date** : 2026-07-31
- **Livrables** : `data/drafts/lfi-ecologie-industrie.draft.json` (4 mesures), ce rapport.
- **Statut** : **brouillon**. Rien n'a été écrit dans `data/candidats/*`, `data/axes.json`,
  `data/taxonomie.json`, `data/choix-editoriaux.md`, `data/sources/` ni `src/`. Aucun commit.
- **Objet** : combler le trou identifié par le §6.3 / §7.2 du rapport complémentaire — le chapitre
  LFI **9.2 « Réindustrialiser et relocaliser pour assurer notre indépendance »** n'était dans
  aucun des deux périmètres précédents, alors que le chapitre industriel d'EELV (ch. 20) était
  entré au 2ᵉ lot. `eco-investissement` affichait donc 4 mesures industrielles EELV contre 1 LFI :
  une asymétrie produite par notre découpage, pas par les programmes.
- **Périmètre de cette passe** : LFI section **9.2 uniquement**, volet écologique. Aucun autre
  chapitre ouvert, aucune mesure des lots 1 et 2 modifiée.
- **Fichiers destinés à être fusionnés** avec `lfi-ecologie.draft.json` et
  `lfi-ecologie-complement.draft.json`, dont ce lot est la suite (numérotation d'ids continue).

---

## 0. Étape 0 — Source (inchangée, revérifiée)

Aucune source nouvelle, aucun re-téléchargement (moindre coût) : le chapitre 9.2 est déjà dans
l'archive brute captée le 2026-07-25.

| Contrôle | Réponse |
|---|---|
| Document | « L'Avenir en Commun », édition 2025 |
| Officielle ? | Oui — `melenchon2027.fr`, site de campagne du candidat |
| Présidentielle 2027 ? | Oui — programme présenté le 28/01/2025 |
| Bon périmètre ? | Oui. Piège « PROGRAMME-FRONT-POPULAIRE » (coalition NFP 2024, législatives) toujours évité |
| Archive brute | `data/sources/raw/lfi-melenchon2027-2025_html.tar.gz` → `lfi_sub/chapitre9_s2.html` |
| Source faisant foi (`source_url`) | `https://melenchon2027.fr/programme2025/livre/chapitre9/s2` |

**Méthode de récupération** — changement par rapport aux deux passes précédentes : le lot étant
petit, les verbatims ont été **extraits directement de l'archive brute HTML** (blocs
`<div class="mesure">` **et** `<div class="mesure-cle">`), et non du miroir `.md`. Le miroir n'a
servi qu'à un contrôle de cohérence croisé (§2.b). C'est un cran de fidélité en plus : le texte du
draft n'a jamais transité par la normalisation.

**Piège LFI vérifié** : la section compte **15 blocs**, dont le premier porte bien la classe
`mesure-cle` (« Relocaliser les productions essentielles à la vie de notre pays ») — il aurait été
perdu par un extracteur ne cherchant que `class="mesure"`. Recherche également faite, sans
résultat, des deux autres pièges documentés : aucun caractère `\x0b`, aucun « • » littéral (pas de
puces fusionnées) et aucun `<p class="wp-block-paragraph">` autre que le chapô (pas de proposition
coupée). **15 blocs = 15 propositions**, en accord avec les 15 lignes du miroir `.md`.

---

## 1. Volume extrait

| | LFI ch. 9.2 |
|---|---|
| Propositions présentes dans la section | **15** |
| **Mesures extraites (draft)** | **4** (axe `eco-investissement`) |
| Reliquats signalés pour le chantier Économie | **11** (verbatim intégral au §4) |
| Mesures sur `eco-emplois-transition` | **0** — voir §3.b |
| `synthese: true` produits | 0 |

Une mesure = une proposition mot-pour-mot, aucune fusion, aucune élision (aucun verbatim n'a
nécessité de `[…]`). Seules transformations, conventions déjà en vigueur dans le corpus :
normalisation des espaces (dont insécables) et **ajout d'un point final** quand la source n'en a
pas — sauf fin en `)` ou `:` (convention observée sur 18 mesures LFI déjà en base). Concrètement :
3 mesures ont reçu un point, `lfi-investissement-05` (fin en « aluminium, etc.) ») n'en a pas reçu.

### 1.a Les 4 mesures extraites

| id | Axe | Thématiques | Motif d'entrée dans le chantier |
|---|---|---|---|
| `lfi-investissement-04` | `eco-investissement` | `climat-attenuation`, `entreprises` | Élargissement du contrôle des investissements étrangers **« à tous les secteurs cruciaux de la bifurcation écologique »** — protection de l'appareil productif de la transition. **La plus contestable du lot** (cf. Q1) |
| `lfi-investissement-05` | `eco-investissement` | `climat-attenuation`, `entreprises`, `energie-production` | Plan de reconstruction industrielle explicitement **« pour soutenir la bifurcation écologique (recyclage des batteries, aciers nécessaires aux énergies renouvelables, aluminium) »** — cœur de cible, pendant direct d'EELV 20-1/20-2 |
| `lfi-investissement-06` | `eco-investissement` | `climat-attenuation`, `entreprises`, `dette-budget` | Commande publique verte : marchés publics orientés vers les entreprises **« écologiques et locales »** (cf. Q2) |
| `lfi-investissement-07` | `eco-investissement` | `climat-attenuation`, `entreprises`, `dette-budget` | Conditionnalité écologique des aides d'État — pendant mot pour mot d'EELV `eco-investissement-04` (« Conditionner les aides aux entreprises à des contrats de transition ») et `eco-investissement-01` (cf. Q3) |

Toutes portent `climat-attenuation` en thématique **principale**, par cohérence avec les 4 mesures
EELV de l'axe (`eco-investissement-01` à `-04`), qui l'ont toutes en première position. Réserve
honnête : pour `lfi-investissement-04`, l'objet premier est la souveraineté industrielle et
`entreprises` serait un principal plus juste — mais la mesure sortirait alors du filtre Écologie.
**Décision laissée à l'éditeur** (Q1).

### 1.b Critère de partage appliqué (et pourquoi celui-là)

Le partage écologie / économie était l'enjeu de la passe. Règle retenue, énoncée avant extraction
puis appliquée mécaniquement :

> **Entre dans le chantier** la proposition dont l'objet est **l'appareil productif et sa
> transformation écologique** (décarbonation, reconversion, planification industrielle verte,
> commande publique et aides conditionnées à des objectifs écologiques, emplois de la transition).
> **Reste en reliquat Économie** la proposition dont l'objet est le **commerce extérieur, la
> douane, la fiscalité ou la souveraineté sans dimension écologique** — y compris quand un critère
> écologique n'y est qu'une **modalité** de l'instrument.

Cette règle n'est pas inventée ici : elle **reproduit le traitement déjà appliqué à EELV ch. 20**
par la 2ᵉ passe, qui a extrait les propositions 1, 2, 4, 5 (fonds souverain, loi de programmation,
sobriété compétitive, électrification des procédés) et laissé en reliquats les propositions 7
(protections douanières) et 8 (protectionnisme écologique aux frontières / MACF) **bien que
celle-ci soit explicitement écologique**. Appliquer à LFI une règle plus large qu'à EELV — c'est-à-dire
extraire ses droits de douane écologiques et sa taxe kilométrique — aurait fait échouer le test de
renversement. C'est la principale contrainte qui a guidé ce lot.

Corollaire assumé, à surveiller : deux propositions LFI **explicitement écologiques** restent donc
en reliquat (n° 7 « droits de douane sur des critères écologiques » et n° 6 « normes sociales et
écologiques pour la commercialisation des produits importés »). Elles sont signalées comme
questions ouvertes au §4, avec leur destination probable (l'axe **existant** `fisc-verte`, où la
2ᵉ passe adressait déjà EELV 20-8).

---

## 2. Contrôle qualité de fidélité (obligatoire)

Le lot faisant **moins de 10 mesures**, les **4 mesures ont été contrôlées**, aucune par
échantillonnage.

### 2.a Draft ↔ archive brute — **4/4 identiques**

Méthode : **re-décompression complète** de `lfi-melenchon2027-2025_html.tar.gz` dans un répertoire
neuf, re-parsing indépendant de `lfi_sub/chapitre9_s2.html`, puis relecture du draft **depuis le
disque** (et non depuis la mémoire du script de construction — sinon le test ne prouverait rien).
Comparaison **caractère par caractère** après normalisation NFC, neutralisation des espaces
insécables/multiples et de la convention de point final ; contrôle supplémentaire d'unicité du
bloc source apparié et d'égalité de longueur.

| Mesure | Bloc source | Longueur comparée | Résultat |
|---|---|---|---|
| `lfi-investissement-04` | bloc n° 3 | 305 car. | **identique** |
| `lfi-investissement-05` | bloc n° 4 | 293 car. | **identique** |
| `lfi-investissement-06` | bloc n° 5 | 113 car. | **identique** |
| `lfi-investissement-07` | bloc n° 13 | 193 car. | **identique** |

> **4/4 identiques.** Aucune divergence, aucune correction nécessaire — donc aucun arbitrage
> « corriger l'extraction, jamais le texte » à rendre sur ce lot.

### 2.b Contrôle croisé avec le miroir `.md` — 4/4 présents

Chaque verbatim a également été retrouvé comme **ligne entière** du miroir
`data/sources/lfi-avenir-en-commun-2025.md` (après mêmes neutralisations). Le miroir et l'archive
brute concordent donc sur ces 4 propositions : le miroir n'a introduit aucune altération sur ce
chapitre.

### 2.c Contrôles de cohérence (automatisés)

- **Aucune collision d'id** : les 4 nouveaux ids confrontés aux **420 ids existants**
  (`data/candidats/*.json` + les 4 brouillons des lots 1 et 2). Aucun doublon interne. La
  numérotation continue proprement la série (`lfi-investissement-01/02/03` existent déjà →
  nouveaux `-04` à `-07`).
- Schéma v0.2 respecté : **9 champs exactement** par mesure, aucun `synthese`, aucun espace double,
  aucun bord d'espace.
- `source_url` pointe l'original publié (`https://melenchon2027.fr/…/chapitre9/s2`) ; **aucun**
  renvoi au miroir `.md`.
- **Aucune nomenclature nouvelle** : l'axe `eco-investissement` et les 4 thématiques utilisées
  (`climat-attenuation`, `entreprises`, `energie-production`, `dette-budget`) proviennent toutes
  soit de `data/taxonomie.json` (`entreprises`, `dette-budget`), soit de la liste des 21
  thématiques proposées au §5 du 1er rapport (`climat-attenuation`, `energie-production`). Aucun
  axe créé.

---

## 3. Équilibre final des deux axes visés

### 3.a Chiffres avant / après (source : drafts + `data/candidats/*.json`)

| Axe | Avant cette passe (EELV / LFI) | **Après (EELV / LFI)** | Lecture |
|---|---|---|---|
| `eco-investissement` | 4 / 3 | **4 / 7** | Le faux silence est levé ; l'écart s'inverse en volume (cf. §3.c) |
| `eco-emplois-transition` | 1 / 3 | **1 / 3** | Inchangé — le ch. 9.2 ne contient **aucune** proposition sur les emplois de la transition (cf. §3.b) |

Détail après fusion des trois lots LFI sur `eco-investissement` (7 mesures) : `lfi-investissement-01`
et `-02` (ch. 13.1 : plan de 200 Md€, pôles publics et plans de filières « au service de la
bifurcation écologique »), `-03` (ch. 9.3 : efficacité et sobriété énergétiques), `-04` à `-07`
(ch. 9.2, ce lot). Côté EELV, les 4 mesures viennent toutes du ch. 20.

### 3.b Pourquoi `eco-emplois-transition` ne bouge pas

Le chapitre 9.2 parle abondamment d'emploi (« 30 000 emplois sacrifiés », plans sociaux,
délocalisations) mais **dans son chapô**, qui n'est pas une proposition. Aucune de ses 15
propositions ne porte sur la formation, la reconversion ou les métiers de la transition. La seule
qui touche à l'emploi — n° 14, « Rendre effectives les peines de réquisition d'intérêt général pour
toute délocalisation ou fermeture d'activité » — protège l'emploi **sans finalité écologique**,
alors que son quasi-jumeau déjà extrait, `lfi-emplois-transition-03` (« Créer un droit de reprise
d'activité préférentiel pour les salariés **dans un but écologique** en cas de cession ou de
fermeture d'entreprise »), porte cette finalité dans son texte. C'est précisément ce mot qui les
sépare (cf. Q4). L'axe reste donc à **EELV 1 / LFI 3**, déséquilibre déjà analysé au §3.c du 2ᵉ
rapport (les Écologistes traitent la reconversion **à l'intérieur** de leurs propositions
sectorielles) — cette passe ne le change ni ne l'aggrave.

### 3.c Avertissement de lecture sur le 4 / 7

L'écart de volume ne mesure pas un écart d'ambition : il mesure un **grain d'écriture**, comme déjà
signalé au §3 du 2ᵉ rapport. Les 4 propositions EELV du ch. 20 sont des blocs de 5 à 12 phrases
(le fonds souverain seul contient le livret industrie, le ciblage, la conditionnalité et la
gouvernance) ; les 4 propositions LFI ajoutées ici sont des puces d'une à trois lignes. En volume
de texte, le rapport est de l'ordre de 2 700 caractères côté EELV pour 900 côté LFI sur les mesures
ajoutées. **Un compteur de mesures par candidat affiché sur le site donnerait ici l'avantage
visuel à LFI à contenu comparable.** Choix d'affichage à trancher, pas défaut d'extraction.

Si l'éditeur répond « Non » aux questions Q1, Q2 et Q3 ci-dessous, l'axe revient à **4 / 4** avec
la seule `lfi-investissement-05` ajoutée — configuration défendable et la plus stricte.

---

## 4. Reliquats — 11 propositions pour le chantier Économie

Repérées dans le périmètre, non extraites, verbatim intégral reproduit pour que le chantier
compétent n'ait pas à relire la source (format du §4.1 du 1er rapport). Toutes proviennent de
**LFI ch. 9.2**, `https://melenchon2027.fr/programme2025/livre/chapitre9/s2`, date de publication
2025-01-28.

**Souveraineté & politique industrielle** (4)
- *Économie / industrie* — « Relocaliser les productions essentielles à la vie de notre pays. » — **proposition-clé de la section** (bloc `mesure-cle`). Non extraite : la relocalisation y est motivée par l'indépendance nationale, pas par l'empreinte écologique. **Cf. Q5.**
- *Économie / commerce* — « Adopter des mesures antidumping d'urgence sur les industries stratégiques : sidérurgie, automobile, pharmaceutique… »
- *Économie / finance* — « Exiger un dépôt de garantie préalable auprès de la Banque de France en contrepartie d'un investissement étranger dans le pays. »
- *Économie / emploi* — « Rendre effectives les peines de réquisition d'intérêt général pour toute délocalisation ou fermeture d'activité. » — **cf. Q4.**

**Commerce extérieur & douane** (4)
- *Europe / international* — « Faire l'inventaire et l'évaluation des accords déjà appliqués et imposer le respect des normes sociales et écologiques pour la commercialisation des produits importés en France. » — **contient de la matière écologique ; cf. Q6.**
- *Fiscalité verte / commerce* — « Instaurer des droits de douane sur des critères écologiques (émissions carbone, pollutions, empreinte hydrique, par exemple) » — **explicitement écologique ; candidate naturelle à l'axe existant `fisc-verte`, exactement comme EELV 20-8 (MACF) laissée en reliquat par la 2ᵉ passe. Cf. Q6.**
- *Fiscalité / commerce* — « Instaurer une taxe kilométrique aux frontières de la France pour dissuader les délocalisations et l'importation de produits trop éloignés. » — jumelle de la proposition 12.3 « bouclier douanier via une taxe kilométrique en faveur des productions locales à faible empreinte écologique », déjà en reliquat au 1er rapport : même traitement, par cohérence interne.
- *Europe / international* — « Renégocier le cadre de l'Organisation mondiale du commerce (OMC) »

**Fiscalité** (2)
- *Fiscalité / niches* — « Mettre fin aux niches fiscales sur le kérosène pour limiter le dumping du e-commerce depuis l'étranger. » — cotag transports/aérien probable.
- *Fiscalité / épargne* — « Supprimer les avantages fiscaux sur l'épargne française investie à l'étranger, notamment pour l'assurance-vie. »

**Commande publique & aides** (1)
- *Économie / commande publique* — « Établir des critères de localisation de l'activité pour la commande publique nationale et locale et pour l'accord des aides aux entreprises. » — jumelle « localisation » de `lfi-investissement-06` (critère écologique), extraite, elle. Si l'éditeur répond « Non » à Q2, les deux se retrouvent ensemble en Économie, ce qui est cohérent.

---

## 5. Questions fermées pour l'éditeur

Chaque question est **Oui / Non**, avec la réponse retenue par défaut dans le draft. Répondre
« Non » à Q1, Q2 et Q3 ramène `eco-investissement` à 4 / 4.

| # | Question | Défaut |
|---|---|---|
| Q1 | `lfi-investissement-04` (contrôle public des investissements étrangers, élargi « à tous les secteurs cruciaux de la bifurcation écologique ») : la garder dans `eco-investissement` plutôt qu'en reliquat Économie ? **Oui / Non** | **Oui** par défaut, mais c'est **la plus contestable des 4** : l'objet premier est le contrôle des capitaux étrangers, l'écologie n'y est qu'un périmètre d'extension. Symétrique inverse : la 2ᵉ passe a laissé en reliquat EELV 20-3 (« Protéger les entreprises industrielles stratégiques […] pour **verdir leur production** et éviter des délocalisations des émissions »), dont l'objet est très proche. **Traiter les deux de la même façon** : soit on entre les deux, soit on sort les deux. |
| Q2 | `lfi-investissement-06` (Code des marchés publics favorisant les entreprises « sociales et solidaires, écologiques et locales ») : la garder dans `eco-investissement` plutôt qu'en reliquat Économie / commande publique ? **Oui / Non** | **Oui** par défaut (la commande publique verte est un levier classique de financement de la transition), mais le critère écologique y est un des trois critères, à parité avec le social et le local. Aucun pendant EELV sur cet axe. |
| Q3 | `lfi-investissement-07` (conditionner toute aide d'État à des objectifs « sociaux, écologiques et fiscaux contraignants ») : la garder dans `eco-investissement` plutôt qu'en reliquat Fiscalité / aides aux entreprises ? **Oui / Non** | **Oui** — c'est celle des trois douteuses dont le pendant EELV est le plus net : `eco-investissement-04` (« Conditionner les aides aux entreprises à des contrats de transition ») et `eco-investissement-01` (« Conditionner ses investissements au respect… ») sont déjà sur l'axe. Les séparer casserait la comparaison. Réserve : le 1er lot a mis en reliquat Fiscalité la proposition 13.1 « Annuler les cadeaux fiscaux accordés sans contrepartie aux plus grandes entreprises », qui est de la même famille — mais sans critère écologique explicite. |
| Q4 | Proposition 9.2 n° 14 (« Rendre effectives les peines de réquisition d'intérêt général pour toute délocalisation ou fermeture d'activité ») : la laisser en reliquat Économie plutôt que sur `eco-emplois-transition` ? **Oui / Non** | **Oui** — elle ne porte aucune finalité écologique, contrairement à `lfi-emplois-transition-03` (« droit de reprise […] **dans un but écologique** »), déjà extraite. Répondre « Non » porterait l'axe à 1 / 4. |
| Q5 | Proposition 9.2 n° 1 (« Relocaliser les productions essentielles à la vie de notre pays »), **proposition-clé de la section**, doit-elle rester en reliquat Économie ? **Oui / Non** | **Oui** — motivation d'indépendance nationale, sans mention écologique. À noter : le 1er rapport a déjà mis en reliquat la proposition 12.1 « Créer une **Agence pour les relocalisations dépendant du Conseil à la planification écologique** […] à la souveraineté nationale et à la bifurcation écologique », qui est plus explicitement écologique que celle-ci. **Si l'éditeur répond « Non » ici, il doit rouvrir ce reliquat 12.1**, sinon le corpus devient incohérent. |
| Q6 | Propositions 9.2 n° 6 et n° 7 (normes écologiques sur les produits importés ; droits de douane sur critères écologiques) : les laisser en reliquat, à destination de l'axe **existant** `fisc-verte`, plutôt que sur `eco-investissement` ? **Oui / Non** | **Oui** — c'est le traitement déjà appliqué à EELV 20-8 (MACF, protectionnisme écologique) par la 2ᵉ passe. Les entrer ici sans y entrer EELV 20-8 violerait le test de renversement. **Recommandation** : les traiter ensemble, dans un même mouvement `fisc-verte`, avec EELV 20-8 et LFI 12.3 (bouclier douanier / taxe kilométrique). |
| Q7 | Les 4 mesures portent `climat-attenuation` en thématique **principale** (cohérence avec les 4 mesures EELV de l'axe). Maintenir ce choix pour `lfi-investissement-04`, dont l'objet premier est industriel et non climatique ? **Oui / Non** | **Oui** par défaut (sans quoi la mesure disparaît du filtre Écologie), mais `entreprises` serait le principal le plus fidèle. |

### 5.a Test de renversement

Les 4 mesures ont été classées par objet de politique publique, avec la **règle de partage
explicitée au §1.b**, elle-même calquée sur le traitement déjà réservé au chapitre industriel
d'EELV. Trois contrôles de symétrie ont été passés explicitement :

1. **Symétrie industrie** — le déséquilibre que cette passe devait corriger est levé : les deux
   candidats ont désormais leur chapitre industriel dans le chantier (EELV ch. 20 ↔ LFI ch. 9.2).
2. **Symétrie douane / protectionnisme écologique** — traitée pareil des deux côtés : reliquat, à
   destination de `fisc-verte` (EELV 20-7/20-8 ↔ LFI 9.2 n° 6/7/9). Aucun candidat ne gagne un axe
   écologie sur ses mesures douanières.
3. **Symétrie souveraineté productive** — EELV 20-3 (reliquat) et LFI 9.2 n° 1 (reliquat) traitées
   pareil ; l'exception assumée est `lfi-investissement-04`, d'où la question Q1, qui propose
   justement de la rendre symétrique dans un sens ou dans l'autre.

Aucun label d'axe ni de thématique n'a été créé : le vocabulaire de campagne (« bifurcation »,
« réindustrialisation », « planification écologique ») n'apparaît nulle part hors des verbatims.

---

## 6. Points de vigilance et travail restant

1. **Ce lot ne clôt pas le chantier Économie.** Les 11 reliquats ci-dessus s'ajoutent aux 34 du
   1er rapport et aux 7 du 2ᵉ, soit **52 propositions en attente d'un chantier d'accueil**
   (Économie, Transports, Agriculture, Alimentation, Fiscalité, International).
2. **`fisc-verte` est mûr pour une passe dédiée.** Trois reliquats de trois passes différentes y
   convergent (EELV 20-8 ; LFI 12.3 ; LFI 9.2 n° 6, 7, 9). L'axe **existe déjà** dans
   `data/axes.json` : c'est un chantier court, à fort rendement de comparabilité.
3. **Renvoi restant sur `eco-investissement`** : EELV ch. 20 prop. 6 (droit minier, sortie des
   dérogations aux énergies fossiles, projets miniers durables), signalée en reliquat par la 2ᵉ
   passe faute d'axe d'accueil. LFI a de la matière comparable (matières critiques, recyclage) mais
   dispersée. Si l'éditeur veut un axe « Matières premières & mines », c'est le moment de le dire :
   il concernerait les deux candidats.
4. **Le déséquilibre `eco-emplois-transition` (1 / 3) est maintenant établi comme réel**, au sens
   où les trois chapitres susceptibles de le combler (EELV 2, 19, 20 ; LFI 9.2, 9.3, 13.1) ont tous
   été lus. Il ne reste plus d'hypothèse « la matière est ailleurs » : c'est une différence
   d'architecture de programme, documentable dans l'`ecart_synthese` de l'axe.

### 6.1 Enrichissement proposé pour `data/PROCESS-extraction.md` (je ne l'ai pas modifié)

1. **§2 — extraire depuis l'archive brute quand le lot est petit.** Pour un lot de moins d'une
   dizaine de mesures, construire les verbatims **directement depuis `data/sources/raw/`** plutôt
   que depuis le miroir `.md` coûte quelques minutes de plus et supprime un intermédiaire entre la
   source et le draft. Le miroir sert alors de **contrôle croisé** (le verbatim doit s'y retrouver
   comme ligne entière), ce qui vérifie au passage que la normalisation n'a rien altéré sur le
   chapitre. Sur ce lot : 4/4 en archive brute **et** 4/4 en miroir.
2. **§4 — un QC qui relit son propre script ne prouve rien.** Quand le draft est produit par
   script, le contrôle doit (a) re-décompresser l'archive dans un répertoire neuf, (b) re-parser
   indépendamment, (c) **relire le draft depuis le disque**. Sinon on ne teste que la mémoire du
   processus qui vient d'écrire le fichier.
3. **§7 — écrire la règle de partage AVANT d'extraire, et la calquer sur le candidat déjà traité.**
   Quand un chantier récupère un chapitre « mixte » (ici l'industrie : économique et écologique à
   la fois), la règle de partage doit être (a) écrite avant l'extraction, (b) **dérivée du
   traitement déjà appliqué au même type de chapitre chez l'autre candidat**, (c) publiée dans le
   rapport avec ses conséquences contre-intuitives assumées (ici : deux propositions explicitement
   écologiques restent en reliquat). Sans cela, la règle est reconstruite après coup, mesure par
   mesure, et le test de renversement devient invérifiable.
4. **§7 — vérifier l'équilibre d'un axe sur le corpus complet, pas sur le lot.** Le compte
   « avant / après » doit se faire en agrégeant `data/candidats/*.json` **et** tous les brouillons
   non encore fusionnés, sinon un axe paraît déséquilibré alors que le complément dort dans un
   draft voisin.

---

## 7. Fichiers produits

- `data/drafts/lfi-ecologie-industrie.draft.json` — 4 mesures.
- `data/drafts/ecologie-industrie.rapport.md` — ce rapport.

Aucun fichier de `data/candidats/`, `data/axes.json`, `data/taxonomie.json`,
`data/choix-editoriaux.md`, `data/sources/` ou `src/` n'a été touché. Aucun commit.
