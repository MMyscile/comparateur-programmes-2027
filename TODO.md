# TODO — Comparateur de programmes 2027

> Liste vivante. On la met à jour dès qu'un élément apparaît. Statuts : ⬜ à faire · 🔄 en cours · ✅ fait · ⏸ en attente/différé.
> Urgence : 🔴 urgent (bloque ou expose) · 🟠 important (prochaine séance) · 🟢 peut attendre.

## Process (à appliquer pour chaque nouveau programme)

- 📌 **Process d'extraction / uniformisation** — suivre `data/PROCESS-extraction.md` pour TOUT nouveau programme. But : que les données de tous les programmes se lisent de façon **identique** au moment de comparer (sinon biais par candidat = viole le test de renversement). Le document est autonome : il gère la vérification de source, la récupération au moindre coût, les PDF multi-colonnes / sites en JavaScript, la fidélité verbatim (QC ≥ 10 échantillons), la structuration JSON et la baseline. ⚠️ Le pilote actuel s'en est bien sorti **parce que le PDF Écologistes est numéroté** ; un programme non numéroté ou scanné demandera la procédure de repli (extraction par colonnes ou réécriture `.md` relue) décrite à l'étape 2.
- ⬜ 🟢 **Enrichir le process** dès qu'un nouveau type de source ou un nouveau piège apparaît (mettre à jour `data/PROCESS-extraction.md`).

## À faire — court terme

