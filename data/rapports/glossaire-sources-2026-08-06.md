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

## B. Section 1.3 (sigles d'instruments publics) — 18 termes sourcés sur 41

Même levier : quand le sigle désigne un **dispositif institué par la loi**, l'article qui l'institue
est la source de premier rang, et l'API en donne l'URL. Les pages ministérielles ne servent qu'aux
dispositifs sans base légale directe (marchés carbone, TRACC, NODU).

| Terme (forme du verbatim) | Définition proposée | Occurrence | Source vérifiée |
|---|---|---|---|
| `PCAET` | Plan climat-air-énergie territorial : document que doivent adopter les intercommunalités de plus de 20 000 habitants ; il fixe leurs objectifs pour atténuer le changement climatique et s'y adapter, ainsi que le programme d'actions correspondant. | `eco-fisc-verte-6` | **N1** code de l'environnement, art. L. 229-26 — `legifrance.gouv.fr/codes/article_lc/LEGIARTI000051732467` (en vigueur) |
| `Plan Climat Air-Énergie Territorial` | (même définition, forme longue du même verbatim) | `eco-fisc-verte-6` | idem |
| `ADEME` | Agence de l'environnement et de la maîtrise de l'énergie : établissement public de l'État à caractère industriel et commercial, qui intervient notamment sur la lutte contre la pollution de l'air, la prévention et la gestion des déchets, la transition vers l'économie circulaire, la remise en état des sols pollués et les économies d'énergie. | `eco-dechets-06`, `eco-planification-02` | **N1** code de l'environnement, art. L. 131-3 — `…/LEGIARTI000047303590` (en vigueur) |
| `SAFER` | Sociétés d'aménagement foncier et d'établissement rural : sociétés qui œuvrent à la protection des espaces agricoles, naturels et forestiers, favorisent l'installation et le maintien d'exploitations et assurent la transparence du marché foncier rural ; elles peuvent acquérir des terres pour les rétrocéder. | `eco-sols-03` | **N1** code rural et de la pêche maritime, art. L. 141-1 — `…/LEGIARTI000054139665` (en vigueur) |
| `office foncier solidaire` | Le programme désigne ainsi les « organismes de foncier solidaire » : organismes sans but lucratif, agréés par l'État, qui restent propriétaires du terrain et n'en cèdent que le bâti par un bail de longue durée, pour des logements destinés à des personnes aux ressources modestes. | `eco-sols-03` | **N1** code de l'urbanisme, art. L. 329-1 — `…/LEGIARTI000045212105` (en vigueur) |
| `EPFL` | Établissements publics fonciers locaux : structures créées par des collectivités qui mettent en place des stratégies foncières — acheter et porter du foncier — au service du logement, de la lutte contre l'étalement urbain et de la limitation de l'artificialisation des sols. | `eco-sols-05` | **N1** code de l'urbanisme, art. L. 324-1 — `…/LEGIARTI000048250483` (en vigueur) |
| `SDIS` | Service départemental d'incendie et de secours : établissement public créé dans chaque département, qui comprend le corps départemental de sapeurs-pompiers et s'organise en centres d'incendie et de secours. | `eco-adaptation-06` | **N1** code général des collectivités territoriales, art. L. 1424-1 — `…/LEGIARTI000044374544` (en vigueur) |
| `PPR` | Plan de prévention des risques naturels prévisibles : document élaboré par l'État pour les inondations, mouvements de terrain, avalanches, incendies de forêt, séismes, éruptions volcaniques, tempêtes ou cyclones ; il délimite les zones exposées et y interdit ou y conditionne les constructions. | `eco-adaptation-02` | **N1** code de l'environnement, art. L. 562-1 — `…/LEGIARTI000047299303` (en vigueur) |
| `PPRi` | Plan de prévention des risques d'inondation : la déclinaison, pour le risque d'inondation, des plans de prévention des risques naturels prévisibles élaborés par l'État, qui délimitent les zones exposées et y interdisent ou y conditionnent les constructions. | `lfi-adaptation-02` | **N1** même article L. 562-1 (les inondations y figurent en tête de liste) |
| `PGRI` | Plan de gestion des risques d'inondation : plan arrêté par l'État à l'échelle de chaque bassin ou groupement de bassins, qui fixe les objectifs de gestion des risques d'inondation et les mesures pour les atteindre. | `lfi-adaptation-02` | **N1** code de l'environnement, art. L. 566-7 — `…/LEGIARTI000051561770` (en vigueur) |
| `aires d’alimentation de captage` | Surfaces sur lesquelles l'eau qui s'infiltre alimente un point de captage d'eau ; l'autorité administrative peut y délimiter des périmètres et y arrêter un programme d'actions encadrant les activités qui s'y déroulent. | `eco-eau-ressource-04` | **N1** code de l'environnement, art. L. 211-3 (II) — `…/LEGIARTI000046783884` (en vigueur) |
| `Redevance pour Pollution Diffuse` | Redevance pour pollutions diffuses : somme due à l'agence de l'eau par ceux qui achètent des produits phytopharmaceutiques ou des semences traitées ; son montant dépend de la masse des substances contenues et de leur classe de danger. | `eco-eau-ressource-03` | **N1** code de l'environnement, art. L. 213-10-8 — `…/LEGIARTI000051217901` (en vigueur, rédaction 2025) |
| `accise` | Impôt indirect qui frappe des produits limitativement énumérés par la loi : produits énergétiques et électricité, boissons alcooliques et alcool, produits du tabac. | `eco-energie-prix-01` | **N1** code des impositions sur les biens et services, art. L. 311-1 — `…/LEGIARTI000044604025` (en vigueur) |
| `tarifs réglementés` | Tarifs réglementés de vente d'électricité : prix proposés de façon motivée par la Commission de régulation de l'énergie, acquis sauf opposition des ministres chargés de l'économie et de l'énergie, et publiés au Journal officiel. | `lfi-energie-prix-01` | **N1** code de l'énergie, art. L. 337-4 — `…/LEGIARTI000051213786` (en vigueur) |
| `marché carbone` | Système où un plafond d'émissions est fixé puis réparti en quotas que les installations concernées peuvent s'échanger. | `eco-energie-prix-02` | **N1** ministère de la Transition écologique, « Marchés du carbone » — `https://www.ecologie.gouv.fr/politiques-publiques/marches-du-carbone` |
| `ETS2` | Deuxième système européen d'échange de quotas d'émission (SEQE-UE 2) : il étend le prix du carbone aux carburants utilisés pour le chauffage des bâtiments et le transport routier, à partir de 2028. | `eco-energie-prix-02` | **N1** ministère, « Marchés du carbone – SEQE-UE 2 » — `https://www.ecologie.gouv.fr/politiques-publiques/marches-du-carbone-seqe-ue-2` (page française portant « ETS2 » 19 fois) |
| `Trajectoire d’Adaptation au Changement Climatique` | Le programme désigne ainsi la « trajectoire de réchauffement de référence pour l'adaptation au changement climatique » (TRACC) : hypothèse de réchauffement retenue par l'État pour dimensionner les politiques d'adaptation, allant jusqu'à + 4 °C en 2100 en France métropolitaine. | `eco-adaptation-02` | **N1** ministère, page TRACC — `https://www.ecologie.gouv.fr/politiques-publiques/trajectoire-rechauffement-reference-ladaptation-changement-climatique-tracc` |
| `NODU` | « Nombre de doses unités » : indicateur qui suit l'usage des produits phytopharmaceutiques en France à partir des ventes déclarées par les distributeurs, et qui sert au suivi du plan Écophyto. | `eco-pesticides-01` | **N1** ministère de l'Agriculture, « Indicateurs des ventes de produits phytopharmaceutiques » — `https://agriculture.gouv.fr/indicateurs-des-ventes-de-produits-phytopharmaceutiques` (NODU : 75 occurrences) |

