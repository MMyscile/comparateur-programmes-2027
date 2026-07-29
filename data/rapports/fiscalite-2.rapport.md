# Rapport d'extraction — Fiscalité / budget / finances, run 2 (extension du pilote)

> Date : 2026-07-28 · Agent : extracteur · **Brouillon à valider** — rien n'a été fusionné
> dans `data/candidats/*.json`, `data/axes.json` ni `data/taxonomie.json`.
>
> Livrables : `data/drafts/lfi-fiscalite-2.draft.json` (44 mesures),
> `data/drafts/ecologistes-fiscalite-2.draft.json` (26 mesures), ce rapport.

## 1. Sources (étape 0)

| | LFI | Écologistes |
|---|---|---|
| Source | « L'Avenir en Commun », édition 2025, melenchon2027.fr (site officiel du candidat déclaré) | « Pour une prospérité écologique » (VDEF), PDF officiel lesecologistes.fr, juillet 2026 |
| Vérification | Déjà validée aux runs précédents (officielle, présidentielle 2027, bon périmètre — piège « PROGRAMME-FRONT-POPULAIRE » évité) | Déjà validée (plateforme adoptée ; périmètre tranché le 2026-07-28 dans CLAUDE.md : compte comme programme du candidat, portée par Marine Tondelier sous réserve de la primaire du 11/10/2026) |
| Matériau utilisé | Miroir `data/sources/lfi-avenir-en-commun-2025.md` ; QC contre l'archive brute `data/sources/raw/lfi-melenchon2027-2025_html.tar.gz` (HTML des sous-pages `/chapitreN/sM`) | PDF archivé `data/sources/raw/ecologistes_vdef-programme_pdf.tar.gz` (PAS de re-téléchargement : challenge Cloudflare) ; `pdftotext` sans `-layout` (acquis du process), chapitres 17-18, pages PDF 64-71 |

⚠️ Incohérence relevée (hors de mon périmètre de modification) : `data/candidats/ecologistes.json`
indique encore `"nom": "(candidat·e non désigné·e)"` alors que CLAUDE.md (mis à jour le 2026-07-28)
documente la désignation de Marine Tondelier. À mettre à jour par l'éditeur.

## 2. Périmètre et volume

Mission : mesures du méta-thème `fiscalite-budget-finances` **non couvertes** par les 5 axes
existants (`fisc-fortune`, `fisc-capital`, `fisc-ir`, `fisc-is`, `fisc-tva`). Doublons vérifiés
par comparaison de verbatim contre `data/candidats/*.json` : **0 doublon exact, 0 recouvrement
partiel** (contrôle automatisé sur les 70 mesures).

- **LFI : 44 mesures** — chapitres 6.1, 6.2, 6.3, 6.4, 6.5 (hors 6 lignes déjà captées au pilote),
  2.2 (patrimoine public / privatisations) et 3.2 (2 mesures de finances locales uniquement).
- **Écologistes : 26 mesures** — chapitre 17 (hors propositions 1, 6 et parties des 3, 11, 12 déjà
  captées au pilote) et chapitre 18 en entier (8 propositions).

Convention conservée : 1 mesure = 1 proposition mot-pour-mot. Côté EELV, une proposition numérotée
regroupe parfois plusieurs sous-mesures d'axes différents : elle est alors découpée en extraits
fidèles (phrase-titre + `[…]` + segment concerné), signalés `— extrait` en `rubrique_origine`
(même procédé que le pilote pour la proposition 11). Badges `[EUROPE]` (ch. 18, prop. 5-8) :
hors verbatim, reportés en `rubrique_origine` (convention existante, cf. `eco-terrorisme-*`).

## 3. Contrôle qualité de fidélité (étape 4)

- **Échantillon aléatoire (seed 42), ≥ 10 par programme : 10/10 identiques (LFI) et
  10/10 identiques (Écologistes).**
- Contrôle exhaustif automatisé, caractère par caractère (espaces normalisés) :
  - LFI : **44/44 identiques** contre le HTML brut archivé des sous-pages (transformation
    autorisée appliquée : ajout du point final absent dans la source, convention du corpus).
  - Écologistes : **26/26 identiques** contre DEUX extractions indépendantes du PDF
    (`pdftotext` défaut et `pdftotext -raw`, folios/en-têtes de page neutralisés).
