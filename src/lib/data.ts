import fs from "node:fs";
import path from "node:path";
import type { Axe, Candidat, CandidatFile, Mesure, Taxonomie, Theme } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");

function readJSON<T>(relPath: string): T {
  const full = path.join(DATA_DIR, relPath);
  return JSON.parse(fs.readFileSync(full, "utf-8")) as T;
}

export function getTaxonomie(): Taxonomie {
  return readJSON<Taxonomie>("taxonomie.json");
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

/** Thèmes réellement couverts par au moins une mesure (V1 : seuls ceux-là sont exposés). */
export function getThemesCouverts(): Theme[] {
  const ids = new Set(getMesures().flatMap((m) => m.themes));
  return getTaxonomie().themes.filter((t) => ids.has(t.id));
}