*(`zones humides`, également en 1.3 le 02/08, est traité au §A.)*

### B.1 — ❓ maintenus en 1.3, avec le motif

| Terme | Motif exact du ❓ |
|---|---|
| `taxe espace naturel sensible` | **Le nom n'existe pas en droit.** Le code de l'urbanisme connaît la politique départementale des espaces naturels sensibles (art. L. 113-8, en vigueur) mais son financement passe depuis 2022 par une **part de la taxe d'aménagement**, sous un autre nom. Aucune page vérifiée ne porte à la fois l'appellation du verbatim et le mécanisme. |
| `Contribution Climat Énergie` | Même défaut de nom : l'expression est un nom d'usage de la composante carbone des accises sur les énergies ; elle n'apparaît pas dans le code des impositions sur les biens et services. Le fait « gelée depuis 2018 » resterait de surcroît sans source. |
| `versement mobilité` | **Nom d'usage** : le code général des collectivités territoriales l'appelle « versement destiné au financement des services de mobilité » (art. L. 2333-64 et L. 2333-66, tous deux en vigueur, vérifié : la chaîne « versement mobilité » est absente des deux). Sourcer l'article laisserait le nom du verbatim sans attache — exactement le défaut « surnom non porté par la page ». |
| `décret Montebourg` | **Cas symétrique de la « réforme Darmanin » du 05/08, mais négatif.** Le décret existe (n° 2014-479 du 14 mai 2014 relatif aux investissements étrangers soumis à autorisation préalable, `LEGITEXT000028934777`, en vigueur) ; son texte intégral a été lu article par article : le champ `signataires` est **vide** et l'article 8 ne nomme que « le ministre de l'économie, du redressement productif et du numérique », sans nom propre. Le nom « Montebourg » n'est donc porté par aucune page officielle vérifiée. |
| `loi Littoral` | Même défaut de surnom : le titre officiel est « loi n° 86-2 du 3 janvier 1986 relative à l'aménagement, la protection et la mise en valeur du littoral ». L'expression « loi Littoral » comme telle n'y figure pas. Piste pour l'éditeur : citer le code de l'urbanisme (bande des 100 mètres) et **renommer l'entrée** d'après le titre officiel plutôt que d'après le surnom. |
| `fonds social pour le climat` | Le fonds existe et les faits sont exacts, mais **aucune page vérifiée ne porte le nom français** : EUR-Lex (règlement UE 2023/955, version FR) répond **HTTP 202** à toute requête automatisée — page de défi anti-robot, pas de contenu ; la page de la Commission qui porte les faits (`employment-social-affairs.ec.europa.eu/policies-and-activities/funding/social-climate-fund_en`) est en anglais et ne contient pas « fonds social pour le climat ». |
| `INN` | Même cause : la page de la Commission (`oceans-and-fisheries.ec.europa.eu/international/illegal-fishing_en`) n'emploie que le sigle anglais **IUU** ; le sigle français INN ne s'y trouve pas. EUR-Lex (règlement CE 1005/2008, FR) : HTTP 202. |
| `contrat pour différence`, `contrats pour différence` | Le code de l'énergie organise la mise en concurrence autour du « contrat d'achat » et du « complément de rémunération » (art. L. 311-12, en vigueur) — **pas** sous le nom du verbatim. Page CRE candidate testée : 404. |
| `tarif bleu` | Nom commercial, absent du code de l'énergie ; page CRE candidate testée : 404. |
| `fonds chaleur` | La seule page ministérielle trouvée redirige vers `archive-2017-2022.ecologie.gouv.fr` (site d'archives : lien vivant mais figé). L'opérateur, l'ADEME, est **inaccessible aux outils** : `ademe.fr` répond 403 derrière Cloudflare, y compris avec un agent navigateur. |
| `EPR-2`, `SMR`, `ISDND`, `ESPR`, `Passeport Numérique des Produits`, `Digital Fairness Act`, `GPEC`, `protocole de Montréal`, `Autorité internationale des fonds marins`, `Traité sur la charte de l’énergie`, `Plan national d’adaptation au changement climatique` | Aucune page de niveau 1-2 **vérifiée** trouvée dans cette passe : les candidates testées répondent 404 (`ecologie.gouv.fr`, slugs devinés), 403 (`ramsar.org`, `ademe.fr`), 202 (EUR-Lex) ou ne portent que la version anglaise du terme (`ozone.unep.org/fr` : « protocole de Montréal » absent ; `un.org/bbnj/fr` : « haute mer » absent ; `isa.org.jm/fr` redirige hors sujet). Ces termes restent à sourcer, pas à écarter : ils sont utiles et leurs définitions du 02/08 tiennent. |

---

## C. Sections 2 et 3 (jargon technique, agricole, forestier, biodiversité)

### C.1 — Sourcés par la loi

| Terme | Définition proposée | Occurrence | Source vérifiée |
|---|---|---|---|
| `neutralité carbone` | Équilibre, sur le territoire national, entre les émissions de gaz à effet de serre produites par les activités humaines et celles absorbées par les puits. La loi fixe à la France l'objectif de l'atteindre en 2050. | `eco-planification-01`, `eco-energie-01` | **N1** code de l'énergie, art. L. 100-4 (I, 1°) — `…/LEGIARTI000047717642` (en vigueur). L'article donne la définition mot pour mot. |
| `obsolescence programmée` | Pratique interdite par le code de la consommation, définie comme le recours à des techniques, y compris logicielles, par lesquelles le responsable de la mise sur le marché d'un produit vise à en réduire délibérément la durée de vie. | `lfi-dechets-01`, `eco-dechets-02` | **N1** code de la consommation, art. L. 441-2 — `…/LEGIARTI000044330817` (en vigueur) |
| `indices de réparabilité` | Note communiquée à l'achat de certains équipements électriques et électroniques, destinée à informer le consommateur sur la capacité à réparer le produit. | `eco-dechets-06` | **N1** code de l'environnement, art. L. 541-9-2 (I) — `…/LEGIARTI000041555848` (en vigueur) |
| `indice de durabilité` | Note communiquée à l'achat de certains produits, qui prolonge l'indice de réparabilité en informant le consommateur sur la durabilité de l'équipement. | `lfi-dechets-05` | **N1** même article L. 541-9-2 (l'indice de durabilité y figure explicitement) |
| `indices de durabilité` | (même définition, forme au pluriel d'un autre verbatim) | `eco-dechets-01` | idem |
| `précarité énergétique` | Situation, définie par la loi, d'une personne qui éprouve dans son logement des difficultés particulières à disposer de la fourniture d'énergie nécessaire à la satisfaction de ses besoins élémentaires, en raison de l'inadaptation de ses ressources ou de ses conditions d'habitat. | `lfi-renovation-02`, `eco-renovation-02` | **N1** loi n° 90-449 du 31 mai 1990, art. 11-4 — `https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006075926` (texte en vigueur ; la phrase citée est reprise mot pour mot de l'article). ⚠️ L'URL pointe la loi entière : l'éditeur peut préférer l'ancre de l'article, non fournie par l'API. |

### C.2 — Sourcés par une page ministérielle ou d'établissement public

| Terme | Définition proposée | Occurrence | Source vérifiée |
|---|---|---|---|
| `matériaux biosourcés` | Matériaux de construction issus de la matière vivante : bois, paille, chanvre, ouate de cellulose, laine. | `lfi-renovation-08`, `eco-renovation-04` | **N1** ministère, « Matériaux de construction biosourcés et géosourcés » — `https://www.ecologie.gouv.fr/politiques-publiques/materiaux-construction-biosources-geosources` (« biosourcé » 116 fois, « chanvre », « paille » présents) |
| `géosourcés` | Se dit des matériaux de construction issus du sol et peu transformés, au premier rang desquels la terre crue. | `eco-renovation-04` | **N1** même page (« géosourcé » 28 fois, « terre crue » 10 fois) |
| `réseaux de chaleur` | Canalisations distribuant, depuis une chaufferie commune, de la chaleur à plusieurs bâtiments. | `eco-renovation-03` | **N1** ministère, « Réseaux de chaleur » — `https://www.ecologie.gouv.fr/politiques-publiques/reseaux-chaleur` |
| `PFAS` | Substances per- et polyfluoroalkylées : famille de composés chimiques employés pour leurs propriétés antiadhésives et imperméabilisantes, et qui se dégradent très peu dans l'environnement. | `eco-toxiques-01` | **N1** Anses, « PFAS : des substances chimiques très persistantes » — `https://www.anses.fr/fr/content/pfas-substances-chimiques-persistantes` (les quatre faits sont dans la page) |
| `néonicotinoïdes` | Famille d'insecticides dont l'usage en agriculture est interdit en France depuis 2018, avec des dérogations ; les effets sur les insectes pollinisateurs sont au cœur de ces restrictions. | `lfi-pesticides-01`, `eco-pesticides-01` | **N1** Anses, « Les néonicotinoïdes » — `https://www.anses.fr/fr/content/les-neonicotinoides` (terme 65 fois ; « insecticide », « 2018 », « interdit », « dérogation », « pollinisateurs » présents) |
| `retrait-gonflement d’argiles` | Phénomène par lequel des sols argileux se rétractent en période de sécheresse et gonflent lorsqu'ils se réhumidifient, ce qui fissure les constructions. | `eco-adaptation-03` | **N1** Géorisques, « Retrait-gonflement des argiles » — `https://www.georisques.gouv.fr/minformer-sur-un-risque/retrait-gonflement-des-argiles` (terme 21 fois, « sécheresse » et « fissur… » présents). ⚠️ La page écrit « des argiles », le verbatim « d'argiles » : c'est la graphie du verbatim qui doit figurer dans `terme`. |

### C.3 — Sourcés par le glossaire de l'Office français de la biodiversité — **à valider par l'éditeur**

L'OFB publie un glossaire de 240 entrées à l'adresse `https://ofb.gouv.fr/glossaire`. Le domaine est
honnête (vrais 404 sur page absente) et les définitions sont **bien présentes dans le HTML servi**.
⚠️ **Réserve loyale** : elles y sont sous forme d'un dictionnaire JavaScript, la page n'affichant la
liste qu'une fois le script exécuté. Le lecteur avec un navigateur ordinaire trouvera bien le terme ;
un lecteur sans JavaScript verra une page vide. Ce n'est pas un lien mort, mais ce n'est pas non plus
une ancre directe — **à l'éditeur de trancher** s'il accepte ce niveau de traçabilité.

| Terme | Définition proposée | Occurrence |
|---|---|---|
| `reméandrage` | Travaux redonnant à une rivière rectifiée son tracé sinueux d'origine, pour ralentir le courant et restaurer les milieux. | `eco-eau-ressource-01` |
| `bassins versants` | Territoire sur lequel toutes les eaux de pluie convergent vers un même cours d'eau et, finalement, un même exutoire. | `lfi-eau-ressource-01` |
| `pélagique` | Qui concerne la pleine eau, entre la surface et le fond, par opposition au fond marin. | `eco-ocean-02` |
| `services écosystémiques` | Bénéfices que les humains tirent du fonctionnement des milieux naturels : pollinisation, épuration de l'eau, stockage du carbone, protection contre l'érosion. | `eco-forets-05` |
| `convention de Ramsar` | Traité international de 1971 pour la conservation des zones humides, par lequel chaque État désigne des sites qu'il s'engage à gérer durablement. | `eco-biodiversite-04` |

Note : `services écosystémiques` est **aussi** employé par le code de l'environnement (art. L. 110-1,
I : « Ce patrimoine génère des services écosystémiques ») — mais l'article emploie l'expression sans
la définir. Le glossaire OFB la définit ; l'article ne fait que l'attester.

### C.4 — ❓ maintenus en sections 2 et 3, par motif

**a) Le terme du verbatim est un nom d'usage que la source ne porte pas.**
`polluants éternels` (la page Anses sur les PFAS, retenue ci-dessus, ne contient **pas** l'expression
« polluants éternels » — 0 occurrence, vérifié dans le HTML complet) · `fast fashion` ·
`passoires thermiques` (absent de la page « Rénovation énergétique » du ministère, testée : 0
occurrence) · `low tech`, `low-tech` · `limites planétaires` · `mal-adaptation`.