- Échantillons tirés : LFI `lfi-fisc-fraude-05, lfi-fin-regulation-01, lfi-fisc-patrimoine-02,
  lfi-fisc-secu-01, lfi-fin-climat-01, lfi-fin-regulation-06, lfi-fin-regulation-02,
  lfi-fisc-collectivites-02, lfi-fisc-fraude-02, lfi-fisc-collectivites-01` ;
  EELV `eco-fin-climat-1, eco-fisc-foyer-1, eco-fisc-fraude-1, eco-fisc-succession-1,
  eco-fisc-fraude-2, eco-fisc-superprofits-1, eco-fisc-niches-1, eco-fisc-dette-2,
  eco-fin-monnaie-1, eco-fin-banques-publiques-1`.

**Correction d'extraction (pas du texte)** : p. 68, « Inflation-Linked Bonds » est coupé en fin de
ligne dans le PDF ; `pdftotext` sans `-layout` supprime le trait d'union du mot composé
(« InflationLinked »). Trait d'union rétabli dans `eco-fisc-dette-2` après vérification en
`-layout`. Voir §7 (proposition d'enrichissement du process).

**Coquilles de la source CONSERVÉES verbatim (ne pas « corriger »)** : « Simplifier et rendre
progressif la fiscalité » (prop. 17-2), « le marchés des capitaux » (18-7), « chiffre d'affaire »
(17-3), « payent trop alors qu'endettés » (17-12), « qui mine le consentement » (17-8),
« Dotation Globale de Financement (DGF) » (17-14 — le sigle officiel est « de Fonctionnement »).

## 4. Axes proposés (à créer dans `axes.json` par l'éditeur — rien n'y a été écrit)

Intitulés volontairement neutres (test de renversement). Baselines = **pistes chiffrables et
sourçables** à vérifier par recherche datée avant publication (étape 6 du process).

| id proposé | Label | Mesures LFI / EELV | Piste de baseline (source) |
|---|---|---|---|
| `fisc-succession` | Succession, donation & héritage | 1 / 1 | DMTG : abattement 100 000 € par parent/enfant, barème jusqu'à 45 % en ligne directe (art. 777-779 CGI) ; recettes ≈ 16-17 Md€/an (service-public.gouv.fr F14198 ; PLF) |
| `fisc-fraude` | Fraude & évasion fiscales | 6 / 3 | Résultats du contrôle fiscal DGFiP (≈ 15-17 Md€ mis en recouvrement/an — à vérifier, rapport annuel DGFiP) ; CJIP créée par la loi Sapin 2 (2016) ; « verrou de Bercy » assoupli par la loi 2018-898 |
| `fisc-dette` | Dette publique & règles budgétaires | 6 / 2 | Dette publique INSEE (≈ 114 % du PIB fin 2025 — à re-vérifier) ; charge de la dette en loi de finances ; financement monétaire interdit par l'art. 123 TFUE (insee.fr ; budget.gouv.fr) |
| `fisc-collectivites` | Finances des collectivités locales | 2 / 1 | DGF ≈ 27 Md€ en LF (à vérifier) ; CVAE en suppression progressive ; pas de loi organique de garantie de ressources (collectivites-locales.gouv.fr) |
| `fisc-niches` | Niches fiscales & dépenses fiscales | 1 / 2 | Dépenses fiscales recensées au tome II « Voies et moyens » du PLF (≈ 470 dispositifs, ≈ 80 Md€ — à vérifier) (budget.gouv.fr) |
| `fisc-superprofits` | Taxation des superprofits | 1 / 1 | Aucune taxe permanente ; précédents temporaires : contribution sur la rente inframarginale (LF 2023), contribution exceptionnelle grandes entreprises (LF 2025) (legifrance) |
| `fisc-secu` | Financement de la Sécurité sociale (CSG, cotisations) | 3 / 2 | CSG proportionnelle (9,2 % activité), pas de barème progressif ; exonérations générales de cotisations ≈ 75 Md€/an compensées (annexe PLFSS — à vérifier) (urssaf.fr ; securite-sociale.fr) |
| `fisc-verte` | Fiscalité environnementale | 0 / 1 | Taux réduits sur produits fossiles chiffrés au PLF ; malus masse (seuil actuel à vérifier) ; TIRUERT existante (impots.gouv.fr ; legifrance) |
| `fisc-numerique` | Taxation du numérique | 0 / 1 | TSN à 3 % du CA, seuils 750 M€ mondial / 25 M€ France (loi 2019-759) (legifrance) |
| `fisc-fonciere` | Fiscalité foncière des ménages | 1 / 1 | TFPB assise sur 50 % de la valeur locative cadastrale, pas sur le patrimoine net ; révision des valeurs locatives d'habitation reportée (impots.gouv.fr) |
| `fisc-foyer` | Fiscalité du foyer (quotients, pensions alimentaires) | 1 / 1 | Quotient conjugal obligatoire (couples mariés/pacsés) ; plafond du quotient familial ≈ 1 791 €/demi-part (à vérifier) ; pensions alimentaires reçues imposables (service-public.gouv.fr F1419, F2705) |
| `fisc-aides-entreprises` | Aides publiques aux entreprises (transparence, conditions) | 1 / 0* | Aides aux entreprises estimées ≈ 110-160 Md€/an selon périmètre (rapport Sénat 2025 — à vérifier) ; pas de publication consolidée obligatoire |
| `fisc-patrimoine-public` | Patrimoine public & privatisations | 6 / 0 | Portefeuille de l'Agence des participations de l'État (montant à vérifier, economie.gouv.fr/agence-participations-etat) ; FDJ privatisée en 2019, autoroutes concédées depuis 2006 |
| `fin-regulation` | Régulation bancaire & financière | 6 / 4 | Loi 2013-672 : séparation limitée à une filialisation ; TTF française à 0,3 % (art. 235 ter ZD CGI) (legifrance) |
| `fin-banques-publiques` | Pôle public bancaire & orientation du crédit | 2 / 2 | CDC, Bpifrance, La Banque Postale existent ; pas de pôle public bancaire unifié ni de « Community Reinvestment Act » français (economie.gouv.fr) |
| `fin-climat` | Finance & climat | 2 / 1 | Art. 29 loi énergie-climat : obligation de reporting, pas de réduction contrainte des actifs fossiles ; devoir de vigilance loi 2017-399 (legifrance) |
| `fin-monnaie-bce` | Monnaie & banque centrale | 0 / 2 | Euro numérique : phase de préparation BCE (état à vérifier, ecb.europa.eu) ; mandat BCE : stabilité des prix (art. 127 TFUE) |
| `fin-definanciarisation` | Encadrement des dividendes & de la gouvernance actionnariale | 4 / 0 | Dividendes distribuables au-delà du bénéfice de l'exercice (réserves, art. L.232-11 c. com.) ; licenciement économique sans critère de dividendes (L.1233 c. trav.) (legifrance) |

\* La mesure EELV correspondante (« Subordonner les aides aux entreprises de plus de 250 salarié·es
au respect de plans de transition ») vit à l'intérieur de `eco-fisc-verte-1` (prop. 17-5) — non
dupliquée ; voir §6.

18 axes, c'est beaucoup : fusions candidates si l'éditeur veut resserrer — `fisc-numerique` →
`fisc-fraude` ou `fisc-is` ; `fisc-fonciere` + `fisc-foyer` → un axe « autres impôts des
ménages » ; `fin-monnaie-bce` → `fin-regulation` ; `fisc-aides-entreprises` → `fisc-niches`.

## 5. Thématiques proposées (à créer dans `taxonomie.json` — rien n'y a été écrit)

Le méta `fiscalite-budget-finances` n'a que 4 thématiques fines ; les nouveaux sujets n'en ont pas.
Propositions (utilisées telles quelles dans les brouillons, **ids non encore existants**) :

- `fraude-evasion` — Fraude & évasion fiscales (critère : contrôle, sanctions, paradis fiscaux, transparence des actifs).
- `dette-budget` — Budget, dette & dépense publique (critère : endettement, règles/trajectoires budgétaires, dépense).
- `finances-locales` — Finances des collectivités (critère : DGF, fiscalité locale affectée aux collectivités).
- `banques-finance` — Banques & régulation financière (critère du méta déjà existant, sans thématique jusqu'ici).
- `cotisations-secu` — Cotisations & financement de la Sécurité sociale (frontière `protection-sociale-solidarites` : voir §6).
- `niches-depenses-fiscales` — Niches & dépenses fiscales.
- `patrimoine-public` — Patrimoine public & privatisations (frontière `economie-travail-entreprises`).

Justification des tags (une ligne par famille) : `capital-patrimoine` sur succession/foncier/plus-values
(assiette patrimoniale) ; `impots-menages` sur CSG, foyer, foncier, niches (payeur = ménage) ;
`fiscalite-entreprises` sur IS/TSN/superprofits/déclaratif multinationales (payeur = entreprise) ;
`justice-penale` en cotag des mesures répressives (CJIP, cols blancs, mise en examen) ;
`cooperation-europeenne` en cotag des mesures BCE/UE et badges [EUROPE] ; `donnees-vie-privee` sur
l'euro numérique (argument vie privée explicite dans le texte) ; `entreprises` en cotag quand la
mesure régit la gouvernance d'entreprise. Test de renversement : chaque rattachement tient sur le
seul contenu de la mesure, étiquette masquée.

## 6. Points laissés à la décision éditoriale

1. **Frontières de méta-thème** (multi-étiquetage possible, axe à trancher) :
   `fisc-verte` (écologie vs fiscalité — thématique `fiscalite-verte` vit sous le méta écologie) ;
   `fisc-secu` (protection sociale vs fiscalité) ; `fisc-patrimoine-public` et
   `fin-definanciarisation` (économie vs fiscalité — le tableau de rattachement classe LFI ch. 2 en économie) ;
   `lfi-fisc-collectivites-01/02` proviennent du ch. 3.2 (classé institutions) — extraits ici car
   ce sont des mesures de finances locales ; le reste du 3.2 n'a PAS été extrait.
2. **`lfi-fin-definanciarisation-01`** (« indicateurs de progrès humain », 6.3) : rattachement
   fiscalité/finance douteux — c'est plutôt de la statistique économique. Inclus parce que présent
   dans le chapitre finance ; l'éditeur peut l'écarter ou le reclasser.
3. **Compléments d'axes EXISTANTS** (2 mesures) : `lfi-fisc-is-c01` (6.3, modulation de l'IS) fait
   doublon **de fond** (pas de verbatim) avec `lfi-fisc-is` (6.5) — afficher les deux, ou n'en garder
   qu'une ; `eco-fisc-capital-c1` (plus-values selon durée de détention) est une queue de la
   prop. 17-11 élidée par le pilote — compléter `eco-fisc-capital` ou garder la mesure séparée.
4. **Queues de propositions élidées par le pilote** : la prop. 17-3 (déclaratif multinationales,
   TSN, surtaxe IS) n'était couverte qu'en partie par `eco-fisc-is` → extraites ici en
   `eco-fisc-fraude-2` et `eco-fisc-numerique-1`. Vérifier que ce découpage convient.
5. **Recouvrement CJIP** : `lfi-fisc-fraude-04` (6.5) et `lfi-justice-10` déjà publié (7.7)
   demandent tous deux la suppression de la convention judiciaire d'intérêt public (verbatims
   différents, chapitres différents). Garder les deux (traçabilité) ou dédupliquer ?
