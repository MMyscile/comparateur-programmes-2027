# Rapport d'extraction — micro-passe de complétude sur l'axe **existant** `fisc-verte`

- **Date** : 2026-07-31
- **Livrables** : `data/drafts/fisc-verte-micro.draft.json` (5 mesures), ce rapport.
- **Statut** : **brouillon**. Rien n'a été écrit dans `data/candidats/*`, `data/axes.json`,
  `data/taxonomie.json`, `data/choix-editoriaux.md`, `data/sources/` ni `src/`. Aucun commit.
- **Objet** : extraire les 5 propositions repérées au **§3.3.B du rapport précédent**
  (`data/drafts/fisc-verte.rapport.md`) — de la fiscalité ou de la protection commerciale
  écologiques logées dans des chapitres **qu'aucun chantier n'avait ouverts**. L'éditeur a validé
  qu'on les extraie avant publication de l'axe (Q8 du rapport précédent).
- **Périmètre confié** : Écologistes ch. 16-3, 16-7, 22-7, 60-5 ; LFI 17.1. Reconfirmation
  demandée sur LFI 16.5. **Balayage rouvert** sur les deux programmes intégraux (§4).
- **Ce lot ne modifie ni ne reprend** aucune mesure des 6 brouillons existants ni des
  `data/candidats/*.json`.

---

## 0. Étape 0 — Vérification des sources (revérifiée, aucune source nouvelle)

| | Écologistes | LFI |
|---|---|---|
| Document | « Le nouveau programme des Écologistes » (PDF « VDEF Programme.pdf », juillet 2026) | « L'Avenir en Commun », édition 2025 |
| Officielle ? | Oui — `lesecologistes.fr` | Oui — `melenchon2027.fr` (site de campagne du candidat) |
| Présidentielle 2027 ? | Oui — plateforme portée par Marine Tondelier, désignée le 08/12/2025 (réserve primaire du 11/10/2026 documentée dans `etat_programme`) | Oui — programme présenté le 28/01/2025 |
| Bon périmètre ? | Oui (plateforme de parti portée par la candidate, tranché le 2026-07-28) | Oui. Piège « PROGRAMME-FRONT-POPULAIRE » (coalition NFP 2024, législatives) évité |
| Archive brute | `data/sources/raw/ecologistes_vdef-programme_pdf.tar.gz` | `data/sources/raw/lfi-melenchon2027-2025_html.tar.gz` (capté le 2026-07-25) |
| `source_url` (faisant foi) | `…/vdef-programme-1.pdf#page={63,64,88,190}` | `https://melenchon2027.fr/programme2025/livre/chapitre17/s1` |

**Méthode de récupération — moindre coût, aucun re-téléchargement.** Tout le matériau est déjà
dans les archives brutes ; les verbatims ont été construits **directement depuis
`data/sources/raw/`**. Les miroirs `.md` n'ont servi qu'au contrôle croisé (§3.b). Aucun
`source_url` ne pointe un miroir.

**Journal éditorial relu avant extraction** (`data/choix-editoriaux.md`, section « Chantier
Écologie » du 2026-07-31, non modifiée) — quatre décisions s'appliquent à ce lot :

- **n° 22** — la douane et la fiscalité écologiques sont regroupées sur `fisc-verte` : ce lot
  prolonge la décision, il ne la rouvre pas.
- **n° 23** — `commerce-exterieur` et `collectivites-territoriales` sont **créées** ; je les
  emploie (elles ne sont pas encore dans `data/taxonomie.json`, cf. §2).
- **n° 24** — deux propositions décrivant le même dispositif ne sont pas la même mesure, et
  **la taxe kilométrique de LFI 9.2 est renvoyée en reliquat Économie** : cela **retire
  `lfi-fisc-verte-03`** du lot précédent. Le §5 en tient compte.
- **n° 16** — le sens de la mesure prime sur l'équilibre des colonnes : aucune des décisions de
  ce rapport n'est justifiée par le nombre de mesures qu'elle laisse en face (cf. §2.b).

**Application des deux enrichissements de process issus de la passe précédente :**

1. **Jamais `pdftotext` sans `-layout` sur le PDF Écologistes.** L'ordre de lecture des 4 pages a
   été reconstruit par **coordonnées** (`pdftotext -bbox-layout`, séparation des colonnes à
   x = 290 pt, tri par `yMin`, colonne gauche puis colonne droite). L'ordre obtenu est conforme à
   la numérotation imprimée sur les 4 pages.
2. **Contrôle des bornes** (ce qui précède / ce qui suit) et de l'**unicité** de chaque verbatim :
   tableau au §3.a.

**Anomalies de mise en page relevées (traitées, consignées) :**

- **p. 63, proposition 3 : proposition coupée par la mise en page.** Elle commence en bas de la
  **colonne de gauche** (« Lutter contre les pratiques déloyales… explosion des coûts
  logistiques…) ») et se termine en haut de la **colonne de droite** (« par un système d'amende…
  et les postes dans les douanes. »). C'est le cas (d) de l'acquis PDF Écologistes du process. Le
  recollage a été **validé indépendamment** par `pdftotext -raw` (moteur d'ordre de lecture
  différent), qui restitue la même chaîne **contiguë** — cf. §3.a.
- **p. 64, proposition 7 : mot composé coupé en fin de ligne** (« … en cas de non- » / « respect
  de ces exigences »). Recollé **en conservant le trait d'union** : « non-respect » (cas (e) du
  process). Contrôle systématique des lignes finissant par `-` sur les 4 zones extraites : **une
  seule occurrence**, celle-ci.
