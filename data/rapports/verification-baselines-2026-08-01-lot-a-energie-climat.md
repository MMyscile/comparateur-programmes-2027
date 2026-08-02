# Baselines « Écologie, climat & énergie » — lot A (9 axes)

> Date : 2026-08-01 · Agent : verificateur-sources · **Rapport — RIEN n'a été modifié** dans
> `data/axes.json`, `data/candidats/*.json`, `data/taxonomie.json` ni le code.
>
> Particularité de la mission : les 9 baselines de ce lot étaient **vides**. Il ne s'agit donc pas de
> vérifier un texte existant mais de l'écrire. Le « verdict » indique le degré de solidité du texte
> proposé, pas l'état d'une baseline antérieure :
> - **🆕 solide** — tous les faits affirmés sont sourcés niveau 1 ou 2 et datés.
> - **🆕 partielle** — le texte tient, mais un aspect couvert par les mesures de l'axe reste non sourçable en ligne (signalé).
> - **❓** — fait non retenu faute de source primaire (listé en fin de rapport).
>
> Périmètre : `eco-planification`, `eco-energie-mix`, `eco-nucleaire`, `eco-energie-prix`,
> `eco-renovation`, `eco-adaptation`, `eco-industrie-decarbonation`, `eco-investissement`,
> `eco-emplois-transition`.
>
> Convention : un **fait affirmé = un lien**, niveau (1) texte juridique en vigueur, (2) administration
> ou opérateur public, (3) institution européenne/internationale, (4) presse/spécialisé (jamais seul).

## Textes de référence intégrés (postérieurs aux derniers rapports du dépôt)

Trois textes structurants sont parus **après** le dernier passage de vérification (2026-07-29) ou
n'avaient jamais été intégrés ; toute baseline « climat-énergie » écrite sans eux serait périmée dès
publication :

| Texte | Date | Effet |
| --- | --- | --- |
| **Décret n° 2026-76** relatif à la programmation pluriannuelle de l'énergie (PPE3) | 12/02/2026 (JO 13/02) | Fixe la trajectoire énergétique 2026-2035 **par voie réglementaire**, sans loi de programmation |
| **Décret n° 2026-636** relatif aux budgets carbone nationaux et à la SNBC | 16/07/2026 (JO 18/07) | Adopte la **SNBC-3** et fixe les budgets carbone jusqu'en 2038 |
| **LOI n° 2026-554** visant à relancer les investissements dans l'hydroélectricité | 29/06/2026 (JO 30/06) | **Supprime le régime de concession hydraulique** au profit d'un régime d'autorisation |

> **Note de méthode sur la vérification des URL.** Chaque URL citée a été ouverte et son contenu lu.
> Les serveurs `legifrance.gouv.fr`, `economie.gouv.fr`, `info.gouv.fr`, `interieur.gouv.fr` et
> `ademe.fr` renvoient un code 403 aux requêtes automatisées (protection anti-robot) : le contenu des
> pages Légifrance citées a été vérifié par lecture directe, pas par test de code HTTP. Le serveur
> `budget.gouv.fr` répond 200 mais ne sert aucun contenu lisible hors navigateur : **aucune de ses
> pages n'est citée comme source d'un chiffre** dans ce rapport. Toutes les autres URL citées
> renvoient un code 200 et leur contenu a été lu. **Aucune URL n'a été devinée** : chaque identifiant Légifrance provient d'un résultat
> de recherche puis a été ouvert pour confirmer que le texte correspond bien au fait affirmé.

---

## 1. `eco-planification` — Planification écologique & objectifs climatiques

**Verdict : 🆕 solide.**

