"use client";

import { useMemo, useState } from "react";
import type { Axe, Candidat, Mesure, Theme, ThematiqueInfo } from "@/lib/types";

/**
 * Garde-fou n°4 — bouton de correction. Sans backend : on ouvre une issue
 * GitHub pré-remplie. Remplacer OWNER par le dépôt réel une fois publié.
 */
const REPO_ISSUES = "https://github.com/OWNER/comparateur-programmes-2027/issues/new";

const COULEUR_CANDIDAT: Record<string, string> = {
  ecologistes: "border-eelv/50",
  lfi: "border-lfi/50",
};

const ETAT_LABEL: Record<string, string> = {
  mur: "Mûr",
  ebauche: "Ébauche",
  perime: "Périmé",
  "pas-encore": "Pas encore",
};

interface Props {
  themes: Theme[];
  axes: Axe[];
  candidats: Candidat[];
  mesures: Mesure[];
  thematiques: Record<string, ThematiqueInfo>;
}

export default function Comparateur({ themes, axes, candidats, mesures, thematiques }: Props) {
  const [themeId, setThemeId] = useState<string>("all");
  const [candidatId, setCandidatId] = useState<string>("all");

  const themeLabel = useMemo(() => new Map(themes.map((t) => [t.id, t.label])), [themes]);
  const candidatById = useMemo(() => new Map(candidats.map((c) => [c.id, c])), [candidats]);
  const axesTries = useMemo(
    () => [...axes].sort((a, b) => (a.ordre ?? 0) - (b.ordre ?? 0)),
    [axes]
  );

  // Filtrage côté client : par méta-thème (via le parent des thématiques) et par candidat.
  const visibles = useMemo(
    () =>
      mesures.filter(
        (m) =>
          (themeId === "all" || m.thematiques.some((th) => thematiques[th]?.meta === themeId)) &&
          (candidatId === "all" || m.candidat === candidatId)
      ),
    [mesures, themeId, candidatId, thematiques]
  );

  // Regroupement : axe -> candidat -> propositions.
  const parAxe = useMemo(() => {
    const map = new Map<string, Map<string, Mesure[]>>();
    for (const m of visibles) {
      if (!map.has(m.axe)) map.set(m.axe, new Map());
      const parCand = map.get(m.axe)!;
      if (!parCand.has(m.candidat)) parCand.set(m.candidat, []);
      parCand.get(m.candidat)!.push(m);
    }
    return map;
  }, [visibles]);

  // Axes visibles, regroupés par thème et ordonnés.
  const sections = useMemo(() => {
    const parTheme = new Map<string, Axe[]>();
    for (const axe of axesTries) {
      if (!parAxe.has(axe.id)) continue;
      if (!parTheme.has(axe.theme)) parTheme.set(axe.theme, []);
      parTheme.get(axe.theme)!.push(axe);
    }
    return parTheme;
  }, [axesTries, parAxe]);

  const totalVisible = visibles.length;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end gap-4 rounded-lg border border-slate-200 bg-white p-4">
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-slate-700">Thème</span>
          <select
            className="rounded border border-slate-300 px-2 py-1"
            value={themeId}
            onChange={(e) => setThemeId(e.target.value)}
          >
            <option value="all">Tous les thèmes</option>
            {themes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-slate-700">Candidat</span>
          <select
            className="rounded border border-slate-300 px-2 py-1"
            value={candidatId}
            onChange={(e) => setCandidatId(e.target.value)}
          >
            <option value="all">Tous les candidats</option>
            {candidats.map((c) => (
              <option key={c.id} value={c.id}>
                {c.parti}
              </option>
            ))}
          </select>
        </label>

        <p className="ml-auto text-sm text-slate-500">
          {totalVisible} proposition{totalVisible > 1 ? "s" : ""}
        </p>
      </div>

      {themeId !== "all" && !axes.some((a) => a.theme === themeId) && (
        <p className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-900">
          Filtré sur <strong>{themeLabel.get(themeId) ?? themeId}</strong> : ce méta-thème n&apos;a
          pas encore d&apos;axe propre. Les propositions concernées s&apos;affichent sous l&apos;axe
          où elles figurent dans le programme (souvent un autre méta-thème).
        </p>
      )}

      {sections.size === 0 && (
        <p className="rounded-lg border border-slate-200 bg-white p-6 text-slate-500">
          Aucune proposition ne correspond à ce filtre.
        </p>
      )}

      {[...sections.entries()].map(([tid, axesTheme]) => (
        <section key={tid} className="space-y-4">
          <h2 className="text-xl font-semibold">{themeLabel.get(tid) ?? tid}</h2>

          {axesTheme.map((axe) => {
            const parCand = parAxe.get(axe.id)!;
            return (
              <article
                key={axe.id}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white"
              >
                <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <h3 className="font-medium text-slate-800">{axe.label}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    <span className="font-medium text-slate-600">Écart : </span>
                    {axe.ecart_synthese}
                  </p>
                </div>

                <div className="grid gap-px bg-slate-100 md:grid-cols-2">
                  {candidats
                    .filter((c) => parCand.has(c.id))
                    .map((c) => {
                      const props = parCand.get(c.id)!;
                      return (
                        <div
                          key={c.id}
                          className={`border-l-4 bg-white p-4 ${
                            COULEUR_CANDIDAT[c.id] ?? "border-slate-300"
                          }`}
                        >
                          <details open={props.length <= 1}>
                            <summary className="cursor-pointer select-none list-none">
                              <span className="text-sm font-semibold">{c.parti}</span>
                              <span className="ml-2 text-xs text-slate-500">
                                {props.length} proposition{props.length > 1 ? "s" : ""} ▾
                              </span>
                            </summary>

                            <ul className="mt-3 space-y-3">
                              {props.map((m) => (
                                <li key={m.id} className="border-t border-slate-100 pt-3 first:border-0 first:pt-0">
                                  <div className="mb-1 flex flex-wrap items-center gap-2">
                                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                                      {ETAT_LABEL[m.etat_maturite] ?? m.etat_maturite}
                                    </span>
                                    {m.synthese && (
                                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
                                        synthèse — détail à venir
                                      </span>
                                    )}
                                  </div>

                                  <blockquote className="text-sm leading-relaxed text-slate-700">
                                    « {m.verbatim} »
                                  </blockquote>

                                  <div className="mt-2 flex flex-wrap gap-1">
                                    {m.thematiques.map((t, i) => (
                                      <span
                                        key={t}
                                        className={`rounded-full px-2 py-0.5 text-xs ${
                                          i === 0
                                            ? "bg-slate-800 text-white"
                                            : "bg-slate-100 text-slate-600"
                                        }`}
                                      >
                                        {thematiques[t]?.label ?? t}
                                      </span>
                                    ))}
                                  </div>

                                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                                    <a
                                      href={m.source_url}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-blue-700 underline"
                                    >
                                      Source ({m.rubrique_origine})
                                    </a>
                                    <a
                                      href={`${REPO_ISSUES}?title=${encodeURIComponent(
                                        `Correction ${m.id}`
                                      )}&body=${encodeURIComponent(`Proposition : ${m.id}\nProblème : `)}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-slate-400 underline hover:text-slate-600"
                                    >
                                      Signaler une erreur de classement
                                    </a>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </div>
                      );
                    })}
                </div>

                <div className="border-t border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-reel">
                    Ce qui est fait aujourd&apos;hui
                  </p>
                  <p className="mt-1 text-sm text-slate-700">{axe.baseline_reel}</p>
                  <a
                    href={axe.source_baseline}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-xs text-blue-700 underline"
                  >
                    Référence
                  </a>
                </div>
              </article>
            );
          })}
        </section>
      ))}
    </div>
  );
}