- **Numéro de proposition typographié à part** (gros chiffre sur sa propre ligne : « 3. », « 7. »,
  « 5. ») sur les p. 63, 64, 88, 190 : sorti du verbatim, reporté en `rubrique_origine`.
- **Badge `[EUROPE]`** sorti du verbatim vers `rubrique_origine` (1 mesure : `eco-fisc-verte-5`).

---

## 1. Ce que ce lot fait entrer — 5 mesures

Une mesure = **une** proposition mot-pour-mot. Aucune fusion, aucun résumé, **aucune élision**
(aucun verbatim n'a nécessité de `[…]`). Seules transformations, conventions en vigueur dans le
corpus : normalisation des espaces, **point final ajouté** quand la source n'en a pas
(1 mesure : `lfi-fisc-verte-07`), numéro et badge sortis du verbatim.

| id | Candidat | Origine | Objet (résumé du rapporteur, **pas** le verbatim) | car. |
|---|---|---|---|---|
| `eco-fisc-verte-4` | Écologistes | ch. 16 prop. 3, p. 63 | Fin du **dumping fiscal et environnemental de l'e-commerce** : exonération de droits de douane sur les colis, sous-déclaration de valeur, contournement de la TVA ; amendes, postes DGCCRF et douanes | 552 |
| `eco-fisc-verte-5` | Écologistes | ch. 16 prop. 7 `[EUROPE]`, p. 64 | **Urgence écologique dans les traités d'investissement et de commerce** : retrait des traités protégeant les investissements fossiles, non-ratification (CETA, Mercosur…), **clauses miroirs** climat, carve-out fossile | 1 046 |
| `eco-fisc-verte-6` | Écologistes | ch. 22 prop. 7, p. 88 | **Soutien fiscal aux collectivités** écologiques : transfert d'une part de la **Contribution Climat Énergie** vers les territoires à PCAET, taxe sur les ordures ménagères, versement mobilité | 469 |
| `eco-fisc-verte-7` | Écologistes | ch. 60 prop. 5, p. 190 | **Ressources propres du budget de l'UE** : renforcement du **MACF**, taxation des grandes entreprises technologiques, taxe déchets électroniques, emprunt commun | 774 |
| `lfi-fisc-verte-07` | LFI | 17.1 bloc 1 | **Droit de veto** contre les nouveaux accords de libre-échange (Mercosur…) et tout élargissement sans **harmonisation sociale, fiscale et environnementale** | 343 |

Le `rubrique_origine` de la mesure LFI ne porte **pas** de numéro de proposition : c'est la
convention du corpus LFI (le site ne numérote pas ses puces). Le rang de bloc (bloc 1 de la
section 17.1) figure ici et au §3.a pour la traçabilité.

**Correspondance avec le §3.3.B du rapport précédent** : les 5 emplacements annoncés ont tous été
vérifiés et **tous qualifient**. Le déclencheur « si l'un d'eux ne qualifie pas, rouvrir le
balayage » n'a donc pas eu à jouer — le balayage a néanmoins été rouvert intégralement (§4),
comme demandé.

### 1.a Reconfirmation demandée : **LFI 16.5 reste hors de l'axe**

Section relue en entier dans l'archive brute (`lfi_sub/chapitre16_s5.html`, 4 blocs) :
FMI/Banque mondiale/OMC/CNUCED (bloc 1), normes OIT dans les accords commerciaux (bloc 2),
règlement ONU contraignant les multinationales (bloc 3), règlement collectif des dettes
publiques (bloc 4). **Confirmé** : malgré son titre (« Refuser le libre-échange, instaurer un
protectionnisme écologique… »), aucune des 4 propositions n'énonce d'instrument fiscal ou
douanier — ce sont des positions de **gouvernance internationale**. Elles restent en reliquat
Europe/International. Confirmation renforcée par la symétrie : le pendant EELV (ch. 65 prop. 9,
p. 205, « réforme du système économique et financier mondial » : BM, FMI, OMC, subventions
fossiles) est écarté pour la **même** raison (§4.1).

---

## 2. Tags proposés (propositions — l'éditeur valide)

| Mesure | Thématiques proposées (1ʳᵉ = principale) | Justification (une ligne) |
|---|---|---|
| `eco-fisc-verte-4` | `fiscalite-verte`, `commerce-exterieur`\*, `fraude-evasion`, `entreprises` | Droits de douane sur les colis + TVA contournée, au motif d'un « dumping fiscal **et environnemental** » : instrument douanier et fiscal, volet anti-fraude explicite |
| `eco-fisc-verte-5` | `fiscalite-verte`, `commerce-exterieur`\*, `climat-attenuation`†, `cooperation-europeenne` | Clauses miroirs climat et carve-out fossile dans les traités de commerce : protection commerciale à critère écologique, portée au niveau UE (badge `[EUROPE]`) |
| `eco-fisc-verte-6` | `fiscalite-verte`, `finances-locales`, `collectivites-territoriales`\*, `climat-attenuation`† | Affectation d'une taxe environnementale (Contribution Climat Énergie) aux collectivités selon leur plan climat : fiscalité verte **et** fiscalité locale ; même façon de faire que le cas-frontière EELV 10-5 déjà tranché (axe thématique + cotags fiscaux) |
| `eco-fisc-verte-7` | `fiscalite-verte`, `commerce-exterieur`\*, `cooperation-europeenne`, `dette-budget`, `climat-attenuation`† | Renforcement du MACF comme **ressource propre** de l'UE : instrument frontalier carbone au service du budget communautaire |
| `lfi-fisc-verte-07` | `fiscalite-verte`, `commerce-exterieur`\*, `cooperation-europeenne` | Veto sur les accords de libre-échange conditionné à une « harmonisation […] environnementale » : instrument commercial à critère écologique |

`*` **`commerce-exterieur`** et **`collectivites-territoriales`** : thématiques **créées par la
décision n° 23** de `data/choix-editoriaux.md` (2026-07-31), mais **pas encore présentes dans
`data/taxonomie.json`** — à y ajouter au moment de la fusion (je n'ai pas touché le fichier).
`†` `climat-attenuation` : thématique **proposée** au §5 de `data/drafts/ecologie.rapport.md`,
pas encore tranchée. Toutes les autres (`fiscalite-verte`, `fraude-evasion`, `entreprises`,
`cooperation-europeenne`, `finances-locales`, `dette-budget`) **existent** dans
`data/taxonomie.json` — **aucune nomenclature nouvelle n'est proposée par ce lot**.

### 2.a Réserve honnête sur la thématique **principale**

Sur 3 des 5 mesures, `fiscalite-verte` est mise en principale par **cohérence d'axe**, alors que
l'objet premier du texte est ailleurs : traités de commerce (`eco-fisc-verte-5`), budget de l'UE
(`eco-fisc-verte-7`), lutte contre les pratiques déloyales (`eco-fisc-verte-4`). C'est
exactement la réserve **Q5** du rapport précédent (`lfi-fisc-verte-01`), et elle se règle de la
même façon : si l'éditeur crée `commerce-exterieur`, il peut la passer en principale sur ces
mesures sans rien changer d'autre. Aucune mesure ne se retrouve sans thématique principale si la
nouvelle thématique est refusée.

### 2.b Test de renversement

- Classement par **objet d'instrument** (douane, taxe affectée, ressource propre, veto
  commercial), jamais par cadrage de parti. Aucun mot d'auteur (« protectionnisme écologique »,
  « bifurcation », « prospérité écologique ») n'apparaît hors verbatim.