**b) La page candidate porte le terme mais pas les faits de la définition.**
`glyphosate` (page Anses « Glyphosate » : le mot y est 16 fois, mais ni « herbicide » ni la date de
2033 — la définition serait sourcée à moitié) · `prosulfocarbe` (fiche `ephy.anses.fr` : terme
présent, fonction herbicide non trouvée dans le HTML) · `perturbateurs endocriniens` (page Anses :
terme présent 8 fois, mais aucune mention du système hormonal — le cœur de la définition resterait
sans source) · `dumping` et `clause de sauvegarde` / `clauses de sauvegarde` (page « Trade defence »
de la Commission : « dumping » 12 fois et « safeguard » 3 fois, mais la définition par le prix
inférieur à la valeur normale n'y est pas, et la page est en anglais).

**c) Aucune page de niveau 1-2 vérifiée n'a été trouvée dans cette passe.**
`puits carbone` (l'art. L. 100-4 mentionne « les puits de gaz à effet de serre » sans les définir) ·
`écoconception` · `électrification des usages` · `communautés énergétiques renouvelables` ·
`propulsion vélique` · `hydrolien` · `hydrogène bas carbone` · `électrolyse` · `empreinte matières` ·
`empreinte hydrique` · `tri à la source` · `bois d’œuvre` · `coupes rases` (page « gestion durable
des forêts » du ministère testée : 0 occurrence) · `libre évolution` · `dessouchage` ·
`forêts irrégulières` · `essences` · `maillage bocager` · `Label Haie` · `prairies permanentes` ·
`pastoralisme` · `sylvopastoralisme` · `épizooties` · `tourteaux de soja` · `engrais azotés` ·
`chlordécone` · `antibiorésistance` · `débits biologiques` (le code de l'environnement parle de
« débit minimal », art. L. 214-18, en vigueur — **autre nom**, donc même défaut de surnom) ·
`désimperméabilisation` · `état écologique et chimique` · `adduction d’eau potable` ·
`régies publiques` · `aires marines protégées` (absent du glossaire OFB, vérifié) ·
`chalutage de fond` · `arts dormants` · `dispositifs de concentration de poissons` · `algoculture` ·
`acidification des océans` · `orpaillage` · `trait de côte`.

Ces termes ne sont **pas** à écarter : leurs définitions du 02/08 restent valables, il leur manque
une URL vérifiée. Le travail restant est mécanique, pas conceptuel.

---

## D. Section 5 — termes dont le sens est disputé : **documentés, non tranchés**

Consigne respectée : je n'arbitre pas. Ce que j'apporte ici, c'est de la matière vérifiée pour que
l'arbitrage de l'éditeur se fasse sur pièce plutôt qu'à l'estime.

**écocide** — occurrence `lfi-biodiversite-05`
- **Ce qui a changé** : la source demandée le 02/08 est désormais lisible (voir §A). Le droit
  existant est établi, articles à l'appui : L. 231-1 à L. 231-3 du code de l'environnement, tous
  **en vigueur** depuis le 2021-08-25. L'article L. 231-3 dit « Constitue un écocide… », qualifie
  l'infraction de **délit** et porte la peine à dix ans.
- **Ce qui reste à l'éditeur** : publier ou non une entrée sur un terme que la mesure demande
  précisément de faire changer de nature (du délit au crime). Ma proposition de définition (§A) se
  borne à l'état du droit ; une autre rédaction est possible, mais elle ne devra ni suggérer que la
  demande est superflue (« ça existe déjà ») ni qu'elle est nécessaire.

**méga-bassines** — occurrences `lfi-eau-ressource-07`, `eco-eau-ressource-01`
- ❓ **maintenu.** Motif : la définition du 02/08 repose sur une **double attribution d'usage** (le
  terme est employé par les opposants ; l'administration parle de « réserves de substitution »).
  C'est cette double attribution qui la rend neutre — et c'est elle qui n'est pas sourçable : le
  portail des six agences de l'eau (`lesagencesdeleau.fr`, testé, HTTP 200) ne contient **ni**
  « réserve de substitution » **ni** « retenue de substitution ». Sourcer la moitié de la phrase
  ferait pencher la définition d'un côté ; je ne la propose donc pas.
- Rappel de fait (déjà vérifié le 02/08, toujours vrai) : « retenue de substitution » n'apparaît
  dans aucun verbatim ; `eco-eau-ressource-01` écrit « retenue artificielle ».

**bifurcation écologique** — occurrences `lfi-ocean-05`, `lfi-investissement-02`,
`lfi-investissement-04`, `lfi-emplois-transition-02`
- ❓ **maintenu**, et recommandation du 02/08 inchangée : la seule source possible est le programme
  lui-même, ce qui affaiblit la traçabilité. Si l'éditeur retient l'entrée, elle devrait être
  limitée aux mesures LFI par le champ `contextes` — nommer un parti dans une définition du
  glossaire général est une décision éditoriale, pas une décision d'agent.

**planification écologique** — 6 occurrences (`lfi-planification-02`, `-04`, `-11`, `-13`, `-15`,
`eco-planification-02`)
- **Nouveauté : une source de niveau 1 existe.** Le décret n° 2022-990 du 7 juillet 2022 **relatif
  au secrétariat général à la planification écologique** (`LEGITEXT000046027124`, **en vigueur**,
  signé Élisabeth Borne) porte le terme dans son intitulé et, à l'article 1er, décrit ce que fait
  cette administration : « Il est créé un secrétariat général à la planification écologique qui
  exerce, sous l'autorité du Premier ministre » la coordination de « l'élaboration des stratégies
  nationales en matière de climat, d'énergie, de biodiversité et d'économie circulaire », la
  veille sur leur mise en œuvre et leur évaluation.
  URL : `https://www.legifrance.gouv.fr/loda/id/LEGITEXT000046027124`
- **Définition sourçable** (resserrée sur ce que le décret porte) : « Terme employé aussi bien par
  les programmes que par l'administration : un secrétariat général à la planification écologique,
  placé sous l'autorité du Premier ministre, coordonne depuis 2022 l'élaboration des stratégies
  nationales en matière de climat, d'énergie, de biodiversité et d'économie circulaire et veille à
  leur mise en œuvre. »
  La formulation générale du 02/08 (« fixer des objectifs datés et chiffrés puis les répartir entre
  secteurs et territoires ») n'est **pas** dans le décret : elle a été retirée.
- **Ce qui reste à l'éditeur** : la publier ou non. L'argument pour est la cohérence avec la
  décision déjà prise sur le label de l'axe `eco-planification` (terme administratif, conservé,
  cf. mémoire projet). L'argument contre est qu'une entrée de glossaire sur un mot repris par un
  programme peut être lue comme un adoubement. Je documente, je ne tranche pas.

