# Choix éditoriaux du socle de méta-thèmes

> Ce fichier documente les décisions de cadrage derrière `taxonomie.json`.
> Objectif : **honnêteté traçable** (CLAUDE.md), pas neutralité impossible.
> Chaque choix est réversible — la colonne « Pour revenir dessus » dit quoi éditer.
>
> Dernière mise à jour : 2026-07-25 · Taxonomie v0.1.0

## Principes qui gouvernent tous les choix

1. **Neutralité des intitulés (test de renversement, garde-fou n°3).** Les méta-thèmes sont des *domaines de politique publique* (logique quasi-ministérielle), jamais des cadrages de parti. Sont **exclus** par principe : « prospérité écologique », « révolution citoyenne », « planification écologique », « harmonie avec la nature », etc. Un classement doit tenir étiquette de parti masquée.
2. **Classer par objectif + levier principal**, pas par mot-clé. Une mesure va dans le domaine qu'elle vise et actionne d'abord.
3. **Le multi-étiquetage est la soupape.** Une mesure peut porter plusieurs `themes`. Les cas-frontières se cotaguent au lieu d'être tranchés arbitrairement (voir champ `voir_aussi` de chaque thème).

---

## Décisions à assumer (et comment les rouvrir)

### 1. Grain : 15 méta-thèmes
- **Décision.** 15 domaines.
- **Alternatives.** ~10 (fusions) ; ou plus fin (2e niveau de sous-thèmes).
- **Pourquoi.** Assez fin pour que 66 chapitres (Écologistes) et 18 (LFI) se rangent proprement ; assez large pour rester stable dans le temps et accueillir d'autres programmes.
- **Pour revenir dessus.** Fusionner/scinder des objets du tableau `themes` dans `taxonomie.json`.

### 2. Santé environnementale → `sante` (pas `ecologie-climat-energie`)
- **Décision.** Les mesures « toxiques/polluants » (ex. Écologistes ch. 28) sont classées en **Santé**, avec cotag `ecologie-climat-energie` recommandé.
- **Alternative.** Les mettre en Écologie.
- **Pourquoi.** Leur objectif premier est un **résultat sanitaire humain** ; le levier est la prévention/santé. Le multi-étiquetage évite de perdre la dimension écologique.
- **Pour revenir dessus.** Déplacer le critère « santé environnementale » de `sante` vers `ecologie-climat-energie`, ou en faire un thème à part.

### 3. Médias → `culture-sport-medias` (pas `justice-securite-libertes`)
- **Décision.** Pluralisme/indépendance des médias rangés avec la Culture.
- **Alternative.** Les traiter comme une liberté publique (thème 2).
- **Pourquoi.** Continuité avec la politique culturelle et de l'information ; évite de sur-charger le thème sécurité/libertés.
- **Pour revenir dessus.** Déplacer le critère « Médias » vers `justice-securite-libertes`.

### 4. Laïcité → `institutions-democratie`
- **Décision.** Rangée avec les institutions et la vie publique.
- **Alternatives.** `justice-securite-libertes` ; ou `egalites-discriminations`.
- **Pourquoi.** Traitée comme principe d'organisation de la République plutôt que comme enjeu d'ordre public ou d'égalité.
- **Pour revenir dessus.** Déplacer le critère « Laïcité ».

### 5. Immigration & asile = thème autonome (n°13)
- **Décision.** Domaine séparé, non fondu dans sécurité.
- **Alternative.** L'intégrer à `justice-securite-libertes`.
- **Pourquoi.** Indispensable au test de renversement : un programme (RN, LR…) qui en fait un axe majeur doit être visible sans être réinterprété via le prisme sécuritaire.
- **Pour revenir dessus.** Supprimer le thème et déplacer ses critères — mais **déconseillé** (affaiblit la neutralité).

### 6. Numérique & technologies = thème autonome (n°15)
- **Décision.** Domaine séparé.
- **Alternative.** Le fondre dans `economie-travail-entreprises` (ou éclater entre économie/sécurité).
- **Pourquoi.** Évite d'invisibiliser les programmes qui en font un axe ; enjeu transversal (souveraineté, IA, données).
- **Pour revenir dessus.** Fusionner avec l'économie.

### 7. Europe + international + défense regroupés (n°14)
- **Décision.** Un seul domaine.
- **Alternative.** Scinder « Europe » d'un côté, « International & défense » de l'autre.
- **Pourquoi.** Masse de mesures modérée à ce stade ; regroupement lisible. À scinder si le volume le justifie.
- **Pour revenir dessus.** Créer un thème `europe` distinct.

### 8. Agriculture & alimentation séparée de l'écologie (n°10 vs n°9)
- **Décision.** Domaine propre.
- **Alternative.** Fondre dans `ecologie-climat-energie`.
- **Pourquoi.** Enjeux de revenus paysans, foncier et alimentation débordent l'écologie ; poids majeur dans le débat.
- **Pour revenir dessus.** Fusionner les deux thèmes.

