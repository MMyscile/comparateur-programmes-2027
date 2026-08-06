# Glossaire — reprise des termes « ❓ à sourcer » du 2026-08-02

**Date :** 2026-08-06
**Périmètre :** les seuls termes laissés **❓ à sourcer** dans
`data/rapports/glossaire-propositions-2026-08-02.md`, sections **1.3, 2, 3, 4 et 5**.
Les 54 entrées de la section 6 de ce rapport ont été fusionnées depuis (95 termes publiés dans
`data/glossaire.json`) : elles ne sont pas reproposées.
**Statut :** propositions. Aucun fichier de données ni de code n'a été modifié, aucun commit.

## Ce qui a changé depuis le 02/08

1. **`scripts/legifrance.mjs` donne accès au texte officiel** (API PISTE). Les ❓ posés en 2026-08-02
   au seul motif « Légifrance répond 403 aux requêtes automatisées » étaient des faux négatifs :
   la section 4 est désormais très largement traitable, et l'article de code qui définit un
   dispositif est une source de **niveau 1**. Chaque article cité ci-dessous a été contrôlé
   **en vigueur** (champ `vigueur` de l'API) ; les deux exceptions sont signalées.
2. **Domaines écartés parce que non vérifiables :** `vie-publique.fr` (rendu JavaScript, HTTP 200 sur
   toute URL y compris inexistante), `economie.gouv.fr`, `interieur.gouv.fr`, `budget.gouv.fr`.
   Aucune URL de ces domaines n'est proposée.
3. **Méthode de vérification d'une URL.** Récupération du **HTML complet** (jamais le texte visible :
   les sections repliées y échappent), puis recherche du terme *et* des faits affirmés, après
   normalisation des accents et des apostrophes. Un lien vivant ne prouve rien ; le défaut traqué
   est le lien **hors sujet**.
4. **Règle du 05/08 appliquée (« taxe Zucman ») :** la source retenue doit porter **à la fois** le
   nom du terme et les faits chiffrés de la définition. Quand aucune source ne porte les deux, la
   définition a été **resserrée** sur ce que la source porte — le fait retiré est signalé.

## Vérification mécanique des occurrences

Chaque terme retenu a été passé à la regex **exacte** de `src/components/Verbatim.tsx` —
`(?<![\p{L}\p{N}])(terme)(?![\p{L}\p{N}])`, drapeaux `giu` — contre les verbatims de
`data/candidats/*.json`. Aucun terme n'est proposé sans au moins une correspondance ;
l'id d'occurrence est indiqué à chaque entrée.

⚠️ **Règle `Verbatim.tsx` ajoutée depuis (sigle accolé à son développé).** Un sigle qui suit
immédiatement sa propre forme développée (« … (ICPE) ») n'est plus déclencheur : une seule bulle
s'affiche. Conséquence pratique pour ce lot : proposer **les deux formes** reste utile et sans
danger d'affichage — le sigle garde sa bulle partout où il apparaît **seul** ailleurs dans le
verbatim. Les cas concernés sont signalés.

⚠️ **Apostrophes.** Plusieurs termes portent l'apostrophe typographique `’` : c'est la graphie des
verbatims, le repérage est littéral, ne pas la « corriger » en `'`.

---

## A. Section 4 (vocabulaire juridique) — débloquée par l'API Légifrance

C'est la section que le rapport du 02/08 déclarait « entièrement ❓ » au motif que Légifrance
répondait 403. L'API PISTE lève l'obstacle.

Les URL citées sont de la forme `legifrance.gouv.fr/codes/article_lc/LEGIARTI…` : ce sont les
identifiants renvoyés par l'API, ils font foi et pointent la **version** de l'article contrôlée ici.
⚠️ Ces URL renvoient 403 à `curl` et à `verif-liens` : **ne pas les déclarer liens morts**
(`scripts/legifrance.mjs` le rappelle en tête de fichier). Un navigateur les ouvre normalement.

### A.1 — Sourcés

**principe de précaution** — occurrence `eco-toxiques-01`
- Définition : « Principe inscrit au code de l'environnement : l'absence de certitudes, compte tenu
  des connaissances scientifiques et techniques du moment, ne doit pas retarder l'adoption de
  mesures effectives et proportionnées visant à prévenir un risque de dommages graves et
  irréversibles à l'environnement, à un coût économiquement acceptable. »
