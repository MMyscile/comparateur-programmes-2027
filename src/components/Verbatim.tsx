"use client";

import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { TermeGlossaire } from "@/lib/types";

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Bulle de glossaire sur un terme technique.
 *
 * Elle doit être **atteignable**, pas seulement lisible : une définition sourcée
 * dont personne ne peut ouvrir la source ne vaut pas mieux qu'une définition non
 * sourcée (garde-fous n°1 et n°2). Deux défauts corrigés le 2026-08-05 :
 *  - la bulle se fermait dès que le pointeur quittait le mot, un espace la
 *    séparant du terme → elle est maintenant **dans** la zone de survol, et le
 *    décalage vient d'un `pt-1` interne, jamais d'un vide entre les deux ;
 *  - `onBlur` dépinglait la bulle, si bien que cliquer « Source » la démontait
 *    avant que le lien ne s'active → l'épinglage ne se défait plus qu'au clic
 *    extérieur, à Échap, ou par un second clic sur le terme.
 *
 * Ouverture au survol, au focus clavier et au tap ; sur mobile le survol
 * n'existe pas, c'est le tap (épinglage) qui rend la source atteignable.
 */
function TermeInfobulle({ terme, entree }: { terme: string; entree: TermeGlossaire }) {
  const [survol, setSurvol] = useState(false);
  const [focus, setFocus] = useState(false);
  const [epingle, setEpingle] = useState(false);
  const conteneur = useRef<HTMLSpanElement>(null);
  const bouton = useRef<HTMLButtonElement>(null);
  const panneau = useRef<HTMLSpanElement>(null);
  const [decalage, setDecalage] = useState(0);
  const id = useId();
  const ouvert = survol || focus || epingle;

  // La bulle est ancrée sous le mot ; un terme proche du bord droit la faisait
  // sortir de l'écran (170 px hors champ sur mobile, mesuré le 2026-08-05), et la
  // page ne défile pas horizontalement — le lien de source redevenait donc
  // inatteignable, le défaut même qu'on corrige ici. On la ramène dans le cadre.
  useLayoutEffect(() => {
    if (!ouvert) {
      setDecalage(0);
      return;
    }
    const el = panneau.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const marge = 8;
    const largeur = document.documentElement.clientWidth;
    // `r` inclut le décalage déjà appliqué : on raisonne sur la position d'origine.
    const gauche = r.left - decalage;
    const droite = r.right - decalage;
    let d = 0;
    if (droite > largeur - marge) d = largeur - marge - droite;
    if (gauche + d < marge) d = marge - gauche;
    if (d !== decalage) setDecalage(d);
  }, [ouvert, decalage]);

  const fermer = () => {
    setEpingle(false);
    setSurvol(false);
    setFocus(false);
  };

  // Clic extérieur et Échap, tant que la bulle est ouverte. Le clic extérieur
  // ferme aussi `survol` : sur mobile, un tap déclenche `mouseenter` sans jamais
  // produire le `mouseleave` correspondant, et la bulle resterait ouverte.
  useEffect(() => {
    if (!ouvert) return;
    const dehors = (e: PointerEvent) => {
      if (!conteneur.current?.contains(e.target as Node)) fermer();
    };
    const echap = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      fermer();
      if (conteneur.current?.contains(document.activeElement)) bouton.current?.focus();
    };
    document.addEventListener("pointerdown", dehors);
    document.addEventListener("keydown", echap);
    return () => {
      document.removeEventListener("pointerdown", dehors);
      document.removeEventListener("keydown", echap);
    };
  }, [ouvert]);

  return (
    <span
      ref={conteneur}
      className="relative inline-block"
      onMouseEnter={() => setSurvol(true)}
      onMouseLeave={() => setSurvol(false)}
      // React propage focus/blur (focusin/focusout) : posés sur le conteneur, ils
      // couvrent le terme ET le lien de source. Un focus qui reste à l'intérieur
      // ne ferme donc pas la bulle — c'est ce qui permet d'y accéder au clavier.
      onFocus={() => setFocus(true)}
      onBlur={(e) => {
        if (!conteneur.current?.contains(e.relatedTarget as Node | null)) setFocus(false);
      }}
    >
      <button
        ref={bouton}
        type="button"
        aria-describedby={ouvert ? id : undefined}
        aria-expanded={ouvert}
        onClick={() => setEpingle((e) => !e)}
        className="cursor-help font-medium text-slate-900 underline decoration-dotted decoration-slate-400 underline-offset-2 hover:decoration-slate-700 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        {terme}
      </button>
      {ouvert && (
        // Pas de `role="tooltip"` : une infobulle ne doit pas contenir d'élément
        // focalisable, or celle-ci porte le lien de source. Le lien est atteignable
        // à la tabulation (il suit le terme dans le DOM) et `aria-expanded` annonce
        // l'ouverture ; `aria-describedby` fait lire la définition.
        <span
          ref={panneau}
          id={id}
          style={decalage ? { transform: `translateX(${decalage}px)` } : undefined}
          className="absolute left-0 top-full z-30 block w-64 max-w-[calc(100vw-1rem)] pt-1 text-left"
        >
          <span className="block rounded-md border border-slate-200 bg-white p-3 text-xs font-normal not-italic leading-relaxed text-slate-700 shadow-lg">
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
        </span>
      )}
    </span>
  );
}

/**
 * Rend un verbatim en repérant les termes du glossaire (surcouche non
 * destructive : le texte affiché reste identique au JSON, garde-fou n°1).
 *
 * `mesureId` sert à filtrer les entrées à portée limitée (champ `contextes`) :
 * un terme à sens contextuel n'est surligné que dans les mesures qui le listent.
 */
export default function Verbatim({
  texte,
  glossaire,
  mesureId,
}: {
  texte: string;
  glossaire: TermeGlossaire[];
  mesureId: string;
}) {
  const { regex, index } = useMemo(() => {
    // Entrée globale (pas de `contextes`) ou entrée dont la portée couvre cette mesure.
    const applicables = glossaire.filter((t) => !t.contextes || t.contextes.includes(mesureId));
    if (applicables.length === 0) return { regex: null, index: new Map<string, TermeGlossaire>() };
    const idx = new Map(applicables.map((t) => [t.terme.toLowerCase(), t]));
    // Termes les plus longs d'abord (préfère « numerus clausus » à un mot isolé).
    const motifs = [...applicables]
      .sort((a, b) => b.terme.length - a.terme.length)
      .map((t) => escapeRegExp(t.terme));
    // Frontières de mot Unicode (\p{L}/\p{N}) : évite de surligner un terme à
    // l'intérieur d'un autre mot (« probation » dans « approbation », « CSG »
    // dans un sigle plus long…). Lookbehind/lookahead = largeur nulle, donc le
    // split ne renvoie que le groupe capturé.
    const regex = new RegExp(
      `(?<![\\p{L}\\p{N}])(${motifs.join("|")})(?![\\p{L}\\p{N}])`,
      "giu"
    );
    return { regex, index: idx };
  }, [glossaire, mesureId]);

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
