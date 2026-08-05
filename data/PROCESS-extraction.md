# PROCESS — Extraction & uniformisation d'un programme

> **À lire en entier avant de traiter un nouveau programme.** Ce document est autonome :
> il suppose que tu n'as AUCUN contexte des conversations précédentes.
> Objectif : produire, pour chaque programme, des données **lues de façon identique**,
> afin que la comparaison entre programmes ne soit pas biaisée par le format d'entrée.
>
> Contexte projet : voir `CLAUDE.md` (racine). Socle de thèmes : `data/taxonomie.json`.
> Choix de classement : `data/choix-editoriaux.md`. Exemple abouti : `data/candidats/lfi.json`
> et `data/sources/lfi-avenir-en-commun-2025.md`.

## Principe directeur

Tous les programmes doivent aboutir aux **mêmes livrables, dans le même format**, quelle que
soit leur source d'origine (PDF ou site web). Le format d'entrée ne doit jamais influencer la
qualité de lecture : sinon on introduit un biais par candidat (cela viole le « test de
renversement » du CLAUDE.md).

## Livrables uniformes attendus (par programme)

Pour un programme d'identifiant `<id>` (ex. `lfi`, `ecologistes`) :

1. `data/sources/<id>.md` — **texte verbatim normalisé** dans le squelette commun (voir §3).
2. `data/sources/raw/<id>_*.tar.gz` — **archive des sources brutes** (PDF ou HTML) pour preuve/traçabilité.
3. `data/candidats/<id>.json` — **mesures structurées** selon le schéma du CLAUDE.md.

## Étape 0 — Vérifier la source (NE JAMAIS SAUTER)

Avant toute extraction, établir et noter :
- **Officielle ?** (site/parti/candidat authentique, pas un tiers).
- **Correspond bien à la présidentielle 2027 ?** Vérifier l'édition et la date.
- **Bon périmètre ?** Unité = programme de campagne présidentielle d'un candidat (cf. CLAUDE.md),
  **pas** un programme de coalition ni de législatives, **pas** une édition périmée, **pas** un livre payant (droits d'auteur).
- ⚠️ **Piège déjà rencontré** : sur le site de LFI, un PDF « PROGRAMME-FRONT-POPULAIRE » traîne :
  c'est le programme de coalition NFP 2024 (législatives), **≠** programme présidentiel. Ne pas l'utiliser.
- En cas de doute sur la source, **demander à l'utilisateur** avant de continuer.

## Étape 1 — Récupérer la source au moindre coût

Ordre de préférence (du moins cher au plus cher) :

1. **PDF officiel unique, en texte (non scanné)** → le plus efficace.
   `pdftotext -layout "fichier.pdf" sortie.txt` (tout le texte en une commande, traitement local ensuite).
2. **Site avec une page unique « programme complet »** → équivalent au PDF.
3. **Site paginé** → télécharger **toutes** les pages **en une passe** avec `curl` en local
   (ne PAS « fetcher » page par page à la demande, c'est le plus lent/coûteux). Puis traiter hors-ligne.
4. **Fetch page par page via le web ouvert** → à éviter.

Pièges techniques côté site web :
- **Contenu rendu en JavaScript** : si le `<main>` d'une page est quasi vide (ex. 40 mots =
  seulement des titres), le texte réel est ailleurs. Vérifier dans cet ordre :
  a) une **sous-page** plus profonde où le texte est rendu côté serveur (cas LFI : les mesures
     sont dans `/chapitreN/sM`, pas dans `/chapitreN`) ;
  b) une **API** (`/wp-json/…` pour WordPress) ;
  c) en dernier recours, rendu JS via `chrome --headless --dump-dom --virtual-time-budget=9000 URL`.
- **PDF scanné (image)** : nécessite un OCR → plus lent et moins fiable. Le signaler à l'utilisateur.
- **Puces fusionnées (piège melenchon2027.fr)** : certaines pages collent deux propositions dans un
  même paragraphe avec un « • » littéral comme séparateur. Vérifier les lignes extraites contenant
  « • » et découper une mesure par segment (en le consignant au rapport).
- **PDF multi-colonnes** : `pdftotext -layout` place les colonnes côte à côte → l'ordre de lecture
  est mélangé. Voir §2.

