import type { Metadata } from "next";
import { Markdown, PROSE } from "@/components/Markdown";
import { getAPropos } from "@/lib/data";

export const metadata: Metadata = {
  title: "À propos — Comparateur de programmes 2027",
  description:
    "Pourquoi ce site existe, qui l'écrit, le rôle de l'IA et celui de l'éditeur.",
};

export default function AProposPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold tracking-tight">À propos</h1>
      <div className={`${PROSE} max-w-3xl`}>
        <Markdown>{getAPropos()}</Markdown>
      </div>
    </div>
  );
}
