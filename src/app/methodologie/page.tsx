import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getChoixEditoriaux, getTaxonomie, getThemesCouverts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Méthodologie — Comparateur de programmes 2027",
  description:
    "Taxonomie, critères de rattachement et choix éditoriaux assumés. La règle de classement est publique (garde-fou n°2).",
};

const PROSE =
  "prose prose-sm prose-slate max-w-none prose-headings:font-semibold prose-h2:text-base prose-h3:text-sm";

function Md({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        table: ({ node: _node, ...props }) => (
          <div className="overflow-x-auto">
            <table {...props} />
          </div>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

export default function MethodologiePage() {
  const taxo = getTaxonomie();
  const couverts = new Set(getThemesCouverts().map((t) => t.id));
  const choixEditoriaux = getChoixEditoriaux();

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-2xl font-bold tracking-tight">Méthodologie</h1>
        <p className="max-w-3xl text-slate-600">
          Comparer, c&apos;est cadrer. Il n&apos;existe pas de manière neutre de comparer des
          programmes : le choix des thèmes, du grain et du classement est un acte éditorial. Ce site
          ne prétend pas à l&apos;objectivité — il vise une <strong>honnêteté traçable</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Nos garde-fous</h2>
        <ul className="max-w-3xl list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>
            <strong>Traçabilité</strong> — chaque mesure renvoie à sa source et à sa rubrique
            d&apos;origine. Jamais de mesure sans source.
          </li>
          <li>
            <strong>Règle de mapping publiée</strong> — la taxonomie et ses critères sont sur cette
            page.
          </li>
          <li>
            <strong>Test de renversement</strong> — un classement doit tenir même si l&apos;étiquette
            du parti est masquée.
          </li>
          <li>
            <strong>Bouton de correction</strong> — chaque mesure permet de signaler un classement
            erroné.
          </li>
          <li>
            <strong>Baseline « ce qui est fait »</strong> — uniquement du chiffrable et sourçable,
            jamais de qualificatif politique.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Taxonomie ({taxo.themes.length} méta-thèmes)</h2>
        <p className="text-sm text-slate-500">
          Version {taxo.version} — mise à jour {taxo.date_maj}. Les thèmes en gris ne sont pas
          encore renseignés à ce stade (V1).
        </p>
        <div className="space-y-3">
          {taxo.themes.map((t) => {
            const actif = couverts.has(t.id);
            return (
              <div
                key={t.id}
                className={`rounded-lg border p-4 ${
                  actif ? "border-slate-200 bg-white" : "border-slate-200 bg-slate-50 opacity-70"
                }`}
              >
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{t.label}</h3>
                  {actif ? (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                      renseigné
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs text-slate-500">
                      à venir
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-600">{t.description}</p>
                {t.criteres_de_rattachement && (
                  <ul className="mt-2 list-disc space-y-0.5 pl-5 text-xs text-slate-500">
                    {t.criteres_de_rattachement.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                )}
                {t.thematiques && t.thematiques.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs font-medium text-slate-500">
                      Thématiques (tags des mesures) :
                    </p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {t.thematiques.map((th) => (
                        <span
                          key={th.id}
                          className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
                        >
                          {th.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Choix éditoriaux (règle de mapping)</h2>
        <p className="max-w-3xl text-sm text-slate-500">
          Les décisions de classement derrière la taxonomie, reproduites telles quelles depuis{" "}
          <a
            className="underline decoration-slate-300 underline-offset-2 hover:text-slate-700"
            href="https://github.com/MMyscile/comparateur-programmes-2027/blob/main/data/choix-editoriaux.md"
          >
            data/choix-editoriaux.md
          </a>{" "}
          (historique complet dans git). Chaque choix est réversible : la ligne « Pour revenir
          dessus » dit quoi éditer.
        </p>
        <div className={`${PROSE} max-w-3xl`}>
          <Md>{choixEditoriaux.intro}</Md>
        </div>
        {choixEditoriaux.sections.map((section) =>
          section.titre.startsWith("Principes") ? (
            <div key={section.titre} className="max-w-3xl space-y-2">
              <h3 className="font-medium">{section.titre}</h3>
              <div className={PROSE}>
                <Md>{section.contenu}</Md>
              </div>
            </div>
          ) : (
            <div key={section.titre} className="max-w-3xl space-y-2">
              {section.sousSections.length > 0 && (
                <h3 className="font-medium">{section.titre}</h3>
              )}
              {(section.sousSections.length > 0
                ? section.sousSections
                : [section]
              ).map((bloc) => (
                <details
                  key={bloc.titre}
                  className="group rounded-lg border border-slate-200 bg-white p-4"
                >
                  <summary className="cursor-pointer list-none text-sm font-medium text-slate-800 marker:content-none">
                    <span className="mr-2 inline-block text-slate-400 transition-transform group-open:rotate-90">
                      ▸
                    </span>
                    {bloc.titre.replace(/`/g, "")}
                  </summary>
                  <div className={`${PROSE} mt-2 border-t border-slate-100 pt-2`}>
                    <Md>{bloc.contenu}</Md>
                  </div>
                </details>
              ))}
            </div>
          ),
        )}
      </section>
    </div>
  );
}