---

## E. Blocs JSON prêts à fusionner

**44 entrées au total**, en **trois blocs** parce qu'elles n'engagent pas la même décision.
Contrôles passés sur les trois blocs (script, sur les données réelles) :
- chacune produit **au moins une correspondance** dans un verbatim de `data/candidats/*.json`, avec
  la regex exacte de `Verbatim.tsx` ;
- **aucun doublon** avec les 95 entrées de `data/glossaire.json`, ni doublon interne ;
- chaque `source_url` a été ouverte et **le terme comme les faits affirmés ont été retrouvés dans
  le HTML complet** — sauf les URL Légifrance, qui répondent 403 aux robots et dont le contenu a été
  lu par l'API PISTE (article contrôlé **en vigueur**).

### E.1 — Bloc principal (37 entrées) — sources de niveau 1-2 vérifiées

```json
[
  { "terme": "PCAET", "definition": "Plan climat-air-énergie territorial : document que doivent adopter les intercommunalités de plus de 20 000 habitants ; il fixe leurs objectifs pour atténuer le changement climatique et s'y adapter, ainsi que le programme d'actions correspondant.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051732467" },
  { "terme": "Plan Climat Air-Énergie Territorial", "definition": "Document que doivent adopter les intercommunalités de plus de 20 000 habitants ; il fixe leurs objectifs pour atténuer le changement climatique et s'y adapter, ainsi que le programme d'actions correspondant.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051732467" },
  { "terme": "ADEME", "definition": "Agence de l'environnement et de la maîtrise de l'énergie : établissement public de l'État à caractère industriel et commercial, qui intervient notamment sur la lutte contre la pollution de l'air, la prévention et la gestion des déchets, la transition vers l'économie circulaire, la remise en état des sols pollués et les économies d'énergie.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047303590" },
  { "terme": "SAFER", "definition": "Sociétés d'aménagement foncier et d'établissement rural : sociétés qui œuvrent à la protection des espaces agricoles, naturels et forestiers, favorisent l'installation et le maintien d'exploitations et assurent la transparence du marché foncier rural ; elles peuvent acquérir des terres pour les rétrocéder.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054139665" },
  { "terme": "office foncier solidaire", "definition": "Les « organismes de foncier solidaire » sont des organismes sans but lucratif, agréés par l'État, qui restent propriétaires du terrain et n'en cèdent que le bâti par un bail de longue durée, pour des logements destinés à des personnes aux ressources modestes.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045212105" },
  { "terme": "EPFL", "definition": "Établissements publics fonciers locaux : structures créées par des collectivités qui mettent en place des stratégies foncières — acheter et porter du foncier — au service du logement, de la lutte contre l'étalement urbain et de la limitation de l'artificialisation des sols.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048250483" },
  { "terme": "SDIS", "definition": "Service départemental d'incendie et de secours : établissement public créé dans chaque département, qui comprend le corps départemental de sapeurs-pompiers et s'organise en centres d'incendie et de secours.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044374544" },
  { "terme": "PPR", "definition": "Plan de prévention des risques naturels prévisibles : document élaboré par l'État pour les inondations, mouvements de terrain, avalanches, incendies de forêt, séismes, éruptions volcaniques, tempêtes ou cyclones ; il délimite les zones exposées et y interdit ou y conditionne les constructions.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047299303" },
  { "terme": "PPRi", "definition": "Plan de prévention des risques d'inondation : la déclinaison, pour le risque d'inondation, des plans de prévention des risques naturels prévisibles élaborés par l'État, qui délimitent les zones exposées et y interdisent ou y conditionnent les constructions.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047299303" },
  { "terme": "PGRI", "definition": "Plan de gestion des risques d'inondation : plan arrêté par l'État à l'échelle de chaque bassin ou groupement de bassins, qui fixe les objectifs de gestion des risques d'inondation et les mesures pour les atteindre.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051561770" },
  { "terme": "aires d’alimentation de captage", "definition": "Surfaces sur lesquelles l'eau qui s'infiltre alimente un point de captage d'eau ; l'autorité administrative peut y délimiter des périmètres et y arrêter un programme d'actions encadrant les activités qui s'y déroulent.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046783884" },
  { "terme": "Redevance pour Pollution Diffuse", "definition": "Redevance pour pollutions diffuses : somme due à l'agence de l'eau par ceux qui achètent des produits phytopharmaceutiques ou des semences traitées ; son montant dépend de la masse des substances contenues et de leur classe de danger.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051217901" },
  { "terme": "accise", "definition": "Impôt indirect qui frappe des produits limitativement énumérés par la loi : produits énergétiques et électricité, boissons alcooliques et alcool, produits du tabac.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044604025" },
  { "terme": "tarifs réglementés", "definition": "Tarifs réglementés de vente d'électricité : prix proposés de façon motivée par la Commission de régulation de l'énergie, acquis sauf opposition des ministres chargés de l'économie et de l'énergie, et publiés au Journal officiel.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051213786" },
  { "terme": "marché carbone", "definition": "Système où un plafond d'émissions est fixé puis réparti en quotas que les installations concernées peuvent s'échanger.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/marches-du-carbone" },
  { "terme": "ETS2", "definition": "Deuxième système européen d'échange de quotas d'émission (SEQE-UE 2) : il étend le prix du carbone aux carburants utilisés pour le chauffage des bâtiments et le transport routier, à partir de 2028.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/marches-du-carbone-seqe-ue-2" },
  { "terme": "Trajectoire d’Adaptation au Changement Climatique", "definition": "Nom usuel de la « trajectoire de réchauffement de référence pour l'adaptation au changement climatique » (TRACC) : hypothèse de réchauffement retenue par l'État pour dimensionner les politiques d'adaptation, allant jusqu'à + 4 °C en 2100 en France métropolitaine.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/trajectoire-rechauffement-reference-ladaptation-changement-climatique-tracc" },
  { "terme": "NODU", "definition": "« Nombre de doses unités » : indicateur qui suit l'usage des produits phytopharmaceutiques en France à partir des ventes déclarées par les distributeurs, et qui sert au suivi du plan Écophyto.", "source_url": "https://agriculture.gouv.fr/indicateurs-des-ventes-de-produits-phytopharmaceutiques" },
  { "terme": "zones humides", "definition": "Terrains, exploités ou non, habituellement inondés ou gorgés d'eau douce, salée ou saumâtre de façon permanente ou temporaire, ou dont la végétation est dominée par des plantes qui aiment l'eau pendant au moins une partie de l'année. C'est la définition qu'en donne le code de l'environnement.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000052084005" },
  { "terme": "principe de précaution", "definition": "Principe inscrit au code de l'environnement : l'absence de certitudes, compte tenu des connaissances scientifiques et techniques du moment, ne doit pas retarder l'adoption de mesures effectives et proportionnées visant à prévenir un risque de dommages graves et irréversibles à l'environnement, à un coût économiquement acceptable.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975398" },
  { "terme": "principe pollueur-payeur", "definition": "Principe inscrit au code de l'environnement : les frais résultant des mesures de prévention, de réduction de la pollution et de lutte contre celle-ci doivent être supportés par le pollueur.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975398" },
  { "terme": "partie civile", "definition": "Statut de la personne qui, s'estimant lésée par une infraction, se joint aux poursuites pénales et demande devant le juge pénal des dommages-intérêts correspondant au préjudice qui lui a été causé.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006576523" },
  { "terme": "travail détaché", "definition": "Situation d'un salarié employé par une entreprise établie hors de France et envoyé travailler temporairement sur le territoire national, son contrat de travail avec cet employeur subsistant pendant toute la durée du détachement.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000018764665" },
  { "terme": "droit de préemption", "definition": "Droit institué par la loi au profit d'une personne publique ou d'un organisme désigné, qui lui permet d'acquérir un bien mis en vente en vue d'opérations menées dans l'intérêt général ou pour constituer des réserves foncières.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045211258" },
  { "terme": "neutralité carbone", "definition": "Équilibre, sur le territoire national, entre les émissions de gaz à effet de serre produites par les activités humaines et celles absorbées par les puits. La loi fixe à la France l'objectif de l'atteindre en 2050.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047717642" },
  { "terme": "obsolescence programmée", "definition": "Pratique interdite par le code de la consommation, définie comme le recours à des techniques, y compris logicielles, par lesquelles le responsable de la mise sur le marché d'un produit vise à en réduire délibérément la durée de vie.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044330817" },
  { "terme": "indices de réparabilité", "definition": "Notes communiquées à l'achat de certains équipements électriques et électroniques, destinées à informer le consommateur sur la capacité à réparer le produit.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041555848" },
  { "terme": "indice de durabilité", "definition": "Note communiquée à l'achat de certains produits, qui prolonge l'indice de réparabilité en informant le consommateur sur la durabilité de l'équipement.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041555848" },
  { "terme": "indices de durabilité", "definition": "Notes communiquées à l'achat de certains produits, qui prolongent l'indice de réparabilité en informant le consommateur sur la durabilité de l'équipement.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041555848" },
  { "terme": "précarité énergétique", "definition": "Situation, définie par la loi, d'une personne qui éprouve dans son logement des difficultés particulières à disposer de la fourniture d'énergie nécessaire à la satisfaction de ses besoins élémentaires, en raison de l'inadaptation de ses ressources ou de ses conditions d'habitat.", "source_url": "https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006075926" },
  { "terme": "matériaux biosourcés", "definition": "Matériaux de construction issus de la matière vivante : bois, paille, chanvre, ouate de cellulose, laine.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/materiaux-construction-biosources-geosources" },
  { "terme": "géosourcés", "definition": "Se dit des matériaux de construction issus du sol et peu transformés, au premier rang desquels la terre crue.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/materiaux-construction-biosources-geosources" },
  { "terme": "réseaux de chaleur", "definition": "Canalisations distribuant, depuis une chaufferie commune, de la chaleur à plusieurs bâtiments.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/reseaux-chaleur" },
  { "terme": "PFAS", "definition": "Substances per- et polyfluoroalkylées : famille de composés chimiques employés pour leurs propriétés antiadhésives et imperméabilisantes, et qui se dégradent très peu dans l'environnement.", "source_url": "https://www.anses.fr/fr/content/pfas-substances-chimiques-persistantes" },
  { "terme": "néonicotinoïdes", "definition": "Famille d'insecticides dont l'usage en agriculture est interdit en France depuis 2018, avec des dérogations ; les effets sur les insectes pollinisateurs sont au cœur de ces restrictions.", "source_url": "https://www.anses.fr/fr/content/les-neonicotinoides" },
  { "terme": "retrait-gonflement d’argiles", "definition": "Phénomène par lequel des sols argileux se rétractent en période de sécheresse et gonflent lorsqu'ils se réhumidifient, ce qui fissure les constructions.", "source_url": "https://www.georisques.gouv.fr/minformer-sur-un-risque/retrait-gonflement-des-argiles" },
  { "terme": "CETA", "definition": "Accord économique et commercial global entre l'Union européenne et le Canada, entré en application provisoire le 21 septembre 2017.", "source_url": "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/canada_fr" }
]
```