- **Même critère d'entrée que la passe précédente**, écrit avant extraction et appliqué
  mécaniquement : *entre sur l'axe toute proposition dont l'**instrument** est fiscal ou douanier
  **et** dont le verbatim porte un **critère ou un objet écologique***. Conséquences
  contre-intuitives assumées, dans les deux sens :
  - **entre** `eco-fisc-verte-7` (EELV), dont l'objet premier est le budget de l'UE, parce que le
    MACF y est l'instrument nommé ;
  - **reste dehors** LFI 17.2 bloc 1 « Abroger les accords de libre-échange en vigueur (comme
    avec la Nouvelle-Zélande, le Canada, le Japon) » — pourtant le pendant le plus direct
    d'`eco-fisc-verte-5` — parce que son verbatim **n'énonce aucun critère écologique** (§4.2).
    C'est le prix de la règle ; l'éditeur peut trancher autrement (Q3).
- **Symétrie de périmètre** : le balayage rouvert a porté sur les **deux** programmes intégraux,
  et les reliquats sont listés des deux côtés (§4), y compris quand ils déséquilibrent l'axe.
- **Décision n° 16 respectée** : l'égalité finale des colonnes (7 / 6) est un **résultat**, pas un
  objectif. Aucune mesure n'est entrée ou sortie pour équilibrer l'axe ; les deux cas où le
  déséquilibre a pesé (Q1 sur le CIR, Q2 sur la fiscalité des transports) relèvent de
  l'**exception** prévue par la décision n° 16 — un artefact de **notre découpage d'extraction**,
  qui se corrige par une passe complémentaire (celle-ci, puis le chantier Mobilités), jamais par
  un choix de classement.

---

## 3. Contrôle qualité de fidélité — **5/5 identiques**

Le lot faisant moins de 10 mesures, **les 5 mesures ont été contrôlées**, aucune par
échantillonnage. Le QC est **indépendant du script de génération** : (a) les deux archives sont
**re-décompressées dans un répertoire neuf**, (b) les sources sont **re-parsées par un chemin
différent** — `pdftotext -raw` côté PDF (moteur d'ordre de lecture distinct de `-bbox-layout`
utilisé pour extraire), `html.parser` côté HTML (au lieu du regex de génération) —, (c) le draft
est **relu depuis le disque**.

### 3.a Draft ↔ archives brutes re-décompressées

| Mesure | Référence indépendante | Unicité | Borne AVANT | Borne APRÈS | Résultat |
|---|---|---|---|---|---|
| `eco-fisc-verte-4` | PDF p. 63, `pdftotext -raw`, blancs neutralisés | **1 occurrence** | `…budgétaire et non comme un objectif. 3.` | `4. [EUROPE] Faire de la commande publique un lev…` | identique (552 car.) |
| `eco-fisc-verte-5` | PDF p. 64, idem | **1 occurrence** | `…de la trajectoire des Accords de Paris. 7. [EUROPE]` | `16. Changer les règles du marché` (titre courant, fin du corps de page) | identique (1 046 car.) |
| `eco-fisc-verte-6` | PDF p. 88, idem | **1 occurrence** | `…transférées aux collectivités. 7.` | `8. Soutenir le droit d'expérimentation des col…` | identique (469 car.) |
| `eco-fisc-verte-7` | PDF p. 190, idem | **1 occurrence** | `…en cas d'atteinte à l'état de droit. 5.` | `60. Avancer vers une Europe fédérale` (titre courant, fin du corps de page) | identique (774 car.) |
| `lfi-fisc-verte-07` | `lfi_sub/chapitre17_s1.html`, re-parse `html.parser` | **1 occurrence** (4 blocs dans la section) | début de section, aucun bloc précédent | bloc 2 : `Conditionner la contribution française au budget de l'Union…` | identique (342 car. source + point final ajouté = 343) |

