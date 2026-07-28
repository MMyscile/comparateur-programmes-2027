# Rapport d'extraction — Détail des 4 axes justice (LFI + Écologistes)

> **Brouillon à valider par l'éditeur.** Extraction du 2026-07-28 (agent extracteur).
> Objet : remplacer les 8 mesures `synthese: true` (4 axes × 2 candidats) par du
> point-par-point verbatim. Axes : `just-justice`, `just-prison`, `just-terrorisme`, `just-drogues`.
>
> Fichiers produits :
> - `data/drafts/lfi-justice.draft.json` — 29 mesures
> - `data/drafts/ecologistes-justice.draft.json` — 35 mesures
> - ce rapport

## 1. Sources et méthode

**Étape 0** : déjà validée par l'éditeur (consigne de mission) — non refaite.

- **LFI** : miroir verbatim `data/sources/lfi-avenir-en-commun-2025.md` (QC antérieur 10/10),
  archive brute `data/sources/raw/lfi-melenchon2027-2025_html.tar.gz`. Sections 4.2, 7.6, 7.7
  (moins la proposition prison, isolée sur `just-prison`) et 15.3. Une puce du miroir = une mesure ;
  le verbatim est copié programmatiquement depuis la ligne du miroir (aucune retape manuelle).
  `source_url` publiques au format `https://melenchon2027.fr/programme2025/livre/chapitreN/sM`.
- **Écologistes** : PDF local `Programmes/VDEF Programme.pdf`, extraction `pdftotext` page à page
  en mode brut (sans `-layout`) : pour ce PDF, le mode brut restitue les colonnes dans l'ordre de
  lecture, et les propositions sont **numérotées** (repère fiable du §2 du process). Chapitres 51,
  52 (p. 166-169), 53 (p. 170-171), 57 (p. 181-182), 58 (p. 183-184), pagination physique =
  pagination imprimée (vérifié en amont). `source_url` publique citée avec `#page=N`
  (le PDF en ligne est derrière un challenge Cloudflare — travail sur le PDF local, URL publique citée).

**Découpage** : une mesure = UNE proposition numérotée (EELV) ou une puce (LFI), grain identique à
l'axe `just-police` déjà détaillé. Volumes :

| Axe | LFI | Écologistes |
|---|---|---|
| just-justice | 13 (ch. 7.6 : 6 ; ch. 7.7 : 7) | 13 (ch. 51 : 7 ; ch. 52 : 6) |
| just-prison | 1 (ch. 7.7, prop. « Respecter la dignité… ») | 7 (ch. 53) |
| just-terrorisme | 8 (ch. 4.2) | 9 (ch. 57) |
| just-drogues | 7 (ch. 15.3) | 6 (ch. 58) |
| **Total** | **29** | **35** |

