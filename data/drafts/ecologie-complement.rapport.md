# Rapport d'extraction — Écologie, climat & énergie : **passe complémentaire** (rééquilibrage)

- **Date** : 2026-07-31
- **Livrables** : `data/drafts/ecologistes-ecologie-complement.draft.json` (32 mesures),
  `data/drafts/lfi-ecologie-complement.draft.json` (36 mesures), ce rapport.
- **Statut** : **brouillon**. Rien n'a été écrit dans `data/candidats/*`, `data/axes.json`,
  `data/taxonomie.json`, `data/choix-editoriaux.md` ni `src/`. Aucun commit.
- **Objet** : compléter le 1er lot (`ecologie.rapport.md`, §4.2) là où un candidat paraissait muet
  alors que sa matière était simplement hors du périmètre confié. Ces fichiers sont **destinés à
  être fusionnés avec le 1er lot**, ils n'en sont pas une correction.
- **Périmètre de cette passe** : Écologistes ch. **2 (prop. 8-10)**, **11 (prop. 8)**,
  **12 (prop. 8-9)**, **19**, **20 (volet transition)**, **28**, **46 (vérification)** ;
  LFI sections **9.3**, **16.6**, **18.1**, **18.2**.

---

## 0. Étape 0 — Sources (inchangées, revérifiées)

Aucune source nouvelle : mêmes documents que le 1er lot, mêmes archives brutes.

| | Écologistes | LFI |
|---|---|---|
| Document | « Le nouveau programme des Écologistes » (PDF « VDEF Programme.pdf », juillet 2026) | « L'Avenir en Commun », édition 2025 (melenchon2027.fr) |
| Officielle ? | Oui — `lesecologistes.fr` | Oui — `melenchon2027.fr` (site de campagne du candidat) |
| Présidentielle 2027 ? | Oui — plateforme portée par Marine Tondelier (réserve primaire du 11/10/2026 documentée dans `etat_programme`) | Oui — programme présenté le 28/01/2025 |
| Bon périmètre ? | Oui (plateforme de parti portée par la candidate, tranché le 2026-07-28) | Oui. Piège « PROGRAMME-FRONT-POPULAIRE » (coalition NFP 2024) toujours évité |
| Archive brute | `data/sources/raw/ecologistes_vdef-programme_pdf.tar.gz` | `data/sources/raw/lfi-melenchon2027-2025_html.tar.gz` |

**Méthode de récupération** : aucun re-téléchargement (moindre coût). Les verbatims sont **extraits
programmatiquement** des miroirs `.md` normalisés (`data/sources/*.md`), qui font foi pour l'ordre
de lecture ; les archives brutes servent **exclusivement au contrôle qualité** (§2). Aucune saisie
manuelle de texte : le script de construction lit la ligne de proposition du miroir, retire le
numéro et le badge `[EUROPE]`, applique la convention de point final, et rien d'autre.

`source_url` pointe toujours vers l'original publié :
- Écologistes `https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=N`
- LFI `https://melenchon2027.fr/programme2025/livre/chapitreN/sM`

---

## 1. Volumes extraits

| | Écologistes | LFI | Total |
|---|---|---|---|
| Propositions présentes dans le périmètre | 36 dans les chapitres traités (+ 5 propositions numérotées au ch. 46, vérification seule) | 38 blocs / **39 propositions** (cf. §6.1) | — |
| **Mesures extraites (draft)** | **32** | **36** | **68** |
| Reliquats signalés (autre méta-thème) | 4 | 3 | 7 |
| `synthese: true` produits | 0 | 0 | 0 |

Cumul avec le 1er lot : **Écologistes 97**, **LFI 152**, total **249 mesures** sur le chantier.

### 1.a Détail Écologistes (32)

| Chapitre | Propositions | Extraites | Axes | Pages PDF |
|---|---|---|---|---|
| 2 — Pouvoir se loger décemment | 3 (prop. 8, 9, 10 seules, périmètre confié) | 3 | `eco-renovation` | 21 |
| 11 — Créer un droit à l'alimentation de qualité | 1 (prop. 8 seule) | 1 | `agri-condition-animale` | 46 |
| 12 — Transformer notre modèle agricole | 2 (prop. 8, 9 seules) | 2 | `agri-condition-animale` | 49-50 |
| 19 — Prioriser l'économie circulaire | 10 | 10 | `eco-dechets` (8), `eco-publicite` (1), `eco-emplois-transition` (1) | 73-75 |
| 20 — Planifier une nouvelle industrialisation | 8 (volet transition : 1, 2, 4, 5) | 4 | `eco-investissement` | 77 |
| 28 — Sortir de la civilisation des toxiques | 12 | 12 | `sante-toxiques` (11), `eco-dechets` (1) | 107-109 |
| 46 — Territoires dits d'Outre-mer | 5 + 7 puces territoriales | **0** | — (cf. §4) | 153 |

### 1.b Détail LFI (36)