Toujours **archiver les fichiers bruts récupérés** (`tar -czf data/sources/raw/<id>_....tar.gz …`).

## Étape 2 — Reconstituer l'ordre de lecture (PDF multi-colonnes)

C'est le point le plus risqué. Règle : le texte doit finir dans l'**ordre où un humain le lit**.
- Repère fiable : la **numérotation des propositions** (1, 2, 3…). Si les propositions sont
  numérotées et se suivent, on peut réordonner sans ambiguïté (cas du programme Écologistes,
  colonnes gauche puis droite).
- **Acquis PDF Écologistes (VDEF)** : (a) `pdftotext` **sans** `-layout` restitue l'ordre de lecture
  des deux colonnes quand les propositions sont numérotées — plus sûr que `-layout` pour découper ;
  (b) badges `[EUROPE]` récurrents devant certaines propositions : traiter comme le numéro
  (hors verbatim, reporté en `rubrique_origine`) ; (c) numéros parfois dupliqués (ch. 57 : deux
  « 4 ») → consigner dans `rubrique_origine` ; (d) une proposition peut être coupée en deux blocs
  par la mise en page (bas de colonne + rejet en pied de page) → recoller et le consigner au rapport ;
  (e) `pdftotext` sans `-layout` **supprime le trait d'union des mots composés coupés en fin de
  ligne** (« Inflation-Linked » → « InflationLinked ») tout en joignant correctement les césures
  simples → contrôler les lignes se terminant par « - » dans la sortie `-layout` pour distinguer
  césure (joindre sans trait d'union) et mot composé (conserver le trait d'union) ;
  (f) `pdftotext -raw` est inutilisable comme extraction primaire sur ce PDF (perte d'espaces
  inter-mots par kerning) mais sert de deuxième référence de QC après neutralisation des espaces.
- **Si le document n'est PAS numéroté** et que les colonnes s'entrelacent : ne pas deviner.
  Options : extraire chaque colonne par zone géométrique
  (`pdftotext -x <X> -y <Y> -W <largeur> -H <hauteur> page.pdf`), page par page ;
  ou basculer en **réécriture manuelle assistée** page par page.
  Dans tous les cas, **contrôle qualité obligatoire** (§3) et, si l'extraction reste incertaine,
  **prévenir l'utilisateur et proposer de produire un `.md` relu** plutôt qu'un texte douteux.

## Étape 3 — Normaliser dans le squelette commun

Même squelette pour TOUS les programmes (`data/sources/<id>.md`) :

```
# <Titre du programme> — <parti>, <date>
> source_url : <url ou "PDF: fichier.pdf">
> capté le : <AAAA-MM-JJ>
## <Niveau 1 : partie / section / chapitre> N — <titre>
### <Niveau 2 : chapitre / sous-section> N.M — <titre>
<texte verbatim, ligne par ligne, dans l'ordre de lecture>
```

Règles de fidélité (NON NÉGOCIABLES) :
- **Verbatim intégral** : aucune reformulation, aucun résumé, aucune sélection de « ce qui est
  une mesure ». On garde tout le texte, y compris intros, encarts, chiffres cités.
- **Ordre = ordre de la source.**
- Transformations autorisées (aucune ne retire de contenu) : décodage des caractères,
  normalisation des espaces, suppression des lignes strictement identiques consécutives
  (artefacts de balisage / en-têtes de page répétés), ajout d'un point final quand la
  proposition source n'a pas de ponctuation terminale (convention du corpus).

## Étape 4 — Contrôle qualité de fidélité (OBLIGATOIRE)

- Comparer **≥ 10 échantillons** tirés au hasard entre le texte extrait et la source
  originale (page live ré-téléchargée, ou pages du PDF), **caractère par caractère**.
- Consigner le résultat (ex. « 10/10 identiques »). Si divergence : corriger l'extracteur, pas le texte.

## Étape 5 — Structurer les mesures en JSON

> **Schéma faisant foi : `src/lib/types.ts`** (vérifié par le typage au build) ;
> exemple réel : `data/candidats/lfi.json`. Le bloc ci-dessous est un rappel,
> pas une référence — en cas de doute ou de conflit, `types.ts` gagne.