> **5/5 identiques.** Aucune divergence, donc aucun arbitrage « corriger l'extraction, jamais le
> texte » à rendre sur ce lot.

Comparaison **caractère par caractère** après normalisation NFC et neutralisation de **tous** les
blancs (espaces insécables et fines comprises) ; côté LFI, contrôle supplémentaire d'**égalité de
longueur** avec le bloc source et d'unicité dans la section.

**Lecture des bornes** — trois enseignements :
1. `eco-fisc-verte-4` : la borne avant (`… objectif. 3.`) et la borne après (`4. [EUROPE] …`)
   prouvent que le **recollage colonne gauche → colonne droite** couvre exactement la
   proposition 3, sans troncature ni débordement. C'est le contrôle qui manquait au cas (d) du
   process.
2. `eco-fisc-verte-5` et `-7` sont suivies du **titre courant** de la page (artefact d'ordre du
   flux `-raw`), c'est-à-dire de la fin du corps de page. Vérification complémentaire faite sur
   les pages voisines : p. 65 ouvre le **chapitre 17** (donc la prop. 7 est la dernière du ch. 16)
   et p. 191 ouvre la **prop. 6** du ch. 60. Aucune proposition ne déborde d'une page à l'autre.
3. `eco-fisc-verte-6` : bornes internes nettes (`7.` avant, `8.` après) sur la même colonne.

### 3.b Contrôle croisé avec les miroirs `.md` — **5/5 présents**

Chaque verbatim se retrouve dans `data/sources/ecologistes-programme-2026.md` (4) et
`data/sources/lfi-avenir-en-commun-2025.md` (1), blancs neutralisés. Archive brute et miroir
concordent : la normalisation n'a rien altéré sur ces 4 pages et cette section. Rappel : le
miroir n'est **jamais** la source citée.

### 3.c Contrôles de cohérence (automatisés)

- **Aucune collision d'id** : les 5 nouveaux ids confrontés aux **432 ids existants**
  (`data/candidats/*.json` + les 6 brouillons). Aucun doublon interne. La série
  `eco-fisc-verte-1…3` est prolongée par `-4…-7` ; `lfi-fisc-verte-01…06` par `-07`.
- **Aucune réextraction** : les 5 verbatims confrontés aux 432 verbatims existants ; aucun n'y
  figure, ni à l'identique, ni comme fragment, ni comme sur-ensemble. (Contrôle fait **avant**
  écriture : plusieurs de ces chapitres n'avaient jamais été ouverts, mais le contrôle a été
  passé quand même, comme demandé.)
- Schéma v0.2 respecté : **9 champs exactement** par mesure, aucun `synthese`, aucun espace
  double, aucun bord d'espace, aucun badge `[EUROPE]` resté dans un verbatim.
