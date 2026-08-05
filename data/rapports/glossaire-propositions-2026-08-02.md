# Glossaire — propositions issues du chantier « Écologie, climat & énergie »

**Date :** 2026-08-02
**Périmètre :** les 266 mesures ajoutées par le commit `950ebd5` à `data/candidats/lfi.json` et
`data/candidats/ecologistes.json` — et elles seules. Les 171 mesures antérieures (fiscalité,
justice) ont déjà eu leur passage glossaire.
**Statut :** propositions. Rien n'a été écrit dans `data/glossaire.json` ni dans aucun fichier de
données. L'éditeur arbitre, reformule et intègre ce qu'il retient.

## Méthode appliquée

- Chaque terme proposé a été **vérifié par script** contre les verbatims réels des deux fichiers
  candidats, avec **la regex exacte de `src/components/Verbatim.tsx`**
  (`(?<![\p{L}\p{N}])(terme)(?![\p{L}\p{N}])`, insensible à la casse). Un terme n'est proposé que
  s'il produit au moins une correspondance dans le lot des 266 ; l'id d'occurrence est indiqué.
- La **forme de surface compte** : le repérage est littéral, donc « agences de l'eau » (pluriel,
  apostrophe typographique `’`) ne se confond pas avec « agence de l'eau ». Les formes retenues
  ci-dessous sont celles qui apparaissent réellement dans le texte.
- Aucune URL n'est proposée sans avoir été **testée** (code HTTP). Les termes dont je n'ai pas pu
  confirmer une source de niveau 1-2 sont marqués **❓ à sourcer** plutôt que sourcés à
  l'approximation.
- Neutralité stricte : les définitions décrivent ce qu'est la chose. Les termes dont le sens est
  lui-même disputé (« écocide », « méga-bassines », « bifurcation écologique ») sont regroupés dans
  une section dédiée, définis par ce qu'ils désignent et avec attribution d'usage — ils ne sont pas
  tranchés ici.

## Note technique — la garde-fou « sigle < 3 lettres » a bougé

L'avertissement de ma procédure (« la correspondance n'impose pas de frontière de mot ») **n'est
plus exact** : `Verbatim.tsx` utilise désormais des lookarounds Unicode
`(?<![\p{L}\p{N}])…(?![\p{L}\p{N}])`. « IS » dans « prIS » ne surligne plus. J'ai malgré tout
respecté la consigne (aucun sigle de moins de 3 lettres proposé) ; l'éditeur peut vouloir mettre à
jour la procédure `.claude/agents/glossaire.md` en conséquence.

Deux effets de bord subsistent et sont signalés au cas par cas plus bas :
- un sigle de 3 lettres reste un **mot possible** dans une autre langue ou un autre sens
  (`REP`, `ORE`, `INN`, `CEE`) ;
- un terme polysémique reste polysémique (« essences » forestières vs « stations essences ») →
  candidat au champ `contextes`.

---

## 1. Sigles d'instruments publics

Ce sont eux qui rendent une mesure illisible : sans eux, la phrase ne veut rien dire.

### 1.1 — Sources confirmées

**Stratégie Nationale Bas Carbone**
- Définition proposée : « Feuille de route de la France pour réduire ses émissions de gaz à effet
  de serre. Elle fixe des plafonds d'émissions par période de cinq ans (les « budgets carbone ») et
  par grand secteur d'activité, jusqu'à l'objectif de neutralité carbone en 2050. »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/strategie-nationale-bas-carbone-snbc
- Occurrence : `eco-planification-02` (« Construire une quatrième Stratégie Nationale Bas Carbone (SNBC-4) »).
- Note : proposer **aussi** l'entrée `SNBC` (le sigle apparaît seul dans « SNBC-4 » ; le tiret n'est
  ni lettre ni chiffre, la frontière de mot est donc franchie et le surlignage fonctionne).

**Planification Pluriannuelle de l'Énergie**
- Définition proposée : « Document de programmation, adopté par décret, qui fixe pour deux périodes
  successives les objectifs de production et de consommation de chaque source d'énergie en France
  (nucléaire, renouvelables, fossiles) et les moyens d'y parvenir. Son nom officiel est
  « programmation pluriannuelle de l'énergie » (PPE). »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/programmations-pluriannuelles-lenergie-ppe
- Occurrence : `eco-planification-01` (« la troisième Planification Pluriannuelle de l'Énergie (PPE3) »).
- Note : le verbatim écrit « Planification » là où le texte officiel dit « Programmation ». Le
  verbatim ne se corrige pas (garde-fou n°1) — c'est précisément un cas où la définition rend
  service en donnant le nom officiel. `PPE` seul ne produit aucune correspondance dans le lot ;
  proposer `PPE3` en second si l'on veut couvrir le sigle.

**ICPE**
- Définition proposée : « Installation classée pour la protection de l'environnement : usine,
  élevage, entrepôt ou carrière dont l'activité présente des risques ou des nuisances, et qui est à
  ce titre soumise à déclaration, enregistrement ou autorisation préfectorale, puis à des
  inspections. »
- Source (niveau 1) : https://www.service-public.fr/professionnels-entreprises/vosdroits/F33414
- Occurrences : `lfi-toxiques-06`, `eco-toxiques-08`.
- Note : proposer aussi la forme développée « Installations classées pour la protection de
  l'environnement », qui apparaît telle quelle dans les deux mesures.

**MACF**
- Définition proposée : « Mécanisme d'ajustement carbone aux frontières : dispositif de l'Union
  européenne qui fait payer, à l'importation de certains produits (acier, ciment, aluminium,
  engrais, électricité, hydrogène), un prix du carbone équivalent à celui supporté par les
  producteurs européens. »
- Source (niveau 1-2, Commission européenne) : https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_fr
- Occurrences : `eco-fisc-verte-3`, `eco-fisc-verte-7`.
- Note : la forme développée apparaît elle aussi, avec deux casses différentes
  (« Mécanisme d'ajustement carbone aux frontières » en `eco-fisc-verte-3`, « mécanisme… » en
  `eco-fisc-verte-7`) — une seule entrée suffit, le repérage est insensible à la casse.

**Certificats d'Economie d'Energie (CEE)**
- Définition proposée : « Dispositif qui oblige les vendeurs d'énergie (électricité, gaz,
  carburants) à financer des économies d'énergie chez leurs clients — isolation, chaudière,
  éclairage — sous peine de pénalité. Les travaux réalisés donnent des certificats qui prouvent
  cette obligation remplie. »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/dispositif-certificats-deconomies-denergie
- Occurrences : `eco-renovation-01`, `eco-investissement-03`.
- Note : la forme du verbatim est « Certificats d'Economie d'Energie » (sans accents sur
  « Economie » / « Energie ») — c'est cette forme-là qu'il faut mettre dans `terme`, sinon rien ne
  se surligne. `CEE` seul apparaît en `eco-renovation-01` (« aides CEE », « CEE précarité »).

**diagnostic de performance énergétique**
- Définition proposée : « Document obligatoire lors de la vente ou de la location d'un logement,
  qui estime sa consommation d'énergie et ses émissions de gaz à effet de serre et lui attribue une
  étiquette de A à G. »
- Source (niveau 1) : https://www.service-public.fr/particuliers/vosdroits/F16096
- Occurrence : `eco-renovation-02`. Proposer aussi `DPE` (le sigle y figure entre parenthèses).

**MaPrimeRénov'**
- Définition proposée : « Aide financière de l'État à la rénovation énergétique des logements,
  versée par l'Agence nationale de l'habitat ; son montant dépend des revenus du ménage et des
  travaux réalisés. »
- Source (niveau 1) : https://www.service-public.fr/particuliers/vosdroits/F35083
- Occurrence : `eco-renovation-02`.

**Éco-prêt à taux zéro**
- Définition proposée : « Prêt sans intérêts, distribué par les banques et pris en charge par
  l'État, destiné à financer des travaux de rénovation énergétique dans un logement ancien. »
- Source (niveau 1) : https://www.service-public.fr/particuliers/vosdroits/F19905
- Occurrence : `eco-renovation-02`.

**CIGEO**
- Définition proposée : « Centre industriel de stockage géologique : projet de stockage des déchets
  radioactifs les plus dangereux à environ 500 mètres sous terre, à Bure (Meuse), porté par
  l'Andra ; sa création a été déclarée d'utilité publique en 2022. »
- Source (niveau 1, opérateur public) : https://www.andra.fr/cigeo
- Occurrence : `eco-nucleaire-02` (« Adopter un moratoire sur le projet CIGEO »).
- Note : c'est le cas d'école du sigle **non développé dans le verbatim** — la mesure est
  inintelligible sans la définition.

**garantie Cat-Nat**
- Définition proposée : « Garantie « catastrophes naturelles » incluse d'office dans les contrats
  d'assurance habitation et automobile. Elle indemnise les dommages causés par un phénomène naturel
  d'intensité anormale (inondation, sécheresse, séisme) une fois l'état de catastrophe naturelle
  constaté par arrêté. »
- Source (niveau 1) : https://www.service-public.fr/particuliers/vosdroits/F3076
- Occurrence : `eco-adaptation-03`.

**REACH**
- Définition proposée : « Règlement européen sur les produits chimiques (2006). Il impose aux
  industriels d'enregistrer les substances qu'ils fabriquent ou importent et d'en démontrer la
  sécurité, et permet d'en restreindre ou d'en soumettre l'usage à autorisation. »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/reglement-reach
- Occurrence : `eco-toxiques-10`.

**liste rouge**
- Définition proposée : « Inventaire mondial de l'état de conservation des espèces animales et
  végétales, tenu par l'Union internationale pour la conservation de la nature (UICN), qui les
  classe par degré de menace, de « préoccupation mineure » à « éteinte ». »
