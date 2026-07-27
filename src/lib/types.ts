export type EtatMaturite = "mur" | "ebauche" | "perime" | "pas-encore";

/** Une proposition individuelle d'un candidat (verbatim fidèle, rattachée à un axe). */
export interface Mesure {
  id: string;
  candidat: string;
  axe: string;
  themes: string[];
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
  source_baseline: string;
  ecart_synthese: string;
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

export interface Theme {
  id: string;
  label: string;
  description: string;
  criteres_de_rattachement?: string[];
  voir_aussi?: string[];
}

export interface Taxonomie {
  version: string;
  date_maj: string;
  note: string;
  themes: Theme[];
}