- ✅ **Incrément du 2026-07-28 committé** (296d3a6, tag `justice-detaillee-2026-07`) — beaucoup de travail non committé : 64 mesures justice fusionnées, correction fidélité `lfi-police-12`, thématique `justice-civile`, cotag tabac, script `check-data`, filtres UI (panneau repliable, URL partageable, sticky, facettes), agent `extracteur`, enrichissements process, archive PDF EELV. Le projet repose sur git pour la traçabilité : un incrément non committé n'est pas tracé.
- ✅ **Repo GitHub publié** — https://github.com/MMyscile/comparateur-programmes-2027 (public), bouton « Signaler » branché (garde-fou n°4 opérationnel). Prérequis Vercel réglé.
- ✅ **Alertes Dependabot traitées** (2026-07-28) — Next 14.2.15 → 14.2.35 (+ eslint-config-next) : la critique et les vulnérabilités corrigeables en 14.x sont réglées, build OK. Restent 16 « high » corrigées seulement dans Next 15/16 : toutes portent sur des surfaces serveur (middleware, Server Actions, image optimization) absentes d'un export statique — risque réel nul en prod, mais Dependabot continuera de les signaler tant qu'on reste en 14.x. Migration Next 15 à trancher plus tard.
- ✅ **Ménage post-fusion** (2026-07-28) — `data/drafts/*.draft.json` supprimés, `justice.rapport.md` déplacé vers `data/rapports/`, `check-data` passe. Les 2 pilotes conservés.
- ✅ **Choix éditorial assuré** (2026-07-28) — classification multi-étiquetée des 89 sous-sections LFI dans `data/rattachements-lfi.md` (corrige l'oubli de 9.3 dans la matrice v0.2), **validée** : 9 cas-frontières arbitrés un par un par l'éditeur, 4 précédents reportés dans `choix-editoriaux.md` (décisions 12-15, dont thématique `condition-animale` créée dans la taxonomie).
- ✅ **Unité de comparaison fixée** (2026-07-28) — le postulat « Écologistes sans candidat·e » était périmé : Marine Tondelier est candidate déclarée (22/10/2025) et désignée par le parti (08/12/2025, 86 %), sous réserve de la primaire de la gauche unie du **11/10/2026**. L'unité « programme de candidat » du CLAUDE.md tient donc pour les deux ; réserve primaire documentée dans `etat_programme` (fiche mise à jour). ⏰ Rendez-vous après le 11/10/2026 pour acter le résultat de la primaire.
- ✅ **Pilote fiscalité étendu** (2026-07-29, 2ᵉ run de l'agent `extracteur`) — 69 mesures fusionnées (LFI 54→97, EELV 48→74), 18 nouveaux axes fiscalité/finances (grain fin conservé après arbitrage éditeur), 7 thématiques fines ajoutées. QC 10/10 par programme + contrôle exhaustif 70/70. Baselines des 18 axes vérifiées par le nouvel agent `verificateur-sources` (rapport `data/rapports/verification-baselines-2026-07-29.md` : 5 ✅ / 10 ⚠️ / 3 ❌ corrigées avant publication). Rapport d'extraction : `data/rapports/fiscalite-2.rapport.md`. Brouillons supprimés après fusion.
- ⬜ 🟢 **Reliquats fiscalité** — (a) mesure « indicateurs de progrès humain » (LFI 6.3) écartée : à reprendre au chantier **économie** ; (b) confirmer à l'œil nu le chiffre DMTG 21,2 Md€ dans le PDF DGFiP n° 43 (lien dans le rapport de vérification) ; (c) compléter la référence Légifrance de la LFSS 2026 (numéro non retrouvé) ; (d) reste du ch. 3.2 LFI (hors finances locales) non extrait — chantier institutions.
- ⬜ 🟢 **Limite repérée le 2026-08-02 : `DERNIER_EVENEMENT` est global, pas par domaine.** `scripts/etat-sources.mjs` n'a qu'une seule date de péremption pour les 54 axes. Le lot A des baselines a fait remonter deux textes qui périment les baselines **climat-énergie** (décret SNBC-3 du 16/07/2026, décret PPE3 du 12/02/2026) mais ne disent rien des axes fiscaux, dont l'événement de référence est la loi de finances. Les inscrire comme référence globale afficherait « référence de péremption : SNBC-3 » sur `fisc-ir`, ce qui est faux. Sans effet pratique aujourd'hui (tous les stamps sont postérieurs aux deux décrets), donc **non appliqué** ; à traiter par un événement par méta-thème si le cas se représente.
- ⬜ 🟢 **Relancer `verificateur-sources`** après chaque loi de finances / LFSS / statistique majeure (prochaine échéance naturelle : PLF 2027, automne 2026) — l'agent vérifie aussi la cohérence chiffres ↔ URL citée. **Suivi** : `npm run etat-sources` affiche l'état de vérification par axe (champ `baseline_verifiee` de `data/axes.json`). Flux : (1) après la loi, mettre à jour `DERNIER_EVENEMENT` dans `scripts/etat-sources.mjs` → les axes plus anciens passent « à re-vérifier » ; (2) relancer l'agent sur ce périmètre ; (3) à l'application du rapport, actualiser `baseline_verifiee` sur les axes traités. Les 28 axes sont stampés `2026-07-29`.
- ✅ **PR Dependabot Next 15 testée et mergée** (2026-07-29, commit 8e959cb) — testée dans un worktree isolé (merge main + `npm install` + `npm run build` + vérification navigateur : hydratation des filtres OK, console vide, Méthodologie OK). Next 15.5.21 fonctionne avec React 18.3.1 (pas de saut React 19 nécessaire). `eslint-config-next` aligné en 15.x au passage. Les 16 « high » Next sont corrigées ; `npm audit` signale encore 17 « high » mais ce sont d'autres avis (sharp, postcss embarqué, brace-expansion) — outils de build uniquement, rien de servi en prod statique.
- ✅ **Baselines vérifiées** (2026-07-28) — les 10 axes passés en revue contre l'actualité (dont loi de finances 2026 promulguée le 19/02/2026). 3 corrections : `fisc-fortune` (mention de la nouvelle taxe de 20 % sur les actifs non professionnels des holdings patrimoniales, art. 235 ter C CGI), `fisc-is` (surtaxe grandes entreprises prolongée : taux effectif 30,1 % / 35,3 % au-delà de 1,5 / 3 Md€ de CA), `just-prison` (les chiffres du 01/06/2026 citaient un article sur ceux de février — source remplacée par la statistique mensuelle du ministère de la Justice). `fisc-ir` vérifié exact (181 917 € = indexation +0,9 % LF 2026). Les 6 autres baselines tiennent.
- ✅ **URL publique du programme Écologistes trouvée** — `source_url` renseignés dans `data/candidats/ecologistes.json` avec fragment `#page=N` (pagination physique = pagination imprimée, vérifiée). Réserve : le PDF est derrière un challenge Cloudflare (accès automatisé bloqué, OK depuis un navigateur humain).
- ✅ **2ᵉ méta-thème pilote « Justice, sécurité & libertés »** — chaîne rejouée sur un thème clivant/asymétrique (`data/pilote-justice-securite.md` ; 5 mesures ajoutées par candidat). A prouvé : l'axe rend visible une divergence de *cadrage* à substance identique (drogues : santé vs sécurité) ; multi-étiquetage enfin exercé (4/10 mesures cotaguées).

- ✅ **Refonte : Méthodologie scindée en deux pages tournées vers le lecteur** (2026-07-29, cadrage validé par l'éditeur le jour même) —
  - **Page « À propos »** (`data/a-propos.md`, « je » anonyme) : pourquoi le site existe (programmes denses/nombreux/tardifs/mal rangés → d'une difficulté personnelle à une solution citoyenne), qui écrit, « un avis assumé — pourquoi s'y fier quand même » (biais exposés, critiquables, corrigeables), rôle de l'IA explicité (dépouillement assisté, décisions humaines), état du site (v0.1 preuve de moteur).
  - **Page « Méthodologie » recentrée lecteur** : garde-fous, taxonomie, version publique de la règle de classement (`data/regle-mapping.md` — la règle en clair, le test du parti masqué, 2 cas racontés, lien vers le journal). Jargon retiré (« règle de classement », plus « mapping »).
  - **Préambule + lexique en tête du journal** (`data/choix-editoriaux.md`) : dit ce qu'est le document (registre brut, non réécrit, historique git), aiguille les lecteurs « démarche » vers À propos/Méthodologie, lexique des termes internes (cotag, axe, LFI 5.2, identifiants…).
  - « À propos » ajouté à la navigation et au pied de page. Contenus éditoriaux dans `data/*.md` (source unique, rendus au build via composant partagé `src/components/Markdown.tsx`).

- ⏸ 🟢 **Réécrire les textes éditoriaux dans la voix de l'éditeur — REPORTÉ À LA TOUTE FIN**
  (décision de l'éditeur, 2026-08-06). Le fond des textes publiés le 29/07 est validé, mais la forme
  est celle d'une IA, pas celle de Michaël. À reprendre **par lui**, directement dans les fichiers
  (le site suit au build) : `data/a-propos.md`, `data/regle-mapping.md`, préambule de
  `data/choix-editoriaux.md`. Règle apprise au passage : pas d'auto-justification (ex. de
  l'anonymat) — énoncer, ne pas plaider.
  **Pourquoi à la fin, et pas plus tôt** : ces textes décrivent la méthode et l'état du site. Les
  réécrire maintenant obligerait à les réécrire encore à chaque chantier — 12 méta-thèmes restants,
  et la méthode bouge encore (5 décisions éditoriales ajoutées entre le 04 et le 06/08). Le bon
  moment est quand le périmètre est figé : juste avant le tag de version et la mise en ligne.

## 📋 À FAIRE PAR L'ÉDITEUR — liste courte au 2026-08-06

> Tout le reste est fait ou outillé. Ces quatre items n'attendent que toi ; le détail de chacun est
> plus bas, mais l'essentiel tient ici.

1. ✅ **5 définitions OFB validées et intégrées** (2026-08-06). L'éditeur a ouvert
   `ofb.gouv.fr/glossaire` (page rendue en JavaScript, invérifiable autrement) et **recopié le texte
   de la source**. Les définitions ont été **récrites d'après ce texte**, pas seulement approuvées :
   `pélagique` disait « qui concerne la pleine eau, entre la surface et le fond » quand l'OFB définit
   une **espèce** qui vit en pleine mer loin des fonds et des côtes ; `bassins versants` ne
   mentionnait ni les reliefs qui délimitent le territoire ni le point d'exutoire. **Glossaire :
   134 → 139 termes, 195 déclencheurs.**
2. ✅ **4 liens EUR-Lex basculés en français** (2026-08-06), variantes confirmées par l'éditeur —
   EUR-Lex répondant 202 à corps vide même à `curl`, elles ne pouvaient pas être testées autrement.
   `eco-ocean` et `eco-justice-environnementale` en `?locale=fr`, `fisc-dette` en `/oj/fra`,
   `fin-monnaie-bce` en `:fr:PDF`. **Il ne reste que 3 liens en anglais, tous légitimes** : le
   `Community Reinvestment Act` (loi **des États-Unis**, la Fed ne publie pas en français) et les
   2 pages de l'`isa.org.jm` (l'Autorité internationale des fonds marins publie en anglais).
3. ⬜ 🟠 **Deux découpages à trancher — À RÉEXPLIQUER SIMPLEMENT D'ABORD.**
   ⚠️ **L'éditeur n'a pas compris la formulation du 06/08 : ne pas la reservir telle quelle.** Le
   vocabulaire employé (« axe qui agrège deux objets sans recouvrement », « règle n° 17 ») est du
   jargon interne. Reprendre en partant du lecteur : *sur cette page, en face des propositions des
   candidats, on affiche « ce qui se fait aujourd'hui ». Pour ces deux rubriques, ce qu'on affiche ne
   parle pas de tout ce que les candidats y proposent.* Puis montrer **un exemple concret de mesure
   orpheline** (p. ex. une proposition LFI sur les ports, en regard d'une baseline qui ne parle que
   de protection des milieux marins), et poser la question en deux options tenables.
   Les faits, eux : **`eco-ocean`** couvre ~20 mesures sur 32 — la baseline traite la protection des
   milieux marins et la pêche, mais une dizaine de mesures LFI portent sur les ports, la marine
   marchande, l'éolien en mer, la formation maritime et les navires de souveraineté, qu'aucun de ses
   chiffres ne situe. **`eco-biodiversite`** couvre 6 mesures sur 9 : brevets sur le vivant, OGM et
   pôles arctique/antarctique restent hors baseline.
   `npm run appliquer-baselines -- <rapport>` remonte désormais ces deux signaux tout seul.
4. ⏸ **`a-propos.md` et `regle-mapping.md` dans ta voix — à la toute fin** (voir plus bas le motif).

## 🟠 REPRISE — chantier Écologie livré au 2026-08-02, 4 points ouverts

> À lire en premier pour reprendre. Rien de ce qui suit n'existe ailleurs que dans ce fichier,
> `data/choix-editoriaux.md`, `data/attente.json` et `data/rapports/`.

### Où en est le chantier

**Le méta-thème « Écologie, climat & énergie » est intégré et le dépôt est sain** :
`check-data` passe, `npm run build` passe, `npm run etat-sources` affiche 54/54 axes à jour.

| | |
|---|---|
| Mesures | **437** (LFI 259 / Écologistes 178) |
| Axes | **54**, tous avec `baseline_reel` sourcé et `baseline_verifiee: 2026-08-02` |
| Thématiques fines | 56 |
| Sources de baseline | 225 liens |
| Liste d'attente | 79 entrées (58 reliquats / 21 à revoir) |
| Décisions éditoriales | 30 (`data/choix-editoriaux.md`) |

`data/drafts/` n'existe plus ; les brouillons restent récupérables sur `wip/ecologie-brouillons`
(commit `769e3f8`), branche qui **ne doit toujours pas être mergée dans `main`**.
Les baselines viennent des 3 rapports `data/rapports/verification-baselines-2026-08-01-lot-*.md`,
appliqués par parsing (et non recopiés). QC de fidélité brouillon → publié : **265/266 verbatims
identiques**, la 266ᵉ étant retirée exprès (décision n° 24).

### 🔴 Les 4 points ouverts, à traiter un par un

1. ✅ **Glossaire — les 54 définitions fusionnées** (2026-08-06). `data/glossaire.json` passe de
   **41 à 95 termes**. Revalidation avant fusion : zéro doublon interne ou avec l'existant, chacune
   produit au moins une correspondance dans les 437 verbatims avec la regex exacte de
   `Verbatim.tsx`, aucun faux positif sur les 20 sigles courts (`REP`, `ORE`, `CEE`, `STEP`… tous
   sur le bon sens, `CEREMA` en capitales compris). **144 déclencheurs sur 91 verbatims.**
   **3 sources sur 54 étaient hors sujet et ont été remplacées avant publication** — c'est la
   troisième fois que ce défaut-là, et non le lien mort, est le vrai :
   - `politique commune de la pêche` (×2) : l'URL `_fr` de la Commission **sert la page anglaise**
     (« Common fisheries policy », zéro occurrence de « pêche ») → fiche du Parlement européen ;
   - `écomodulations` : la page REP citée ne contient ni « écomodulation » ni « bonus »/« malus »
     → art. L. 541-10-3 du code de l'environnement (via l'API), qui donne le mécanisme exact
     (« prime » / « pénalité ») — la définition a été récrite pour coller au texte ;
   - `CIGEO` : `andra.fr` est une coquille JavaScript de 227 signes → décret n° 2022-993 du
     7 juillet 2022. « Environ 500 mètres » et le développé « Centre industriel de stockage
     géologique » ont été **retirés** : le décret ne les porte pas.
   ✅ **Les ~120 termes ❓ repris le 2026-08-06** (agent `glossaire` + API Légifrance).
   Rapport : `data/rapports/glossaire-sources-2026-08-06.md`. **44 entrées sourcées**, en trois
   blocs séparés parce qu'ils n'engagent pas la même décision :
   - **E.1 (37) — fusionné**, `data/glossaire.json` passe de **95 à 132 termes**. 28 des 37 sont
     sourcées par l'API sur un article contrôlé *en vigueur* : la section 4 (vocabulaire juridique)
     n'est plus « entièrement ❓ » — `principe de précaution` et `pollueur-payeur` (L. 110-1),
     `partie civile` (CPP 418), `travail détaché` (L. 1262-1), `droit de préemption` (L. 210-1),
     `zones humides` (L. 211-1).
   - **E.3 (2) — fusionné** (**décision n° 34**) : `écocide` et `planification écologique`, les deux
     termes « au sens disputé » que l'API a rendus publiables parce qu'un **texte officiel les
     définit** (art. L. 231-3 ; décret n° 2022-990 sur le SGPE). Un fait négatif a été retiré de la
     proposition de l'agent : « il n'existe pas de crime d'écocide » n'est pas dans l'article — un
     texte dit ce qu'il institue, pas ce qui n'existe pas ailleurs. **134 termes, 190 déclencheurs.**
   - ⬜ 🟠 **E.2 (5) — en attente de ta lecture** (**décision n° 35**) : `reméandrage`,
     `bassins versants`, `pélagique`, `services écosystémiques`, `convention de Ramsar`, sourcés sur
     `ofb.gouv.fr/glossaire`, qui ne rend ses définitions qu'en JavaScript. La source est légitime
     (établissement public) ; c'est notre capacité à la contrôler qui manque. Bloc JSON prêt en
     section E.2 du rapport, à fusionner après lecture à l'œil.

   Contrôle avant fusion, comme pour le lot précédent : zéro doublon, chaque terme produit au moins
   une occurrence, **et toutes les URLs testées**. **Une seule source défectueuse sur 44** —
   `CETA` pointait vers `policy.trade.ec.europa.eu/…canada_fr`, **qui sert de l'anglais**.
   Quatrième occurrence du même domaine dans la journée ; l'agent ne pouvait pas la voir, l'état
   `anglais` de `verif-liens` a été écrit après son lancement. Remplacé par le rapport du Sénat
   `a23-410`, qui porte l'application provisoire, 2017 et la non-ratification.
   **182 déclencheurs sur 118 verbatims** (max 7 dans un même).

   ⚠️ **Trois motifs de ❓ qui reviennent**, à connaître avant la prochaine passe : (1) *le nom du
   verbatim n'est pas le nom du droit* — le CGCT ne dit pas « versement mobilité » mais « versement
   destiné au financement des services de mobilité » (idem `Contribution Climat Énergie`,
   `tarif bleu`, `débits biologiques` = « débit minimal ») ; (2) le **cas symétrique de la « réforme
   Darmanin »** : le décret n° 2014-479 dit « décret Montebourg » existe et est en vigueur, mais son
   champ `signataires` est **vide** — aucune source officielle ne porte le nom ; (3) **EUR-Lex
   répond 202 à tout**, donc les faits qui n'existent que là restent ❓.

   ⬜ 🟢 **Dette à dater** : `partie civile` est sourcé sur un article `ABROGE_DIFF` en vigueur
   jusqu'au **2029-01-01** (recodification du CPP) — publiable, à revoir avant cette date.

   ### Ce que « 48 invérifiables » veut dire, et ce qu'il en reste vraiment (2026-08-06)

   Sur les 134 liens du glossaire, `verif-liens` en classe 48 « invérifiables ». **47 viennent de
   trois domaines déclarés non testables**, et non de liens douteux :

   | Domaine | Entrées | Contrôlé par quel autre moyen |
   |---|---|---|
   | `legifrance.gouv.fr` | 33 | **par l'API** — l'article est lu et son état de vigueur vérifié, plus fort qu'un test HTTP |
   | `vie-publique.fr` | 8 | **navigateur réel le 05/08** — ce sont exactement les 8 fiches contrôlées ce jour-là |
   | `economie.gouv.fr` | 6 | ❌ **aucun** |

   Le 48ᵉ était `Semestre européen` (`consilium.europa.eu`, HTTP 403) : **confirmé bon** au navigateur
   réel — page en français, « semestre européen » 29 fois, et les quatre faits de la définition
   (cycle, coordination, budgétaire, recommandations) y sont. Le 403 était bien un refus
   d'automatisation, exactement comme l'outil le classait.

   ✅ **Les 6 `economie.gouv.fr` contrôlées par l'éditeur** (2026-08-06), Cloudflare bloquant même
   un Chrome piloté. **Trois défauts sur six** — un taux de défaut bien plus élevé que sur les
   sources testables, ce qui confirme que le résidu invérifiable était le bon endroit où chercher :

   | Terme | Verdict de l'éditeur | Suite |
   |---|---|---|
   | `quotient familial` | ✅ les mots y sont | — |
   | `circuit du Trésor` | ✅ « tout y est » | — |
   | `produits dérivés` | ⚠️ la page porte le terme et « sous-jacent », **pas** « se couvrir / spéculer » | définition **resserrée** au fait sourcé |
   | `flat tax` | ❌ page écrite en 2025 : elle porte 30 %, pas nos 31,4 % | **multi-sourcée** (voir ci-dessous) |
   | `cotation continue` | ❌ la page ne parle que du **CAC 40, « cotation assistée en continu »** — le développé d'un sigle, pas un mode de cotation | source remplacée : question écrite Sénat n° 05887 (1989), dont la **réponse du ministère** porte « marché continu, ouvert tout au long de la journée » et « incompatible avec la cotation d'un seul cours par jour » |
   | `abattement Dutreil` | ❌ « Dutreil » seul, ni les **75 %** ni l'**engagement de conservation** | **art. 787 B du CGI** ajouté (via l'API) : « à concurrence de 75 % de leur valeur », « engagement collectif de conservation d'une durée minimale de deux ans » |

   🔴 **Le cas `flat tax` a imposé une évolution du modèle.** L'éditeur avait raison sur la source
   (page de 2025, donc 30 % = 12,8 + 17,2) — mais **notre définition, elle, était exacte** :
   `L. 136-8` interrogé à plusieurs dates montre la CSG sur le capital passer de 9,2 % à 10,6 % avec
   la version du **31/12/2025**, d'où 17,2 + 1,4 = 18,6 et 12,8 + 18,6 = **31,4 %**. Or **aucune
   page ne porte à la fois le surnom « flat tax » (rapport du Sénat r19-042-1, 2019) et le taux 2026
   (fiche `F32963`)** : l'un est ancien, l'autre récent. → **`source_url` du glossaire accepte
   désormais une liste**, même règle que `source_baseline` et que le `source_url` des mesures depuis
   la décision n° 32. L'infobulle rend « Source » à un lien, « Source 1 / Source 2 » au-delà ;
   `verif-liens` n'exige plus le terme dans **chaque** page d'une entrée multi-sourcée — l'exiger
   rendrait le multi-sourçage impossible.

   ⚠️ **Piège de sonde, à ne pas réapprendre** : chercher « flat tax » dans le HTML du Sénat renvoie
   0 — le texte écrit `flat&nbsp;tax`. **Une recherche de chaîne brute dans du HTML échoue sur les
   entités.** `verif-liens` y est immunisé (il compare des mots réduits, ponctuation aplatie) ; les
   sondes ad hoc ne le sont pas. Même famille que `innerText` masquant les sections repliées.

   🔴 **Défaut d'affichage trouvé et corrigé au passage (`Verbatim.tsx`).** 9 termes sont au
   glossaire sous leurs deux formes (sigle + développé), et les programmes les écrivent collés :
   « Installations classées pour la protection de l'environnement (ICPE) ». **Mesuré : la bulle du
   développé (256 × 211 px) recouvre intégralement le sigle qui suit.** Et on ne peut pas glisser
   de l'un à l'autre — le chemin passe *dans* la bulle, qui reste ouverte (c'est voulu, c'est
   comme ça qu'on atteint « Source »). Règle ajoutée : quand un sigle est **accolé à sa propre
   forme développée**, un seul des deux déclenche une bulle ; le sigle garde la sienne partout où
   il apparaît seul. Reconnaissance par initiales (mots vides ignorés), donc sans liste en dur, et
   dans les deux ordres. **12 déclencheurs muets, exactement les 9 paires attendues**, verbatims
   intacts (garde-fou n°1). Arbitrage éditeur du 06/08 : publier les deux formes.
2. ✅ **Deux arbitrages `etat_maturite`** — **RÉGLÉ (2026-08-04, décision n° 31)**. L'étiquette de
   maturité ne s'affiche plus sur la mesure (elle ne distinguait rien : 437/437 « mûr », et « périmé »
   est un verdict là où le site doit un fait) ; un champ `fait_posterieur` { texte, source_url, date }
   pose une astérisque sourcée sous le verbatim. (a) Le cas SNBC-4 **n'en était pas un** : une SNBC-4
   est par définition celle qui suit la SNBC-3, son objet n'existe pas encore — ma note était fausse.
   (b) `lfi-energie-prix-02` porte la note (loi n° 2026-554 du 29/06/2026). Voir aussi la correction
   sur EDF/Engie consignée dans la décision n° 31.
3. **Découpage d'`eco-ocean` (et d'`eco-biodiversite`) — retour sur la règle n° 17.** Le lot B les
   classe ⚠️ non pour un défaut de sourçage mais de découpage : `eco-ocean` agrège protection des
   milieux marins et économie maritime (ports, marine marchande, éolien en mer, formation), et une
   douzaine de mesures LFI n'y sont situées par aucun chiffre de la baseline ; `eco-biodiversite`
   porte 3 mesures LFI (brevets sur le vivant, OGM, pôles polaires) étrangères à la sienne. Détail en
   fin des sections correspondantes du rapport lot B.
4. **~20 faits laissés ❓** dans les 3 rapports, non comblés (c'est la règle : un fait introuvable est
   marqué, pas inventé). Trois ne tiennent qu'à des sites publics refusant l'automatisation
   (`economie.gouv.fr`, `interieur.gouv.fr`, `budget.gouv.fr`) : les ouvrir à la main suffirait.
   Trois autres pèsent sur la lecture des programmes : la part des cours d'eau en « très bon état »
   seul (le mot exact des deux programmes, non publié), l'absence de recensement national des
   retenues de substitution, et la part de forêt en libre évolution (référence du « 25 % » de LFI).

### 📋 Ce qui est prévu, arbitré avec l'éditeur le 2026-08-05

**Ordre arrêté avec l'éditeur le 2026-08-05 : ~~9~~ → ~~10~~ → ~~5~~ → ~~6~~ → ~~7~~ → ~~8~~ → ~~11~~.**
**Les huit chantiers de la séance sont faits.** Cette section n'a plus qu'une valeur d'archive :
tout ce qu'elle a produit vit désormais dans les décisions n° 31 à 33 (`data/choix-editoriaux.md`),
dans la procédure des trois agents, et dans `scripts/legifrance.mjs`.

**La suite naturelle n'est plus dans cette liste, elle est en dessous.** ~~(a) fusionner les 54
définitions du glossaire~~ **fait le 2026-08-06** (point 1), en même temps que les deux outillages
qui restaient ouverts (`verif-liens` et les réserves d'`appliquer-baselines`). Restent :
(b) la **passe ciblée du point 12** sur les 7 baselines au passé accompli, désormais outillée et
cadrée par la décision n° 33 ; (c) les **~90 termes ❓** du glossaire (agent lancé le 06/08) ;
(d) reprendre le **plan d'attaque V1**, au 3ᵉ méta-thème sur 15.

5. ✅ **Bug de l'infobulle corrigé** (2026-08-05) — la source est atteignable à la souris, au clavier
   et au doigt. Deux causes, dont une seule était connue :
   - la bulle était un **frère** du bouton, séparée par un `mt-1` : aller vers elle traversait un vide
     et déclenchait `onMouseLeave`. → le survol est écouté sur le conteneur, et le décalage vient
     d'un `pt-1` **interne** : plus aucun vide (vérifié, `écart vertical = 0` sur les 17 termes
     affichés) ;
   - **`onBlur` dépinglait la bulle** : cliquer « Source » la démontait avant que le lien ne
     s'active. C'était ça, la vraie cause de l'inatteignabilité. → l'épinglage ne se défait plus qu'au
     clic extérieur, à Échap, ou par un second clic sur le terme.

   **Un troisième défaut trouvé en testant, de la même famille** : sur écran étroit, un terme proche
   du bord droit ouvrait une bulle sortant de 170 px hors écran, sans défilement horizontal — la
   source était donc, là encore, inatteignable. La bulle est maintenant ramenée dans le cadre
   (mesure + `translateX`).

   Corrigé aussi : `role="tooltip"` retiré — une infobulle ne doit pas contenir d'élément
   focalisable, or celle-ci porte le lien. Remplacé par `aria-expanded` + `aria-describedby`.

   QC navigateur (chrome-devtools, dev server) : survol réel du mot **jusqu'au lien** ✅ ; tabulation
   depuis le terme atterrit sur « Source », bulle ouverte ✅ ; Échap ferme et rend le focus au terme
   ✅ ; une seule bulle ouverte à la fois ✅ ; tap pur sans survol (mobile) ✅ ; 17 termes affichés
   × 2 largeurs (1440 et 500 px) sans débordement, sans zone morte, lien non recouvert ✅ ; console
   vide ✅.
   ⚠️ **Piège de méthode, à retenir** : une première sonde annonçait 40 liens « recouverts ». C'était
   la sonde qui était fausse — **40 des 57 termes sont dans un `<details>` replié**, donc non peints,
   et `elementFromPoint` y renvoie `null`. Toujours restreindre un balayage aux éléments réellement
   affichés avant de conclure à un défaut.
6. ✅ **Les deux sources fausses du glossaire sont corrigées** (2026-08-05), et les 8 autres entrées
   `vie-publique.fr` contrôlées dans la foulée.
   - `réforme Darmanin` : réglé **par l'API**. Le décret existe — n° 2023-1013 du 2 novembre 2023 —
     et son champ `signers` porte « *Le ministre de l'intérieur et des outre-mer, Gérald Darmanin* ».
     Le surnom devient donc vérifiable sur le texte officiel lui-même. Source → Légifrance
     (`JORFTEXT000048306645`) ; la définition cite désormais le numéro du décret et son signataire.
     `texteIntegral` expose maintenant `signataires` : c'est le champ qui a tranché.
   - `taxe Zucman` : **l'instruction du 04/08 (« citer l'auteur ») s'est révélée impraticable telle
     quelle**, et c'est le résultat le plus intéressant du lot. Les textes de Zucman lui-même donnent
     des paramètres *différents* de ceux de notre définition : 2 % sur les **milliardaires** dans son
     rapport au G20 (juin 2024), 1,5 % dès **50 M€** sur sa page de campagne européenne. Or notre
     définition dit **2 % / 100 M€**, qui sont les chiffres du **texte français**. Le sourcer chez
     l'auteur aurait donc laissé ses deux chiffres sans source. Retenu : le **rapport du Sénat
     `l24-689`** sur la proposition de loi, qui porte *à la fois* les trois faits affirmés (taux de
     2 %, seuil de 100 M€, mécanisme de plancher : « *la différence… entre le montant résultant de
     l'application d'un taux de 2 % et la somme des montants effectivement acquittés* ») **et** le
     nom de Gabriel Zucman. Ni la fiche vie-publique ni les pages de Zucman ne font les deux.
   - **Les 8 autres tiennent** (vérifiées en navigateur réel : `quotient conjugal`, `niches
     fiscales`, `CSG`, `devoir de vigilance`, `comparution immédiate`, `loi Attal`, `Sécurité
     globale`, `Séparatisme` — le terme figure dans chaque page citée).

   ⚠️ **Deux pièges de méthode, rencontrés le même jour et de même nature** — à retenir avant
   d'écrire l'outil de contrôle des URLs (voir plus bas) :
   - `vie-publique.fr` **rend en JavaScript** : `WebFetch` et même un `fetch` depuis la page servent
     une coquille de ~200 signes. Un contrôle automatique y verrait 8 pages vides et conclurait à
     8 liens morts. Seule une navigation réelle donne le contenu.
   - **`innerText` masque le texte replié.** Le contrôle a d'abord déclaré `loi Attal` fautive
     — nom absent — alors qu'« Attal » figure 15 fois dans la page, dont le titre et « *déposée par
     le député Gabriel Attal* », mais dans une section repliée. Toujours chercher dans le HTML
     complet, jamais dans le texte visible. (Même piège que sur le QC des infobulles, point 5.)
