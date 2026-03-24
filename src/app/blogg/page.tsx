import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogg – Zplan | Tips om vaktplanlegging for små butikker",
  description:
    "Praktiske tips og råd om vaktplanlegging for små butikker. Lær hvordan du lager bedre vaktplaner, håndterer deltidsansatte og slipper Excel-kaos.",
  openGraph: {
    title: "Blogg – Zplan | Tips om vaktplanlegging for små butikker",
    description:
      "Praktiske tips og råd om vaktplanlegging for små butikker.",
    url: "https://zplan.no/blogg",
    siteName: "Zplan",
    locale: "nb_NO",
    type: "website",
  },
};

const articles = [
  {
    slug: "vaktplan-excel-alternativ",
    title: "Hvorfor Excel ikke funker som vaktplan (og hva du bør bruke i stedet)",
    excerpt:
      "De fleste små butikker starter med Excel. Det funker en stund – helt til det ikke gjør det. Her er de vanligste problemene, og hva du bør se etter i et alternativ.",
    date: "18. mars 2026",
    readTime: "5 min",
  },
  {
    slug: "vaktplan-liten-butikk",
    title: "Slik lager du en god vaktplan for liten butikk",
    excerpt:
      "Få ansatte, mye deltid og stadig endringer i tilgjengelighet. Her er konkrete tips for å lage en vaktplan som faktisk fungerer i hverdagen.",
    date: "14. mars 2026",
    readTime: "5 min",
  },
  {
    slug: "deltidsansatte-vaktplan",
    title: "Vaktplan med deltidsansatte – slik unngår du kaos",
    excerpt:
      "Deltidsansatte gjør vaktplanlegging vanskeligere. Ulik tilgjengelighet, bytteforespørsler og kommunikasjonsproblemer. Slik løser du det.",
    date: "10. mars 2026",
    readTime: "5 min",
  },
  {
    slug: "vaktplan-messenger-problemer",
    title: "Bruker du Messenger som vaktplan? Her er problemene",
    excerpt:
      "Mange små butikker bruker Messenger til å fordele vakter. Det funker – helt til noen ikke ser meldingen. Her er de vanligste fallgruvene.",
    date: "6. mars 2026",
    readTime: "5 min",
  },
];

export default function BloggPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            Blogg
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
            Tips om{" "}
            <span className="relative inline-block">
              <span className="relative z-10">vaktplanlegging</span>
              <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-yellow/30 md:bottom-2 md:h-4" />
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-text-secondary">
            Praktiske råd for deg som driver liten butikk og vil ha bedre
            kontroll på vaktene.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blogg/${a.slug}`}
              className="group rounded-2xl border border-border bg-white p-7 transition-all hover:shadow-md hover:-translate-y-1 hover:border-accent/20"
            >
              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span>{a.date}</span>
                <span className="h-1 w-1 rounded-full bg-text-muted" />
                <span>{a.readTime} lesetid</span>
              </div>
              <h2 className="mt-3 text-lg font-bold leading-snug group-hover:text-accent transition-colors">
                {a.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {a.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Les artikkel
                <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