Créer `data/candidats/<id>.json` : un objet `candidat` + un tableau `mesures`.
Schéma d'une mesure (modèle v0.2) :
```json
{
  "id": "<id>-<axe>-NN",
  "candidat": "<id>",
  "axe": "<id-axe de data/axes.json — l'unité de comparaison ; proposer l'axe en brouillon s'il n'existe pas>",
  "thematiques": ["<id-thematique de data/taxonomie.json (niveau FIN, pas le méta-thème ; la 1ère = principale)>", "…"],
  "verbatim": "texte mot-pour-mot ; élisions marquées par […]",
  "source_url": "https://… (avec #page=N si PDF)",
  "rubrique_origine": "Chapitre X — Titre (proposition N) ; réf. page",
  "date_publication": "AAAA-MM-JJ ou AAAA-MM",
  "etat_maturite": "mur | ebauche | perime | pas-encore"
}
```

⚠️ **`etat_maturite` n'est plus affiché** (décision n° 31) : les quatre états décrivent l'état d'un
**programme**, pas d'une phrase, et les 437 mesures portaient toutes « mûr ». Le champ reste au
schéma — rien n'est effacé — mais **ne mets jamais `perime`** pour signaler qu'une proposition est
rattrapée par le réel : « périmé » est un verdict là où le site doit un fait (décision n° 33).

Deux champs optionnels portent ce travail, et **aucun des deux ne se remplit en extraction** — ils
demandent une vérification datée que l'éditeur mène :
- `fait_posterieur` { texte, source_url, date } — un fait **postérieur** à la publication qui touche
  la proposition (`check-data` refuse une date antérieure, un texte sans source, ou un verdict) ;
- `contexte_lecture` { texte, source_url } — un fait **antérieur** sans lequel la proposition se lit
  de travers (décision n° 32 ; ni verdict, ni glose sur l'intention du candidat).
En extraction, une piste de ce genre va **dans le rapport**, jamais dans la mesure.

⚠️ Ne **jamais** produire `synthese: true` en sortie d'extraction : ce champ est un marqueur
de dette (résumé d'axe en attente de détail), pas un format de livraison. Une extraction
livre du point-par-point verbatim, ou signale qu'elle n'y arrive pas.

## Étape 6 — Baseline « ce qui est fait » (portée par l'AXE, pas la mesure)

- La baseline vit dans `data/axes.json` (`baseline_reel` + `source_baseline`) : une seule
  réalité partagée entre les candidats d'un même axe. Ne jamais la dupliquer sur les mesures.
- Uniquement du **chiffrable et sourçable** : INSEE, budget de l'État, loi votée,
  `service-public.gouv.fr`, `impots.gouv.fr`. **Jamais** de qualificatif politique.
- Vérifier les chiffres susceptibles d'avoir changé (barèmes, taux) via une recherche web datée.
- Indiquer le niveau de fiabilité (vérifié / stable à reconfirmer).

## Étape 7 — Classer dans le socle

- Rattacher chaque mesure aux `thematiques` (niveau fin) de `data/taxonomie.json`
  (**multi-étiquetage autorisé** ; le méta-thème se déduit du parent de la thématique).
- Respecter `data/choix-editoriaux.md` et le **test de renversement** : le classement doit tenir
  même si l'étiquette du parti est masquée.

## Étape 8 — Committer

- Ajouter : source brute archivée + `<id>.md` + `<id>.json`. Message de commit horodaté.
- Mettre à jour `TODO.md` et, si un nouveau cas de figure apparaît (nouveau type de source,
  nouveau piège), **enrichir CE document**.

## Règles d'or (résumé pour un agent sans contexte)

1. **Vérifier la source d'abord** (2027 ? officielle ? bon périmètre ? piège coalition/législatives ?).
2. **Moindre coût** : PDF texte unique > page unique > site paginé (curl en masse) > fetch page-par-page (éviter).
3. **Fidélité absolue** : verbatim, ordre source, QC ≥ 10 échantillons.
4. **Même format pour tous** → comparaison non biaisée.
5. **En cas d'extraction incertaine** (scan, colonnes non numérotées) : prévenir l'utilisateur,
   ne pas deviner, proposer un `.md` relu.
