# Rédaction des baselines — lot C « transversaux » (9 axes)

> Date : 2026-08-01 (travaux poursuivis le 2026-08-02) · Agent : verificateur-sources
> **Rapport de proposition — RIEN n'a été modifié** dans `data/axes.json`, `data/candidats/*.json`,
> `data/taxonomie.json` ni le code. L'éditeur applique.
>
> Particularité du lot : 8 des 9 baselines étaient **vides** (`baseline_reel: ""`,
> `source_baseline: []`). Il ne s'agit donc pas de vérifier un texte existant mais de l'écrire.
> Le 9ᵉ (`fisc-verte`) avait une baseline vérifiée le 2026-07-29 pour un axe de 13 mesures ;
> l'axe ayant été scindé (décision n° 28), il ne lui reste que 3 mesures : sa baseline est
> **resserrée** et re-vérifiée ci-dessous.
>
> Périmètre, dans l'ordre de traitement (nombre de mesures rattachées entre parenthèses) :
> `sante-toxiques` (17), `eco-justice-environnementale` (7), `commerce-protection-ecologique` (10),
> `agri-condition-animale` (12), `eco-condition-animale` (8), `fisc-verte` (3),
> `econ-souverainete-productive` (2), `eco-publicite` (5), `sante-prevention` (1).
>
> Convention de sourçage : **un fait affirmé = un lien**, avec le niveau de la hiérarchie —
> (1) texte juridique en vigueur, (2) administration ou opérateur public français,
> (3) institution européenne / internationale, (4) presse ou site spécialisé (jamais seul sur un chiffre).
>
> **Test des URL.** Toutes les URL citées ont été appelées. `legifrance.gouv.fr` renvoie 403 aux
> requêtes automatisées (protection anti-robot) mais sert normalement les pages : chaque lien
> Légifrance cité ci-dessous a été ouvert et son contenu lu avant citation. Les liens non-Légifrance
> ont été testés en HTTP et répondent 200. Les cas problématiques sont signalés explicitement.

---

## 1. `sante-toxiques` — Pollutions, toxiques & risques industriels

**Verdict : baseline créée** (aucun texte préexistant).

**Mesures couvertes (17)** : LFI `lfi-toxiques-01` à `-07` (fonds victimes, moyens de contrôle,
dérogations préfectorales, chlordécone, essais nucléaires, autorité de sûreté industrielle + ICPE,
interdiction des produits les plus nocifs) ; Écologistes `eco-toxiques-01` à `-05`, `-07` à `-11`
(PFAS, recherche, pollueur-payeur/REP, ZFE et qualité de l'air, désintoxication des territoires,
autorité de sécurité industrielle, ICPE, bruit, REACH, déchets toxiques).

### Faits vérifiés

1. **PFAS.** La loi n° 2025-188 du 27 février 2025 interdit, **depuis le 1er janvier 2026**, la
   fabrication, l'importation, l'exportation et la mise sur le marché des produits cosmétiques, des
   produits de fart et des textiles d'habillement/chaussures contenant des PFAS (exceptions pour les
   équipements de protection) ; l'interdiction est étendue à l'ensemble des produits textiles au
   1er janvier 2030. Son article 4 crée une **redevance de 100 € par 100 g** de PFAS rejetés au-delà
   de 100 g par an par les installations autorisées.
2. **Sanction administrative ICPE.** Le plafond de l'amende administrative de l'article L. 171-8 du
   code de l'environnement est de **45 000 €** (astreinte jusqu'à 4 500 €/jour) depuis la loi
   n° 2023-973 du 23 octobre 2023 (version en vigueur au 25 octobre 2023). ⚠️ **Les deux programmes
   écrivent « 15 000 € actuellement »** : ce chiffre est celui d'avant octobre 2023. La baseline doit
   donner le chiffre en vigueur sans commenter l'écart.
3. **Contrôle industriel.** En 2024, l'inspection des installations classées a réalisé
   **24 514 visites** ; le parc compte 18 963 sites soumis à autorisation, 22 920 à enregistrement,
   environ 450 000 à déclaration, dont 1 299 établissements Seveso (702 seuil haut).
4. **Qualité de l'air.** Santé publique France estime à **40 000 décès par an** la mortalité
   attribuable à l'exposition aux particules fines PM2,5 chez les 30 ans et plus (estimation publiée
   en avril 2021, période 2016-2019).
5. **ZFE.** Les zones à faibles émissions mobilité restent obligatoires : le Conseil constitutionnel
   a censuré, dans sa **décision n° 2026-903 DC du 21 mai 2026**, l'article 37 de la loi de
   simplification de la vie économique qui les supprimait — censure de procédure (« cavalier
   législatif », absence de lien avec le texte initial), sans examen au fond. Deux agglomérations
   (Métropole du Grand Paris, Lyon) sont soumises au calendrier contraignant de restrictions au titre
   des dépassements réguliers des normes de qualité de l'air.
6. **Chlordécone.** Les premiers résultats de l'étude Kannari 2 de Santé publique France (mesures
   2024, publiées en 2026) montrent du chlordécone détectable dans le sang de **81,3 % des adultes en
   Guadeloupe et 85,5 % en Martinique**. Le Fonds d'indemnisation des victimes de pesticides (FIVP) a
   reçu **978 demandes en 2024** (contre 681 en 2023), dont **51 déposées aux Antilles**.

### Texte de baseline proposé

> La loi n° 2025-188 du 27 février 2025 interdit depuis le 1er janvier 2026 les cosmétiques, farts et
> textiles d'habillement contenant des PFAS (extension à tous les textiles en 2030) et crée une
> redevance de 100 € par 100 g de PFAS rejetés au-delà de 100 g par an. Le plafond de l'amende
> administrative applicable aux installations classées est de 45 000 € depuis la loi du 23 octobre
> 2023, avec une astreinte pouvant atteindre 4 500 € par jour ; en 2024, l'inspection des
> installations classées a effectué 24 514 visites sur un parc de 18 963 sites autorisés, 22 920
> enregistrés et 1 299 établissements Seveso. Santé publique France attribue 40 000 décès par an à
> l'exposition aux particules fines PM2,5 (estimation 2021, période 2016-2019) ; les zones à faibles
> émissions restent en vigueur, le Conseil constitutionnel ayant censuré le 21 mai 2026 l'article de
> la loi de simplification de la vie économique qui les supprimait. Aux Antilles, l'étude Kannari 2
> mesure du chlordécone dans le sang de 81,3 % des adultes en Guadeloupe et 85,5 % en Martinique, et
> le fonds d'indemnisation des victimes de pesticides a enregistré 978 demandes en 2024, dont 51
> déposées aux Antilles.

### Sources (une par fait)

