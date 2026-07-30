# Rapport de normalisation — Programme des Écologistes (VDEF), étapes 1→4

- **Livrable** : `data/sources/ecologistes-programme-2026.md`
- **Source** : PDF « VDEF Programme.pdf » (lesecologistes.fr), 208 pages, archivé dans `data/sources/raw/ecologistes_vdef-programme_pdf.tar.gz`
- **Date** : normalisé le 2026-07-30 (source captée le 2026-07-25)
- **Méthode d'extraction** : `pdftotext` **sans** `-layout` (= `sanslayout.txt`) pour l'ordre de lecture des 2 colonnes numérotées ; `pdftotext -layout` (= `layout.txt`) comme 2ᵉ référence (césures, mots composés, contrôle qualité). Segmentation par carte autoritaire des 66 titres de chapitres.

## 1. Contenu restitué

| Élément | Nombre |
|---|---|
| Avant-propos | 1 (verbatim intégral, signatures incluses) |
| Parties (I→VIII) | 8, **chacune avec son introduction** (« PARTIE X. » + chapô) |
| Chapitres | 66 (ordre 1→66 vérifié) |
| Propositions numérotées | 551 |
| Sous-points à puce (`*`, chap. 46 Outre-mer) | 7 |
| Propositions portant un badge `[EUROPE]` | 46 |
| Mots (corps du .md) | ~58 800 |

Le Sommaire (navigation) a été omis, conformément à la consigne.

## 2. Contrôle qualité de fidélité (étape 4)

### 2.a — Comparaison globale token-par-token vs `layout.txt` (indépendante des colonnes)
Un multiset de tokens (minuscules, apostrophes/traits d'union traités comme séparateurs → les
césures et mots composés se comparent symétriquement) a été calculé pour le .md et pour
`layout.txt` (extraction indépendante). Le multiset est **insensible à l'ordre**, donc au
mélange des colonnes.