- Source (niveau 1) : code de l'environnement, art. L. 110-1 (II, 1°) —
  `https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975398`
  — **en vigueur** depuis le 2021-08-25, sans terme. Le texte de l'article est repris quasi mot
  pour mot : la source porte le terme *et* les faits.
- Écart avec le 02/08 : la piste indiquée était l'article 5 de la Charte de l'environnement. Le code
  de l'environnement est préférable ici — c'est lui qui énonce le principe sous ce nom, dans le
  champ (produits chimiques) où la mesure l'invoque.

**principe pollueur-payeur** — occurrences `eco-toxiques-03`, `lfi-justice-12`
- Définition : « Principe inscrit au code de l'environnement : les frais résultant des mesures de
  prévention, de réduction de la pollution et de lutte contre celle-ci doivent être supportés par
  le pollueur. »
- Source (niveau 1) : code de l'environnement, art. L. 110-1 (II, 3°) — même URL,
  `LEGIARTI000043975398`, **en vigueur**.
- Note : la seconde occurrence (`lfi-justice-12`) est hors du lot écologie ; le glossaire étant
  global, c'est un gain de couverture gratuit.

**zones humides** *(laissé ❓ en section 1.3 le 02/08 ; la source est légale, il est traité ici)* —
occurrences `lfi-eau-ressource-08`, `eco-eau-ressource-01`, `eco-adaptation-04`, `eco-biodiversite-04`
- Définition : « Terrains, exploités ou non, habituellement inondés ou gorgés d'eau douce, salée ou
  saumâtre de façon permanente ou temporaire, ou dont la végétation est dominée par des plantes qui
  aiment l'eau pendant au moins une partie de l'année. C'est la définition qu'en donne le code de
  l'environnement, qui range leur préservation parmi les objectifs de la gestion de l'eau. »
- Source (niveau 1) : code de l'environnement, art. L. 211-1 (I, 1°) —
  `https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000052084005` — **en vigueur** depuis le
  2025-08-13.

**partie civile** — occurrence `eco-condition-animale-04`
- Définition : « Statut de la personne qui, s'estimant lésée par une infraction, se joint aux
  poursuites pénales et demande devant le juge pénal des dommages-intérêts correspondant au
  préjudice qui lui a été causé. »
- Source (niveau 1) : code de procédure pénale, art. 418 —
  `https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006576523`
- ⚠️ **Réserve à porter à l'éditeur** : l'API classe cet article `ABROGE_DIFF`, en vigueur
  **jusqu'au 2029-01-01** (recodification du code de procédure pénale). Il s'applique aujourd'hui,
  mais l'entrée devra être resourcée avant cette date. Même réserve pour l'article 2 du même code.
- **Définition resserrée** : la mesure porte sur « les droits des associations à se constituer
  partie civile ». Ce fait-là n'est pas dans l'article 418 mais à l'article **L. 142-2 du code de
  l'environnement** (`https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033034726`, en
  vigueur depuis 2016), qui permet aux associations agréées d'« exercer les droits reconnus à la
  partie civile » pour les infractions portant atteinte aux intérêts collectifs qu'elles défendent.
  Une seule `source_url` étant possible, j'ai retiré ce fait de la définition plutôt que de le
  laisser sans source. L'éditeur peut préférer l'inverse (définition centrée associations, source
  L. 142-2) : les deux se défendent, le mélange non.

**travail détaché** — occurrence `lfi-forets-04`
- Définition : « Situation d'un salarié employé par une entreprise établie hors de France et envoyé
  travailler temporairement sur le territoire national, son contrat de travail avec cet employeur
  subsistant pendant toute la durée du détachement. »
- Source (niveau 1) : code du travail, art. L. 1262-1 —
  `https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000018764665` — **en vigueur**.
- **Définition resserrée** : la version du 02/08 affirmait que le salarié « reste affilié au régime
  social de son pays d'origine ». Ce fait relève du règlement (CE) n° 883/2004, pas du code du
  travail : il serait resté sans source sous cette URL. Retiré.

**droit de préemption** — occurrences `lfi-forets-05`, `eco-forets-05`, `eco-souverainete-01`
- Définition : « Droit institué par la loi au profit d'une personne publique ou d'un organisme
  désigné, qui lui permet d'acquérir un bien mis en vente en vue d'opérations menées dans
  l'intérêt général ou pour constituer des réserves foncières. »