- PFAS, interdictions 2026/2030 et redevance : [Légifrance, loi n° 2025-188 du 27/02/2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051260902) — (1).
- Amende administrative ICPE 45 000 € / astreinte 4 500 € : [Légifrance, art. L. 171-8 c. env. (version en vigueur au 25/10/2023)](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048248715) — (1).
- 24 514 visites d'inspection en 2024, parc ICPE et Seveso : [ministère de la Transition écologique, bilan 2024 de l'inspection des installations classées](https://www.ecologie.gouv.fr/presse/bilan-laction-linspection-installations-classees-lannee-2024) — (2).
- 40 000 décès/an attribuables aux PM2,5 : [Santé publique France, communiqué du 14/04/2021](https://www.santepubliquefrance.fr/presse/2021/pollution-de-l-air-ambiant-nouvelles-estimations-de-son-impact-sur-la-sante-des-francais) — (2).
- Censure de la suppression des ZFE : [Conseil constitutionnel, décision n° 2026-903 DC du 21 mai 2026](https://www.conseil-constitutionnel.fr/decision/2026/2026903DC.htm) — (1).
- Chlordécone, imprégnation Kannari 2 : [Santé publique France, étude Kannari 2](https://www.santepubliquefrance.fr/etudes-et-enquetes/kannari-2-exposition-de-la-population-antillaise-au-chlordecone-et-a-dautres-polluants) — (2).
- FIVP, 978 demandes en 2024 dont 51 aux Antilles : [FIVP, rapport d'activité 2024 (PDF)](https://fonds-indemnisation-pesticides.fr/wp-content/uploads/2025/08/Rapport-dactivite-2024.pdf) — (2).

### Ce qui a changé

Baseline inexistante → créée. Point de vigilance transmis à l'éditeur : le chiffre de **15 000 €**
d'amende ICPE, repris par les deux programmes, est périmé depuis octobre 2023 (45 000 €) — c'est un
écart au réel qui appartient à la baseline, pas un correctif à apporter au verbatim (garde-fou n° 1).

### Faits écartés faute de source primaire

- Nombre d'inspecteurs des installations classées en poste : ❓ le bilan 2024 publie les visites, pas
  l'effectif national consolidé. Non affirmé.
- Indemnisation des victimes des essais nucléaires (CIVEN) : non intégré à cette baseline, faute de
  place — à traiter si l'axe est un jour scindé.

---

## 2. `eco-justice-environnementale` — Justice environnementale

**Verdict : baseline créée** (aucun texte préexistant).

**Mesures couvertes (7)** : LFI `lfi-justice-12` (moyens de la justice pénale environnementale),
`lfi-biodiversite-05` (crime d'écocide), `-06` (tribunal international), `-07` (traité contraignant
les multinationales), `lfi-planification-07` (crime climatique de dissimulation) ; Écologistes
`eco-justice-08` (référé environnemental, pôles régionaux, transposition de la directive),
`eco-justice-11` (suppression de la CJIP).

### Faits vérifiés

1. **Écocide en droit interne.** La loi Climat et résilience du 22 août 2021 a créé un **délit**
   d'écocide, et non un crime : article L. 231-3 du code de l'environnement, puni de **10 ans
   d'emprisonnement et 4,5 M€ d'amende**, montant pouvant être porté au décuple de l'avantage tiré de
   l'infraction. Les effets sont réputés « durables » lorsqu'ils sont susceptibles de durer au moins
   sept ans.
2. **Juridictions spécialisées.** Des **pôles régionaux spécialisés en matière d'atteintes à
   l'environnement** existent depuis le 1er avril 2021 : un tribunal judiciaire par ressort de cour
   d'appel (art. 706-2-3 du code de procédure pénale, créé par la loi n° 2020-1672 du 24 décembre
   2020 ; désignation par le décret n° 2021-286 du 16 mars 2021).
3. **CJIP environnementale.** Le même texte a créé la convention judiciaire d'intérêt public en
   matière environnementale (art. 41-1-3 du code de procédure pénale). Le ministère de la Transition
   écologique en recense **plus de 40 conclues** entre janvier 2022 et juin 2026, la première datant
   du 22 novembre 2021.
4. **Directive européenne.** La directive (UE) 2024/1203 du 11 avril 2024 relative à la protection de
   l'environnement par le droit pénal devait être transposée **au plus tard le 21 mai 2026**.
5. **Juridiction internationale.** Le Statut de Rome ne connaît que quatre crimes (génocide, crimes
   contre l'humanité, crimes de guerre, crime d'agression) : il n'existe ni crime international
   d'écocide ni tribunal international du climat. Une proposition d'amendement visant à y ajouter
   l'écocide a été transmise au dépositaire (Secrétaire général de l'ONU) le **4 avril 2025** par
   l'Allemagne, le Costa Rica, la Sierra Leone, la Slovénie et le Vanuatu.

### Texte de baseline proposé

> La loi Climat et résilience du 22 août 2021 a créé un délit d'écocide — et non un crime — à
> l'article L. 231-3 du code de l'environnement, puni de 10 ans d'emprisonnement et 4,5 M€ d'amende,
> montant pouvant être porté au décuple de l'avantage tiré de l'infraction. Depuis le 1er avril 2021,
> un tribunal judiciaire par ressort de cour d'appel est spécialisé en matière d'atteintes à
> l'environnement (art. 706-2-3 du code de procédure pénale). La convention judiciaire d'intérêt
> public environnementale, créée par la même loi du 24 décembre 2020, a donné lieu à plus de 40
> conventions conclues entre janvier 2022 et juin 2026. La directive (UE) 2024/1203 sur la protection
> de l'environnement par le droit pénal devait être transposée au plus tard le 21 mai 2026. Au niveau
> international, le Statut de Rome ne retient que quatre crimes et ne contient pas l'écocide ; une
> proposition d'amendement en ce sens a été déposée auprès du dépositaire de l'ONU le 4 avril 2025 par
> cinq États.

### Sources (une par fait)

- Délit d'écocide, peines : [Légifrance, art. L. 231-3 c. env.](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043961215) — (1).
- Pôles régionaux spécialisés, un par ressort de cour d'appel : [Légifrance, décret n° 2021-286 du 16 mars 2021](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043258442) — (1).
- CJIP environnementales, plus de 40 de janvier 2022 à juin 2026 : [ministère de la Transition écologique, « La convention judiciaire d'intérêt public (CJIP) »](https://www.ecologie.gouv.fr/politiques-publiques/convention-judiciaire-dinteret-public-cjip) — (2).
- Directive (UE) 2024/1203, délai de transposition au 21 mai 2026 : [EUR-Lex, directive (UE) 2024/1203 du 11 avril 2024](https://eur-lex.europa.eu/eli/dir/2024/1203/oj) — (3).
- Statut de Rome, quatre crimes (art. 5) : [ONU, Statut de Rome (PDF)](https://legal.un.org/icc/statute/french/rome_statute(f).pdf) — (3).
- Proposition d'amendement « écocide » déposée le 4 avril 2025 : [ONU, notification dépositaire C.N.162.2025.TREATIES-XVIII.10 (PDF)](https://treaties.un.org/doc/Publication/CN/2025/CN.162.2025-Frn.pdf) — (3). ⚠️ **Contenu vérifié** (document téléchargé et lu le 2026-08-01) mais le serveur `treaties.un.org` a répondu **503** à toutes les requêtes automatisées du 2026-08-02 : à retester manuellement avant publication ; à défaut, ne pas affirmer ce fait.

### Ce qui a changé

Baseline inexistante → créée. Deux précisions qui comptent pour le lecteur : l'écocide français est un
**délit** (LFI propose un **crime**), et la CJIP que les Écologistes veulent supprimer est un
dispositif **effectivement utilisé** (plus de 40 conventions), pas un outil dormant.

### Faits restés invérifiables

- **État de la transposition française de la directive (UE) 2024/1203** au 1er août 2026 : ❓. Les
  sources secondaires évoquent un véhicule (projet de loi DDADUE adopté par le Sénat le 18 février
  2026, transmis à l'Assemblée nationale — [dossier législatif AN](https://www.assemblee-nationale.fr/dyn/17/dossiers/DLR5L17N53140), niveau 2) mais je n'ai pas pu
  confirmer sur un texte consolidé que la transposition y figure ni qu'elle est promulguée. **Non
  affirmé dans la baseline** : seule la date-butoir européenne l'est.
- Nombre de condamnations prononcées par les pôles régionaux environnementaux : ❓ pas de statistique
  publique consolidée trouvée.

---

## 3. `commerce-protection-ecologique` — Commerce extérieur & protection écologique aux frontières

**Verdict : baseline créée** (aucun texte préexistant).

**Mesures couvertes (10)** : LFI `lfi-fisc-verte-01` (inventaire des accords + normes imposées aux
importations), `-02` (droits de douane sur critères écologiques), `-04` (taxe kilométrique), `-05`
(clause de sauvegarde, prix minimum d'entrée), `-07` (veto sur les nouveaux accords) ; Écologistes
`eco-fisc-verte-2` (protections douanières sectorielles), `-3` (clauses de sauvegarde, MACF, accord
UE–États-Unis), `-4` (dumping de l'e-commerce, effectifs douanes/DGCCRF), `-5` (traités
d'investissement, CETA/Mercosur, clauses miroirs, arbitrage), `-7` (MACF comme ressource propre).

> **Une baseline ou deux ?** L'axe couvre quatre objets distincts : (a) la répartition des
> compétences France/UE, (b) le prix du carbone à l'importation (MACF), (c) les accords de commerce
> et d'investissement, (d) la fraude/le dumping du e-commerce. Ils **se recouvrent** par un fait
> unique et vérifiable : la politique commerciale commune est une **compétence exclusive de l'Union**,
> ce qui détermine à quelle frontière chacune des dix propositions peut s'appliquer. **Une seule
> baseline suffit donc**, à condition de la construire autour de ce fait — c'est ce que fait le texte
> proposé. Si l'éditeur voulait détailler davantage (par ex. le volet e-commerce), il vaudrait mieux
> créer un axe séparé que dédoubler la baseline.

### Faits vérifiés

1. **Compétence.** La politique commerciale commune, y compris les droits de douane et la conclusion
   des accords commerciaux, relève de la **compétence exclusive de l'Union** (art. 3 du traité sur le
   fonctionnement de l'UE).
2. **MACF.** Le mécanisme d'ajustement carbone aux frontières (règlement (UE) 2023/956 du 10 mai 2023)
   est sorti de sa période transitoire (1er octobre 2023 – 31 décembre 2025) : les obligations
   définitives s'appliquent **depuis le 1er janvier 2026**, sur six catégories de produits (acier,
   ciment, aluminium, engrais azotés, hydrogène, électricité importée). Les importateurs de moins de
   **50 tonnes par an** en sont dispensés ; l'achat des certificats correspondant aux importations
   2026 débute en **février 2027**.
3. **Petits colis.** Depuis le **1er juillet 2026**, les colis d'une valeur inférieure ou égale à
   150 € importés de pays tiers ne sont plus exonérés de droits de douane : un droit forfaitaire
   provisoire de **3 € par catégorie d'articles** s'applique, jusqu'au 1er juillet 2028.
4. **Mercosur.** Le Conseil a adopté les décisions de signature le **9 janvier 2026** ; l'accord a
   été signé le 17 janvier 2026 et son volet commercial est en **application provisoire depuis le
   1er mai 2026**.
5. **CETA.** L'accord UE-Canada est en application provisoire **depuis le 21 septembre 2017** ; en
   France, le Sénat a rejeté le **21 mars 2024** l'article autorisant la ratification, qui n'a donc
   pas abouti.

### Texte de baseline proposé

> Les droits de douane et les accords commerciaux relèvent de la compétence exclusive de l'Union
> européenne (art. 3 du traité sur le fonctionnement de l'UE) : ils se décident à la frontière
> européenne, pas à la frontière nationale. Le mécanisme d'ajustement carbone aux frontières
> (règlement (UE) 2023/956) est entré dans sa phase définitive le 1er janvier 2026 sur six catégories
> de produits — acier, ciment, aluminium, engrais azotés, hydrogène, électricité importée —, avec une
> dispense en dessous de 50 tonnes importées par an et un premier achat de certificats en février
> 2027. Depuis le 1er juillet 2026, les colis d'une valeur inférieure ou égale à 150 € importés de
> pays tiers ne sont plus exonérés de droits de douane et supportent un droit forfaitaire provisoire
> de 3 € par catégorie d'articles. L'accord UE-Mercosur, signé le 17 janvier 2026 après décision du
> Conseil du 9 janvier, est en application provisoire depuis le 1er mai 2026. L'accord UE-Canada
> (CETA) est appliqué provisoirement depuis le 21 septembre 2017 ; en France, le Sénat a rejeté le
> 21 mars 2024 l'article autorisant sa ratification.

### Sources (une par fait)

- Compétence exclusive de l'UE en matière de politique commerciale commune : [EUR-Lex, art. 3 TFUE](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:12016E003) — (3).
- MACF, périmètre, phase définitive, seuil 50 t, certificats en février 2027 : [ministère de la Transition écologique, page MACF (mise à jour 24/07/2026)](https://www.ecologie.gouv.fr/politiques-publiques/mecanisme-dajustement-carbone-aux-frontieres-macf) — (2). Texte de référence : [EUR-Lex, règlement (UE) 2023/956](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32023R0956) — (3).
- Petits colis, droit forfaitaire de 3 € au 1er juillet 2026 : [ministère de l'Économie, communiqué « Entrée en vigueur au 1er juillet des droits de douane sur les petits colis à l'échelle de l'UE »](https://presse.economie.gouv.fr/?p=180373) — (2).
- Mercosur, signature et application provisoire : [Commission européenne, représentation en France, « Accord commercial UE-Mercosur : distinguer le vrai du faux » (27/04/2026)](https://france.representation.ec.europa.eu/informations/accord-commercial-ue-mercosur-distinguer-le-vrai-du-faux-2026-04-27_fr) — (3).
- CETA, application provisoire depuis le 21/09/2017 : [EUR-Lex, décision (UE) 2017/38 du Conseil relative à l'application provisoire de l'AECG](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32017D0038) — (3).
- Rejet par le Sénat le 21 mars 2024 : [Sénat, dossier législatif « Accord économique et commercial global UE – Canada »](https://www.senat.fr/dossier-legislatif/pjl18-694.html) — (1/2), scrutins associés : [senat.fr, scrutins publics du dossier](https://www.senat.fr/scrutin-public/dossiers/pjl18-694_scr.html).

### Ce qui a changé

Baseline inexistante → créée. Deux faits ont bougé **après** la rédaction des programmes et changent
la lecture de l'axe : l'application provisoire de l'accord Mercosur au 1er mai 2026 (les deux
programmes écrivent au futur : « refuser », « ne pas ratifier ») et la fin de la franchise douanière
sur les petits colis au 1er juillet 2026, qui recoupe directement la proposition écologiste sur le
dumping de l'e-commerce.

### Faits écartés / invérifiables

- Effectifs de la DGCCRF et des douanes (« rétablir les 1 000 postes supprimés ») : ❓ pas de série
  officielle consolidée trouvée sur 15 ans ; non affirmé.
- Accord UE–États-Unis du 27 juillet 2025 sur les droits de douane : mentionné par une mesure
  écologiste, non intégré faute de place ; sourçable si l'éditeur veut l'ajouter.
- Retrait du traité sur la charte de l'énergie : ❓ non vérifié dans cette passe.

---

## 4. `agri-condition-animale` — Condition animale : élevage, aquaculture, transport & abattage

**Verdict : baseline créée** (aucun texte préexistant).

**Mesures couvertes (12)** : LFI `lfi-condition-animale-01` à `-05` et `-08` (fermes-usines,
transport, pratiques cruelles, fourrure, normes d'élevage, saumon/céphalopodes) ; Écologistes
`eco-condition-animale-02`, `-03`, `-05`, `-10`, `-11`, `-12` (conditions d'élevage et d'abattage,
aquaculture, transport, réduction de la consommation de produits animaux, transition de l'élevage,
pastoralisme).

### Faits vérifiés

1. **Statut de l'animal.** L'animal est un « être vivant doué de sensibilité » (art. 515-14 du code
   civil, loi n° 2015-177 du 16 février 2015) mais reste soumis au régime des biens ; le code rural
   impose au détenteur de le placer dans des conditions compatibles avec les impératifs biologiques de
   son espèce (art. L. 214-1).
2. **« Ferme-usine ».** Aucune définition juridique en droit français. Le seuil déclenchant
   l'autorisation environnementale est fixé, depuis le décret n° 2024-529 du 10 juin 2024, à
   **85 000 emplacements pour les poulets, 60 000 pour les poules, 3 000 porcs de production et
   900 truies** (contre 40 000 volailles auparavant). Le décret n° 2026-46 du 2 février 2026 a
   reconduit ces seuils d'autorisation en réorganisant la rubrique 3660 de la nomenclature ICPE.
3. **Cages.** La mise en production de tout bâtiment nouveau ou réaménagé d'élevage de poules
   pondeuses en cage est interdite depuis la loi EGalim de 2018 (art. L. 214-11 du code rural ;
   modalités fixées par le décret n° 2021-1647 du 14 décembre 2021) — l'élevage en cage existant
   reste licite. En 2024, la France compte **49,2 millions de poules pondeuses**, dont près des trois
   quarts en systèmes alternatifs (14 % en bio, plus de 36 % en plein air, 21 % au sol).
4. **Poussins mâles.** Le décret n° 2022-137 du 5 février 2022 interdit la mise à mort des poussins
   mâles des lignées de ponte, les couvoirs en activité ayant eu jusqu'au **31 décembre 2022** pour
   s'équiper ; le décret prévoit des exceptions (reproduction, recherche, alimentation animale,
   animaux malades, poussins non détectés par le sexage).
5. **Transport.** Le règlement (CE) n° 1/2005 reste le texte applicable ; il plafonne les durées par
   espèce (9 h + 1 h de repos + 9 h pour les animaux non sevrés, 14 h + 1 h + 14 h pour bovins, ovins
   et caprins, 24 h pour les porcs avec abreuvement continu) et soumet à agrément renforcé les
   trajets de plus de 8 heures. La proposition de règlement présentée par la Commission le
   **7 décembre 2023** pour le remplacer n'a pas été adoptée.
6. **Fourrure.** L'élevage de visons d'Amérique et des autres espèces non domestiques élevées pour
   leur fourrure est interdit depuis la loi n° 2021-1539 du 30 novembre 2021 (art. 50).

### Texte de baseline proposé

> L'animal est reconnu « être vivant doué de sensibilité » par l'article 515-14 du code civil depuis
> 2015, tout en restant soumis au régime des biens. Il n'existe pas de définition juridique de la
> « ferme-usine » : depuis le décret n° 2024-529 du 10 juin 2024, l'autorisation environnementale
> n'est requise qu'au-delà de 85 000 emplacements pour les poulets, 60 000 pour les poules, 3 000
> porcs de production et 900 truies. Depuis la loi EGalim de 2018, la mise en production de tout
> bâtiment nouveau ou réaménagé de poules pondeuses en cage est interdite, sans remettre en cause les
> élevages existants ; en 2024, sur 49,2 millions de poules pondeuses, près des trois quarts sont
> élevées en systèmes alternatifs (14 % en bio, plus de 36 % en plein air, 21 % au sol). La mise à
> mort des poussins mâles des lignées de ponte est interdite depuis fin 2022, avec des exceptions
> prévues par le décret n° 2022-137. Le transport reste régi par le règlement (CE) n° 1/2005 (9 h + 1 h
> + 9 h pour les animaux non sevrés, 14 h + 1 h + 14 h pour les bovins, ovins et caprins, 24 h pour les
> porcs), la proposition de révision présentée par la Commission le 7 décembre 2023 n'ayant pas été
> adoptée ; l'élevage pour la fourrure est interdit depuis la loi du 30 novembre 2021.

### Sources (une par fait)

- Animal être sensible / régime des biens : [Légifrance, art. 515-14 du code civil](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030250342) — (1).
- Seuils d'autorisation environnementale des élevages : [Légifrance, décret n° 2024-529 du 10 juin 2024](https://www.legifrance.gouv.fr/eli/decret/2024/6/10/TRED2405486D/jo/texte) — (1) ; reconduction : [Légifrance, décret n° 2026-46 du 2 février 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053430367) — (1).
- Interdiction des nouveaux bâtiments de poules en cage : [Légifrance, décret n° 2021-1647 du 14 décembre 2021 (application de l'art. L. 214-11 du code rural)](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044489018) — (1).
- 49,2 millions de poules pondeuses en 2024 et répartition par mode d'élevage : [Agreste, GraphAgri 2025, chapitre aviculture (PDF)](https://agreste.agriculture.gouv.fr/agreste-web/download/publication/publie/GraFra2025Chap12.10/GraphAgri2025_aviculture-oeufs-foie-gras-cuniculture.pdf) — (2).
- Poussins mâles, interdiction et dérogations : [Légifrance, décret n° 2022-137 du 5 février 2022](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000045124750) — (1).
- Durées de transport : [EUR-Lex, règlement (CE) n° 1/2005](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32005R0001) — (3) ; proposition de révision non adoptée : [EUR-Lex, COM(2023) 770 du 7 décembre 2023](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:52023PC0770) — (3).
- Interdiction de l'élevage pour la fourrure : [Légifrance, art. 50 de la loi n° 2021-1539 du 30 novembre 2021](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000044387614) — (1).

### Ce qui a changé

Baseline inexistante → créée. Le point le plus utile au lecteur est le **relèvement des seuils
d'autorisation** de juin 2024 : les deux programmes proposent d'interdire les « fermes-usines » et les
« mégafermes » sans que ces termes existent en droit, et le seuil réglementaire le plus proche a été
relevé de 40 000 à 85 000 emplacements de poulets deux ans avant l'écriture des programmes.

### Faits écartés / invérifiables

- Nombre d'abattoirs en France et taux de contrôle vidéo : ❓ non vérifié dans cette passe.
- Élevages de céphalopodes en France (LFI propose de les interdire « avant qu'ils ne se développent »)
  : ❓ fait négatif, non sourçable directement — non affirmé.
- *(Levé)* L'article 515-14 du code civil a été ouvert et lu après rédaction : texte et version
  (18 février 2015) confirmés.

---

## 5. `eco-condition-animale` — Condition animale : chasse, spectacles, compagnie & expérimentation

**Verdict : baseline créée** (aucun texte préexistant).

**Mesures couvertes (8)** : LFI `lfi-condition-animale-06` (méthodes substitutives à
l'expérimentation), `-07` (chasses et loisirs cruels) ; Écologistes `eco-condition-animale-01`
(chasse), `-04` (corrida, combats de coqs, cirques, fourrure), `-06` (abandon, animaux de compagnie),
`-07` (accès des animaux aux hébergements et EHPAD), `-08` (personnalité juridique), `-09`
(expérimentation animale).

### Faits vérifiés

1. **Statut juridique.** « Les animaux sont des êtres vivants doués de sensibilité. Sous réserve des
   lois qui les protègent, les animaux sont soumis au régime des biens » (art. 515-14 du code civil,
   version en vigueur depuis le 18 février 2015). Il n'existe donc pas de personnalité juridique de
   l'animal.
2. **Chasse.** Environ **un million de personnes valident chaque année leur permis de chasser**
   (OFB). Les jours de chasse sont fixés département par département par l'arrêté préfectoral annuel,
   le préfet pouvant limiter leur nombre (art. R. 424-1 du code de l'environnement). La chasse à
   courre et la vénerie sous terre sont légales et encadrées par l'arrêté du 18 mars 1982.
3. **Corrida et combats de coqs.** L'article 521-1 du code pénal, qui réprime les sévices graves et
   actes de cruauté envers les animaux, ne s'applique **ni aux courses de taureaux ni aux combats de
   coqs** dans les localités où une tradition locale ininterrompue peut être invoquée ; le Conseil
   constitutionnel a jugé cette exception conforme à la Constitution (décision n° 2012-271 QPC du
   21 septembre 2012).
4. **Spectacles et captivité.** La loi n° 2021-1539 du 30 novembre 2021 (art. 46) interdit les
   spectacles avec des cétacés **cinq ans** après sa promulgation (donc fin 2026) et la détention, le
   transport et les spectacles d'animaux non domestiques dans les établissements itinérants **sept
   ans** après (donc fin 2028).
5. **Expérimentation animale.** L'enquête statistique du ministère chargé de la recherche recense
   **2 046 754 utilisations d'animaux à des fins scientifiques en 2023**, en baisse de 3,8 % par
   rapport à 2022 (2 128 058) ; publication en avril 2025.

### Texte de baseline proposé

> L'article 515-14 du code civil qualifie les animaux d'« êtres vivants doués de sensibilité » tout en
> les soumettant au régime des biens : ils n'ont pas de personnalité juridique. Environ un million de
> personnes valident chaque année leur permis de chasser ; les jours de chasse sont fixés département
> par département par arrêté préfectoral (art. R. 424-1 du code de l'environnement), et la chasse à
> courre comme la vénerie sous terre restent légales sous le régime de l'arrêté du 18 mars 1982.
> L'article 521-1 du code pénal, qui punit les actes de cruauté envers les animaux, ne s'applique ni
> aux courses de taureaux ni aux combats de coqs là où une tradition locale ininterrompue est établie,
> exception jugée conforme à la Constitution en 2012. La loi du 30 novembre 2021 interdit les
> spectacles de cétacés cinq ans après sa promulgation (fin 2026) et la détention comme les spectacles
> d'animaux non domestiques dans les cirques itinérants sept ans après (fin 2028). En 2023,
> 2 046 754 utilisations d'animaux à des fins scientifiques ont été recensées en France, en baisse de
> 3,8 % sur un an.

### Sources (une par fait)

- Statut juridique de l'animal : [Légifrance, art. 515-14 du code civil](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030250342) — (1).
- Environ un million de permis validés par an : [Office français de la biodiversité, « La chasse, un loisir encadré »](https://ofb.gouv.fr/la-chasse-un-loisir-encadre) — (2).
- Jours de chasse fixés par arrêté préfectoral : [Légifrance, art. R. 424-1 du code de l'environnement](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006838138) — (1).
- Vénerie et vénerie sous terre : [Légifrance, arrêté du 18 mars 1982 relatif à l'exercice de la vénerie](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000677032) — (1).
- Exception « tradition locale ininterrompue » pour la corrida et les combats de coqs : [Conseil constitutionnel, décision n° 2012-271 QPC du 21 septembre 2012](https://www.conseil-constitutionnel.fr/decision/2012/2012271QPC.htm) — (1).
- Cétacés (5 ans) et cirques itinérants (7 ans) : [Légifrance, art. 46 de la loi n° 2021-1539 du 30 novembre 2021](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000044387610) — (1).
- 2 046 754 utilisations d'animaux en 2023 : [ministère de l'Enseignement supérieur et de la Recherche, enquête statistique 2023 (PDF, avril 2025)](https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2025-04/enqu-te-2023-utilisation-des-animaux-des-fins-scientifiques-36640.pdf) — (2).

### Ce qui a changé

Baseline inexistante → créée. Elle met en regard des propositions deux échéances déjà votées mais non
encore atteintes (cétacés fin 2026, cirques fin 2028), ce qui distingue « appliquer la loi de 2021 »
(proposition écologiste) de « interdire » (proposition LFI).

### Faits écartés / invérifiables

- Nombre d'abandons d'animaux de compagnie par an : ❓ les chiffres circulant proviennent
  d'associations (niveau 4), sans statistique publique consolidée. Non affirmé.
- Nombre d'équipages de vénerie en France : ❓ chiffre de « ~400 » repris par des sources de niveau 4
  uniquement. Non affirmé.
- *(Levé)* L'URL de la décision QPC n° 2012-271 a été testée après rédaction : elle répond 200.

---

## 6. `fisc-verte` — Fiscalité environnementale (baseline **resserrée** après scission)

**Verdict : ⚠️ à resserrer** — les trois faits de la baseline du 2026-07-29 restent exacts, mais elle
a été calibrée pour un axe de 13 mesures dont le volet douanier est parti sur
`commerce-protection-ecologique`. **Un problème de sourçage est en outre confirmé** (voir ci-dessous).

**Mesures restantes (3)** : LFI `lfi-fisc-verte-06` (fin des niches fiscales sur le kérosène) ;
Écologistes `eco-fisc-verte-1` (fiscalité environnementale cohérente : niches fossiles transformées en
aides forfaitaires, extension de la TIRUERT, malus poids à 1 300/1 600 kg, taxe sur les bouteilles
plastique), `eco-fisc-verte-6` (transfert d'une part de la Contribution Climat Énergie vers les
collectivités dotées d'un PCAET, TEOM, versement mobilité).

### Contrôle des faits de la baseline actuelle

| Fait de la baseline 2026-07-29 | Statut au 2026-08-02 |
|---|---|
| Budget vert PLF 2026 : 8,1 Md€ de dépenses défavorables | ✅ confirmé (et 40,5 Md€ favorables) |
| « dont les taux réduits de taxation des carburants » | ⚠️ **non documenté** par la page citée, qui ne détaille pas les carburants |
| Malus au poids à partir de 1 500 kg au 1er janvier 2026 | ✅ confirmé (fiche service-public mise à jour le 01/03/2026) |
| TIRUERT jusqu'à fin 2026 puis IRICC en 2027 | ❌ **source inadéquate** : la page Douane citée ne mentionne **ni l'IRICC ni 2027** (dernière référence : circulaire du 4 juillet 2025) |

### Faits vérifiés pour la nouvelle baseline

1. **Budget vert.** Le rapport sur l'impact environnemental du budget de l'État annexé au PLF 2026
   chiffre à **8,1 Md€** les dépenses défavorables à l'environnement (−1,3 Md€ par rapport à 2025) et
   à 40,5 Md€ les dépenses favorables.
2. **Kérosène.** Les produits énergétiques consommés pour la navigation aérienne commerciale
   relèvent d'un **tarif d'accise de 0 €/MWh** (art. L. 312-48 du code des impositions sur les biens
   et services, version en vigueur au 1er janvier 2026). La directive 2003/96/CE impose l'exonération
   pour la navigation aérienne autre que de tourisme privé, mais son article 14 § 2 autorise les États
   membres à **limiter cette exonération aux transports internationaux et intracommunautaires** —
   c'est-à-dire à taxer les vols intérieurs, faculté que la France n'utilise pas.
3. **Contribution Climat Énergie.** La composante carbone est **figée à 44,60 €/tCO₂ éq depuis 2018**
   et couvre environ **41 % des émissions françaises** (transports, résidentiel, tertiaire, industrie
   hors marché européen du carbone).
4. **PCAET.** Les EPCI à fiscalité propre de plus de 20 000 habitants sont tenus d'adopter un plan
   climat-air-énergie territorial (art. L. 229-26 du code de l'environnement).
5. **Malus au poids.** Le seuil de déclenchement est de **1 500 kg depuis le 1er janvier 2026**
   (10 €/kg entre 1 500 et 1 699 kg, jusqu'à 30 €/kg au-delà de 2 000 kg), avec exonération des
   véhicules électriques et hydrogène et abattements pour les hybrides et les familles nombreuses.

### Texte de baseline proposé (resserré)

> Le rapport sur l'impact environnemental du budget de l'État annexé au PLF 2026 chiffre à 8,1 Md€ les
> dépenses défavorables à l'environnement, contre 40,5 Md€ de dépenses favorables. Les produits
> énergétiques consommés pour la navigation aérienne commerciale sont taxés à 0 €/MWh (art. L. 312-48
> du code des impositions sur les biens et services) : la directive européenne 2003/96/CE impose cette
> exonération pour l'aviation autre que de tourisme privé, tout en autorisant les États à la limiter
> aux vols internationaux et intracommunautaires — faculté que la France n'exerce pas. La composante
> carbone de l'accise sur les énergies est figée à 44,60 €/tCO₂ depuis 2018 et couvre environ 41 % des
> émissions françaises. Les intercommunalités de plus de 20 000 habitants doivent adopter un plan
> climat-air-énergie territorial (art. L. 229-26 du code de l'environnement). Le malus au poids se
> déclenche à 1 500 kg depuis le 1er janvier 2026, avec exonération des véhicules électriques.

### Sources (une par fait)

- Budget vert PLF 2026, 8,1 Md€ défavorables / 40,5 Md€ favorables : [budget.gouv.fr, « PLF 2026 — 6ᵉ édition du budget vert »](https://www.budget.gouv.fr/reperes/budget_vert/articles/plf-2026-6e-edition-budget-vert) — (2).
- Tarif de 0 €/MWh pour la navigation aérienne : [Légifrance, art. L. 312-48 du CIBS (version en vigueur au 01/01/2026)](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053562489) — (1).
- Faculté de taxer les vols intérieurs : [EUR-Lex, directive 2003/96/CE, art. 14](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32003L0096) — (3).
- Composante carbone à 44,60 €/tCO₂, 41 % des émissions couvertes : [SDES, « Chiffres clés du climat », édition 2025, fiche « La tarification du carbone dans le monde »](https://www.statistiques.developpement-durable.gouv.fr/edition-numerique/chiffres-cles-du-climat/fr/19-la-tarification-du-carbone-dans) — (2).
- Obligation de PCAET au-delà de 20 000 habitants : [Légifrance, art. L. 229-26 du code de l'environnement](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046193825) — (1).
- Malus au poids, seuil 1 500 kg et barème 2026 : [service-public.gouv.fr, fiche F35950 (mise à jour 01/03/2026)](https://www.service-public.gouv.fr/particuliers/vosdroits/F35950) — (2).

### Ce qui a changé

Baseline recentrée sur les trois mesures restantes : le kérosène et la Contribution Climat Énergie
entrent, la TIRUERT sort. **Deux liens de l'ancienne baseline sont à retirer** : le simulateur
`service-public.gouv.fr/simulateur/calcul/TaxeAuPoids` (remplacé par la fiche F35950, plus explicite)
et la page Douane sur la TIRUERT, qui ne documente pas le fait qu'elle était censée sourcer.

### Faits restés invérifiables

- **Remplacement de la TIRUERT par l'IRICC au 1er janvier 2027** : ❓ report d'un an documenté
  uniquement par des sources de niveau 4 ; la page officielle de la Douane n'en parle pas et la
  [consultation publique IRICC (economie.gouv.fr, 2025)](https://www.economie.gouv.fr/actualites/lancement-de-la-consultation-sur-le-projet-de-mecanisme-incitant-la-reduction-de-lintensite-carbone-des-carburants-iricc) décrit un projet, pas une date en vigueur.
  **Fait retiré de la baseline** tant qu'un article de loi ou une page administrative à jour ne
  l'établit pas.
- Montant de la dépense fiscale liée à l'exonération du kérosène : ❓ elle **ne figure pas** dans le
  tome II des « Voies et moyens » ; les chiffres circulant (1,9 à 3,6 Md€) sont d'origine associative.
  Non affirmé.

---

## 7. `econ-souverainete-productive` — Souveraineté productive & relocalisation

**Verdict : baseline créée** (aucun texte préexistant).

**Mesures couvertes (2)** : LFI `lfi-investissement-04` (élargir le régime de contrôle public des
investissements étrangers à tous les secteurs de la bifurcation écologique) ; Écologistes
`eco-souverainete-01` (gestion publique exceptionnelle, décret Montebourg, droit de préemption sur
les machines-outils au profit des collectivités).

### Faits vérifiés

1. **Régime de contrôle.** Les investissements étrangers dans des activités sensibles sont soumis à
   **autorisation préalable du ministre chargé de l'économie** (art. L. 151-3 du code monétaire et
   financier). La liste des secteurs concernés (art. R. 151-3) a été élargie par le décret
   n° 2023-1293 du 28 décembre 2023, entré en vigueur le 1er janvier 2024, qui y ajoute notamment
   l'extraction et la transformation des matières premières critiques et la photonique, étend le
   contrôle aux succursales en France d'entités étrangères et pérennise le seuil de 10 % des droits
   de vote pour les sociétés cotées.
2. **Volume d'activité.** Le dernier rapport annuel publié par la direction générale du Trésor
   (30 juillet 2025, portant sur 2024) recense **392 dossiers déposés** en 2024 (contre 309 en 2023)
   et **182 autorisations délivrées, dont 54 % assorties de conditions**.
3. **Fermeture de site.** Le code du travail impose à l'employeur qui projette la fermeture d'un
   établissement avec licenciement collectif d'**informer les repreneurs potentiels, d'établir un
   document de présentation du site et d'examiner les offres de reprise reçues** (art. L. 1233-57-9 à
   L. 1233-57-22, issus de la loi n° 2014-384 du 29 mars 2014 dite « loi Florange »).
4. **Balance commerciale.** Le solde du commerce extérieur de biens (FAB/FAB) s'établit à
   **−69,2 Md€ en 2025**, en amélioration de 10,0 Md€ par rapport à 2024, mais 11,1 Md€ en deçà de son
   niveau de 2019 (publication Douane du 9 février 2026).

### Texte de baseline proposé

> Les investissements étrangers dans les activités sensibles sont soumis à autorisation préalable du
> ministre chargé de l'économie (art. L. 151-3 du code monétaire et financier) ; le décret
> n° 2023-1293 du 28 décembre 2023 a élargi la liste des secteurs concernés, notamment à l'extraction
> et à la transformation des matières premières critiques et à la photonique, et pérennisé le seuil de
> 10 % des droits de vote pour les sociétés cotées. En 2024, 392 dossiers ont été déposés (309 en
> 2023) et 182 autorisations délivrées, dont 54 % assorties de conditions. En cas de projet de
> fermeture d'un établissement avec licenciement collectif, la loi du 29 mars 2014 oblige l'employeur
> à informer des repreneurs potentiels, à produire un document de présentation du site et à examiner
> les offres reçues (art. L. 1233-57-9 et suivants du code du travail). Le déficit du commerce
> extérieur de biens s'élève à 69,2 Md€ en 2025, en amélioration de 10,0 Md€ sur un an mais encore
> 11,1 Md€ au-dessous du niveau de 2019.

### Sources (une par fait)

- Autorisation préalable et secteurs contrôlés : [Légifrance, décret n° 2023-1293 du 28 décembre 2023 relatif aux investissements étrangers en France](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000048706234) — (1).
- 392 dossiers, 182 autorisations dont 54 % conditionnées (2024) : [direction générale du Trésor, « Publication du rapport annuel sur le contrôle IEF en 2024 » (30/07/2025)](https://www.tresor.economie.gouv.fr/Articles/2025/07/30/publication-du-rapport-annuel-sur-le-controle-ief-en-2024) — (2).
- Obligation de recherche d'un repreneur : [Légifrance, code du travail, section « Obligation de rechercher un repreneur en cas de projet de fermeture d'un établissement » (art. L. 1233-57-9 à L. 1233-57-22)](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000028812176/) — (1).
- Solde du commerce extérieur de biens 2025 : [Douane, « Résultats du commerce extérieur de la France… année 2025 » (09/02/2026)](https://www.douane.gouv.fr/actualites/resultats-du-commerce-exterieur-de-la-france-pour-le-mois-de-decembre-et-pour-lannee) — (2).

### Ce qui a changé

Baseline inexistante → créée. Précision utile : le « décret Montebourg » que les Écologistes proposent
de renforcer est le décret n° 2014-479 ; le texte de référence **en vigueur** est aujourd'hui le
décret n° 2023-1293 du 28 décembre 2023, qui a déjà étendu le périmètre à des secteurs de la
transition (matières premières critiques, photonique).

### Faits écartés / invérifiables

- Rapport IEF portant sur **2025** : ❓ non publié à la date de cette vérification (le dernier en
  ligne porte sur 2024). À re-vérifier après l'été 2026.
- Part de l'industrie manufacturière dans le PIB : ❓ la page INSEE consultée
  (`statistiques/2045089`) publie des valeurs absolues (279,3 Md€ en 2024, données provisoires au
  22/10/2025), pas un ratio au PIB. Un chiffre en pourcentage n'est donc **pas** affirmé.
- Seuil d'effectif (1 000 salariés) déclenchant l'obligation « Florange » : ❓ non visible sur la page
  de section consultée ; non affirmé dans la baseline.

---

## 8. `eco-publicite` — Publicité, greenwashing & sobriété de la consommation

**Verdict : baseline créée** (aucun texte préexistant).

**Mesures couvertes (5)** : LFI `lfi-publicite-01` (prospectus, panneaux numériques, démarchage
téléphonique), `-02` (publicité des produits les plus émetteurs), `-03` (publicité télévisée), `-04`
(allégations de neutralité carbone) ; Écologistes `eco-publicite-01` (transfert des missions de l'ARPP
à l'ARCOM, publicité toxique, écrans numériques, influenceurs, publicité ciblée, surconsommation).

### Faits vérifiés

1. **Énergies fossiles.** La publicité relative à la commercialisation ou faisant la promotion des
   énergies fossiles est interdite **depuis le 22 août 2022** (art. 7 de la loi n° 2021-1104 du
   22 août 2021), sauf carburants composés d'au moins 50 % d'énergie renouvelable ; la sanction est de
   20 000 € pour une personne physique et 100 000 € pour une personne morale.
2. **Neutralité carbone.** Les allégations « neutre en carbone », « zéro carbone », « intégralement
   compensé » ou équivalentes sont **autorisées sous conditions** depuis le 1er janvier 2023 : le
   décret n° 2022-539 du 13 avril 2022 impose à l'annonceur un bilan d'émissions du produit ou service
   sur son cycle de vie, renouvelé annuellement, et le respect des règles applicables aux projets de
   compensation.
3. **Droit européen à venir.** La directive (UE) 2024/825 inscrit sur la liste noire des pratiques
   commerciales réputées trompeuses en toutes circonstances le fait d'affirmer, sur la base de la
   compensation d'émissions, qu'un produit a un impact neutre, réduit ou positif sur l'environnement.
   Ses dispositions sont **applicables au 27 septembre 2026**.
4. **Prospectus.** L'expérimentation « Oui Pub » (art. 21 de la loi Climat et résilience) s'est
   déroulée du **1er mai 2022 au 30 avril 2025** dans 14 territoires représentant **2 623 449
   habitants** (environ 4 % de la population). Elle n'a pas été généralisée : depuis le 1er mai 2025,
   le dispositif « Stop Pub » s'applique de nouveau sur l'ensemble du territoire, y compris dans les
   zones pilotes.
5. **Démarchage téléphonique.** À compter du **11 août 2026**, il est interdit de démarcher par
   téléphone un consommateur qui n'y a pas préalablement consenti (art. L. 223-1 du code de la
   consommation dans sa rédaction issue de la loi n° 2025-594 du 30 juin 2025 ; modalités fixées par
   le décret n° 2026-662 du 23 juillet 2026), le professionnel devant apporter la preuve du
   consentement.
6. **Régulateur.** L'Autorité de régulation professionnelle de la publicité (ARPP) est une
   **association interprofessionnelle régie par la loi de 1901**, indépendante des pouvoirs publics et
   ne recevant ni dotation ni subvention, qui assure un contrôle a priori des publicités
   audiovisuelles et élabore des recommandations déontologiques.

### Texte de baseline proposé

> La publicité pour les énergies fossiles est interdite depuis le 22 août 2022 (art. 7 de la loi
> Climat et résilience), sous peine de 20 000 € d'amende pour une personne physique et 100 000 € pour
> une personne morale. Les allégations de type « neutre en carbone » ne sont pas interdites mais
> conditionnées depuis le 1er janvier 2023 à la publication d'un bilan d'émissions du produit sur son
> cycle de vie (décret n° 2022-539) ; la directive (UE) 2024/825, applicable au 27 septembre 2026,
> range parmi les pratiques trompeuses en toutes circonstances les allégations de neutralité fondées
> sur la compensation d'émissions. L'expérimentation « Oui Pub » sur les imprimés publicitaires s'est
> tenue du 1er mai 2022 au 30 avril 2025 dans 14 territoires (2 623 449 habitants) et n'a pas été
> généralisée : le « Stop Pub » s'applique de nouveau partout depuis le 1er mai 2025. À compter du
> 11 août 2026, le démarchage téléphonique est interdit sans consentement préalable du consommateur
> (loi n° 2025-594 du 30 juin 2025). L'Autorité de régulation professionnelle de la publicité est une
> association loi 1901 indépendante des pouvoirs publics, sans dotation ni subvention publique, qui
> exerce un contrôle a priori des publicités audiovisuelles.

### Sources (une par fait)

- Interdiction de la publicité pour les énergies fossiles et sanctions : [Légifrance, art. 7 de la loi n° 2021-1104 du 22 août 2021](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043956984) — (1).
- Encadrement des allégations de neutralité carbone : [Légifrance, décret n° 2022-539 du 13 avril 2022](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000045570611) — (1).
- Liste noire européenne, application au 27 septembre 2026 : [EUR-Lex, directive (UE) 2024/825](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024L0825) — (3).
- « Oui Pub » : dates, 14 territoires, 2 623 449 habitants, non-généralisation : [ministère de la Transition écologique, « L'expérimentation Oui Pub » (mise à jour 27/05/2025)](https://www.ecologie.gouv.fr/politiques-publiques/lexperimentation-oui-pub) — (2).
- Démarchage téléphonique soumis au consentement préalable au 11 août 2026 : [Légifrance, code de la consommation, art. L. 223-1 et s. (version au 11/08/2026)](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032221441/2026-08-11) — (1) ; modalités : [Légifrance, décret n° 2026-662 du 23 juillet 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054483939) — (1).
- Statut de l'ARPP : [Institut national de la consommation, fiche « Autorité de régulation professionnelle de la publicité — ARPP »](https://www.inc-conso.fr/content/autorite-de-regulation-professionnelle-de-la-publicite-arpp) — (2).

### Ce qui a changé

Baseline inexistante → créée. Deux éléments changent la lecture des propositions : l'interdiction
demandée sur les prospectus a **déjà été expérimentée puis abandonnée** (mai 2025), et l'interdiction
demandée sur le démarchage téléphonique **entre en vigueur le 11 août 2026**, soit dix jours après la
date de ce rapport.

### Faits écartés / invérifiables

- Volume horaire maximal de publicité à la télévision (mesure LFI `-03`) : ❓ non vérifié sur le texte
  en vigueur dans cette passe (décret n° 92-280 modifié) ; non affirmé.
- Mise en demeure de la France par la Commission européenne pour non-transposition de la directive
  2024/825 (mai 2026) : ❓ documentée uniquement par des sources de niveau 4 dans mes recherches ; non
  affirmée.
- Réglementation des panneaux publicitaires numériques : ❓ non traitée (compétence de police de la
  publicité transférée aux maires) ; non affirmée.

---

## 9. `sante-prevention` — Prévention & santé publique

**Verdict : baseline créée** (aucun texte préexistant).

**Mesure couverte (1)** : Écologistes `eco-toxiques-06` — plan global de réduction de
l'antibiorésistance visant −30 % d'usage des antibiotiques critiques en santé humaine et animale,
publication annuelle des consommations par établissement de santé, réduction de moitié des rejets
dans l'environnement, responsabilisation des laboratoires. Aucune mesure LFI : le chantier Santé n'est
pas ouvert, l'absence ne peut pas être lue comme un silence du programme.

### Faits vérifiés

1. **Santé humaine.** En 2024, la consommation d'antibiotiques en secteur de ville s'établit à
   **22,1 DDJ pour 1 000 habitants et par jour, en hausse de 5,4 %** par rapport à 2023, retrouvant
   des niveaux comparables à ceux d'avant la pandémie de Covid-19. Les prescriptions dépassent
   **860 pour 1 000 habitants** (+4,8 % en un an), pour un **objectif national de 650 prescriptions
   pour 1 000 habitants en 2027** ; la France se situe au **2ᵉ rang européen** des pays les plus
   consommateurs. Les médecins généralistes réalisent 75,6 % des prescriptions. (Santé publique
   France, 18 novembre 2025.)
2. **Santé animale.** L'exposition des animaux aux antibiotiques est stable en 2024 : l'indicateur
   d'exposition s'établit à **0,307**, contre un objectif de **0,3** fixé par le plan **Écoantibio 3
   (2023-2028)**, après une diminution de **49 % depuis 2011**. Les antibiotiques dits critiques
   (fluoroquinolones, céphalosporines de 3ᵉ et 4ᵉ générations) représentent **1,2 % de l'exposition
   totale** des animaux en 2024. (Anses, novembre 2025.)
3. **Plan public existant.** L'action publique est portée par une **feuille de route
   interministérielle 2024-2034** fondée sur l'approche « Une seule santé », qui articule le plan
   Écoantibio 3 pour la santé animale, la stratégie nationale de prévention des infections pour la
   santé humaine et le volet environnement/biodiversité. Elle succède à la feuille de route de 2016,
   qui visait une baisse de 25 % de la consommation d'antibiotiques et a été évaluée en mai 2022.

### Texte de baseline proposé

> En 2024, la consommation d'antibiotiques en ville s'établit à 22,1 doses définies journalières pour
> 1 000 habitants et par jour, en hausse de 5,4 % sur un an, et les prescriptions dépassent 860 pour
> 1 000 habitants : la France se situe au 2ᵉ rang européen, pour un objectif national fixé à 650
> prescriptions pour 1 000 habitants en 2027. En santé animale, l'indicateur d'exposition aux
> antibiotiques est de 0,307 en 2024, contre une cible de 0,3 fixée par le plan Écoantibio 3
> (2023-2028), après une baisse de 49 % depuis 2011 ; les antibiotiques critiques (fluoroquinolones,
> céphalosporines de 3ᵉ et 4ᵉ générations) représentent 1,2 % de l'exposition totale des animaux.
> L'action publique est portée par une feuille de route interministérielle 2024-2034 « Une seule
> santé », qui articule Écoantibio 3 pour l'animal, la stratégie nationale de prévention des
> infections pour l'humain et un volet environnement, après une première feuille de route adoptée en
> 2016 et évaluée en mai 2022.

### Sources (une par fait)

- Consommation et prescriptions en ville en 2024, objectif 2027, rang européen : [Santé publique France, communiqué du 18 novembre 2025](https://www.santepubliquefrance.fr/presse/2025/les-prescriptions-et-la-consommation-d-antibiotiques-en-secteur-de-ville-augmentent-en-2024) — (2).
- Indicateur d'exposition animale 0,307, cible 0,3 d'Écoantibio 3, −49 % depuis 2011, part de 1,2 % des antibiotiques critiques : [Anses, dossier de presse « Antibiorésistance chez les animaux : bilan 2024 » (PDF, novembre 2025)](https://www.anses.fr/system/files/dp-atb-2025.pdf) — (2).
- Feuille de route interministérielle 2024-2034 et articulation des plans : [ministère de la Transition écologique, « L'antibiorésistance » (mise à jour 31/07/2025)](https://www.ecologie.gouv.fr/politiques-publiques/lantibioresistance) — (2).

### Ce qui a changé

Baseline inexistante → créée. Deux éléments cadrent la proposition écologiste : un objectif national
de réduction existe déjà côté humain (650 prescriptions pour 1 000 habitants en 2027) et la
consommation **repart à la hausse** en 2024 ; côté animal, les antibiotiques critiques que la mesure
vise à réduire de 30 % représentent déjà **1,2 %** de l'exposition totale.

### Faits restés invérifiables

- **5 500 décès et 125 000 infections par an attribuables à l'antibiorésistance en France** : ❓ le
  chiffre est très largement repris, mais la page de données de Santé publique France qui le porte
  répond **404** (`.../resistance-aux-antibiotiques/donnees/` et sa page parente). Faute d'URL vivante
  de niveau 1-2, **le chiffre n'est pas affirmé** dans la baseline. À réintégrer dès qu'une page
  officielle stable est identifiée.
- Rejets d'antibiotiques dans l'environnement et part des effluents hospitaliers non traités : ❓
  aucune statistique publique nationale trouvée ; non affirmé.
- Publication annuelle des consommations par établissement de santé (demandée par la mesure) : ❓
  existence et périmètre non vérifiés dans cette passe.

---

## Tableau récapitulatif — 9 axes

| # | Axe | Mesures | Verdict | Sources proposées | Faits ❓ écartés |
|---|---|---|---|---|---|
| 1 | `sante-toxiques` | 17 | Baseline **créée** | 7 liens (5× niv. 1-2, 2× niv. 2) | 2 |
| 2 | `eco-justice-environnementale` | 7 | Baseline **créée** | 6 liens (3× niv. 1, 1× niv. 2, 2× niv. 3) | 2 + 1 URL fragile |
| 3 | `commerce-protection-ecologique` | 10 | Baseline **créée** | 7 liens (4× niv. 3, 2× niv. 2, 1× niv. 1/2) | 3 |
| 4 | `agri-condition-animale` | 12 | Baseline **créée** | 9 liens (6× niv. 1, 1× niv. 2, 2× niv. 3) | 2 |
| 5 | `eco-condition-animale` | 8 | Baseline **créée** | 7 liens (5× niv. 1, 2× niv. 2) | 2 |
| 6 | `fisc-verte` | 3 | ⚠️ **resserrée** — 1 source ❌ à retirer | 6 liens (3× niv. 1, 2× niv. 2, 1× niv. 3) | 2 |
| 7 | `econ-souverainete-productive` | 2 | Baseline **créée** | 4 liens (2× niv. 1, 2× niv. 2) | 3 |
| 8 | `eco-publicite` | 5 | Baseline **créée** | 7 liens (4× niv. 1, 2× niv. 2, 1× niv. 3) | 3 |
| 9 | `sante-prevention` | 1 | Baseline **créée** | 3 liens (3× niv. 2) | 3 |

## Faits restés invérifiables — récapitulatif

1. `sante-toxiques` — effectif national des inspecteurs des installations classées ; indemnisation
   CIVEN des victimes des essais nucléaires (non traitée).
2. `eco-justice-environnementale` — état de la transposition française de la directive (UE) 2024/1203
   au 1er août 2026 ; nombre de condamnations prononcées par les pôles régionaux environnementaux.
   **URL fragile** : `treaties.un.org` (notification dépositaire de la proposition d'amendement
   « écocide ») a répondu 503 à toutes les requêtes automatisées du 2026-08-02 alors que le document
   avait été téléchargé et lu la veille — à retester manuellement.
3. `commerce-protection-ecologique` — effectifs supprimés à la DGCCRF et aux douanes sur 15 ans ;
   accord UE–États-Unis du 27 juillet 2025 (non traité) ; retrait du traité sur la charte de l'énergie
   (non traité).
4. `agri-condition-animale` — nombre d'abattoirs et taux de contrôle vidéo ; existence d'élevages de
   céphalopodes en France (fait négatif non sourçable).
5. `eco-condition-animale` — nombre d'abandons d'animaux de compagnie par an ; nombre d'équipages de
   vénerie.
6. `fisc-verte` — date de remplacement de la TIRUERT par l'IRICC (documentée seulement au niveau 4,
   **fait retiré**) ; montant de la dépense fiscale liée à l'exonération du kérosène (absent du tome II
   des « Voies et moyens »).
7. `econ-souverainete-productive` — rapport IEF portant sur 2025 (non publié) ; part de l'industrie
   manufacturière dans le PIB (la page INSEE consultée ne publie pas de ratio) ; seuil d'effectif
   déclenchant l'obligation « Florange ».
8. `eco-publicite` — volume horaire maximal de publicité télévisée ; mise en demeure de la France pour
   non-transposition de la directive 2024/825 ; régime des panneaux publicitaires numériques.
9. `sante-prevention` — 5 500 décès / 125 000 infections par an attribuables à l'antibiorésistance
   (page Santé publique France en 404) ; rejets d'antibiotiques dans l'environnement ; publication
   annuelle des consommations par établissement de santé.

## Retour sur la règle n° 17 (un axe = une baseline)

**Un seul axe a posé la question : `commerce-protection-ecologique`.** Il agrège quatre objets — la
répartition des compétences France/UE, le prix du carbone à l'importation, les accords de commerce et
d'investissement, la fraude et le dumping du e-commerce. Ces objets **se recouvrent bien** par un fait
unique et vérifiable : la politique commerciale commune est une compétence exclusive de l'Union, ce
qui détermine à quelle frontière chacune des dix propositions peut s'appliquer. **Une seule baseline
suffit donc**, construite autour de ce fait — c'est ce que fait le texte proposé.

Réserve à arbitrer par l'éditeur : le volet **e-commerce** (fin de la franchise douanière sur les
colis ≤ 150 € au 1er juillet 2026, effectifs de contrôle) est le moins bien tenu par ce fait fédérateur.
S'il devait être développé, la solution conforme à la règle n° 17 serait de **créer un axe distinct**,
pas d'ajouter une seconde baseline à celui-ci.

Aucun autre axe du lot n'exige deux baselines. Signalons toutefois deux voisinages à surveiller :

- `agri-condition-animale` et `eco-condition-animale` traitent tous deux de la **fourrure** (élevage
  côté agriculture, commerce et trophées côté écologie) : les deux baselines ne se contredisent pas,
  mais l'éditeur doit veiller à ne pas dupliquer le fait.
- `sante-prevention` n'a qu'une mesure et une baseline en trois faits ; si le chantier Santé s'ouvre,
  cette baseline devra être réécrite, car l'antibiorésistance ne couvrira plus l'intitulé
  « Prévention & santé publique ».

## Rappel de portée

Ce rapport ne modifie rien. Les textes ci-dessus sont des **propositions** à recopier dans
`baseline_reel` et `source_baseline` de `data/axes.json`. Après application, poser ou actualiser
`baseline_verifiee` sur les 9 axes traités.
