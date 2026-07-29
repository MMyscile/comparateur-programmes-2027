import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comparateur de programmes — Présidentielle 2027",
  description:
    "Juxtaposition des programmes des candidats, thème par thème, avec « ce qui est fait aujourd'hui » en regard. Une comparaison éditoriale et traçable, pas prétendument neutre.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Comparateur de programmes <span className="text-slate-400">2027</span>
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/" className="text-slate-600 hover:text-slate-900">
                Comparaison
              </Link>
              <Link href="/methodologie" className="text-slate-600 hover:text-slate-900">
                Méthodologie
              </Link>
              <Link href="/a-propos" className="text-slate-600 hover:text-slate-900">
                À propos
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-5xl px-4 py-10 text-xs leading-relaxed text-slate-500">
          <p>
            Ce site <strong>assume une posture d&apos;éditeur</strong> : il ne prétend pas comparer de
            façon neutre. Le choix des thèmes, du grain et du classement est un acte éditorial,
            expliqué sur les pages <Link href="/a-propos" className="underline">À propos</Link> et{" "}
            <Link href="/methodologie" className="underline">Méthodologie</Link>.
            Chaque mesure renvoie à sa source d&apos;origine et à « ce qui est fait » chiffré et
            sourcé.
          </p>
        </footer>
      </body>
    </html>
  );
}