| Section | Propositions | Extraites | Axes | Reliquats |
|---|---|---|---|---|
| 9.3 — Grands chantiers écologiques, créateurs d'emplois | 9 | 8 | `eco-adaptation` (2), `eco-ocean` (1), `eco-eau-service` (1), `eco-investissement` (1), `eco-energie-mix` (1), `eco-forets` (1), `eco-renovation` (1) | 1 |
| 16.6 — Protections du droit international aux biens communs planétaires | 10 | 8 | `eco-biodiversite` (4), `eco-dechets` (1), `eco-eau-ressource` (1), `eco-ocean` (1), `eco-adaptation` (1) | 2 |
| 18.1 — Protéger les mers et océans | 13 | 13 | `eco-ocean` | 0 |
| 18.2 — Être à la hauteur de la responsabilité maritime française | 6 blocs / **7 propositions** (cf. §6.1) | 7 | `eco-ocean` | 0 |

Une mesure = une proposition mot-pour-mot. Seules transformations (conventions déjà en vigueur) :
normalisation des espaces, point final ajouté quand la source n'a pas de ponctuation terminale
(sauf fin en `)` ou `:` — convention observée sur les 116 mesures LFI du 1er lot), badge `[EUROPE]`
sorti du verbatim vers `rubrique_origine` (4 mesures : `eco-dechets-08`, `eco-dechets-09`,
`eco-toxiques-10`, `eco-toxiques-11`).

---

## 2. Contrôle qualité de fidélité (obligatoire)

Mené **contre les archives brutes** (`data/sources/raw/`) réextraites pour l'occasion, pas contre
les miroirs `.md` — sinon le test ne prouverait que la normalisation déjà faite.

### 2.a LFI — 36/36 identiques

Méthode : décompression de `lfi-melenchon2027-2025_html.tar.gz`, extraction des blocs
`<div class="mesure">` **et** `<div class="mesure-cle">` des 4 pages HTML concernées
(`chapitre9_s3`, `chapitre16_s6`, `chapitre18_s1`, `chapitre18_s2`), puis comparaison
**caractère par caractère** du verbatim avec le bloc source, après neutralisation des espaces
insécables/multiples et de la convention de point final. Les deux segments du bloc coupé par un
« • » littéral (§6.1) sont comparés séparément au segment correspondant.

> **36/36 identiques.** Aucune divergence, aucune correction nécessaire.

Douze échantillons tirés au sort (graine 2027) et vérifiés individuellement : `lfi-ocean-08`,
`lfi-biodiversite-06`, `lfi-ocean-07`, `lfi-ocean-02`, `lfi-adaptation-04`, `lfi-adaptation-05`,
`lfi-ocean-14`, `lfi-dechets-07`, `lfi-biodiversite-07`, `lfi-ocean-23`, `lfi-biodiversite-08`,
`lfi-forets-17` → **12/12 identiques** (≥ 10/10 requis).

### 2.b Écologistes — 27/32 en sous-chaîne stricte, 32/32 après neutralisation des traits d'union

Méthode : décompression de l'archive PDF, `pdftotext` **sans** `-layout` (restitue l'ordre de
lecture des deux colonnes quand les propositions sont numérotées, cf. acquis (a) du process),
découpage par page, retrait du folio en pied de page et de l'en-tête courant (identifié comme le
plus long préfixe commun à deux pages consécutives d'un même chapitre), puis recherche du verbatim
comme **sous-chaîne exacte** dans la page — ou dans la concaténation page N + page N+1 pour les
propositions coupées par un saut de page.

