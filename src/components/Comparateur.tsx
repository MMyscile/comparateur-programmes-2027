"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Axe, Candidat, Mesure, Theme, ThematiqueInfo } from "@/lib/types";

/**
 * Garde-fou n°4 — bouton de correction. Sans backend : on ouvre une issue
 * GitHub pré-remplie sur le dépôt public.
 */
const REPO_ISSUES = "https://github.com/MMyscile/comparateur-programmes-2027/issues/new";

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
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [candidatId, setCandidatId] = useState<string>("all");
  const [panneauOuvert, setPanneauOuvert] = useState(false);

  // Filtres partageables via l'URL (?t=tag1,tag2&c=candidat). Site statique :
  // lecture au montage côté client, écriture via replaceState (pas de re-render Next).
  const premierRendu = useRef(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("t");
    if (t) {
      const valides = t.split(",").filter((id) => thematiques[id]);
      if (valides.length > 0) setSelectedTags(new Set(valides));
    }
    const c = params.get("c");
    if (c && candidats.some((cand) => cand.id === c)) setCandidatId(c);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (premierRendu.current) {
      premierRendu.current = false;
      return;
    }
    const params = new URLSearchParams(window.location.search);
    if (selectedTags.size > 0) params.set("t", [...selectedTags].join(","));
    else params.delete("t");
    if (candidatId !== "all") params.set("c", candidatId);
    else params.delete("c");
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [selectedTags, candidatId]);

  const themeLabel = useMemo(() => new Map(themes.map((t) => [t.id, t.label])), [themes]);
  const axesTries = useMemo(
    () => [...axes].sort((a, b) => (a.ordre ?? 0) - (b.ordre ?? 0)),
    [axes]
  );

  // Thématiques réellement utilisées, groupées par méta-thème (pour le filtre).
  const groupesTags = useMemo(() => {
    const used = new Set(mesures.flatMap((m) => m.thematiques));
    return themes
      .map((t) => ({ meta: t, tags: (t.thematiques ?? []).filter((th) => used.has(th.id)) }))
      .filter((g) => g.tags.length > 0);
  }, [themes, mesures]);

  // Compteur de facettes : nb de propositions par thématique, dans le périmètre
  // du candidat sélectionné (indépendant des thématiques cochées).
  const compteParTag = useMemo(() => {
    const map = new Map<string, number>();
    for (const m of mesures) {
      if (candidatId !== "all" && m.candidat !== candidatId) continue;
      for (const t of m.thematiques) map.set(t, (map.get(t) ?? 0) + 1);
    }
    return map;
  }, [mesures, candidatId]);

  const tagFilterActif = selectedTags.size > 0;

  // Filtrage côté client : par thématiques cochées (union) et par candidat.
  const visibles = useMemo(
    () =>
      mesures.filter(
        (m) =>
          (!tagFilterActif || m.thematiques.some((t) => selectedTags.has(t))) &&
          (candidatId === "all" || m.candidat === candidatId)
      ),
    [mesures, selectedTags, tagFilterActif, candidatId]
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

  const sections = useMemo(() => {
    const parTheme = new Map<string, Axe[]>();
    for (const axe of axesTries) {
      if (!parAxe.has(axe.id)) continue;
      if (!parTheme.has(axe.theme)) parTheme.set(axe.theme, []);
      parTheme.get(axe.theme)!.push(axe);
    }
    return parTheme;
  }, [axesTries, parAxe]);

  function toggleTag(id: string) {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleMeta(tags: { id: string }[], toutCoche: boolean) {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      for (const th of tags) {
        if (toutCoche) next.delete(th.id);
        else next.add(th.id);
      }
      return next;
    });
  }

  const totalVisible = visibles.length;

  return (
    <div className="space-y-6">
      <div className="sticky top-0 z-20 space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setPanneauOuvert((o) => !o)}
            aria-expanded={panneauOuvert}
            className="flex items-center gap-2 rounded border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Filtrer par thématique
            {tagFilterActif && (
              <span className="rounded-full bg-slate-800 px-1.5 text-xs text-white">
                {selectedTags.size}
              </span>
            )}
            <span aria-hidden>{panneauOuvert ? "▴" : "▾"}</span>
          </button>
          <div className="flex items-center gap-2 text-sm">
            <span id="label-candidat" className="font-medium text-slate-700">Candidat</span>
            <div role="group" aria-labelledby="label-candidat" className="inline-flex overflow-hidden rounded border border-slate-300">
              {[{ id: "all", parti: "Tous" }, ...candidats].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCandidatId(c.id)}
                  aria-pressed={candidatId === c.id}
                  className={`border-l border-slate-300 px-3 py-1.5 first:border-l-0 ${
                    candidatId === c.id
                      ? "bg-slate-800 font-medium text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {c.parti}
                </button>
              ))}
            </div>
          </div>
        </div>

        {tagFilterActif && (
          <div className="flex flex-wrap items-center gap-2">
            {[...selectedTags].map((t) => (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700 hover:bg-slate-200"
              >
                {thematiques[t]?.label ?? t}
                <span aria-hidden className="text-slate-400">×</span>
                <span className="sr-only">— retirer ce filtre</span>
              </button>
            ))}
            <button
              onClick={() => setSelectedTags(new Set())}
              className="text-xs text-blue-700 underline"
            >
              Tout effacer
            </button>
          </div>
        )}

        {panneauOuvert && (
          <div className="grid max-h-[60vh] gap-4 overflow-y-auto sm:grid-cols-2 lg:grid-cols-3">
            {groupesTags.map(({ meta, tags }) => {
              const toutCoche = tags.every((th) => selectedTags.has(th.id));
              const partiel = !toutCoche && tags.some((th) => selectedTags.has(th.id));
              return (
                <fieldset key={meta.id} className="rounded-md border border-slate-100 p-3">
                  <legend className="px-1">
                    <label className="flex cursor-pointer items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <input
                        type="checkbox"
                        checked={toutCoche}
                        ref={(el) => {
                          if (el) el.indeterminate = partiel;
                        }}
                        onChange={() => toggleMeta(tags, toutCoche)}
                      />
                      {meta.label}
                    </label>
                  </legend>
                  <div className="mt-1 space-y-1">
                    {tags.map((th) => {
                      const n = compteParTag.get(th.id) ?? 0;
                      return (
                        <label
                          key={th.id}
                          className={`flex cursor-pointer items-center gap-2 text-sm ${
                            n === 0 ? "text-slate-400" : "text-slate-700"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedTags.has(th.id)}
                            onChange={() => toggleTag(th.id)}
                          />
                          {th.label}
                          <span className="text-xs text-slate-400">({n})</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              );
            })}
          </div>
        )}

        <p aria-live="polite" className="text-sm text-slate-500">
          {totalVisible} proposition{totalVisible > 1 ? "s" : ""} affichée
          {totalVisible > 1 ? "s" : ""}
          {tagFilterActif ? " (filtre actif)" : ""}.
        </p>
      </div>

      {sections.size === 0 && (
        <p className="rounded-lg border border-slate-200 bg-white p-6 text-slate-500">
          Aucune proposition ne correspond aux thématiques sélectionnées.
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
                                <li
                                  key={m.id}
                                  className="border-t border-slate-100 pt-3 first:border-0 first:pt-0"
                                >
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
                                    {m.thematiques.map((t, i) => {
                                      const actif = selectedTags.has(t);
                                      return (
                                        <button
                                          key={t}
                                          onClick={() => toggleTag(t)}
                                          aria-pressed={actif}
                                          title={
                                            actif
                                              ? "Retirer cette thématique du filtre"
                                              : "Filtrer sur cette thématique"
                                          }
                                          className={`rounded-full px-2 py-0.5 text-xs ${
                                            actif
                                              ? "bg-blue-700 text-white ring-1 ring-blue-700 ring-offset-1"
                                              : i === 0
                                                ? "bg-slate-800 text-white hover:bg-slate-600"
                                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                          }`}
                                        >
                                          {thematiques[t]?.label ?? t}
                                        </button>
                                      );
                                    })}
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
                  {(Array.isArray(axe.source_baseline)
                    ? axe.source_baseline
                    : [axe.source_baseline]
                  ).map((url, i, tab) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="mr-3 mt-1 inline-block text-xs text-blue-700 underline"
                    >
                      {tab.length > 1 ? `Référence ${i + 1}` : "Référence"}
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </section>
      ))}
    </div>
  );
}
