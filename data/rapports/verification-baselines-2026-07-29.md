# Vérification des pistes de baseline — 18 axes proposés « fiscalité / budget / finances » (run 2)

> Date : 2026-07-29 · Agent : verificateur-sources · **Rapport de vérification — rien n'a été modifié**
> dans `data/axes.json`, `data/candidats/*.json` ni `data/taxonomie.json`.
>
> Cible : §4 du rapport `data/drafts/fiscalite-2.rapport.md` (18 pistes de baseline rédigées sans
> accès web le 2026-07-28). Les baselines déjà publiées dans `axes.json` (vérifiées le 2026-07-28)
> ne sont pas re-vérifiées ici.
>
> Réformes de référence prises en compte :
> - **Loi n° 2026-103 du 19 février 2026 de finances pour 2026** (« LF 2026 »),
>   [Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053508155) — validée pour
>   l'essentiel par la [décision n° 2026-901 DC du 19 février 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053509638)
>   (7 cavaliers budgétaires censurés).
> - LFSS pour 2026 (numéro non retrouvé en ligne pendant ce run — voir ❓).
> - Ordonnance n° 2025-1247 du 17 décembre 2025 (recodification : la taxe sur les services
>   numériques a quitté les art. 299 s. du CGI pour le Code des impositions sur les biens et
>   services — piège documenté à l'axe `fisc-numerique`).

Convention : un **fait affirmé = un lien**, niveau (1) texte juridique en vigueur, (2) administration
ou opérateur public, (3) institution européenne/internationale, (4) presse/site spécialisé (jamais
seul sur un chiffre). Les textes proposés sont prêts à copier dans `baseline_reel` ; les listes de
sources alimentent `source_baseline` (format liste autorisé par CLAUDE.md).

---

## 1. `fisc-succession` — Succession, donation & héritage

**Verdict : ⚠️ imprécise** (droit exact, recettes sous-estimées).

**Vérifié.** Abattement de 100 000 € par parent et par enfant : art. 779 CGI, en vigueur, non
modifié par la LF 2026. Barème en ligne directe progressif de 5 % à 45 % (au-delà de
1 805 677 €) : art. 777 CGI. Recettes DMTG (successions + donations) : 21,2 Md€ en 2025
(20,9 Md€ en 2024) selon le bulletin DGFiP Statistiques n° 43 (mars 2026) — chiffre corroboré par
deux sources secondaires mais PDF officiel non lisible par mon outil (voir ❓) ; la piste disait
« ≈ 16-17 Md€ », qui correspond aux seules successions vers 2023.

**Texte de baseline proposé :**
> En ligne directe, chaque enfant bénéficie d'un abattement de 100 000 € par parent sur sa part
> d'héritage (art. 779 du CGI), puis d'un barème progressif de 5 % à 45 % (art. 777 du CGI). La
> loi de finances pour 2026 n'a pas modifié ces paramètres. Les droits de mutation à titre gratuit
> (successions et donations) ont rapporté environ 21 Md€ en 2025 (DGFiP).

**Sources :**
- Abattement 100 000 € : [art. 779 CGI, Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000026292566) (1) ; en pratique : [service-public.gouv.fr F14198](https://www.service-public.gouv.fr/particuliers/vosdroits/F14198) (2).
- Barème jusqu'à 45 % : [art. 777 CGI, section « Tarif et liquidation », Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069577/LEGISCTA000006191748/) (1).
- Recettes ≈ 21 Md€ en 2025 : [bulletin DGFiP Statistiques n° 43, impots.gouv.fr](https://www.impots.gouv.fr/actualite/bulletin-dgfip-statistiques-ndeg43-les-recettes-fiscales-collectees-par-la-dgfip) (2) — [PDF](https://www.impots.gouv.fr/sites/default/files/media/9_statistiques/0_etudes_et_stats/0_publications/dgfip_statistiques/2026/num43_03/dgfip_stat43_budget_2025.pdf) à ouvrir manuellement pour confirmer le chiffre exact.

**Ce qui a changé :** recettes 16-17 Md€ → ≈ 21 Md€ (périmètre DMTG complet, 2025) ; le reste confirmé.

---

## 2. `fisc-fraude` — Fraude & évasion fiscales

**Verdict : ⚠️ imprécise** (confusion notifié / recouvré).

**Vérifié.** Résultats 2025 du contrôle fiscal : **17,1 Md€ de droits et pénalités notifiés**
(+3 % vs 2024) mais **11,4 Md€ effectivement encaissés** — la piste « 15-17 Md€ mis en
recouvrement » mélangeait les deux notions. CJIP créée par l'art. 22 de la loi « Sapin 2 »
n° 2016-1691 du 9 décembre 2016 : confirmé. « Verrou de Bercy » assoupli par la loi n° 2018-898
du 23 octobre 2018 (transmission automatique au parquet des dossiers les plus graves, seuil de
100 000 € de droits éludés avec majorations) : confirmé.

**Texte de baseline proposé :**
> En 2025, le contrôle fiscal a notifié 17,1 Md€ de droits et pénalités, dont 11,4 Md€
> effectivement encaissés (DGFiP). La convention judiciaire d'intérêt public (CJIP), qui permet à
> une entreprise de transiger sans reconnaissance de culpabilité, a été créée par la loi « Sapin 2 »
> du 9 décembre 2016. Le « verrou de Bercy » (monopole de l'administration pour engager les
> poursuites pénales fiscales) a été assoupli par la loi du 23 octobre 2018, qui rend automatique
> la transmission au parquet des dossiers dépassant 100 000 € de droits éludés assortis des
> majorations les plus lourdes.

**Sources :**
- 17,1 Md€ notifiés / 11,4 Md€ encaissés (2025) : [economie.gouv.fr, « Lutte contre la fraude : un contrôle fiscal toujours plus efficace en 2025 »](https://www.economie.gouv.fr/actualites/lutte-contre-la-fraude-un-controle-fiscal-toujours-plus-efficace-en-2025) (2) ; [rapport d'activité 2025 de la DGFiP, impots.gouv.fr](https://www.impots.gouv.fr/actualite/publication-du-rapport-dactivite-2025-de-la-dgfip) (2).
- CJIP / Sapin 2 : [art. 22, loi n° 2016-1691, Légifrance](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000033558671) (1).
- Verrou de Bercy : [loi n° 2018-898 du 23 octobre 2018, Légifrance](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000037518803) (1).

**Ce qui a changé :** « 15-17 Md€ mis en recouvrement » remplacé par le couple exact notifié (17,1) / encaissé (11,4), millésime 2025.

---

## 3. `fisc-dette` — Dette publique & règles budgétaires

**Verdict : ❌ périmée** (ratio de dette dépassé).

**Vérifié.** Dette publique : **115,7 % du PIB fin 2025** et **117,5 % du PIB fin T1 2026**
(3 536,1 Md€), INSEE, Informations rapides n° 158 du 25 juin 2026 — la piste disait « ≈ 114 % fin
2025 ». Charge budgétaire de la dette de l'État prévue en LF 2026 : **59,3 Md€** (mission
« Engagements financiers de l'État », 60,4 Md€ de crédits de paiement), premier poste du budget de
l'État. Interdiction du financement monétaire : art. 123 TFUE, confirmé.

**Texte de baseline proposé :**
> La dette publique atteint 3 536,1 Md€ fin mars 2026, soit 117,5 % du PIB (115,7 % fin 2025 —
> INSEE). La charge budgétaire de la dette de l'État est prévue à 59,3 Md€ par la loi de finances
> pour 2026, ce qui en fait le premier poste du budget de l'État. Le financement monétaire des
> États par la banque centrale est interdit par l'article 123 du traité sur le fonctionnement de
> l'Union européenne.

**Sources :**
- 117,5 % du PIB / 3 536,1 Md€ (T1 2026) et 115,7 % (fin 2025) : [INSEE, Informations rapides n° 158, 25/06/2026](https://www.insee.fr/fr/statistiques/9010340) (2).
- Charge de la dette 59,3 Md€ en LF 2026 : [rapport Sénat, PLF 2026, mission « Engagements financiers de l'État »](https://www.senat.fr/rap/l25-139-312/l25-139-312_mono.html) (2).
- Art. 123 TFUE : [EUR-Lex, TFUE consolidé 2016, art. 123](https://eur-lex.europa.eu/eli/treaty/tfeu_2016/art_123/oj/eng) (3).

**Ce qui a changé :** 114 % → 115,7 % (fin 2025) / 117,5 % (T1 2026) ; charge de la dette chiffrée (59,3 Md€, LF 2026).

---

## 4. `fisc-collectivites` — Finances des collectivités locales

**Verdict : ⚠️ imprécise** (montant DGF à double périmètre, CVAE à préciser).

**Vérifié.** DGF 2026 : **32,6 Md€** en LF 2026, mais cette hausse vient de la rebudgétisation de
l'ancienne TVA affectée aux régions (5,2 Md€) ; **à périmètre constant, la DGF est gelée à
27,4 Md€** — la piste (« ≈ 27 Md€ ») était juste à périmètre 2025. CVAE : suppression **reportée à
2030** par la LF 2025 ; l'article du PLF 2026 qui l'avançait à 2028 a disparu du texte final
(49.3) ; taux maximal stable en 2026-2027. « Pas de loi organique de garantie de ressources » :
fait négatif, invérifiable directement en ligne (voir ❓) — reformulé.

**Texte de baseline proposé :**
> La loi de finances pour 2026 fixe la dotation globale de fonctionnement (DGF) à 32,6 Md€, dont
> 5,2 Md€ issus de la rebudgétisation de l'ancienne TVA affectée aux régions : à périmètre
> constant, la DGF est gelée à 27,4 Md€, comme en 2025. La CVAE, en extinction progressive, doit
> disparaître en 2030 : la loi de finances pour 2026 n'a pas avancé ce calendrier.

**Sources :**
- DGF 32,6 Md€ / 27,4 Md€ à périmètre constant (LF 2026) : [rapport Sénat, PLF 2026, mission « Relations avec les collectivités territoriales »](https://www.senat.fr/rap/l25-139-325/l25-139-32516.html) (2) ; [guide pratique de la DGF 2026, collectivites-locales.gouv.fr](https://www.collectivites-locales.gouv.fr/gerer-les-finances-publiques-locales/execution-des-recettes-et-des-depenses-locales/recettes-locales/dotations/dotation-globale-de-fonctionnement) (2).
- CVAE maintenue jusqu'en 2030 : [LégiFiscal, « PLF 2026 après 49-3 : pas de baisse de la CVAE en 2026 »](https://www.legifiscal.fr/actualites-fiscales/4401-plf-2026-49-3-baisse-cvae-2026.html) (4) ; [FIPECO, « La suppression de la CVAE »](https://www.fipeco.fr/commentaire/La%20suppression%20de%20la%20cotisation%20sur%20la%20valeur%20ajout%C3%A9e) (4). *Deux sources de niveau 4 concordantes ; l'éditeur peut préférer renvoyer à l'art. 79 de la LF 2025 sur Légifrance s'il veut un niveau 1 (numéro d'article à confirmer).*

**Ce qui a changé :** DGF précisée en double périmètre (32,6 / 27,4 Md€) ; calendrier CVAE daté (2030) ; fait négatif « pas de loi organique » retiré (invérifiable).

---

## 5. `fisc-niches` — Niches fiscales & dépenses fiscales

**Verdict : ⚠️ imprécise** (les deux chiffres étaient en dessous).

**Vérifié.** Tome II « Voies et moyens » annexé au PLF 2026 : **465 dépenses fiscales recensées**,
coût **89,4 Md€ chiffré pour 2025** (408 niches avec coût individuel chiffré ; 82 en extinction).
La piste disait « ≈ 470 dispositifs, ≈ 80 Md€ ».

**Texte de baseline proposé :**
> Le tome II « Voies et moyens » annexé au projet de loi de finances pour 2026 recense 465
> dépenses fiscales (« niches »), pour un coût total chiffré à 89,4 Md€ en 2025.

**Sources :**
- 465 dispositifs / 89,4 Md€ : [Évaluation des voies et moyens, tome II, PLF 2026 (PDF)](https://www.assemblee-nationale.fr/dyn/dyn/contenu/visualisation/1087933/file/Voies_et_moyens_Tome_2_2026.pdf) (2).
- Contre-lecture : [Cour des comptes, note d'exécution budgétaire « Dépenses fiscales », avril 2026 (PDF)](https://www.ccomptes.fr/sites/default/files/2026-04/NEB-2026-Depenses-fiscales.pdf) (2).

**Ce qui a changé :** 470 → 465 dispositifs ; 80 → 89,4 Md€ (2025).

---

## 6. `fisc-superprofits` — Taxation des superprofits

**Verdict : ⚠️ incomplète** (deux évolutions LF 2026 manquaient).

**Vérifié.** Aucune taxe permanente sur les « superprofits » : toujours exact. Précédents
temporaires confirmés : contribution sur la rente inframarginale des producteurs d'électricité
(art. 54, LF 2023 ; prolongée en 2024 puis éteinte) ; contribution exceptionnelle sur les
bénéfices des grandes entreprises (LF 2025). **La LF 2026 a prolongé d'un an cette contribution
exceptionnelle** (seuil relevé à 1,5 Md€ de chiffre d'affaires, taux de 20,6 % / 41,2 % de l'IS
selon le CA) **et créé une taxe de 20 % sur les actifs non professionnels des holdings
patrimoniales** (art. 7, actifs > 5 M€, exercices clos à compter du 31/12/2026) — c'est le piège
« LF 2026 » déjà repéré le 2026-07-28 sur les baselines publiées.

**Texte de baseline proposé :**
> Il n'existe pas de taxe permanente sur les « superprofits ». Des dispositifs temporaires se sont
> succédé : contribution sur la rente inframarginale des producteurs d'électricité (loi de
> finances pour 2023), contribution exceptionnelle sur les bénéfices des grandes entreprises créée
> par la loi de finances pour 2025 et prolongée d'un an par la loi de finances pour 2026 (chiffre
> d'affaires supérieur à 1,5 Md€). La loi de finances pour 2026 a par ailleurs créé une taxe de
> 20 % sur les actifs non professionnels des holdings patrimoniales (art. 7).

**Sources :**
- Rente inframarginale : [art. 54, loi n° 2022-1726 de finances pour 2023, Légifrance](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000046845692) (1).
- Prolongation de la contribution exceptionnelle (seuil 1,5 Md€) : [EY Société d'Avocats, « Loi de finances pour 2026 — mesures entreprises »](https://www.avocats.ey.com/fr_fr/fiscalite/loi-de-finances-pour-2026-mesures-entreprises) (4) ; [economie.gouv.fr, « Loi de finances 2026 : ce qui change pour les entreprises »](https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/loi-de-finances-2026-ce-qui-change-pour-les-entreprises) (2).
- Taxe sur les holdings (art. 7, 20 %, > 5 M€) : [loi n° 2026-103, Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053508155) (1) — article 7 vérifié dans le texte.

**Ce qui a changé :** ajout de la prolongation LF 2026 de la contribution exceptionnelle et de la création de la taxe holdings (art. 7).

---

## 7. `fisc-secu` — Financement de la Sécurité sociale (CSG, cotisations)

**Verdict : ⚠️ imprécise** (montant des exonérations sous-estimé).

**Vérifié.** CSG sur les revenus d'activité : **9,2 %**, taux proportionnel sans barème progressif
— confirmé, inchangé par la LFSS 2026 (qui a en revanche porté la CSG sur la plupart des revenus
du capital de 9,2 % à 10,6 %). Exonérations de cotisations sociales : **plus de 88 Md€ en 2025**
(annexe 4 du PLFSS 2026), majoritairement compensées à la Sécurité sociale par l'État (TVA
affectée) — la piste disait « ≈ 75 Md€ compensées ».

**Texte de baseline proposé :**
> La CSG sur les revenus d'activité est un prélèvement proportionnel de 9,2 %, sans barème
> progressif (la LFSS pour 2026 a porté la CSG sur la plupart des revenus du capital à 10,6 %).
> L'ensemble des exonérations de cotisations sociales représente plus de 88 Md€ en 2025, en
> majorité compensées à la Sécurité sociale par l'État (annexe 4 du PLFSS 2026).

**Sources :**
- CSG activité 9,2 % : [Urssaf, « La CSG-CRDS »](https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/csg-crds.html) (2).
- CSG capital 10,6 % (LFSS 2026) : [BOSS, « CSG sur les revenus du capital »](https://boss.gouv.fr/portail/accueil/regles-dassujettissement/contribution-sociale-generalisee.html) (2).
- Exonérations > 88 Md€ (2025), compensation : [annexe 4 du PLFSS 2026, securite-sociale.fr (PDF)](https://www.securite-sociale.fr/files/live/sites/SSFR/files/medias/PLFSS/2026/PLFSS2026-Annexe4-20251014-183718-59-11_avec%20couverture.pdf) (2).

**Ce qui a changé :** 75 → > 88 Md€ (2025) ; ajout du contrepoint LFSS 2026 (CSG capital 10,6 %).

---

## 8. `fisc-verte` — Fiscalité environnementale

**Verdict : ⚠️ imprécise** (chiffres à jour trouvés, seuil du malus masse daté).

**Vérifié.** « Budget vert » annexé au PLF 2026 (6e édition) : **8,1 Md€ de dépenses défavorables
à l'environnement** (dont taux réduits sur les carburants et soutien au transport aérien),
en baisse de 1,3 Md€ vs 2025. Malus masse (taxe sur la masse en ordre de marche) : **seuil
abaissé à 1 500 kg au 1er janvier 2026** (1 600 kg en 2025) ; les véhicules 100 % électriques y
entrent au 1er juillet 2026 avec un abattement de 600 kg. TIRUERT : existe, prolongée jusqu'au
31 décembre 2026, remplacée par l'IRICC au 1er janvier 2027.

**Texte de baseline proposé :**
> Le « budget vert » annexé au PLF 2026 chiffre à 8,1 Md€ les dépenses de l'État défavorables à
> l'environnement, dont les taux réduits de taxation des carburants. Le malus au poids (taxe sur
> la masse en ordre de marche) se déclenche à 1 500 kg depuis le 1er janvier 2026. La TIRUERT
> (taxe incitative à l'incorporation d'énergie renouvelable dans les transports) s'applique
> jusqu'à fin 2026, avant remplacement par l'IRICC en 2027.

**Sources :**
- 8,1 Md€ de dépenses défavorables : [budget.gouv.fr, « PLF 2026 — 6e édition du budget vert »](https://www.budget.gouv.fr/reperes/budget_vert/articles/plf-2026-6e-edition-budget-vert) (2).
- Malus masse, seuil 1 500 kg : [simulateur officiel service-public.gouv.fr « Taxe sur la masse en ordre de marche »](https://www.service-public.gouv.fr/simulateur/calcul/TaxeAuPoids) (2) ; [La Tribune Auto, « Le malus masse 2026 s'applique à partir de 1 500 kg »](https://www.latribuneauto.com/reportages/reglementation/16291-le-malus-masse-2026-sapplique-a-partir-de-1-500-kg) (4).
- TIRUERT : [douane.gouv.fr, page TIRUERT](https://www.douane.gouv.fr/professionnels/energie/tiruert-taxe-incitative-relative-lutilisation-de-lenergie-renouvelable-dans) (2).

**Ce qui a changé :** taux réduits fossiles chiffrés via le budget vert (8,1 Md€) ; seuil malus masse fixé (1 500 kg, 01/01/2026) ; sort de la TIRUERT daté (IRICC en 2027).

---

## 9. `fisc-numerique` — Taxation du numérique

**Verdict : ✅ exacte** (avec une précision de codification indispensable).

**Vérifié.** Taxe sur les services numériques : **taux 3 %** (art. L. 453-70), seuils
d'assujettissement **750 M€ de recettes mondiales** (art. L. 453-65) et **25 M€ en France**
(art. L. 453-66) — vérifié sur le texte consolidé en vigueur au 2026-07-29. Deux précisions :
(a) la taxe, créée par la loi n° 2019-759, est désormais codifiée aux art. L. 453-45 à L. 453-83
du Code des impositions sur les biens et services (les art. 299 s. du CGI ont été réaffectés) ;
(b) le doublement du taux à 6 % voté par l'Assemblée nationale en octobre 2025 **ne figure pas
dans le texte consolidé en vigueur** — la LF 2026 n'apparaît pas dans l'historique de
modification de la section.

**Texte de baseline proposé :**
> La taxe sur les services numériques (créée par la loi du 24 juillet 2019) s'applique au taux de
> 3 % aux entreprises réalisant plus de 750 M€ de recettes numériques mondiales, dont plus de
> 25 M€ en France (art. L. 453-45 et suivants du Code des impositions sur les biens et services).

**Sources :**
- Taux 3 % et seuils 750 M€ / 25 M€ (droit en vigueur) : [CIBS, art. L. 453-45 à L. 453-83, Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000044595989/LEGISCTA000048626177/) (1).
- Création de la taxe : [loi n° 2019-759 du 24 juillet 2019, Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000038811588) (1).

**Ce qui a changé :** rien sur le fond ; référence légale actualisée (CIBS, plus le CGI) et piège écarté (hausse à 6 % votée à l'AN mais absente du droit en vigueur).

---

## 10. `fisc-fonciere` — Fiscalité foncière des ménages

**Verdict : ✅ exacte** (calendrier de la révision précisé).

**Vérifié.** La taxe foncière sur les propriétés bâties est assise sur **50 % de la valeur
locative cadastrale** (abattement forfaitaire pour frais), multipliée par les taux votés par les
collectivités : confirmé. La révision des valeurs locatives des locaux d'habitation, initialement
prévue pour 2026, a été **reportée de deux ans par l'art. 106 de la LF 2023 : intégration prévue
dans les impositions 2028** (collecte des loyers en 2025, rapport au Parlement avant le
1er septembre 2026).

**Texte de baseline proposé :**
> La taxe foncière sur les propriétés bâties est calculée sur 50 % de la valeur locative
> cadastrale du bien (et non sur le patrimoine net de dettes), multipliée par les taux votés par
> les collectivités. La révision des valeurs locatives des locaux d'habitation, qui datent de
> 1970, a été reportée : son intégration est prévue dans les impositions de 2028.

**Sources :**
- Assiette 50 % de la valeur locative : [economie.gouv.fr, « Taxe foncière : mode de calcul et réductions »](https://www.economie.gouv.fr/particuliers/impots-et-fiscalite/gerer-mes-impots-locaux/taxe-fonciere-mode-de-calcul-et-reductions) (2) ; [impots.gouv.fr, « Base de calcul »](https://www.impots.gouv.fr/particulier/base-de-calcul) (2).
- Report de la révision à 2028 : [réponse ministérielle, question AN n° 410 (17e lég.)](https://questions.assemblee-nationale.fr/q17/17-410QE.htm) (2).

**Ce qui a changé :** rien sur le fond ; calendrier de la révision daté (2028).

---

## 11. `fisc-foyer` — Fiscalité du foyer (quotients, pensions alimentaires)

**Verdict : ⚠️ imprécise** (plafond du quotient familial actualisé).

**Vérifié.** Imposition commune obligatoire des couples mariés et pacsés (art. 6 CGI ; option pour
l'imposition séparée limitée, pour l'essentiel, à l'année du mariage/pacs) : confirmé. Plafond de
l'avantage du quotient familial : **1 807 € par demi-part** pour l'imposition 2026 des revenus
2025 (LF 2026 ; BOFiP à jour au 7 avril 2026) — la piste disait « ≈ 1 791 € », valeur revenus
2024. Pensions alimentaires reçues : imposables (après abattement de 10 %) : confirmé. Les fiches
service-public F1419 et F2705 citées par l'extracteur n'ont pas été retrouvées — remplacées par
des pages vérifiées.

**Texte de baseline proposé :**
> Les couples mariés ou pacsés sont soumis à une imposition commune obligatoire (art. 6 du CGI),
> le « quotient conjugal ». L'avantage fiscal du quotient familial est plafonné à 1 807 € par
> demi-part pour l'imposition des revenus de 2025. Les pensions alimentaires reçues sont
> imposables entre les mains du bénéficiaire.

**Sources :**
- Imposition commune obligatoire : [art. 6 CGI, Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046197457) (1).
- Plafond 1 807 €/demi-part : [BOFiP BOI-IR-LIQ-20-20-20 (version du 07/04/2026)](https://bofip.impots.gouv.fr/bofip/2494-PGP.html/identifiant=BOI-IR-LIQ-20-20-20-20260407) (2).
- Pensions alimentaires reçues imposables : [service-public.gouv.fr F3170 (pension perçue d'un conjoint/ex-conjoint)](https://www.service-public.gouv.fr/particuliers/vosdroits/F3170) (2) ; côté payeur : [service-public.gouv.fr F2](https://www.service-public.gouv.fr/particuliers/vosdroits/F2) (2).

**Ce qui a changé :** plafond 1 791 → 1 807 € (revenus 2025, LF 2026) ; références service-public corrigées.

---

## 12. `fisc-aides-entreprises` — Aides publiques aux entreprises

**Verdict : ❌ erronée** (fourchette très en dessous du chiffre de référence).

**Vérifié.** La commission d'enquête du Sénat sur l'utilisation des aides publiques aux grandes
entreprises (rapport rendu public le **8 juillet 2025**, rapporteur Fabien Gay, président Olivier
Rietmann) évalue les aides publiques aux entreprises à **211 Md€ par an** (année de référence
2023, périmètre large : subventions, dépenses fiscales, exonérations de cotisations) — la piste
disait « 110-160 Md€ ». Le rapport constate l'absence de recensement consolidé et réclame un
« choc de transparence » ; il n'existe pas d'obligation de publication consolidée (fait négatif —
formulé ici via le constat du rapport).

**Texte de baseline proposé :**
> La commission d'enquête du Sénat sur les aides publiques aux grandes entreprises (rapport du
> 8 juillet 2025) évalue les aides publiques aux entreprises à environ 211 Md€ par an (année
> 2023, périmètre incluant subventions, dépenses fiscales et exonérations de cotisations). Elle
> constate l'absence de recensement consolidé et d'évaluation systématique de ces aides.

**Sources :**
- 211 Md€/an, rapport du 08/07/2025 : [Sénat, commission d'enquête « aides publiques aux grandes entreprises »](https://www.senat.fr/travaux-parlementaires/structures-temporaires/commissions-denquete/commission-denquete-sur-lutilisation-des-aides-publiques-aux-grandes-entreprises-et-a-leurs-sous-traitants.html) (2) ; [notice du rapport r24-808-1](https://www.senat.fr/notice-rapport/2024/r24-808-1-notice.html) (2).
- Constat d'absence de suivi consolidé (« choc de transparence ») : [Public Sénat, 08/07/2025](https://www.publicsenat.fr/actualites/economie/un-cout-annuel-de-211-milliards-deuros-la-commission-denquete-du-senat-sur-les-aides-publiques-aux-entreprises-reclame-un-choc-de-transparence) (4).

**Ce qui a changé :** 110-160 Md€ → 211 Md€/an (Sénat, 2023) ; « pas de publication consolidée obligatoire » reformulé en constat sourcé du rapport.

---

## 13. `fisc-patrimoine-public` — Patrimoine public & privatisations

**Verdict : ⚠️ incomplète** (portefeuille APE désormais chiffré).

**Vérifié.** Portefeuille de l'Agence des participations de l'État : **209,1 Md€ à la mi-2025**
(+16,4 % sur un an), **86 entreprises**, dont 67,9 Md€ de participations cotées — rapport
d'activité APE 2024-2025 (octobre 2025). FDJ : l'État est passé de 72 % à ~20 % du capital lors
de l'introduction en bourse de **novembre 2019** (privatisation autorisée par la loi PACTE
n° 2019-486). Autoroutes : les sociétés concessionnaires historiques (ASF, APRR, Sanef) ont été
**totalement privatisées en 2006** (cession des participations résiduelles de l'État, 14,8 Md€).

**Texte de baseline proposé :**
> Le portefeuille de l'Agence des participations de l'État était valorisé à 209,1 Md€ à la
> mi-2025, répartis sur 86 entreprises. La Française des Jeux a été privatisée en novembre 2019
> (l'État passant de 72 % à environ 20 % du capital, en application de la loi PACTE) et les
> sociétés d'autoroutes historiques ont été totalement privatisées en 2006.

**Sources :**
- 209,1 Md€ / 86 entreprises (mi-2025) : [rapport d'activité APE 2024-2025, economie.gouv.fr (PDF)](https://www.economie.gouv.fr/files/files/directions_services/agence-participations-etat/Documents/Rapports-de-l-Etat-actionnaire/2025/REA%202025.pdf) (2) ; [présentation, economie.gouv.fr](https://www.economie.gouv.fr/actualites/rapport-dactivite-de-lape-une-agence-au-service-de-la-souverainete-economique) (2).
- Privatisation FDJ (nov. 2019, loi PACTE) : [réponse ministérielle, question AN n° 4889 (17e lég.)](https://questions.assemblee-nationale.fr/q17/17-4889QE.htm) (2).
- Privatisation totale des autoroutes en 2006 (14,8 Md€) : [rapport Sénat r19-709, « Concessions autoroutières »](https://www.senat.fr/rap/r19-709-1/r19-709-17.html) (2) ; [FIPECO, « La concession et la privatisation des autoroutes »](https://www.fipeco.fr/commentaire/La%20concession%20et%20la%20privatisation%20des%20autoroutes) (4).

**Ce qui a changé :** portefeuille APE chiffré (209,1 Md€ mi-2025, 86 entreprises) ; privatisations FDJ/autoroutes confirmées et sourcées.

---

## 14. `fin-regulation` — Régulation bancaire & financière

**Verdict : ❌ périmée** (taux de TTF dépassé).

**Vérifié.** Loi n° 2013-672 du 26 juillet 2013 : séparation limitée à la **filialisation** des
activités spéculatives « sans utilité pour le financement de l'économie » (pas de scission des
banques universelles) : confirmé. TTF française (art. 235 ter ZD CGI) : **0,4 % depuis le
1er avril 2025** (art. 98 de la LF 2025) — la piste citait encore 0,3 %. La LF 2026 n'a pas
modifié ce taux (texte consolidé de l'art. 235 ter ZD en vigueur vérifié).

**Texte de baseline proposé :**
> La loi bancaire du 26 juillet 2013 n'a pas séparé banques de dépôt et banques d'affaires : elle
> impose seulement de filialiser certaines activités spéculatives. La taxe sur les transactions
> financières française s'applique au taux de 0,4 % depuis le 1er avril 2025 (0,3 % auparavant)
> aux acquisitions d'actions de sociétés françaises capitalisant plus d'un milliard d'euros
> (art. 235 ter ZD du CGI).

**Sources :**
- Filialisation (loi de 2013) : [loi n° 2013-672 du 26 juillet 2013, Légifrance](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000027754539) (1).
- TTF 0,4 % au 01/04/2025 : [art. 235 ter ZD CGI (version en vigueur), Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051764916) (1) ; commentaire administratif : [BOFiP, actualité du relèvement (LF 2025, art. 98)](https://bofip.impots.gouv.fr/bofip/14605-PGP.html/ACTU-2025-00034) (2).

**Ce qui a changé :** TTF 0,3 % → 0,4 % (depuis le 01/04/2025, LF 2025).

---

## 15. `fin-banques-publiques` — Pôle public bancaire & orientation du crédit

**Verdict : ✅ exacte** (reformulée pour sortir les faits négatifs non sourçables).

**Vérifié.** La Caisse des dépôts et consignations et ses filiales forment un « groupe public au
service de l'intérêt général » (art. L. 518-2 du Code monétaire et financier) : confirmé.
Bpifrance : créée par la loi n° 2012-1559 du 31 décembre 2012, détenue à parité par l'État et la
CDC : confirmé. « Pas de pôle public bancaire unifié ni de Community Reinvestment Act français » :
faits négatifs invérifiables directement en ligne (voir ❓) — la baseline proposée décrit
l'existant sans affirmer l'inexistant.

**Texte de baseline proposé :**
> Il existe des institutions financières publiques distinctes : la Caisse des dépôts et
> consignations, « groupe public au service de l'intérêt général » (art. L. 518-2 du Code
> monétaire et financier), et Bpifrance, banque publique d'investissement créée par la loi du
> 31 décembre 2012 et détenue à parité par l'État et la CDC. Aucun texte ne les regroupe en un
> pôle public bancaire unique.

**Sources :**
- CDC groupe public : [art. L. 518-2 CMF, Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000019300481) (1).
- Création et actionnariat de Bpifrance : [loi n° 2012-1559, dossier législatif, Légifrance](https://www.legifrance.gouv.fr/dossierlegislatif/JORFDOLE000026503648/) (1).

**Ce qui a changé :** rien sur le fond ; La Banque Postale retirée (non sourcée pendant ce run) et faits négatifs reformulés en description de l'existant.

---

## 16. `fin-climat` — Finance & climat

**Verdict : ✅ exacte.**

**Vérifié.** Art. 29 de la loi énergie-climat n° 2019-1147 du 8 novembre 2019 (codifié à l'art.
L. 533-22-1 CMF, décret d'application du 27 mai 2021) : obligation de **reporting**
extra-financier (climat, biodiversité) pour les acteurs de marché — c'est une obligation de
transparence, le texte n'impose pas de réduction des actifs fossiles. Devoir de vigilance : loi
n° 2017-399 du 27 mars 2017 (plan de vigilance pour les sociétés ≥ 5 000 salariés en France ou
≥ 10 000 dans le monde) : confirmée, toujours en vigueur.

**Texte de baseline proposé :**
> L'article 29 de la loi énergie-climat du 8 novembre 2019 impose aux acteurs financiers une
> obligation de transparence sur les risques climat et biodiversité de leurs portefeuilles, sans
> obligation de réduire leurs actifs fossiles. La loi du 27 mars 2017 sur le devoir de vigilance
> impose aux plus grandes sociétés un plan de prévention des atteintes aux droits humains et à
> l'environnement dans leur chaîne de valeur.

**Sources :**
- Reporting art. 29 : [art. 29, loi n° 2019-1147, Légifrance](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000039355992) (1) ; portée précisée par [DG Trésor, décret d'application de l'art. 29](https://www.tresor.economie.gouv.fr/Articles/2021/06/08/publication-du-decret-d-application-de-l-article-29-de-la-loi-energie-climat-sur-le-reporting-extra-financier-des-acteurs-de-marche) (2).
- Devoir de vigilance : [loi n° 2017-399 du 27 mars 2017, Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034290626/) (1).

**Ce qui a changé :** rien ; sources posées.

---

## 17. `fin-monnaie-bce` — Monnaie & banque centrale

**Verdict : ⚠️ à actualiser** (le projet d'euro numérique a changé de phase).

**Vérifié.** Euro numérique : la phase de préparation (lancée en novembre 2023) est terminée ; le
Conseil des gouverneurs de la BCE a décidé le **29-30 octobre 2025** d'ouvrir une nouvelle phase
visant un **pilote à la mi-2027 et une éventuelle première émission en 2029**, sous réserve de
l'adoption du règlement européen sur l'euro numérique — aucune décision d'émission n'est prise.
Mandat de la BCE : objectif principal de **stabilité des prix**, art. 127 TFUE : confirmé.

**Texte de baseline proposé :**
> L'euro numérique n'existe pas encore : après une phase de préparation (2023-2025), la BCE a
> décidé le 30 octobre 2025 d'engager la phase suivante du projet, visant un pilote mi-2027 et
> une éventuelle première émission en 2029, sous réserve de l'adoption du règlement européen ;
> aucune décision d'émission n'a été prise. L'objectif principal assigné à la BCE par les traités
> est la stabilité des prix (art. 127 TFUE).

**Sources :**
- Nouvelle phase du projet (30/10/2025, pilote 2027, émission possible 2029) : [communiqué BCE du 30/10/2025 (FR)](https://ecb.europa.eu/press/pr/date/2025/html/ecb.pr251030~8c5b5beef0.fr.html) (3) ; relais officiel : [Banque de France, communiqué (PDF)](https://www.banque-france.fr/system/files/2025-10/communique-de-presse-BCE_2025-10-30_L-Eurosysteme-ouvre-la-prochaine-etape-du-projet-d-euro-numerique.pdf) (2).
- Mandat stabilité des prix : [TFUE consolidé, art. 127 (EUR-Lex, texte intégral)](https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=CELEX:12012E/TXT:en:PDF) (3).

**Ce qui a changé :** « phase de préparation » → phase suivante décidée le 30/10/2025, calendrier daté (pilote 2027, émission possible 2029).

---

## 18. `fin-definanciarisation` — Encadrement des dividendes & gouvernance actionnariale

**Verdict : ✅ exacte.**

**Vérifié.** Art. L. 232-11 du Code de commerce : le bénéfice distribuable comprend le report à
nouveau et l'assemblée peut en outre distribuer des sommes prélevées sur les **réserves**
disponibles — des dividendes peuvent donc être versés au-delà du bénéfice de l'exercice :
confirmé. Art. L. 1233-3 du Code du travail : le motif économique de licenciement est défini par
des indicateurs (baisse des commandes ou du chiffre d'affaires, pertes d'exploitation,
dégradation de trésorerie ou d'EBE…) qui **ne comportent aucun critère lié au versement de
dividendes** : confirmé (lecture du texte en vigueur).

**Texte de baseline proposé :**
> Le droit des sociétés autorise la distribution de dividendes au-delà du bénéfice de l'exercice,
> par prélèvement sur les réserves disponibles (art. L. 232-11 du Code de commerce). La
> définition du licenciement pour motif économique (art. L. 1233-3 du Code du travail) repose sur
> des indicateurs comme la baisse du chiffre d'affaires ou les pertes d'exploitation et ne
> comporte aucun critère lié au versement de dividendes.

**Sources :**
- Distribution sur réserves : [art. L. 232-11 Code de commerce, Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006229026) (1).
- Définition du motif économique : [art. L. 1233-3 Code du travail, Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036762081) (1).

**Ce qui a changé :** rien ; sources posées.

---

## Tableau récapitulatif

| Axe | Verdict | Correction principale |
|---|---|---|
| fisc-succession | ⚠️ | Recettes DMTG : 16-17 → ≈ 21 Md€ (2025) |
| fisc-fraude | ⚠️ | 17,1 Md€ notifiés / 11,4 Md€ encaissés (2025) |
| fisc-dette | ❌ | Dette : 114 % → 115,7 % (fin 2025) / 117,5 % (T1 2026) |
| fisc-collectivites | ⚠️ | DGF 2026 : 32,6 Md€ (27,4 à périmètre constant) ; CVAE : 2030 |
| fisc-niches | ⚠️ | 465 dispositifs, 89,4 Md€ (2025) |
| fisc-superprofits | ⚠️ | + prolongation contribution IS et taxe holdings (LF 2026) |
| fisc-secu | ⚠️ | Exonérations : 75 → > 88 Md€ (2025) ; CSG capital 10,6 % |
| fisc-verte | ⚠️ | Budget vert 8,1 Md€ ; malus masse 1 500 kg (2026) |
| fisc-numerique | ✅ | TSN 3 % confirmée ; recodifiée au CIBS ; hausse à 6 % non retenue |
| fisc-fonciere | ✅ | Révision des valeurs locatives : 2028 |
| fisc-foyer | ⚠️ | Plafond quotient familial : 1 791 → 1 807 € (revenus 2025) |
| fisc-aides-entreprises | ❌ | 110-160 → 211 Md€/an (Sénat, 08/07/2025) |
| fisc-patrimoine-public | ⚠️ | APE : 209,1 Md€ mi-2025, 86 entreprises |
| fin-regulation | ❌ | TTF : 0,3 → 0,4 % (depuis le 01/04/2025) |
| fin-banques-publiques | ✅ | Reformulée (faits négatifs sortis, LBP retirée) |
| fin-climat | ✅ | Confirmée, sources posées |
| fin-monnaie-bce | ⚠️ | Nouvelle phase BCE (30/10/2025), pilote 2027, émission possible 2029 |
| fin-definanciarisation | ✅ | Confirmée, sources posées |

**Bilan : 5 ✅ · 10 ⚠️ · 3 ❌ · 0 piste entièrement invérifiable.**

## Faits restés invérifiables ou à confirmer (❓)

1. **Recettes DMTG 21,2 Md€ en 2025** : chiffre attribué au bulletin DGFiP Statistiques n° 43
   (mars 2026) par deux sources secondaires concordantes, mais le PDF officiel n'a pas pu être lu
   par mon outil. À confirmer en ouvrant le
   [PDF](https://www.impots.gouv.fr/sites/default/files/media/9_statistiques/0_etudes_et_stats/0_publications/dgfip_statistiques/2026/num43_03/dgfip_stat43_budget_2025.pdf)
   avant publication ; d'où le « environ 21 Md€ » prudent dans le texte proposé.
2. **« Pas de loi organique de garantie de ressources des collectivités »** (fisc-collectivites) :
   fait négatif, aucune source ne l'atteste directement — retiré de la baseline proposée.
3. **« Pas de pôle public bancaire unifié ni de Community Reinvestment Act français »**
   (fin-banques-publiques) : faits négatifs non sourçables en ligne — reformulés en description de
   l'existant (« aucun texte ne les regroupe » reste un quasi-négatif : l'éditeur peut le couper).
4. **Numéro et date exacts de la LFSS pour 2026** (fisc-secu) : non retrouvés pendant ce run — la
   baseline dit « LFSS pour 2026 » sans numéro ; à compléter si l'éditeur veut la référence Légifrance.
5. **Numéro de l'article de la LF 2026 prolongeant la contribution exceptionnelle IS**
   (fisc-superprofits) : prolongation confirmée (EY, economie.gouv) mais numéro d'article non
   identifié dans le texte promulgué (l'art. 7 de la taxe holdings, lui, est vérifié).
6. **Fiches service-public F1419 et F2705** citées par l'extracteur (fisc-foyer) : non retrouvées ;
   remplacées par F3170 et F2 (vérifiées).
7. **Rendement attendu de la contribution exceptionnelle IS en 2026** : chiffres divergents selon
   les sources (7,3 Md€ cité par une synthèse presse, non recoupé) — volontairement absent du texte
   proposé.

## Pièges relevés pendant ce run (pour le process)

- **Recodification silencieuse** : la TSN a quitté les art. 299 s. du CGI (réaffectés à la TGAP)
  pour les art. L. 453-45 s. du CIBS (ordonnance n° 2025-1247 du 17/12/2025). Une baseline qui
  citerait « art. 299 CGI » serait fausse sans qu'aucun chiffre ne change.
- **Mesure votée ≠ mesure promulguée** : le doublement de la TSN à 6 % (voté à l'AN le 28/10/2025,
  largement repris par la presse) ne figure pas dans le droit consolidé en vigueur — plusieurs
  articles de presse d'octobre-novembre 2025 le présentent pourtant comme acquis.
- **Chiffres circulant sans source primaire** : plusieurs sites (dont un se présentant comme
  « adcf.org » et des blogs fiscaux) affirment des réformes inexistantes (abattement succession
  porté à 150 000 €…) — aucune trace sur Légifrance ni sur les sites officiels ; écarté.