- `axe` = `fisc-verte` pour les 5 ; tous les `source_url` en `https://`, **aucun** ne référence un
  miroir `.md` ; les 4 mesures Écologistes portent bien `#page=63/64/88/190` (le folio imprimé
  coïncide avec l'index de page du PDF, vérifié sur les 4).

---

## 4. Balayage rouvert — les deux programmes intégraux

Méthode : sur le **programme Écologistes**, découpage des 208 pages reconstruites en **664
propositions** (repère : la numérotation imprimée) puis filtre *instrument fiscal ou commercial*
× *terme écologique* ; sur le **programme LFI**, filtre équivalent appliqué aux **blocs**
`mesure` / `mesure-cle` des 18 chapitres (un bloc = une proposition). Chaque candidate a ensuite
été confrontée aux 432 mesures déjà en base ou en brouillon.

### 4.1 Écologistes — candidates non couvertes, **signalées et non extraites**

Aucune n'est de la fiscalité ou de la douane à motif écologique **au sens de l'axe** ; toutes
relèvent de chantiers non ouverts. Verbatim (extraits significatifs) fourni pour que l'éditeur
n'ait pas à rouvrir le PDF.

| Réf. | Verbatim (extrait) | Pourquoi non extraite |
|---|---|---|
| **ch. 25 prop. 8**, p. 97 | « **Réorienter et verdir le Crédit Impôt Recherche vers l'innovation durable des PME et des ETI.** Privilégier une logique de subvention qui cofinance à 50 % tout projet R&D mené conjointement avec un laboratoire académique […] Cofinancer 1000 chaires industrielles et universitaires sur la transition écologique […] » | **La plus discutable de la liste** : instrument fiscal (CIR) + critère écologique explicite, elle passe le critère d'entrée. Mais son **pendant LFI existe** — 5.5 bloc 8, « Supprimer le Crédit impôt recherche au profit du financement des universités […] » — **sans** critère écologique, donc destiné à `fisc-aides-entreprises`. Les extraire séparément séparerait deux propositions portant **le même instrument** sur deux axes : exactement le défaut signalé en Q3 du rapport précédent. → **décision éditeur (Q1 ci-dessous)**, ni l'une ni l'autre extraite ici. |
| **ch. 3 prop. 5**, p. 24 | « Couvrir 35 % du transport de marchandise grâce au fret ferroviaire, fluvial et maritime en 2050. […] **en rééquilibrant la fiscalité et les tarifs (suppression progressive des abattements de TICPE, éco-redevance poids lourds sur le réseau routier non-concédé…)** […] » | Fiscalité verte réelle, mais **enchâssée dans une proposition de fret** : la mesure = la proposition entière, dont l'instrument dominant est la planification modale. Chantier **Mobilités**, non ouvert (aucun axe transport n'existe dans le corpus). |
| **ch. 3 prop. 6**, p. 24 | « Interdire la vente de poids lourds thermique neufs en 2040 […] **Relever progressivement les taxes sur le gazole des camions au taux normal.** […] » | idem — instrument dominant : interdiction + obligation. Chantier Mobilités. |
| **ch. 3 prop. 8**, p. 25 | « Verdir le transport de passagers en mer […] **Rééquilibrer la fiscalité des énergies entre électricité et carburants fossiles dans le maritime** et adapter le forfait mobilité au transport maritime décarboné. » | idem. Chantier Mobilités. |
| **ch. 3 prop. 9**, p. 25 | « Réduire le trafic aérien. […] **Augmenter la fiscalité sur les billets d'avion (Taxe sur les Billets d'Avion ou TSBA et taux de TVA) pour compenser les exonérations fiscales sectorielles.** […] **Organiser une sortie concertée de la Convention de Chicago exemptant de taxe énergétique les vols internationaux.** […] » | **Le reliquat le plus proche de l'axe** : c'est le prolongement direct d'`eco-fisc-verte-1` et de `lfi-fisc-verte-06` (kérosène). Mais l'instrument dominant de la proposition est l'interdiction de vols et de jets. Chantier Mobilités → **Q2**. |
| **ch. 2 prop. 2**, p. 20 | « Relancer la construction et la rénovation de logements locatifs sociaux (LLS). […] **en diminuant la TVA sur la construction** […] » | TVA, mais **sans motif écologique** (objectif : production de LLS). Chantier Logement. |
| **ch. 16 prop. 6**, p. 64 | « [EUROPE] Supprimer les contraintes austéritaires du Pacte de stabilité et de croissance […] Supprimer les « **clauses de sauvegarde** » et les indicateurs rigides […] » | Faux positif du filtre : ici « clause de sauvegarde » désigne les règles budgétaires européennes, **pas** une mesure commerciale. Destination : `fisc-dette`. |
| **ch. 61 prop. 11**, p. 195 | « [EUROPE] Reconstruire une Coordination Industrielle et Technologique de Défense européenne. […] **Conditionner une partie des aides publiques à l'industrie de défense (subventions, prêts et garanties) à des objectifs vérifiables de réduction de l'empreinte carbone** […] » | Conditionnalité d'aides, ni fiscale ni douanière. Chantier Défense. |
| **ch. 65 prop. 9**, p. 205 | « [EUROPE] Promouvoir une réforme du système économique et financier mondial. Réformer la Banque Mondiale et le Fonds Monétaire International […] Réformer le droit international de la concurrence pour permettre de lutter contre **les subventions aux énergies fossiles**, en soutenant les discussions à l'**Organisation Mondiale du Commerce (OMC)** […] » | **Pendant EELV de LFI 16.5** : gouvernance internationale, pas d'instrument fiscal ou douanier national. Écartée pour la **même** raison → la symétrie tient. |
| **ch. 20 prop. 6**, p. 78 | « Moderniser le droit minier […] **Renforcer la fiscalisation de l'exploitation minière au bénéfice des populations des pays miniers** […] » | Déjà écartée par la passe précédente (§3.2) : fiscalité de la **rente minière dans les pays producteurs**, pas fiscalité environnementale française. Reliquat « Matières premières & mines ». |

### 4.2 LFI — candidates non couvertes, **signalées et non extraites**

Résultat marquant : sur **l'ensemble** du programme LFI, le filtre *fiscal/commercial × écologique*
ne remonte que **9 propositions**, dont **8 étaient déjà extraites** (6 sur `fisc-verte`, 1 sur
`fisc-fortune`, 1 sur `fisc-niches`, 1 sur `eco-biodiversite`) ; la 9ᵉ est **17.1 bloc 1**, dans ce
lot. Autrement dit, **la colonne LFI de l'axe est close** au sens du critère d'entrée.

Balayage complémentaire, purement commercial cette fois (douane, OMC, libre-échange, dumping,
frontières, Mercosur, importation), pour ne rien manquer d'une protection commerciale dont le
motif écologique serait implicite :