### E.2 — Bloc « glossaire OFB » (5 entrées) — à valider si l'éditeur accepte la source

Même qualité de définition, mais la source est une page dont le contenu n'apparaît qu'avec
JavaScript actif (voir §C.3). À fusionner **seulement** si ce niveau de traçabilité convient.

```json
[
  { "terme": "reméandrage", "definition": "Travaux redonnant à une rivière rectifiée son tracé sinueux d'origine, pour ralentir le courant et restaurer les milieux.", "source_url": "https://ofb.gouv.fr/glossaire" },
  { "terme": "bassins versants", "definition": "Territoire sur lequel toutes les eaux de pluie convergent vers un même cours d'eau et, finalement, un même exutoire.", "source_url": "https://ofb.gouv.fr/glossaire" },
  { "terme": "pélagique", "definition": "Qui concerne la pleine eau, entre la surface et le fond, par opposition au fond marin.", "source_url": "https://ofb.gouv.fr/glossaire" },
  { "terme": "services écosystémiques", "definition": "Bénéfices que les humains tirent du fonctionnement des milieux naturels : pollinisation, épuration de l'eau, stockage du carbone, protection contre l'érosion.", "source_url": "https://ofb.gouv.fr/glossaire" },
  { "terme": "convention de Ramsar", "definition": "Traité international de 1971 pour la conservation des zones humides, par lequel chaque État désigne des sites qu'il s'engage à gérer durablement.", "source_url": "https://ofb.gouv.fr/glossaire" }
]
```

