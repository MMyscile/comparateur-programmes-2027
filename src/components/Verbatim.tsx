"use client";

import { useId, useMemo, useState } from "react";
import type { TermeGlossaire } from "@/lib/types";

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Infobulle de glossaire sur un terme technique.
 * Accessible : s'ouvre au survol, au focus clavier ET au tap (bouton),
 * se ferme à Échap. Non bloquante (pas de dialog modal).
 */
function TermeInfobulle({ terme, entree }: { terme: string; entree: TermeGlossaire }) {
  const [survol, setSurvol] = useState(false);
  const [focus, setFocus] = useState(false);
  const [epingle, setEpingle] = useState(false);
  const id = useId();
  const ouvert = survol || focus || epingle;

  return (
    <span className="relative inline-block">
      <button
        type="button"
        aria-describedby={ouvert ? id : undefined}
        onMouseEnter={() => setSurvol(true)}
        onMouseLeave={() => setSurvol(false)}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setFocus(false);
          setEpingle(false);
        }}
        onClick={() => setEpingle((e) => !e)}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setEpingle(false);
            setSurvol(false);
            e.currentTarget.blur();
          }
        }}
        className="cursor-help font-medium text-slate-900 underline decoration-dotted decoration-slate-400 underline-offset-2 hover:decoration-slate-700 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        {terme}
      </button>
      {ouvert && (
        <span
          role="tooltip"
          id={id}
          className="absolute left-0 top-full z-30 mt-1 block w-64 rounded-md border border-slate-200 bg-white p-3 text-left text-xs font-normal not-italic leading-relaxed text-slate-700 shadow-lg"
        >
          <span className="mb-0.5 block font-semibold text-slate-900">{entree.terme}</span>
          {entree.definition}
          {entree.source_url && (
            <a
              href={entree.source_url}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-blue-700 underline"
            >
              Source
            </a>
          )}
        </span>
      )}
    </span>
  );
}

/**
 * Rend un verbatim en repérant les termes du glossaire (surcouche non
 * destructive : le texte affiché reste identique au JSON, garde-fou n°1).
 */
export default function Verbatim({
  texte,
  glossaire,
}: {
  texte: string;
  glossaire: TermeGlossaire[];
}) {
  const { regex, index } = useMemo(() => {
    if (glossaire.length === 0) return { regex: null, index: new Map<string, TermeGlossaire>() };
    const idx = new Map(glossaire.map((t) => [t.terme.toLowerCase(), t]));
    // Termes les plus longs d'abord (préfère « numerus clausus » à un mot isolé).
    const motifs = [...glossaire]
      .sort((a, b) => b.terme.length - a.terme.length)
      .map((t) => escapeRegExp(t.terme));
    return { regex: new RegExp(`(${motifs.join("|")})`, "gi"), index: idx };
  }, [glossaire]);

  if (!regex) return <>{texte}</>;

  // split avec groupe capturant : les termes repérés tombent sur les index impairs.
  const morceaux = texte.split(regex);
  return (
    <>
      {morceaux.map((morceau, i) => {
        const entree = index.get(morceau.toLowerCase());
        return entree ? (
          <TermeInfobulle key={i} terme={morceau} entree={entree} />
        ) : (
          <span key={i}>{morceau}</span>
        );
      })}
    </>
  );
}