- Source (niveau 2-3, comité français de l'UICN) : https://uicn.fr/liste-rouge-mondiale/
- Occurrence : `eco-condition-animale-01` (« animaux figurant sur la liste rouge de l'UICN »).
- Note : proposer aussi `UICN` (occurrences `lfi-ocean-10`, `eco-ocean-01`,
  `eco-condition-animale-01` ; développé dans les deux premières, pas dans la troisième).

**Programme national de la forêt et du bois**
- Définition proposée : « Document-cadre de la politique forestière française, adopté par décret
  pour dix ans, qui fixe les orientations de gestion des forêts et de la filière bois et se décline
  en programmes régionaux. »
- Source (niveau 1) : https://agriculture.gouv.fr/le-programme-national-de-la-foret-et-du-bois-2016-2026
- Occurrence : `eco-forets-04`.

**Copernicus**
- Définition proposée : « Programme d'observation de la Terre de l'Union européenne : une flotte de
  satellites et de capteurs au sol dont les données sur le climat, l'atmosphère, les océans et les
  sols sont diffusées gratuitement. »
- Source (niveau 2) : https://www.copernicus.eu/fr
- Occurrence : `lfi-planification-09`.

**zones humides** — ❓ à sourcer
- Définition proposée : « Terrains inondés ou gorgés d'eau au moins une partie de l'année (marais,
  tourbières, prairies humides, mangroves). Le code de l'environnement leur reconnaît un régime de
  protection propre, lié à leur rôle dans le stockage de l'eau et l'accueil de la biodiversité. »
- Source : **❓** — piste : article L. 211-1 du code de l'environnement (Légifrance). Voir
  l'avertissement vie-publique.fr ci-dessous.
- Occurrences : `lfi-eau-ressource-08`, `eco-eau-ressource-01`, `eco-adaptation-04`,
  `eco-biodiversite-04`.


## ⚠️ Avertissement — je n'ai pas pu vérifier une seule URL vie-publique.fr

`vie-publique.fr` **renvoie un code HTTP 200 même sur une page inexistante** : j'ai testé
`…/fiches/999999-page-qui-nexiste-pas`, qui répond 200, et le site ne sert aucun contenu ni à
`curl` ni à l'outil de récupération de page (coquille d'application monopage vide). Un test HTTP
n'y prouve donc rien, et je n'y ai lu aucun texte.

**Je ne cite aucune URL vie-publique dans ce rapport.** Chaque fois qu'une fiche vie-publique
serait la source naturelle, l'entrée est marquée ❓ avec la piste indiquée, à confirmer par
l'éditeur dans un navigateur.

Ce n'est pas un jugement sur vie-publique.fr (source de niveau 1 parfaitement légitime), mais sur ma
capacité à la vérifier. **Point à remonter à l'éditeur** : 13 des 41 entrées actuelles de
`data/glossaire.json` pointent vers vie-publique.fr ; elles n'ont peut-être jamais été vérifiées
autrement que par une liste de résultats de recherche.

Domaines qui répondent honnêtement (vrai 404 sur page absente, contenu réellement servi) et sur
lesquels je me suis appuyé : `ecologie.gouv.fr`, `service-public.fr`, `agriculture.gouv.fr`,
`georisques.gouv.fr`, `*.ec.europa.eu`, `andra.fr`, `cerema.fr`, `anses.fr`,
`hautconseilclimat.fr`, `copernicus.eu`, `uicn.fr`, `certificat-air.gouv.fr`,
`ecoresponsable.numerique.gouv.fr`, `lesagencesdeleau.fr`.

### 1.2 — Sources confirmées (suite)

**REP** / **Responsabilité Élargie des Producteurs**
- Définition proposée : « Principe qui rend les fabricants et importateurs d'un produit responsables
  de sa fin de vie : ils doivent financer ou organiser la collecte et le traitement des déchets qui
  en résultent, filière par filière (emballages, textiles, meubles, bâtiment…). »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/cadre-general-filieres-responsabilite-elargie-producteurs
- Occurrences : `eco-dechets-06` (les deux formes), `eco-toxiques-03` (« filières REP »).
- Note : `REP` fait 3 lettres — accepté par la consigne, et sans danger depuis l'ajout des
  frontières de mot ; c'est aussi un mot anglais courant, à surveiller si un verbatim anglophone
  entre un jour dans le corpus.

**éco-organismes**
- Définition proposée : « Sociétés créées et financées par les fabricants d'un même secteur pour
  assumer collectivement leur obligation de gestion des déchets de leurs produits ; elles sont
  agréées par l'État selon un cahier des charges. »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/cadre-general-filieres-responsabilite-elargie-producteurs
- Occurrences : `eco-dechets-06`, `eco-emplois-transition-01`.

**écomodulations**
- Définition proposée : « Modulation de la contribution financière versée par un fabricant à son
  éco-organisme : elle est majorée (malus) ou minorée (bonus) selon des critères environnementaux du
  produit, comme sa durabilité, sa réparabilité ou sa part de matière recyclée. »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/cadre-general-filieres-responsabilite-elargie-producteurs
- Occurrence : `eco-dechets-06`.
- Note : le même verbatim contient « éco-contributions » (la contribution elle-même) — entrée
  distincte possible, même source.

**zéro artificialisation nette** / **ZAN**
- Définition proposée : « Objectif inscrit dans la loi : ramener à zéro, d'ici 2050, le solde entre
  les sols nouvellement transformés par l'urbanisation (constructions, routes, parkings) et les sols
  rendus à la nature. »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/artificialisation-sols
- Occurrences : `lfi-sols-02` (minuscules, entre guillemets), `eco-sols-01` (majuscules),
  `eco-sols-06` (sigle seul).
- Note : **deux entrées nécessaires** — `ZAN` et `zéro artificialisation nette` — le repérage étant
  littéral. La casse, elle, est indifférente : une seule entrée couvre les deux graphies de la
  forme longue.

**artificialisation**
- Définition proposée : « Transformation d'un sol naturel, agricole ou forestier en surface
  construite ou imperméabilisée, qui lui fait perdre tout ou partie de ses fonctions : absorption de
  l'eau, stockage du carbone, accueil du vivant. »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/artificialisation-sols
- Occurrences : `lfi-biodiversite-04`, `eco-ocean-01`, `eco-sols-01`, `eco-sols-03`.
- ⚠️ **Conflit de repérage à surveiller** : « artificialisation » est un sous-terme de « zéro
  artificialisation nette ». `Verbatim.tsx` trie les motifs du plus long au plus court, donc
  l'expression complète l'emporte — mais seulement si les deux entrées coexistent. À contrôler
  visuellement après intégration.

**Obligations réelles environnementales** / **ORE**
- Définition proposée : « Contrat par lequel le propriétaire d'un terrain y attache durablement des
  engagements de protection de la nature (jusqu'à 99 ans). L'obligation suit le terrain : elle
  s'impose aux propriétaires suivants. »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/obligation-reelle-environnementale
- Occurrence : `eco-forets-04` (« Encourager les ORE (Obligations réelles environnementales) »).

**Fonds Barnier**
- Définition proposée : « Nom usuel du fonds de prévention des risques naturels majeurs (FPRNM),
  créé en 1995 : il finance des travaux de prévention et le rachat de biens trop exposés, face aux
  inondations, mouvements de terrain ou submersions. »
- Source (niveau 1) : https://www.georisques.gouv.fr/minformer-sur-la-prevention-des-risques/le-fonds-barnier
- Occurrence : `eco-adaptation-03`.

**ZFE**
- Définition proposée : « Zone à faibles émissions : périmètre urbain dans lequel la circulation des
  véhicules les plus polluants est restreinte ou interdite, selon leur vignette Crit'Air. »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/zones-faibles-emissions-zfe
- Occurrence : `eco-toxiques-04` (le verbatim développe le sigle mais n'explique pas le dispositif).

**Crit'air**
- Définition proposée : « Vignette autocollante qui classe un véhicule de 0 à 5 selon ses émissions
  de polluants, d'après sa motorisation et sa date de mise en circulation ; elle conditionne l'accès
  aux zones à faibles émissions. »
- Source (niveau 1) : https://www.certificat-air.gouv.fr/
- Occurrence : `eco-toxiques-04`.
- ⚠️ Le verbatim écrit « Crit'air » avec une **apostrophe typographique `’`**. C'est cette graphie
  exacte qu'il faut porter dans `terme` : la graphie officielle « Crit'Air » avec apostrophe droite
  ne correspondrait à rien.

**RGESN**
- Définition proposée : « Référentiel général d'écoconception de services numériques : liste de
  critères publiés par l'État pour réduire l'empreinte d'un site web ou d'une application (poids des
  pages, durée de vie des appareils nécessaires, sobriété des fonctionnalités). »
- Source (niveau 1) : https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/
- Occurrence : `eco-dechets-02`.

**paiements pour services environnementaux**
- Définition proposée : « Rémunération versée à un agriculteur ou à un propriétaire pour des
  pratiques bénéfiques à l'environnement qui ne sont pas rétribuées par la vente de sa production :
  entretien de haies, maintien de prairies, protection de la qualité de l'eau. »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/paiements-services-environnementaux
- Occurrence : `eco-biodiversite-02`.

**plan Ecophyto**
- Définition proposée : « Plan public lancé en 2008 et révisé à plusieurs reprises, qui vise à
  réduire l'usage des produits phytosanitaires en agriculture et suit cette réduction au moyen
  d'indicateurs chiffrés. »
- Source (niveau 1) : https://agriculture.gouv.fr/le-plan-ecophyto-quest-ce-que-cest
- Occurrence : `eco-pesticides-01`.

**Haut Conseil pour le Climat**
- Définition proposée : « Organisme indépendant créé en 2019, composé de scientifiques et
  d'experts, qui évalue chaque année si l'action de la France est cohérente avec ses objectifs
  climatiques et rend des avis publics. »
- Source (niveau 1) : https://www.hautconseilclimat.fr/a-propos/
- Occurrence : `eco-planification-02`.

**Cerema**
- Définition proposée : « Centre d'études et d'expertise sur les risques, l'environnement, la
  mobilité et l'aménagement : établissement public qui apporte un appui technique à l'État et aux
  collectivités sur les infrastructures, les risques et l'adaptation des territoires. »
- Source (niveau 1) : https://www.cerema.fr/fr
- Occurrences : `lfi-planification-03` (« Cerema »), `eco-planification-02` (« CEREMA »).
  Une seule entrée suffit : la casse est indifférente.

**ANSES**
- Définition proposée : « Agence nationale de sécurité sanitaire de l'alimentation, de
  l'environnement et du travail : établissement public qui évalue les risques sanitaires et délivre
  ou retire les autorisations de mise sur le marché des pesticides et des biocides. »
- Source (niveau 1) : https://www.anses.fr/fr
- Occurrence : `eco-pesticides-01`.

**déforestation importée** (et **RDUE**)
- Définition proposée : « Déforestation qui a lieu à l'étranger mais résulte de la consommation
  nationale, par l'importation de produits dont la culture ou l'élevage a fait reculer la forêt
  (soja, huile de palme, cacao, bœuf, bois). »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/lutte-contre-deforestation-importee
- Occurrences : `lfi-forets-14` (« déforestation importée »), `eco-forets-06` (« RDUE »).
- Note : pour `RDUE`, définition proposée : « Règlement européen sur la déforestation : il interdit
  de mettre sur le marché de l'Union des produits (bois, cacao, café, soja, huile de palme, bœuf,
  caoutchouc) issus de terres déboisées après le 31 décembre 2020. » Même source.

**label bas carbone**
- Définition proposée : « Label public qui certifie qu'un projet — plantation forestière, changement
  de pratique agricole… — évite ou stocke une quantité mesurée de gaz à effet de serre, que des
  entreprises ou des collectivités peuvent ensuite financer. »
- Source (niveau 1) : https://www.ecologie.gouv.fr/label-bas-carbone
- Occurrence : `eco-forets-04`.

**agences de l'eau**
- Définition proposée : « Six établissements publics, un par grand bassin hydrographique, qui
  perçoivent des redevances sur les prélèvements et les pollutions d'eau et en redistribuent le
  produit pour financer l'assainissement, la dépollution et la protection des milieux. »
- Source (niveau 1, portail commun des six agences) : https://www.lesagencesdeleau.fr/
- Occurrences : `lfi-eau-ressource-09`, `eco-eau-ressource-06`, `eco-eau-service-03`.
- Note : `lfi-eau-ressource-09` contient « comité de bassin » (singulier) et `eco-eau-ressource-06`
  « comités de bassin » (pluriel) : **deux entrées** seraient nécessaires pour couvrir les deux
  formes. Définition proposée : « Assemblée réunissant élus locaux, usagers (industriels,
  agriculteurs, associations) et services de l'État, qui fixe les orientations et vote les
  redevances de l'agence de l'eau de son bassin ; on l'appelle parfois « parlement de l'eau ». »

**politique commune de la pêche**
- Définition proposée : « Politique de l'Union européenne qui fixe en commun les règles de la
  pêche : quotas de captures par espèce et par pays, tailles minimales, engins autorisés, aides au
  secteur. »
- Source (niveau 2, Commission européenne) : https://oceans-and-fisheries.ec.europa.eu/policy/common-fisheries-policy-cfp_fr
- Occurrence : `eco-ocean-07`.
- Note : LFI écrit « politique commune des pêches » (`lfi-ocean-07`) — **forme différente**, donc
  seconde entrée nécessaire pour la couvrir.

**Mercosur**
- Définition proposée : « Marché commun d'Amérique du Sud réunissant l'Argentine, le Brésil, le
  Paraguay, l'Uruguay et la Bolivie. L'accord commercial négocié entre l'Union européenne et ce
  bloc n'est pas ratifié à ce jour. »
- Source (niveau 2, Commission européenne) : https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/mercosur_fr
- Occurrences : `lfi-fisc-verte-07`, `eco-fisc-verte-5`.

**continuités écologiques**
- Définition proposée : « Ensemble de milieux naturels reliés entre eux — haies, cours d'eau, bandes
  enherbées — permettant aux espèces de circuler entre leurs zones de vie ; leur mise en réseau
  s'appelle la « trame verte et bleue ». »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/trame-verte-bleue
- Occurrence : `eco-biodiversite-02`.

**méthanisation**
- Définition proposée : « Dégradation de matières organiques (effluents d'élevage, résidus de
  culture, biodéchets) par des micro-organismes en l'absence d'air, qui produit un gaz combustible —
  le biogaz — et un résidu utilisable comme fertilisant, le digestat. »
- Source (niveau 1) : https://www.ecologie.gouv.fr/politiques-publiques/biogaz
- Occurrences : `lfi-energie-05`, `eco-energie-02`, `eco-eau-ressource-03`.
- Note : `eco-energie-02` mentionne aussi la **méthanation**, procédé différent (fabriquer du
  méthane à partir d'hydrogène et de CO₂). Les deux mots diffèrent d'une lettre : une entrée
  distincte a une vraie valeur pédagogique — source ❓ à confirmer.

**stations de transfert d'énergie par pompage** / **STEP**
- Définition proposée : « Installation hydroélectrique à deux bassins : l'eau est pompée vers le
  bassin haut quand l'électricité est abondante, puis turbinée vers le bassin bas quand elle
  manque. C'est aujourd'hui le principal moyen de stocker de l'électricité à grande échelle. »
- Source (niveau 1, page « hydroélectricité » du ministère) : https://www.ecologie.gouv.fr/politiques-publiques/hydroelectricite
- Occurrences : `lfi-energie-04`, `eco-energie-02` — les deux développent le sigle, aucun n'explique
  le principe. C'est exactement le cas où la définition sert.

**agroécologique**
- Définition proposée : « Qualifie des façons de produire qui s'appuient sur les mécanismes naturels
  — rotation des cultures, couverture des sols, haies, associations de plantes — pour réduire le
  recours aux engrais et pesticides de synthèse. »
- Source (niveau 1) : https://agriculture.gouv.fr/quest-ce-que-lagroecologie
- Occurrences : `eco-pesticides-01` (« pratiques agroécologiques », « recherche agroécologique »),
  `eco-eau-ressource-01` (« projet agroécologique »).
- ⚠️ Le mot **« agroécologie » seul n'apparaît nulle part** dans le lot : le proposer ne
  surlignerait rien. C'est l'adjectif `agroécologique` qu'il faut retenir — il couvre les trois
  occurrences d'un coup.

### 1.3 — Sigles utiles mais **❓ à sourcer**

Termes réellement présents dans un verbatim du lot, dont la définition me paraît sûre mais dont je
n'ai **pas pu confirmer une source de niveau 1-2 avec mes outils** (le plus souvent parce que la
source naturelle est vie-publique.fr ou Légifrance, tous deux non vérifiables ici — Légifrance
renvoie 403 à toute requête automatisée). À sourcer par l'éditeur avant publication, ou à écarter.

| Terme (forme exacte du verbatim) | Définition proposée | Occurrence | Piste de source |
|---|---|---|---|
| `PCAET` | Plan climat-air-énergie territorial : programme d'actions sur six ans, obligatoire pour les intercommunalités de plus de 20 000 habitants, qui fixe leurs objectifs de réduction des émissions, de qualité de l'air et d'adaptation au climat. | `eco-fisc-verte-6` | ADEME (`territoires-climat.ademe.fr`) ; art. L. 229-26 code de l'environnement |
| `Plan Climat Air-Énergie Territorial` | (même définition — forme longue présente dans le même verbatim) | `eco-fisc-verte-6` | idem |
| `ADEME` | Agence de la transition écologique : établissement public qui finance et accompagne les projets d'économie d'énergie, de gestion des déchets et de dépollution des sols. | `eco-dechets-06`, `eco-planification-02` | `ademe.fr` (répond 403 aux tests automatisés) |
| `SAFER` | Sociétés d'aménagement foncier et d'établissement rural : sociétés à but non lucratif, sous contrôle de l'État, informées de toute vente de terre agricole et pouvant se substituer à l'acheteur (préemption) pour orienter l'attribution des terres. | `eco-sols-03` | `safer.fr` ; code rural art. L. 141-1 |
| `office foncier solidaire` | Organisme sans but lucratif qui achète des terrains et en conserve la propriété durablement, ne vendant que le bâti : le prix du logement s'en trouve dissocié de celui du sol. | `eco-sols-03` | code de l'urbanisme art. L. 329-1 |
| `EPFL` | Établissements publics fonciers locaux : structures créées par des collectivités pour acheter et porter des terrains en vue d'un aménagement futur (logement, activité, renaturation). | `eco-sols-05` | `collectivites-locales.gouv.fr` |
| `SDIS` | Services départementaux d'incendie et de secours : établissements publics qui organisent, à l'échelle d'un département, les sapeurs-pompiers professionnels et volontaires. | `eco-adaptation-06` | `interieur.gouv.fr` |
| `PPR` | Plans de prévention des risques : documents établis par le préfet qui délimitent les zones exposées à un risque naturel et y interdisent ou conditionnent les constructions. | `eco-adaptation-02` | `georisques.gouv.fr` |
| `PPRi` | Plan de prévention des risques d'inondation : la déclinaison du PPR pour le risque d'inondation. | `lfi-adaptation-02` | `georisques.gouv.fr` |
| `PGRI` | Plan de gestion des risques d'inondation : document adopté par grand bassin, qui fixe pour six ans les objectifs de réduction des conséquences des inondations. | `lfi-adaptation-02` | `ecologie.gouv.fr` |
| `aires d’alimentation de captage` | Surfaces de terrain où l'eau de pluie s'infiltre avant d'alimenter un point de captage d'eau potable ; les activités qui s'y déroulent déterminent la qualité de l'eau prélevée. | `eco-eau-ressource-04` | agences de l'eau ; code de l'environnement |
| `Redevance pour Pollution Diffuse` | Taxe payée à l'achat de produits phytosanitaires, proportionnelle à la dangerosité des substances, perçue par les agences de l'eau. | `eco-eau-ressource-03` | agences de l'eau |
| `taxe espace naturel sensible` | Part de la taxe d'aménagement affectée aux départements pour acquérir et gérer des espaces naturels ouverts au public. | `eco-biodiversite-03` | code de l'urbanisme |
| `Contribution Climat Énergie` | Nom officiel de la « taxe carbone » française : composante des taxes sur les carburants et combustibles proportionnelle à leurs émissions de CO₂. Son montant est gelé depuis 2018. | `eco-fisc-verte-6` | `ecologie.gouv.fr` ; loi de finances |
| `versement mobilité` | Contribution versée par les employeurs de onze salariés et plus, sur leur masse salariale, pour financer les transports collectifs du territoire. | `eco-fisc-verte-6` | URSSAF |
| `fonds social pour le climat` | Fonds européen prévu à partir de 2026 pour aider les ménages et petites entreprises vulnérables à absorber le coût de l'extension du marché carbone au chauffage et aux carburants. | `eco-energie-prix-02` | `climate.ec.europa.eu` |
| `ETS2` | Deuxième système européen d'échange de quotas d'émission : à partir de 2027, il fait payer un prix du carbone sur les carburants du chauffage des bâtiments et du transport routier, auprès des fournisseurs. | `eco-energie-prix-02` | `climate.ec.europa.eu` |
| `marché carbone` | Système où un plafond d'émissions est fixé puis réparti en quotas échangeables : les installations qui émettent moins peuvent vendre leurs quotas à celles qui émettent plus. | `eco-energie-prix-02` | `climate.ec.europa.eu` |
| `contrat pour différence` | Contrat de long terme entre l'État et un producteur d'électricité fixant un prix de référence : si le prix de marché est inférieur, l'État complète ; s'il est supérieur, le producteur reverse la différence. | `eco-investissement-04` | Commission de régulation de l'énergie |
| `contrats pour différence` | (même définition — forme au pluriel, présente dans un autre verbatim) | `eco-energie-prix-01` | idem |
| `tarifs réglementés` | Prix de vente de l'électricité ou du gaz fixés par les pouvoirs publics sur proposition du régulateur, par opposition aux offres libres négociées avec les fournisseurs. | `lfi-energie-prix-01` | Commission de régulation de l'énergie |
| `tarif bleu` | Nom du tarif réglementé de vente de l'électricité applicable aux particuliers et aux petits professionnels. | `eco-energie-prix-01` | Commission de régulation de l'énergie |
| `accise` | Impôt indirect assis sur la quantité consommée d'un produit (électricité, gaz, carburants, alcool, tabac) et non sur son prix. | `eco-energie-prix-01` | Douane / code des impositions sur les biens et services |
| `décret Montebourg` | Nom usuel du décret de 2014 étendant la liste des secteurs dans lesquels un investissement étranger en France est soumis à autorisation préalable du ministre de l'économie. | `eco-souverainete-01` | `tresor.economie.gouv.fr` |
| `Plan national d’adaptation au changement climatique` | Programme d'action de l'État, révisé périodiquement, préparant le pays aux effets déjà inévitables du réchauffement (canicules, sécheresses, inondations, recul du littoral). | `eco-adaptation-01` | `ecologie.gouv.fr` |
| `Trajectoire d’Adaptation au Changement Climatique` | Hypothèse de réchauffement de référence retenue par l'État pour dimensionner les politiques publiques d'adaptation. | `eco-adaptation-02` | `ecologie.gouv.fr` |
| `Traité sur la charte de l’énergie` | Traité international de 1994 protégeant les investissements dans l'énergie, qui permet à une entreprise d'attaquer un État devant un tribunal d'arbitrage ; la France s'en est retirée en 2023. | `eco-fisc-verte-5` | `diplomatie.gouv.fr` ; `energycharter.org` |
| `INN` | Pêche « illicite, non déclarée et non réglementée » : captures réalisées hors de tout cadre légal ou sans déclaration aux autorités. | `eco-ocean-03` | `oceans-and-fisheries.ec.europa.eu` |
| `GPEC` | Gestion prévisionnelle de l'emploi et des compétences : démarche d'anticipation, dans une entreprise ou une filière, des besoins futurs en métiers et en qualifications. | `eco-investissement-02` | `travail-emploi.gouv.fr` |
| `Digital Fairness Act` | Projet de règlement européen sur les pratiques commerciales en ligne (publicité ciblée, interfaces trompeuses, influence), annoncé par la Commission et non encore adopté. | `eco-publicite-01` | `commission.europa.eu` |
| `loi Littoral` | Nom usuel de la loi du 3 janvier 1986 qui encadre l'urbanisation des communes du bord de mer : inconstructibilité d'une bande de 100 mètres, extension limitée des zones bâties. | `eco-adaptation-04` | Légifrance (loi n° 86-2) |
| `convention de Ramsar` | Traité international de 1971 pour la conservation des zones humides, par lequel chaque État désigne des sites qu'il s'engage à gérer durablement. | `eco-biodiversite-04` | `ramsar.org` (répond 403 aux tests automatisés) |
| `EPR-2` | Modèle de réacteur nucléaire dérivé de l'EPR, conçu pour être plus simple et moins coûteux à construire, retenu pour le programme de nouveaux réacteurs français. | `eco-nucleaire-01` | `ecologie.gouv.fr` ; ASNR |
| `SMR` | *Small Modular Reactor* : réacteur nucléaire de faible puissance, conçu pour être fabriqué en série en usine puis assemblé sur site. Aucun n'est en service en France. | `eco-nucleaire-01` | ASNR (`asnr.fr`) |
| `fonds chaleur` | Fonds géré par l'ADEME qui subventionne la production de chaleur renouvelable (biomasse, géothermie, solaire thermique) et les réseaux qui la distribuent. | `eco-energie-04` | `ademe.fr` |
| `ISDND` | Installations de stockage de déchets non dangereux : sites d'enfouissement des ordures ménagères résiduelles, où la décomposition produit du méthane qui peut être capté. | `eco-dechets-05` | `ecologie.gouv.fr` |
| `ESPR` | Règlement européen d'écoconception des produits durables (2024), qui étend à presque tous les produits des exigences de durabilité, de réparabilité et de contenu recyclé. | `eco-dechets-08` | EUR-Lex (règlement UE 2024/1781) |
| `NODU` | « Nombre de doses unités » : indicateur de suivi de l'usage des pesticides mesurant le nombre de traitements appliqués, indépendamment de l'évolution des doses homologuées. | `eco-pesticides-01` | `agriculture.gouv.fr` (non trouvé sur la page Ecophyto testée) |
| `protocole de Montréal` | Traité international de 1987 organisant l'élimination progressive des substances qui détruisent la couche d'ozone. | `eco-toxiques-01` | PNUE / `ozone.unep.org` |
| `Autorité internationale des fonds marins` | Organisation créée par la convention des Nations unies sur le droit de la mer, chargée d'encadrer l'exploration et l'exploitation des grands fonds situés hors des eaux nationales. | `eco-ocean-06` | `isa.org.jm` |

---

## 2. Jargon technique énergie, climat, déchets

**énergies marines renouvelables** et **bioénergies**
- « énergies marines renouvelables » : « Électricité produite à partir de la mer : vent au large
  (éolien posé ou flottant), courants de marée (hydrolien), houle, différences de température. »
  Occurrences : `lfi-ocean-15`, `lfi-investissement-03` (le sigle `EMR` figure en `lfi-ocean-15`).
- « bioénergies » : « Énergies produites à partir de matière organique — bois, déchets verts,
  cultures, effluents d'élevage — par combustion, fermentation ou méthanisation. »
  Occurrence : `eco-energie-03`.
- Source (niveau 1, page générale « énergies renouvelables » du ministère — couvre les deux, sans
  entrée dédiée à chaque terme) : https://www.ecologie.gouv.fr/politiques-publiques/energies-renouvelables

Les termes ci-dessous sont tous présents dans un verbatim du lot (vérifiés), avec une définition
que je crois exacte, mais **❓ à sourcer** — je n'ai pas pu confirmer d'URL de niveau 1-2.

| Terme (forme exacte) | Définition proposée | Occurrence | Piste de source |
|---|---|---|---|
| `neutralité carbone` | État dans lequel les émissions de gaz à effet de serre restantes d'un pays sont compensées par ce que ses forêts, ses sols et ses installations de captage absorbent. | `eco-planification-01` | `ecologie.gouv.fr` ; loi énergie-climat 2019 |
| `puits carbone` | Milieu qui absorbe plus de carbone qu'il n'en rejette — forêt, sol, océan — et le retire ainsi de l'atmosphère. | `lfi-forets-07` | ADEME ; Haut Conseil pour le Climat |
| `obsolescence programmée` | Technique par laquelle un fabricant réduit délibérément la durée de vie d'un produit pour en accélérer le remplacement. C'est un délit en France depuis 2015. | `lfi-dechets-01`, `eco-dechets-02` | code de la consommation, art. L. 441-2 |
| `écoconception` | Démarche consistant à intégrer, dès la conception d'un produit, la réduction de son impact sur tout son cycle de vie : matières, fabrication, usage, réparation, fin de vie. | `lfi-dechets-04`, `eco-dechets-01`, `eco-dechets-06`, `eco-dechets-08` | ADEME |
| `indice de durabilité` | Note affichée à la vente de certains appareils, résumant leur réparabilité, leur fiabilité et la disponibilité des pièces. | `lfi-dechets-05` | `ecologie.gouv.fr` ; loi AGEC |
| `indices de durabilité` | (même définition — forme au pluriel dans un autre verbatim) | `eco-dechets-01` | idem |
| `indices de réparabilité` | Note de 0 à 10 affichée sur certains appareils, mesurant la facilité à les faire réparer (démontabilité, prix et disponibilité des pièces, documentation). | `eco-dechets-06` | `ecologie.gouv.fr` ; loi AGEC |
| `low tech` | Techniques et objets délibérément simples, robustes et réparables, sobres en énergie et en matières. | `eco-dechets-03`, `eco-investissement-03` | ADEME |
| `low-tech` | (même définition — graphie avec trait d'union, employée par LFI) | `lfi-dechets-04` | idem |
| `précarité énergétique` | Situation d'un ménage qui éprouve des difficultés à disposer de l'énergie nécessaire pour se chauffer et s'éclairer, en raison de ses revenus ou de la mauvaise isolation de son logement. La loi en donne une définition. | `lfi-renovation-02`, `eco-renovation-02` | loi du 12 juillet 2010, art. 11 ; ONPE |
| `passoires thermiques` | Nom courant des logements les plus mal isolés, classés F ou G au diagnostic de performance énergétique. | `lfi-renovation-02` | `ecologie.gouv.fr` |
| `matériaux biosourcés` | Matériaux de construction issus de la matière vivante : bois, paille, chanvre, ouate de cellulose, laine. | `lfi-renovation-08`, `eco-renovation-04` | `ecologie.gouv.fr` |
| `géosourcés` | Se dit des matériaux de construction issus du sol et peu transformés, au premier rang desquels la terre crue. | `eco-renovation-04` | `ecologie.gouv.fr` |
| `électrification des usages` | Remplacement d'équipements fonctionnant aux énergies fossiles par des équipements électriques : voiture électrique, pompe à chaleur, four industriel électrique. | `eco-energie-01` | RTE ; ADEME |
| `communautés énergétiques renouvelables` | Groupements d'habitants, d'entreprises ou de collectivités qui produisent et partagent localement leur propre électricité renouvelable, sur un statut prévu par le droit européen. | `eco-energie-05` | directive UE 2018/2001 |
| `propulsion vélique` | Propulsion d'un navire par le vent, au moyen de voiles, d'ailes rigides ou de rotors, en remplacement ou en complément du moteur. | `lfi-ocean-17` | `mer.gouv.fr` |
| `hydrolien` | Se dit d'une installation qui produit de l'électricité à partir des courants marins ou fluviaux, au moyen de turbines immergées. | `lfi-ocean-15` | `ecologie.gouv.fr` |
| `hydrogène bas carbone` | Hydrogène produit sans émettre beaucoup de CO₂, principalement par électrolyse de l'eau à partir d'électricité peu carbonée. | `eco-investissement-04` | `ecologie.gouv.fr` (stratégie hydrogène) |
| `électrolyse` | Décomposition de l'eau en hydrogène et oxygène par le passage d'un courant électrique. | `eco-investissement-03` | idem |
| `réseaux de chaleur` | Canalisations souterraines distribuant, depuis une chaufferie unique, de l'eau chaude à plusieurs bâtiments d'un quartier. | `eco-renovation-03` | ADEME ; `ecologie.gouv.fr` |
| `empreinte matières` | Quantité totale de matières premières mobilisées dans le monde pour satisfaire la consommation d'un pays, importations comprises. | `eco-planification-02`, `eco-dechets-08` | `statistiques.developpement-durable.gouv.fr` (SDES) |
| `empreinte hydrique` | Volume total d'eau nécessaire à la production d'un bien, y compris l'eau utilisée à l'étranger pour ses composants. | `lfi-fisc-verte-02` | `eaufrance.fr` |
| `limites planétaires` | Ensemble de seuils, proposés par un groupe de chercheurs en 2009, au-delà desquels les grands équilibres de la planète (climat, biodiversité, cycles de l'azote et de l'eau…) risquent d'être durablement déstabilisés. | `eco-investissement-02` | Stockholm Resilience Centre ; ministère |
| `fast fashion` | Modèle de vente de vêtements fondé sur le renouvellement très rapide des collections et des prix très bas. Une loi française de 2025 en encadre la publicité. | `eco-dechets-07` | loi du 2 août 2025 (Légifrance) |
| `Passeport Numérique des Produits` | Fiche d'identité numérique attachée à un produit, accessible par code, décrivant sa composition, sa réparabilité et son origine ; prévue par le droit européen. | `eco-dechets-03` | règlement UE 2024/1781 (ESPR) |
| `tri à la source` | Séparation des déchets — notamment les déchets alimentaires — par celui qui les produit, avant leur collecte, plutôt qu'après. | `eco-dechets-05` | ADEME ; `ecologie.gouv.fr` |
| `bois d’œuvre` | Bois de qualité suffisante pour être scié et employé en construction, charpente ou menuiserie, par opposition au bois destiné à être brûlé ou transformé en pâte. | `eco-forets-03` | `agriculture.gouv.fr` |

---

## 3. Jargon agricole, forestier et biodiversité

**sylviculture**
- Définition proposée : « Ensemble des pratiques de culture et d'entretien d'une forêt :
  plantation, éclaircies, choix des essences, organisation des coupes. »
- Source (niveau 1) : https://agriculture.gouv.fr/la-gestion-durable-des-forets
- Occurrence : `eco-forets-01`.

Le reste de cette section est **❓ à sourcer** (mêmes réserves qu'en 1.3).

| Terme (forme exacte) | Définition proposée | Occurrence | Piste de source |
|---|---|---|---|
| `coupes rases` | Abattage en une seule fois de tous les arbres d'une parcelle forestière. | `lfi-forets-01`, `eco-forets-03` | `agriculture.gouv.fr` ; ONF |
| `libre évolution` | Choix de laisser une forêt ou un milieu se développer sans intervention humaine ni exploitation. | `lfi-forets-13`, `eco-forets-02` | Office français de la biodiversité |
| `dessouchage` | Extraction des souches après une coupe, qui retire du sol la matière organique et les racines restantes. | `lfi-forets-07` | ADEME ; ONF |
| `forêts irrégulières` | Forêts où cohabitent des arbres d'âges et de tailles variés, récoltés arbre par arbre, par opposition aux peuplements plantés et coupés au même âge. | `eco-forets-01` | CNPF |
| `essences` | En foresterie, les espèces d'arbres (chêne, hêtre, douglas…). | `lfi-forets-09`, `lfi-forets-10`, `eco-forets-01` | ONF |
| `services écosystémiques` | Bénéfices que les humains tirent du fonctionnement des milieux naturels : pollinisation, épuration de l'eau, stockage du carbone, protection contre l'érosion. | `eco-forets-05` | Office français de la biodiversité |
| `maillage bocager` | Réseau de haies et de talus délimitant les parcelles agricoles, qui abrite la faune, freine l'érosion et ralentit l'écoulement de l'eau. | `eco-biodiversite-02` | Office français de la biodiversité |
| `Label Haie` | Label certifiant une gestion durable des haies, de leur entretien à la vente du bois qui en est issu. | `eco-biodiversite-02` | `ecologie.gouv.fr` ; Afac-Agroforesteries |
| `prairies permanentes` | Surfaces en herbe non retournées depuis au moins cinq ans, dont le sol stocke durablement du carbone. | `eco-condition-animale-12` | `agriculture.gouv.fr` ; PAC |
| `pastoralisme` | Élevage fondé sur le déplacement des troupeaux et le pâturage de milieux naturels (alpages, landes, parcours). | `eco-condition-animale-12` | `agriculture.gouv.fr` |
| `sylvopastoralisme` | Pratique associant sur une même parcelle des arbres et le pâturage d'un troupeau. | `eco-condition-animale-12` | `agriculture.gouv.fr` ; INRAE |
| `épizooties` | Maladies animales contagieuses qui se propagent rapidement dans un cheptel ou une région. | `eco-condition-animale-11` | `agriculture.gouv.fr` |
| `tourteaux de soja` | Résidus solides de l'extraction de l'huile de soja, riches en protéines, utilisés pour l'alimentation du bétail et largement importés. | `eco-condition-animale-11` | `agriculture.gouv.fr` |
| `néonicotinoïdes` | Famille d'insecticides agissant sur le système nerveux des insectes, interdits en France depuis 2018 avec des dérogations temporaires. | `lfi-pesticides-01`, `eco-pesticides-01` | ANSES ; code rural |
| `glyphosate` | Herbicide non sélectif, le plus vendu au monde, dont l'autorisation européenne a été renouvelée jusqu'en 2033. | `lfi-pesticides-01` | ANSES ; EFSA |
| `prosulfocarbe` | Herbicide très volatil, employé notamment sur les céréales, retrouvé à distance des parcelles traitées. | `eco-pesticides-01` | ANSES |
| `engrais azotés` | Fertilisants apportant de l'azote aux cultures ; leur excès se retrouve dans l'eau sous forme de nitrates et dans l'air sous forme de protoxyde d'azote. | `eco-eau-ressource-03`, `eco-pesticides-01` | `agriculture.gouv.fr` ; INRAE |
| `chlordécone` | Insecticide utilisé dans les bananeraies de Guadeloupe et de Martinique jusqu'en 1993, très persistant, qui contamine durablement les sols et les eaux. | `lfi-eau-outremer-09`, `lfi-toxiques-04`, `eco-toxiques-05` | `sante.gouv.fr` ; Santé publique France |
| `polluants éternels` | Nom courant des PFAS, substances chimiques utilisées pour leurs propriétés antiadhésives et imperméabilisantes, qui ne se dégradent quasiment pas dans l'environnement. | `lfi-toxiques-07`, `eco-toxiques-01` | ANSES ; `ecologie.gouv.fr` |
| `PFAS` | (même définition — sigle employé dans le verbatim) | `eco-toxiques-01` | idem |
| `perturbateurs endocriniens` | Substances qui interfèrent avec le système hormonal des êtres vivants, y compris à faible dose. | `eco-toxiques-01`, `eco-toxiques-02` | ANSES ; `ecologie.gouv.fr` |
| `antibiorésistance` | Capacité acquise par des bactéries de résister aux antibiotiques, qui rend certains traitements inefficaces. | `eco-toxiques-06` | `sante.gouv.fr` ; Santé publique France |
| `bassins versants` | Territoire sur lequel toutes les eaux de pluie convergent vers un même cours d'eau et, finalement, un même exutoire. | `lfi-eau-ressource-01` | agences de l'eau |
| `débits biologiques` | Débit minimal qui doit rester dans un cours d'eau, en aval d'un barrage ou d'un prélèvement, pour que la vie aquatique s'y maintienne. | `lfi-eau-ressource-08` | code de l'environnement, art. L. 214-18 |
| `reméandrage` | Travaux redonnant à une rivière rectifiée son tracé sinueux d'origine, pour ralentir l'eau et restaurer les milieux. | `eco-eau-ressource-01` | Office français de la biodiversité |
| `désimperméabilisation` | Suppression de revêtements étanches (bitume, béton) pour que l'eau de pluie s'infiltre à nouveau dans le sol. | `eco-eau-ressource-05` | agences de l'eau ; ADEME |
| `état écologique et chimique` | Double note attribuée à une masse d'eau : l'une sur la vie qu'elle abrite et son fonctionnement, l'autre sur les substances polluantes qu'elle contient. Notions issues de la directive-cadre européenne sur l'eau. | `lfi-eau-ressource-06`, `eco-eau-ressource-03` | directive 2000/60/CE ; `eaufrance.fr` |
| `adduction d’eau potable` | Ensemble des ouvrages qui amènent l'eau depuis son point de captage jusqu'au réseau de distribution. | `lfi-eau-outremer-03` | `sante.gouv.fr` |
| `régies publiques` | Mode de gestion dans lequel la collectivité assure elle-même un service — ici l'eau ou l'assainissement — au lieu d'en confier l'exploitation à une entreprise. | `lfi-eau-service-03`, `lfi-eau-service-04`, `eco-eau-service-01` | `collectivites-locales.gouv.fr` |
| `aires marines protégées` | Espaces maritimes délimités où les activités humaines sont encadrées pour protéger les habitats et les espèces ; le niveau de protection varie fortement d'une aire à l'autre. | `lfi-ocean-09`, `eco-ocean-01` | Office français de la biodiversité |
| `chalutage de fond` | Pêche traînant un filet lesté sur le fond marin, qui capture les espèces qui y vivent et remue les sédiments. | `eco-ocean-02`, `eco-ocean-08` | IFREMER ; Commission européenne |
| `pélagique` | Qui concerne la pleine eau, entre la surface et le fond, par opposition au fond marin. | `eco-ocean-02` | IFREMER |
| `arts dormants` | Engins de pêche fixes que l'on pose et relève sans les traîner : lignes, filets calés, casiers. | `eco-ocean-02` | IFREMER |
| `dispositifs de concentration de poissons` | Objets flottants ancrés ou dérivants sous lesquels les poissons se rassemblent naturellement, utilisés pour faciliter leur capture. | `eco-ocean-08` | IFREMER ; Commission européenne |
| `algoculture` | Culture d'algues, en mer ou en bassin, à des fins alimentaires, cosmétiques ou industrielles. | `lfi-ocean-05`, `eco-condition-animale-03` | IFREMER |
| `acidification des océans` | Baisse du pH de l'eau de mer provoquée par l'absorption du CO₂ atmosphérique, qui gêne la formation des coquilles et des squelettes calcaires. | `lfi-ocean-12` | IFREMER ; IPCC/GIEC |
| `orpaillage` | Extraction de l'or dans les cours d'eau et leurs alluvions, légale ou clandestine, notamment en Guyane. | `lfi-forets-16` | `guyane.gouv.fr` ; Office français de la biodiversité |
| `trait de côte` | Limite entre la terre et la mer, qui se déplace avec l'érosion et la montée du niveau marin. | `eco-adaptation-03` | `ecologie.gouv.fr` ; Cerema |
| `mal-adaptation` | Mesure prise pour s'adapter au changement climatique mais qui aggrave la vulnérabilité, à cet endroit ou ailleurs. | `eco-adaptation-01` | GIEC ; ADEME |
| `retrait-gonflement d’argiles` | Phénomène par lequel des sols argileux se rétractent en période de sécheresse et gonflent lorsqu'ils se réhumidifient, ce qui fissure les maisons. | `eco-adaptation-03` | `georisques.gouv.fr` |

---

## 4. Vocabulaire juridique et européen apparu avec ce lot

Section entièrement **❓ à sourcer** : ces notions relèvent de Légifrance et de vie-publique.fr, les
deux domaines que je n'ai pas pu vérifier. Les définitions sont proposées, les liens restent à
établir.

| Terme (forme exacte) | Définition proposée | Occurrence | Piste de source |
|---|---|---|---|
| `principe de précaution` | Règle de valeur constitutionnelle : lorsqu'un risque grave et irréversible pour l'environnement est possible sans être scientifiquement certain, les autorités doivent adopter des mesures d'évaluation et de prévention. | `eco-toxiques-01` | Charte de l'environnement, art. 5 |
| `principe pollueur-payeur` | Règle selon laquelle les frais de prévention, de réduction et de réparation des pollutions incombent à celui qui les provoque. | `eco-toxiques-03` | code de l'environnement, art. L. 110-1 |
| `clause de sauvegarde` | Disposition d'un accord commercial permettant à un État de suspendre temporairement des importations lorsqu'elles causent ou menacent de causer un dommage grave à une production nationale. | `lfi-fisc-verte-05` | Commission européenne ; OMC |
| `clauses de sauvegarde` | (même définition — forme au pluriel dans un autre verbatim) | `eco-fisc-verte-3` | idem |
| `clauses miroirs` | Disposition imposant aux produits importés le respect des mêmes normes de production que celles exigées des producteurs européens. | `eco-fisc-verte-5` | Sénat ; Commission européenne |
| `clauses de survie` | Disposition d'un traité qui maintient ses effets pendant plusieurs années après le retrait d'un État — vingt ans dans le cas du Traité sur la charte de l'énergie. | `eco-fisc-verte-5` | `diplomatie.gouv.fr` |
| `tribunaux d’arbitrage` | Juridictions privées, désignées par les parties, devant lesquelles certains traités permettent à une entreprise étrangère d'attaquer un État. | `eco-fisc-verte-5` | CNUDCI ; `diplomatie.gouv.fr` |
| `personnalité juridique` | Qualité de sujet de droit : capacité d'être titulaire de droits et d'obligations, et d'agir en justice. Elle est aujourd'hui reconnue aux personnes physiques et à certains groupements (sociétés, associations), non aux animaux ni aux milieux naturels. | `eco-ocean-06`, `eco-condition-animale-08` | code civil ; Sénat |
| `partie civile` | Statut de la victime qui se joint à des poursuites pénales pour demander réparation de son préjudice ; certaines associations agréées peuvent l'obtenir pour des infractions relevant de leur objet. | `eco-condition-animale-04` | code de procédure pénale, art. 2 |
| `avis conforme` | Avis qu'une autorité doit obligatoirement solliciter **et** suivre : contrairement à l'avis simple, il lie la décision. | `eco-dechets-06` | Conseil d'État ; vie-publique |
| `droit de préemption` | Droit reconnu à une personne publique d'acheter un bien en priorité, en se substituant à l'acquéreur choisi par le vendeur, au prix convenu ou fixé par le juge. | `lfi-forets-05`, `eco-forets-05`, `eco-souverainete-01` | code de l'urbanisme ; code rural |
| `Établissement Public Administratif` | Catégorie d'organisme public doté de la personnalité juridique, chargé d'une mission de service public non marchande et soumis au droit administratif. | `eco-forets-01` | vie-publique ; Conseil d'État |
| `travail détaché` | Situation d'un salarié employé par une entreprise d'un pays et envoyé travailler temporairement dans un autre, où il reste affilié au régime social de son pays d'origine. | `lfi-forets-04` | `travail-emploi.gouv.fr` |
| `dumping` | Vente d'un produit à l'exportation à un prix inférieur à celui pratiqué sur son marché d'origine ou à son coût de production. Le mot est aussi employé, par extension, pour l'abaissement des normes sociales, fiscales ou environnementales. | `lfi-fisc-verte-06`, `lfi-ocean-18`, `eco-fisc-verte-4` | OMC ; Commission européenne |
| `Grenelle` | Nom donné, depuis les accords de Grenelle de 1968, à une négociation réunissant l'État, les employeurs, les syndicats et, selon les cas, les associations — comme le « Grenelle de l'environnement » de 2007. | `eco-investissement-02` | vie-publique |
| `CETA` | Accord économique et commercial global entre l'Union européenne et le Canada, appliqué à titre provisoire depuis 2017 et non ratifié par tous les États membres. | `eco-fisc-verte-5` | `policy.trade.ec.europa.eu` |
| `traité pour la protection de la haute mer` | Traité adopté en 2023 sous l'égide des Nations unies (accord BBNJ), qui organise la protection de la biodiversité marine dans les eaux situées au-delà des juridictions nationales. | `lfi-ocean-23` | ONU ; `diplomatie.gouv.fr` |

---

## 5. Termes dont le sens est lui-même disputé — à arbitrer par l'éditeur

Je ne les tranche pas. Chacun est défini par **ce qu'il désigne**, avec attribution d'usage quand
l'expression appartient au vocabulaire d'un camp. L'éditeur décide s'il les publie tels quels, les
reformule, ou les restreint à certaines mesures via le champ `contextes` (comme déjà fait pour
« Sécurité globale » et « Séparatisme »).

**écocide** — occurrence `lfi-biodiversite-05` (« Reconnaître un crime d'écocide »)
- Proposition : « Terme désignant les atteintes les plus graves et durables à l'environnement. Le
  droit français connaît depuis 2021 un « délit d'écocide », qui sanctionne les pollutions les plus
  graves ; la création d'un *crime* d'écocide, en droit français ou international, fait l'objet de
  propositions et n'est pas en vigueur. »
- Ce que la définition ne fait pas : dire si cette création est souhaitable. La mesure LFI la
  demande ; la définition se borne à situer le droit existant.
- Source : ❓ — piste : art. 231-1 à 231-3 du code de l'environnement (loi Climat et résilience de
  2021), Légifrance.
- Note : le verbatim `lfi-planification-10` emploie l'adjectif « écocidaires », **forme distincte**
  qui ne serait pas repérée par l'entrée « écocide ». Je déconseille de proposer « écocidaires » :
  c'est ici un qualificatif d'opinion appliqué à des projets, pas un terme technique.

**méga-bassines** — occurrences `lfi-eau-ressource-07`, `eco-eau-ressource-01`
- Proposition : « Nom donné aux grandes retenues d'eau à ciel ouvert, remplies par pompage dans les
  nappes souterraines ou les cours d'eau en hiver pour irriguer en été. Le terme est employé par
  leurs opposants ; l'administration et les porteurs de projet parlent de « réserves de
  substitution ». »
- L'attribution d'usage **dans les deux sens** est ce qui rend la définition neutre : la retirer
  ferait pencher d'un côté ou de l'autre.
- Source : ❓ — piste : agences de l'eau, ministère de l'agriculture (sur « réserve de
  substitution »).
- Vérifié : l'expression « retenue de substitution » **n'apparaît nulle part** dans le lot ; c'est
  « retenue artificielle » qu'emploie `eco-eau-ressource-01`.

**bifurcation écologique** — occurrences `lfi-ocean-05`, `lfi-investissement-02`,
`lfi-investissement-04`, `lfi-emplois-transition-02` (et d'autres)
- Proposition : « Expression employée par La France insoumise pour désigner son projet de
  réorientation de l'économie face à la crise écologique, par opposition au mot « transition »,
  jugé trop graduel. »
- ⚠️ **Recommandation** : si elle est retenue, cette entrée devrait être **limitée aux mesures LFI
  via `contextes`**, ou reformulée sans attribution. Une définition qui nomme un parti dans le
  glossaire général est une décision éditoriale, pas une décision d'agent. Signalé, non tranché.
- Source : ❓ — la seule source possible est le programme lui-même, ce qui affaiblit la
  traçabilité : c'est un argument pour ne pas la publier.

**planification écologique** — 6 occurrences côté LFI (`lfi-planification-02`, `-04`, `-11`, `-13`…)
et l'axe `eco-planification` côté Écologistes
- Proposition : « Démarche consistant à fixer des objectifs environnementaux datés et chiffrés,
  puis à les répartir entre secteurs et territoires. Le terme est aussi celui de l'administration :
  un secrétariat général à la planification écologique existe auprès du Premier ministre depuis
  2022. »
- Note : cohérent avec la décision déjà prise sur le label de l'axe `eco-planification` (terme
  administratif, conservé). L'entrée de glossaire rendrait cette décision lisible pour le lecteur.
- Source : ❓ — piste : SGPE, `info.gouv.fr` / `gouvernement.fr`.

---

## 6. Bloc JSON prêt à fusionner

**54 entrées**, toutes vérifiées mécaniquement :
- chacune produit **au moins une correspondance** dans les 266 verbatims du lot, avec la regex
  exacte de `Verbatim.tsx` ;
- aucune ne fait doublon avec les 41 entrées existantes de `data/glossaire.json` ;
- aucune ne fait doublon interne ;
- chacune a une `source_url` **testée** (HTTP 200 sur un domaine qui renvoie de vrais 404).

Les termes marqués ❓ dans les sections 1.3, 2, 3, 4 et 5 **ne figurent pas ici** : ils attendent une
source. Le bloc ci-dessous est donc directement fusionnable dans le tableau `termes`, sans retouche
autre qu'éditoriale.

⚠️ **Apostrophes** : plusieurs termes contiennent une apostrophe typographique `’` (et non `'`),
parce que c'est la graphie des verbatims. Ne pas la « corriger » : le repérage est littéral et une
apostrophe droite ne correspondrait à rien.

```json
[
  { "terme": "Stratégie Nationale Bas Carbone", "definition": "Feuille de route de la France pour réduire ses émissions de gaz à effet de serre. Elle fixe des plafonds d'émissions par période de cinq ans (les « budgets carbone ») et par grand secteur, jusqu'à l'objectif de neutralité carbone en 2050.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/strategie-nationale-bas-carbone-snbc" },
  { "terme": "SNBC", "definition": "Stratégie nationale bas-carbone : feuille de route de la France pour réduire ses émissions de gaz à effet de serre, qui fixe des plafonds d'émissions par période de cinq ans et par grand secteur.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/strategie-nationale-bas-carbone-snbc" },
  { "terme": "Planification Pluriannuelle de l’Énergie", "definition": "Document de programmation, adopté par décret, qui fixe pour deux périodes successives les objectifs de production et de consommation de chaque source d'énergie en France et les moyens d'y parvenir. Son nom officiel est « programmation pluriannuelle de l'énergie » (PPE).", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/programmations-pluriannuelles-lenergie-ppe" },
  { "terme": "ICPE", "definition": "Installation classée pour la protection de l'environnement : usine, élevage, entrepôt ou carrière dont l'activité présente des risques ou des nuisances, et qui est à ce titre soumise à déclaration, enregistrement ou autorisation préfectorale, puis à des inspections.", "source_url": "https://www.service-public.fr/professionnels-entreprises/vosdroits/F33414" },
  { "terme": "Installations classées pour la protection de l’environnement", "definition": "Usines, élevages, entrepôts ou carrières dont l'activité présente des risques ou des nuisances, et qui sont à ce titre soumis à déclaration, enregistrement ou autorisation préfectorale, puis à des inspections.", "source_url": "https://www.service-public.fr/professionnels-entreprises/vosdroits/F33414" },
  { "terme": "MACF", "definition": "Mécanisme d'ajustement carbone aux frontières : dispositif de l'Union européenne qui fait payer, à l'importation de certains produits (acier, ciment, aluminium, engrais, électricité, hydrogène), un prix du carbone équivalent à celui supporté par les producteurs européens.", "source_url": "https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_fr" },
  { "terme": "Mécanisme d’ajustement carbone aux frontières", "definition": "Dispositif de l'Union européenne qui fait payer, à l'importation de certains produits (acier, ciment, aluminium, engrais, électricité, hydrogène), un prix du carbone équivalent à celui supporté par les producteurs européens.", "source_url": "https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_fr" },
  { "terme": "Certificats d’Economie d’Energie", "definition": "Dispositif qui oblige les vendeurs d'énergie (électricité, gaz, carburants) à financer des économies d'énergie chez leurs clients — isolation, chaudière, éclairage — sous peine de pénalité. Les travaux réalisés donnent des certificats qui attestent l'obligation remplie.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/dispositif-certificats-deconomies-denergie" },
  { "terme": "CEE", "definition": "Certificats d'économies d'énergie : dispositif qui oblige les vendeurs d'énergie à financer des économies d'énergie chez leurs clients, sous peine de pénalité ; les travaux réalisés donnent des certificats qui attestent l'obligation remplie.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/dispositif-certificats-deconomies-denergie" },
  { "terme": "diagnostic de performance énergétique", "definition": "Document obligatoire lors de la vente ou de la location d'un logement, qui estime sa consommation d'énergie et ses émissions de gaz à effet de serre et lui attribue une étiquette de A à G.", "source_url": "https://www.service-public.fr/particuliers/vosdroits/F16096" },
  { "terme": "DPE", "definition": "Diagnostic de performance énergétique : document obligatoire lors de la vente ou de la location d'un logement, qui estime sa consommation d'énergie et ses émissions de gaz à effet de serre et lui attribue une étiquette de A à G.", "source_url": "https://www.service-public.fr/particuliers/vosdroits/F16096" },
  { "terme": "MaPrimeRénov’", "definition": "Aide financière de l'État à la rénovation énergétique des logements, versée par l'Agence nationale de l'habitat ; son montant dépend des revenus du ménage et des travaux réalisés.", "source_url": "https://www.service-public.fr/particuliers/vosdroits/F35083" },
  { "terme": "Éco-prêt à taux zéro", "definition": "Prêt sans intérêts, distribué par les banques et pris en charge par l'État, destiné à financer des travaux de rénovation énergétique dans un logement ancien.", "source_url": "https://www.service-public.fr/particuliers/vosdroits/F19905" },
  { "terme": "CIGEO", "definition": "Centre industriel de stockage géologique : projet de stockage des déchets radioactifs les plus dangereux à environ 500 mètres sous terre, à Bure (Meuse), porté par l'Andra et déclaré d'utilité publique en 2022.", "source_url": "https://www.andra.fr/cigeo" },
  { "terme": "garantie Cat-Nat", "definition": "Garantie « catastrophes naturelles » incluse d'office dans les contrats d'assurance habitation et automobile. Elle indemnise les dommages causés par un phénomène naturel d'intensité anormale une fois l'état de catastrophe naturelle constaté par arrêté.", "source_url": "https://www.service-public.fr/particuliers/vosdroits/F3076" },
  { "terme": "REACH", "definition": "Règlement européen sur les produits chimiques (2006). Il impose aux industriels d'enregistrer les substances qu'ils fabriquent ou importent et d'en démontrer la sécurité, et permet d'en restreindre l'usage ou de le soumettre à autorisation.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/reglement-reach" },
  { "terme": "liste rouge", "definition": "Inventaire mondial de l'état de conservation des espèces animales et végétales, tenu par l'Union internationale pour la conservation de la nature (UICN), qui les classe par degré de menace.", "source_url": "https://uicn.fr/liste-rouge-mondiale/" },
  { "terme": "UICN", "definition": "Union internationale pour la conservation de la nature : organisation mondiale réunissant États, agences publiques et associations, qui établit notamment la « liste rouge » des espèces menacées.", "source_url": "https://uicn.fr/liste-rouge-mondiale/" },
  { "terme": "Programme national de la forêt et du bois", "definition": "Document-cadre de la politique forestière française, adopté par décret pour dix ans, qui fixe les orientations de gestion des forêts et de la filière bois et se décline en programmes régionaux.", "source_url": "https://agriculture.gouv.fr/le-programme-national-de-la-foret-et-du-bois-2016-2026" },
  { "terme": "Copernicus", "definition": "Programme d'observation de la Terre de l'Union européenne : une flotte de satellites et de capteurs au sol dont les données sur le climat, l'atmosphère, les océans et les sols sont diffusées gratuitement.", "source_url": "https://www.copernicus.eu/fr" },
  { "terme": "REP", "definition": "Responsabilité élargie des producteurs : principe qui rend les fabricants et importateurs d'un produit responsables de sa fin de vie ; ils doivent financer ou organiser la collecte et le traitement des déchets qui en résultent, filière par filière.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/cadre-general-filieres-responsabilite-elargie-producteurs" },
  { "terme": "Responsabilité Élargie des Producteurs", "definition": "Principe qui rend les fabricants et importateurs d'un produit responsables de sa fin de vie : ils doivent financer ou organiser la collecte et le traitement des déchets qui en résultent, filière par filière (emballages, textiles, meubles, bâtiment…).", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/cadre-general-filieres-responsabilite-elargie-producteurs" },
  { "terme": "éco-organismes", "definition": "Sociétés créées et financées par les fabricants d'un même secteur pour assumer collectivement leur obligation de gestion des déchets de leurs produits ; elles sont agréées par l'État selon un cahier des charges.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/cadre-general-filieres-responsabilite-elargie-producteurs" },
  { "terme": "écomodulations", "definition": "Modulation de la contribution financière versée par un fabricant à son éco-organisme : elle est majorée (malus) ou minorée (bonus) selon des critères environnementaux du produit, comme sa durabilité, sa réparabilité ou sa part de matière recyclée.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/cadre-general-filieres-responsabilite-elargie-producteurs" },
  { "terme": "éco-contributions", "definition": "Somme versée par un fabricant ou un importateur à un éco-organisme pour chaque produit mis sur le marché, destinée à financer la collecte et le traitement des déchets correspondants.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/cadre-general-filieres-responsabilite-elargie-producteurs" },
  { "terme": "ZAN", "definition": "« Zéro artificialisation nette » : objectif inscrit dans la loi de ramener à zéro, d'ici 2050, le solde entre les sols nouvellement transformés par l'urbanisation et les sols rendus à la nature.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/artificialisation-sols" },
  { "terme": "zéro artificialisation nette", "definition": "Objectif inscrit dans la loi : ramener à zéro, d'ici 2050, le solde entre les sols nouvellement transformés par l'urbanisation (constructions, routes, parkings) et les sols rendus à la nature.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/artificialisation-sols" },
  { "terme": "artificialisation", "definition": "Transformation d'un sol naturel, agricole ou forestier en surface construite ou imperméabilisée, qui lui fait perdre tout ou partie de ses fonctions : absorption de l'eau, stockage du carbone, accueil du vivant.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/artificialisation-sols" },
  { "terme": "ORE", "definition": "Obligation réelle environnementale : contrat par lequel le propriétaire d'un terrain y attache durablement des engagements de protection de la nature, jusqu'à 99 ans. L'obligation suit le terrain et s'impose aux propriétaires suivants.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/obligation-reelle-environnementale" },
  { "terme": "Obligations réelles environnementales", "definition": "Contrats par lesquels le propriétaire d'un terrain y attache durablement des engagements de protection de la nature (jusqu'à 99 ans). L'obligation suit le terrain : elle s'impose aux propriétaires suivants.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/obligation-reelle-environnementale" },
  { "terme": "Fonds Barnier", "definition": "Nom usuel du fonds de prévention des risques naturels majeurs, créé en 1995 : il finance des travaux de prévention et le rachat de biens trop exposés, face aux inondations, mouvements de terrain ou submersions.", "source_url": "https://www.georisques.gouv.fr/minformer-sur-la-prevention-des-risques/le-fonds-barnier" },
  { "terme": "ZFE", "definition": "Zone à faibles émissions : périmètre urbain dans lequel la circulation des véhicules les plus polluants est restreinte ou interdite, selon leur vignette Crit'Air.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/zones-faibles-emissions-zfe" },
  { "terme": "Crit’air", "definition": "Vignette qui classe un véhicule de 0 à 5 selon ses émissions de polluants, d'après sa motorisation et sa date de mise en circulation ; elle conditionne l'accès aux zones à faibles émissions.", "source_url": "https://www.certificat-air.gouv.fr/" },
  { "terme": "RGESN", "definition": "Référentiel général d'écoconception de services numériques : liste de critères publiés par l'État pour réduire l'empreinte d'un site web ou d'une application (poids des pages, durée de vie des appareils nécessaires, sobriété des fonctionnalités).", "source_url": "https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/" },
  { "terme": "paiements pour services environnementaux", "definition": "Rémunération versée à un agriculteur ou à un propriétaire pour des pratiques bénéfiques à l'environnement qui ne sont pas rétribuées par la vente de sa production : entretien de haies, maintien de prairies, protection de la qualité de l'eau.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/paiements-services-environnementaux" },
  { "terme": "plan Ecophyto", "definition": "Plan public lancé en 2008 et révisé à plusieurs reprises, qui vise à réduire l'usage des produits phytosanitaires en agriculture et suit cette réduction au moyen d'indicateurs chiffrés.", "source_url": "https://agriculture.gouv.fr/le-plan-ecophyto-quest-ce-que-cest" },
  { "terme": "Haut Conseil pour le Climat", "definition": "Organisme indépendant créé en 2019, composé de scientifiques et d'experts, qui évalue chaque année si l'action de la France est cohérente avec ses objectifs climatiques et rend des avis publics.", "source_url": "https://www.hautconseilclimat.fr/a-propos/" },
  { "terme": "Cerema", "definition": "Centre d'études et d'expertise sur les risques, l'environnement, la mobilité et l'aménagement : établissement public qui apporte un appui technique à l'État et aux collectivités sur les infrastructures, les risques et l'adaptation des territoires.", "source_url": "https://www.cerema.fr/fr" },
  { "terme": "ANSES", "definition": "Agence nationale de sécurité sanitaire de l'alimentation, de l'environnement et du travail : établissement public qui évalue les risques sanitaires et délivre ou retire les autorisations de mise sur le marché des pesticides et des biocides.", "source_url": "https://www.anses.fr/fr" },
  { "terme": "déforestation importée", "definition": "Déforestation qui a lieu à l'étranger mais résulte de la consommation nationale, par l'importation de produits dont la culture ou l'élevage a fait reculer la forêt (soja, huile de palme, cacao, bœuf, bois).", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/lutte-contre-deforestation-importee" },
  { "terme": "RDUE", "definition": "Règlement européen sur la déforestation : il interdit de mettre sur le marché de l'Union des produits (bois, cacao, café, soja, huile de palme, bœuf, caoutchouc) issus de terres déboisées après le 31 décembre 2020.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/lutte-contre-deforestation-importee" },
  { "terme": "label bas carbone", "definition": "Label public qui certifie qu'un projet — plantation forestière, changement de pratique agricole… — évite ou stocke une quantité mesurée de gaz à effet de serre, que des entreprises ou des collectivités peuvent ensuite financer.", "source_url": "https://www.ecologie.gouv.fr/label-bas-carbone" },
  { "terme": "agences de l’eau", "definition": "Six établissements publics, un par grand bassin hydrographique, qui perçoivent des redevances sur les prélèvements et les pollutions d'eau et en redistribuent le produit pour financer l'assainissement, la dépollution et la protection des milieux.", "source_url": "https://www.lesagencesdeleau.fr/" },
  { "terme": "politique commune de la pêche", "definition": "Politique de l'Union européenne qui fixe en commun les règles de la pêche : quotas de captures par espèce et par pays, tailles minimales, engins autorisés, aides au secteur.", "source_url": "https://oceans-and-fisheries.ec.europa.eu/policy/common-fisheries-policy-cfp_fr" },
  { "terme": "politique commune des pêches", "definition": "Politique de l'Union européenne qui fixe en commun les règles de la pêche : quotas de captures par espèce et par pays, tailles minimales, engins autorisés, aides au secteur.", "source_url": "https://oceans-and-fisheries.ec.europa.eu/policy/common-fisheries-policy-cfp_fr" },
  { "terme": "Mercosur", "definition": "Marché commun d'Amérique du Sud réunissant l'Argentine, le Brésil, le Paraguay, l'Uruguay et la Bolivie. L'accord commercial négocié entre l'Union européenne et ce bloc n'est pas ratifié à ce jour.", "source_url": "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/mercosur_fr" },
  { "terme": "continuités écologiques", "definition": "Ensemble de milieux naturels reliés entre eux — haies, cours d'eau, bandes enherbées — permettant aux espèces de circuler entre leurs zones de vie ; leur mise en réseau s'appelle la « trame verte et bleue ».", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/trame-verte-bleue" },
  { "terme": "méthanisation", "definition": "Dégradation de matières organiques (effluents d'élevage, résidus de culture, biodéchets) par des micro-organismes en l'absence d'air, qui produit un gaz combustible — le biogaz — et un résidu utilisable comme fertilisant, le digestat.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/biogaz" },
  { "terme": "stations de transfert d’énergie par pompage", "definition": "Installations hydroélectriques à deux bassins : l'eau est pompée vers le bassin haut quand l'électricité est abondante, puis turbinée vers le bassin bas quand elle manque. C'est le principal moyen de stocker de l'électricité à grande échelle.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/hydroelectricite" },
  { "terme": "STEP", "definition": "Station de transfert d'énergie par pompage : installation hydroélectrique à deux bassins où l'eau est pompée vers le bassin haut quand l'électricité est abondante, puis turbinée vers le bassin bas quand elle manque.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/hydroelectricite" },
  { "terme": "agroécologique", "definition": "Qualifie des façons de produire qui s'appuient sur les mécanismes naturels — rotation des cultures, couverture des sols, haies, associations de plantes — pour réduire le recours aux engrais et pesticides de synthèse.", "source_url": "https://agriculture.gouv.fr/quest-ce-que-lagroecologie" },
  { "terme": "énergies marines renouvelables", "definition": "Électricité produite à partir de la mer : vent au large (éolien posé ou flottant), courants de marée (hydrolien), houle, différences de température.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/energies-renouvelables" },
  { "terme": "bioénergies", "definition": "Énergies produites à partir de matière organique — bois, déchets verts, cultures, effluents d'élevage — par combustion, fermentation ou méthanisation.", "source_url": "https://www.ecologie.gouv.fr/politiques-publiques/energies-renouvelables" },
  { "terme": "sylviculture", "definition": "Ensemble des pratiques de culture et d'entretien d'une forêt : plantation, éclaircies, choix des essences, organisation des coupes.", "source_url": "https://agriculture.gouv.fr/la-gestion-durable-des-forets" }
]
```

---

## 7. Termes écartés, et pourquoi

### 7.1 — Signalés dans la commande mais **absents du lot** (vérifié par script)

| Terme cherché | Constat |
|---|---|
| `TIRUERT` | Aucune occurrence dans les 266. Le sigle existe bien dans le corpus, mais dans `eco-fisc-verte-1`, mesure **hors périmètre** (lot fiscalité antérieur). À traiter lors d'un passage sur ce lot-là, pas ici. |
| `préjudice écologique` | Aucune occurrence dans le lot. |
| `taxonomie européenne` | Aucune occurrence dans le lot. |
| `Pacte vert` | Aucune occurrence dans le lot. |
| `biomasse` | Aucune occurrence. Les formes présentes sont « bioénergies », « bois-énergie », « bois énergie ». |
| `effacement` (de consommation) | Aucune occurrence. `eco-energie-02` parle de « mécanismes de flexibilité » et de « stockage ». |
| `mix` (énergétique) | Aucune occurrence, malgré l'axe nommé `eco-energie-mix`. |
| `retenue de substitution` | Aucune occurrence : c'est « méga-bassines » et « retenue artificielle » qui sont employés. |
| `agroécologie` (nom seul) | Aucune occurrence. Seul l'adjectif `agroécologique` apparaît — c'est lui qui est proposé. |
| `autoconsommation` | Aucune occurrence. |
| `PPE` (sigle seul) | Aucune occurrence : seul `PPE3` apparaît. |
| `indice de réparabilité` (singulier) | Aucune occurrence : seule la forme plurielle `indices de réparabilité` existe. |

### 7.2 — Écartés parce que déjà explicités **dans le verbatim lui-même**

Le lecteur a la réponse dans la phrase qu'il lit ; ajouter une infobulle alourdirait sans éclairer.

`règle verte` (définie mot pour mot en `lfi-planification-01`) · `effet falaise` (« c'est-à-dire une
rupture brutale de production ») · `zones mortes` (« dépourvues d'oxygène ») · `sérialisation`
(« part-pairing ») · `carve-out` · `no take zones` · `build back better` · `CMR` · `CVM` · `CREP` ·
`FIVP` · `SNBEL` · `THRS` · `BBC` · `renminbi` · `OGM` · `gaz à effet de serre (GES)` · `ASN` ·
`IRSN` · `ONF` · `OFB` · `AMP` · `PLU` · `IRD` · `ECHA` · `DGCCRF` · `GPEC` · `ISDND`.

Nuance : quelques-uns de ces sigles sont développés mais restent **opaques quant au fond** (`ISDND`,
`GPEC`) ; je les ai malgré tout proposés en 1.3, à l'appréciation de l'éditeur.

### 7.3 — Écartés parce que trop courants ou compris dans la phrase

`moratoire` · `résilience` · `incinération` · `enfouissement` · `friches industrielles` ·
`nappes phréatiques` · `pompes à chaleur` · `aquaculture` · `milles nautiques` · `légumineuses` ·
`Casques bleus` · `Accords de Paris` · `droits de douane` · `coentreprises` · `heures creuses` ·
`décarbonation` · `efficacité énergétique`.

### 7.4 — Écartés pour **risque de faux positif** (polysémie)

Le repérage impose désormais des frontières de mot, mais rien ne distingue deux **sens** d'un même
mot. Ces termes surligneraient à contretemps :

| Terme | Le conflit |
|---|---|
| `essences` | Sens forestier (`lfi-forets-09`, `lfi-forets-10`, `eco-forets-01`) **contre** « stations essences » (`eco-energie-06`). Je l'ai malgré tout proposé en §3 : **s'il est retenu, il doit l'être avec un champ `contextes`** listant les seules mesures forestières. Sinon, l'écarter. |
| `gisements` | Sens « stocks d'objets réemployables » (`eco-dechets-04`) contre le sens minier courant. |
| `sobriété` | 7 occurrences, dont plusieurs où le mot est employé au sens courant ; définir la « sobriété » comme concept de politique énergétique serait ici plus intrusif qu'utile. |
| `démantèlement` | Nucléaire (`lfi-nucleaire-01`), réseau de gaz (`eco-energie-06`), mais aussi sens figuré (`eco-ocean-07` : « démantèlement des objectifs ») — et deux occurrences hors lot sans rapport. |
| `quotas` | Pêche (`eco-ocean-03`), carbone, embauche (`eco-fisc-verte-2`) : trois sens dans le même corpus. |
| `flexibilité`, `pilotable`, `stockage de l’énergie` | Sens technique précis en électricité, mais mots trop courants pour supporter une infobulle partout. |
| `HAP` | 3 lettres, une seule occurrence (`eco-toxiques-02`), déjà entre parenthèses dans une énumération : bénéfice faible, risque de collision élevé. |
| `INN` | 3 lettres. Proposé en 1.3 car le terme est réellement obscur, mais c'est le candidat le plus exposé du lot : à vérifier visuellement. |

### 7.5 — Écartés au nom de la **neutralité** (garde-fou n°5)

| Terme | Motif |
|---|---|
| `écocidaires` | C'est un qualificatif d'opinion appliqué à des projets (`lfi-planification-10`), pas un terme technique. Le définir reviendrait à valider le jugement. Le terme `écocide` (§5), lui, désigne une notion juridique identifiable. |
| `protectionnisme écologique` | Formule programmatique, pas une catégorie établie. La définir, c'est la légitimer ou la relativiser — dans les deux cas, prendre parti. |
| `règle verte`, `règle bleue` | Concepts propres au programme LFI, définis dans le verbatim. Une définition externe risquerait d'en durcir ou d'en adoucir la portée. |
| `bifurcation écologique` | Vocabulaire de parti. Traité en §5 avec attribution explicite, **non recommandé** en entrée globale de glossaire. |
| `grands projets inutiles` | Jugement de valeur porté par le verbatim ; le glossaire n'a pas à trancher l'utilité d'un projet. |

### 7.6 — Déjà couvert par le glossaire existant

`niches fiscales` (entrée existante) se déclenche désormais aussi sur deux mesures du lot écologie :
`lfi-fisc-verte-06` et `eco-energie-prix-01`. **Aucune action nécessaire** — juste un gain gratuit
de couverture à connaître.

---

## 8. Ce que je n'ai pas fait

- Aucune modification de `data/glossaire.json`, `data/candidats/*.json` ni d'aucun fichier de
  données ou de code. Ce rapport est le seul fichier créé.
- Aucun commit.
- Aucun verbatim touché.
- Aucune URL citée sans test HTTP préalable ; aucune définition inventée pour combler un trou —
  les trous sont marqués ❓.

## 9. Deux points à remonter à l'éditeur

1. **La procédure `.claude/agents/glossaire.md` est en retard sur le code.** Elle avertit que le
   repérage « n'impose pas (encore) de frontière de mot » ; `Verbatim.tsx` en impose désormais
   (lookarounds Unicode). La règle « pas de sigle de moins de 3 lettres » peut être assouplie en
   connaissance de cause — j'ai continué à l'appliquer.
2. **Les sources vie-publique.fr du glossaire existant méritent une vérification humaine.** Le
   domaine renvoie 200 sur n'importe quelle URL, y compris inexistante, et ne sert aucun contenu aux
   outils automatisés : ni moi ni un agent précédent n'avons pu, techniquement, en vérifier une
   seule. 13 des 41 entrées actuelles en dépendent.