7. ✅ **Note de contexte posée sur `lfi-energie-prix-02`** (2026-08-05, **décision n° 32**). La
   tension de modèle est tranchée par **(a)** : nouveau champ `contexte_lecture` { texte, source_url }
   sans contrainte de date, renvoi `†` sous le verbatim (le `*` restant à `fait_posterieur`) ;
   quand les deux coexistent, l'antérieur s'affiche en premier. Élargir `fait_posterieur` aurait
   désarmé le contrôle qui attrape l'erreur du 04/08 — **vérifié** : la note fautive, rejouée, est
   refusée, et le message aiguille maintenant vers `contexte_lecture`.
   Privé de contrainte de date, le champ repose sur trois autres garde-fous (source obligatoire,
   pas de verdict, **pas de glose sur l'intention du candidat**), et un `date` y est refusé. Les
   quatre refus ont été déclenchés à dessein : un garde-fou jamais éprouvé ne protège de rien.
   🔴 **Trouvé en sourçant la note, et c'est le vrai enseignement du lot.** Le jaune budgétaire
   « État actionnaire » porte les deux chiffres dans un même tableau — mais il est arrêté au
   **30/06/2024** et donne Engie à **23,64 %**, quand Engie publie **22,64 % au 31/05/2026**.
   Reprendre un document officiel sans vérifier sa fraîcheur aurait publié un chiffre faux : le
   caractère officiel d'une source ne dit rien de son actualité. D'où deux sources, `source_url`
   acceptant désormais une liste comme `source_baseline` (« un lien par fait affirmé »).
8. ✅ **Règle écrite : ne jamais conclure seul qu'une proposition est dépassée** (2026-08-05,
   **décision n° 33**). Cinq contrôles à passer avant toute note d'obsolescence — un seul échoue,
   pas de note : (i) combien d'objets la demande vise-t-elle ? (ii) le mot a-t-il son sens ou le
   mien ? (iii) la demande a-t-elle été maintenue après le fait invoqué ? (iv) le texte dit-il ce
   que son titre annonce — lire les articles ? (v) est-il en vigueur, et une date de fin n'est-elle
   pas une simple borne de version ? Plus un corollaire : **le caractère officiel d'une source ne
   dit rien de son actualité** (vérifier la date d'arrêté).
   **Distinction posée au passage, et elle décide du vocabulaire des agents** : une *baseline* —
   notre description du réel — peut être périmée, et le dire est un constat sur notre texte ; une
   *mesure* — la phrase d'un candidat — ne reçoit jamais ce tampon.
   Répercutée dans `.claude/agents/verificateur-sources.md`, `.claude/agents/extracteur.md` et
   `data/PROCESS-extraction.md` (dont le schéma décrivait encore `etat_maturite` sans dire que la
   décision n° 31 l'a retiré de l'affichage, ni que `fait_posterieur` / `contexte_lecture` ne se
   remplissent pas en extraction).

   → **Texte de référence : `data/choix-editoriaux.md`, décision n° 33.** Ce TODO n'en garde que le
   résumé ; les cinq contrôles y sont énoncés au long, avec le cas d'espèce de chacun.
9. 🟢 **[EN PLACE depuis le 2026-08-05] Accès programmé aux sources qui bloquent le scraping.**
   L'API Légifrance fonctionne : compte PISTE créé par l'éditeur, application « comparateur-programmes-2027 »
   abonnée à *API Légifrance v2.4.2*, identifiants OAuth dans `.env.local` (ignoré par git).
   Jeton : `POST https://oauth.piste.gouv.fr/api/oauth/token` (`grant_type=client_credentials`,
   `scope=openid`) → portée `openid resource.READ`, 1 h. Base : `https://api.piste.gouv.fr/dila/legifrance/lf-engine-app`.
   Endpoints utiles éprouvés : `/consult/ping`, `/search` (fonds `LODA_DATE` pour lois et décrets,
   `CODE_DATE` pour les articles de code — facette `DATE_VERSION` pour interroger un article **à une
   date donnée**), `/consult/lawDecree` (texte intégral article par article).
   ⚠️ Les URLs `legifrance.gouv.fr` renvoient 403 aux requêtes automatisées **même quand la page
   existe** : ne jamais conclure au lien mort sur ce domaine. Les identifiants d'article viennent de
   l'API, ils font foi.
   → ⬜ Reste à faire : outiller ça en script réutilisable (`scripts/legifrance.mjs`) et le documenter
   dans la procédure des agents, pour que ~90 termes du glossaire et les faits ❓ du point 4 cessent
   d'être bloqués.

   🔴 **Ce que le premier appel réel a trouvé, et qui justifie à lui seul le chantier.** Contrôle de
   la loi n° 2026-554 (citée par la baseline `eco-energie-prix` et par l'astérisque de
   `lfi-energie-prix-02`) contre le texte officiel : **notre rédaction était fausse deux fois.**
   - *Temps du verbe.* Nous écrivions que la loi « a supprimé » le régime de concession. Son
     article 21 fixe l'entrée en vigueur **par décret, au plus tard le 1er septembre 2026**, et
     l'API donne l'article L. 521-1 du code de l'énergie en statut `ABROGE_DIFF` — **encore en
     vigueur au 05/08/2026**, abrogation différée au 01/09/2026. Aucun décret d'entrée en vigueur
     trouvé à ce jour.
   - *Sens de la loi.* Nous laissions entendre que la demande LFI (« stopper la privatisation des
     barrages ») était réglée. Or l'article 12 fixe l'objectif d'ouvrir **au moins 40 % des capacités
     hydroélectriques installées à des entreprises autres qu'EDF** (6 GW de « capacité virtuelle »
     sur vingt ans) et l'article 6 prévoit une **procédure de sélection** concurrentielle. Un lecteur
     — et LFI — peut lire ce texte comme l'inverse d'un arrêt de la privatisation.
   **Leçon, à ajouter à la règle du point 8** : le titre d'une loi et son résumé ne disent pas ce
   qu'elle fait. Une note d'obsolescence doit être écrite **contre le texte des articles**, et sa date
   d'effet vérifiée — la date de signature n'est pas la date d'entrée en vigueur. Les deux textes ont
   été corrigés le 05/08.

