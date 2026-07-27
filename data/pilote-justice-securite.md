# Pilote 2 — Méta-thème « Justice, sécurité & libertés »

> **But** : éprouver le moteur de comparaison sur un méta-thème **clivant / asymétrique**, là où le pilote fiscalité était trop convergent (cf. `pilote-fiscalite.md`). Test principal visé : le **garde-fou n°3 (renversement)** et le **multi-étiquetage** (cotags).
> **Source des mesures** : `data/candidats/lfi.json` et `data/candidats/ecologistes.json` (verbatim + baseline sourcée).
> **Date** : 2026-07-27.

## Périmètre éditorial (choix assumés)

- **Inclus** : police, justice (moyens/indépendance), prison & peines, terrorisme/état d'urgence, drogues.
- **Exclus, traités en cotags ou hors pilote** : immigration/asile (`immigration-asile`), libertés « sociétales » (IVG, LGBTI, fin de vie → `egalites-discriminations`), laïcité et corruption (→ `institutions-democratie`). Ce découpage **est** l'acte éditorial du pilote ; un autre grain raconterait autre chose.

## Comparaison par axe (verbatim ↔ ce qui est fait aujourd'hui)

### Axe 1 — Police (doctrine, maintien de l'ordre, contrôle)
- **LFI** : « Interdire les […] "lanceurs de balles de défense 40" […] stratégie […] basée sur la désescalade. Abroger la loi Cazeneuve […]. Supprimer l'IGPN et l'IGGN et les remplacer par une autorité indépendante […] rattachée au Défenseur des droits. Rétablir la police de proximité et démanteler les BAC et les BRAV-M. Interdire […] la reconnaissance faciale […]. » — [source (chap. 4.3)](https://melenchon2027.fr/programme2025/livre/chapitre4/s3)
- **Écologistes** : « Adopter une nouvelle doctrine de maintien de l'ordre […] désescalade […]. Interdire les LBD40 et les grenades mutilantes. Démanteler les unités de type BRAV-M. Abroger […] la loi Cazeneuve […]. Remplacer l'IGPN et l'IGGN par un nouvel organisme indépendant rattaché à la Défenseure des droits. Interdire la reconnaissance faciale […]. » — [source (p. 165)](https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=165)
- **Ce qui est fait** : IGPN/IGGN rattachées au ministère de l'Intérieur ; LBD 40 et grenades en dotation ; loi du 28 février 2017 sur l'usage des armes (refus d'obtempérer). — [réf (Légifrance)](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034104023)
- **Écart** : **convergence quasi totale** — même intitulé de chapitre (« Refonder une police républicaine »), mêmes cibles (LBD, BRAV-M, loi Cazeneuve, IGPN indépendante). Nuance : LFI démantèle aussi les BAC et rétablit explicitement la police de proximité.

### Axe 2 — Justice (moyens, indépendance, fonctionnement)
- **LFI** : « Planifier des moyens […] recruter […] magistrats, greffiers […]. Rétablir pleinement les jurés populaires. Renforcer l'indépendance de la justice vis-à-vis de l'exécutif : interdire les instructions individuelles […]. » — [source (chap. 7.6)](https://melenchon2027.fr/programme2025/livre/chapitre7/s6)
- **Écologistes** : « Assurer l'indépendance du parquet. Créer 9000 postes de magistrats sur dix ans […] 10 000 postes de greffiers […]. Primauté de l'éducatif sur le répressif pour les mineur·es. Abroger la loi Attal de 2025. » — [source (p. 166)](https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=166)
- **Ce qui est fait** : 11,3 magistrats/100 000 hab. (France 2024) vs médiane européenne 21,9 ; parquet rattaché au garde des Sceaux. — [réf (CEPEJ)](https://www.actu-juridique.fr/justice/rapport-cepej-la-france-toujours-en-dessous-de-la-moyenne-europeenne/)
- **Écart** : convergence sur le diagnostic (justice sous-dotée, indépendance à renforcer). Divergence de **précision** : EELV chiffre (9000 magistrats / 10 000 greffiers) et cible des lois nommées ; LFI reste sur les principes (jurés populaires, instructions individuelles).

### Axe 3 — Prison, peines & surpopulation carcérale
- **LFI** : « En finir avec la surpopulation carcérale par la mise en place d'un mécanisme contraignant de régulation carcérale et assurer aux personnes détenues les moyens de se réinsérer […]. » — [source (chap. 7.7)](https://melenchon2027.fr/programme2025/livre/chapitre7/s7)
- **Écologistes** : « Développer la probation et les possibilités de placement extérieurs et de semi-liberté […]. Renforcer les SPIP. […] plan de rénovation et d'adaptation des lieux de détention aux changements climatiques […]. Renforcer l'accès aux soins, y compris de santé mentale. » — [source (p. 171)](https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=171)
- **Ce qui est fait** : au 1er juin 2026, 88 829 détenus, densité 140,5 % (173,2 % en maison d'arrêt) ; CEDH *J.M.B. c. France* (2020) ; pas de mécanisme de régulation carcérale. — [réf (franceinfo)](https://www.franceinfo.fr/societe/justice/prisons-avec-86-645-detenus-en-france-au-1er-fevrier-2026-la-surpopulation-carcerale-s-eleve-a-136-en-moyenne-un-nouveau-record_7840730.html)
- **Écart** : même objectif (désengorger, réinsérer), **leviers différents**. LFI met en avant un **mécanisme contraignant de régulation** (plafond de population). EELV développe les **alternatives à l'incarcération** (probation, semi-liberté) et ajoute une dimension **climatique** (cotag `ecologie`) et **santé** (cotag `sante`).

### Axe 4 — Terrorisme, état d'urgence & surveillance/libertés
- **LFI** : « Revenir sur toutes les dispositions liberticides qui ont instauré un état d'urgence permanent. Renforcer les moyens humains du renseignement […] privilégier l'infiltration humaine plutôt que le mirage du tout-technologique. Garantir le contrôle par le juge judiciaire […]. » — [source (chap. 4.2)](https://melenchon2027.fr/programme2025/livre/chapitre4/s2)
- **Écologistes** : « Améliorer la réponse pénale contre les recruteurs jihadistes et l'extrême droite violente. […] Accroître la coopération européenne en matière de renseignement […]. La dépendance […] aux renseignements et outils américains […] doit cesser. » — [source (p. 181)](https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=181)
- **Ce qui est fait** : état d'urgence clos le 1er nov. 2017 ; loi SILT (2017-1510) a versé au droit commun périmètres, fermetures de lieux de culte, MICAS et visites domiciliaires. — [réf (Sénat)](https://www.senat.fr/rap/r18-220/r18-2206.html)
- **Écart** : **divergence de posture**. LFI aborde le sujet par les **libertés** (« sortir de l'état d'urgence permanent », primat du juge judiciaire, anti-tout-technologique). EELV l'aborde par l'**efficacité et l'échelle européenne** (réponse pénale, coopération UE, autonomie vis-à-vis des USA — cotag `europe-international-defense`) et cible aussi l'extrême droite (cotag `egalites`).

### Axe 5 — Drogues / cannabis (stratégie)
- **LFI** : « **Légaliser et encadrer par un monopole d'État** […] le cannabis […]. […] réduction des risques plutôt que […] répression des consommateurs. **Confier le pilotage […] au ministère de la Santé et non plus de l'Intérieur.** » — [source (chap. 15.3)](https://melenchon2027.fr/programme2025/livre/chapitre15/s3)
- **Écologistes** : « Renforcer les moyens […] de la police et de la justice contre les narcotrafiquants. Privilégier le démantèlement des réseaux […]. **Légaliser et encadrer la production, la vente et la consommation de cannabis.** […] approche de santé publique inspirée du modèle portugais en **dépénalisant l'usage** […]. » — [source (p. 183)](https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=183)
- **Ce qui est fait** : usage = délit (art. L.3421-1 CSP), amende forfaitaire de 200 € (depuis 2020) ; cannabis récréatif illégal ; pilotage MILDECA (Premier ministre). — [réf (MILDECA)](https://www.drogues.gouv.fr/en-matiere-de-stupefiants)
- **Écart** : **le cas le plus intéressant du pilote.** Sur la **substance**, forte convergence (les deux légalisent le cannabis, logique de réduction des risques). Mais le **cadrage éditorial diverge** : LFI range la mesure sous « Addictions et drogues : changer de stratégie » (**cadrage santé publique**, monopole d'État, pilotage Santé) ; EELV la range sous « **Lutter contre le narcotrafic** » (**cadrage sécuritaire** : « fléau national qui pourrit l'État », moyens de police, démantèlement des réseaux) tout en légalisant. Distribution : monopole d'État (LFI) vs structures à but non lucratif (EELV).

## Ce que le pilote prouve (au-delà de la fiscalité)

1. **Le découpage par axe résiste à l'asymétrie de cadrage.** L'axe 5 le montre : deux programmes qui *font la même chose* (légaliser) tout en la *rangeant à l'opposé* (santé vs sécurité). Sans le grain « axe », on aurait soit conclu à une convergence (même substance), soit à une divergence (chapitres opposés) — les deux faux. **L'axe rend visible que la divergence est de cadrage, pas de fond.** C'est la valeur éditoriale que la fiscalité ne pouvait pas produire.
2. **Le test de renversement (garde-fou n°3) tient sous vocabulaire chargé.** Les mesures se classent par leur objet (police, prison…) indépendamment de l'étiquette ; le rattachement ne dépend pas du parti.
3. **Le multi-étiquetage est enfin exercé.** 4 des 10 mesures portent un cotag *justifié par le verbatim* (prison→santé+écologie, terrorisme→europe+égalités, drogues→santé, justice→écologie/égalités). C'est la première fois que les cotags décrivent de vrais cas-frontières, pas juste des « à côté » économiques.

## Fiabilité des baselines
- **Vérifié sur le web (26-27/07/2026)** : population carcérale et densité (1er juin 2026) ; régime pénal de l'usage de stupéfiants (amende 200 €) ; ratios CEPEJ magistrats/budget (2024).
- **Faits juridiques stables sourcés** : loi n° 2017-258 du 28/02/2017 (usage des armes) ; fin de l'état d'urgence + loi SILT du 30/10/2017 (MICAS…). URLs officielles dans les JSON (`source_baseline`).
- Rattachement IGPN/IGGN et pilotage MILDECA : faits institutionnels courants, sources officielles citées.

## Limites assumées
- 5 axes retenus ; d'autres mesures des chapitres régaliens (cybercriminalité, protection de l'enfance, justice environnementale, corruption) ne sont pas traitées ici.
- **Corpus toujours à 2 programmes de gauche** : les convergences observées (police, justice) sont en partie un effet de corpus ; le vrai stress du renversement viendra d'un 3ᵉ programme d'un autre bord.
- Le multi-étiquetage reste une **convention de données** : aucun code ne consomme encore les cotags (pas de vue « par tag »). C'est le prochain jalon produit (recherche par tag).