6. **Asymétries réelles des programmes** (information, pas erreur) : privatisations/patrimoine
   public et encadrement des dividendes = LFI seul ; monnaie/BCE, taxe numérique = EELV seul
   (les mesures BCE de LFI 6.4 sont rangées sous `fisc-dette`, leur objet étant la dette —
   déplaçables vers `fin-monnaie-bce` si l'éditeur préfère).
7. **`eco-fisc-verte-1`** contient la phrase « Subordonner les aides aux entreprises… » qui
   correspondrait aussi à `fisc-aides-entreprises` : non dupliquée, à re-découper si besoin.
8. **`lfi-fisc-foyer-01`** (quotient conjugal/familial) : argument égalité femmes-hommes explicite
   dans le verbatim, mais aucune thématique fine « égalité professionnelle » n'existe — cotag non posé.
9. **Baselines** : toutes les pistes chiffrées du §4 sont à re-vérifier par recherche web datée
   (fiabilité « stable à reconfirmer ») ; je n'ai pas accédé au web pendant ce run.
10. **Candidat Écologistes** : mettre à jour `ecologistes.json` (désignation Tondelier) — cf. §1.

## 7. Proposition d'enrichissement de `PROCESS-extraction.md` (je ne l'ai pas modifié)

À ajouter aux acquis du PDF Écologistes (étape 2) : (e) `pdftotext` sans `-layout` **supprime le
trait d'union des mots composés coupés en fin de ligne** (« Inflation-Linked » → « InflationLinked »)
tout en joignant correctement les césures simples ; contrôler les lignes se terminant par « - »
dans la sortie `-layout` pour distinguer césure (joindre sans trait d'union) et mot composé
(conserver le trait d'union). (f) `pdftotext -raw` est inutilisable comme extraction primaire sur
ce PDF (perte des espaces inter-mots par kerning) mais reste utilisable comme deuxième référence
de QC après neutralisation des espaces.
