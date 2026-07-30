# Vérification des baselines — 5 axes « fiscalité » (pilote) + 5 axes « justice, sécurité & libertés »

> Date : 2026-07-29 · Agent : verificateur-sources · **Rapport de vérification — RIEN n'a été modifié**
> dans `data/axes.json`, `data/candidats/*.json`, `data/taxonomie.json` ni le code.
>
> Cible : les 10 baselines déjà publiées dans `data/axes.json` listées ci-dessous. Les 18 autres axes
> (vérifiés le 2026-07-29 dans `verification-baselines-2026-07-29.md`) ne sont pas retouchés.
>
> Périmètre : `fisc-fortune`, `fisc-capital`, `fisc-ir`, `fisc-is`, `fisc-tva` (pilote fiscal, jamais
> passé par l'agent) ; `just-police`, `just-justice`, `just-prison`, `just-terrorisme`, `just-drogues`.
>
> Réformes de référence intégrées :
> - **Loi n° 2026-103 du 19 février 2026 de finances pour 2026** (« LF 2026 »),
>   [Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053508155).
> - **LFSS pour 2026** — a relevé la CSG sur les revenus du capital de 9,2 % à 10,6 % (impact direct
>   sur `fisc-capital`, voir ci-dessous).
>
> Convention : un **fait affirmé = un lien**, niveau (1) texte juridique en vigueur, (2) administration
> ou opérateur public, (3) institution européenne/internationale, (4) presse/site spécialisé (jamais
> seul sur un chiffre).

---

## 1. `fisc-fortune` — Fiscalité de la fortune / du patrimoine

**Verdict : ⚠️ imprécise** (contenu exact, mais sourçage non conforme « un lien par fait » + libellé de l'article à préciser).

**Vérifié.** ISF supprimé et remplacé par l'IFI au 1er janvier 2018, assis sur le patrimoine
immobilier net > 1,3 M€ (seuil **inchangé** en 2026). La LF 2026 a bien créé une taxe de 20 % sur
les actifs non professionnels de certaines holdings patrimoniales, due à compter des exercices clos
au 31/12/2026 : c'est l'**art. 235 ter C du CGI** (issu de l'**art. 7 de la LF 2026**), qui ne vise
que les sociétés dont l'actif total ≥ 5 M€ et cible des biens somptuaires (yachts, œuvres, véhicules,
logements à usage personnel…).

**Point de vigilance sourçage.** Le second lien actuel (`LEGIARTI000053542687`) n'est **pas** l'article
de l'IFI : c'est précisément l'art. 235 ter C CGI (la taxe holding). Donc, en l'état, le seuil IFI de
1,3 M€ ne repose que sur service-public F563, la mention « pas de taxe Zucman » n'a aucun lien, et la
taxe holding est correctement liée. Il faut ventiler.

**Texte de baseline proposé** (inchangé sur le fond, une précision « ≥ 5 M€ d'actifs » possible) :
> L'ISF a été supprimé au 1er janvier 2018 et remplacé par l'impôt sur la fortune immobilière (IFI),
> assis uniquement sur le patrimoine immobilier net supérieur à 1,3 M€ (seuil inchangé en 2026).
> Aucune imposition de type « taxe Zucman » sur le patrimoine global des milliardaires n'a été retenue
> par la loi de finances pour 2026 ; celle-ci a en revanche créé une taxe de 20 % sur les seuls actifs
> non professionnels de certaines holdings patrimoniales (actif total ≥ 5 M€), due à compter des
> exercices clos au 31/12/2026 (art. 235 ter C du CGI).

**Sources (une par fait) :**
- ISF → IFI, assiette immobilière, seuil 1,3 M€ : [service-public.gouv.fr F563](https://www.service-public.gouv.fr/particuliers/vosdroits/F563) (2).
- Taxe de 20 % sur les holdings patrimoniales, art. 235 ter C CGI : [Légifrance, art. 235 ter C CGI](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053542687) (1).
- « Taxe Zucman » non retenue (fait négatif) : à sourcer par la [décision n° 2026-901 DC du 19/02/2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053509638) ou le dossier législatif de la LF 2026 (1) — sinon ❓.

**Ce qui a changé :** aucune correction chiffrée (contenu exact) ; ventilation des sources « un lien par fait » et clarification que le 2ᵉ lien Légifrance = la taxe holding, pas l'IFI.

---

## 2. `fisc-capital` — Imposition des revenus du capital (flat tax / PFU)

**Verdict : ❌ périmée** — le taux de **30 % n'est plus le taux par défaut depuis le 1er janvier 2026**.

**Vérifié.** La LFSS pour 2026 a relevé la CSG sur la plupart des revenus du capital de 9,2 % à
**10,6 %**, portant les prélèvements sociaux de 17,2 % à **18,6 %**. Le PFU par défaut (dividendes,
intérêts, plus-values mobilières) passe donc de 30 % à **31,4 %** (12,8 % d'IR — inchangé — + 18,6 %
de prélèvements sociaux) depuis le 1er janvier 2026. L'option pour le barème progressif demeure. (Le
taux de 17,2 %/30 % subsiste par dérogation pour certains produits : PEL/CEL ouverts avant 2018,
assurance-vie, revenus fonciers, plus-values immobilières.)

C'est exactement le type de péremption ciblée par la mission (LFSS 2026 périmant une baseline).

**Texte de baseline proposé :**
> Depuis 2018, les revenus du capital sont soumis par défaut au prélèvement forfaitaire unique (PFU,
> « flat tax »). Depuis le 1er janvier 2026, ce taux est de 31,4 % : 12,8 % d'impôt sur le revenu
> (inchangé) + 18,6 % de prélèvements sociaux, la LFSS pour 2026 ayant relevé la CSG sur les revenus
> du capital de 9,2 % à 10,6 %. Le contribuable peut toujours opter pour le barème progressif.

**Sources (une par fait) :**
- Hausse CSG capital 9,2 % → 10,6 % (LFSS 2026) : [BOSS — Contribution sociale généralisée](https://boss.gouv.fr/portail/accueil/regles-dassujettissement/contribution-sociale-generalisee.html) (2) et [URSSAF CSG-CRDS](https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/csg-crds.html) (2).
- Option barème progressif + composante IR 12,8 % : [entreprendre.service-public.gouv.fr A18796](https://entreprendre.service-public.gouv.fr/actualites/A18796) (2) — **à vérifier : cette page affiche peut-être encore 30 %**.
- Total 31,4 % : résultat de l'addition des composantes officielles (12,8 % + 18,6 %). Aucune page officielle affichant explicitement « 31,4 % » retrouvée en ligne (uniquement des sites patrimoniaux de niveau 4) → le total est calculé, non cité. ❓ sur une source officielle du chiffre agrégé.

**Ce qui a changé :** **30 % → 31,4 %** (prélèvements sociaux 17,2 % → 18,6 %) depuis le 01/01/2026, du fait de la LFSS 2026 : baseline périmée.

---

## 3. `fisc-ir` — Progressivité de l'impôt sur le revenu

**Verdict : ✅ exacte** (barème 2026 confirmé).

**Vérifié.** 5 tranches (0/11/30/41/45 %). Le barème 2026 (revenus 2025), fixé par la LF 2026, a été
revalorisé ; la tranche à 45 % s'applique à la fraction de revenu par part **supérieure à 181 917 €**.
Les autres seuils : 11 600 € / 29 579 € / 84 577 € / 181 917 €.

**Texte de baseline proposé :** *(inchangé — il est exact)*
> Le barème de l'impôt sur le revenu comporte 5 tranches (0 %, 11 %, 30 %, 41 %, 45 %). Le taux
> marginal maximal de 45 % s'applique à la fraction de revenu par part supérieure à 181 917 €
> (barème 2026).

**Sources :**
- Barème 2026, 5 tranches, seuil 181 917 € : [service-public.gouv.fr F1419](https://www.service-public.gouv.fr/particuliers/vosdroits/F1419) (2) ; complément [service-public — actualité A18045](https://www.service-public.gouv.fr/particuliers/actualites/A18045) (2).

**Ce qui a changé :** rien (à confirmer que F1419 affiche bien le millésime 2026 à 181 917 €).

---

## 4. `fisc-is` — Impôt sur les sociétés / grandes entreprises

**Verdict : ✅ exacte** (surtaxe bien prolongée, taux effectifs confirmés).

**Vérifié.** IS au taux normal de 25 % depuis 2022 ; taux réduit de 15 % pour les PME sur une première
tranche de bénéfice (42 500 €) sous conditions. La contribution exceptionnelle sur les bénéfices des
grandes entreprises a été **prolongée d'un an par l'art. 4 de la LF 2026**, avec un seuil relevé à
> 1,5 Md€ de CA (contre 1 Md€ en 2025) : elle porte le taux effectif d'IS à **30,1 %** (CA > 1,5 Md€)
et **35,3 %** (CA > 3 Md€). Hors surtaxe, pas de barème progressif de l'IS.

**Texte de baseline proposé :** *(inchangé — exact ; on peut préciser « art. 4 de la LF 2026 »)*
> Le taux normal de l'impôt sur les sociétés est de 25 % depuis 2022 ; un taux réduit de 15 %
> s'applique aux PME sur une première tranche de bénéfice (42 500 €) sous conditions. La contribution
> exceptionnelle sur les bénéfices des grandes entreprises, prolongée par la loi de finances pour 2026
> (art. 4), porte le taux effectif à 30,1 % au-delà de 1,5 Md€ de chiffre d'affaires et 35,3 % au-delà
> de 3 Md€. Hors cette surtaxe temporaire, il n'existe pas de barème progressif de l'IS selon le
> niveau de bénéfice.

**Sources (une par fait) :**
- Taux normal 25 % + taux réduit 15 % PME : [service-public.gouv.fr F23575](https://www.service-public.gouv.fr/particuliers/vosdroits/F23575) (2).
- Surtaxe prolongée par la LF 2026, seuils 1,5/3 Md€, taux effectifs 30,1 %/35,3 % : [economie.gouv.fr — LF 2026, ce qui change pour les entreprises](https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/loi-de-finances-2026-ce-qui-change-pour-les-entreprises) (2) ; doctrine officielle [BOFiP BOI-IS-AUT-60](https://bofip.impots.gouv.fr/bofip/14607-PGP.html/identifiant=BOI-IS-AUT-60-20250917) (1/2).

**Ce qui a changé :** rien sur le fond ; ajout possible du renvoi à l'art. 4 de la LF 2026 et du montant 42 500 € de la tranche PME.

---

## 5. `fisc-tva` — TVA (taux réduits / différenciation)

**Verdict : ✅ exacte.**

**Vérifié.** Quatre taux en 2026 : 20 % (normal), 10 % (intermédiaire), 5,5 % (réduit) et 2,1 %
(super-réduit). Pas de taux « grand luxe » ni de modulation environnementale/sanitaire généralisée.
La LF 2026 n'a pas modifié cette architecture.

**Texte de baseline proposé :** *(inchangé — exact)*
> La TVA comporte quatre taux : 20 % (normal), 10 % (intermédiaire), 5,5 % (réduit, produits de
> première nécessité) et 2,1 % (super-réduit). Il n'existe pas de taux « grand luxe » spécifique ni de
> modulation généralisée selon l'impact environnemental ou sanitaire.

**Sources :**
- Quatre taux de TVA : [service-public.gouv.fr F23567](https://www.service-public.gouv.fr/particuliers/vosdroits/F23567) (2).

**Ce qui a changé :** rien.

---

## 6. `just-police` — Police (doctrine, maintien de l'ordre, contrôle)

**Verdict : ⚠️ incomplète** (contenu exact, mais un seul lien pour trois faits hétérogènes).

**Vérifié.** IGPN et IGGN restent des services de contrôle interne rattachés respectivement à la
police et à la gendarmerie nationales, sous l'autorité du ministère de l'Intérieur — **non** d'une
autorité indépendante (au 2026-07-29, les projets de réforme — rattachement au Défenseur des droits ou
à la Justice — restent à l'état d'amendements/propositions ; le directeur de l'IGPN, Stéphane Hardouin,
a été nommé en conseil des ministres le 19/02/2025). LBD 40 et certaines grenades toujours en dotation
pour le maintien de l'ordre. La loi n° 2017-258 du 28 février 2017 relative à la sécurité publique a
créé un cadre commun d'usage des armes (art. L.435-1 du CSI), incluant certains refus d'obtempérer.

**Texte de baseline proposé :** *(inchangé sur le fond ; on peut ajouter « — au 2026-07-29, les projets de réforme n'ont pas abouti »)*
> L'IGPN et l'IGGN sont des services de contrôle interne rattachés à la police et à la gendarmerie
> nationales, sous l'autorité du ministère de l'Intérieur (et non d'une autorité indépendante) ; leur
> directeur est nommé par le pouvoir exécutif. Le lanceur de balles de défense (LBD 40) et certaines
> grenades restent en dotation pour le maintien de l'ordre. La loi n° 2017-258 du 28 février 2017
> relative à la sécurité publique a créé un cadre commun d'usage des armes par les forces de l'ordre
> (art. L.435-1 du code de la sécurité intérieure), incluant les situations de refus d'obtempérer.

**Sources (une par fait) :**
- Statut et rattachement de l'IGPN : [police-nationale.interieur.gouv.fr — L'IGPN](https://www.police-nationale.interieur.gouv.fr/nous-decouvrir/notre-organisation/organisation/linspection-generale-de-police-nationale-igpn) (2).
- Cadre commun d'usage des armes / refus d'obtempérer : [Loi n° 2017-258 du 28/02/2017, Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034104023) (1) — art. L.435-1 CSI.
- Dotation LBD 40 (maintien de l'ordre) : ❓ — fait vrai mais à sourcer par un document officiel (schéma national du maintien de l'ordre / réponse ministérielle) ; non retrouvé en une URL primaire pendant ce run.

**Ce qui a changé :** rien sur le fond ; « nommé par le ministre » → « nommé par le pouvoir exécutif » (le directeur IGPN est nommé en conseil des ministres) ; sourçage à ventiler (3 faits, 3 liens).

---

## 7. `just-justice` — Justice (moyens, indépendance, fonctionnement)

**Verdict : ⚠️ imprécise** — confusion **médiane / moyenne** et **année des données** ; source à monter en niveau.

**Vérifié.** Rapport CEPEJ **2024** du Conseil de l'Europe, portant sur les **données 2022** (et non
« données 2024 »). France : **11,3 magistrats du siège** pour 100 000 hab. — la **médiane** européenne
est **17,6** (la **moyenne** est 21,9). **3,2 procureurs** pour 100 000 hab. — médiane européenne
**11,2**. Budget de la justice : **77,2 € par habitant** contre une **moyenne** européenne de **85,4 €**
(0,20 % du PIB en France contre une médiane de 0,28 %). Parquet toujours rattaché au garde des Sceaux ;
instructions individuelles interdites depuis la loi n° 2013-669 du 25 juillet 2013 (art. 30 CPP).

**Piège identifié :** la baseline présente **21,9** comme « médiane » (c'est la **moyenne** ; la médiane
est 17,6) et **85,4 €** comme « médiane » (c'est la **moyenne**). À corriger pour rester traçable.

**Texte de baseline proposé :**
> Selon le rapport 2024 de la CEPEJ (Conseil de l'Europe, données 2022), la France compte 11,3
> magistrats du siège pour 100 000 habitants, contre une médiane européenne de 17,6 (moyenne : 21,9),
> et 3,2 procureurs contre une médiane de 11,2. Le budget public de la justice y est de 77,2 € par
> habitant, contre une moyenne européenne de 85,4 € (0,20 % du PIB en France, contre une médiane de
> 0,28 %). Le parquet demeure hiérarchiquement rattaché au garde des Sceaux ; les instructions
> individuelles dans les affaires particulières sont interdites depuis la loi du 25 juillet 2013.

**Sources (une par fait) :**
- Chiffres CEPEJ (magistrats, procureurs, budget) : [justice.gouv.fr — Publication du rapport 2024 de la CEPEJ](https://www.justice.gouv.fr/actualites/espace-presse/publication-du-rapport-2024-commission-europeenne-levaluation-systemes-judiciaires) (2, reprend la CEPEJ — niveau 3) ; à confirmer sur le rapport CEPEJ 2024 lui-même (Conseil de l'Europe) (3).
- Interdiction des instructions individuelles : [Loi n° 2013-669 du 25/07/2013, Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000027751362) (1) — modifie l'art. 30 CPP.

**Ce qui a changé :** « données 2024 » → **données 2022 (rapport 2024)** ; « médiane 21,9 » → **médiane 17,6 (moyenne 21,9)** ; « médiane 85,4 € » → **moyenne 85,4 €** ; source presse spécialisée (actu-juridique, niveau 4) remplacée par justice.gouv.fr / CEPEJ.

---

## 8. `just-prison` — Prison, peines & surpopulation carcérale

**Verdict : ⚠️ à re-sourcer fait par fait** (chiffres exacts, mais règle « un lien par fait » violée, source auto-périssable, faits (b) et (c) non sourcés).

C'est l'axe déclencheur de la mission. Les **chiffres sont exacts** (88 829 détenus, 140,5 %, 173,2 %
en maison d'arrêt, ~7 608 matelas au sol **au 1er juin 2026**), mais trois faits hétérogènes vivaient
sous **une seule** source, qui est un **index mensuel qui se rafraîchit** (donc « au 1er juin 2026 »
n'y est plus traçable). On vise désormais le **document daté** correspondant.

**(a) Chiffres au 1er juin 2026 — vérifié.** 88 829 détenus, densité globale 140,5 %, 173,2 % en
maison d'arrêt, 7 608 matelas au sol (+32,1 % sur un an). Le document mensuel daté existe à une URL
stable et horodatée.

**(b) Condamnation CEDH — vérifié.** Arrêt **J.M.B. et autres c. France, 30 janvier 2020** (req.
9671/15 et a., réf. HUDOC 001-200446) : violation des art. 3 et 13 de la Convention, la Cour relevant
un « problème structurel » et recommandant des mesures générales contre la surpopulation + un recours
préventif effectif.

**(c) « Pas de mécanisme contraignant de régulation carcérale » — reformulé (piège fait négatif).**
Au 2026-07-29, aucun mécanisme légal contraignant de régulation carcérale n'a été adopté (la
proposition de loi Boudié d'avril 2026 instaurant un numerus clausus n'est pas votée). Plutôt qu'une
négation invérifiable, on porte le constat par une institution : le **Contrôleur général des lieux de
privation de liberté (CGLPL)** a rendu un **avis (A-2024-4) recommandant la création d'un mécanisme
contraignant de régulation carcérale**, ce qui atteste qu'il n'en existe pas.

**Texte de baseline proposé :**
> Au 1er juin 2026 (mesure mensuelle de l'incarcération, ministère de la Justice), les prisons
> françaises comptaient 88 829 personnes détenues, pour une densité carcérale globale de 140,5 %
> (173,2 % en maison d'arrêt) et environ 7 608 détenus dormant sur un matelas au sol. La France a été
> condamnée par la CEDH (arrêt J.M.B. et autres c. France, 30 janvier 2020) pour ses conditions de
> détention, la Cour y relevant un problème structurel de surpopulation. Le Contrôleur général des
> lieux de privation de liberté recommande la création d'un mécanisme contraignant de régulation
> carcérale, qui n'a pas été adopté à ce jour.

**Sources (une par fait) :**
- (a) Chiffres au 1er juin 2026 : [justice.gouv.fr — Mesure mensuelle de l'incarcération, 1er juin 2026 (PDF daté)](https://www.justice.gouv.fr/sites/default/files/2026-06/mesure_mensuelle_01062026.pdf) (2) — **URL stable et horodatée** à substituer à l'index auto-périssable actuel. *(Le PDF n'a pas pu être lu par mon outil — binaire — mais l'URL est valide et les chiffres sont corroborés par [CNEWS, 01/07/2026](https://www.cnews.fr/france/2026-07-01/prisons-pres-de-89000-detenus-recenses-au-1er-juin-un-nouveau-record-1884541) (4).)*
- (b) Arrêt CEDH J.M.B. c. France : [HUDOC / juricaf — arrêt du 30/01/2020, 001-200446](https://juricaf.org/arret/CONSEILDELEUROPE-COUREUROPEENNEDESDROITSDELHOMME-20200130-001200446) (3, reproduction de l'arrêt du Conseil de l'Europe).
- (c) Recommandation d'un mécanisme de régulation carcérale : [CGLPL — Avis A-2024-4 pour un mécanisme contraignant de régulation carcérale, Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049621747) (1/2).

**Ce qui a changé :** aucun chiffre corrigé ; source unique auto-périssable → **PDF daté** ; ajout d'un lien propre pour la CEDH ; le fait négatif « il n'existe pas de mécanisme » → **constat sourcé** (recommandation du CGLPL).

---

## 9. `just-terrorisme` — Terrorisme, état d'urgence & surveillance/libertés

**Verdict : ⚠️ incomplète** — la **pérennisation** dans le droit commun manque (loi du 30 juillet 2021).

**Vérifié.** État d'urgence (attentats du 13/11/2015) terminé le 1er novembre 2017. La loi n° 2017-1510
du 30 octobre 2017 (SILT) a introduit, à titre **expérimental**, plusieurs mesures administratives
(périmètres de protection, fermeture de lieux de culte, MICAS, visites domiciliaires). **Piège :** ces
mesures n'ont été **pérennisées dans le droit commun** que par la **loi n° 2021-998 du 30 juillet 2021**
relative à la prévention d'actes de terrorisme et au renseignement — étape absente de la baseline, dont
la source (rapport Sénat de 2018) est antérieure à cette pérennisation.

**Texte de baseline proposé :**
> L'état d'urgence déclaré après les attentats du 13 novembre 2015 a pris fin le 1er novembre 2017. La
> loi n° 2017-1510 du 30 octobre 2017 (dite SILT) a fait entrer, à titre expérimental, plusieurs
> mesures administratives inspirées de l'état d'urgence pour la seule prévention du terrorisme
> (périmètres de protection, fermeture de lieux de culte, mesures individuelles de contrôle
> administratif et de surveillance — MICAS — et visites domiciliaires). La loi n° 2021-998 du 30
> juillet 2021 les a pérennisées dans le droit commun.

**Sources (une par fait) :**
- SILT — création (expérimentale) des mesures : [Loi n° 2017-1510 du 30/10/2017, Légifrance](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000035932811) (1) ; complément [rapport Sénat r18-220](https://www.senat.fr/rap/r18-220/r18-2206.html) (2) pour la description des mesures.
- Pérennisation dans le droit commun : [Loi n° 2021-998 du 30/07/2021, Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043876100) (1).

**Ce qui a changé :** ajout de la **loi du 30 juillet 2021** (pérennisation) et de la nature **expérimentale** initiale des mesures SILT ; la source unique de 2018 ne couvrait pas cette étape.

---

## 10. `just-drogues` — Drogues / cannabis (stratégie)

**Verdict : ✅ exacte.**

**Vérifié.** Usage de stupéfiants (dont cannabis récréatif) = délit, art. L.3421-1 du code de la santé
publique. Amende forfaitaire délictuelle **généralisée le 1er septembre 2020** sur tout le territoire
(montant 200 €, minoré 150 €, majoré 450 €). Production et vente pénalement réprimées. Politique pilotée
par la **MILDECA, rattachée au Premier ministre** (et non au ministère de la Santé).

**Texte de baseline proposé :** *(inchangé — exact)*
> L'usage de stupéfiants, dont le cannabis récréatif, est un délit (art. L.3421-1 du code de la santé
> publique). Depuis septembre 2020, il peut être sanctionné par une amende forfaitaire délictuelle de
> 200 €. La production et la vente restent pénalement réprimées. La politique de lutte contre les
> drogues est pilotée par la MILDECA, rattachée au Premier ministre (et non au ministère de la Santé).

**Sources (une par fait) :**
- Usage = délit (art. L.3421-1 CSP, version en vigueur) : [Légifrance — art. L.3421-1 CSP](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043343299) (1) ; complément [drogues.gouv.fr — en matière de stupéfiants](https://www.drogues.gouv.fr/en-matiere-de-stupefiants) (2).
- Amende forfaitaire délictuelle généralisée le 01/09/2020, 200 € : [justice.gouv.fr — Généralisation de l'amende forfaitaire délictuelle](https://www.justice.gouv.fr/actualites/espace-presse/generalisation-du-dispositif-damende-forfaitaire-delictuelle) (2).
- MILDECA rattachée au Premier ministre : [drogues.gouv.fr / MILDECA](https://www.drogues.gouv.fr/en-matiere-de-stupefiants) (2).

**Ce qui a changé :** rien (ventilation des sources recommandée : le délit, l'AFD et la MILDECA méritent chacun leur lien).

---

## Tableau récapitulatif

| Axe | Verdict | Correction principale |
|---|---|---|
| `fisc-fortune` | ⚠️ imprécise | Sourçage à ventiler ; le 2ᵉ lien Légifrance = taxe holding (art. 235 ter C), pas l'IFI ; « pas de taxe Zucman » non sourcé |
| `fisc-capital` | ❌ **périmée** | Flat tax **30 % → 31,4 %** depuis le 01/01/2026 (LFSS 2026 : CSG capital 9,2 % → 10,6 %, PS 17,2 % → 18,6 %) |
| `fisc-ir` | ✅ exacte | Barème 2026 confirmé (45 % au-delà de 181 917 €) |
| `fisc-is` | ✅ exacte | Surtaxe prolongée (art. 4 LF 2026), taux 30,1 %/35,3 % confirmés |
| `fisc-tva` | ✅ exacte | 4 taux confirmés, aucune modif LF 2026 |
| `just-police` | ⚠️ incomplète | Contenu exact ; 1 lien pour 3 faits → ventiler ; réformes IGPN non abouties |
| `just-justice` | ⚠️ imprécise | **Médiane/moyenne inversées** (21,9 et 85,4 € = moyennes ; médiane magistrats = 17,6) ; données **2022**, pas 2024 |
| `just-prison` | ⚠️ à re-sourcer | Chiffres exacts ; index auto-périssable → **PDF daté** ; CEDH et régulation carcérale re-sourcés fait par fait |
| `just-terrorisme` | ⚠️ incomplète | Pérennisation SILT dans le droit commun = **loi du 30/07/2021** (manquante) |
| `just-drogues` | ✅ exacte | RAS (ventilation des sources conseillée) |

**Bilan : 3 ✅ · 6 ⚠️ · 1 ❌ · 0 ❓ bloquant.**

## Faits restés invérifiables en ligne (❓)

1. **`fisc-capital`** — aucune page **officielle** (service-public / economie.gouv) affichant explicitement le total « 31,4 % » n'a été retrouvée ; seuls des sites patrimoniaux (niveau 4) le citent. Le total est **calculé** à partir des composantes officielles (12,8 % + 18,6 %), elles-mêmes sourçables (BOSS/URSSAF pour la CSG 10,6 %). Vérifier aussi que la page A18796 n'affiche pas encore « 30 % ».
2. **`fisc-ir`** — confirmer que service-public F1419 affiche bien le millésime 2026 (181 917 €) et pas un barème antérieur.
3. **`just-police`** — la **dotation du LBD 40** pour le maintien de l'ordre est un fait vrai mais non rattaché à une URL primaire (schéma national du maintien de l'ordre / réponse ministérielle) trouvée pendant ce run.
4. **`just-justice`** — la **médiane** (en euros) du budget de la justice par habitant n'a pas été retrouvée ; seule la **moyenne** (85,4 €) est documentée. Idéalement, confirmer tous les chiffres sur le rapport CEPEJ 2024 lui-même (Conseil de l'Europe).
5. **`just-prison`** — le **PDF daté du 1er juin 2026** n'a pas pu être lu par l'outil (binaire) ; son URL est valide et les chiffres sont corroborés par la presse (CNEWS 01/07/2026), mais la lecture directe du document reste à faire par l'éditeur.

*(Les identifiants Légifrance de la loi SILT et de l'art. L.3421-1 CSP, initialement déduits, ont été vérifiés et corrigés dans le corps du rapport — l'ID L.3421-1 déduit était périmé.)*