| Réf. | Verbatim | Pourquoi non extraite |
|---|---|---|
| **17.2 bloc 1** | « Abroger les accords de libre-échange en vigueur (comme avec la Nouvelle-Zélande, le Canada, le Japon) » | **Nouveau — non repéré par la passe précédente.** Pendant direct d'`eco-fisc-verte-5`, mais **aucun critère écologique dans le verbatim** → hors critère d'entrée. → **Q3**. |
| **17.2 blocs 2, 4, 5** | « Cesser d'appliquer unilatéralement les normes incompatibles avec nos engagements écologiques et sociaux […] » / « Utiliser les contradictions entre les règles européennes et nos engagements internationaux sur le climat […] » / « instaurer un principe de non-régression écologique et sociale […] » | Critère écologique présent, mais instrument **institutionnel** (désobéissance au droit européen), pas fiscal ni douanier. Chantier Institutions/Europe. |
| **16.7 bloc 2** | « S'opposer aux accords commerciaux inégaux afin d'éviter aux migrants de devoir fuir leur pays » | Protection commerciale à motif **migratoire**. Chantier Immigration. |
| **16.5 blocs 1 à 4** | (cf. §1.a) | Gouvernance internationale. Reconfirmé hors axe. |
| **9.2 blocs 2 et 15** | « Adopter des mesures antidumping d'urgence sur les industries stratégiques […] » / « Renégocier le cadre de l'Organisation mondiale du commerce (OMC) » | Déjà écartées par la passe précédente : aucun critère écologique. Reliquat Économie. |
| **5.5 bloc 8** | « Supprimer le Crédit impôt recherche au profit du financement des universités et instituts de recherche et mettre en place des plans nationaux de recherche » | Aucun critère écologique. Destination `fisc-aides-entreprises` — mais à traiter **conjointement** avec EELV ch. 25 prop. 8 (cf. Q1). |
| **15.3 bloc 4** | « […] Accroître les forces de police et des douanes à des fins d'investigation et de remontées des filières » | « Douanes » au sens policier (stupéfiants). Hors sujet. |

---

## 5. Équilibre de l'axe `fisc-verte` — avant / après

### 5.a En nombre de mesures

La **décision n° 24** du journal éditorial retire `lfi-fisc-verte-03` (taxe kilométrique du
ch. 9.2, renvoyée en reliquat Économie) du lot précédent. Les deux lectures sont données, car la
décision n° 23 mentionne encore « 9 mesures » — c'est-à-dire l'état **avant** son application.

| | Avant tout comblement (en base) | Après `fisc-verte-complement` (tel que livré) | Après application de la décision n° 24 | **Après cette micro-passe** |
|---|---|---|---|---|
| Écologistes | 1 | 3 | 3 | **7** |
| LFI | 0 | 6 | 5 | **6** |
| **Total** | **1** | **9** | **8** | **13** |

L'axe passe d'un seul candidat à **deux colonnes de taille comparable** (7 EELV / 6 LFI ; 7 / 7 si
la décision n° 24 était finalement révisée). Ce rééquilibrage est un **résultat** du balayage, pas
un objectif (décision n° 16). Deux conséquences pour l'éditeur, à traiter **au moment de la
fusion** :

