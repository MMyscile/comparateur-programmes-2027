import fs from "node:fs";
import path from "node:path";
import type {
  Axe,
  Candidat,
  CandidatFile,
  Mesure,
  Taxonomie,
  Theme,
  ThematiqueInfo,
} from "./types";

const DATA_DIR = path.join(process.cwd(), "data");

function readJSON<T>(relPath: string): T {
  const full = path.join(DATA_DIR, relPath);
  return JSON.parse(fs.readFileSync(full, "utf-8")) as T;
}

export function getTaxonomie(): Taxonomie {
  return readJSON<Taxonomie>("taxonomie.json");
}

export interface SectionChoixEditoriaux {
  titre: string;
  contenu: string;
  sousSections: { titre: string; contenu: string }[];
}

export interface ChoixEditoriaux {
  intro: string;
  sections: SectionChoixEditoriaux[];
}

/**
 * Contenu de data/choix-editoriaux.md (règle de mapping, garde-fou n°2),
 * découpé par sections `##` et sous-sections `###` pour que la page
 * Méthodologie puisse replier les décisions détaillées.
 */
export function getChoixEditoriaux(): ChoixEditoriaux {
  const raw = fs.readFileSync(path.join(DATA_DIR, "choix-editoriaux.md"), "utf-8");
  const nettoie = (s: string) => s.replace(/\n---\s*$/, "").trim();
  const [intro, ...blocs] = raw.replace(/^# .*\n/, "").split(/\n## /);
  return {
    intro: nettoie(intro),
    sections: blocs.map((bloc) => {
      const [tete, ...sous] = bloc.split(/\n### /);
      const [titre, ...corps] = tete.split("\n");
      return {
        titre: titre.trim(),
        contenu: nettoie(corps.join("\n")),
        sousSections: sous.map((s) => {
          const [sousTitre, ...sousCorps] = s.split("\n");
          return { titre: sousTitre.trim(), contenu: nettoie(sousCorps.join("\n")) };
        }),
      };
    }),
  };
}

export function getAxes(): Axe[] {
  const { axes } = readJSON<{ axes: Axe[] }>("axes.json");
  return axes;
}

export function getCandidatFiles(): CandidatFile[] {
  const dir = path.join(DATA_DIR, "candidats");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")) as CandidatFile);
}

export function getCandidats(): Candidat[] {
  return getCandidatFiles().map((f) => f.candidat);
}

export function getMesures(): Mesure[] {
  return getCandidatFiles().flatMap((f) => f.mesures);
}

/** Index plat thématique -> { label, méta parent }. */
export function getThematiqueIndex(): Record<string, ThematiqueInfo> {
  const index: Record<string, ThematiqueInfo> = {};
  for (const t of getTaxonomie().themes) {
    for (const th of t.thematiques ?? []) {
      index[th.id] = { label: th.label, meta: t.id };
    }
  }
  return index;
}

/** Méta-thèmes réellement couverts (via le méta parent des thématiques utilisées). */
export function getThemesCouverts(): Theme[] {
  const index = getThematiqueIndex();
  const metas = new Set(
    getMesures().flatMap((m) => m.thematiques.map((th) => index[th]?.meta).filter(Boolean))
  );
  return getTaxonomie().themes.filter((t) => metas.has(t.id));
}
