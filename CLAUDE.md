# Comparateur de programmes politiques — Présidentielle 2027

Instructions de projet pour Claude Code. À lire avant toute proposition ou modification.

## Mission

Site web qui juxtapose les programmes des candidats à la présidentielle 2027, thème par thème,
et affiche à côté de chaque proposition « ce qui est fait actuellement » — pour transformer les
slogans en écarts au réel et rendre la lecture plus claire.

## Principe fondateur (NON NÉGOCIABLE)

Comparer, c'est cadrer. Il n'existe pas de manière neutre de comparer des programmes : le choix des
thèmes, du grain et du classement est toujours un acte éditorial. Ce projet **n'essaie pas d'être
objectif** — il assume une posture d'éditeur et vise une **honnêteté traçable**, pas une neutralité
impossible.

→ Instruction à l'assistant : ne jamais proposer de solution qui prétend à l'objectivité ou qui masque
les choix éditoriaux. Toute fonctionnalité doit servir la traçabilité et la vérifiabilité, pas les cacher.

## Stack technique

- **Next.js** (App Router, TypeScript) — rendu statique (SSG).
- **Tailwind CSS** pour le styling.
- **Données = fichiers JSON versionnés dans git** (pas de base de données). Git fournit gratuitement
  l'horodatage, la traçabilité des changements et les versions datées (tags).
- **Déploiement** : Vercel (statique, gratuit).
- **Pas de backend, pas d'auth, pas de base de données** tant que le trafic ne le justifie pas.

## Commandes

- `npm run dev` — serveur de développement
- `npm run build` — build de production (statique)
- `npm run start` — sert le build
- `npm run lint` — lint

## Structure cible

```
/data                     # source de vérité (versionnée)
  /candidats/*.json       # un fichier par candidat
  taxonomie.json          # grille de méta-thèmes + critères de rattachement
/src/app                  # pages Next (App Router)
/src/components           # composants React (filtres, tableau comparatif, cellule de mesure)
/src/lib                  # chargement + typage des données
```

## Modèle de données

Unité = **le programme de campagne présidentielle d'un candidat** (jamais le corpus général du parti,
jamais les législatives).

**Grain (modèle v0.2) :** une **Mesure = UNE proposition** recopiée mot-pour-mot (jamais une
synthèse de plusieurs points — la synthèse trahit la fidélité, garde-fou n°1). Les propositions
sont regroupées par **Axe** (l'unité de comparaison éditoriale, plus fine que le méta-thème). La
baseline « ce qui est fait » vit sur l'**axe** (une seule réalité partagée entre candidats),
pas sur chaque proposition.

Mesure (proposition) — `data/candidats/*.json` :
```json
{
  "id": "string",
  "candidat": "id-candidat",
  "axe": "id-axe (voir data/axes.json)",
  "themes": ["id-theme", "..."],
  "verbatim": "texte mot-pour-mot de la proposition (jamais un résumé)",
  "source_url": "https://... (avec #page=N si PDF)",
  "rubrique_origine": "chapitre/section + page dans le programme source",
  "date_publication": "AAAA-MM-JJ",
  "etat_maturite": "mur | ebauche | perime | pas-encore",
  "synthese": "true (optionnel) = résumé d'axe en attente du détail point par point"
}
```

Axe (unité de comparaison) — `data/axes.json` :
```json
{
  "id": "string",
  "theme": "id-theme",
  "label": "intitulé de l'axe",
  "ordre": 1,
  "baseline_reel": "état actuel chiffré et sourçable",
  "source_baseline": "https://... (INSEE, budget, loi votée)",
  "ecart_synthese": "résumé éditorial de l'écart entre candidats"
}
```

Candidat : `{ id, nom, parti, programme_url, etat_programme, date_maj }`
Taxonomie : liste de thèmes `{ id, label, description, criteres_de_rattachement, voir_aussi }`

> **Source faisant foi vs miroir** : `source_url` pointe toujours vers l'original publié par le
> candidat (URL ou PDF `#page=N`). Le `.md` dans `data/sources/` n'est qu'un miroir de travail,
> jamais la source citée.

## Garde-fous (à respecter dans le code ET le contenu)

1. **Traçabilité** — toute mesure affichée expose un lien vers sa source et sa rubrique d'origine.
   Jamais de mesure sans source.
2. **Règle de mapping publiée** — la taxonomie et les critères de classement sont une page publique du site.
3. **Test de renversement** — un classement doit tenir même si l'étiquette du parti est masquée.
   C'est le rempart anti-biais ; le respecter au moment de classer.
4. **Bouton de correction** — chaque mesure offre un moyen de signaler un classement erroné
   (lien vers issue GitHub ou formulaire simple au début, pas de backend).
5. **Baseline « ce qui est fait »** — uniquement du chiffrable et sourçable (INSEE, budgets, lois votées).
   Jamais de qualificatif politique.

## États de maturité & calendrier

- Quatre états distincts, ne jamais tout ranger sous « pas de programme » :
  **mûr / ébauche / périmé / pas-encore**.
- Afficher une mention de contexte calendaire quand c'est pertinent (« à ce stade, l'absence de
  programme est la norme historique »).
- Horodater chaque extrait (`date_publication` + historique git).

## Clarté vs transparence

Le but est la clarté. Chaque mention/disclaimer protège mais alourdit la lecture. Règle :
**résumé court en surface, verbatim et texte long accessibles en un clic.** Hiérarchiser les mentions
(loyales vs défensives). Ne pas noyer l'utilisateur sous les disclaimers.

## Cadrage produit (versions, pas flux)

- On raisonne en **versions finies et datées** (tags git), pas en service perpétuel.
- **V1 = prouver le moteur** de comparaison sur 2-3 programmes déjà existants. Son but n'est PAS encore
  d'éclairer l'électeur (la matière programmatique est insuffisante à ce stade).
- Ne pas se lancer dans l'intégration exhaustive de tous les candidats en V1.
- Ne pas ajouter de fonctionnalités hors du périmètre de la version en cours.

## Conventions

- Contenu en **français**.
- **TypeScript strict**.
- Composants React fonctionnels + hooks.
- Filtrage candidat × thème **côté client**, sur les données chargées.

## À NE PAS FAIRE

- Ne pas introduire de base de données / backend / auth sans besoin réel démontré.
- Ne pas prétendre à une comparaison « objective » ni masquer les choix éditoriaux.
- Ne pas afficher une mesure sans source, ni un classement non traçable.
- Ne pas se lancer dans l'intégration massive de candidats en V1.
- Ne pas transformer le cadrage en prétexte : la priorité immédiate est de faire tourner le moteur sur
  quelques mesures réelles, pas de peaufiner l'architecture.