### E.3 — Bloc « arbitrage éditorial » (2 entrées) — section 5, à trancher par l'éditeur

Ces deux-là sont **sourcés**, ce qui n'était pas le cas le 02/08 ; ce qui reste ouvert n'est pas la
source mais l'opportunité de publier (voir §D). Je ne tranche pas.

```json
[
  { "terme": "écocide", "definition": "Terme désignant les atteintes les plus graves et durables à l'environnement. Le code de l'environnement qualifie d'écocide, depuis 2021, les pollutions et atteintes graves commises de manière intentionnelle et en fait un délit puni de dix ans d'emprisonnement ; il n'existe pas de crime d'écocide en droit français.", "source_url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043961215" },
  { "terme": "planification écologique", "definition": "Terme employé aussi bien par les programmes que par l'administration : un secrétariat général à la planification écologique, placé sous l'autorité du Premier ministre, coordonne depuis 2022 l'élaboration des stratégies nationales en matière de climat, d'énergie, de biodiversité et d'économie circulaire et veille à leur mise en œuvre.", "source_url": "https://www.legifrance.gouv.fr/loda/id/LEGITEXT000046027124" }
]
```

---

## F. Bilan, effets d'affichage à surveiller, et ce que je n'ai pas fait

### F.1 — Bilan chiffré de la passe

