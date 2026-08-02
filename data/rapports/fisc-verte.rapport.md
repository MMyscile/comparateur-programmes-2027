# Rapport d'extraction — Axe **existant** `fisc-verte` (Fiscalité environnementale)

- **Date** : 2026-07-31
- **Livrables** : `data/drafts/fisc-verte-complement.draft.json` (8 mesures), ce rapport.
- **Statut** : **brouillon**. Rien n'a été écrit dans `data/candidats/*`, `data/axes.json`,
  `data/taxonomie.json`, `data/choix-editoriaux.md`, `data/sources/` ni `src/`. Aucun commit.
- **Objet** : combler le trou identifié par les trois passes du chantier Écologie. Chacune a mis en
  reliquat, pour de bonnes raisons locales, les propositions de **fiscalité et de protection
  commerciale à motif écologique** — avec pour résultat qu'un sujet traité par les **deux**
  candidats n'avait aucun lieu de comparaison. L'axe `fisc-verte` **existe déjà**
  (`data/axes.json`, ordre 11, baseline stampée `baseline_verifiee: 2026-07-29`) : **il n'a pas été
  modifié**, ni son libellé, ni sa baseline, ni son `ecart_synthese`.
- **Périmètre** : Écologistes ch. 20 prop. 7 et 8 ; LFI 9.2 (blocs 6, 7, 8, 9), 12.3 (bloc 2),
  13.5 (bloc 8). Aucun chapitre nouveau ouvert au-delà des reliquats déjà signalés (cf. §3.3).

---

## 0. Étape 0 — Vérification des sources (revérifiée, aucune source nouvelle)

| | Écologistes | LFI |
|---|---|---|
| Document | « Le nouveau programme des Écologistes » (PDF « VDEF Programme.pdf », juillet 2026) | « L'Avenir en Commun », édition 2025 |
| Officielle ? | Oui — `lesecologistes.fr` (site du parti) | Oui — `melenchon2027.fr` (site de campagne du candidat) |
| Présidentielle 2027 ? | Oui — plateforme portée par Marine Tondelier, désignée le 08/12/2025 (réserve primaire du 11/10/2026 documentée dans `etat_programme`) | Oui — programme présenté le 28/01/2025 |
| Bon périmètre ? | Oui (plateforme de parti portée par la candidate, tranché le 2026-07-28) | Oui. Piège « PROGRAMME-FRONT-POPULAIRE » (coalition NFP 2024, législatives) toujours évité |
| Archive brute | `data/sources/raw/ecologistes_vdef-programme_pdf.tar.gz` | `data/sources/raw/lfi-melenchon2027-2025_html.tar.gz` (capté le 2026-07-25) |
| `source_url` (faisant foi) | `https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=78` | `https://melenchon2027.fr/programme2025/livre/chapitre{9/s2,12/s3,13/s5}` |

**Méthode de récupération** — moindre coût, aucun re-téléchargement : tout le matériau est déjà
dans les archives brutes. Le lot faisant moins de dix mesures, les verbatims ont été construits
**directement depuis `data/sources/raw/`** (enrichissement §6.1 du rapport industrie), et non
depuis les miroirs `.md` : blocs `<div class="mesure">` / `<div class="mesure-cle">` côté LFI,
`pdftotext` de la page 78 côté Écologistes. Les miroirs `.md` n'ont servi qu'au **contrôle croisé**
(§2.b). Aucun `source_url` ne pointe un miroir.

**Pièges vérifiés sur les 3 pages LFI ouvertes** : aucun caractère `\x0b`, aucun « • » littéral
(pas de puces fusionnées), aucun `<p class="wp-block-paragraph">` de continuation (pas de
proposition coupée). Les blocs `mesure-cle` ont bien été inclus dans le parsing.

**Anomalie de mise en page relevée côté Écologistes (sans conséquence)** : sur la page 78,
`pdftotext` **sans** `-layout` restitue la proposition 8 **avant** la 7. Vérification faite en
`-layout` et en `-bbox-layout` : la colonne de gauche imprime les propositions 6 puis 7, celle de
droite la 8 — l'ordre de lecture humain est donc bien 6, 7, 8, conforme à la numérotation. Aucune
ambiguïté d'ordre, aucune proposition coupée par un saut de page, **aucune césure en fin de ligne**
sur cette page (contrôle explicite : zéro ligne finissant par `-`), donc aucun mot composé à
restaurer.

---

## 1. Ce que ce lot fait entrer — 8 mesures