### 9. Eau et sols → `ecologie-climat-energie` (pas `agriculture-alimentation`)
- **Décision.** Ressources (eau potable, sols) classées en Écologie.
- **Alternative.** En Agriculture (usage agricole dominant de l'eau/des sols).
- **Pourquoi.** Traitées comme ressources et communs, en amont des usages.
- **Pour revenir dessus.** Déplacer les critères « Eau, sols » vers `agriculture-alimentation`.

### 10. Quartiers populaires → `logement-transports-territoires` (pas `egalites-discriminations`)
- **Décision.** Rangés avec l'aménagement du territoire.
- **Alternative.** En Égalités (dimension discrimination territoriale/sociale).
- **Pourquoi.** Traités comme enjeu d'égalité **territoriale** (avec ruralités et Outre-mer), pas identitaire.
- **Pour revenir dessus.** Déplacer le critère « quartiers populaires ».

### 11. Pêche/sylviculture : activité vs écosystème
- **Décision.** L'**activité** (revenus, filière) → `agriculture-alimentation` ; l'**écosystème** (océan, forêt) → `ecologie-climat-energie`.
- **Pourquoi.** Sépare le levier économique du levier de protection. Cas typique de cotag.
- **Pour revenir dessus.** Fusionner le traitement dans un seul thème.

---

## Rattachements sources (traçabilité)

Correspondance chapitres source → méta-thèmes (preuve de couverture). À maintenir quand une source est ajoutée.

| Méta-thème | Écologistes (ch.) | LFI — L'Avenir en Commun 2025 (ch.) |
|---|---|---|
| institutions-democratie | 47, 48, 49, 54, 59 | 1, (3) |
| justice-securite-libertes | 50, 51, 52, 53, 57, 58 | 4 |
| economie-travail-entreprises | 13, 14, 15, 16, 19, 20 | 2, 8, 9 |
| fiscalite-budget-finances | 17, 18 | 6 |
| protection-sociale-solidarites | 31, 32, 33, 34, 35, 36, 37, 39 | 7 |
| sante | 28, 29, 30 | 15 |
| education-recherche-jeunesse | 23, 24, 25 | 5 |
| culture-sport-medias | 26, 27, 55 | 11 |
| ecologie-climat-energie | 1, 4, 5, 6, 7, 8, 9, 10 | 12, 13, 14 |
| agriculture-alimentation | 11, 12 | *(dispersé dans 9/12)* |
| logement-transports-territoires | 2, 3, 22, 44, 45, 46 | *(transversal, pas de chapitre dédié)* |
| egalites-discriminations | 38, 40, 41, 42, 43 | (10) |
| immigration-asile | 56 | (10) |
| europe-international-defense | 60, 61, 62, 63, 64, 65, 66 | 16, 17, 18 |
| numerique-technologies | 21 | *(transversal, pas de chapitre dédié)* |

> Parenthèses = rattachement partiel (le chapitre source couvre plusieurs domaines).
> Les 66 chapitres Écologistes sont tous couverts ; les 18 chapitres LFI aussi (certains éclatés sur plusieurs domaines). Les mentions « transversal/dispersé » signalent des **vides de structure** côté LFI — information utile, pas une erreur.

## Thématique « Justice civile & accès au droit » (`justice-civile`) — ajoutée 2026-07-28

**Critère de rattachement** : organisation et moyens de la justice **non pénale** — justice civile,
prud'homale et sociale (contentieux du travail, de la Sécurité sociale), aide juridictionnelle et
accès au droit. La chaîne pénale (poursuites, jugement pénal, parquet) reste sous `justice-penale`.

**Pourquoi** : lors du détail des axes justice (extraction 2026-07-28), des mesures EELV sur les
prud'hommes et le contentieux de la Sécurité sociale étaient taguées `justice-penale` faute de
thématique adaptée — un filtre « justice pénale » affichait du droit du travail. Constat consigné
au §4.7 de `data/drafts/justice.rapport.md`.

**Test de renversement** : le critère (pénal vs civil/social) est une distinction juridique
standard, indépendante de l'étiquette partisane.

## Cas-frontière tabac (`lfi-drogues-07`) — tranché 2026-07-28

Mesure LFI « trafic de cigarettes / jeunesse zéro tabac » (chapitre 15.3 « Addictions et drogues »).
Cotag `addictions` (principal — le fond : le tabac n'est pas un stupéfiant) + `drogues-stupefiants`
(rattachement au chapitre source, et cohérence avec l'axe `just-drogues` où la mesure s'affiche).
Sans le second tag, la mesure était invisible sous le filtre « Drogues & stupéfiants » alors
qu'elle vit dans l'axe drogues — paradoxe corrigé par le multi-étiquetage.