10. ✅ **Accès Légifrance outillé : `scripts/legifrance.mjs`** (2026-08-05). Module + CLI
    (`npm run legifrance -- <commande>`), éprouvé contre l'API réelle sur trois cas :
    `acces` · `texte <n°>` · `integral <n°|LEGITEXT>` · `article <code> <n°> [date]` ·
    `vigueur <code> <n°> [date]`. Exporte `jeton` (cache mémoire 1 h), `chercherTexte`,
    `texteIntegral`, `articleADate`, `enVigueurLe`, `nomCodeCanonique`, `detagger`.
    Documenté dans `.claude/agents/verificateur-sources.md` et `.claude/agents/glossaire.md`
    (règle : ne plus marquer ❓ un fait juridique sans être passé par l'API).

    **Ce que l'écriture du module a appris sur l'API — quatre pièges qui rendent muet, pas bruyant.**
    Aucun ne lève d'erreur : ils renvoient zéro résultat, ce qui se lit comme un fait juridique.
    - **`/consult/ping` renvoie 500** alors que tout le reste répond (constaté le 05/08). Il n'est
      donc pas utilisé : `acces` fait un vrai bout-en-bout (jeton + recherche connue). Un diagnostic
      qui échoue quand l'accès est bon fait chercher une panne inexistante.
    - **La facette `NOM_CODE` est strictement exacte** : « Code de l'énergie » passe, « code de
      l'énergie » et la même chaîne à apostrophe courbe (celle d'un copier-coller depuis le web)
      renvoient 0. Réglé par `nomCodeCanonique()`, qui demande son nom à `/suggest`.
    - **Le numéro d'article doit être écrit comme il est indexé**, et l'indexation n'est pas
      uniforme : « L521-1 » sans espace, mais « 885 A » avec. Normaliser dans un sens casse l'autre →
      le module essaie les écritures plausibles.
    - **L'API ne rend pas les articles dans l'ordre du texte** (la loi n° 2026-554 sortait en 18, 19,
      20, 21, 22, 12…). Ordre rétabli via `intOrdre`. Lire une loi dans le désordre, c'est la citer
      de travers.

    🔴 **Distinction à retenir, et c'est le cœur du point 8** : l'étiquette d'état d'un article est
    son état **aujourd'hui**, pas son état à la date interrogée. L'article 885 A (ISF) consulté au
    01/06/2017 ressort `ABROGE` alors qu'il s'appliquait ce jour-là ; L. 521-1 ressort `ABROGE_DIFF`
    alors qu'il s'applique encore. `enVigueurLe` répond donc par les **bornes de vigueur**, jamais
    par l'étiquette — c'est exactement la confusion qui a produit l'erreur du 05/08.
