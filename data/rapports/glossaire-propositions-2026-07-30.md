# Propositions de glossaire — 2026-07-30

> **Statut : BROUILLON À VALIDER.** Aucun fichier de données ni de code n'a été modifié.
> L'éditeur arbitre chaque entrée, vérifie la source et copie dans `data/glossaire.json`
> celles qu'il retient. Les définitions sont de la voix éditoriale du site.

## Méthode appliquée

- **Périmètre** : uniquement les termes présents dans les `verbatim` de `data/candidats/lfi.json`
  et `data/candidats/ecologistes.json`. Chaque terme a été vérifié par `grep` et un id de mesure
  d'occurrence est cité.
- **Neutralité stricte** (garde-fou n°5) : on décrit ce qu'est la chose, sans qualificatif de valeur.
- **Surcouche non destructive** (garde-fou n°1) : le glossaire ne touche jamais au verbatim.
- **Doublon** : « numerus clausus » est déjà dans `data/glossaire.json` → non reproposé
  (apparaît en `eco-prison-01`).
- **Mécanique de repérage** (`Verbatim.tsx`) : correspondance insensible à la casse, **sans frontière
  de mot**. Deux conséquences appliquées ici :
  1. **Aucun sigle < 3 lettres** (ex. RG).
  2. **Aucun sigle qui est un sous-mot d'un autre mot du corpus** — sinon l'infobulle se déclencherait
     à l'intérieur d'un mot ordinaire. Collisions vérifiées et écartées : BAC (dans « ta**bac** »),
     ELI (« r**eli**gieuses »), ESS (« c**ess**ent », « ass**ess**eur »…), ETI (« p**eti**tes »),
     RIO (« p**rio**rité »).
- **Sigles déjà développés dans leur propre verbatim** (ex. « Inspection générale de la Police
  nationale (IGPN) ») : écartés comme transparents en contexte — voir liste en fin de rapport.

---

## A. Termes proposés AVEC source (prêts à valider)

Source classée selon la hiérarchie du projet : **[1]** texte/administration compétente,
**[2]** institution européenne/internationale, **[3]** encyclopédie neutre.

### Jargon fiscal