Une mesure = **une** proposition mot-pour-mot. Aucune fusion, aucun résumé, **aucune élision**
(aucun verbatim n'a nécessité de `[…]`). Seules transformations, conventions déjà en vigueur dans
le corpus : normalisation des espaces (dont insécables), **point final ajouté** quand la source
n'en a pas — sauf fin en `)` ou `:` (5 mesures LFI ont reçu un point, `lfi-fisc-verte-02` non), et
**badge `[EUROPE]` sorti du verbatim** vers `rubrique_origine` (2 mesures Écologistes).

| id | Candidat | Origine | Objet (résumé du rapporteur, PAS le verbatim) | car. |
|---|---|---|---|---|
| `eco-fisc-verte-2` | Écologistes | ch. 20 prop. 7 `[EUROPE]`, p. 78 | Extension des protections **réglementaires et douanières** dans les industries stratégiques (batteries, panneaux solaires, éolien, acier bas-carbone…) ; investissements > 100 M€ conditionnés à un **plan de décarbonation** | 628 |
| `eco-fisc-verte-3` | Écologistes | ch. 20 prop. 8 `[EUROPE]`, p. 78 | **Protectionnisme écologique et social** aux frontières de l'Europe : clauses de sauvegarde, extension et accélération du **MACF**, renégociation de l'accord douanier UE–États-Unis du 27/07/2025 | 633 |
| `lfi-fisc-verte-01` | LFI | 9.2 bloc 6 | Inventaire des accords commerciaux et **normes sociales et écologiques imposées aux produits importés** | 176 |
| `lfi-fisc-verte-02` | LFI | 9.2 bloc 7 | **Droits de douane sur critères écologiques** (émissions carbone, pollutions, empreinte hydrique) | 124 |
| `lfi-fisc-verte-03` | LFI | 9.2 bloc 9 | **Taxe kilométrique aux frontières** de la France | 137 |
| `lfi-fisc-verte-04` | LFI | 12.3 bloc 2 | **Bouclier douanier via une taxe kilométrique** en faveur des productions locales à faible empreinte écologique (Outre-mer) | 120 |
| `lfi-fisc-verte-05` | LFI | 13.5 bloc 8 | **Protectionnisme écologique** agricole : clause de sauvegarde, prix minimum d'entrée | 311 |
| `lfi-fisc-verte-06` | LFI | 9.2 bloc 8 | Fin des **niches fiscales sur le kérosène** | 102 |

**Correspondance avec la numérotation des rapports précédents** : « LFI 9.2 n° 6 » = bloc 6,
« n° 7 » = bloc 7, « n° 9 » = bloc 9. **Vérification du n° 9 demandée par l'éditeur** : le bloc 9 de
la section 9.2 est bien « Instaurer une taxe kilométrique aux frontières de la France pour dissuader
les délocalisations et l'importation de produits trop éloignés » — c'est la **jumelle hexagonale**
de LFI 12.3 (`lfi-fisc-verte-04`), qui porte le même instrument avec, elle, un motif écologique
explicite. Voir Q3 : c'est la mesure la plus discutable du lot.

Le `rubrique_origine` des mesures LFI ne porte **pas** de numéro de proposition : c'est la
convention des 152 mesures LFI déjà en base et en brouillon (le site ne numérote pas ses puces).
Le rang de bloc figure ci-dessus et dans le QC (§2.a) pour la traçabilité.

---

## 2. Contrôle qualité de fidélité

Le lot faisant moins de 10 mesures, **les 8 mesures ont été contrôlées**, aucune par
échantillonnage. Le QC applique la note du rapport industrie : *un QC qui relit son propre script
de génération ne prouve rien*. Il (a) **re-décompresse** les deux archives dans un répertoire neuf,
(b) **re-parse indépendamment** les fichiers source, (c) **relit le draft depuis le disque**.

### 2.a Draft ↔ archives brutes — **8/8 identiques**

| Mesure | Source re-parsée | Appariement | Longueur comparée | Résultat |
|---|---|---|---|---|
| `eco-fisc-verte-2` | PDF p. 78, `pdftotext -bbox-layout` + ordre de lecture reconstruit par coordonnées | sous-chaîne exacte, **unique** dans la page | 628 car. | identique |
| `eco-fisc-verte-3` | idem | sous-chaîne exacte, **unique** | 633 car. | identique |
| `lfi-fisc-verte-01` | `lfi_sub/chapitre9_s2.html` | bloc n° 6, **unique** | 176 car. | identique |
| `lfi-fisc-verte-02` | `lfi_sub/chapitre9_s2.html` | bloc n° 7, **unique** | 124 car. | identique |
| `lfi-fisc-verte-03` | `lfi_sub/chapitre9_s2.html` | bloc n° 9, **unique** | 137 car. | identique |
| `lfi-fisc-verte-04` | `lfi_sub/chapitre12_s3.html` | bloc n° 2, **unique** | 120 car. | identique |
| `lfi-fisc-verte-05` | `lfi_sub/chapitre13_s5.html` | bloc n° 8, **unique** | 311 car. | identique |
| `lfi-fisc-verte-06` | `lfi_sub/chapitre9_s2.html` | bloc n° 8, **unique** | 102 car. | identique |

> **8/8 identiques.** Aucune divergence, donc aucun arbitrage « corriger l'extraction, jamais le
> texte » à rendre sur ce lot.

Comparaison **caractère par caractère** après normalisation NFC, neutralisation des espaces
insécables/multiples et de la convention de point final ; côté LFI, contrôle supplémentaire
d'**égalité de longueur** avec le bloc source et d'**unicité** de l'appariement.

Contrôle de bornes côté Écologistes (le point faible d'un test de sous-chaîne) : dans la page
reconstruite, `eco-fisc-verte-2` est précédée de `7. [EUROPE] ` et suivie de `8. [EUROPE] Améliorer
le protectionnism…` ; `eco-fisc-verte-3` est précédée de `8. [EUROPE] ` et suivie du seul folio
` 78`. Les deux verbatims couvrent donc **exactement** leur proposition, sans troncature ni
débordement.

### 2.b Contrôle croisé avec les miroirs `.md` — **8/8 présents**

Chaque verbatim LFI se retrouve comme **ligne entière** de `data/sources/lfi-avenir-en-commun-2025.md`
et chaque verbatim Écologistes comme sous-chaîne de `data/sources/ecologistes-programme-2026.md`.
Archive brute et miroir concordent : la normalisation n'a rien altéré sur ces trois sections et
cette page.

### 2.c Contrôles de cohérence (automatisés)

- **Aucune collision d'id** : les 8 nouveaux ids confrontés aux **424 ids existants**
  (`data/candidats/*.json` + les 5 brouillons du chantier Écologie). Aucun doublon interne.
  `eco-fisc-verte-1` (déjà en base) est prolongé par `-2` et `-3` ; la série
  `lfi-fisc-verte-01…06` est neuve (LFI n'avait aucune mesure sur cet axe).
- **Aucune réextraction** : les 8 verbatims ont été confrontés aux 424 mesures existantes ; aucun
  n'y figure, ni à l'identique ni comme fragment.
- Schéma v0.2 respecté : **9 champs exactement** par mesure, aucun `synthese`, aucun espace double,
  aucun bord d'espace, aucun badge `[EUROPE]` resté dans un verbatim.
- `axe` = `fisc-verte` pour les 8 ; tous les `source_url` en `https://`, aucun ne référence un
  miroir `.md` ; les 2 mesures Écologistes portent bien `#page=78`.

---

## 3. Balayage des reliquats des trois rapports

### 3.1 Ce qui entre (8) — d'où ça vient

| Rapport d'origine | Reliquat | Devenu |
|---|---|---|
| 1er (`ecologie.rapport.md`, §4.1) | LFI 12.3 « bouclier douanier via une taxe kilométrique » | `lfi-fisc-verte-04` |
| 1er (§4.1) | LFI 13.5 « Instaurer un protectionnisme écologique… » | `lfi-fisc-verte-05` |
| 2ᵉ (`ecologie-complement.rapport.md`, §7.1) | EELV 20-7 « protections réglementaires et douanières » | `eco-fisc-verte-2` |
| 2ᵉ (§7.1) | EELV 20-8 « protectionnisme écologique et social / MACF » | `eco-fisc-verte-3` |
| 3ᵉ (`ecologie-industrie.rapport.md`, §4) | LFI 9.2 blocs 6, 7, 8, 9 | `lfi-fisc-verte-01/02/06/03` |

### 3.2 Reliquats examinés et **écartés** (verbatim disponible dans les rapports d'origine)

| Proposition | Pourquoi écartée |
|---|---|
| **LFI 13.1** « Annuler les cadeaux fiscaux accordés sans contrepartie aux plus grandes entreprises ces dix dernières années » (reliquat *Fiscalité* du 1er rapport) | Fiscalité, mais **aucun critère écologique** dans le verbatim. Destination : `fisc-aides-entreprises` ou `fisc-niches`. À noter : sa cousine `lfi-fisc-verte-…` n'existe pas, mais LFI 9.2 bloc 13 (conditionnalité écologique des aides) a déjà été extraite sur `eco-investissement` par la 3ᵉ passe. |
| **LFI 12.3** « Appliquer une préférence commerciale pour les produits ultramarins… » | Protection commerciale **sans motif écologique** énoncé (préférence d'origine). Reste en reliquat International/Outre-mer. |
| **LFI 9.2** blocs 2 (antidumping), 10 (dépôt de garantie), 11 (épargne à l'étranger), 12 (critères de localisation), 15 (OMC) | Aucun critère écologique dans le verbatim. Restent en reliquat Économie. |
| **LFI 13.5** « Protéger nos produits du terroir… INAO/AOP/AOC/IGP » | Protection commerciale à motif **qualité/origine**, pas écologique. |
| **LFI 16.6** (tribunal de justice économique, licence d'office) | Hors sujet fiscal et douanier. |
| **EELV 20-3** (protection des entreprises stratégiques, « verdir leur production ») | Ni fiscalité ni douane : politique industrielle. Reste en reliquat, symétriquement à LFI 9.2 bloc 1 (cf. Q1 du rapport industrie). |
| **EELV 20-6** « Renforcer la fiscalisation de l'exploitation minière au bénéfice des populations des pays miniers » | C'est de la fiscalité, mais son objet est le **partage de la rente minière dans les pays producteurs** (Déclaration de Séville), pas la fiscalité environnementale française. Reste dans le renvoi « Matières premières & mines » ouvert par la 3ᵉ passe. |
| **EELV 1-12** (marché carbone ETS2) | **Déjà placée** sur `eco-energie-prix` par le 1er lot (Q6), avec cotag `fiscalite-verte`. Non reprise, comme demandé. |

### 3.3 Ce que le balayage a trouvé **hors** des trois listes de reliquats (signalé, **non extrait**)

Recherche par mots-clés (`douan*`, `MACF`, `ajustement carbone`, `protectionnisme`, `kilométrique`,
`frontière*`, `TVA`, `taxe`, `fiscal*`, `niche*` croisés avec `carbone|écolog|climat|fossile|
kérosène|environnement|pollu`) sur les deux miroirs intégraux. Rien n'a été extrait de ces
chapitres : ils n'ont jamais été ouverts par un chantier, et les ouvrir ici recréerait exactement
l'asymétrie de périmètre que la 3ᵉ passe a corrigée.

**A. Matière `fisc-verte` déjà en base, mais placée sur un autre axe** (ne rien réextraire —
il s'agit seulement d'un **cotag `fiscalite-verte`** à envisager, cf. Q6) :

| Mesure existante | Axe actuel | Contenu écologique |
|---|---|---|
| `eco-fisc-niches-1` (EELV 17-7) | `fisc-niches` | « Supprimer les niches fiscales défavorables au climat », barèmes kilométriques, voitures de fonction |
| `eco-fisc-tva` (EELV 17-6) | `fisc-tva` | « TVA verte différenciée selon l'impact environnemental et sanitaire des produits » |
| `lfi-fisc-niches-01` (LFI 6.5) | `fisc-niches` | « supprimer les niches […] nuisibles écologiquement » |
| `lfi-fisc-fortune` (LFI 6.5) | `fisc-fortune` | ISF « incluant un volet climatique visant à taxer les gros pollueurs » |

> C'est **symétrique** : les deux programmes portent de la fiscalité verte dans leur chapitre fiscal,
> et l'éditeur l'a déjà répartie sur les axes d'instrument (`fisc-tva`, `fisc-niches`, `fisc-fortune`).
> `fisc-verte` ne peut donc pas être lu comme « toute la fiscalité écologique du programme ».

**B. Propositions non extraites, dans des chapitres jamais ouverts** — candidates à une micro-passe :

| Candidat | Référence | Extrait | Pourquoi c'est important |
|---|---|---|---|
| Écologistes | **ch. 60 prop. 5** (Europe fédérale) | « Augmenter les ressources fiscales propres dédiées au budget communautaire via un renforcement du **mécanisme d'ajustement carbone aux frontières (MACF)**, une taxation des grandes entreprises technologiques, une taxe sur les déchets électroniques […] » | **Même instrument que `eco-fisc-verte-3`** ; objet premier = financement du budget de l'UE, d'où la mise en attente |
| Écologistes | **ch. 16 prop. 3** (Changer les règles du marché) | « Lutter contre les pratiques déloyales dans le commerce. Mettre fin au **dumping fiscal et environnemental de l'e-commerce** (exonération des droits de douanes pour les colis, sous-déclaration de la valeur…) […] » | Voisine de `lfi-fisc-verte-06` (kérosène / dumping e-commerce) |
| Écologistes | **ch. 16 prop. 7** `[EUROPE]` | « **Intégrer l'urgence écologique dans les traités d'investissement et de commerce.** Organiser un retrait coordonné des traités d'investissement qui protègent les investissements fossiles. […] » | Pendant direct de LFI 17.1 ci-dessous |
| Écologistes | **ch. 22 prop. 7** | « Soutenir fiscalement les collectivités qui ont des politiques de préservation de leur environnement. Transférer une part de la **Contribution Climat Énergie** vers les collectivités disposant d'un Plan Climat Air-Énergie Territorial […] » | Fiscalité verte pure ; cotag `finances-locales` |
| LFI | **17.1** (leviers face aux institutions européennes) | « Utiliser le droit de veto de la France, par exemple pour refuser tous les nouveaux accords de libre-échange (Mercosur…) et tout nouvel élargissement sans **harmonisation sociale, fiscale et environnementale** préalable » | Pendant direct d'EELV 16-7 |
| LFI | **16.5** — section entière « Refuser le libre-échange, **instaurer un protectionnisme écologique** et la coopération économique » (4 propositions) | FMI/Banque mondiale/OMC/CNUCED, normes OIT dans les accords commerciaux, règlement ONU contraignant les multinationales, règlement collectif des dettes | La section porte le **titre** du sujet, mais ses 4 propositions sont **institutionnelles** (gouvernance internationale), pas des instruments douaniers ou fiscaux → aucune n'aurait sa place sur `fisc-verte` en l'état |

> **Recommandation** (décision éditeur) : une micro-passe « commerce & fiscalité écologiques »
> sur **EELV ch. 16, 22, 60** et **LFI 16.5, 17.1** rendrait l'axe complet des deux côtés. Sans
> elle, la colonne Écologistes de `fisc-verte` est **sous-estimée d'au moins 3 propositions**,
> alors que sa colonne LFI est, elle, complète pour les chapitres déjà lus. C'est un biais de
> découpage, pas un écart programmatique — il est documenté ici pour ne pas être lu comme tel.

---

## 4. Tags proposés (propositions — l'éditeur valide)

| Mesure | Thématiques proposées (1ʳᵉ = principale) | Justification (une ligne) |
|---|---|---|
| `eco-fisc-verte-2` | `fiscalite-verte`, `commerce-exterieur`*, `entreprises`, `climat-attenuation`†, `cooperation-europeenne` | Douane + conditionnalité « plan de décarbonation » : instrument commercial à finalité climatique, porté au niveau européen (badge `[EUROPE]`) |
| `eco-fisc-verte-3` | `fiscalite-verte`, `commerce-exterieur`*, `climat-attenuation`†, `cooperation-europeenne` | MACF et clauses de sauvegarde pour une « industrie décarbonée » : le cœur du sujet, au niveau UE |
| `lfi-fisc-verte-01` | `fiscalite-verte`, `commerce-exterieur`* | Normes écologiques à l'importation : instrument commercial, **pas** fiscal — d'où la réserve sur la principale (cf. Q5) |
| `lfi-fisc-verte-02` | `fiscalite-verte`, `commerce-exterieur`*, `climat-attenuation`† | Droits de douane assis sur les émissions carbone : fiscalité écologique au sens strict |
| `lfi-fisc-verte-03` | `fiscalite-verte`, `commerce-exterieur`* | Taxe kilométrique : instrument fiscal, mais **motif écologique non énoncé** dans le verbatim → pas de `climat-attenuation` |
| `lfi-fisc-verte-04` | `fiscalite-verte`, `commerce-exterieur`*, `climat-attenuation`† | Même instrument, motif « faible empreinte écologique » explicite |
| `lfi-fisc-verte-05` | `fiscalite-verte`, `commerce-exterieur`* | « Protectionnisme écologique » nommé comme tel ; aucune thématique fine « agriculture » n'existe pour cotaguer sa dimension agricole (cf. §6.3 du 2ᵉ rapport) |
| `lfi-fisc-verte-06` | `fiscalite-verte`, `niches-depenses-fiscales`, `mobilites`†, `commerce-exterieur`* | Niche fiscale sur un carburant fossile, secteur aérien ; pendant direct d'`eco-fisc-verte-1` (« niches fiscales fossiles […] kérosène ») |

`†` thématiques **déjà proposées** au §5 du 1er rapport (`climat-attenuation`, `mobilites`) —
aucune nomenclature nouvelle de ce fait. `fiscalite-verte`, `entreprises`, `cooperation-europeenne`
et `niches-depenses-fiscales` **existent** dans `data/taxonomie.json`.

### 4.1 ⚠️ Une seule nomenclature nouvelle proposée : `commerce-exterieur`

`*` **`commerce-exterieur` (Commerce extérieur & douane) n'existe pas et n'avait jamais été
proposée.** Aucune thématique fine ne couvre aujourd'hui la douane, les accords commerciaux et les
normes à l'importation, alors que **6 des 8 mesures de ce lot** portent d'abord là-dessus.
Rattachement proposé : méta-thème **`europe-international-defense`**.

- Elle est **toujours en position secondaire** dans le draft : si l'éditeur la refuse, il suffit de
  la retirer, aucune mesure ne se retrouve sans thématique principale.
- Sans elle, ces mesures ne sont retrouvables que sous `fiscalite-verte`, ce qui est **infidèle
  pour `lfi-fisc-verte-01`** (des normes ne sont pas un impôt).
- Elle servira au-delà de cet axe : les reliquats Économie/International des trois rapports en
  contiennent une dizaine (OMC, antidumping, Mercosur, préférence commerciale ultramarine…).

### 4.2 Test de renversement

- Les mesures sont classées par **objet d'instrument** (douane, taxe, niche fiscale), jamais par
  cadrage de parti : ni « protectionnisme écologique » (formule LFI, également employée par EELV
  20-8), ni « bifurcation », ni « prospérité écologique » n'apparaissent hors verbatim.
- **Symétrie du critère d'entrée**, écrite avant extraction et appliquée mécaniquement :
  *entre sur l'axe toute proposition dont l'**instrument** est fiscal ou douanier **et** dont le
  verbatim porte un **critère ou un objet écologique** (émissions, pollution, empreinte, produit
  fossile, décarbonation, « écologique »)*. Deux conséquences contre-intuitives assumées :
  `lfi-fisc-verte-03` entre alors que son motif écrit est anti-délocalisation (cf. Q3), et
  LFI 12.3 « préférence commerciale ultramarine » reste dehors alors qu'elle est dans le même
  bloc de six propositions.
- **Symétrie de périmètre** (la leçon du §7.4 du 2ᵉ rapport) : les chapitres non ouverts sont
  listés des **deux** côtés au §3.3, avec le déséquilibre qu'ils créent (3 candidates EELV
  contre 2 LFI en attente).

---

## 5. Équilibre de l'axe `fisc-verte` — avant / après

### 5.a En nombre de mesures

| | Avant | **Après ce lot** |
|---|---|---|
| Écologistes | 1 | **3** |
| LFI | **0** | **6** |
| Total | 1 | **9** |

Le fait marquant n'est pas le volume : c'est que l'axe passe d'**un seul candidat** à **deux**.
L'`ecart_synthese` actuel de l'axe (« Axe porté par les seuls Écologistes à ce stade […] aucune
mesure LFI captée sur la fiscalité environnementale comme instrument ») **devient faux** dès la
fusion : il devra être réécrit par l'éditeur en même temps qu'il fusionne ce brouillon. C'est le
point à ne pas oublier.

### 5.b En volume de texte (avertissement de lecture, déjà signalé aux 2ᵉ et 3ᵉ passes)

| | Mesures | Caractères de verbatim |
|---|---|---|
| Écologistes | 3 | ≈ 1 995 (734 + 628 + 633) |
| LFI | 6 | ≈ 975 |

Deux fois plus de mesures côté LFI pour **deux fois moins de texte** : c'est le grain d'écriture
(propositions-blocs EELV de 5 à 8 phrases contre puces d'une ligne chez LFI), pas un écart
d'ambition. Un compteur de mesures par candidat afficherait ici « LFI 6 / EELV 3 » — trompeur.

### 5.c Composition de l'axe après fusion

Sur 9 mesures, **6 relèvent de la protection commerciale** (douane, normes à l'importation,
clauses de sauvegarde, MACF) et **3 de la fiscalité interne** (`eco-fisc-verte-1`,
`lfi-fisc-verte-06`, et pour partie `lfi-fisc-verte-03`). L'axe change donc de centre de gravité :
son libellé « Fiscalité environnementale » couvre encore l'ensemble au sens large (un droit de
douane est un impôt), mais il ne le décrit plus. Voir Q7.

---

## 6. La baseline de `fisc-verte` couvre-t-elle encore l'axe élargi ? — **Non**

La baseline actuelle (vérifiée le 2026-07-29) énonce trois faits : budget vert du PLF 2026
(8,1 Md€ de dépenses défavorables à l'environnement), déclenchement du malus au poids à 1 500 kg
depuis le 01/01/2026, et TIRUERT jusqu'à fin 2026 avant remplacement par l'IRICC en 2027.

- Elle **couvre toujours** `eco-fisc-verte-1` (niches fossiles, TIRUERT, malus au poids) et
  **partiellement** `lfi-fisc-verte-06` (les taux réduits sur les carburants sont dans le budget vert).
- Elle **ne dit rien** de ce qui porte désormais les deux tiers de l'axe : droits de douane, MACF,
  clauses de sauvegarde, normes à l'importation. Un lecteur verrait 6 propositions douanières en
  face d'un « ce qui est fait » qui parle de malus automobile. **La baseline doit être étendue
  avant publication de l'axe.**

### 6.a Pistes de baseline sur le volet douanier — **à vérifier, rien n'est validé ici**

Ces pistes indiquent **où chercher**, pas ce qu'il faut écrire. **Aucun chiffre, aucune date
ci-dessous n'a été vérifié par mes soins** — c'est le travail de `verificateur-sources`. Elles sont
classées par ordre d'utilité décroissante pour la lecture de l'axe.

| # | Fait à établir | Où le chercher |
|---|---|---|
| 1 | **La politique commerciale commune est une compétence exclusive de l'Union** (art. 3 et 207 TFUE) : un droit de douane national n'est pas instaurable par la France seule. C'est le fait de baseline le plus structurant de l'axe — il s'applique aux 6 mesures douanières, des deux candidats. | eur-lex.europa.eu (TFUE, art. 3 §1 e et 207) ; touteleurope.eu pour la formulation grand public |
| 2 | **État d'avancement du MACF** : règlement (UE) 2023/956 — fin de la période transitoire, entrée en vigueur du régime définitif, secteurs couverts (ciment, fer et acier, aluminium, engrais, électricité, hydrogène), seuil de minimis et simplifications adoptées depuis | eur-lex.europa.eu ; douane.gouv.fr ; Commission européenne (DG TAXUD, page MACF/CBAM) |
| 3 | **Montant des droits de douane collectés en France** et part reversée au budget de l'UE (ressource propre traditionnelle, avec frais de perception retenus) | PLF, annexe « Relations financières avec l'Union européenne » ; douane.gouv.fr (chiffres clés) ; Cour des comptes |
| 4 | **Mesures de sauvegarde acier de l'UE** en vigueur et leur échéance — l'exemple cité mot pour mot par `eco-fisc-verte-3` | Commission européenne (DG TRADE, mesures de sauvegarde) ; Journal officiel de l'UE |
| 5 | **Normes écologiques déjà opposables aux produits importés** (« clauses miroirs ») : règlement 2023/1115 déforestation et son calendrier d'application, interdiction d'importer des produits traités par certaines substances interdites dans l'UE, règlement 2019/6 sur les antibiotiques | eur-lex.europa.eu ; agriculture.gouv.fr ; anses.fr |
| 6 | **Franchise douanière des petits colis** (< 150 €) et l'état de sa suppression annoncée — utile pour situer le volet e-commerce (LFI 9.2 bloc 8, EELV 16-3) | douane.gouv.fr ; Conseil de l'UE (réforme de l'union douanière) |
| 7 | **Exonération d'accise sur le kérosène** (convention de Chicago, directive 2003/96/CE, art. 265 bis du code des douanes) et son coût annuel chiffré — indispensable à `lfi-fisc-verte-06` et à `eco-fisc-verte-1` | legifrance.gouv.fr ; budget vert du PLF ; Conseil des prélèvements obligatoires |
| 8 | **Existence (ou non) d'une taxe kilométrique aux frontières** en droit français ou européen — probablement un fait « néant », mais un néant sourçable est une baseline valide pour `lfi-fisc-verte-03/04` | douane.gouv.fr ; legifrance.gouv.fr |

**Forme suggérée** (l'éditeur tranche) : garder les trois faits actuels, qui restent exacts et
datés, et leur adjoindre 2 à 3 phrases sur les points 1, 2 et 3 — la compétence exclusive de l'UE,
l'état du MACF, le montant des droits de douane perçus. Les faits 4 à 8 relèvent plutôt de
l'`ecart_synthese` ou d'une note de mesure. Rappel du garde-fou n° 5 : **aucun qualificatif
politique**, uniquement du chiffrable et sourçable.

---

## 7. Questions fermées pour l'éditeur

Chaque question est **Oui / Non**, avec la réponse retenue par défaut dans le draft.

| # | Question | Défaut |
|---|---|---|
| Q1 | `lfi-fisc-verte-06` (fin des niches fiscales sur le kérosène) : la mettre sur `fisc-verte` plutôt que sur l'axe existant `fisc-niches` ? **Oui / Non** | **Oui** — c'est le pendant mot pour mot d'`eco-fisc-verte-1`, déjà sur l'axe (« Diminuer les niches fiscales fossiles […] kérosène sur les vols intérieurs… »). Réserve honnête : le **motif écrit** est commercial (« pour limiter le dumping du e-commerce depuis l'étranger »), et l'éditeur a déjà rangé `eco-fisc-niches-1` (« niches fiscales défavorables au climat ») et `lfi-fisc-niches-01` (« niches nuisibles écologiquement ») sur `fisc-niches`. Répondre « Non » est défendable **à condition** de le faire aussi pour `eco-fisc-verte-1`, sinon le test de renversement échoue. |
| Q2 | `lfi-fisc-verte-05` (protectionnisme écologique agricole) : la mettre sur `fisc-verte` plutôt que la laisser en reliquat pour le futur chantier Agriculture ? **Oui / Non** | **Oui** — elle nomme le « protectionnisme écologique » et utilise le même instrument (clause de sauvegarde) qu'`eco-fisc-verte-3` : c'est le seul endroit où les deux programmes se répondent sur ce point. Réserve : ses critères écrits sont **sanitaires et sociaux** (« conditions de production et de rémunération du travail agricole », « norme sanitaire nationale »), et le chantier Agriculture la réclamera. |
| Q3 | `lfi-fisc-verte-03` (taxe kilométrique aux frontières, ch. 9.2) : la mettre sur `fisc-verte` alors que son verbatim n'énonce **aucun motif écologique** (« dissuader les délocalisations et l'importation de produits trop éloignés ») ? **Oui / Non** | **Oui** par défaut — c'est **la plus discutable du lot** ; elle n'entre que parce qu'elle est le même instrument que `lfi-fisc-verte-04` (12.3), qui, elle, dit « faible empreinte écologique ». Les séparer donnerait à lire deux mesures jumelles sur deux axes différents. Répondre « Non » ramène LFI à 5 mesures. |
| Q4 | `eco-fisc-verte-2` (EELV 20-7, protections réglementaires et douanières) : la mettre sur `fisc-verte` plutôt qu'en reliquat Économie/Industrie ? **Oui / Non** | **Oui** — son instrument est douanier et sa conditionnalité est un « plan de décarbonation ». Mais son objet premier est la **souveraineté industrielle** : c'est le pendant EELV de `lfi-investissement-04`, que la 3ᵉ passe a mise, elle, sur `eco-investissement` (sa Q1). **Traiter les deux de la même façon** : si l'éditeur sort `lfi-investissement-04` d'Écologie, il devrait aussi reconsidérer celle-ci. |
| Q5 | `lfi-fisc-verte-01` (normes sociales et écologiques sur les produits importés) porte `fiscalite-verte` en thématique **principale** alors que ce n'est pas un instrument fiscal. Maintenir, par cohérence avec l'axe ? **Oui / Non** | **Oui** par défaut. Le tag le plus fidèle serait `commerce-exterieur` en principale — possible seulement si la thématique du §4.1 est créée. |
| Q6 | Cotaguer `fiscalite-verte` sur les 4 mesures déjà en base du §3.3.A (`eco-fisc-niches-1`, `eco-fisc-tva`, `lfi-fisc-niches-01`, `lfi-fisc-fortune`), **sans les déplacer**, pour qu'elles apparaissent sous le filtre Écologie ? **Oui / Non** | **Oui** — c'est exactement le traitement déjà retenu pour EELV 1-12 (Q6 du 1er rapport). ⚠️ Cela **modifie `data/candidats/*.json`** : je ne l'ai pas fait, c'est une décision et une écriture d'éditeur. |
| Q7 | Conserver un axe unique `fisc-verte` à 9 mesures, dont 6 douanières, plutôt que créer plus tard un axe distinct « Commerce & protection écologique aux frontières » ? **Oui / Non** | **Oui** pour ce lot (l'éditeur a tranché en amont, et scinder à 9 mesures serait prématuré). Mais si la micro-passe du §3.3.B a lieu, l'axe passerait à ~14 mesures majoritairement douanières : la question se reposera, et le libellé « Fiscalité environnementale » deviendra inexact. |
| Q8 | Ouvrir la micro-passe du §3.3.B (EELV ch. 16, 22, 60 ; LFI 16.5, 17.1) **avant** de publier l'axe ? **Oui / Non** | **Oui** — proposition du présent rapport : sans elle, la colonne Écologistes est sous-estimée d'au moins 3 propositions, dont une portant sur le **MACF**, c'est-à-dire l'instrument central de l'axe. |

---

## 8. Points douteux et enrichissements proposés pour `data/PROCESS-extraction.md` (non modifié)

### 8.1 Points douteux consignés

1. **`lfi-fisc-verte-03`** : entrée sur l'axe par cohérence d'instrument, pas par le texte
   (cf. Q3). C'est la seule mesure du lot dont le verbatim ne contient **aucun** mot écologique.
2. **Deux mesures LFI portent le même instrument dans deux chapitres** (9.2 bloc 9 et 12.3 bloc 2 :
   taxe kilométrique). Ce ne sont **pas** des doublons — deux propositions publiées séparément,
   l'une hexagonale, l'autre ultramarine — et les fusionner serait une synthèse (garde-fou n° 1).
   Elles s'afficheront côte à côte : l'éditeur peut préférer n'en publier qu'une.
3. **`rubrique_origine` LFI sans numéro de proposition** : conforme au corpus, mais un relecteur qui
   veut retrouver la proposition dans la page doit passer par le rang de bloc donné au §1 et au §2.a.

### 8.2 Enrichissements proposés (je n'ai pas modifié le process)

1. **§4 — contrôler les *bornes* d'un verbatim, pas seulement sa présence.** Un test « le verbatim
   est une sous-chaîne de la page » ne détecte ni une troncature, ni un débordement sur la
   proposition suivante. Ajouter : vérifier ce qui **précède** et ce qui **suit** immédiatement
   l'occurrence (ici : `7. [EUROPE] ` avant, `8. [EUROPE] ` après), et l'**unicité** de
   l'occurrence dans la page. Côté HTML, l'équivalent est le contrôle d'**égalité de longueur**
   avec le bloc source, en plus de l'égalité de chaîne.
2. **§2 — l'ordre de sortie de `pdftotext` sans `-layout` n'est pas toujours l'ordre de lecture.**
   L'acquis (a) du process (« sans `-layout` restitue l'ordre des deux colonnes ») **tombe en
   défaut sur la page 78** du programme Écologistes : la sortie donne 6, 8, 7 alors que la page
   imprime 6, 7 (colonne gauche), 8 (colonne droite). La numérotation des propositions reste le
   repère fiable ; ne jamais dériver l'ordre de lecture de la seule sortie `pdftotext`.
3. **§7 — un axe existant peut voir son objet changer sans que sa baseline bouge.** Quand une passe
   fait entrer sur un axe déjà stampé (`baseline_verifiee`) des mesures d'un **instrument différent**
   de ceux couverts par la baseline, le rapport doit produire explicitement (a) le verdict
   « la baseline couvre / ne couvre plus », (b) des pistes sourçables sur le volet neuf, et
   (c) le rappel que l'`ecart_synthese` de l'axe peut devenir **factuellement faux** (ici : « aucune
   mesure LFI captée »). Sinon la baseline vérifiée donne une fausse assurance.
4. **§7 — un « chantier de comblement » doit balayer les reliquats ET la source.** Les trois listes
   de reliquats ne contenaient que 8 des 13 propositions de fiscalité/douane écologiques repérées
   dans le corpus : les 5 autres sont dans des chapitres qu'aucun chantier n'avait ouverts (§3.3.B)
   et n'apparaissent dans aucun reliquat, par construction. Un balayage par mots-clés sur les miroirs intégraux doit
   compléter la relecture des reliquats, avec l'obligation de **signaler sans extraire** ce qui sort
   du périmètre confié.

---

## 9. Fichiers produits

- `data/drafts/fisc-verte-complement.draft.json` — 8 mesures (Écologistes 2, LFI 6).
- `data/drafts/fisc-verte.rapport.md` — ce rapport.

Aucun fichier de `data/candidats/`, `data/axes.json`, `data/taxonomie.json`,
`data/choix-editoriaux.md`, `data/sources/` ou `src/` n'a été touché. Aucun commit.