- Source (niveau 1) : code de l'urbanisme, art. L. 210-1 —
  `https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045211258` — **en vigueur** depuis le
  2022-02-23 (« Les droits de préemption institués par le présent titre sont exercés en vue de la
  réalisation, dans l'intérêt général, des actions ou opérations […] ou pour constituer des réserves
  foncières »).
- **Définition resserrée** : la version du 02/08 disait « en se substituant à l'acquéreur choisi par
  le vendeur, au prix convenu ou fixé par le juge ». Ces deux faits ne sont pas dans L. 210-1 (ils
  se déduisent d'articles de procédure distincts) : retirés. La définition restante suffit à rendre
  les trois mesures lisibles.
- Note d'usage : les trois occurrences visent trois régimes différents (forêts, foncier agricole via
  les SAFER — art. L. 143-1 du code rural —, machines-outils). La définition générique convient ;
  c'est précisément pourquoi elle ne doit pas être écrite au régime urbain.

**écocide** *(section 5 — l'arbitrage éditorial reste entier, voir §E)* — occurrence
`lfi-biodiversite-05`
- La source demandée le 02/08 existe et dit précisément ceci : l'article **L. 231-3** du code de
  l'environnement dispose que « **Constitue un écocide** l'infraction prévue à l'article L. 231-1
  lorsque les faits sont commis de manière intentionnelle », porte la peine à dix ans
  d'emprisonnement et 4,5 M€ d'amende, et qualifie lui-même l'infraction de « **délit** ».
- Source (niveau 1) : code de l'environnement, art. L. 231-3 —
  `https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043961215` — **en vigueur** depuis le
  2021-08-25. (Articles amont : L. 231-1 `LEGIARTI000043961211`, L. 231-2 `LEGIARTI000043961213`,
  tous deux en vigueur.)
- Définition proposée : « Terme désignant les atteintes les plus graves et durables à
  l'environnement. Le code de l'environnement qualifie d'écocide, depuis 2021, les pollutions et
  atteintes graves commises de manière intentionnelle et en fait un délit puni de dix ans
  d'emprisonnement ; il n'existe pas de *crime* d'écocide en droit français. »
- Ce que la définition ne fait pas : dire si la création d'un crime d'écocide est souhaitable. La
  mesure LFI la demande, la définition situe le droit existant — désormais **sur pièce**, ce qui
  n'était pas le cas le 02/08.

### A.2 — ❓ maintenus, motif exact

**personnalité juridique** — occurrences `eco-ocean-06`, `eco-condition-animale-08`
- Motif : **aucun article ne la définit**. C'est une notion présupposée par le code civil, jamais
  énoncée par lui. L'article voisin le plus parlant pour la mesure (art. 515-14 : les animaux « sont
  des êtres vivants doués de sensibilité » soumis « au régime des biens ») ne porte pas le terme.
  Publier une définition liée à un article qui ne contient pas le terme, c'est exactement le lien
  hors sujet que la procédure demande de traquer.

**avis conforme** — occurrence `eco-dechets-06`
- Motif : le droit **emploie** l'expression par centaines (« après avis conforme de… ») mais ne la
  définit nulle part ; c'est la jurisprudence administrative qui en tire l'effet liant. Aucune page
  vérifiable ne porte à la fois le terme et le fait affirmé (« l'autorité doit le solliciter **et**
  le suivre »). ❓ maintenu.

**Établissement Public Administratif** — occurrence `eco-forets-01`
- Motif : catégorie juridique sans article de définition ; les pages candidates testées ne
  contiennent pas l'expression (INSEE, rubrique Définitions : aucune fiche dédiée — testé,
  `insee.fr/fr/metadonnees/definition/c1181`, 0 occurrence). ❓ maintenu.
- Contexte utile à l'éditeur, mais qui n'appartient pas à la définition : la mesure demande ce
  statut **pour l'ONF**, aujourd'hui établissement public à caractère industriel et commercial.

**Grenelle** — occurrence `eco-investissement-02`
- Motif : nom d'usage sans texte de référence. Le sourcer supposerait une page portant à la fois le
  mot et son sens de « négociation à plusieurs parties » ; les candidates naturelles sont sur
  vie-publique.fr, non vérifiable. ❓ maintenu.

---
