import Comparateur from "@/components/Comparateur";
import {
  getAxes,
  getCandidats,
  getMesures,
  getThematiqueIndex,
  getThemesCouverts,
} from "@/lib/data";

export default function HomePage() {
  const themes = getThemesCouverts();
  const axes = getAxes();
  const candidats = getCandidats();
  const mesures = getMesures();
  const thematiques = getThematiqueIndex();

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-2xl font-bold tracking-tight">
          Comparer les programmes, thème par thème
        </h1>
        <p className="max-w-3xl text-slate-600">
          Chaque proposition est mise en regard de{" "}
          <strong>ce qui est fait aujourd&apos;hui</strong> (chiffré et sourcé), pour transformer les
          slogans en écarts au réel. Cochez les thématiques qui vous intéressent pour ne voir que les
          propositions concernées, et filtrez par candidat.
        </p>
        <p className="max-w-3xl rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          <strong>Version 0.1 — preuve de moteur.</strong> Seuls {themes.length} méta-thèmes sont
          renseignés (fiscalité, justice/sécurité) sur {candidats.length} programmes. Le but à ce
          stade n&apos;est pas d&apos;éclairer le vote mais de prouver la mécanique de comparaison.
        </p>
      </section>

      <Comparateur
        themes={themes}
        axes={axes}
        candidats={candidats}
        mesures={mesures}
        thematiques={thematiques}
      />
    </div>
  );
}