11. ✅ **Sources restantes sans API — constat consigné là où il sert** (2026-08-06). `vie-publique.fr`,
    `economie.gouv.fr`, `interieur.gouv.fr`, `budget.gouv.fr` → navigateur réel, sinon œil de
    l'éditeur. **ADEME n'en fait pas partie** : `data.ademe.fr` expose une API Data Fair sans clé
    (600 requêtes/60 s en anonyme) et `territoires-climat.ademe.fr` son propre open data (PCAET) —
    le 403 rencontré ne venait que du site web éditorial.
    Ce n'était pas un chantier mais un constat à ne pas réapprendre : il est désormais dans
    `.claude/agents/verificateur-sources.md` (et déjà dans `glossaire.md`), avec ce que la
    vérification des 10 fiches du 05/08 a ajouté — **`vie-publique.fr` rend en JavaScript** (`fetch`
    y renvoie ~200 signes, même depuis sa propre origine) **et répond 200 sur tout**, y compris sur
    une URL inexistante : son code HTTP ne prouve rien. Règle qui en découle : **une page vide n'est
    pas un lien mort**, et le défaut à traquer reste le lien **hors sujet**.

12. 🔄 🟠 **Passe ciblée sur les baselines antérieures à l'API — faite le 2026-08-06, deux points restent.**

    **Résultat : zéro erreur sur les 7 axes**, là où le premier texte contrôlé le 05/08 en donnait
    deux. Vérifié contre le **texte des articles** (contrôle iv de la décision n° 33) :
    `eco-justice-environnementale` (L. 231-3 : écocide = délit, 10 ans, 4,5 M€, décuple),
    `eco-dechets` (L. 441-2 obsolescence ; L. 217-13 six mois), `agri-condition-animale`
    (art. 515-14 code civil, mot pour mot), `sante-toxiques` (L. 171-8 : 45 000 € et astreinte
    4 500 €/j ; L. 524-1 : interdiction PFAS au 01/01/2026, extension 2030), `fisc-secu`
    (L. 136-8 : 9,2 % activité, 10,6 % capital), `just-police` (L. 435-1 4° : « *dont les conducteurs
    n'obtempèrent pas à l'ordre d'arrêt* »).

    ✅ **Reliquat (c) fermé autrement que prévu.** `fisc-secu` était le seul axe sans source
    Légifrance, et la référence LFSS 2026 n'avait jamais été retrouvée. Inutile : l'**article
    L. 136-8 du code de la sécurité sociale** porte les deux taux lui-même. Source ajoutée en tête,
    stamp `2026-08-06`. Chercher la loi modificatrice quand le code consolidé porte le fait est un
    détour — leçon à garder.

    🔴 **Deux non-défauts qui auraient pu passer pour des défauts.** `CPP art. 30` (interdiction des
    instructions individuelles) et `CPP art. 706-2-3` (pôles régionaux environnement) ressortent
    tous deux `ABROGE_DIFF` — mais `enVigueurLe` donne `dateFin: 2029-01-01` et `enVigueur: true` :
    c'est la **recodification du code de procédure pénale**, différée à 2029, bien au-delà de
    l'horizon 2027. Les deux baselines tiennent. C'est exactement la confusion étiquette / bornes
    de vigueur du 05/08 : appliquée correctement, elle dit « rien à corriger ».

    ⚠️ **Piège d'API découvert, à ajouter à la procédure des agents.** Pour une **loi modificative**,
    `texteIntegral` ne rend que les *instructions* (« A créé les dispositions suivantes : Art.
    L. 541-10-9-1 »), jamais la substance — qui vit dans l'article de code visé. Lire la loi seule
    fait conclure « ABSENT » sur des faits parfaitement exacts, et donc douter d'une baseline
    correcte. **Toujours remonter à l'article de code, à la bonne date.**

    ⬜ 🟠 **Ce qui reste : deux chiffres que le droit ne porte pas là où on le croit.**
    - `eco-dechets` — le malus « mode ultra-express » (0,25 € à 12 € par article, 1 € à 20 € en
      2030) est **introuvable** dans la loi n° 2026-602 comme dans les articles qu'elle modifie
      (L. 541-10-3, L. 541-10-27 interrogés au 02/09/2026 et au 01/06/2030). Le principe et la date
      d'entrée en vigueur au 1er septembre 2026 sont bien là (art. 5, II) ; les **montants** sont
      probablement fixés par décret. À retrouver, ou à retirer de la baseline.
    - `sante-toxiques` — la « redevance de 100 € par 100 g de PFAS rejetés » : l'article
      L. 213-10-2, modifié par l'art. 4 de la loi PFAS, **ne contient pas le mot « perfluo »**.
      Même conclusion : soit un décret, soit un chiffre à reprendre.
    Dans les deux cas, **ne pas conclure que le chiffre est faux** — conclure que la source citée ne
    le porte pas, ce qui est la règle « un lien par fait affirmé ».

    ⬜ 🟢 Les **23 axes du second cercle** (affirmation juridique quelconque) restent à ouvrir, mais
    le premier cercle n'ayant rien donné, rien ne presse.

    ---
    *Périmètre d'origine, chiffré le 2026-08-05 :*
    Question de l'éditeur : faut-il re-vérifier tout ce que l'agent a inscrit depuis le début ?
    **Non — l'infiabilité est concentrée, pas diffuse.** Mesures de terrain : le balayage d'URLs du
    02/08 avait trouvé 3 baselines défectueuses sur les 27 du lot 29/07 ; le premier appel API du
    05/08 a trouvé notre rédaction fausse deux fois sur le premier texte contrôlé. Or ces défauts
    appartiennent tous à **une seule classe : les affirmations sur ce qu'un texte de loi a fait, et
    depuis quand.** Les chiffres INSEE et budgétaires n'ont rien donné. C'est exactement la classe
    que l'API tranche désormais. Périmètre à contrôler, repérable mécaniquement :
    - **7 axes** affirment quelque chose au passé accompli (« a supprimé », « depuis la loi ») :
      `just-police`, `just-justice`, `fisc-secu`, `eco-dechets`, `agri-condition-animale`,
      `eco-justice-environnementale`, `sante-toxiques` ;
    - dont **`fisc-secu`**, seul à ne citer aucune source Légifrance — et dont le reliquat (c)
      ci-dessus note déjà que la référence LFSS 2026 n'avait jamais été retrouvée. À reprendre
      ensemble ;
    - **23 axes** contiennent une affirmation juridique quelconque : second cercle, à n'ouvrir que
      si le premier rend beaucoup.
    Soit une dizaine d'items, pas 54. Une séance, pas un chantier.

13. ✅ **Les 2 faits publiés sur presse seule sont corrigés** (2026-08-05) — trouvés en répondant à
    la question de l'éditeur « l'agent met-il une source bancale pour faire nombre ? ». Réponse
    mesurée : **non, il n'y a pas de quota**. La règle écrite est « un lien par fait affirmé », aucune
    consigne chiffrée n'a jamais existé, et le « toujours trois » est un effet de longueur (lot 29/07 :
    412 signes et 2,48 sources ; lot 02/08 : 1 120 signes et 5,89 sources — densité identique,
    1 source pour 166 vs 190 signes). Sur 236 sources annotées, **89 % sont de niveau 1-2**, et le
    dernier fait d'un axe est à 87 % en niveau 1-2 contre 95 % pour le premier : pas de remplissage.
    Mais 2 faits reposaient bien sur de la presse seule, contre la règle de l'agent :
    - `fisc-collectivites` (CVAE) : deux sources de niveau 4 (LégiFiscal, FIPECO) → remplacées par
      l'art. 1586 ter du CGI. **Le fait était juste**, c'est le sourçage qui était faible.
    - `fisc-aides-entreprises` : la notice Sénat citée en niveau 2 est une **page de métadonnées qui
      ne porte aucun des deux faits** — ils ne tenaient donc en réalité que sur Public Sénat. Les
      deux liens remplacés par le rapport lui-même (`r24-808-1`), qui les porte mot pour mot.

    🔴 **Le vrai enseignement, et il porte sur l'outillage, pas sur l'agent.** Pour la CVAE, l'agent
    **avait signalé le problème lui-même**, en italique dans le rapport, et proposé le correctif :
    *« Deux sources de niveau 4 concordantes ; l'éditeur peut préférer renvoyer à l'art. 79 de la
    LF 2025 sur Légifrance s'il veut un niveau 1 (numéro d'article à confirmer). »* Cette réserve
    n'est jamais sortie du rapport : `appliquer-baselines` parse le texte de baseline et les URLs, et
    **laisse tomber les commentaires**. Le défaut n'est pas que l'agent glisse une source faible en
    douce — c'est que ses réserves meurent au moment de l'application.
    → ✅ **Outillé le 2026-08-06.** `appliquer-baselines` extrait désormais les réserves — verdict
    ⚠️/❌, faits ❓, remarques en italique de l'agent dans le bloc Sources, sources **sans niveau
    annoté**, tournures d'incertitude — les affiche par axe, et **refuse d'écrire** tant que
    `--reserves-lues` n'est pas passé. Mesuré sur les rapports existants : **19 / 7 / 27 / 25
    réserves** sur les lots A / B / C / 29-07. Il fait remonter, entre autres, les deux
    avertissements de découpage `eco-ocean` et `eco-biodiversite` (point 3 ci-dessus) et le
    `eco-sols` sans niveau. Deux faux positifs écartés à l'écriture : les **titres d'ouvrages en
    italique dans les liens markdown** (`[RTE, *Bilan électrique 2025*, …](url)`) et les lignes de
    tableau récapitulatif.
    Et sa prudence était fondée : **l'article 79 de la LF 2025 porte sur la TGAP outre-mer**, pas sur
    la CVAE. Le bon est l'article 62.

