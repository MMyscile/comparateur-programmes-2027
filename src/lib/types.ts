export type EtatMaturite = "mur" | "ebauche" | "perime" | "pas-encore";

/**
 * Fait daté, postérieur à la publication du programme, qui touche à ce que
 * la proposition demande (loi votée, dispositif supprimé, objectif atteint).
 *
 * Décision n° 31 : la note énonce **le fait et sa source, jamais le verdict**.
 * On écrit ce que la loi a changé ; on n'écrit pas que la mesure est dépassée —
 * c'est au lecteur de conclure, et au candidat de dire si sa demande est satisfaite.
 */
export interface FaitPosterieur {
  /** Le fait, factuel et daté. Pas de qualificatif sur la mesure. */
  texte: string;
  /** Source de niveau 1 de préférence (Légifrance, administration compétente). */
  source_url: string;
  /** Date du fait (AAAA-MM-JJ), postérieure au `date_publication` de la mesure. */
  date: string;
}

/**
 * Fait **antérieur** à la publication, sans lequel un lecteur informé
 * comprendrait la proposition de travers.
 *
 * Décision n° 32. Le cas fondateur : « renationaliser EDF et Engie » — qui sait
 * qu'EDF appartient à 100 % à l'État depuis 2023 lira la demande comme absurde,
 * alors qu'elle vise aussi Engie, restée cotée. Le fait est antérieur au
 * programme : ce n'est donc pas un `FaitPosterieur`, et il ne doit surtout pas
 * en emprunter le champ — la contrainte de date de `FaitPosterieur` est
 * précisément ce qui aurait bloqué l'erreur d'analyse du 2026-08-04.
 *
 * Même discipline que la note datée : **le fait et sa source, jamais le
 * verdict**, et jamais une explication de ce que le candidat « veut dire ».
 * Interpréter le mot d'un candidat contre sa propre définition est ce que le
 * principe fondateur interdit.
 */
export interface ContexteLecture {
  /** Le ou les faits, factuels. Pas de glose sur l'intention du candidat. */
  texte: string;
  /**
   * Source de niveau 1 de préférence. Accepte une liste : la règle « un lien par
   * fait affirmé » (CLAUDE.md, garde-fou n° 1) vaut ici comme pour les baselines.
   * Le cas fondateur en affirme deux — le capital d'EDF et celui d'Engie — qui
   * n'ont ni la même source ni la même date d'arrêté.
   */
  source_url: string | string[];
}

/** Une proposition individuelle d'un candidat (verbatim fidèle, rattachée à un axe). */
export interface Mesure {
  id: string;
  candidat: string;
  axe: string;
  /** Tags fins : une thématique par sujet concerné (la 1ère = principale). */
  thematiques: string[];
  verbatim: string;
  source_url: string;
  rubrique_origine: string;
  date_publication: string;
  /**
   * Conservé dans les données mais **plus affiché** depuis la décision n° 31 :
   * les quatre états décrivent un programme, pas une phrase.
   */
  etat_maturite: EtatMaturite;
  /** Astérisque : un fait postérieur à la publication touche cette proposition. */
  fait_posterieur?: FaitPosterieur;
  /** Astérisque : un fait antérieur sans lequel la proposition se lit de travers. */
  contexte_lecture?: ContexteLecture;
  /** true = résumé d'axe en attente du détail point par point (modèle B en cours). */
  synthese?: boolean;
}

/** Unité de comparaison éditoriale : porte la baseline « ce qui est fait » et la synthèse d'écart. */
export interface Axe {
  id: string;
  theme: string;
  label: string;
  ordre?: number;
  baseline_reel: string;
  /** Une URL, ou une liste d'URLs quand la baseline affirme plusieurs faits (un lien par fait). */
  source_baseline: string | string[];
  ecart_synthese: string;
  /** Date (AAAA-MM-JJ) du dernier passage de l'agent verificateur-sources sur cette baseline. Absent = jamais vérifié. */
  baseline_verifiee?: string;
}

export interface Candidat {
  id: string;
  nom: string;
  parti: string;
  programme_url: string;
  etat_programme: string;
  date_maj: string;
}

export interface CandidatFile {
  candidat: Candidat;
  mesures: Mesure[];
}

export interface Thematique {
  id: string;
  label: string;
}

export interface Theme {
  id: string;
  label: string;
  description: string;
  criteres_de_rattachement?: string[];
  voir_aussi?: string[];
  thematiques?: Thematique[];
}

/** Index plat d'une thématique : son libellé et son méta-thème parent. */
export interface ThematiqueInfo {
  label: string;
  meta: string;
}

export interface Taxonomie {
  version: string;
  date_maj: string;
  note: string;
  themes: Theme[];
}

/** Entrée du glossaire : un terme technique et sa définition courte (surcouche du verbatim). */
export interface TermeGlossaire {
  terme: string;
  definition: string;
  /**
   * Optionnel : source de la définition (traçabilité). Accepte une **liste**,
   * même règle que `source_baseline` — un lien par fait affirmé. Le cas qui l'a
   * imposée : « flat tax » affirme un surnom (attesté par un rapport du Sénat de
   * 2019) et un taux de 31,4 % (en vigueur depuis 2026). Aucune page ne porte les
   * deux, l'un étant ancien et l'autre récent ; n'en citer qu'une laissait l'autre
   * fait sans source.
   */
  source_url?: string | string[];
  /**
   * Portée de l'entrée. Absent (défaut) = globale : le terme est repéré dans tous
   * les verbatims. Présent = liste d'ids de mesures où la définition s'applique ;
   * ailleurs, le terme n'est pas surligné.
   *
   * Sert aux mots à sens contextuel : « Séparatisme » ou « Sécurité globale »
   * désignent les lois de 2021 dans la mesure citée, mais restent des mots
   * courants ailleurs — les surligner partout produirait un contresens.
   */
  contextes?: string[];
}
