import type { Metadata } from "next";
import { getTaxonomie, getThemesCouverts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Méthodologie — Comparateur de programmes 2027",
  description:
    "Taxonomie, critères de rattachement et choix éditoriaux assumés. La règle de classement est publique (garde-fou n°2).",
};

export default function MethodologiePage() {
  const taxo = getTaxonomie();
  const couverts = new Set(getThemesCouverts().map((t) => t.id));

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
    </div>
  );
}