### Ce que le balayage des URLs a appris (2026-08-02)

Les 212 URLs de `data/axes.json` ont été testées. **Aucun lien mort issu du travail du jour** ; deux
liens morts sur des axes stampés `baseline_verifiee: 2026-07-29` — `fisc-is` (fiche déménagée, réparée
après vérification du contenu) et `fisc-tva` (404 **et** source hors sujet : la fiche ne traitait que
la TVA du secteur hygiène-santé, la baseline affirme les quatre taux généraux → inscrit en
`avant-publication`). Avec `fisc-verte`, dont la page Douane citée ne mentionnait ni l'IRICC ni 2027,
cela fait **3 baselines « vérifiées » dont le sourçage ne tenait pas**.

→ ✅ **Outillé le 2026-08-06 : `npm run verif-liens`** (`scripts/verif-liens.mjs`, options `--axes`,
`--glossaire`, `--seulement=<motif>`). Les trois contraintes du 05/08 sont câblées dès l'écriture,
sinon l'outil n'aurait produit que des faux positifs : domaines non testables déclarés
(`legifrance.gouv.fr`, `vie-publique.fr`, `economie.gouv.fr`, `interieur.gouv.fr`, `budget.gouv.fr`),
recherche dans le **HTML complet**, et comparaison sur des **mots réduits** (sans accent, sans
pluriel, ponctuation aplatie) — sans quoi « bas-carbone » ne correspond pas à « Bas Carbone ».

**Trois états, pas deux — c'est tout l'intérêt** : `ok` · `mort` · `invérifiable`, plus un signalement
`hors sujet ?` qui est une piste, pas un verdict. Deux règles apprises en écrivant :
- **401/403/429 ne sont pas des liens morts**, mais des refus d'automatisation. Seuls **404/410**
  prouvent une absence.
- **Un échec de requête n'est jamais un lien mort non plus.** Constaté le jour même : deux PDF
  Agreste faisaient échouer `fetch` alors que `curl` les sert en 200 — l'outil les avait déclarés
  morts. Accuser la page d'un défaut du client, c'est envoyer l'éditeur réparer ce qui n'est pas cassé.

**Résultat du premier passage complet (2026-08-06)** — glossaire : 95 liens, **74 ok / 0 mort /
1 à regarder / 20 invérifiables** ; axes : 224 liens, **104 ok / 0 mort / 1 à regarder /
119 invérifiables**. Ce que ça a trouvé :
- `fisc-tva` **404 pour la deuxième fois** (la fiche `F23567` a migré sur
  `entreprendre.service-public.gouv.fr`) → réparée, la nouvelle page porte bien les quatre taux ;
- 4 sources de glossaire hors sujet, toutes remplacées : `MACF` et `Mécanisme d'ajustement carbone
  aux frontières` (l'URL `_fr` de la Commission servait **encore** l'anglais — « CBAM » 89 fois,
  « MACF » zéro), `énergies marines renouvelables` (la page ne portait que l'éolien en mer quand la
  définition annonçait aussi hydrolien, houle et thermique — définition **et** source corrigées),
  `bioénergies` (page « biomasse-énergie »), `niche Copé` (le nom « Copé » n'était pas dans la page
  citée → Cour des comptes, qui porte le surnom **et** les faits — même leçon que `taxe Zucman`) ;
- le seul `hors sujet ?` restant du glossaire est **légitime** : `Planification Pluriannuelle de
  l'Énergie` — la page officielle dit « **programmation** », le verbatim écrit « Planification ».
  C'est précisément la raison d'être de l'entrée.

⚠️ **Les invérifiables ne sont pas un défaut de données** : PDF (contrôle de contenu à faire à part)
et domaines publics qui refusent les robots. C'est la limite de l'outil, pas l'état du corpus —
ne pas la lire comme un taux d'erreur.

**Cinquième état ajouté le 2026-08-06 : `anglais`.** Question de l'éditeur (« les liens en anglais
ont-ils été corrigés ? ») → contrôle systématique de tous les liens européens, qui a trouvé ce que
les deux premiers cas laissaient présager : **le suffixe `_fr` d'une URL `europa.eu` ne garantit
rien.** `Mercosur` (`policy.trade.ec.europa.eu/…_fr`) et `Copernicus` (`copernicus.eu/fr`) servaient
eux aussi de l'anglais → remplacés par la Représentation en France de la Commission et par le CNES,
définitions ajustées aux faits que ces pages portent réellement. L'outil détecte désormais les deux
formes : langue **demandée par l'URL** (`/oj/eng`, `:en:`, `/oj` sans locale) et langue **réellement
servie** (comptage de mots outils).

🔴 **Et c'est ce contrôle qui a trouvé le plus gros défaut du lot : une URL tronquée par un bug du
parser.** `eco-justice-environnementale` citait
`https://legal.un.org/icc/statute/french/rome_statute(f` — le `.pdf` manquant. Cause :
`appliquer-baselines` extrayait les URLs avec `\((https?://[^)\s]+)\)`, qui s'arrête à la **première**
parenthèse fermante ; une URL contenant `(f).pdf` était donc coupée. Le rapport, lui, avait la bonne
URL. Et l'URL tronquée **répond 200**, en anglais, sur une page qui n'est pas le Statut de Rome :
vivante, donc invisible à tout contrôle de survie — elle a traversé le balayage du 02/08 et le stamp
`baseline_verifiee`. Corrigé des deux côtés (donnée + regex à parenthèses équilibrées).

⬜ 🟢 **Restent 7 liens en anglais, dont 3 légitimes** : `Community Reinvestment Act` (loi **des
États-Unis**, la Fed ne publie pas en français) et les 2 pages de l'`isa.org.jm` (l'Autorité
internationale des fonds marins publie en anglais). Les 4 autres sont des **EUR-Lex**
(`eco-ocean`, `eco-justice-environnementale`, `fin-monnaie-bce`, `fisc-dette`) : les variantes
françaises se construisent (`?locale=fr`, `/oj/fra`, `:fr:`) mais **EUR-Lex répond 202 à corps vide
à tout accès automatisé, même à `curl`** — impossible de les vérifier avant de les substituer.
Quatre pages à ouvrir à la main, puis remplacer.

---

## Plan d'attaque — V1 complète sur les 2 programmes (LFI + EELV)

> Objectif : couvrir les **15 méta-thèmes pour les 2 programmes déjà en base**, avec la rigueur des pilotes (fiscalité, justice). Ce n'est PAS encore « éclairer le vote » (cadrage V1) mais **prouver le moteur complet** sur 2 programmes. L'ajout d'autres candidats = versions ultérieures.
>
> **État : 3/15 méta-thèmes faits** (437 mesures, 54 axes). **Fondations prêtes** : les 2 programmes normalisés en `.md`, 3 agents projet (`extracteur`, `verificateur-sources`, `glossaire`), suivi `npm run etat-sources`, liste d'attente `npm run attente`, glossaire + matcher, déploiement Vercel auto.

**Boucle par méta-thème** (chaîne éprouvée, à répéter pour chacun des 13 restants) :
1. `extracteur` sur le méta-thème, les 2 programmes, depuis les `.md` → brouillons `data/drafts/`.
2. **Arbitrage éditeur** : cas-frontières, cotags, nouveaux axes (en questions fermées).
3. Fusion brouillons → `data/candidats/*.json` ; brouillons supprimés.
4. `verificateur-sources` sur les baselines des nouveaux axes, puis
   **`npm run appliquer-baselines -- <rapport.md>`** : le script parse le rapport et écrit
   `baseline_reel` / `source_baseline` / `baseline_verifiee` sans recopie à la main (une passe =
   ~10 textes de 1 000 signes et ~70 URLs, la recopie y introduit des écarts silencieux).
   `--essai` pour voir sans écrire ; il refuse d'écraser une baseline existante différente sans
   `--remplacer=<id>`, ce qui protège les corrections éditoriales d'un rejeu de rapport.
   ⚠️ Le script ne teste pas les URLs : le faire à part (le balayage du 02/08 a trouvé 2 liens
   morts sur des axes pourtant stampés « vérifiés »).