**Ce que les mesures de l'axe exigent de couvrir.** LFI : cible de « −65 % d'émissions en 2030 (au
lieu de 50 % actuellement) », lois-cadres de planification, Conseil à la planification, moyens des
opérateurs. Les Écologistes : « loi de programmation climatique (dite loi énergie-climat) », SNBC-4,
PPE3. La baseline doit donc dire (a) quel objectif est aujourd'hui opposable et par quel acte, (b) où
en est réellement la trajectoire, (c) quel véhicule juridique porte la planification — c'est
précisément le point où le programme des Écologistes est déjà rattrapé par le calendrier (la SNBC-3 a
été adoptée le 16 juillet 2026, la loi de programmation, elle, n'existe toujours pas).

**Texte de baseline proposé :**

> La trajectoire climatique en vigueur est fixée par la stratégie nationale bas-carbone SNBC-3,
> adoptée par le décret n° 2026-636 du 16 juillet 2026 : baisse de moitié des émissions brutes en
> 2030 par rapport à 1990, neutralité carbone en 2050, et budgets carbone plafonnés à 342 Mt CO2e par
> an en moyenne sur 2024-2028, 262 Mt sur 2029-2033 et 194 Mt sur 2034-2038. Les émissions de la
> France sont estimées à 359,4 Mt CO2e en 2025, soit −2,1 % sur un an et −34,3 % depuis 1990, alors
> que l'atteinte de la cible 2030 suppose environ −5 % par an d'ici 2030 (estimation ministérielle du
> 16 juin 2026). L'article L. 100-1 A du code de l'énergie prévoit depuis 2019 une loi de
> programmation quinquennale sur l'énergie et le climat, qui devait être adoptée avant le
> 1er juillet 2023 : elle ne l'a pas été, la proposition de loi de programmation énergétique déposée
> au Sénat n'ayant pas achevé sa navette, et la programmation pluriannuelle de l'énergie 2026-2035 a
> finalement été arrêtée par décret le 12 février 2026. La coordination interministérielle est
> assurée par le secrétariat général à la planification écologique, placé auprès du Premier ministre
> par le décret n° 2022-990 du 7 juillet 2022.

**Sources (une par fait) :**
- SNBC-3, objectifs 2030/2050 et budgets carbone 2024-2038 : [Légifrance, décret n° 2026-636 du 16 juillet 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054440907) (1).
- Émissions 2025 (359,4 Mt CO2e, −2,1 %, −34,3 % depuis 1990, rythme requis ≈ −5 %/an) : [ministère de la Transition écologique, communiqué du 16 juin 2026](https://www.ecologie.gouv.fr/presse/baisse-emissions-gaz-effet-serre-se-poursuit-2024-2025-france-doit-accelerer-sa) (2).
- Obligation d'une loi de programmation énergie-climat avant le 1er juillet 2023 : [Légifrance, art. L. 100-1 A du code de l'énergie, version en vigueur depuis le 3 mai 2025](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043976321) (1).
- Navette inachevée de la proposition de loi de programmation énergétique (adoptée au Sénat le 16/10/2024, rejetée à l'Assemblée le 24/06/2025, transmise à nouveau le 09/07/2025, sans adoption définitive) : [Sénat, dossier législatif PPL n° 23-555](https://www.senat.fr/dossier-legislatif/ppl23-555.html) (2).
- PPE 2026-2035 arrêtée par décret : [Légifrance, décret n° 2026-76 du 12 février 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053464980) (1).
- Secrétariat général à la planification écologique : [Légifrance, décret n° 2022-990 du 7 juillet 2022](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000046026058) (1).

**Ce qui a changé :** baseline créée. Point de vigilance pour l'éditeur : la formulation « au lieu de
50 % actuellement » dans la mesure `lfi-planification-05` reste exacte au 1er août 2026 (la SNBC-3
confirme la baisse de moitié en 2030), mais la mesure `eco-planification-02` des Écologistes
(« construire une SNBC-4 ») est **datée par l'adoption de la SNBC-3 le 16 juillet 2026** ; la mention
de la « PPE3 » à modifier dans `eco-planification-01` vise un texte désormais publié. Ces décalages
relèvent de `etat_maturite`, pas de la baseline.

---

## 2. `eco-energie-mix` — Mix énergétique & énergies renouvelables

**Verdict : 🆕 solide** (une réserve documentée : voir « gaz » ci-dessous).

**Ce que les mesures de l'axe exigent de couvrir.** LFI : « planifier le passage à 100 % d'énergies
renouvelables », modernisation et enfouissement du réseau, STEP et pilotage des pics. Les
Écologistes : électrification des usages, robustesse du réseau, filières EnR, 10 000 communautés
énergétiques, démantèlement du réseau de distribution de gaz. La baseline doit donner le point de
départ chiffré : part actuelle des EnR (dans l'énergie **et** dans l'électricité, deux chiffres très
différents souvent confondus) et trajectoire opposable.

**Texte de baseline proposé :**

> Les énergies renouvelables représentent 23,0 % de la consommation finale brute d'énergie en 2024
> (résultat provisoire), pour un objectif de 33 % en 2030. Sur le seul système électrique, la
> production métropolitaine a atteint 547,5 TWh en 2025, dont 95,2 % d'électricité bas-carbone : les
> filières renouvelables en ont fourni 27,0 % et le nucléaire 373,0 TWh. Le parc de production
> installé atteignait 164,5 GW fin 2025, dont 30,4 GW de solaire (+5,9 GW en un an, la filière ayant
> dépassé l'hydraulique, 25,7 GW) et 23,9 GW d'éolien terrestre (+0,9 GW, troisième année
> consécutive de ralentissement). La trajectoire du mix pour 2026-2035 est fixée par la programmation
> pluriannuelle de l'énergie adoptée par le décret n° 2026-76 du 12 février 2026.

**Sources (une par fait) :**
- Part des EnR dans la consommation finale brute (23,0 % en 2024, objectif 33 % en 2030) : [SDES, *Chiffres clés des énergies renouvelables*, édition 2025 — suivi des objectifs](https://www.statistiques.developpement-durable.gouv.fr/edition-numerique/chiffres-cles-energies-renouvelables/fr/partie4-suivi-des-objectifs-de-la-france) (2).
- Production électrique 2025, part bas-carbone, part renouvelable, production nucléaire, capacités installées par filière : [RTE, *Bilan électrique 2025 — principaux résultats*, février 2026](https://assets.rte-france.com/prod/public/2026-02/Bilan-electrique-2025-principaux-resultats.pdf) (2).
- Trajectoire 2026-2035 : [Légifrance, décret n° 2026-76 du 12 février 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053464980) (1).

**Ce qui a changé :** baseline créée.

**Réserve documentée — le gaz.** La mesure `eco-energie-06` des Écologistes porte sur le
démantèlement du réseau de distribution de gaz fossile. Aucune source officielle donnant à la fois la
longueur du réseau de distribution, le nombre de clients raccordés et une trajectoire publique de
décroissance n'a pu être ouverte et vérifiée dans le temps de ce lot : le fait est laissé **❓** et
non comblé. L'éditeur peut soit s'en tenir à la baseline ci-dessus, soit demander un complément
ciblé (source à privilégier : GRDF ou le volet « gaz » du document de PPE3).

---

## 3. `eco-nucleaire` — Nucléaire : sortie, sûreté, déchets

**Verdict : 🆕 solide.**

**Ce que les mesures de l'axe exigent de couvrir.** LFI : abandon des projets d'EPR, démantèlement,
abrogation de la fusion ASN/IRSN. Les Écologistes : fin des programmes EPR-2 et SMR, arrêt progressif
du parc, retour sur la fusion IRSN/ASN, moratoire sur Cigéo, sécurisation des déchets. La baseline
doit donc donner : la place actuelle du nucléaire, l'état du droit sur les objectifs de mix, l'état
du gendarme du nucléaire, et l'état d'avancement de Cigéo — ce dernier point ayant beaucoup bougé
entre décembre 2025 et juillet 2026.

**Texte de baseline proposé :**

> Le parc nucléaire représentait 63,0 GW de capacité installée fin 2025, EPR de Flamanville 3
> (1,6 GW, couplé au réseau en décembre 2024) inclus, et a produit 373,0 TWh en 2025, soit environ
> 68 % des 547,5 TWh produits en France métropolitaine. L'objectif de ramener la part du nucléaire à
> 50 % de la production d'électricité en 2035 et le plafond de capacité de 63,2 GW, tous deux issus
> de la loi du 17 août 2015, ont été supprimés par la loi n° 2023-491 du 22 juin 2023 relative à
> l'accélération des procédures de construction de nouvelles installations nucléaires. L'Autorité de
> sûreté nucléaire (ASN) et l'Institut de radioprotection et de sûreté nucléaire (IRSN) ont fusionné
> le 1er janvier 2025 au sein de l'Autorité de sûreté nucléaire et de radioprotection (ASNR), en
> application de la loi n° 2024-450 du 21 mai 2024. Sur les déchets, la France recensait environ
> 1,85 million de m³ de déchets radioactifs au 31 décembre 2023, dont 4 550 m³ de haute activité ;
> le projet de stockage géologique profond Cigéo a reçu un avis favorable sous conditions de l'ASNR
> le 25 novembre 2025 et son enquête publique s'est tenue du 18 mai au 16 juillet 2026, le décret
> d'autorisation de création restant à prendre. La Cour des comptes a évalué en janvier 2025 le coût
> à terminaison de l'EPR de Flamanville 3 à 23,7 Md€ (valeur 2023).

**Sources (une par fait) :**
- Capacité nucléaire installée fin 2025 (63,0 GW dont Flamanville 3), production 2025 (373,0 TWh) et production totale métropolitaine (547,5 TWh) : [RTE, *Bilan électrique 2025 — principaux résultats*, février 2026](https://assets.rte-france.com/prod/public/2026-02/Bilan-electrique-2025-principaux-resultats.pdf) (2). *La part « environ 68 % » est le rapport de deux grandeurs publiées dans ce même bilan.*
- Suppression de l'objectif de 50 % en 2035 et du plafond de 63,2 GW : [Légifrance, LOI n° 2023-491 du 22 juin 2023](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047715784) (1).
- Fusion ASN/IRSN au 1er janvier 2025 (loi n° 2024-450 du 21 mai 2024) : [ASNR, « Création de l'Autorité de sûreté nucléaire et de radioprotection »](https://www.asnr.fr/actualites/creation-de-lautorite-de-surete-nucleaire-et-de-radioprotection-asnr) (2).
- Volumes de déchets radioactifs au 31/12/2023 : [Andra, *Inventaire national des matières et déchets radioactifs — Les Essentiels 2025*](https://inventaire.andra.fr/sites/default/files/pdf/andra_inventaire_national_essentiel_2025_web.pdf) (2).
- Avis de l'ASNR sur la demande d'autorisation de création de Cigéo (25 novembre 2025) : [ASNR](https://www.asnr.fr/actualites/lasnr-publie-son-avis-sur-la-demande-dautorisation-de-creation-de-cigeo) (2).
- Enquête publique Cigéo du 18 mai au 16 juillet 2026 (arrêté interpréfectoral n° 2026-587 du 9 avril 2026, prolongation de 14 jours) : [préfecture de l'Ain, enquête publique Cigéo — DAC](https://www.ain.gouv.fr/Publications/Enquetes-publiques/Projet-CIGEO-dossier-de-demande-d-autorisation-de-creation-DAC) (2).
- Coût à terminaison de Flamanville 3 : [Cour des comptes, *La filière EPR : une dynamique nouvelle, des risques persistants*, 14 janvier 2025](https://www.ccomptes.fr/sites/default/files/2025-01/20250114-La-filiere-EPR%20-une-dynamique-nouvelle-des-risques-persistants.pdf) (2).

**Ce qui a changé :** baseline créée.

**Fait écarté ❓.** Le coût du programme des six EPR2 (chiffre de 72,8 Md€ largement repris depuis
fin 2025) n'a pas pu être rattaché à une source de niveau 1 ou 2 accessible : les pages officielles
du ministère décrivant le parc (`ecologie.gouv.fr`) datent de 2021-2022 et ne le mentionnent pas.
Non intégré à la baseline. Même remarque pour le décompte « 57 réacteurs » : les deux pages
officielles consultées annoncent encore « 56 réacteurs + un EPR en construction » (mises à jour du
26/10/2021 et du 14/02/2022) — la baseline s'en tient donc à la capacité installée publiée par RTE,
qui est à jour.

---

## 4. `eco-energie-prix` — Prix de l'énergie, marché & service public de l'énergie

**Verdict : 🆕 solide.**

**Ce que les mesures de l'axe exigent de couvrir.** LFI : tarifs réglementés calculés sur les coûts
de production, annulation de la libéralisation, arrêt de la privatisation des barrages,
renationalisation d'EDF et d'Engie, annulation des hausses du gaz depuis 2017. Les Écologistes :
fiscalité de l'électricité et du gaz, refonte du tarif bleu, refus de l'extension du marché carbone
aux ménages (ETS2). Quatre faits sont indispensables : le régime post-ARENH entré en vigueur au
1er janvier 2026, l'état des tarifs réglementés (électricité et gaz), la propriété d'EDF, et le
statut réel de l'ETS2 — qui a été **reporté à 2028**, ce qu'aucune lecture du programme ne signale.

**Texte de baseline proposé :**

> L'accès régulé à l'électricité nucléaire historique (ARENH), qui permettait aux fournisseurs
> alternatifs d'acheter à EDF jusqu'à 100 TWh par an à 42 €/MWh, s'appliquait jusqu'au
> 31 décembre 2025 ; il est remplacé depuis le 1er janvier 2026 par le versement nucléaire universel,
> codifié aux articles L. 337-3 et suivants du code de l'énergie, qui applique de plein droit une
> réduction sur les factures lorsque les revenus tirés du nucléaire dépassent un seuil fixé par
> arrêté. Les tarifs réglementés de vente d'électricité subsistent : la Commission de régulation de
> l'énergie a proposé une hausse moyenne de 2,5 % TTC au 1er août 2026, portant la facture annuelle
> type de 1 046 à 1 072 € pour une consommation de 4,5 MWh, l'accise sur l'électricité passant dans
> le même temps de 30,85 à 30,62 €/MWh. Les tarifs réglementés de vente de gaz naturel pour les
> particuliers ont en revanche été supprimés le 30 juin 2023 ; la CRE publie depuis un simple prix
> repère mensuel, sans valeur contraignante. EDF est détenue à 100 % par l'État et qualifiée de
> société anonyme d'intérêt national par la loi n° 2024-330 du 11 avril 2024, tandis que la loi
> n° 2026-554 du 29 juin 2026 a supprimé le régime de concession hydraulique au profit d'un régime
> d'autorisation pour les installations de plus de 4 500 kW. Enfin, l'extension du marché carbone
> européen aux bâtiments et au transport routier (SEQE-UE 2) a été reportée de 2027 à 2028 ; la
> France doit percevoir 9,7 Md€ au titre du Fonds social pour le climat sur 2026-2032.

**Sources (une par fait) :**
- ARENH : prix de 42 €/MWh, plafond de 100 TWh par an, dispositif applicable jusqu'au 31 décembre 2025 : [CRE, « Accès régulé à l'électricité nucléaire historique (ARENH) »](https://www.cre.fr/electricite/marche-de-gros-de-lelectricite/acces-regule-a-lelectricite-nucleaire-historique-arenh.html) (2).
- Versement nucléaire universel applicable aux fournitures d'électricité à compter du 1er janvier 2026 : [Légifrance, code de l'énergie, sous-section « Versement nucléaire universel » (art. L. 337-3 à L. 337-3-6)](https://www.legifrance.gouv.fr/codes/id/LEGISCTA000051213805) (1).
- Évolution des TRV d'électricité au 1er août 2026 (+2,5 % TTC, facture type, accise de 30,85 à 30,62 €/MWh) : [CRE, délibération/actualité du 20 juillet 2026](https://www.cre.fr/actualites/toute-lactualite/la-cre-propose-une-evolution-du-niveau-moyen-des-tarifs-reglementes-de-vente-de-lelectricite-de-25-ttc-au-1er-aout-2026.html) (2).
- Suppression des TRV gaz pour les particuliers et publication d'un prix repère : [CRE, « Prix repère de vente de gaz naturel à destination des clients résidentiels »](https://www.cre.fr/consommateurs/prix-reperes-et-references/prix-repere-de-vente-de-gaz-naturel-a-destination-des-clients-residentiels.html) (2).
- EDF détenue à 100 % par l'État, société anonyme d'intérêt national : [Légifrance, LOI n° 2024-330 du 11 avril 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049405323) (1).
- Fin du régime de concession hydraulique : [Légifrance, LOI n° 2026-554 du 29 juin 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054340720) (1).
- SEQE-UE 2 : démarrage en 2028 et 9,7 Md€ de Fonds social pour le climat pour la France (2026-2032) : [ministère de la Transition écologique, « Marchés du carbone — SEQE-UE 2 », page mise à jour le 28 juillet 2026](https://www.ecologie.gouv.fr/politiques-publiques/marches-du-carbone-seqe-ue-2) (2).

**Ce qui a changé :** baseline créée.

**Point de vigilance éditorial.** Deux mesures de l'axe sont partiellement dépassées par le droit en
vigueur au 1er août 2026 : `lfi-energie-prix-02` (« stopper la privatisation des barrages
hydroélectriques ») vise un régime de concession que la loi du 29 juin 2026 a supprimé au profit
d'autorisations, et `eco-energie-prix-02` (« renégocier la directive ETS2 ») vise un dispositif dont
l'entrée en vigueur a déjà été repoussée à 2028. Relève de `etat_maturite`, pas de la baseline.

**Fait écarté ❓.** Le chèque énergie 2026 (nombre de bénéficiaires, montant moyen) : la seule page
officielle identifiée est sur `economie.gouv.fr`, qui refuse les requêtes automatisées ; le fait n'a
donc pas pu être vérifié dans les conditions requises et n'est pas intégré.

---

## 5. `eco-renovation` — Rénovation énergétique & sobriété des bâtiments

**Verdict : 🆕 solide.**

**Ce que les mesures de l'axe exigent de couvrir.** Les deux programmes chiffrent une cible :
700 000 logements isolés par an (LFI), 500 000 rénovations performantes et un million de personnes
sorties de la précarité énergétique par an (Les Écologistes). Sont aussi visés : l'interdiction
effective de louer des passoires, le remplacement des chaudières au fioul (LFI ; « fin du fioul en
2032 » et 300 000 changements de chauffage par an pour les Écologistes) et la réforme des CEE. La
baseline doit donc donner l'état du parc, le rythme réellement financé, le calendrier d'interdiction
en vigueur et le volume du dispositif CEE.

**Texte de baseline proposé :**

> Au 1er janvier 2025, la France comptait 3,9 millions de passoires énergétiques (étiquettes F et G)
> parmi 30,9 millions de résidences principales, soit 12,7 % du parc ; un arrêté du 13 août 2025 a
> abaissé au 1er janvier 2026 le facteur de conversion de l'électricité en énergie primaire de 2,3 à
> 1,9 dans le calcul du DPE, ce qui modifie l'étiquette de logements chauffés à l'électricité sans
> travaux. En 2025, l'Anah a distribué 4,39 Md€ d'aides à l'habitat (+16 % sur un an) et financé
> 120 305 rénovations d'ampleur, soit près de 40 % des rénovations énergétiques qu'elle finance.
> La location des logements classés G est interdite depuis le 1er janvier 2025 pour les baux conclus,
> renouvelés ou tacitement reconduits, interdiction étendue aux logements F au 1er janvier 2028 et
> aux logements E au 1er janvier 2034 (calendrier décalé outre-mer). Le dispositif des certificats
> d'économies d'énergie est entré le 1er janvier 2026 dans sa sixième période, courant jusqu'au
> 31 décembre 2030 (décret n° 2025-1048 du 30 octobre 2025). Enfin, 3,1 millions de ménages, soit
> 10,1 %, étaient en situation de précarité énergétique en 2023 selon l'indicateur de taux d'effort
> énergétique.

**Sources (une par fait) :**
- 3,9 M de passoires F/G sur 30,9 M de résidences principales (12,7 %) au 1er janvier 2025 : [SDES, *Le parc de logements par classe de performance énergétique au 1er janvier 2025*, publié le 12 novembre 2025](https://www.statistiques.developpement-durable.gouv.fr/le-parc-de-logements-par-classe-de-performance-energetique-au-1er-janvier-2025) (2).
- Facteur de conversion du DPE ramené de 2,3 à 1,9 au 1er janvier 2026 : [Légifrance, arrêté du 13 août 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052134589) (1).
- Aides Anah 2025 (4,39 Md€, +16 %) et 120 305 rénovations d'ampleur (≈ 40 % des rénovations énergétiques financées) : [Anah, *Les chiffres clés 2025*](https://www.anah.gouv.fr/anatheque/les-chiffres-cles-2025) (2).
- Calendrier d'interdiction de location (G au 01/01/2025, F au 01/01/2028, E au 01/01/2034 ; outre-mer décalé) : [service-public.fr, « Les passoires thermiques les moins bien isolées ne peuvent plus être mises en location »](https://www.service-public.fr/particuliers/actualites/A17975) (2).
- Sixième période des CEE (1er janvier 2026 – 31 décembre 2030) : [Légifrance, décret n° 2025-1048 du 30 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052486193) (1).
- Précarité énergétique : 3,1 M de ménages (10,1 %) en 2023 : [ONPE, *Tableau de bord de la précarité énergétique*, édition novembre 2025](https://www.precarite-energie.org/wp-content/uploads/2025/11/onpe-tableau-de-bord-v12-compressed.pdf) (2).

**Ce qui a changé :** baseline créée.

**Faits écartés ❓.**
- Le volume total d'obligation de la 6e période des CEE (chiffre de 5 250 TWh cumac, soit
  1 050 TWh cumac/an, largement repris depuis juillet 2025) ne figure pas dans le décret consulté :
  celui-ci fixe les obligations **par type d'énergie** et plafonne à 500 milliards de kWh cumac le
  volume délivrable au titre des programmes. Le total agrégé n'est donc pas repris dans la baseline.
- Le nombre de logements chauffés au fioul est disponible (2,6 millions de résidences principales en
  2022, Insee) mais date d'avant les deux plans successifs de sortie du fioul : la donnée est
  signalée ici sans être intégrée à la baseline, faute de millésime récent.

---

## 6. `eco-adaptation` — Adaptation au changement climatique & risques naturels

**Verdict : 🆕 solide.**

**Ce que les mesures de l'axe exigent de couvrir.** Les Écologistes chiffrent (7 Md€/an pour le plan
national d'adaptation), créent une Caisse nationale de sécurité climatique intégrant le Fonds
Barnier, révisent les plans de prévention des risques et le statut du pompier volontaire. LFI vise
les infrastructures, les PPRi/PGRI et les feux de forêt. La baseline doit donc décrire : le plan
d'adaptation existant et son scénario de référence, le régime d'indemnisation des catastrophes
naturelles et son financement, et le fonds de prévention.

**Texte de baseline proposé :**

> Le troisième plan national d'adaptation au changement climatique (PNACC-3) a été publié le
> 10 mars 2025 : il comporte 52 mesures et retient comme référence la trajectoire de réchauffement
> pour l'adaptation au changement climatique (TRACC), soit +4 °C en moyenne en France métropolitaine
> à la fin du siècle. Le régime d'indemnisation des catastrophes naturelles est financé par une
> surprime obligatoire ajoutée aux contrats d'assurance de dommages aux biens, fixée à 20 % des
> primes du contrat depuis le 1er janvier 2025 (art. A. 125-2 du code des assurances).
> Le fonds de prévention des risques naturels majeurs, dit fonds Barnier, est doté de plus de
> 200 M€ par an, montant fixé chaque année par le Parlement en loi de finances.

**Sources (une par fait) :**
- PNACC-3 (publication du 10 mars 2025, 52 mesures, TRACC à +4 °C) : [ministère de la Transition écologique, dossier « 3e Plan national d'adaptation au changement climatique »](https://www.ecologie.gouv.fr/dossiers/france-sadapte/3e-plan-national-dadaptation-changement-climatique) (2).
- Surprime CatNat de 20 % des primes des contrats d'assurance de dommages aux biens, version en vigueur depuis le 1er janvier 2025 : [Légifrance, art. A. 125-2 du code des assurances](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006785980/) (1).
- Fonds Barnier, plus de 200 M€ par an fixés en loi de finances (page mise à jour le 1er août 2025) : [ministère de la Transition écologique, « Financement de la prévention des risques naturels et hydrauliques »](https://www.ecologie.gouv.fr/politiques-publiques/financement-prevention-risques-naturels-hydrauliques) (2).

**Ce qui a changé :** baseline créée.

**Faits écartés ❓.**
- Le **coût moyen annuel des sinistres climatiques** (ordre de 5 Md€/an sur 2020-2025) et les
  projections CCR à 2050 circulent largement mais n'ont pas pu être rattachés à une page CCR ou
  France Assureurs ouverte et vérifiée dans le temps imparti. Non intégrés.
- Les **effectifs de sapeurs-pompiers volontaires** (≈ 201 000 sur 258 641 sapeurs-pompiers au
  31 décembre 2025), qui documenteraient directement la mesure `eco-adaptation-07` sur le statut du
  pompier volontaire, proviennent des statistiques de la DGSCGC : le site `interieur.gouv.fr` refuse
  les requêtes automatisées, la donnée n'a donc pas pu être vérifiée à la source et n'est pas
  intégrée. **Complément recommandé** si l'éditeur peut ouvrir la page manuellement.
- Le **montant consacré à l'adaptation** (référence de la mesure `eco-adaptation-01` à 7 Md€/an) :
  aucun chiffrage public consolidé du coût du PNACC-3 n'a été trouvé sur une source de niveau 1 ou 2.

---

## 7. `eco-industrie-decarbonation` — Décarbonation de l'industrie

**Verdict : 🆕 partielle** (le point de départ chiffré est solide ; le détail des dispositifs de
soutien l'est moins — voir faits écartés).

**Ce que les mesures de l'axe exigent de couvrir.** Les Écologistes détaillent des procédés
(électrification, fours électriques, pompes à chaleur industrielles, CEE, contrats pour différence)
et demandent une loi de programmation industrielle ; LFI porte un plan de reconstruction
industrielle. La baseline doit donner le poids réel des émissions industrielles et l'outil public
existant de soutien à la décarbonation.

**Texte de baseline proposé :**

> L'industrie a émis 113 millions de tonnes équivalent CO2 en 2024, soit 28 % des émissions
> nationales, un niveau inférieur de 51 % à celui de 1990. En 2025, l'industrie manufacturière a
> constitué la principale contribution à la baisse des émissions françaises, sous l'effet conjoint
> d'efforts de décarbonation et de baisses de production. Le soutien public passe par le plan
> France 2030 : l'appel d'offres « Grands projets industriels de décarbonation », opéré par l'ADEME,
> a été rouvert du 7 mai au 7 septembre 2026 pour financer l'efficacité énergétique,
> l'électrification des procédés et la capture de CO2 sur des activités industrielles existantes.

**Sources (une par fait) :**
- Émissions de l'industrie en 2024 (113 Mt CO2e, 28 % du total, −51 % depuis 1990) : [SDES, *Industrie et environnement en France — État des connaissances en 2025*, publié le 27 mars 2026](https://www.statistiques.developpement-durable.gouv.fr/industrie-et-environnement-en-france-etat-des-connaissances-en-2025) (2).
- Industrie manufacturière, principale contribution à la baisse 2025 : [ministère de la Transition écologique, communiqué du 16 juin 2026](https://www.ecologie.gouv.fr/presse/baisse-emissions-gaz-effet-serre-se-poursuit-2024-2025-france-doit-accelerer-sa) (2).
- Appel d'offres « Grands projets industriels de décarbonation » 2026 (7 mai – 7 septembre 2026, France 2030, opéré par l'ADEME) : [Direction générale des entreprises](https://www.entreprises.gouv.fr/espace-entreprises/appels-a-projets-et-appels-a-manifestation-d-interet/grands-projets-0) (2).

**Ce qui a changé :** baseline créée.

**Faits écartés ❓.**
- L'**enveloppe budgétaire** consacrée à la décarbonation de l'industrie (chiffres de 5,6 Md€ au
  titre de France 2030, ou de 800 M€ pour 2026) n'apparaît sur aucune des pages officielles ouvertes :
  la page de la DGE renvoie aux crédits France 2030 et de la loi de finances 2026 sans montant. Non
  intégrée.
- Les **contrats de transition écologique signés avec les 50 sites industriels les plus émetteurs**
  (2022-2023) sont un fait largement rapporté mais qui n'a pas pu être rattaché à une source de
  niveau 1 ou 2 accessible. Non intégré.

**Signalement de découpage.** Cet axe est le seul du lot dont la baseline reste **descriptive de
l'existant sans point d'appui budgétaire vérifié**. Ce n'est pas un problème de découpage (l'axe
tient : une baseline unique « où en sont les émissions industrielles et par quel outil l'État les
soutient ») mais un manque de source ouverte, à combler par un accès manuel aux pages
`economie.gouv.fr`.

---

## 8. `eco-investissement` — Financement de la transition écologique

**Verdict : 🆕 solide.**

**Ce que les mesures de l'axe exigent de couvrir.** LFI chiffre un plan de 200 Md€ d'investissements
et conditionne les aides d'État ; les Écologistes créent un fonds souverain adossé à un « livret
industrie ». La baseline doit donc donner (a) l'effort budgétaire actuel de l'État et (b) l'ordre de
grandeur du besoin d'investissement supplémentaire tel que chiffré par l'expertise publique — c'est
ce qui rend l'écart de 200 Md€ lisible.

**Texte de baseline proposé :**

> Le rapport sur l'impact environnemental du budget de l'État annexé au projet de loi de finances
> pour 2026 (« budget vert », 6e édition) recense 40,5 Md€ de dépenses de l'État favorables à
> l'environnement, contre 38,4 Md€ en loi de finances initiale 2025 et 34,9 Md€ exécutés en 2024 ;
> l'ensemble des dépenses favorables et mixtes atteint 45,8 Md€, tandis que 8,1 Md€ de dépenses ont
> un impact défavorable sur au moins un axe environnemental. Ces dépenses excèdent les recettes
> environnementales affectées à l'État, prévues à 30,1 Md€ en 2026. Le rapport remis au Premier
> ministre par Jean Pisani-Ferry et Selma Mahfouz en mai 2023 évaluait pour sa part à environ
> 66 Md€ par an à l'horizon 2030, soit 2,3 points de PIB, le supplément d'investissement — public et
> privé — nécessaire par rapport à un scénario sans action climatique.

**Sources (une par fait) :**
- Dépenses favorables (40,5 Md€), favorables et mixtes (45,8 Md€), défavorables (8,1 Md€) et recettes environnementales (30,1 Md€) du PLF 2026 : [Rapport sur l'impact environnemental du budget de l'État, annexe au PLF 2026, octobre 2025](https://www.assemblee-nationale.fr/dyn/dyn/contenu/visualisation/1089981/file/4-BV_PLF%202026%20VF2-1.pdf) (1/2 — document budgétaire annexé au projet de loi de finances).
- Supplément d'investissement d'environ 66 Md€/an en 2030 (2,3 points de PIB) : [J. Pisani-Ferry et S. Mahfouz, *Les incidences économiques de l'action pour le climat*, France Stratégie, mai 2023, p. 69 et s.](https://www.strategie-plan.gouv.fr/files/files/Publications/Rapport/2023-incidences-economiques-rapport-pisani-5juin.pdf) (2).

**Ce qui a changé :** baseline créée.

**Fait écarté ❓.** Le montant total des investissements climat réalisés en France (102 Md€ en 2024,
en baisse de 5 %) provient du *Panorama des financements climat* d'I4CE, institut de recherche privé
d'intérêt public : source de niveau 4 selon la hiérarchie du projet, qui ne peut pas porter seule un
chiffre. Non intégré ; à retenir si l'éditeur veut un indicateur d'investissement total, mais alors
en le doublant d'une source publique.

---

## 9. `eco-emplois-transition` — Emplois, formation & reconversions de la transition

**Verdict : 🆕 partielle** (deux faits solides ; le volume d'emplois « de la transition » est un
chiffre à manier avec précaution — voir ci-dessous).

**Ce que les mesures de l'axe exigent de couvrir.** LFI crée un « contrat de bifurcation écologique »
garantissant droits sociaux, formation et rémunération en cas de reconversion d'entreprise, un droit
de reprise préférentiel, et une offre locale de formation ; les Écologistes visent les métiers de la
réparation. La baseline doit dire ce qui existe déjà comme dispositif de reconversion — c'est le
point de comparaison direct du « contrat de bifurcation » — et donner une mesure de la population
concernée.

**Texte de baseline proposé :**

> En 2024, 361 000 personnes, soit 1,2 % de la population en emploi, exerçaient en France un métier
> à finalité environnementale, c'est-à-dire un métier dont la vocation est de mesurer, prévenir,
> maîtriser ou corriger les impacts sur l'environnement. Le dispositif de droit commun de
> reconversion est la « période de reconversion », créée par l'article 11 de la loi n° 2025-989 du
> 24 octobre 2025 et entrée en vigueur le 1er janvier 2026 : elle permet à un salarié de suivre une
> formation certifiante en vue d'une mobilité professionnelle interne ou externe, et se substitue aux
> dispositifs antérieurs de transitions collectives et de reconversion ou promotion par alternance,
> qui continuent de s'appliquer aux actions engagées avant cette date. Il n'existe pas de dispositif
> spécifique aux reconversions liées à la transition écologique.

**Sources (une par fait) :**
- 361 000 personnes en métier à finalité environnementale en 2024 (1,2 % de la population en emploi) : [SDES, *Les métiers à finalité environnementale en France — État des connaissances en 2025*](https://www.statistiques.developpement-durable.gouv.fr/emplois-et-metiers-de-leconomie-verte-synthese-des-connaissances-en-2024) (2).
- Période de reconversion créée par l'art. 11 de la loi du 24 octobre 2025, en vigueur au 1er janvier 2026, se substituant à Transco et à la Pro-A : [Légifrance, LOI n° 2025-989 du 24 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052430940) (1).

**Ce qui a changé :** baseline créée.

**Précaution de lecture sur le chiffre d'emplois.** Le SDES a resserré sa nomenclature : les
361 000 « métiers à finalité environnementale » ne sont pas comparables aux « métiers verdissants »
(près de 4 millions de professionnels) publiés jusqu'en 2019 sous une définition beaucoup plus
large. La baseline retient le périmètre étroit et le nomme explicitement pour éviter la confusion.

**Fait écarté ❓.** Le dernier fait négatif de la baseline (« il n'existe pas de dispositif spécifique
aux reconversions liées à la transition écologique ») est, par nature, difficile à sourcer
directement. Il est ici **déductible** de la loi du 24 octobre 2025, qui unifie les dispositifs sans
créer de branche écologique, mais il n'est adossé à aucun constat institutionnel explicite. Deux
options pour l'éditeur : (a) le supprimer et s'en tenir à la description de la période de
reconversion — c'est l'option prudente et recommandée ; (b) le conserver en l'adossant à un rapport
parlementaire ou de la Cour des comptes qui reste à identifier.

---

## Tableau récapitulatif

| Axe | Verdict | Faits affirmés | Sources niveau 1 | Sources niveau 2 | Faits laissés ❓ |
| --- | --- | --- | --- | --- | --- |
| `eco-planification` | 🆕 solide | 6 | 4 | 2 | 0 |
| `eco-energie-mix` | 🆕 solide | 3 | 1 | 2 | 1 (réseau de gaz) |
| `eco-nucleaire` | 🆕 solide | 6 | 1 | 6 | 2 (coût EPR2, décompte des réacteurs) |
| `eco-energie-prix` | 🆕 solide | 7 | 3 | 4 | 1 (chèque énergie) |
| `eco-renovation` | 🆕 solide | 6 | 2 | 4 | 2 (volume CEE P6, parc fioul) |
| `eco-adaptation` | 🆕 solide | 3 | 1 | 2 | 4 (coût des sinistres, pompiers volontaires, coût du PNACC, rôle de la CCR) |
| `eco-industrie-decarbonation` | 🆕 partielle | 3 | 0 | 3 | 2 (enveloppes budgétaires, contrats 50 sites) |
| `eco-investissement` | 🆕 solide | 2 | 1 | 1 | 1 (investissements climat totaux) |
| `eco-emplois-transition` | 🆕 partielle | 3 | 1 | 1 | 1 (fait négatif final) |

**Découpage des axes (règle n° 17).** Les neuf axes du lot admettent chacun **une** baseline
chiffrable unique : aucun n'a exigé deux baselines sans recouvrement. Deux remarques toutefois :

1. `eco-energie-mix` couvre à la fois l'électricité et l'énergie finale tous usages. Ce sont deux
   grandeurs différentes (27,0 % de renouvelable dans la production électrique en 2025 contre 23,0 %
   dans la consommation finale brute d'énergie en 2024). La baseline proposée les distingue
   explicitement plutôt que d'en choisir une : c'est une baseline unique, mais elle **doit** rester
   à deux chiffres, faute de quoi le lecteur croira à une contradiction.
2. `eco-investissement` et `eco-industrie-decarbonation` se recoupent partiellement sur les
   dispositifs France 2030. Le partage retenu (financement transversal d'un côté, procédés
   industriels de l'autre) tient, mais si l'éditeur constate que les mesures migrent d'un axe à
   l'autre, c'est le signal d'une fusion à examiner.

## Liste des faits restés invérifiables (❓)

| Fait | Axe | Pourquoi |
| --- | --- | --- |
| Réseau de distribution de gaz : longueur, clients raccordés, trajectoire de décroissance | `eco-energie-mix` | Aucune page GRDF ou volet « gaz » de la PPE3 ouverte et vérifiée |
| Coût du programme des six EPR2 (72,8 Md€) | `eco-nucleaire` | Aucune source de niveau 1-2 accessible ; pages ministérielles obsolètes (2021-2022) |
| Décompte exact des réacteurs en exploitation (57) | `eco-nucleaire` | Pages officielles non mises à jour depuis 2021-2022 ; remplacé par la capacité installée RTE |
| Chèque énergie 2026 : bénéficiaires et montant moyen | `eco-energie-prix` | Seule page officielle sur `economie.gouv.fr`, qui refuse les requêtes automatisées |
| Volume total d'obligation des CEE 6e période (5 250 TWh cumac) | `eco-renovation` | Absent du décret n° 2025-1048 consulté, qui fixe des obligations par type d'énergie |
| Logements chauffés au fioul (2,6 M en 2022, Insee) | `eco-renovation` | Millésime trop ancien au regard des plans de sortie du fioul intervenus depuis |
| Coût annuel moyen des sinistres climatiques et projections CCR 2050 | `eco-adaptation` | Pas de page CCR / France Assureurs vérifiée |
| Rôle de la Caisse centrale de réassurance et garantie de l'État | `eco-adaptation` | Seule page officielle identifiée sur `budget.gouv.fr`, qui ne sert pas de contenu lisible hors navigateur |
| Effectifs de sapeurs-pompiers volontaires au 31/12/2025 | `eco-adaptation` | `interieur.gouv.fr` refuse les requêtes automatisées |
| Coût / financement annuel du PNACC-3 | `eco-adaptation` | Aucun chiffrage public consolidé trouvé |
| Enveloppes de France 2030 pour la décarbonation industrielle | `eco-industrie-decarbonation` | Montants absents des pages officielles ouvertes |
| Contrats de transition écologique avec les 50 sites les plus émetteurs | `eco-industrie-decarbonation` | Pas de source de niveau 1-2 accessible |
| Investissements climat totaux (102 Md€ en 2024, I4CE) | `eco-investissement` | Source de niveau 4, ne peut pas porter seule un chiffre |
| « Il n'existe pas de dispositif de reconversion propre à la transition écologique » | `eco-emplois-transition` | Fait négatif, déductible mais non adossé à un constat institutionnel |

## Suite à donner

- L'éditeur applique les textes ci-dessus dans `data/axes.json` (`baseline_reel` + `source_baseline`)
  et pose `baseline_verifiee: "2026-08-01"` sur les 9 axes.
- `DERNIER_EVENEMENT` dans `scripts/etat-sources.mjs` mériterait d'intégrer le **décret n° 2026-636
  du 16 juillet 2026 (SNBC-3)** et le **décret n° 2026-76 du 12 février 2026 (PPE3)** : toute
  baseline climat-énergie antérieure à ces deux textes est à re-vérifier par construction.
- Trois faits ❓ ne tiennent qu'à un blocage technique (chèque énergie sur `economie.gouv.fr`,
  effectifs de sapeurs-pompiers volontaires sur `interieur.gouv.fr`, rôle de la CCR sur
  `budget.gouv.fr`) : une ouverture manuelle de ces trois pages suffirait à les convertir en faits
  sourcés.