> **27/32 sous-chaînes exactes.** Les 5 écarts sont **tous** des mots composés coupés en fin de
> ligne, dont `pdftotext` supprime le trait d'union (piège (e) du process) et que la normalisation
> `.md` a restaurés à raison. Vérifiés un par un en `pdftotext -layout` (la ligne source se termine
> bien par le trait d'union) :
> `Éco-prêt` (p. 21), `part-pairing` (p. 73), `éco-organismes` (p. 74), `directive-cadre` (p. 75),
> `pollueur-payeur` (p. 108). Après neutralisation des traits d'union et des espaces :
> **32/32 identiques**. Aucune divergence de texte réelle.

Douze échantillons tirés au sort (graine 2027) : `eco-dechets-04`, `eco-condition-animale-10`,
`eco-investissement-02`, `eco-renovation-04`, `eco-renovation-02`, `eco-toxiques-04`,
`eco-dechets-06`, `eco-dechets-08`, `eco-toxiques-10`, `eco-dechets-03`, `eco-toxiques-08`,
`eco-toxiques-06` → **12/12 identiques**.

*Correction appliquée pendant le QC* (l'extraction a été corrigée, jamais le texte) : deux
propositions sont **coupées par un saut de page** dans le PDF et recollées par le miroir —
`eco-dechets-04` (ch. 19 prop. 4, p. 73→74) et `eco-condition-animale-11` (ch. 12 prop. 8,
p. 49→50). Leur `rubrique_origine` porte désormais la double page et la mention « proposition
coupée par un saut de page dans le PDF, recollée » ; `source_url` pointe la première page.

### 2.c Contrôles de cohérence (automatisés)

- **Aucune collision d'id** avec le 1er lot ni avec `data/candidats/*.json` (352 ids existants
  confrontés aux 68 nouveaux) ; aucun doublon interne.
- Tous les `source_url` pointent l'original (`https://`), aucun ne référence un miroir `.md` ;
  les 32 mesures Écologistes portent bien `#page=N`.
- Schéma v0.2 respecté : 9 champs exactement par mesure, aucun `synthese`, aucun badge `[EUROPE]`
  resté dans un verbatim, aucun espace double ni bord d'espace.
- Les 21 thématiques utilisées appartiennent toutes soit à `data/taxonomie.json`, soit à la liste
  des **21 thématiques proposées** au §5 du 1er rapport. **Aucune nomenclature nouvelle** n'a été
  inventée dans cette passe (ni axe, ni thématique).

---

## 3. Équilibre atteint après complément (le point à vérifier d'un coup d'œil)

### 3.a Les 7 axes visés par la passe

| Axe | Avant (EELV / LFI) | **Après (EELV / LFI)** | Verdict |
|---|---|---|---|
| `eco-renovation` | 1 / 7 | **4 / 8** | Rééquilibré |
| `eco-dechets` | 0 / 6 | **9 / 7** | Rééquilibré |
| `eco-publicite` | 0 / 4 | **1 / 4** | Comblé, mais écart de **grain** (cf. §3.c) |
| `sante-toxiques` | 0 / 7 | **11 / 7** | Rééquilibré |
| `eco-investissement` | 0 / 2 | **4 / 3** | Rééquilibré |
| `eco-emplois-transition` | 0 / 3 | **1 / 3** | Comblé, mais faible côté EELV (cf. Q1) |
| `eco-ocean` | 9 / 1 | **9 / 23** | Rééquilibré, écart désormais **réel** (LFI consacre un chapitre entier à la mer) |

### 3.b Axes touchés en plus (effets de bord assumés)

| Axe | Avant | **Après** | Apport |
|---|---|---|---|
| `eco-adaptation` | 8 / 3 | **8 / 6** | LFI 9.3 (infrastructures, ouvrages d'art), 16.6 (Casques bleus) |
| `eco-biodiversite` | 4 / 4 | **4 / 8** | LFI 16.6 (volet international : écocide, tribunal, pôles) |
| `agri-condition-animale` | 9 / 8 | **12 / 8** | EELV ch. 11-8, 12-8, 12-9 (cf. §5) |
| `eco-forets` | 6 / 16 | **6 / 17** | LFI 9.3 (filière bois) |
| `eco-energie-mix` | 6 / 5 | **6 / 6** | LFI 9.3 (réseau haute tension) |
| `eco-eau-service` | 3 / 8 | **3 / 9** | LFI 9.3 (réseaux d'eau et d'assainissement) |
| `eco-eau-ressource` | 6 / 9 | **6 / 10** | LFI 16.6 (l'eau comme enjeu international) |

### 3.c Axes qui restent déséquilibrés — et pourquoi

| Axe | État | Raison |
|---|---|---|
| `eco-eau-outremer` | **0 / 9** | **Déséquilibre RÉEL** (documenté §4) : les Écologistes n'ont aucune proposition dédiée à l'eau en Outre-mer. |
| `eco-publicite` | **1 / 4** | **Artefact de grain, pas de fond** : l'unique proposition EELV (19-5) contient à elle seule 8 mesures (ARPP→ARCOM, interdiction pub fossiles/malsains, écrans numériques, influenceurs, publicité ciblée, prix barrés…), là où LFI publie 4 puces d'une ligne. En volume de contenu, les deux programmes sont comparables. |
| `eco-emplois-transition` | **1 / 3** | **Mi-réel, mi-conventionnel** : le programme EELV traite la formation/reconversion **à l'intérieur** de ses propositions sectorielles (2-10 filière bâtiment, 19-7 métiers de la circularité, 20-2 GPEC) plutôt que dans un bloc autonome. Convention du 1er lot suivie (la formation embarquée reste sur l'axe sectoriel — cf. `lfi-renovation-05`, `lfi-forets-10`). Cf. Q1. |
| `eco-planification` | 2 / 15 | Hors périmètre des deux passes ; écart de grain probable (propositions EELV denses). À réexaminer avant publication. |
| `eco-sols` | 6 / 2 | Idem, non traité par cette passe. |
| `eco-pesticides` | 1 / 1 | Équilibré. **Note** : ni 12-8 ni 12-9 ne portent sur les pesticides ; la matière pesticides d'EELV restée hors périmètre est en 12-7, 12-12 et 12-13 (§7). |

> ⚠️ Le rééquilibrage porte sur la **présence**, pas sur la densité. Trois axes affichent encore un
> rapport de volume qui tient au **grain d'écriture** des deux programmes (EELV : propositions-blocs
> de 5 à 12 phrases ; LFI : puces d'une ligne), et non à un silence. Si le site affiche un compteur
> de mesures par candidat, il donnera mécaniquement l'avantage visuel à LFI. C'est un choix
> d'affichage à trancher, pas un défaut d'extraction.

---

## 4. EELV ch. 46 « Outre-mer » — réponse explicite

**Le chapitre a été lu intégralement.** Le cas qui s'applique est le premier : **il ne contient
aucune proposition dédiée à l'eau**, donc rien n'a été extrait — ce n'est pas un manque de temps.

Ce qu'on y trouve exactement sur l'eau, et rien de plus :

1. **Prop. 46-2** (objet : congrès des territoires + plan d'égalité) mentionne l'eau au milieu
   d'une énumération : « […] la mise en place d'un plan quinquennal d'investissement dans les
   écoles, les infrastructures de transport, d'eau potable et d'assainissement. » — l'eau y est un
   item de liste, pas l'objet de la proposition.
2. **Puce territoriale « À Mayotte »** (puce non numérotée, multi-sujets : titre de séjour, droit
   du sol, AME, RSA, scolarisation…) : « Mettre en place un plan eau adapté aux besoins locaux sur
   le long terme. » — une phrase dans une puce dont l'objet est le statut du territoire.

Extraire l'un ou l'autre comme « mesure eau Outre-mer » reviendrait à fabriquer une comparabilité
qui n'existe pas dans la source. Je n'ai donc rien extrait.

**Conséquence pour l'arbitrage en cours** (`eco-eau-outremer` doit-il exister ?) — éléments, la
décision reste à l'éditeur :

- Le déséquilibre 9 / 0 est **réel et explicable** : LFI consacre une sous-section entière
  (14.3 « Le droit à l'eau dans les Outre-mer ») au sujet ; les Écologistes traitent l'Outre-mer
  comme un **chapitre de territoire** (ch. 46) et non par politique sectorielle. C'est une
  différence d'**architecture de programme**, pas un oubli de l'un des deux.
- **Si l'axe est supprimé** et ses 9 mesures LFI reversées dans `eco-eau-ressource` /
  `eco-eau-service` : ces axes contiennent des mesures EELV qui ne parlent jamais d'Outre-mer, et
  la juxtaposition suggérerait une réponse EELV à une question ultramarine qui n'a pas été posée.
  Le silence deviendrait invisible au lieu d'être documenté.
- **Si l'axe est conservé** : la colonne EELV est vide, mais l'`ecart_synthese` de l'axe peut porter
  l'explication ci-dessus en une phrase (« les Écologistes traitent l'Outre-mer au ch. 46, sans
  proposition dédiée à l'eau »), ce qui est plus honnête et plus informatif.
- **Q0 (question fermée)** : conserver l'axe `eco-eau-outremer` avec une colonne EELV vide et une
  mention d'écart explicative, plutôt que redistribuer les 9 mesures LFI ? **Oui / Non** —
  proposition du présent rapport : **Oui**.

**Matière écologique repérée dans le ch. 46 mais non extraite** (hors du périmètre confié, qui se
limitait à la vérification « eau ») — à traiter par une 3ᵉ passe ou par un chantier Outre-mer :

- **46-3** : « Accélérer la transition écologique par un plan énergétique visant à une autonomie
  fondée sur les énergies renouvelables, par une rénovation des bâtiments et des logements et une
  adaptation des territoires aux conséquences du réchauffement climatique en particulier le long des
  littoraux. Adopter et financer un plan de lutte contre les sargasses […] » → irait dans
  `eco-adaptation` / `eco-energie-mix` / `eco-renovation`, et **répondrait directement** à
  `lfi-planification-15` et `lfi-emplois-transition-01` (Outre-mer).
- Puces territoriales à contenu écologique : Polynésie (dépollution et indemnisation des essais
  nucléaires — pendant de `lfi-toxiques-05`), Guyane (mercure, protection de la forêt, orpaillage —
  pendant de `lfi-forets-16`), Guadeloupe/Martinique (chlordécone — pendant de `lfi-toxiques-04`),
  Réunion (Fipronil), TAAF (biodiversité).
- ⚠️ Ces puces territoriales **ne sont pas numérotées** dans la source et mêlent plusieurs
  politiques publiques par puce : leur découpage en mesures posera une vraie question de grain.
  Je ne l'ai pas tranchée.

---

## 5. `agri-condition-animale` — provenance des 3 mesures EELV et proportion élevage

**Provenance exacte** (les trois viennent bien des renvois signalés au §4.2 du 1er rapport) :

| id | Source | Objet | Élevage ? |
|---|---|---|---|
| `eco-condition-animale-10` | **ch. 11 prop. 8** (p. 46) | « Adopter un plan de réduction progressive de la consommation de produits animaux issue de l'agro-industrie. Atteindre une réduction de 50% […] en 2050 […] » | **Filière élevage** (par la demande : consommation de protéines animales) |
| `eco-condition-animale-11` | **ch. 12 prop. 8** (p. 49-50) | « Mettre en place un plan de transition de l'élevage. […] réduction planifiée et progressive des cheptels bovins […] Interdire les mégaporcheries, les mégapoulaillers […] » | **Élevage**, cœur de sujet |
| `eco-condition-animale-12` | **ch. 12 prop. 9** (p. 50) | « Renforcer les systèmes pastoraux extensifs. […] cohabitation entre le pastoralisme et les grands prédateurs comme le loup […] » | **Élevage** (pastoralisme) + biodiversité |

**Proportion élevage / non-élevage sur l'axe complet** (20 mesures : EELV 12 + LFI 8) :

| Catégorie | EELV | LFI | Total |
|---|---|---|---|
| **Élevage & filières animales** (conditions d'élevage, abattage, transport, aquaculture, cheptels, pastoralisme, consommation de produits animaux, fourrure) | 6 (02, 03, 05, 10, 11, 12) | 6 (01, 02, 03, 04, 05, 08) | **12 (60 %)** |
| **Hors élevage** (chasse, animaux de compagnie, expérimentation animale) | 4 (01, 06, 07, 09) | 2 (06, 07) | **6 (30 %)** |
| **Mixte / transversal** (pratiques cruelles mêlant corrida + gavage + étourdissement ; personnalité juridique de l'animal) | 2 (04, 08) | 0 | **2 (10 %)** |

Lecture pour l'arbitrage : l'axe est **majoritairement agricole** (60 %, 70 % si l'on y range les
mixtes) — ce qui soutient son maintien sous `agriculture-alimentation` (décision n° 13, Q1 du 1er
rapport). Mais **30 % des mesures n'ont rien d'agricole** (chasse, animaux de compagnie dans les
hébergements d'urgence, expérimentation animale, personnalité juridique) et se retrouveraient
classées « Agriculture & alimentation » sur le site.

- **Q0bis (question fermée)** : scinder l'axe en deux — `agri-elevage-animaux` (12-14 mesures, sous
  `agriculture-alimentation`) et `condition-animale-hors-elevage` (6-8 mesures : chasse, compagnie,
  expérimentation, statut juridique) — plutôt que garder un axe unique de 20 mesures ? **Oui / Non**
  — proposition : **Non** en V1 (un axe unique reste lisible à 20 mesures et le cotag
  `condition-animale` assure la recherche), mais la question se reposera si l'axe grossit.
- Après complément, l'apport EELV est **100 % élevage** : il déplace donc le centre de gravité de
  l'axe vers l'agricole, dans les deux programmes.

---

## 6. Décisions de classement et cas-frontières — questions fermées

### 6.1 Anomalies de source rencontrées dans cette passe

1. **LFI 18.2 — deux propositions dans un seul bloc.** Le dernier
   `<div class="mesure">` de `chapitre18/s2` contient deux propositions séparées par un caractère
   `\x0b` suivi d'un « • » **littéral** : « Engager la construction de navires de souveraineté […]
   marins français • Demeurer une puissance polaire : […] brise-glace […] ». C'est le piège
   « puces fusionnées » documenté au §1 du process. **Découpé en 2 mesures** (`lfi-ocean-20`,
   `lfi-ocean-21`), le fait est consigné dans leur `rubrique_origine`. Le miroir `.md` les
   présente encore sur une seule ligne. → **La section 18.2 compte 6 blocs mais 7 propositions.**
   **À confirmer par l'éditeur.**
2. **EELV ch. 11 — proposition dupliquée par la source.** Les propositions **8** (p. 46) et **9**
   (p. 47) sont le **même texte** à deux détails typographiques près (« 50% » vs « 50 % » ; point
   final absent au n° 9). Ce n'est pas un artefact d'extraction : la duplication est bien dans le
   PDF publié, à cheval sur un saut de page. **Seule la prop. 8 a été extraite** (le périmètre ne
   demandait qu'elle) ; extraire les deux créerait une mesure fantôme. **À confirmer par
   l'éditeur** — et à signaler au parti, le cas échéant.
3. **EELV — 2 propositions coupées par un saut de page** (ch. 19 prop. 4 ; ch. 12 prop. 8),
   recollées, pages doubles consignées en `rubrique_origine` (cf. §2.b).
4. **EELV — micro-artefacts conservés bruts** (fidélité) : ponctuation manquante entre deux phrases
   (ch. 19 prop. 5 « […] des consommateurs Interdire la publicité toxique […] » ; ch. 19 prop. 8
   « […] en cas de manquement Fixer d'avantages d'écomodulations […] » ; ch. 20 prop. 3
   « […] d'intérêt national Soutenir leur implantation […] ») et coquilles de la source
   (« Instituter », « collecrtivités », « d'avantages » pour « davantage », « des des low tech »,
   « fortement exposée »). **Non corrigés** : ce serait modifier le verbatim.
5. **EELV ch. 12 prop. 8** se termine par un renvoi interne « [cf aussi la proposition pour
   l'amélioration des conditions de vie des animaux d'élevage 8-2] », conservé comme au 1er lot
   (anomalie n° 3 du 1er rapport). Même question pendante : sortir ces renvois du verbatim comme
   les badges `[EUROPE]` ?

### 6.2 Questions de classement (réponse par défaut retenue dans le draft)

| # | Question | Défaut |
|---|---|---|
| Q1 | EELV 2-10 (reconversion de la filière du bâtiment) et 20-2 (Grenelle de l'industrie, GPEC) : les laisser sur leur axe sectoriel (`eco-renovation`, `eco-investissement`) plutôt que sur `eco-emplois-transition` ? **Oui / Non** | **Oui** — convention du 1er lot (la formation embarquée dans une mesure sectorielle y reste : `lfi-renovation-05`, `lfi-forets-10`). Seule 19-7, entièrement consacrée aux métiers, va sur `eco-emplois-transition`. Répondre « Non » ferait passer l'axe à EELV 3 / LFI 3. |
| Q2 | EELV 28-12 (sortie du plastique à usage unique, consigne obligatoire) : la classer dans `eco-dechets` plutôt que dans `sante-toxiques` comme le reste de son chapitre ? **Oui / Non** | **Oui** — c'est le pendant exact de `lfi-dechets-02` (« interdire les plastiques à usage unique, remettre en place la consigne ») ; les comparer suppose le même axe. 28-11 (export de déchets toxiques) reste, lui, dans `sante-toxiques` avec cotag `dechets-economie-circulaire`. |
| Q3 | EELV 20-1/20-2/20-4/20-5 (fonds souverain, loi de programmation industrielle, sobriété compétitive, électrification des procédés) : les mettre dans `eco-investissement` faute d'axe « décarbonation de l'industrie » ? **Oui / Non** | **Oui** par défaut, mais c'est le classement **le plus contestable de la passe** : les deux programmes ont de la matière industrielle (EELV ch. 20, LFI 9.2 « Réindustrialiser et relocaliser »), et un axe dédié serait mieux fondé qu'un fourre-tout « financement ». Cf. §7. |
| Q4 | LFI 18.2 (ports, emploi maritime, navires de souveraineté, puissance polaire) : les garder dans `eco-ocean` plutôt qu'en reliquats Économie / Transports / Défense ? **Oui / Non** | **Oui** — symétrique du traitement d'EELV ch. 6 « Prendre soin des océans **et de ses artisans** », dont le 1er lot a gardé les mesures de pêche et d'emploi (`eco-ocean-03`, `eco-ocean-04`) sur le même axe. Le refuser à LFI et l'accorder à EELV violerait le test de renversement. |
| Q5 | LFI 18.1-2 et 18.1-3 (leader mondial de la recherche maritime, lycée de la mer par département) : les garder dans `eco-ocean` plutôt qu'en reliquats Éducation/Recherche ? **Oui / Non** | **Oui** (objet = politique maritime), mais elles n'ont **aucun pendant EELV** : elles gonflent l'écart 9 / 23 sans matière comparable. |
| Q6 | LFI 16.6-1 (crime d'écocide) et 16.6-2 (tribunal international de justice climatique) : les classer dans `eco-biodiversite` (volet international) plutôt que dans l'axe existant `just-justice` ? **Oui / Non** | **Oui**, avec `justice-environnementale` en thématique principale — cohérent avec Q5 du 1er lot (le « crime climatique » de 12.1 est resté en écologie). |
| Q7 | LFI 16.6-5 (traité contraignant les multinationales sur les droits humains et l'environnement) : la garder dans `eco-biodiversite` plutôt qu'en reliquat Économie/International ? **Oui / Non** | **Oui**, mais c'est la plus faible du lot 16.6 côté écologie (objet = responsabilité des multinationales). |
| Q8 | LFI 16.6-10 (Casques bleus de l'ONU pour les catastrophes naturelles) : la garder dans `eco-adaptation` avec cotag `securite-civile` plutôt qu'en reliquat Défense/International ? **Oui / Non** | **Oui** — application de Q13 du 1er lot (la sécurité civile reste sur `eco-adaptation`). |
| Q9 | LFI 9.3 : disperser les 9 propositions sur leur axe d'objet (adaptation, océan, eau, énergie, forêts, rénovation, investissement) plutôt que de les grouper toutes dans `eco-investissement` ? **Oui / Non** | **Oui** — « l'axe = l'objet de politique publique ». Conséquence : `eco-investissement` ne gagne qu'une mesure LFI, les autres renforcent des axes déjà équilibrés. |
| Q10 | LFI 9.3-7 (diagnostic des ouvrages d'art : ponts, viaducs, digues, barrages) : la classer dans `eco-adaptation` plutôt qu'en reliquat Transports/Infrastructures ? **Oui / Non** | **Oui** (digues et barrages = prévention des risques), mais les ponts et viaducs relèvent des transports. Mesure hybride. |
| Q11 | LFI 9.3-9 (filière d'écoconstruction en matériaux biosourcés) est un **quasi-doublon** de `lfi-renovation-06` (13.3, « développer l'éco construction avec des matériaux bioclimatiques (bois/terre/paille) »). Garder les deux ? **Oui / Non** | **Oui** — ce sont deux propositions distinctes publiées dans deux chapitres ; les fusionner serait une synthèse (garde-fou n° 1). Mais elles s'afficheront côte à côte sur `eco-renovation` : l'éditeur peut préférer n'en publier qu'une. |
| Q12 | EELV 28-4 (qualité de l'air via la refonte des ZFE, vignettes Crit'Air) : la garder dans `sante-toxiques` plutôt que sur un futur axe Transports ? **Oui / Non** | **Oui** (objet = qualité de l'air), cotag `mobilites`. À noter : LFI a une position inverse sur les ZFE (moratoire), mais sa mesure est dans les **reliquats transports** du 1er lot — les deux positions ne se rencontreront pas tant que le chantier Transports n'existe pas. **Point de vigilance éditoriale.** |
| Q13 | EELV 28-6 (plan de réduction de l'antibiorésistance) : la garder dans `sante-toxiques` plutôt que la renvoyer au chantier Santé ? **Oui / Non** | **Oui** par défaut (rejets dans l'environnement, stations d'épuration), mais son objet principal est sanitaire : c'est la mesure la plus discutable de l'axe. |
| Q14 | EELV 11-8 (réduction de la consommation de produits animaux) : la classer dans `agri-condition-animale` plutôt que dans un futur axe Alimentation ? **Oui / Non** | **Oui** — elle est explicitement citée par l'introduction du ch. 8 (condition animale) et c'est le pendant du plan de transition de l'élevage. Aucune thématique « alimentation » n'existe : sa dimension nutritionnelle n'est donc **pas taguée** (cf. §7). |

### 6.3 Test de renversement

Les 68 mesures ont été classées par **objet de politique publique**. Aucun label d'axe ou de
thématique n'a été ajouté dans cette passe (réutilisation stricte de la nomenclature du 1er lot).
Deux points contrôlés explicitement :

- **Symétrie océan** (Q4) : la matière « activité maritime » (pêche, emploi, ports) est traitée de
  la même façon chez les deux candidats — même axe, cotags `peche-aquaculture` / `emploi-travail`.
- **Symétrie industrie** : le volet industriel d'EELV (ch. 20) entre dans le chantier ;
  celui de LFI (ch. 9.2 « Réindustrialiser et relocaliser ») n'y est **pas** — il n'était dans aucun
  des deux périmètres. En l'état, `eco-investissement` affiche 4 mesures EELV d'objet industriel
  contre 1 mesure LFI de même nature : **l'asymétrie est ici créée par le découpage du chantier**,
  exactement le biais que cette passe visait à corriger ailleurs. Cf. §7, point 1.

---

## 7. Reliquats, renvois et travail restant

### 7.1 Reliquats de cette passe (repérés dans le périmètre, relevant d'un autre méta-thème)

**Écologistes ch. 20 — 4 propositions non extraites** (verbatim reproduit pour le chantier compétent) :
- *Économie / industrie* — « Protéger les entreprises industrielles stratégiques d'intérêt national Soutenir leur implantation en France et leurs investissements pour verdir leur production et éviter des délocalisations des émissions. En cas de nécessité, passer sous gestion publique exceptionnelle. […] » (prop. 3, p. 77)
- *Ressources / mines* — « Moderniser le droit minier pour améliorer et relocaliser les chaînes d'approvisionnement en France et en Europe. Supprimer les dérogations à la sortie des énergies fossiles (gaz de mines et substances connexes). […] » (prop. 6, p. 78) → **contient de la matière écologique** (sortie des fossiles, projets miniers durables, eau/déchets/restauration des sites) ; aucun axe ne l'accueille aujourd'hui.
- *Europe / commerce* — « [EUROPE] Étendre les protections réglementaires et douanières dans les industries stratégiques […] » (prop. 7, p. 78)
- *Europe / commerce & fiscalité verte* — « [EUROPE] Améliorer le protectionnisme écologique et social aux frontières de l'Europe. […] Étendre le périmètre et accélérer la mise en œuvre du Mécanisme d'ajustement carbone aux frontières (MACF). […] » (prop. 8, p. 78) → candidate naturelle à l'axe **existant** `fisc-verte`.

**LFI — 3 propositions non extraites** :
- *Transports* (9.3) — « Lancer des grands travaux de rénovation des voies ferrées et de réouverture des lignes et gares fermées dans les trente dernières années » → rejoint les 14 reliquats transports du 1er lot.
- *Finance / international* (16.6) — « Créer un tribunal international de justice économique pour juger les crimes financiers transnationaux »
- *Santé / international* (16.6) — « Élargir le dispositif de la licence d'office et lever les brevets sur les vaccins et autres moyens médicaux de lutte contre les pandémies »

### 7.2 Renvois : matière écologie encore hors périmètre après cette passe

| Sujet | Manque | Où | Effet si on publie sans |
|---|---|---|---|
| **Industrie & décarbonation des procédés** | LFI | **ch. 9.2 « Réindustrialiser et relocaliser pour assurer notre indépendance »** (~20 propositions) | `eco-investissement` affichera EELV 4 / LFI 3 alors que LFI a un chapitre entier sur le sujet. **C'est le déséquilibre le plus préoccupant qui reste.** |
| **Transports & mobilités** | les deux (chantier absent) | EELV ch. 3 (12 prop.) ↔ LFI 13.2 (14 prop., déjà en reliquat) | Deux corpus complets et directement comparables restent invisibles ; la contradiction EELV/LFI sur les ZFE (cf. Q12) n'apparaît nulle part. |
| **Outre-mer (hors eau)** | Écologistes | ch. 46 prop. 3 + puces territoriales (§4) | Les pendants EELV de `lfi-toxiques-04/05`, `lfi-forets-16`, `lfi-planification-15` manquent. |
| **Pesticides & intrants** | Écologistes | ch. 12 prop. 7 (dépendance aux intrants), 12 (LMR, effet cocktail), 13 (nouveaux OGM) | `eco-pesticides` tient à 1 / 1 mais sur une base très mince des deux côtés. |
| **Alimentation** | les deux | EELV ch. 11 (10 prop.) ↔ LFI 15.4 « En finir avec la malbouffe » | Chantier à part entière, non ouvert. |

### 7.3 Thématique manquante repérée

Aucune thématique **« alimentation / nutrition »** n'existe ni n'a été proposée au §5 du 1er
rapport. Conséquence concrète : `eco-condition-animale-10` (réduction de la consommation de
produits animaux, protéines végétales, légumineuses) est taguée
`condition-animale` + `climat-attenuation` — sa dimension alimentaire n'est **pas** filtrable.
Le futur chantier Alimentation en aura besoin. Je n'ai rien créé.

### 7.4 Enrichissements proposés pour `data/PROCESS-extraction.md` (je ne l'ai pas modifié)

1. **§4 — QC sur PDF paginé : traiter les propositions à cheval sur deux pages.** Chercher le
   verbatim dans la seule page de sa `rubrique_origine` produit des faux négatifs. Méthode retenue :
   comparer contre la concaténation `page N + page N+1`, après (a) retrait du folio en pied de page
   (`\s<numéro de page>$`) et (b) retrait de l'**en-tête courant**, identifiable comme le **plus
   long préfixe commun** aux deux pages consécutives d'un même chapitre. Sur ce lot, 2 propositions
   sur 32 étaient concernées ; sans ce traitement, elles ressortaient en « échec » alors que
   l'extraction était juste.
2. **§1 — le piège des « puces fusionnées » vaut aussi pour LFI 18.2.** Le séparateur observé n'est
   pas seulement « • » : c'est la séquence `\x0b` (tabulation verticale) + « • ». Chercher `\x0b`
   autant que « • » dans les blocs `mesure`/`mesure-cle`.
3. **§2 — dupliquer n'est pas extraire.** Une source peut publier **deux fois la même proposition**
   (EELV ch. 11 prop. 8 et 9, à cheval sur un saut de page). Vérifier les propositions consécutives
   quasi identiques avant d'en faire deux mesures ; consigner et demander l'arbitrage.
4. **§7 — vérifier le renversement des périmètres, pas seulement des mesures.** Une passe de
   rééquilibrage peut **créer** une asymétrie inverse : ici, entrer le chapitre industrie d'EELV
   sans celui de LFI (ch. 9.2) déséquilibre `eco-investissement` dans l'autre sens. Règle proposée :
   quand on ouvre un chapitre chez un candidat, chercher **explicitement** son homologue chez
   l'autre avant de figer le périmètre — et le consigner même si on ne l'extrait pas.

---

## 8. Fichiers produits

- `data/drafts/ecologistes-ecologie-complement.draft.json` — 32 mesures.
- `data/drafts/lfi-ecologie-complement.draft.json` — 36 mesures.
- `data/drafts/ecologie-complement.rapport.md` — ce rapport.

Aucun fichier de `data/candidats/`, `data/axes.json`, `data/taxonomie.json`,
`data/choix-editoriaux.md`, `data/sources/` ou `src/` n'a été touché. Aucun commit.
