import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hvorfor Excel ikke funker som vaktplan – Zplan blogg",
  description:
    "Excel er gratis og kjent, men som vaktplan skaper det mer problemer enn det løser. Les om de vanligste fallgruvene og hva du bør bruke i stedet.",
  keywords: [
    "excel vaktplan alternativ",
    "vaktplan excel",
    "vaktplan mal excel",
    "alternativ til excel vaktplan",
  ],
  openGraph: {
    title: "Hvorfor Excel ikke funker som vaktplan (og hva du bør bruke i stedet)",
    description:
      "Excel er gratis og kjent, men som vaktplan skaper det mer problemer enn det løser.",
    url: "https://zplan.no/blogg/vaktplan-excel-alternativ",
    siteName: "Zplan",
    locale: "nb_NO",
    type: "article",
  },
};

export default function ArticlePage() {
  return (
    <article className="py-16 md:py-24">
      <div className="mx-auto max-w-[700px] px-6">
        {/* Back link */}
        <Link
          href="/blogg"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition hover:text-accent"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Tilbake til blogg
        </Link>

        {/* Header */}
        <div className="mt-8">
          <div className="flex items-center gap-3 text-xs text-text-muted">
            <span>18. mars 2026</span>
            <span className="h-1 w-1 rounded-full bg-text-muted" />
            <span>5 min lesetid</span>
          </div>
          <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-4xl">
            Hvorfor Excel ikke funker som vaktplan (og hva du b&oslash;r bruke i stedet)
          </h1>
        </div>

        {/* Article body */}
        <div className="mt-10 space-y-6 text-base leading-relaxed text-text-secondary">
          <p>
            La oss v&aelig;re ærlige: nesten alle sm&aring; butikker har brukt Excel til
            vaktplanlegging p&aring; et eller annet tidspunkt. Det gir mening. Excel er gratis
            (eller allerede betalt for), de fleste vet hvordan det funker, og du kan lage et
            regneark p&aring; fem minutter som ser ganske greit ut.
          </p>
          <p>
            Men s&aring; g&aring;r det en uke eller to. Noen bytter vakt. Du oppdaterer arket p&aring;
            PCen, men glemmer &aring; sende ut den nye versjonen. En ansatt ser p&aring; den
            gamle filen p&aring; telefonen sin. Plutselig st&aring;r to personer p&aring; samme
            vakt, og ingen p&aring; l&oslash;rdagen.
          </p>
          <p>
            Kjenner du deg igjen? Du er ikke alene.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            Hvorfor s&aring; mange velger Excel
          </h2>
          <p>
            Det er egentlig logisk. Du trenger en oversikt over hvem som jobber n&aring;r.
            Excel gir deg et rutenett. Du fyller inn navn, dager og tider. Ferdig. Ingen
            ny programvare &aring; l&aelig;re, ingen ting &aring; betale for, og du f&oslash;ler
            du har kontroll.
          </p>
          <p>
            Problemet er at Excel ble laget for tall og formler, ikke for &aring; koordinere
            mennesker. Og det merkes fort n&aring;r ting begynner &aring; endre seg &ndash; noe
            de alltid gj&oslash;r i en liten butikk.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            De vanligste problemene med Excel-vaktplaner
          </h2>

          <h3 className="text-lg font-bold text-text pt-2">
            Versjonskaos
          </h3>
          <p>
            Du sender ut planen p&aring; mandag. P&aring; onsdag bytter noen en vakt. Du
            oppdaterer filen, men glemmer &aring; sende den p&aring; nytt. N&aring; finnes det
            to versjoner &ndash; og ingen vet hvilken som er riktig. Med tre-fire slike
            endringer i l&oslash;pet av en uke har du fullstendig mistet oversikten.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            Ingen mobiltilgang
          </h3>
          <p>
            De fleste ansatte sjekker vaktene sine p&aring; telefonen. Har du pr&oslash;vd
            &aring; &aring;pne et Excel-ark p&aring; mobil? Det er ikke akkurat en god
            opplevelse. Teksten er bitte liten, du m&aring; scrolle i alle retninger, og det
            er lett &aring; se feil dag eller feil rad. Resultatet er at folk sp&oslash;r
            deg direkte i stedet &ndash; og da har du blitt vaktplan-appen selv.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            Manuelle feil
          </h3>
          <p>
            Kopier-og-lim i Excel er farlig n&aring;r det gjelder vakter. Du flytter en
            celle, glemmer &aring; oppdatere en annen, og plutselig har noen to vakter p&aring;
            samme dag mens en annen har null. Excel gir deg ingen advarsel. Det er ingen
            automatisk sjekk p&aring; dobbeltbookinger eller hull i planen.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            Ingen varsler
          </h3>
          <p>
            N&aring;r du oppdaterer Excel-arket, vet ingen det. Du m&aring; aktivt sende ut
            filen p&aring; nytt &ndash; enten p&aring; e-post, Messenger eller SMS. Og selv da
            er det ingen garanti for at alle leser det. Det finnes ingen push-varsler,
            ingen p&aring;minnelser, og ingen bekreftelse p&aring; at folk har sett endringene.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            Hva b&oslash;r du se etter i et alternativ?
          </h2>
          <p>
            Du trenger ikke et avansert system med hundrevis av funksjoner. For en liten
            butikk handler det om noen f&aring; ting:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text">Mobilvennlig:</strong> Ansatte m&aring; kunne se vaktene sine p&aring; telefonen uten &aring; lure p&aring; hva som st&aring;r der.
            </li>
            <li>
              <strong className="text-text">Alltid oppdatert:</strong> N&aring;r du endrer noe, m&aring; alle se endringen med en gang. Ingen versjonskaos.
            </li>
            <li>
              <strong className="text-text">Varsler:</strong> Ansatte b&oslash;r f&aring; beskjed n&aring;r vakten deres endres, uten at du m&aring; sende meldinger manuelt.
            </li>
            <li>
              <strong className="text-text">Enkelt &aring; bruke:</strong> Ingen oppl&aelig;ring. Ingen komplisert oppsett. Det m&aring; funke fra dag &eacute;n.
            </li>
            <li>
              <strong className="text-text">Rimelig:</strong> Sm&aring; butikker har ikke budsjett for dyre bedriftsløsninger. En fast, forutsigbar pris er viktig.
            </li>
          </ul>

          <h2 className="text-2xl font-black text-text pt-4">
            N&aring;r er det p&aring; tide &aring; bytte?
          </h2>
          <p>
            Hvis du kjenner deg igjen i ett eller flere av problemene over, er det
            sannsynligvis p&aring; tide &aring; droppe Excel. Det trenger ikke v&aelig;re en stor
            overgang. Et enkelt verkt&oslash;y som er laget for vaktplanlegging l&oslash;ser
            problemene uten &aring; tilf&oslash;re ny kompleksitet.
          </p>
          <p>
            Zplan er bygget for akkurat dette. Det er laget for sm&aring; butikker som
            vil ha oversikt over vaktene uten &aring; bruke timer p&aring; det. Du setter opp
            butikken p&aring; noen minutter, legger inn ansatte, og drar vakter p&aring; plass.
            Alle ser planen sin p&aring; mobilen, og endringer oppdateres i sanntid.
          </p>
          <p>
            Ingen Excel-filer. Ingen versjonskaos. Bare en vaktplan som funker.
          </p>
        </div>

        {/* CTA Box */}
        <div className="mt-14 rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 via-yellow/5 to-accent/5 p-8 text-center">
          <h3 className="text-xl font-black">Pr&oslash;v Zplan gratis i 14 dager</h3>
          <p className="mt-2 text-sm text-text-secondary">
            Ingen kredittkort. Ingen binding. Klar p&aring; minutter.
          </p>
          <a
            href="/#pris"
            className="group mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 hover:gap-3"
          >
            Start gratis n&aring;
            <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