5. `glossaire` sur les nouveaux verbatims → arbitrer / intégrer.
6. `check-data` + build + QC navigateur + commit + **tag daté** (versions, pas flux).

**Ordre proposé** (choix éditeur 30/07 : commencer par Écologie) :
1. ✅ Écologie, climat & énergie — **FAIT** (2026-08-02) : 266 mesures, 26 axes, 26 thématiques, 30 décisions éditoriales. 4 points ouverts en section REPRISE.
2. ⬜ Protection sociale & solidarités (EELV 31-37,39 / LFI 7)
3. ⬜ Économie, travail & entreprises (EELV 13-16,19,20 / LFI 2,8,9)
4. ⬜ Santé (EELV 28-30 / LFI 15)
5. ⬜ Éducation, recherche & jeunesse (EELV 23-25 / LFI 5) — ⚠️ ch23 EELV à relire d'abord
6. ⬜ Europe, international & défense (EELV 60-66 / LFI 16-18)
7. ⬜ Logement, transports & territoires (EELV 2,3,22,44-46 / LFI transversal)
8. ⬜ Égalités & discriminations (EELV 38,40-43 / LFI ch10 partiel)
9. ⬜ Institutions & démocratie (EELV 47-49,54,59 / LFI 1, ch3 partiel)
10. ⬜ Culture, sport & médias (EELV 26,27,55 / LFI 11)
11. ⬜ Agriculture & alimentation (EELV 11,12 / LFI dispersé ch9/12)
12. ⬜ Immigration & asile (EELV 56 / LFI ch10 partiel)
13. ⬜ Numérique & technologies (EELV 21 / LFI transversal)

**Points de vigilance** : LFI dispersé/transversal sur logement et numérique → repérage transversal, pas lecture de chapitre. Reliquats à réabsorber au bon chantier (LFI 6.3 → économie ; ch 3.2 LFI hors finances locales → institutions). Après le 11/10/2026 (primaire gauche unie) : acter le statut candidat.

**Définition de « fini » (V1, 2 programmes)** : les 15 méta-thèmes renseignés pour LFI et EELV ; chaque mesure sourcée ; chaque axe avec `baseline_verifiee` ; glossaire couvrant le vocabulaire des verbatims ; pages À propos + Méthodologie réécrites dans la voix de l'éditeur ; contextualisation du glossaire livrée ; tag de version daté (ex. `v1-2-programmes`).

## À faire — moyen terme