**flat tax** — Surnom du prélèvement forfaitaire unique (PFU) : un impôt à taux fixe de 30 %
(12,8 % d'impôt sur le revenu + 17,2 % de prélèvements sociaux) appliqué depuis 2018 aux revenus
du capital (intérêts, dividendes, plus-values), quel que soit le niveau de revenu.
_Occurrence : `lfi-fisc-capital` (aussi `eco-fisc-capital`, où « (Prélèvement Forfaitaire Unique) » est explicité)._
Source **[1]** : https://www.economie.gouv.fr/particuliers/impots-et-fiscalite/gerer-mes-autres-impots-et-taxes/comment-fonctionne-le-prelevement

**exit tax** — Imposition des plus-values « latentes » (gains théoriques non encore réalisés) sur les
titres détenus par une personne qui transfère son domicile fiscal hors de France, sous conditions de
durée de résidence et de montant.
_Occurrence : `lfi-fisc-fraude-02` (aussi `eco-fisc-fortune`)._
Source **[1]** : https://www.impots.gouv.fr/particulier/questions/je-quitte-la-france-suis-je-concerne-par-lexit-tax

**taxe Zucman** — Projet d'impôt « plancher » du nom de l'économiste Gabriel Zucman : il vise à ce que
les patrimoines supérieurs à 100 millions d'euros acquittent chaque année au moins 2 % de leur valeur
en impôts, en versant la différence si les impôts déjà payés sont inférieurs à ce seuil.
_Occurrence : `lfi-fisc-fortune` (aussi `eco-fisc-fortune`)._
Source **[1]** : https://www.vie-publique.fr/loi/297460-impot-plancher-2-sur-le-patrimoine-des-ultrariches-proposition-de-loi

**quotient conjugal** — Règle de calcul de l'impôt sur le revenu attribuant deux parts fiscales à un
couple marié ou pacsé : leurs revenus sont additionnés puis, en l'absence d'enfant, la moyenne est
soumise au barème progressif.
_Occurrence : `lfi-fisc-foyer-01`._
Source **[1]** : https://www.vie-publique.fr/en-bref/272018-quotient-familial-quotient-conjugal-et-impot-sur-le-revenu

**quotient familial** — Dispositif divisant le revenu imposable d'un foyer par un nombre de « parts »
qui dépend de sa composition (couple, enfants) afin d'ajuster le montant de l'impôt à la situation
familiale.
_Occurrence : `lfi-fisc-foyer-01`._
Source **[1]** : https://www.economie.gouv.fr/particuliers/impots-et-fiscalite/gerer-mon-impot-sur-le-revenu/quotient-familial-et-impot-sur-le-revenu-comment-ca-marche

**niches fiscales** — Nom courant des « dépenses fiscales » : avantages dérogatoires prévus par la loi
(réductions et crédits d'impôt, taux réduits, exonérations) destinés à encourager certains comportements
ou à soutenir certains secteurs.
_Occurrence : `lfi-fisc-niches-01` (aussi `eco-fisc-ir`, `eco-fisc-verte-1`, `eco-fisc-niches-1`)._
Source **[1]** : https://www.vie-publique.fr/en-bref/293910-budget-le-cout-des-niches-fiscales-evalue-813-milliards

**CSG** — Contribution sociale généralisée : prélèvement qui finance la protection sociale (maladie,
famille…) et s'applique à la plupart des revenus — d'activité, de remplacement, du patrimoine et des
placements.
_Occurrence : `lfi-fisc-secu-03` (non développé ; développé en `eco-fisc-secu-1`)._
Source **[1]** : https://www.vie-publique.fr/fiches/21973-quest-ce-que-la-csg-contribution-sociale-generalisee

### Jargon budgétaire / finances publiques

**péréquation** — Mécanisme de redistribution visant à réduire les écarts de ressources entre entités
d'une même catégorie (le plus souvent des collectivités territoriales) en prélevant sur les mieux dotées
au profit des moins dotées.
_Occurrences : `eco-fisc-collectivites-1` (« fonds de péréquation ») ; `lfi-fisc-secu-01` (« caisse de péréquation interentreprises »)._
Source **[1]** : https://www.collectivites-locales.gouv.fr/gerer-les-finances-publiques-locales/execution-des-recettes-et-des-depenses-locales/recettes-locales/perequation/perequation-horizontale

**dotation globale de fonctionnement** — Principal concours financier de l'État au budget de
fonctionnement des collectivités territoriales ; son montant est fixé chaque année par la loi de finances
et son emploi est libre.
_Occurrence : `lfi-fisc-collectivites-01` (écrit en toutes lettres, non expliqué ; en `eco-fisc-collectivites-1` : « Dotation Globale de Financement (DGF) »)._
Source **[1]** : https://www.collectivites-locales.gouv.fr/gerer-les-finances-publiques-locales/execution-des-recettes-et-des-depenses-locales/recettes-locales/dotations/dotation-globale-de-fonctionnement/presentation-de-la-dotation-globale-de-fonctionnement

**Semestre européen** — Cycle annuel de coordination des politiques économiques et budgétaires des États
de l'Union européenne, à l'issue duquel la Commission adresse à chaque pays des recommandations.
_Occurrence : `eco-fisc-dette-1`._
Source **[2]** : https://www.consilium.europa.eu/fr/policies/european-semester/

### Jargon financier / bancaire

**titrisation** — Technique financière consistant à transformer des créances (souvent des crédits
bancaires) en titres négociables, ensuite vendus à des investisseurs.
_Occurrence : `eco-fin-regulation-2`._
Source **[1]** : https://www.banque-france.fr/fr/publications-et-statistiques/publications/titrisation

**devoir de vigilance** — Obligation, pour les très grandes entreprises, d'établir et de mettre en œuvre
un « plan de vigilance » identifiant et prévenant les atteintes aux droits humains et à l'environnement
liées à leurs activités, filiales et sous-traitants (loi de 2017).
_Occurrence : `eco-fin-climat-1`._
Source **[1]** : https://www.vie-publique.fr/loi/20976-devoir-de-vigilance-des-societes-meres-et-des-entreprises-donneuses-dor

### Jargon justice / pénal

**convention judiciaire d'intérêt public** — Accord passé entre le procureur et une entreprise mise en
cause (corruption, fraude fiscale, atteinte à l'environnement…) qui, sans reconnaissance de culpabilité
ni procès, met fin aux poursuites en échange d'une amende et de mesures de mise en conformité.
_Occurrences : `lfi-justice-10`, `lfi-fisc-fraude-04` (en toutes lettres) ; `eco-justice-11` (« (CJIP) »)._
Source **[1]** : https://www.justice.gouv.fr/documentation/ressources/conventions-judiciaires-dinteret-public

**verrou de Bercy** — Règle selon laquelle, pour l'essentiel, seule l'administration fiscale (Bercy)
pouvait déclencher des poursuites pénales pour fraude fiscale, après avis d'une commission ; ce monopole
a été assoupli en 2019.
_Occurrence : `lfi-justice-10`._
Source **[1]** : https://www.senat.fr/salle-de-presse/201805/infractions-financieres-et-suppression-du-verrou-de-bercy.html

**correctionnalisation** — Fait de poursuivre des faits susceptibles d'être qualifiés de crime (jugé en
cour d'assises) sous une qualification de délit, afin qu'ils soient jugés plus rapidement par un tribunal
correctionnel.
_Occurrence : `lfi-justice-11`._
Source **[1]** : https://www.senat.fr/questions/base/2017/qSEQ170325527.html

**comparution immédiate** — Procédure permettant au procureur de faire juger un prévenu par le tribunal
correctionnel dès la fin de sa garde à vue, pour des délits ne nécessitant pas d'investigations
supplémentaires.
_Occurrence : `eco-justice-04`._
Source **[1]** : https://www.vie-publique.fr/eclairage/297540-comparution-immediate-procedure-penale-rapide-justice-expeditive

**justice restaurative** — Dispositif complémentaire au procès pénal proposant, de façon volontaire et
encadrée par un tiers formé, un dialogue entre victimes et auteurs d'infractions sur les conséquences des
faits.
_Occurrence : `eco-justice-10`._
Source **[1]** : https://www.justice.gouv.fr/actualites/actualite/quest-ce-que-justice-restaurative

**échevinage** — Organisation d'un tribunal associant, dans la même formation de jugement, un ou des
magistrats professionnels et des juges non professionnels (citoyens ou représentants de professions).
_Occurrence : `eco-justice-12`._
Source **[1]** : https://www.senat.fr/rap/r01-345/r01-34576.html

**aide juridictionnelle** — Prise en charge par l'État de tout ou partie des frais de justice et des
honoraires d'avocat pour les personnes dont les revenus sont insuffisants.
_Occurrences : `lfi-justice-01`, `eco-justice-09`._
Source **[1]** : https://www.justice.gouv.fr/actualites/actualite/reforme-laide-juridictionnelle-aide-plus-accessible

**probation** — Suivi des personnes condamnées en dehors de la prison (« milieu ouvert »), assuré par les
services pénitentiaires d'insertion et de probation, visant la réinsertion et la prévention de la récidive.
_Occurrence : `eco-prison-03`._
Source **[1]** : https://www.justice.gouv.fr/justice-france/prise-charge-personnes-condamnees-ou-prevenues/suivi-milieu-ouvert

**JIRS** — Juridictions interrégionales spécialisées : tribunaux compétents pour les affaires les plus
complexes de criminalité organisée et de délinquance financière.
_Occurrence : `eco-drogues-01` (le verbatim glose sommairement « juridictions pénales spécialisées (JIRS) » ; une entrée précise reste utile)._
Source **[1]** : https://www.justice.gouv.fr/justice-france/lorganisation-cours-tribunaux/lordre-judiciaire/juridictions-penales-specialisees

### Sigles institutionnels

**OQTF** — Obligation de quitter le territoire français : décision administrative par laquelle le préfet
ordonne à un étranger en situation irrégulière de quitter la France, avec ou sans délai de départ.
_Occurrence : `eco-fisc-niches-1` (non développé)._
Source **[1]** : https://www.service-public.fr/particuliers/vosdroits/F18362

**CNIL** — Commission nationale de l'informatique et des libertés : autorité administrative indépendante
chargée de veiller à la protection des données personnelles et au respect de la vie privée dans les
fichiers publics et privés.
_Occurrence : `eco-police-4` (non développé)._
Source **[1]** : https://www.cnil.fr/fr/definition/commission-nationale-de-linformatique-et-des-libertes-cnil

---

## B. Termes opaques proposés À SOURCER (❓)

Termes réellement présents et opaques pour un non-spécialiste, mais pour lesquels je n'ai pas
sécurisé de page-source fiable. **Définition indicative à valider ET source à trouver avant fusion.**

**superprofits** — Bénéfices exceptionnellement élevés réalisés à la faveur de circonstances
particulières (par ex. une flambée des prix), au-delà de la rentabilité habituelle de l'entreprise.
_Occurrence : `lfi-fisc-superprofits-01` (aussi `eco-fisc-superprofits-1`)._ ❓ à sourcer
(des définitions existent dans les travaux du Sénat, mais aucune page institutionnelle purement
définitionnelle et neutre n'a été trouvée).

**produits dérivés** — Contrats financiers dont la valeur dépend de l'évolution d'un autre actif (action,
matière première, taux, devise…), utilisés pour se couvrir contre un risque ou pour spéculer.
_Occurrences : `lfi-fin-regulation-04`, `eco-fin-regulation-2`._ ❓ à sourcer (source pressentie : AMF).

**cotation continue** — Mode de fonctionnement d'un marché boursier où le prix d'une action est établi
et peut varier en permanence pendant la séance, à chaque transaction.
_Occurrence : `lfi-fin-definanciarisation-03`._ ❓ à sourcer.

**caisse de défaisance** — Structure créée pour racheter et isoler des actifs ou des dettes compromis
afin d'en gérer l'extinction à part, ce qui assainit le bilan de l'entité d'origine.
_Occurrence : `lfi-fisc-dette-06`._ ❓ à sourcer.

**circuit du Trésor** — Ancien mécanisme (jusqu'aux années 1970) par lequel l'État se finançait en partie
en obligeant banques et organismes à déposer ou placer des fonds auprès du Trésor public, hors marchés.
_Occurrence : `lfi-fisc-dette-03`._ ❓ à sourcer.

**niche Copé** — Nom usuel d'un régime fiscal exonérant largement d'impôt les plus-values réalisées par
une entreprise lors de la vente de titres de participation (filiales).
_Occurrence : `eco-fisc-succession-1`._ ❓ à sourcer (et à confirmer).

**abattement Dutreil** — Dispositif permettant, sous condition d'engagement de conservation des titres,
de réduire fortement la base taxable lors de la transmission (donation ou succession) d'une entreprise
familiale.
_Occurrence : `eco-fisc-succession-1`._ ❓ à sourcer (et à confirmer).

**ADF** — Assemblée des Départements de France : association représentant les départements auprès de
l'État. (3 lettres, sans collision de sous-chaîne vérifiée → techniquement affichable.)
_Occurrence : `eco-fisc-collectivites-1`._ ❓ à sourcer (utilité éditoriale à trancher : sigle mineur).

**DILICO** — Prélèvement (institué par le budget 2025) sur les recettes de certaines collectivités
territoriales les mieux dotées, destiné au redressement des finances publiques.
_Occurrence : `eco-fisc-collectivites-1` (« prélèvement sur ressources des collectivités territoriales dit « DILICO » » — donc partiellement contextualisé)._ ❓ à sourcer (développé du sigle et définition à confirmer).

---

## Bloc JSON — entrées sourcées, prêtes à fusionner dans `data/glossaire.json`

```json
[
  {
    "terme": "flat tax",
    "definition": "Surnom du prélèvement forfaitaire unique (PFU) : un impôt à taux fixe de 30 % (12,8 % d'impôt sur le revenu et 17,2 % de prélèvements sociaux) appliqué depuis 2018 aux revenus du capital (intérêts, dividendes, plus-values), quel que soit le niveau de revenu.",
    "source_url": "https://www.economie.gouv.fr/particuliers/impots-et-fiscalite/gerer-mes-autres-impots-et-taxes/comment-fonctionne-le-prelevement"
  },
  {
    "terme": "exit tax",
    "definition": "Imposition des plus-values « latentes » (gains théoriques non encore réalisés) sur les titres détenus par une personne qui transfère son domicile fiscal hors de France, sous conditions de durée de résidence et de montant.",
    "source_url": "https://www.impots.gouv.fr/particulier/questions/je-quitte-la-france-suis-je-concerne-par-lexit-tax"
  },
  {
    "terme": "taxe Zucman",
    "definition": "Projet d'impôt « plancher » du nom de l'économiste Gabriel Zucman : il vise à ce que les patrimoines supérieurs à 100 millions d'euros acquittent chaque année au moins 2 % de leur valeur en impôts, en versant la différence si les impôts déjà payés sont inférieurs à ce seuil.",
    "source_url": "https://www.vie-publique.fr/loi/297460-impot-plancher-2-sur-le-patrimoine-des-ultrariches-proposition-de-loi"
  },
  {
    "terme": "quotient conjugal",
    "definition": "Règle de calcul de l'impôt sur le revenu attribuant deux parts fiscales à un couple marié ou pacsé : leurs revenus sont additionnés puis, en l'absence d'enfant, la moyenne est soumise au barème progressif.",
    "source_url": "https://www.vie-publique.fr/en-bref/272018-quotient-familial-quotient-conjugal-et-impot-sur-le-revenu"
  },
  {
    "terme": "quotient familial",
    "definition": "Dispositif divisant le revenu imposable d'un foyer par un nombre de « parts » qui dépend de sa composition (couple, enfants) afin d'ajuster le montant de l'impôt à la situation familiale.",
    "source_url": "https://www.economie.gouv.fr/particuliers/impots-et-fiscalite/gerer-mon-impot-sur-le-revenu/quotient-familial-et-impot-sur-le-revenu-comment-ca-marche"
  },
  {
    "terme": "niches fiscales",
    "definition": "Nom courant des « dépenses fiscales » : avantages dérogatoires prévus par la loi (réductions et crédits d'impôt, taux réduits, exonérations) destinés à encourager certains comportements ou à soutenir certains secteurs.",
    "source_url": "https://www.vie-publique.fr/en-bref/293910-budget-le-cout-des-niches-fiscales-evalue-813-milliards"
  },
  {
    "terme": "CSG",
    "definition": "Contribution sociale généralisée : prélèvement qui finance la protection sociale (maladie, famille…) et s'applique à la plupart des revenus — d'activité, de remplacement, du patrimoine et des placements.",
    "source_url": "https://www.vie-publique.fr/fiches/21973-quest-ce-que-la-csg-contribution-sociale-generalisee"
  },
  {
    "terme": "péréquation",
    "definition": "Mécanisme de redistribution visant à réduire les écarts de ressources entre entités d'une même catégorie (le plus souvent des collectivités territoriales) en prélevant sur les mieux dotées au profit des moins dotées.",
    "source_url": "https://www.collectivites-locales.gouv.fr/gerer-les-finances-publiques-locales/execution-des-recettes-et-des-depenses-locales/recettes-locales/perequation/perequation-horizontale"
  },
  {
    "terme": "dotation globale de fonctionnement",
    "definition": "Principal concours financier de l'État au budget de fonctionnement des collectivités territoriales ; son montant est fixé chaque année par la loi de finances et son emploi est libre.",
    "source_url": "https://www.collectivites-locales.gouv.fr/gerer-les-finances-publiques-locales/execution-des-recettes-et-des-depenses-locales/recettes-locales/dotations/dotation-globale-de-fonctionnement/presentation-de-la-dotation-globale-de-fonctionnement"
  },
  {
    "terme": "Semestre européen",
    "definition": "Cycle annuel de coordination des politiques économiques et budgétaires des États de l'Union européenne, à l'issue duquel la Commission adresse à chaque pays des recommandations.",
    "source_url": "https://www.consilium.europa.eu/fr/policies/european-semester/"
  },
  {
    "terme": "titrisation",
    "definition": "Technique financière consistant à transformer des créances (souvent des crédits bancaires) en titres négociables, ensuite vendus à des investisseurs.",
    "source_url": "https://www.banque-france.fr/fr/publications-et-statistiques/publications/titrisation"
  },
  {
    "terme": "devoir de vigilance",
    "definition": "Obligation, pour les très grandes entreprises, d'établir et de mettre en œuvre un « plan de vigilance » identifiant et prévenant les atteintes aux droits humains et à l'environnement liées à leurs activités, filiales et sous-traitants (loi de 2017).",
    "source_url": "https://www.vie-publique.fr/loi/20976-devoir-de-vigilance-des-societes-meres-et-des-entreprises-donneuses-dor"
  },
  {
    "terme": "convention judiciaire d'intérêt public",
    "definition": "Accord passé entre le procureur et une entreprise mise en cause (corruption, fraude fiscale, atteinte à l'environnement…) qui, sans reconnaissance de culpabilité ni procès, met fin aux poursuites en échange d'une amende et de mesures de mise en conformité.",
    "source_url": "https://www.justice.gouv.fr/documentation/ressources/conventions-judiciaires-dinteret-public"
  },
  {
    "terme": "verrou de Bercy",
    "definition": "Règle selon laquelle, pour l'essentiel, seule l'administration fiscale (Bercy) pouvait déclencher des poursuites pénales pour fraude fiscale, après avis d'une commission ; ce monopole a été assoupli en 2019.",
    "source_url": "https://www.senat.fr/salle-de-presse/201805/infractions-financieres-et-suppression-du-verrou-de-bercy.html"
  },
  {
    "terme": "correctionnalisation",
    "definition": "Fait de poursuivre des faits susceptibles d'être qualifiés de crime (jugé en cour d'assises) sous une qualification de délit, afin qu'ils soient jugés plus rapidement par un tribunal correctionnel.",
    "source_url": "https://www.senat.fr/questions/base/2017/qSEQ170325527.html"
  },
  {
    "terme": "comparution immédiate",
    "definition": "Procédure permettant au procureur de faire juger un prévenu par le tribunal correctionnel dès la fin de sa garde à vue, pour des délits ne nécessitant pas d'investigations supplémentaires.",
    "source_url": "https://www.vie-publique.fr/eclairage/297540-comparution-immediate-procedure-penale-rapide-justice-expeditive"
  },
  {
    "terme": "justice restaurative",
    "definition": "Dispositif complémentaire au procès pénal proposant, de façon volontaire et encadrée par un tiers formé, un dialogue entre victimes et auteurs d'infractions sur les conséquences des faits.",
    "source_url": "https://www.justice.gouv.fr/actualites/actualite/quest-ce-que-justice-restaurative"
  },
  {
    "terme": "échevinage",
    "definition": "Organisation d'un tribunal associant, dans la même formation de jugement, un ou des magistrats professionnels et des juges non professionnels (citoyens ou représentants de professions).",
    "source_url": "https://www.senat.fr/rap/r01-345/r01-34576.html"
  },
  {
    "terme": "aide juridictionnelle",
    "definition": "Prise en charge par l'État de tout ou partie des frais de justice et des honoraires d'avocat pour les personnes dont les revenus sont insuffisants.",
    "source_url": "https://www.justice.gouv.fr/actualites/actualite/reforme-laide-juridictionnelle-aide-plus-accessible"
  },
  {
    "terme": "probation",
    "definition": "Suivi des personnes condamnées en dehors de la prison (« milieu ouvert »), assuré par les services pénitentiaires d'insertion et de probation, visant la réinsertion et la prévention de la récidive.",
    "source_url": "https://www.justice.gouv.fr/justice-france/prise-charge-personnes-condamnees-ou-prevenues/suivi-milieu-ouvert"
  },
  {
    "terme": "JIRS",
    "definition": "Juridictions interrégionales spécialisées : tribunaux compétents pour les affaires les plus complexes de criminalité organisée et de délinquance financière.",
    "source_url": "https://www.justice.gouv.fr/justice-france/lorganisation-cours-tribunaux/lordre-judiciaire/juridictions-penales-specialisees"
  },
  {
    "terme": "OQTF",
    "definition": "Obligation de quitter le territoire français : décision administrative par laquelle le préfet ordonne à un étranger en situation irrégulière de quitter la France, avec ou sans délai de départ.",
    "source_url": "https://www.service-public.fr/particuliers/vosdroits/F18362"
  },
  {
    "terme": "CNIL",
    "definition": "Commission nationale de l'informatique et des libertés : autorité administrative indépendante chargée de veiller à la protection des données personnelles et au respect de la vie privée dans les fichiers publics et privés.",
    "source_url": "https://www.cnil.fr/fr/definition/commission-nationale-de-linformatique-et-des-libertes-cnil"
  }
]
```

## Bloc JSON — propositions À SOURCER (ne pas fusionner tel quel)

`source_url` vide = source à trouver ; définitions à valider.

```json
[
  {
    "terme": "superprofits",
    "definition": "Bénéfices exceptionnellement élevés réalisés à la faveur de circonstances particulières (par ex. une flambée des prix), au-delà de la rentabilité habituelle de l'entreprise.",
    "source_url": ""
  },
  {
    "terme": "produits dérivés",
    "definition": "Contrats financiers dont la valeur dépend de l'évolution d'un autre actif (action, matière première, taux, devise…), utilisés pour se couvrir contre un risque ou pour spéculer.",
    "source_url": ""
  },
  {
    "terme": "cotation continue",
    "definition": "Mode de fonctionnement d'un marché boursier où le prix d'une action est établi et peut varier en permanence pendant la séance, à chaque transaction.",
    "source_url": ""
  },
  {
    "terme": "caisse de défaisance",
    "definition": "Structure créée pour racheter et isoler des actifs ou des dettes compromis afin d'en gérer l'extinction à part, ce qui assainit le bilan de l'entité d'origine.",
    "source_url": ""
  },
  {
    "terme": "circuit du Trésor",
    "definition": "Ancien mécanisme (jusqu'aux années 1970) par lequel l'État se finançait en partie en obligeant banques et organismes à déposer ou placer des fonds auprès du Trésor public, hors marchés financiers.",
    "source_url": ""
  },
  {
    "terme": "niche Copé",
    "definition": "Nom usuel d'un régime fiscal exonérant largement d'impôt les plus-values réalisées par une entreprise lors de la vente de titres de participation (filiales).",
    "source_url": ""
  },
  {
    "terme": "abattement Dutreil",
    "definition": "Dispositif permettant, sous condition d'engagement de conservation des titres, de réduire fortement la base taxable lors de la transmission (donation ou succession) d'une entreprise familiale.",
    "source_url": ""
  },
  {
    "terme": "ADF",
    "definition": "Assemblée des Départements de France : association représentant les départements français auprès de l'État.",
    "source_url": ""
  },
  {
    "terme": "DILICO",
    "definition": "Prélèvement (institué par le budget 2025) sur les recettes de certaines collectivités territoriales les mieux dotées, destiné au redressement des finances publiques.",
    "source_url": ""
  }
]
```

---

## C. Termes écartés (et pourquoi)

**Doublon déjà présent dans le glossaire :**
- `numerus clausus` (déjà défini ; apparaît `eco-prison-01`).

**Sigle < 3 lettres (règle absolue) :**
- `RG` (renseignements généraux, `lfi-terrorisme-03`) — 2 lettres.

**Collision de sous-chaîne (s'afficherait à l'intérieur d'un mot ordinaire) :**
- `BAC` — présent `lfi-police-13`, mais « bac » est dans « ta**bac** » (`lfi-drogues-07`, `eco-fisc-secu-1`). De plus développé inline (« brigades anticriminalité »).
- `ELI` — équipes de liaison et d'information (`eco-police-3`), mais « eli » est dans « r**eli**gieuses » (`eco-police-4`). Développé inline.
- `ESS` — économie sociale et solidaire (`eco-fin-banques-publiques-2`), mais « ess » est ultra-fréquent (« c**ess**ent », « ass**ess**eur », « expr**ess**ion »…).
- `ETI` — entreprises de taille intermédiaire (`eco-fisc-niches-1`), mais « eti » est dans « p**eti**tes », « r**eti**rer ».
- `RIO` — référentiel des identités et de l'organisation / matricule (`eco-police-7`), mais « rio » est dans « p**rio**rité », « P**rio**riser ».

**Sigles développés dans leur propre verbatim → transparents en contexte (redondant de les glosser) :**
`ISF`, `IGPN`, `IGGN`, `ANSSI`, `SPIP`, `OFAST`, `PNACO`, `PNACP`, `ANTENJ`, `C3N`, `PHAROS`,
`DST`, `LBO`, `TPE`, `PFU`, `TSN`, `TIRUERT`, `CVAE`, `DMTO`, `TASCOM`, `LCB-FT`, `ESMA`, `CNAM`,
`BCE`, `Ocabsa`, `OATi`. — Chacun est immédiatement suivi ou précédé de son développé dans le texte.
_(Si l'éditeur juge certains encore utiles hors contexte — ex. `OFAST`, `SPIP` — ils peuvent être
repris ; ils sont techniquement affichables.)_

**Jugés compris de la plupart des lecteurs / transparents :**
- `PME` (petites et moyennes entreprises) — `lfi-fisc-is`, `eco-fisc-niches-1`.
- `RSA` (revenu de solidarité active) — `eco-fisc-collectivites-1` (pas de collision, mais largement connu).
- Termes courants : barème, exonération, cotisation, abattement (pris isolément), dividendes, plus-value,
  crédit d'impôt — jugés lisibles en contexte (à réévaluer par l'éditeur si besoin).

**Noms de lois / dispositifs nommés (relèvent d'un arbitrage éditorial, non traités comme jargon) :**
`loi Cazeneuve`, `loi Attal`, `loi Évin`, `réforme/loi Darmanin`, lois `Sécurité globale` et
`Séparatisme`, `Community Reinvestment Act`, `Bâle V`. — Souvent partiellement explicités dans le
verbatim ; à décider au cas par cas.

> **Mise à jour :** ces dispositifs nommés ne sont plus « écartés » — ils sont définis et sourcés
> dans le LOT 2 ci-dessous (arbitrage éditeur : « tout inclure »).

---

# LOT 2 — 2026-07-30 (second passage)

Suite à l'arbitrage de l'éditeur (les 23 termes sourcés du lot 1 sont intégrés) : ce lot traite
(a) les 9 termes qui étaient en ❓ et (b) les dispositifs/lois nommés, désormais **définis + sourcés**.
Le matcher ayant été durci (frontières de mot Unicode), les collisions de sous-chaîne ne sont plus
un obstacle. Tous les termes ci-dessous sont vérifiés présents dans les verbatims (id + `grep`).

## A2. Termes proposés AVEC source

### Anciens ❓ désormais sourcés

**produits dérivés** — Contrats financiers dont la valeur dépend de l'évolution d'un autre actif
appelé « sous-jacent » (action, obligation, matière première, taux, devise…), utilisés pour se couvrir
contre un risque ou pour spéculer.
_Occurrences : `lfi-fin-regulation-04`, `eco-fin-regulation-2`._
Source **[1]** : https://www.economie.gouv.fr/facileco/la-bourse-quoi-ca-sert

**cotation continue** — Mode de fonctionnement d'un marché boursier où le prix d'une action est établi
et mis à jour en permanence pendant toute la séance, à chaque transaction (par opposition à une fixation
à heures fixes).
_Occurrence : `lfi-fin-definanciarisation-03`._
Source **[1]** : https://www.economie.gouv.fr/facileco/dossiers-economiques/la-bourse

**caisse de défaisance** — Structure créée pour racheter et isoler (« cantonner ») les actifs ou dettes
compromis d'un établissement en difficulté, afin d'en étaler la gestion et les pertes dans le temps et
d'assainir le bilan d'origine.
_Occurrence : `lfi-fisc-dette-06`._
Source **[1]** : https://www.senat.fr/rap/l12-422-1/l12-422-144.html

**circuit du Trésor** — Mécanisme (mis en place après 1945, progressivement abandonné) par lequel l'État
se finançait en drainant l'épargne de son propre réseau et en obligeant les banques à détenir des bons
du Trésor, hors marchés financiers.
_Occurrence : `lfi-fisc-dette-03`._
Source **[1]** : https://www.economie.gouv.fr/saef/document-du-mois/il-est-bon-davoir-un-tresor

**niche Copé** — Nom usuel du régime de l'article 219 du code général des impôts qui exonère très
largement d'impôt sur les sociétés les plus-values réalisées par une entreprise lors de la vente de
titres de participation (filiales) détenus depuis plus de deux ans.
_Occurrence : `eco-fisc-succession-1`._
Source **[1]** : https://www.senat.fr/questions/base/2010/qSEQ100312608.html

**abattement Dutreil** — Aussi appelé « pacte Dutreil » : dispositif permettant, sous condition
d'engagement de conservation des titres, de réduire de 75 % la valeur taxable lors de la transmission
(donation ou succession) d'une entreprise familiale.
_Occurrence : `eco-fisc-succession-1`._
Source **[1]** : https://www.economie.gouv.fr/loi-pacte-transmettre-entreprises

**ADF** — Assemblée des Départements de France (désormais « Départements de France ») : association qui
représente les départements auprès de l'État et du Parlement.
_Occurrence : `eco-fisc-collectivites-1`._
Source **[1]** : https://departements.fr/qui-sommes-nous/df-presentation-et-missions/

**DILICO** — Dispositif de lissage conjoncturel des recettes fiscales des collectivités territoriales :
prélèvement institué par la loi de finances pour 2025 sur les recettes des collectivités les mieux
dotées, mis en réserve puis restitué les années suivantes.
_Occurrence : `eco-fisc-collectivites-1`._
Source **[1]** : https://www.senat.fr/questions/base/2025/qSEQ25060622S.html

### Lois / dispositifs nommés

**loi Cazeneuve** — Nom usuel de la loi du 28 février 2017 relative à la sécurité publique, qui a élargi
les cas dans lesquels policiers et gendarmes peuvent faire usage de leur arme, notamment face à un refus
d'obtempérer.
_Occurrences : `lfi-police-10`, `eco-police-3`._
Source **[1]** : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034104023

**loi Attal** — Nom usuel de la loi du 23 juin 2025 durcissant la réponse pénale à l'égard des mineurs
délinquants et de leurs parents (rétablissement de la comparution immédiate dès 16 ans sous conditions,
atténuation de l'« excuse de minorité », responsabilité parentale renforcée).
_Occurrence : `eco-justice-04`._
Source **[1]** : https://www.vie-publique.fr/loi/297360-justice-penale-des-mineurs-loi-attal-du-23-juin-2025

**loi Évin** — Nom usuel de la loi du 10 janvier 1991 de lutte contre le tabagisme et l'alcoolisme, qui
interdit la publicité pour le tabac et encadre strictement celle en faveur des boissons alcoolisées.
_Occurrence : `eco-drogues-04`._
Source **[1]** : https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000344577

**réforme Darmanin** — Réorganisation de la police nationale (décret du 2 novembre 2023) plaçant, dans
chaque département, l'ensemble des services de police — dont la police judiciaire — sous une direction
départementale unique, en remplacement de l'organisation par filières nationales.
_Occurrence : `eco-justice-05`._
Source **[1]** : https://www.vie-publique.fr/rapport/288825-creation-des-directions-departementales-de-la-police-nationale

**Sécurité globale** — Nom usuel de la loi du 25 mai 2021 « pour une sécurité globale préservant les
libertés », portant notamment sur les polices municipales, la sécurité privée et l'usage des caméras et
images par les forces de l'ordre.
_Occurrence : `eco-police-4` (texte : « lois Sécurité globale, Séparatisme… »)._
Source **[1]** : https://www.vie-publique.fr/loi/277157-loi-pour-une-securite-globale-preservant-les-libertes
⚠️ **Réserve d'affichage** : le terme registrable est « Sécurité globale » (le verbatim écrit « lois
Sécurité globale », donc « loi Sécurité globale » ne correspondrait pas). L'expression n'apparaît
qu'ici, mais elle est assez générique pour surligner un usage futur non lié à cette loi — à surveiller.

**Séparatisme** — Nom usuel de la loi du 24 août 2021 « confortant le respect des principes de la
République », qui renforce les obligations de neutralité du service public et le contrôle des
associations et des lieux de culte.
_Occurrence : `eco-police-4`._
Source **[1]** : https://www.vie-publique.fr/loi/277621-loi-separatisme-respect-des-principes-de-la-republique-24-aout-2021
⚠️ **Réserve d'affichage forte** : « Séparatisme » est un mot commun ; l'enregistrer surlignera *toute*
occurrence du mot, y compris hors de cette loi. Il n'apparaît qu'une fois aujourd'hui, mais l'infobulle
risque un contresens si le mot est réemployé dans un autre sens — l'éditeur peut préférer ne pas
l'enregistrer, ou attendre un libellé plus spécifique.

**Bâle V** — Nom informel donné à un futur cycle des « accords de Bâle » : normes internationales
définies par le Comité de Bâle fixant aux banques des exigences de solidité financière (fonds propres,
liquidité). Les cycles aboutis sont Bâle I (1988), II (2004) et III (2010).
_Occurrence : `eco-fin-regulation-2`._
Source **[1]** : https://acpr.banque-france.fr/accords-de-bale
⚠️ « Bâle V » n'est pas (encore) un accord officiel : la définition le présente comme un cycle à venir.

## B2. Restent en ❓ (source non trouvée)

**superprofits** — Bénéfices exceptionnellement élevés réalisés à la faveur de circonstances
particulières (par ex. une flambée des prix), au-delà de la rentabilité habituelle de l'entreprise.
_Occurrences : `lfi-fisc-superprofits-01`, `eco-fisc-superprofits-1`._ ❓ à sourcer
(le terme est employé dans de nombreux travaux parlementaires — Sénat, Assemblée — mais aucune page
institutionnelle purement définitionnelle et neutre n'a été trouvée ; à défaut, citer un rapport
parlementaire dédié).

**Community Reinvestment Act** — Loi fédérale américaine de 1977 incitant les banques à répondre aux
besoins de crédit de l'ensemble des territoires où elles collectent des dépôts, y compris les quartiers
à revenus modestes.
_Occurrence : `eco-fin-banques-publiques-1` (« un Community Reinvestment act français »)._ ❓ à sourcer
(loi étrangère : source institutionnelle américaine à confirmer, p. ex. Federal Reserve / OCC ;
non vérifiée ici, donc laissée en ❓ plutôt qu'inventée).

## Bloc JSON — LOT 2, entrées sourcées, prêtes à fusionner

```json
[
  {
    "terme": "produits dérivés",
    "definition": "Contrats financiers dont la valeur dépend de l'évolution d'un autre actif appelé « sous-jacent » (action, obligation, matière première, taux, devise…), utilisés pour se couvrir contre un risque ou pour spéculer.",
    "source_url": "https://www.economie.gouv.fr/facileco/la-bourse-quoi-ca-sert"
  },
  {
    "terme": "cotation continue",
    "definition": "Mode de fonctionnement d'un marché boursier où le prix d'une action est établi et mis à jour en permanence pendant toute la séance, à chaque transaction (par opposition à une fixation à heures fixes).",
    "source_url": "https://www.economie.gouv.fr/facileco/dossiers-economiques/la-bourse"
  },
  {
    "terme": "caisse de défaisance",
    "definition": "Structure créée pour racheter et isoler (« cantonner ») les actifs ou dettes compromis d'un établissement en difficulté, afin d'en étaler la gestion et les pertes dans le temps et d'assainir le bilan d'origine.",
    "source_url": "https://www.senat.fr/rap/l12-422-1/l12-422-144.html"
  },
  {
    "terme": "circuit du Trésor",
    "definition": "Mécanisme (mis en place après 1945, progressivement abandonné) par lequel l'État se finançait en drainant l'épargne de son propre réseau et en obligeant les banques à détenir des bons du Trésor, hors marchés financiers.",
    "source_url": "https://www.economie.gouv.fr/saef/document-du-mois/il-est-bon-davoir-un-tresor"
  },
  {
    "terme": "niche Copé",
    "definition": "Nom usuel du régime de l'article 219 du code général des impôts qui exonère très largement d'impôt sur les sociétés les plus-values réalisées par une entreprise lors de la vente de titres de participation (filiales) détenus depuis plus de deux ans.",
    "source_url": "https://www.senat.fr/questions/base/2010/qSEQ100312608.html"
  },
  {
    "terme": "abattement Dutreil",
    "definition": "Aussi appelé « pacte Dutreil » : dispositif permettant, sous condition d'engagement de conservation des titres, de réduire de 75 % la valeur taxable lors de la transmission (donation ou succession) d'une entreprise familiale.",
    "source_url": "https://www.economie.gouv.fr/loi-pacte-transmettre-entreprises"
  },
  {
    "terme": "ADF",
    "definition": "Assemblée des Départements de France (désormais « Départements de France ») : association qui représente les départements auprès de l'État et du Parlement.",
    "source_url": "https://departements.fr/qui-sommes-nous/df-presentation-et-missions/"
  },
  {
    "terme": "DILICO",
    "definition": "Dispositif de lissage conjoncturel des recettes fiscales des collectivités territoriales : prélèvement institué par la loi de finances pour 2025 sur les recettes des collectivités les mieux dotées, mis en réserve puis restitué les années suivantes.",
    "source_url": "https://www.senat.fr/questions/base/2025/qSEQ25060622S.html"
  },
  {
    "terme": "loi Cazeneuve",
    "definition": "Nom usuel de la loi du 28 février 2017 relative à la sécurité publique, qui a élargi les cas dans lesquels policiers et gendarmes peuvent faire usage de leur arme, notamment face à un refus d'obtempérer.",
    "source_url": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034104023"
  },
  {
    "terme": "loi Attal",
    "definition": "Nom usuel de la loi du 23 juin 2025 durcissant la réponse pénale à l'égard des mineurs délinquants et de leurs parents (rétablissement de la comparution immédiate dès 16 ans sous conditions, atténuation de l'« excuse de minorité », responsabilité parentale renforcée).",
    "source_url": "https://www.vie-publique.fr/loi/297360-justice-penale-des-mineurs-loi-attal-du-23-juin-2025"
  },
  {
    "terme": "loi Évin",
    "definition": "Nom usuel de la loi du 10 janvier 1991 de lutte contre le tabagisme et l'alcoolisme, qui interdit la publicité pour le tabac et encadre strictement celle en faveur des boissons alcoolisées.",
    "source_url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000344577"
  },
  {
    "terme": "réforme Darmanin",
    "definition": "Réorganisation de la police nationale (décret du 2 novembre 2023) plaçant, dans chaque département, l'ensemble des services de police — dont la police judiciaire — sous une direction départementale unique, en remplacement de l'organisation par filières nationales.",
    "source_url": "https://www.vie-publique.fr/rapport/288825-creation-des-directions-departementales-de-la-police-nationale"
  },
  {
    "terme": "Sécurité globale",
    "definition": "Nom usuel de la loi du 25 mai 2021 « pour une sécurité globale préservant les libertés », portant notamment sur les polices municipales, la sécurité privée et l'usage des caméras et images par les forces de l'ordre.",
    "source_url": "https://www.vie-publique.fr/loi/277157-loi-pour-une-securite-globale-preservant-les-libertes"
  },
  {
    "terme": "Séparatisme",
    "definition": "Nom usuel de la loi du 24 août 2021 « confortant le respect des principes de la République », qui renforce les obligations de neutralité du service public et le contrôle des associations et des lieux de culte.",
    "source_url": "https://www.vie-publique.fr/loi/277621-loi-separatisme-respect-des-principes-de-la-republique-24-aout-2021"
  },
  {
    "terme": "Bâle V",
    "definition": "Nom informel donné à un futur cycle des « accords de Bâle » : normes internationales définies par le Comité de Bâle fixant aux banques des exigences de solidité financière (fonds propres, liquidité). Les cycles aboutis sont Bâle I (1988), II (2004) et III (2010).",
    "source_url": "https://acpr.banque-france.fr/accords-de-bale"
  }
]
```

## Bloc JSON — LOT 2, ❓ à sourcer (ne pas fusionner tel quel)

```json
[
  {
    "terme": "superprofits",
    "definition": "Bénéfices exceptionnellement élevés réalisés à la faveur de circonstances particulières (par ex. une flambée des prix), au-delà de la rentabilité habituelle de l'entreprise.",
    "source_url": ""
  },
  {
    "terme": "Community Reinvestment Act",
    "definition": "Loi fédérale américaine de 1977 incitant les banques à répondre aux besoins de crédit de l'ensemble des territoires où elles collectent des dépôts, y compris les quartiers à revenus modestes.",
    "source_url": ""
  }
]
```

## Réserves d'affichage à trancher par l'éditeur (LOT 2)

- **« Séparatisme »** : mot commun → risque de surlignage hors contexte de la loi de 2021. À enregistrer
  avec prudence, ou à repousser.
- **« Sécurité globale »** : expression assez générique ; ne peut être enregistrée que sous cette forme
  exacte (le verbatim dit « lois Sécurité globale »).
- **« Bâle V »** : n'est pas un accord officiel abouti ; définition présentée comme prospective.
