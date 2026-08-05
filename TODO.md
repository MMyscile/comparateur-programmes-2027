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

- ⬜ 🟠 **Réécrire les textes éditoriaux dans la voix de l'éditeur** — le fond des textes publiés le 29/07 est validé, mais la forme est celle d'une IA, pas celle de Michaël. À reprendre par lui, directement dans les fichiers (le site suit au build) : `data/a-propos.md`, `data/regle-mapping.md`, préambule de `data/choix-editoriaux.md`. Règle apprise au passage : pas d'auto-justification (ex. de l'anonymat) — énoncer, ne pas plaider.

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

1. 🟠 **Glossaire — l'agent a tourné (2026-08-02), la validation reste à faire.** Rapport :
   `data/rapports/glossaire-propositions-2026-08-02.md`. **54 définitions prêtes** (JSON revalidé
   à part : valide, zéro doublon avec les 41 termes publiés, zéro entrée sans source, sources
   institutionnelles uniquement) + **~90 termes laissés ❓ à sourcer**. Rien n'est fusionné.
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

**Ordre arrêté avec l'éditeur le 2026-08-05 : ~~9~~ → ~~10~~ → ~~5~~ → 6 → 7 → 8 → 11.**
Les 9, 10 et 5 sont **faits**. **Le 6 est donc la prochaine étape** (les deux sources fausses du
glossaire publié), avant le 7 et le 8. Le blocage est levé : les 54 nouvelles définitions du
glossaire peuvent être fusionnées, leur source étant désormais atteignable.

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
6. ⬜ 🟠 **Deux sources du glossaire publié sont fausses — vérifiées à la main par l'éditeur le
   04/08**, sur les 10 entrées adossées à `vie-publique.fr` :
   - `taxe Zucman` : la fiche citée porte sur une **proposition de loi inspirée** du dispositif, pas
     sur la taxe Zucman elle-même. → citer **l'auteur** (Gabriel Zucman / EU Tax Observatory), qui
     est la source de premier rang pour un concept qui porte son nom.
   - `réforme Darmanin` : **le nom de Darmanin n'apparaît nulle part** sur la fiche citée — rien ne
     permet au lecteur de vérifier que c'est bien le texte désigné par ce surnom. → source qui fait
     le lien explicite, ou renommer l'entrée par l'intitulé officiel.
   Les 8 autres n'ont pas été signalées comme fautives. **Leçon** : le défaut n'est pas le lien mort,
   c'est le lien **hors sujet** — un contrôle automatique de survie des URLs ne l'aurait pas vu.
7. ⬜ 🟠 **Note d'intention sur `lfi-energie-prix-02` (renationalisation d'EDF).** Le lecteur qui sait
   qu'EDF appartient déjà à 100 % à l'État lira la proposition comme absurde ou dépassée — le piège
   dans lequel l'assistant est tombé le 04/08 (décision n° 31). Il faut le désamorcer **sans
   interpréter à la place du candidat** : deux faits sourcés, jamais une glose.
   ⚠️ **Tension de modèle à trancher** : `fait_posterieur` exige une date *postérieure* à la
   publication (contrôlé par `check-data`), or la nationalisation d'EDF date du 08/06/2023, soit
   **avant** le programme de janvier 2025. Ce n'est donc pas un fait postérieur mais un **contexte de
   lecture**. Choisir : (a) un second champ `contexte_lecture` { texte, source_url } sans contrainte
   de date ; (b) élargir `fait_posterieur` et perdre le garde-fou de date. Préférence : (a) — la
   contrainte de date est précisément ce qui aurait bloqué l'erreur du 04/08.
8. ⬜ 🔴 **Règle éditoriale à écrire : ne jamais conclure seul qu'une mesure est dépassée.** Demande
   explicite de l'éditeur, tirée du cas EDF. Avant toute note d'obsolescence : (i) la demande
   porte-t-elle sur *plusieurs* objets (« EDF **et** Engie ») ? (ii) le mot du candidat a-t-il *son*
   sens ou le mien (« renationaliser » = capital, ou marché et statut) ? (iii) le candidat a-t-il
   maintenu la demande **après** le fait invoqué ? Si oui, le fait ne date rien. À inscrire dans
   `data/choix-editoriaux.md` et dans la procédure des agents.
   ➕ **Quatrième critère, ajouté le 05/08 après le contrôle CVAE** : (iv) une **date de fin n'est pas
   une abrogation**. Elle borne le plus souvent une *version* d'article, remplacée par la suivante.
   L'art. 1586 ter du CGI ressort `ABROGE_DIFF` au 01/01/2027 — mais une version suivante court
   jusqu'au 01/01/2030, et c'est **2030** qui est la vraie fin de la CVAE. Conclure sur la seule
   version courante aurait avancé de trois ans la disparition d'un impôt. Toujours réinterroger à une
   date postérieure avant de conclure à la fin d'un dispositif (`npm run legifrance -- vigueur … <date>`
   le rappelle désormais à chaque réponse portant une date de fin).
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
11. ⬜ 🟡 **Sources restantes sans API.** `vie-publique.fr` (200-sur-tout), `economie.gouv.fr`,
    `interieur.gouv.fr`, `budget.gouv.fr` → navigateur réel pour les vérifications ponctuelles, sinon
    œil humain. **ADEME n'en fait pas partie** : `data.ademe.fr` expose une API Data Fair sans clé
    (600 requêtes/60 s en anonyme) et `territoires-climat.ademe.fr` son propre open data (PCAET) —
    le 403 rencontré ne venait que du site web éditorial.

12. ⬜ 🟠 **Passe ciblée sur les baselines antérieures à l'API — périmètre chiffré le 2026-08-05.**
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
    → ⬜ 🟠 **À outiller** : que `appliquer-baselines` refuse d'appliquer en silence un axe portant
    une réserve, ou au minimum les liste en fin d'exécution. Voir aussi ~38 faits listés dans les
    rapports **sans niveau de source annoté** (comptage heuristique) : le format se relâche.
    Et sa prudence était fondée : **l'article 79 de la LF 2025 porte sur la TGAP outre-mer**, pas sur
    la CVAE. Le bon est l'article 62.

### Ce que le balayage des URLs a appris (2026-08-02)

Les 212 URLs de `data/axes.json` ont été testées. **Aucun lien mort issu du travail du jour** ; deux
liens morts sur des axes stampés `baseline_verifiee: 2026-07-29` — `fisc-is` (fiche déménagée, réparée
après vérification du contenu) et `fisc-tva` (404 **et** source hors sujet : la fiche ne traitait que
la TVA du secteur hygiène-santé, la baseline affirme les quatre taux généraux → inscrit en
`avant-publication`). Avec `fisc-verte`, dont la page Douane citée ne mentionnait ni l'IRICC ni 2027,
cela fait **3 baselines « vérifiées » dont le sourçage ne tenait pas**.

→ ⬜ 🟠 **Leçon à outiller** : le stamp `baseline_verifiee` atteste qu'un passage a eu lieu, pas que le
fait affirmé se trouve dans la page citée. Un contrôle de survie des URLs (et, idéalement, de
cohérence chiffre ↔ source) est à ajouter — même geste que `npm run verif-miroirs` pour les PDF.

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

- ✅ **Déployé sur Vercel** (2026-07-29) — production : https://comparateur-programmes-2027.vercel.app (compte `midenzer0`, projet connecté au repo GitHub : chaque push sur `main` redéploie automatiquement).
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