- 🔄 🟠 **Glossaire au survol des termes techniques** — prototype livré le 2026-07-29 sur un terme (« numerus clausus », mesure `eco-prison-01`, désormais sourcé Sénat le 30/07). Agent projet `glossaire` créé le 30/07 (`.claude/agents/glossaire.md`) : propose des définitions neutres et sourcées des termes des verbatims, ne modifie jamais `glossaire.json`, ne committe pas → l'éditeur arbitre et intègre. 1er run lancé en tâche de fond (rapport attendu : `data/rapports/glossaire-propositions-2026-07-30.md`). À relancer après chaque nouvelle extraction de mesures. ✅ Matcher `Verbatim.tsx` durci le 30/07 (frontières de mot Unicode `\p{L}/\p{N}`, flag `u`) — les collisions de sous-chaîne ne sont plus un risque. **État au 31/07** : **41 termes intégrés** (numerus clausus + 23 concepts + 12 du lot 2 + Bâle V, superprofits [source Sénat], Community Reinvestment Act [source Réserve fédérale US] + `Séparatisme` et `Sécurité globale`, à portée limitée). Décisions éditeur actées : sigles déjà développés dans leur phrase = non repris ; dispositifs nommés = tout inclure ; ❓ = sourcés. Plus aucun terme en attente. Rapport : `data/rapports/glossaire-propositions-2026-07-30.md`. Mécanique en place et validée (build statique OK, verbatim intact, accessibilité focus/`aria-describedby` vérifiée en navigateur) :
  - **Surcouche non destructive (garde-fou n°1)** — `src/components/Verbatim.tsx` repère les termes dans le verbatim sans modifier le texte (le terme est stylé + déclencheur d'infobulle). Chaîne source intacte dans les données.
  - **Infobulle accessible** — s'ouvre au survol, au focus clavier ET au tap (bouton épinglable), se ferme à Échap ; `role="tooltip"` + `aria-describedby`. Non bloquante (pas de dialog modal).
  - **Données** — `data/glossaire.json` (terme → définition [+ `source_url` optionnel]), détection côté client (casse ignorée, termes multi-mots, plus longs d'abord). Validé par `check-data` (champs requis, doublons, URL).
  - **✅ Exception contextuelle (contextualisation)** (2026-07-31) — champ optionnel `contextes` (liste d'ids de mesures) livré : une entrée est soit **globale** (champ absent = comportement d'avant), soit **limitée aux mesures listées**. `Verbatim` reçoit désormais `mesureId` et filtre le glossaire avant de construire le matcher ; `check-data` valide que chaque id de `contextes` existe bien parmi les mesures publiées (une portée pointant vers une mesure disparue rendrait le terme invisible sans erreur visible). Fichiers : `src/lib/types.ts`, `src/components/Verbatim.tsx`, `src/components/Comparateur.tsx`, `scripts/check-data.mjs`. **`Séparatisme` et `Sécurité globale` intégrés** avec portée = `eco-police-4` → **41 termes**. QC : `check-data` ✅ (+ test négatif : les 2 branches d'erreur se déclenchent), `lint` ✅, `build` ✅, et vérification sur le HTML rendu **dans les deux sens** — portée sur `eco-police-4` : les 2 termes sont des déclencheurs d'infobulle ; portée basculée ailleurs : plus d'infobulle **mais le mot reste présent dans le texte** (verbatim intact, garde-fou n°1).
    - **Décision prise au passage** : une occurrence répétée d'un même terme se surligne **partout** dans le verbatim (comportement existant conservé — les verbatims sont courts, une seule proposition ; surligner la 1re seulement pénaliserait la lecture en diagonale). À rouvrir si des verbatims longs rendent l'effet bruyant.

- 🔄 🟠 **Vercel : le site sort de la vue publique jusqu'à la V1** (décision éditeur du 2026-08-06).
  Déployé le 29/07 (https://comparateur-programmes-2027.vercel.app, compte `midenzer0`, push sur
  `main` = redéploiement). Le déploiement a rempli son office — il a **prouvé la chaîne build → prod**,
  et cette preuve est acquise sans que le site reste debout.
  **L'argument décisif n'est pas le principe, c'est un fait** : la production est figée au commit
  `60a28dc` du 02/08, soit 21 commits de retard. Elle sert donc publiquement une version dont le lien
  « Source » des infobulles est **inatteignable** (corrigé le 05/08), avec les deux sources fausses du
  glossaire et le lien ONU tronqué. Ce n'est pas « trop tôt » : c'est faux sur le point qui *est* le
  garde-fou n° 2.
  - ✅ **Projet Vercel supprimé** (2026-08-06). Vérifié : `comparateur-programmes-2027.vercel.app`
    renvoie `HTTP 404 · DEPLOYMENT_NOT_FOUND`, racine et pages internes.
    **Il a fallu deux tests pour y arriver, et c'est l'enseignement de la séquence** : la protection
    d'accès a d'abord été activée (« Vercel Authentication », *Standard Protection*), et le site est
    **resté public** — l'URL répondait 200 avec le HTML complet. Le libellé de l'option dit pourtant
    « *Protect all except production **Custom Domains*** », et ce projet n'en avait aucun. En réalité
    Vercel traite l'alias `projet.vercel.app` comme un domaine de production. La seule option qui
    couvre tout, « All Deployments », est réservée au plan Pro (**150 $/mois**) → écartée.
    → **Règle : ne jamais conclure qu'un site est retiré sans avoir interrogé son URL.** Le libellé
    d'un réglage n'est pas son effet. Deux fois de suite, le test a contredit l'étiquette.
    Argument de suppression, révisé en cours de route : « on perdrait la configuration prouvée »
    était **faux** — Vercel détecte Next.js seul, le site est un export statique, et **aucune
    variable d'environnement n'est nécessaire au build** (`.env.local` ne sert qu'à l'outil
    Légifrance, en local). Réimporter le dépôt à la V1 prend deux minutes.
    ⚠️ L'URL `comparateur-programmes-2027.vercel.app` est **redevenue disponible** : si on y tient,
    la reprendre tôt. Sans objet si un domaine propre est acheté (voir ci-dessous).
  - ✅ **22 commits poussés** (`60a28dc..798b97e`, 2026-08-06), une fois Vercel supprimé donc sans
    rien remettre en ligne. Le travail n'existait qu'en local jusque-là.
    ⬜ 🟢 GitHub signale **4 alertes Dependabot** (3 high, 1 moderate) — l'analyse du 29/07 concluait
    que les résidus portaient sur l'outillage de build, rien de servi en export statique. À
    reconfirmer une fois, sans urgence.

- ⬜ 🟠 **Nom de domaine pour la V1 — décision de l'éditeur du 2026-08-06 : pas de `vercel.app` dans
  l'URL publique.** Faisable et sans surcoût (les domaines personnalisés sont inclus dans le plan
  Hobby, certificat HTTPS automatique) : acheter le domaine, puis Vercel → Settings → **Domains**.
  Trois points à traiter **avant** l'achat, pas après :
  - 🔴 **L'anonymat.** `data/a-propos.md` assume un « je » anonyme. Or l'enregistrement d'un domaine
    **publie par défaut l'identité du titulaire dans le WHOIS**. L'AFNIC restreint la diffusion pour
    les particuliers en `.fr`, mais ce n'est ni systématique chez tous les registrars ni vrai pour
    toutes les extensions. À vérifier avant de payer : une fois publiée, la donnée est archivée par
    des tiers et ne se reprend pas.
  - ⚠️ **Ne pas brancher le domaine « pour préparer ».** *Standard Protection* exclut explicitement
    les Custom Domains de production : le jour où le domaine est branché, le site est public,
    protection activée ou non. On rebranche Vercel **et** le domaine ensemble, au moment de la mise
    en ligne.
  - 📝 **Le nom est un choix éditorial, pas technique.** Le principe fondateur dit que comparer,
    c'est cadrer, et que le site assume une posture d'éditeur. Un nom à consonance institutionnelle
    ou véridictionnelle (`observatoire-…`, `verite-…`, `officiel-…`) laisserait croire à une source
    publique et contredirait ce cadrage. À arbitrer avec la même exigence que le reste.
  - ✅ **`noindex` posé dans `src/app/layout.tsx`** (`robots: { index: false, follow: false }`),
    rendu sur les 3 pages. Ceinture et bretelles : si la protection d'accès saute, l'indexation ne
    repart pas. **Condition de retrait écrite dans le commentaire du code** : les 15 méta-thèmes
    renseignés pour LFI et EELV + le tag de version daté.
  - ⚠️ **Retirer le site ≠ rendre le projet privé.** Le dépôt GitHub reste public, et c'est cohérent
    avec la traçabilité. Les deux décisions sont indépendantes.
- ✅ **Page publique « règle de mapping »** (2026-07-29, garde-fou n°2) — `data/choix-editoriaux.md` est rendu tel quel (source unique, chargé au build) en bas de la page Méthodologie via `react-markdown` + `remark-gfm` + `@tailwindcss/typography`, avec lien vers le fichier sur GitHub pour l'historique.
- ⬜ 🟢 **Classification fine** des 66 chapitres EELV et 89 sous-sections LFI → méta-thèmes (multi-étiquetée), alimentant `data/candidats/*.json`.
- ✅ **Programme Écologistes normalisé en markdown** (2026-07-30, agent en tâche de fond) — `data/sources/ecologistes-programme-2026.md` (~58 800 mots : avant-propos + 8 parties + 66 chapitres + 551 propositions), squelette LFI. QC agent (étape 4) au vert : comparaison token-par-token vs `layout.txt` = 0 mot inventé / 0 perte ; 14/14 échantillons fidèles. Rapport : `data/rapports/normalisation-eelv-2026-07-30.md`. Coquille ch46 (Outre-mer numéroté 45) signalée. Ferme le trou de traçabilité (EELV n'existait qu'en PDF) et l'ordre de lecture 2 colonnes. **Relecture éditeur ciblée à faire** : ch23 reconstruit à la main (grille 3 colonnes, pages ~89-91) ; anomalies source conservées telles quelles (ch4 saute la prop 6 ; ch57 a deux « 4 » ; ch11 props 8-9 quasi identiques = doublon probable du PDF) ; badges `[EUROPE]` à sortir en `rubrique_origine` au stade JSON.
- ⬜ 🟠 **Boucle d'extraction par méta-thème** — après le `.md` EELV, commencer par **Écologie, climat & énergie** (choix éditeur 30/07). Chaîne éprouvée : agent `extracteur` → brouillons → arbitrages éditeur (cas-frontières/cotags) → fusion dans `data/candidats/*` → `verificateur-sources` sur les nouvelles baselines → `check-data` + build + commit + tag daté. 13 méta-thèmes restants au total (2/15 traités : fiscalité, justice).
- ⬜ 🟢 **Versionner en tags datés** (ex. `justice-detaillee-2026-07`) selon le cadrage « versions, pas flux » — commencer au prochain commit.
- ⬜ 🟠 **`npm run verif-miroirs` — rendre la traçabilité PDF testée au lieu de déclarée** (piste ouverte le 2026-08-02). Deux propriétés du corpus ont été vérifiées **une seule fois, à la main, le 30/07**, et rien ne les surveille depuis : (a) `data/sources/*.md` correspond toujours au PDF d'origine, (b) chaque `source_url` en `#page=N` pointe bien vers la page qui contient le verbatim. Une coquille corrigée un peu vite dans un miroir, ou un décalage de pagination, passerait aujourd'hui inaperçu — c'est exactement l'angle mort que `check-data`, `npm run attente` et `baseline_verifiee` comblent ailleurs. **Réalisable dès maintenant, sans dépendance nouvelle** : le PDF Écologistes est versionné (`Programmes/VDEF Programme.pdf`), donc la vérité terrain est locale (le PDF en ligne, lui, est derrière un challenge Cloudflare), et `pdftotext` traite ses 208 pages en ~1 s. ⚠️ **Ne pas mettre en `prebuild`** : ce serait revérifier à chaque déploiement Vercel une propriété qui ne bouge que quand une source change. Forme juste = commande à part, comme `npm run etat-sources` et `npm run attente`, lancée à la main ou sur les PR touchant `data/sources/`.

## Backlog / veille

- ⏸ 🟢 **Surveiller l'arrivée de nouveaux programmes** (autres candidats 2027) et les passer au même socle via l'agent `extracteur`.
- ⏸ 🟢 **`pdf-inspector` (github.com/firecrawl/pdf-inspector) — candidat pour la procédure de repli PDF** (examiné le 2026-08-02, rien à faire avant). Bibliothèque Rust MIT (~4,6k étoiles), déterministe, **sans modèle de langage et sans OCR** : classification texte/scanné page par page, extraction avec coordonnées X/Y, détection annoncée des colonnes, marqueurs de saut de page. Répond à deux trous connus : l'ordre de lecture multi-colonnes (`pdftotext` a sorti la page 78 du programme Écologistes dans l'ordre 6, 8, 7) et le tri scanné/texte que `PROCESS-extraction.md` suppose fait sans dire comment. **Déclencheur : l'arrivée d'un nouveau programme en PDF — à évaluer AVANT de lancer l'extraction**, pas après un échec. Raison, et c'est l'argument principal : la ressource rare de ce projet n'est pas la seconde CPU, ce sont les **tokens et le budget de session** (démonstration le 02/08 : trois agents `verificateur-sources` morts sur la limite de session sans avoir rien écrit). Or ce qui a coûté cher sur l'extraction EELV n'était pas `pdftotext` — c'était la normalisation de 58 800 mots par un agent, la reconstruction du ch. 23, le recollage des propositions à cheval sur deux pages, le retrait des en-têtes courants, la re-dérivation de l'ordre de lecture quand la sortie semblait douteuse. **Un outil déterministe sort l'agent de cette boucle**, et sa sortie positionnelle rend une partie du QC scriptable au lieu de la faire lire. On économise le mécanique, jamais l'éditorial : le QC de fidélité sur échantillons reste dû. À insérer à l'étape 2 de `PROCESS-extraction.md` si le test passe. **Protocole de test tout prêt, on a la vérité terrain** : le rejouer sur `Programmes/VDEF Programme.pdf` et comparer au miroir validé — page 78, et surtout **ch. 23** (grille 3 colonnes, pages ~89-91), seul passage qu'il a fallu reconstruire à la main. **Réserves à ne pas oublier** : sa conversion Markdown reconstruit les titres par ratio de taille de police et les tableaux par heuristique (donc QC token-par-token obligatoire, le miroir n'est pas la source) ; son ordre de lecture reste une heuristique comme celle de `pdftotext` — **la numérotation imprimée des propositions demeure le repère fiable** ; il n'exécute pas l'OCR, il l'oriente. Outil de dépouillement, **jamais une dépendance du site** (export statique). Ne pas justifier son adoption par la vitesse : `pdftotext` fait déjà le corpus en ~1 s.

## Fait

- ✅ Socle de 15 méta-thèmes neutres (`data/taxonomie.json`) + choix éditoriaux (`data/choix-editoriaux.md`).
- ✅ Captation + vérif (10/10) du programme LFI complet (`data/sources/lfi-avenir-en-commun-2025.md`).
- ✅ Matrice comparative v0.2 (couverture symétrique 15/15 ; v0.1 obsolète).
- ✅ Dépôt git initialisé et horodaté.
- ✅ **Pilote « Fiscalité »** — chaîne complète prouvée sur les 2 programmes (`data/candidats/lfi.json`, `data/candidats/ecologistes.json`, vue comparée `data/pilote-fiscalite.md`). 5 axes alignés, baseline sourcée.
- ✅ Process d'extraction autonome documenté (`data/PROCESS-extraction.md`).
- ✅ **Site Next.js V1 amorcé** (App Router, TS strict, Tailwind, export statique). Charge les JSON, comparaison par thème → axe, filtres candidat/thème + recherche par tag, page Méthodologie, liens sources + baseline, bouton de correction. `npm run dev` / `npm run build`.
- ✅ **Modèle v0.2 « une mesure = une proposition »** — grain corrigé. `data/axes.json` (axe = unité de comparaison, porte la baseline + synthèse d'écart). Axe Police détaillé (8 EELV + 20 LFI).
- ✅ **Agent `extracteur`** (`.claude/agents/extracteur.md`) — applique `PROCESS-extraction.md` → brouillons dans `data/drafts/`, jamais de modification de `data/candidats/*` ni de commit.
- ✅ **4 axes justice détaillés** (2026-07-28, 1er run de l'agent) — 64 mesures fusionnées (LFI 29→54, EELV 17→48), **plus aucune mesure `synthese: true`**. QC 64/64 + contre-vérification éditeur. Corrections au passage : fidélité `lfi-police-12`, thématique `justice-civile` (documentée), cotag tabac `addictions`+`drogues-stupefiants` (documenté), 3 pièges → process, PDF EELV archivé.
- ✅ **Filtres UI améliorés** (2026-07-28) — panneau repliable + chips, indeterminate, segmented control candidat, filtres dans l'URL (partageables), barre sticky, tags cliquables, compteurs de facettes, a11y (aria-live, aria-labelledby).
- ✅ **`npm run check-data`** — validation d'intégrité des données (champs requis, ids uniques, axes/thématiques existants, états valides, brouillons inclus), branchée en `prebuild`.
- ✅ **Agent `verificateur-sources` + multi-sourçage** (2026-07-29) — agent de vérification datée des baselines (hiérarchie Légifrance > administrations > institutions européennes > presse jamais seule, pièges documentés : recodification silencieuse, voté ≠ promulgué, faits négatifs). `source_baseline` accepte désormais une liste d'URLs (règle : un lien par fait affirmé) — types, UI et check-data adaptés.