**Normalisations appliquées (aucune ne retire de contenu, sauf le badge [EUROPE], voir §4.3)** :
blancs multiples → une espace (recollage des lignes de colonnes) ; point final ajouté quand la
proposition source n'a pas de ponctuation terminale (convention du corpus existant, cf. lfi-police-01) ;
césure de mise en page « siège/ parquet » recollée en « siège/parquet » (p. 166) ; recollage de la
proposition 52-4 (CJIP) coupée en deux blocs par la mise en page (bas de colonne gauche + rejet en
pied de page dans l'extraction).

## 2. Contrôle qualité de fidélité

Vérification **automatisée sur les 64 mesures** : chaque verbatim (après repli des blancs et hors
point final ajouté) doit être une sous-chaîne **caractère par caractère** de sa source (miroir LFI /
`pdftotext` de la page citée pour EELV). Résultat : **LFI 29/29, Écologistes 35/35 identiques**.

Échantillon formel exigé par le process (tirage aléatoire, graine 20260728) :
- **LFI : 12/12 identiques** — lfi-drogues-07, lfi-justice-05, lfi-terrorisme-02, lfi-terrorisme-01,
  lfi-justice-04, lfi-terrorisme-07, lfi-drogues-06, lfi-terrorisme-05, lfi-drogues-04,
  lfi-terrorisme-08, lfi-drogues-05, lfi-justice-10.
- **Écologistes : 12/12 identiques** — eco-justice-08, eco-terrorisme-05, eco-justice-03,
  eco-justice-10, eco-justice-09, eco-drogues-06, eco-drogues-03, eco-justice-04, eco-justice-07,
  eco-drogues-01, eco-justice-01, eco-prison-05.

## 3. Tags proposés (justification en une ligne — l'éditeur valide)

Toutes les mesures portent la thématique de leur axe en tag principal ; seuls les cotags sont
justifiés ci-dessous. Test de renversement : chaque classement tient par l'objet de la mesure,
étiquette de parti masquée.

**LFI**
- lfi-justice-01 à 10 `justice-penale` seul : moyens, accès, jurés, défense, indépendance, secret de l'instruction, délinquance financière — cœur de l'axe, pas de cas-frontière.
- lfi-justice-11 + `violences-sexistes` : l'objet est l'impunité des agresseurs sexuels et la définition pénale du viol.
- lfi-justice-12 + `justice-environnementale` : justice pénale environnementale, pollueur-payeur.
- lfi-justice-13 + `police-maintien-ordre` : rattachement de la police judiciaire — mesure à cheval justice/police.
- lfi-prison-01 `prison-peines` seul : régulation carcérale et réinsertion.
- lfi-terrorisme-01/03/04/05 `terrorisme-renseignement` seul : stratégie, renseignement humain, évaluation des lois, embrigadement.
- lfi-terrorisme-02 + `justice-penale` : levier = poursuites pénales et déchéance de droits (financement du terrorisme).
- lfi-terrorisme-06/07 + `libertes-surveillance` : sortie de l'état d'urgence permanent, primat du juge judiciaire — cadrage libertés (cohérent avec le pilote).
- lfi-terrorisme-08 + `cybersecurite` : PHAROS = surveillance des violences en ligne.
- lfi-drogues-01/02/04 + `addictions` : légalisation encadrée, recettes affectées à la prévention, pilotage Santé — cadrage santé publique du chapitre.
- lfi-drogues-03 `addictions` en principal : la proposition vise toutes les addictions (pas seulement les stupéfiants), `drogues-stupefiants` en cotag pour l'axe.
- lfi-drogues-05 + `police-maintien-ordre` : forces de police et douanes (volet répressif filières).
- lfi-drogues-06 + `justice-penale` : coopérations judiciaires internationales.
- lfi-drogues-07 `addictions` seul : tabac (pas un stupéfiant) — voir §4.6.

**Écologistes**
- eco-justice-01/02/04/06/07 `justice-penale` seul : parquet, postes, mineurs, amendes, victimes.
- eco-justice-03 + `cybersecurite` : pôles cyber, ANTENJ, C3N, rançongiciels.
- eco-justice-05 + `police-maintien-ordre` : police judiciaire (symétrique de lfi-justice-13).
- eco-justice-08 + `justice-environnementale` : référé environnemental, directive criminalité environnementale.
- eco-justice-09/10 `justice-penale` seul : aide juridictionnelle, justice restaurative.
- eco-justice-11 + `justice-environnementale` : suppression de la CJIP « en particulier en matière environnementale ».
- eco-justice-12/13 `justice-penale` seul, **faute de mieux** : justice prud'homale et sociale — voir §4.7.
- eco-prison-01/02/03/06/07 `prison-peines` seul : numerus clausus, agents, probation, travail, visites.
- eco-prison-04 + `climat-adaptation` : adaptation des lieux de détention aux changements climatiques (cotag prévu par le pilote).
- eco-prison-05 + `sante-mentale` : accès aux soins « y compris de santé mentale » (cotag prévu par le pilote).
- eco-terrorisme-01/03/06/08 `terrorisme-renseignement` seul : prévention, embrigadement, coopération internationale, victimes.
- eco-terrorisme-02 + `justice-penale` : réponse pénale contre les recruteurs.
- eco-terrorisme-04 + `lutte-discriminations` : discours de haine visant femmes, LGBTQIA+, juifs, musulmans….
- eco-terrorisme-05 + `justice-penale` : retour des prisonniers de Syrie « avec une réponse pénale, judiciaire et sociale ».
- eco-terrorisme-07 + `lutte-discriminations` : menace d'extrême droite (cotag prévu par le pilote).
- eco-terrorisme-09 + `cooperation-europeenne` : renseignement européen, autonomie vis-à-vis des USA (badge [EUROPE] de la source).
- eco-drogues-01 + `police-maintien-ordre` + `justice-penale` : moyens de police ET de justice (JIRS, PNACO, OFAST).
- eco-drogues-02 + `police-maintien-ordre` : contrôle des ports et aéroports.
- eco-drogues-03 + `cooperation-europeenne` : coopération judiciaire européenne (et internationale).
- eco-drogues-04/06 + `addictions` : légalisation encadrée « réduction des risques », modèle portugais.
- eco-drogues-05 `drogues-stupefiants` seul : protection des mineurs contre le trafic (pas de thématique fine « protection de l'enfance »).

## 4. Points en attente de décision éditoriale

1. **LFI 15.3 — puce collée dans la source** : la ligne « Confier le pilotage […] de l'Intérieur•
   Accroître les forces de police […] » contient **deux propositions séparées par un « • »**.
   Vérifié dans l'archive brute (`lfi_sub/chapitre15_s3.html`) : le « • » est bien dans le HTML
   source (deux puces fusionnées en un paragraphe côté site). J'ai découpé en 2 mesures
   (lfi-drogues-04 et lfi-drogues-05). **À valider** ; le miroir `.md` n'a pas été modifié.
2. **EELV ch. 57 — numérotation source dupliquée** : la page 181 imprime **deux propositions « 4 »**
   (« Combattre les discours de haine » puis « Faire revenir les prisonnier·es français·es de
   Syrie »). Le chapitre compte donc 9 propositions numérotées 1-8. Ordre de lecture conservé
   (colonne gauche puis droite), signalé dans `rubrique_origine` des deux mesures.
3. **Badge « [EUROPE] » (EELV)** : la source préfixe certaines propositions d'un badge `[EUROPE]`
   (récurrent dans tout le programme). Pour eco-terrorisme-09, je l'ai **retiré du verbatim** et
   reporté en `rubrique_origine` (même traitement que le numéro de proposition). **Convention à
   valider** — alternative : le conserver dans le verbatim.
4. **Écart de fidélité détecté dans le corpus publié (hors périmètre, non corrigé)** :
   `lfi-police-12` dans `data/candidats/lfi.json` omet « remplaçant le service actuel, » présent
   dans le miroir et la source, **sans marque d'élision […]**. À corriger par l'éditeur.
5. **LFI just-prison = 1 seule mesure** : la « synthèse » existante était déjà le verbatim intégral
   de l'unique proposition prison de L'Avenir en commun. Le détail n'ajoute donc rien côté LFI —
   l'asymétrie de volume (1 vs 7 EELV) est une information éditoriale en soi.
6. **lfi-drogues-07 (trafic de cigarettes / « zéro tabac »)** : rangée dans l'axe `just-drogues`
   par fidélité au chapitre source, mais l'objet est le tabac (taguée `addictions` seul). L'éditeur
   peut préférer la sortir de l'axe (santé) — cas-frontière assumé.
7. **Limite de taxonomie — justice civile et sociale** : eco-justice-12 (prud'hommes),
   eco-justice-13 (contentieux Sécurité sociale) et une partie de eco-justice-09 relèvent de la
   justice **civile/sociale**, or la seule thématique fine disponible est `justice-penale`
   (« Justice & chaîne pénale »). Proposition : renommer la thématique en « Justice & tribunaux »
   ou créer une thématique `justice-civile`. Je n'ai pas touché à `taxonomie.json`.
8. **Contenu de synthèse non repris** : la phrase « Intégrer pleinement les violences sexistes et
   sexuelles et notamment le crime d'inceste » de `eco-just-justice-synth` provient de
   l'**introduction** du chapitre 51 (qui renvoie au chapitre 39), pas d'une proposition numérotée.
   Elle disparaît donc du point-par-point ; le tag `violences-sexistes` de la synthèse n'est porté
   par aucune mesure EELV détaillée (côté LFI, lfi-justice-11 le porte).
9. **Ordre des mesures LFI** : ordre source conservé dans le brouillon ; la mesure prison
   (lfi-prison-01) est donc intercalée entre lfi-justice-09 et lfi-justice-10 (position réelle dans
   le chapitre 7.7). À réordonner par axe au moment de la fusion si souhaité.
10. **Archive brute EELV** : le PDF n'existe que dans `Programmes/` ; le process (§1) demande une
    copie d'archive dans `data/sources/raw/`. Décision/copie laissée à l'éditeur (fichier de 20+ Mo ?).
11. **Coquilles de la source EELV conservées verbatim (aucune correction appliquée)** :
    « projets de Centre Éducatifs Fermés » [sic, eco-justice-04] ; « la possibilité d'effecteur des
    Travaux d'Intérêts Généraux » [sic, eco-prison-03] ; ponctuation manquante « l'extrême droite
    violente S'ils sont étrangers » [eco-terrorisme-02] et « judiciaire et sociale Organiser leur
    retour » [eco-terrorisme-05] ; « Entre Etats membres » sans accent [eco-justice-08] ;
    répétition « Redonner un cadre autonome et cohérent à la police judiciaire » (deux fois dans la
    même proposition) [eco-justice-05] ; répétition de l'intitulé en début de corps
    [eco-terrorisme-09] ; phrase elliptique « Limiter le recours à certains types de délits. »
    [eco-justice-10].
12. **Après fusion** : supprimer les 8 mesures `*-synth` (`synthese: true`) des deux fichiers
    candidats et, le cas échéant, rafraîchir `ecart_synthese` des 4 axes dans `data/axes.json`
    (non modifiés par cette extraction).

## 5. Enrichissements proposés pour `PROCESS-extraction.md` (je n'y ai pas touché)

- **Piège melenchon2027.fr** : certaines puces sont fusionnées dans un même paragraphe avec un
  « • » littéral comme séparateur → vérifier les lignes du miroir contenant « • » et découper
  une mesure par segment (en le consignant au rapport).
- **PDF Écologistes** : (a) le mode `pdftotext` **sans** `-layout` restitue l'ordre de lecture des
  deux colonnes quand les propositions sont numérotées — plus sûr que `-layout` pour découper ;
  (b) badges `[EUROPE]` récurrents : convention de traitement à documenter (verbatim vs rubrique) ;
  (c) numéros de propositions parfois dupliqués (ch. 57 : deux « 4 ») → consigner dans
  `rubrique_origine` ; (d) une proposition peut être coupée en deux blocs par la mise en page
  (ch. 52 prop. 4) → recoller et le consigner au rapport.
- **Normalisation du point final** : le corpus ajoute un point final aux propositions sans
  ponctuation terminale — à écrire noir sur blanc dans le §3 du process (transformation autorisée).