- **Tokens du .md absents de `layout.txt` (test d'invention) : 15**, tous des mots **pleins et
  valides** que `layout.txt` coupe par césure en fin de ligne et que le .md a correctement
  ressoudés (leurs moitiés apparaissent dans le test inverse) : `groupements`, `phosphatés`,
  `assujettissement`, `déchetteries`, `parapatronales`, `polypathologies`, `regroupant`,
  `bientraitance`, `compliquée`, `préparation`, `sociologie`, `lanceur`, `norvégien`,
  `désengagement`, `avoisinantes`. **→ Aucune invention, aucune fusion erronée.**
- **Tokens de `layout.txt` absents du .md (test de perte)** : uniquement (i) les moitiés de
  césures (`tion`, `progressi`, `vement`, `néces`, `saires`, `phos`, `phatés`…), (ii) les mots
  des **titres de chapitres** (présents dans mes en-têtes `###`, exclus du corps tokenisé),
  (iii) la navigation (`sommaire`, chiffres romains). **→ Aucune perte de contenu.**
- **Cohérence de volume** : corps du .md ≈ 61 210 tokens vs `layout.txt` ≈ 63 358 tokens.
  L'écart (~2 150) s'explique intégralement par ce que le .md retire à raison : numéros de page
  isolés (~208 pages), en-têtes courants « N. Titre » répétés (~66 chapitres × plusieurs pages),
  bloc Sommaire, en-têtes « PARTIE… » et pied de page final.

### 2.b — Échantillons de propositions vérifiés (≥ 10)
14 propositions/passages tirés de chapitres variés ont été vérifiés comme **sous-séquence
ordonnée complète** des tokens de `layout.txt` (méthode robuste au mélange de colonnes) :
ch1-p7, **ch5-p1**, **ch12-p3**, ch17-p9, ch21-p4, ch30-p5, ch42-p2, ch46-p1, ch56-p6, ch57-p4,
ch60-p3, ch66-p5, ch3-intro, avant-propos §3.

- **12/14 valident automatiquement**.
- **ch5-p1** : « échec » au seul mot `rétablissant` — faux négatif : `layout.txt` le coupe
  `réta-/blissant` ; en rejoignant les césures de `layout.txt`, la proposition valide à 100 %.
- **ch12-p3** : « échec » à `financer` (mot présent 2× dans la proposition) — faux négatif dû à
  l'entrelacement des colonnes dans `layout.txt`. **Vérifié manuellement** contre la colonne
  gauche de `layout.txt` (l. 3428+) : correspondance **mot pour mot**.

→ Fidélité considérée établie (14/14 après levée des 2 faux négatifs).

## 3. Pièges rencontrés et traitement

1. **Coquille source (Sommaire)** : le chapitre Outre-mer y porte le n° **45** (deux entrées
   « 45 », pas de « 46 »). **Dans le corps du programme il est bien numéroté 46** (bloc
   d'ouverture et en-têtes courants) — c'est ce n° 46 qui est repris. Signalé en tête du .md.
   *(NB : l'en-tête courant de ce chapitre dit par erreur « 46. Atteindre l'égalité avec tous
   les territoires… » au lieu d'« Accomplir » ; le titre exact « Accomplir… » vient du bloc
   d'ouverture et du Sommaire.)*
2. **Ordre de lecture des colonnes mélangé par `sanslayout`** : 13 chapitres sortaient dans un
   ordre de numéros non croissant. Le vrai ordre de lecture = l'ordre **numéroté** voulu par
   l'auteur. Les chapitres formant une permutation propre de 1..K ont été **remis en ordre
   croissant** (12 chapitres : 10, 15, 20, 21, 40, 41, 42, 43, 44, 49, 55, 62). Bodies vérifiés
   intacts (un seul chapitre avait des corps réellement disloqués : ch23, voir §4).
3. **Numéros isolés / en-têtes courants répétés** : supprimés (0 restant).
4. **En-têtes « PARTIE… » dupliqués empilés aux bascules de partie** : sur les pages de bascule,
   `layout`/`sanslayout` empilent les en-têtes courants « PARTIE V./VI./VII.… » + fragments de
   titres. Un bug initial faisait fuiter cette pile dans la dernière proposition du chapitre
   précédent (ch59) → corrigé (découpe au **premier** « PARTIE » du bloc de bascule + purge des
   lignes « PARTIE… » dans les corps). Introductions de partie récupérées via la lettrine
   (mot capitale « NOUS/LA/IL/L'ÉTAT/EN/FACE… » suivi de prose).
5. **Badges `[EUROPE]`** : toujours situés **après** leur numéro (« N. » puis « [EUROPE] … »).
   Traités comme du corps (jamais comme début de proposition) → le n° est conservé et le badge
   reste en ligne : « N. [EUROPE] … ». **Choix pour ce miroir** : les badges sont **conservés
   tels quels** (le .md est un miroir verbatim, on ne retire rien) ; au **stade JSON (étape 5)**
   ils seront sortis du verbatim et reportés en `rubrique_origine`, comme prévu.
6. **Césures vs mots composés coupés** (`sanslayout` supprime le trait d'union des composés
   coupés en fin de ligne). ~30 composés restaurés par comparaison avec `layout.txt`, ex. :
   Outre-mer, Etats-Unis, Pays-Bas, Inflation-Linked, lui-même, au-dessus, non-respect,
   non-prolifération, pseudo-accords, semi-conducteurs, bonus-malus, musculo-squelettiques,
   intra-familiales, éco-organismes, éco-contributions, directive-cadre, contre-pouvoirs,
   grand-parent, anti-missile, extra-atmosphérique, méga-constellations, méga-bassines,
   pro-business, part-pairing, aide-soignant, pollueur-payeur, procédures-bâillons, sport-santé,
   indo-pacifique, ouest-africaine, auto-évaluation, bien-être.
7. **Traits d'union conditionnels (soft hyphen U+00AD)** présents dans le PDF : supprimés
   (0 restant).
8. **Proposition coupée bas-de-colonne / pied-de-page** (piège d) : recollée (ex. ch4-p4, dont
   le corps enjambe un saut de page).

## 4. Points à faire relire par l'éditeur (fidélité à confirmer / choix éditoriaux)

- **★ Chapitre 23 « Viser la réussite de tous les élèves » — reconstruit à la main.** La mise en
  page en grille (3 blocs/colonne) disloque `sanslayout` **et** `layout` : marqueurs « 8. » et
  « 9. » orphelins, corps flottants mélangés entre propositions. Les **15 propositions ont été
  reconstituées manuellement depuis `layout.txt`** (colonnes lues correctement), ordre 1→15.
  Contrôle : multiset de tokens de ma reconstruction ⊆ région `layout.txt` du chapitre
  (écart = seulement les 2 en-têtes courants exclus). **À relire en priorité** contre le PDF
  (pages ~89-91).
- **Anomalies de numérotation de la SOURCE** (fidèlement conservées, à confirmer) :
  - **ch4** : la source saute la proposition **6** (elle passe de 5 à 7, sans texte entre les deux).
  - **ch57** : la source numérote **deux** propositions « 4 » (doublon de numéro, textes différents).
  - **ch11** : les propositions **8 et 9 sont quasi identiques** dans le PDF (même mesure sur la
    réduction de la consommation de produits animaux, à une virgule/espace près) — probable
    doublon d'édition de la source ; conservé verbatim.
- **Choix sur des composés ambigus** (trait d'union incertain, à trancher) :
  - `Éco-prêt` (restauré ; la source écrit ailleurs « prêt à taux zéro ») ;
  - `parapatronales` **gardé solide** (césure « para-/patronales ») ;
  - `écoconception` gardé solide (la source l'écrit en un mot) vs `éco-organismes`/`éco-contributions`
    restaurés avec trait d'union.
- **Lettrines** : le premier mot des intros de partie est en capitales dans le PDF (« NOUS »,
  « LA », « IL », « L'ÉTAT », « EN », « FACE »…). Conservé tel quel (artefact typographique) ;
  l'éditeur peut vouloir le repasser en casse normale (« Nous », « La », « L'État »…).
- **Micro-artefacts de la source conservés bruts** (non « devinés ») : espaces manquantes après
  ponctuation (ex. « biodiversité.Le respect », « sauvage »et »), tiret cadratin dans
  « c'est—à-dire » (avant-propos). Laissés en l'état pour ne pas modifier le verbatim.

## 5. Fichiers de travail (scratchpad, non versionnés)
`mk.py` (parseur/assemblage), `qc.py` (multiset A-B/B-A), `sample_qc.py` (sous-séquences),
`detect.py` (marqueurs à corps séparé), `sanslayout.txt`, `layout.txt`.
