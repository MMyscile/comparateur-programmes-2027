# Pilote — Méta-thème « Fiscalité, budget & finances »

> **But** : prouver le moteur de comparaison de bout en bout sur 1 méta-thème (cf. CLAUDE.md « V1 = prouver le moteur »).
> **Source des mesures** : `data/candidats/lfi.json` et `data/candidats/ecologistes.json` (verbatim + baseline sourcée).
> **Date** : 2026-07-25.

## Comparaison par axe (verbatim ↔ ce qui est fait aujourd'hui)

### Axe 1 — Fiscalité de la fortune / du patrimoine
- **Écologistes** : « Rétablir la fiscalité sur la grande fortune. […] taxe Zucman de 2 % au-delà de 100 millions d'euros de patrimoine. Étendre […] l'exit tax […]. Rétablir l'ISF […] composante climatique […]. » — [source (p. 66)](https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=66)
- **LFI** : « Rétablir et renforcer l'ISF, incluant un volet climatique […]. Introduire une garantie d'impôt de 2 % sur le patrimoine des milliardaires, dite taxe Zucman. » — [source (chap. 6.5)](https://melenchon2027.fr/programme2025/livre/chapitre6/s5)
- **Ce qui est fait** : ISF supprimé au 1ᵉʳ janvier 2018, remplacé par l'IFI (immobilier net > 1,3 M€). Pas de « taxe Zucman ». — [réf (service-public)](https://www.service-public.gouv.fr/particuliers/vosdroits/F563)
- **Écart** : convergence forte des deux (rétablir ISF + taxe Zucman 2 % + volet climatique). Différence de seuil affiché (EELV : 100 M€ ; LFI : milliardaires).

### Axe 2 — Imposition des revenus du capital (flat tax / PFU)
- **Écologistes** : « Taxer plus fortement le capital que le travail. […] Augmenter la flat tax (PFU) de 3 points. » — [source (p. 68)](https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=68)
- **LFI** : « Supprimer la flat tax et imposer les revenus du capital comme ceux du travail. » — [source (chap. 6.5)](https://melenchon2027.fr/programme2025/livre/chapitre6/s5)
- **Ce qui est fait** : PFU (« flat tax ») de 30 % depuis 2018 (12,8 % IR + 17,2 % prélèvements sociaux). — [réf (service-public)](https://entreprendre.service-public.gouv.fr/actualites/A18796)
- **Écart** : divergence de méthode. LFI **supprime** la flat tax (retour au barème). EELV **conserve** le PFU mais l'**augmente** de 3 points (→ 33 %).

### Axe 3 — Progressivité de l'impôt sur le revenu
- **Écologistes** : « Créer une nouvelle tranche à 60 % au-delà de 250 000 € annuels. » — [source (p. 68)](https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=68)
- **LFI** : « Barème à 14 tranches contre 5 aujourd'hui. » — [source (chap. 6.5)](https://melenchon2027.fr/programme2025/livre/chapitre6/s5)
- **Ce qui est fait** : 5 tranches (0/11/30/41/45 %), taux marginal max 45 % au-delà de 181 917 € (barème 2026). — [réf (service-public)](https://www.service-public.gouv.fr/particuliers/vosdroits/F1419)
- **Écart** : même objectif (plus de progressivité), leviers différents. EELV ajoute 1 tranche haute (60 %) ; LFI refait tout le barème (14 tranches).

### Axe 4 — Impôt sur les sociétés / grandes entreprises
- **Écologistes** : « Impôt minimal sur les bénéfices des sociétés dont le CA dépasse 1 milliard € à proportion de l'activité réalisée en France. Moduler le taux selon l'affectation des bénéfices […]. » — [source (p. 66)](https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=66)
- **LFI** : « Refonder l'IS […] barème progressif en fonction des bénéfices […] favoriser l'investissement plutôt que la distribution de dividendes. » — [source (chap. 6.5)](https://melenchon2027.fr/programme2025/livre/chapitre6/s5)
- **Ce qui est fait** : IS à taux unique de 25 % depuis 2022 (15 % réduit PME sous conditions). Pas de barème progressif. — [réf (service-public)](https://www.service-public.gouv.fr/particuliers/vosdroits/F23575)
- **Écart** : convergence (progressivité/modulation de l'IS, anti-dividendes). EELV cible les très grands groupes (CA > 1 Md€) + assiette « activité en France ».

### Axe 5 — TVA
- **Écologistes** : « TVA verte différenciée selon l'impact environnemental et sanitaire […]. Diminuer […] première nécessité […]. Augmenter […] produits de luxe ou nocifs […]. » — [source (p. 67)](https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf#page=67)
- **LFI** : « Réduire la TVA sur les produits de première nécessité et réinstaurer une « TVA grand luxe » pour la financer. » — [source (chap. 6.5)](https://melenchon2027.fr/programme2025/livre/chapitre6/s5)
- **Ce qui est fait** : 4 taux (20 / 10 / 5,5 / 2,1 %). Pas de taux « grand luxe » ni de modulation environnementale généralisée. — [réf (service-public)](https://www.service-public.gouv.fr/particuliers/vosdroits/F23567)
- **Écart** : convergence sur baisse « première nécessité » + hausse « luxe ». EELV ajoute un critère **environnemental et sanitaire** ; LFI reste sur l'axe social (luxe).

## Fiabilité des baselines
- **Vérifié sur le web (25/07/2026)** : barème IR 2026 (5 tranches, max 45 %) ; PFU 30 %.
- **Faits stables cités depuis les fiches officielles** (à reconfirmer au commit final) : suppression ISF/création IFI 2018 ; IS 25 % depuis 2022 ; taux de TVA.
- Toutes les baselines pointent vers `service-public.gouv.fr` / `impots.gouv.fr` (`source_baseline` dans les JSON).

## Ce que le pilote prouve
1. La chaîne fonctionne : **source vérifiée → verbatim fidèle → baseline chiffrée sourcée → JSON structuré → vue comparée par axe**.
2. Le socle de méta-thèmes tient : les deux programmes se rangent proprement dans `fiscalite-budget-finances` (avec cotags `economie-travail-entreprises`, `ecologie-climat-energie`).
3. La valeur éditoriale émerge à l'axe : convergences (ISF, IS) **et** divergences de méthode (flat tax : supprimer vs augmenter) deviennent lisibles.

## Limites assumées
- 5 axes retenus (les plus comparables) ; les deux chapitres fiscaux contiennent d'autres mesures (fraude, dette, collectivités, succession…) non traitées ici.
- ~~`source_url` Écologistes vide~~ : **résolu** — URL publique renseignée avec fragment `#page=N` vers la page exacte (`https://lesecologistes.fr/…/vdef-programme-1.pdf#page=66/67/68`).
- Classement dans le thème = rattachement principal ; le multi-étiquetage fin reste à valider (cf. `choix-editoriaux.md`).