| | Termes |
|---|---|
| ❓ repris (sections 1.3, 2, 3, 4, 5 du 02/08) | ~120 |
| **Sourcés et proposés ici** | **44** (37 + 5 sous réserve OFB + 2 sous arbitrage) |
| dont sourcés par l'**API Légifrance** (article de code ou texte, contrôlé en vigueur) | 28 |
| dont sourcés par une page ministérielle ou d'établissement public vérifiée | 11 |
| dont sourcés par une institution européenne | 1 (`CETA`) |
| **❓ maintenus**, avec motif exact | le reste — voir §A.2, §B.1, §C.4, §D |

Ce que l'API a réellement débloqué : **la section 4 n'est plus « entièrement ❓ »** (7 termes sur 18
sourcés, dont `écocide`), et une large part de la section 1.3 passe de « piste Légifrance » à
« article en vigueur avec URL stable ».

### F.2 — Les trois motifs de ❓ qui reviennent (utile pour la prochaine passe)

1. **Le nom du verbatim n'est pas le nom du droit.** `versement mobilité`, `Contribution Climat
   Énergie`, `taxe espace naturel sensible`, `loi Littoral`, `décret Montebourg`, `tarif bleu`,
   `contrat pour différence`, `débits biologiques`. Dans tous ces cas le **dispositif** est
   sourçable, le **nom** ne l'est pas — et c'est le nom que le lecteur va survoler. La leçon
   « taxe Zucman » s'applique telle quelle. Deux issues possibles pour l'éditeur : renommer l'entrée
   d'après le nom officiel (au risque qu'elle ne se déclenche plus, le repérage étant littéral), ou
   trouver une page qui porte les deux.
2. **La page est en anglais et ne porte pas le terme français.** `fonds social pour le climat`,
   `INN`, `dumping`, `clause de sauvegarde`. La version française de référence est sur EUR-Lex, qui
   répond **HTTP 202** (défi anti-robot) à toute requête automatisée : ce n'est **pas** un lien
   mort, c'est une page invérifiable par un agent. À vérifier par un humain dans un navigateur.
3. **Le domaine est fermé aux outils.** `ademe.fr` (403 Cloudflare), `ramsar.org` (403),
   `info.gouv.fr` / `gouvernement.fr` (403), `isa.org.jm` (redirection hors sujet). S'ajoutent aux
   domaines déjà écartés le 02/08 (`vie-publique.fr`, `economie.gouv.fr`, `interieur.gouv.fr`,
   `budget.gouv.fr`). **Aucun de ces cas ne justifie d'écarter le terme** : il justifie de le
   laisser ❓.

### F.3 — Effets d'affichage vérifiés sur les entrées proposées

- **Sigle accolé à son développé** (règle ajoutée à `Verbatim.tsx`) : un seul couple est concerné,
  `Plan Climat Air-Énergie Territorial (PCAET)` dans `eco-fisc-verte-6`. `estSigleDe` reconnaît bien
  PCAET comme le sigle du développé (les mots vides ne comptent pas) : **le sigle sera muet là**,
  la bulle s'affichant sur la forme longue. C'est le comportement voulu ; proposer les deux formes
  reste utile si le sigle apparaît seul ailleurs plus tard.
- Les autres sigles proposés (`SDIS`, `EPFL`, `PPR`, `PPRi`, `PGRI`, `SAFER`, `ADEME`, `ETS2`,
  `NODU`, `PFAS`, `CETA`) sont accolés dans le verbatim à un développé **qui n'entre pas au
  glossaire** : la règle de mise en sourdine ne s'applique pas, ils resteront déclencheurs.
- **`PPR` / `PPRi`** : aucun conflit. Le tri par longueur décroissante fait passer `PPRi` d'abord, et
  la frontière de mot Unicode empêche de toute façon `PPR` de surligner l'intérieur de `PPRi`.
- **`droit de préemption`** couvre trois mesures aux régimes différents (forêt, industrie, foncier) :
  la définition a été écrite générique **exprès**. Si l'éditeur la juge trop large, le champ
  `contextes` est l'outil prévu.
- **`accise`**, **`pélagique`**, **`géosourcés`** : mots rares, aucun homographe repéré dans le
  corpus. **`marché carbone`** n'existe qu'au singulier dans le corpus (`eco-energie-prix-02`).

### F.4 — À remonter à l'éditeur

1. **`partie civile` est sourcé à un article dont l'abrogation est programmée** (code de procédure
   pénale, art. 418, `ABROGE_DIFF` jusqu'au 2029-01-01). L'entrée est publiable aujourd'hui mais
   devra être resourcée. C'est le genre de dette qu'il vaut mieux dater tout de suite.
2. **Le glossaire OFB (bloc E.2) est une décision de niveau de preuve, pas une décision de contenu.**
   Le contenu est bon et le domaine est honnête ; c'est le rendu JavaScript qui est en cause. Si le
   choix est « non », les cinq termes restent ❓ sans que les définitions soient perdues.
3. **`npm run verif-liens -- --glossaire` va signaler des faux positifs** si les entrées Légifrance
   sont fusionnées : `legifrance.gouv.fr` renvoie 403 à toute requête automatisée, même quand la page
   existe. Il faudrait soit exclure ce domaine du contrôle, soit le faire passer par l'API — c'est
   déjà la règle écrite en tête de `scripts/legifrance.mjs`.
4. **Le point du 02/08 sur les 13 sources vie-publique.fr du glossaire existant reste ouvert.**
   Rien n'a changé de ce côté : le domaine est toujours invérifiable par un agent.

### F.5 — Ce que je n'ai pas fait

- Aucune modification de `data/glossaire.json`, `data/candidats/*.json`, ni d'aucun fichier de
  données ou de code. Ce rapport est le seul fichier créé.
- Aucun commit.
- Aucun verbatim touché, aucun sens de mesure modifié.
- Aucune URL citée sans avoir été ouverte, ni aucune définition écrite au-delà de ce que sa source
  affirme : les faits que les sources ne portaient pas ont été **retirés** des définitions, et le
  retrait est signalé à chaque fois (`travail détaché`, `droit de préemption`, `partie civile`,
  `ETS2`, `Trajectoire d’Adaptation au Changement Climatique`, `néonicotinoïdes`, `NODU`,
  `planification écologique`).
- Aucun terme de la section 5 tranché : `méga-bassines` et `bifurcation écologique` restent ❓ et
  hors bloc JSON ; `écocide` et `planification écologique` sont sourcés mais placés dans un bloc à
  part, pour que la décision de publier reste explicite.
