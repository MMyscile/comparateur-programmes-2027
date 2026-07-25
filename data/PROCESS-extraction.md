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
- **PDF multi-colonnes** : `pdftotext -layout` place les colonnes côte à côte → l'ordre de lecture
  est mélangé. Voir §2.

Toujours **archiver les fichiers bruts récupérés** (`tar -czf data/sources/raw/<id>_....tar.gz …`).

## Étape 2 — Reconstituer l'ordre de lecture (PDF multi-colonnes)

C'est le point le plus risqué. Règle : le texte doit finir dans l'**ordre où un humain le lit**.
- Repère fiable : la **numérotation des propositions** (1, 2, 3…). Si les propositions sont
  numérotées et se suivent, on peut réordonner sans ambiguïté (cas du programme Écologistes,
  colonnes gauche puis droite).
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
  (artefacts de balisage / en-têtes de page répétés).

## Étape 4 — Contrôle qualité de fidélité (OBLIGATOIRE)

- Comparer **≥ 10 échantillons** tirés au hasard entre le texte extrait et la source
  originale (page live ré-téléchargée, ou pages du PDF), **caractère par caractère**.
- Consigner le résultat (ex. « 10/10 identiques »). Si divergence : corriger l'extracteur, pas le texte.

## Étape 5 — Structurer les mesures en JSON

Créer `data/candidats/<id>.json` : un objet `candidat` + un tableau `mesures`.
Schéma d'une mesure (cf. CLAUDE.md) :
```json
{
  "id": "<id>-<theme>-NN",
  "candidat": "<id>",
  "themes": ["<id-theme de data/taxonomie.json>", "…"],
  "verbatim": "texte mot-pour-mot ; élisions marquées par […]",
  "source_url": "https://… (ou vide si PDF sans URL publique)",
  "rubrique_origine": "Chapitre X — Titre (proposition N) ; réf. page",
  "date_publication": "AAAA-MM-JJ ou AAAA-MM",
  "etat_maturite": "mur | ebauche | perime | pas-encore",
  "baseline_reel": "état actuel chiffré et sourçable (voir étape 6)",
  "source_baseline": "https://… (INSEE, budget, loi, service-public/impots.gouv)"
}
```

## Étape 6 — Baseline « ce qui est fait »

- Uniquement du **chiffrable et sourçable** : INSEE, budget de l'État, loi votée,
  `service-public.gouv.fr`, `impots.gouv.fr`. **Jamais** de qualificatif politique.
- Vérifier les chiffres susceptibles d'avoir changé (barèmes, taux) via une recherche web datée.
- Indiquer le niveau de fiabilité (vérifié / stable à reconfirmer).

## Étape 7 — Classer dans le socle

- Rattacher chaque mesure aux `themes` de `data/taxonomie.json` (**multi-étiquetage autorisé**).
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
