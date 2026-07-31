export type EtatMaturite = "mur" | "ebauche" | "perime" | "pas-encore";

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
  etat_maturite: EtatMaturite;
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
  /** Optionnel : source de la définition (traçabilité). */
  source_url?: string;
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