1. **`ecart_synthese` factuellement faux.** Le texte actuel — « Axe porté par les seuls
   Écologistes à ce stade […] aucune mesure LFI captée sur la fiscalité environnementale comme
   instrument » — devient inexact dès la fusion du lot précédent, et davantage encore ici. À
   réécrire. (Je ne l'ai pas touché : `data/axes.json` est intact.)
2. **Baseline insuffisante** (verdict déjà rendu au §6 du rapport précédent, **inchangé et
   aggravé**) : la baseline stampée `baseline_verifiee: 2026-07-29` parle de budget vert, malus au
   poids et TIRUERT ; elle ne dit rien du MACF, des droits de douane, des clauses miroirs, de la
   Contribution Climat Énergie ni du CIR — qui portent désormais **10 des 13 mesures**. Les 8
   pistes sourçables du §6.a du rapport précédent restent valides et non vérifiées ; ce lot en
   ajoute deux : (9) **état de la Contribution Climat Énergie** (composante carbone des accises
   sur les énergies, gelée à 44,6 €/tCO₂ depuis 2018 — **à vérifier**, legifrance / budget vert) et
   (10) **cadre des ressources propres de l'UE** (décision ressources propres, part des droits de
   douane, projet de ressource propre MACF — **à vérifier**, eur-lex / Conseil de l'UE).

### 5.b En volume de texte (avertissement de lecture)

| | Mesures | Caractères de verbatim |
|---|---|---|
| Écologistes | 7 | **4 836** |
| LFI | 6 | **1 180** (1 318 avec `lfi-fisc-verte-03`) |

À nombre de mesures quasi égal, la colonne Écologistes pèse **4,1 fois** plus de texte.
C'est le grain d'écriture (propositions-blocs de 5 à 10 phrases contre puces d'une ligne), pas un
écart d'ambition. L'affichage doit éviter de laisser croire l'inverse : un compteur « 7 / 7 »
serait ici plus honnête qu'une mise en page à hauteur de texte.

### 5.c Composition de l'axe après fusion

Sur 13 mesures : **8 relèvent de la protection commerciale** (douane, MACF, clauses de
sauvegarde, clauses miroirs, normes à l'importation, veto commercial), **5 de la fiscalité
interne**. Le libellé « Fiscalité environnementale » couvre encore l'ensemble au sens large (un
droit de douane est un impôt), mais il ne décrit plus le centre de gravité de l'axe — la question
**Q7** du rapport précédent (scinder ou renommer) se repose donc, comme annoncé.

---

## 6. L'axe est-il complet sur les deux programmes ? — réponse explicite

**Côté LFI : oui, l'axe est clos.** Le balayage a porté sur **tous** les blocs de **tous** les
chapitres de l'archive ; il ne reste **aucune** proposition LFI combinant instrument
fiscal/douanier et critère écologique qui ne soit pas placée. Les propositions commerciales
restantes (17.2 b1, 16.7 b2, 9.2 b2 et b15, 16.5) sont dehors **par le critère écrit**, pas par
défaut de balayage.

**Côté Écologistes : oui pour les chapitres de fiscalité, d'économie, de commerce, de
collectivités et d'Europe ; non dans l'absolu.** Il subsiste une veine de fiscalité écologique
dans des chapitres qui appartiennent à des **chantiers non ouverts**, listés nommément au §4.1 :

- **Mobilités / transports** (ch. 3, p. 23-25) : TICPE, éco-redevance poids lourds, taxes gazole,
  fiscalité des billets d'avion, Convention de Chicago — **4 propositions**. Aucun axe transport
  n'existe encore dans le corpus, et LFI **n'a aucune proposition symétrique** de fiscalité des
  transports (vérifié : son seul énoncé de ce type est le kérosène, déjà capté en
  `lfi-fisc-verte-06`). Les faire entrer maintenant créerait une colonne EELV sans vis-à-vis
  **et** trancherait par avance le grain du futur chantier Mobilités.
- **Recherche** (ch. 25 prop. 8) : verdissement du CIR — à traiter avec son pendant LFI (Q1).
- **Logement** (ch. 2 prop. 2) : TVA construction, sans motif écologique.

**Formulation à retenir** : l'axe est **complet et symétrique pour son périmètre déclaré**
(fiscalité et protection commerciale écologiques hors transports, recherche et logement). Ce
n'est **pas** un trou de balayage — c'est une frontière de chantier, désormais **écrite**. Si
l'éditeur veut un axe absolument exhaustif, la bonne façon de l'obtenir n'est pas une nouvelle
micro-passe mais l'ouverture du chantier **Mobilités**, qui décidera du sort des 4 propositions
ci-dessus (et de leurs équivalents LFI) dans un cadre où les deux programmes seront lus au même
grain.

---

## 7. Questions fermées pour l'éditeur

Chaque question est **Oui / Non**, avec la réponse retenue par défaut dans le draft.

| # | Question | Défaut |
|---|---|---|
| Q1 | **CIR** : traiter EELV ch. 25 prop. 8 (« Réorienter et verdir le Crédit Impôt Recherche ») et LFI 5.5 bloc 8 (« Supprimer le Crédit impôt recherche ») **ensemble sur `fisc-aides-entreprises`**, plutôt que faire entrer la seule EELV sur `fisc-verte` ? **Oui / Non** | **Oui** — c'est le même instrument des deux côtés ; les séparer reproduirait le défaut signalé en Q3 du rapport précédent. Répondre « Non » (= faire entrer EELV ch. 25-8 sur `fisc-verte`) est défendable : elle passe le critère d'entrée. Dans ce cas, l'id libre est `eco-fisc-verte-8` et le verbatim est au §4.1. **Aucune des deux n'est extraite dans ce lot.** |
| Q2 | Laisser les **4 propositions de fiscalité des transports** d'EELV (ch. 3, p. 24-25 : TICPE, gazole camions, fiscalité maritime, TSBA/Convention de Chicago) au futur chantier **Mobilités**, plutôt que les faire entrer ici ? **Oui / Non** | **Oui** — instrument dominant non fiscal, aucun vis-à-vis LFI, et le grain du chantier Mobilités n'est pas encore fixé. Réserve honnête : la fiscalité aérienne est le prolongement direct d'`eco-fisc-verte-1` et de `lfi-fisc-verte-06`, déjà sur l'axe. |
| Q3 | *(La Q3 du rapport précédent — taxe kilométrique 9.2 — a été **tranchée « Non »** par la décision n° 24 : `lfi-fisc-verte-03` sort de l'axe. Rien à refaire ici.)* Maintenir **LFI 17.2 bloc 1** (« Abroger les accords de libre-échange en vigueur… ») **hors** de l'axe, faute de critère écologique dans son verbatim, alors qu'`eco-fisc-verte-5` (non-ratification du CETA/Mercosur « qui affectent le climat et la biodiversité ») y entre ? **Oui / Non** | **Oui** par défaut — application mécanique du critère écrit. Réserve : c'est le **pendant le plus direct** d'`eco-fisc-verte-5`, et le lecteur verra une proposition EELV sur les traités sans réponse LFI, alors que LFI en a une. Répondre « Non » ajouterait `lfi-fisc-verte-08` (id libre, verbatim au §4.2) et rétablirait ce vis-à-vis, au prix d'une entorse au critère. |
| Q4 | `eco-fisc-verte-7` (ch. 60-5, ressources propres de l'UE) : la mettre sur `fisc-verte` alors que son objet premier est le **budget de l'Union** ? **Oui / Non** | **Oui** — le MACF y est l'instrument nommé, et c'est **le même instrument** qu'`eco-fisc-verte-3` (« Étendre le périmètre et accélérer la mise en œuvre du MACF ») : les séparer donnerait deux propositions MACF sur deux axes. Alternative : `fisc-dette` ou un futur axe « Budget de l'UE », avec cotag `fiscalite-verte`. |
| Q5 | `eco-fisc-verte-6` (ch. 22-7, Contribution Climat Énergie aux collectivités) : la mettre sur `fisc-verte` plutôt que sur l'axe existant **`fisc-collectivites`** (où siège déjà `eco-fisc-collectivites-1`, ch. 17 prop. 14) ? **Oui / Non** | **Oui** — la proposition **nomme une taxe environnementale** et conditionne le transfert à un plan climat ; c'est de la fiscalité verte affectée. Si « Non », cotaguer `fiscalite-verte` pour qu'elle reste visible sous le filtre Écologie. |
| Q6 | `eco-fisc-verte-5` (traités d'investissement et de commerce) : la mettre sur `fisc-verte` alors qu'elle ne comporte **aucun impôt ni droit de douane** (retraits de traités, clauses miroirs, carve-out, cour multilatérale) ? **Oui / Non** | **Oui** — l'axe accueille déjà la protection commerciale non fiscale (`lfi-fisc-verte-01`, normes à l'importation), et c'est le vis-à-vis de `lfi-fisc-verte-07`. C'est **la mesure la plus longue de l'axe** (1 046 car.) : l'éditeur peut vouloir n'en afficher qu'un extrait en surface, verbatim intégral en un clic. |
| Q7 | Rappels du lot précédent, **toujours ouverts** : réécrire l'`ecart_synthese` de `fisc-verte` (devenu faux) et **étendre la baseline** au volet douanier/MACF avant publication. **Oui / Non** | **Oui** — inchangé, et rendu plus urgent : 10 des 13 mesures de l'axe ne sont couvertes par aucun fait de la baseline actuelle. Deux pistes ajoutées au §5.a (Contribution Climat Énergie ; ressources propres de l'UE), **non vérifiées** — travail de `verificateur-sources`. |

---

## 8. Points douteux et enrichissements proposés pour `data/PROCESS-extraction.md` (non modifié)

### 8.1 Points douteux consignés

1. **`fiscalite-verte` en thématique principale sur 3 mesures dont l'objet premier est ailleurs**
   (§2.a) : dette assumée, levée si `commerce-exterieur` est créée.
2. **`eco-fisc-verte-4` ne contient qu'un seul mot écologique** (« dumping fiscal **et
   environnemental** ») : elle entre par ce mot et par son instrument douanier. C'est la mesure
   Écologistes la plus proche de la limite du critère, symétrique de `lfi-fisc-verte-03` côté LFI
   (qui, elle, n'en contient aucun).
3. **Deux propositions MACF sur le même axe** (`eco-fisc-verte-3` ch. 20-8 et `eco-fisc-verte-7`
   ch. 60-5) : ce ne sont **pas** des doublons — deux propositions publiées séparément, l'une sur
   la protection commerciale, l'autre sur le budget de l'UE — et les fusionner serait une synthèse
   (garde-fou n° 1). Elles s'afficheront côte à côte.
4. **`rubrique_origine` LFI sans numéro de proposition** : conforme au corpus ; le rang de bloc
   est donné au §1 et au §3.a.

### 8.2 Enrichissements proposés (je n'ai pas modifié le process)

1. **§2 — vérifier systématiquement si une proposition est coupée entre deux colonnes, pas
   seulement entre deux pages.** Le cas (d) actuel ne vise que le rejet en pied de page. La p. 63
   montre une proposition qui commence en bas de colonne gauche et s'achève en haut de colonne
   droite, **sans aucun repère typographique** : le seul indice est que le bloc de gauche se
   termine sur une parenthèse ouverte grammaticalement inachevée. Règle proposée : après
   reconstruction par coordonnées, **contrôler que le dernier bloc de chaque colonne se termine
   par une ponctuation forte** ; sinon, chercher la suite en tête de la colonne suivante.
2. **§4 — utiliser un second moteur d'ordre de lecture comme témoin de recollage.** Quand un
   verbatim résulte d'un recollage (colonnes, pages), le comparer à la sortie `pdftotext -raw`
   (blancs neutralisés) **prouve** le recollage : `-raw` suit le flux de contenu, `-bbox-layout`
   la géométrie ; si les deux donnent la même chaîne contiguë, l'ordre est établi par deux voies
   indépendantes. C'est ce qui a validé `eco-fisc-verte-4`.
3. **§4 — accepter qu'une borne « après » soit le titre courant de la page.** Sur ce PDF, `-raw`
   place l'en-tête et le folio **après** le corps de page. Une borne « après » égale au titre
   courant signifie « fin du corps de page » : il faut alors **ouvrir la page suivante** pour
   vérifier qu'elle démarre bien sur la proposition suivante (fait ici pour les p. 64 → 65 et
   190 → 191). Sans cette vérification, une proposition à cheval passerait pour complète.
4. **§7 — distinguer « trou de balayage » et « frontière de chantier ».** Un rapport de
   complétude d'axe doit répondre à « l'axe est-il complet ? » en deux temps : (a) reste-t-il de
   la matière **non vue** ? (b) reste-t-il de la matière **vue mais laissée à un autre chantier** ?
   Le (b) doit être **nommé chapitre par chapitre, avec verbatim**, et la symétrie entre candidats
   doit être établie **sur le (b) aussi** (ici : 4 propositions EELV de fiscalité des transports
   sans équivalent LFI — ce qui justifie de ne pas les extraire seules).
5. **§7 — vérifier l'existence d'un pendant sur le même instrument avant de faire entrer une
   mesure isolée sur un axe.** Le cas CIR (Q1) montre qu'une mesure peut passer le critère d'entrée
   d'un axe **et** devoir rester dehors, parce que son jumeau chez l'autre candidat, faute du même
   critère textuel, irait sur un autre axe. Règle proposée : chercher le même **instrument nommé**
   dans l'autre programme avant de trancher, et documenter le couple.

---

## 9. Fichiers produits

- `/Users/micha/WEB/PROJECT/comparateur-programmes-2027/data/drafts/fisc-verte-micro.draft.json` — 5 mesures (Écologistes 4, LFI 1).
- `/Users/micha/WEB/PROJECT/comparateur-programmes-2027/data/drafts/fisc-verte-micro.rapport.md` — ce rapport.

Aucun fichier de `data/candidats/`, `data/axes.json`, `data/taxonomie.json`,
`data/choix-editoriaux.md`, `data/sources/` ou `src/` n'a été touché. Aucun commit.
