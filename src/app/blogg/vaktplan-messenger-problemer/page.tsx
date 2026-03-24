import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bruker du Messenger som vaktplan? Her er problemene – Zplan blogg",
  description:
    "Mange små butikker bruker Messenger til å fordele vakter. Det funker – helt til noen ikke ser meldingen. Her er de vanligste fallgruvene.",
  keywords: [
    "vaktplan messenger",
    "vaktplan facebook messenger",
    "vaktplan gruppemelding",
    "vaktplan chat",
  ],
  openGraph: {
    title: "Bruker du Messenger som vaktplan? Her er problemene",
    description:
      "Mange små butikker bruker Messenger til å fordele vakter. Her er de vanligste fallgruvene.",
    url: "https://zplan.no/blogg/vaktplan-messenger-problemer",
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
            <span>6. mars 2026</span>
            <span className="h-1 w-1 rounded-full bg-text-muted" />
            <span>5 min lesetid</span>
          </div>
          <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-4xl">
            Bruker du Messenger som vaktplan? Her er problemene
          </h1>
        </div>

        {/* Article body */}
        <div className="mt-10 space-y-6 text-base leading-relaxed text-text-secondary">
          <p>
            Det startet sikkert uskyldig nok. Du opprettet en gruppechat p&aring;
            Messenger med de ansatte. &quot;Hvem kan jobbe l&oslash;rdag?&quot; Noen svarer, du
            fordeler vakter, og vips &ndash; du har en vaktplan. P&aring; en m&aring;te.
          </p>
          <p>
            S&aring; g&aring;r det noen uker. Gruppa fylles med memes, sp&oslash;rsm&aring;l om
            n&oslash;kler, bilder fra fredagstacoen og innimellom en faktisk vakting. Og
            plutselig er det ingen som finner ut hvem som egentlig jobber p&aring; torsdag.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            Hvorfor s&aring; mange bruker Messenger
          </h2>
          <p>
            Det er lett &aring; forst&aring; hvorfor Messenger er f&oslash;rstevalget for mange
            sm&aring; butikker. Alle har det allerede. Det er gratis. Du kan n&aring; folk
            umiddelbart. Og det f&oslash;les lavterskel &ndash; du trenger ikke overtale
            noen til &aring; laste ned en ny app eller lage en ny konto.
          </p>
          <p>
            Problemet er at Messenger er laget for samtaler, ikke for planlegging.
            Og forskjellen merkes fort.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            De vanligste problemene
          </h2>

          <h3 className="text-lg font-bold text-text pt-2">
            Meldinger forsvinner i st&oslash;yen
          </h3>
          <p>
            I en aktiv gruppechat g&aring;r det fort. Du poster vaktplanen for neste uke
            klokka 14. Klokka 16 har det kommet 30 meldinger om andre ting. Den
            ansatte som sjekker telefonen p&aring; kvelden m&aring; scrolle forbi alt for &aring;
            finne planen &ndash; hvis de i det hele tatt vet at den er lagt ut.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            Ingen oversikt
          </h3>
          <p>
            Messenger gir deg ingen visuell oversikt over hvem som jobber n&aring;r.
            Informasjonen er spredt over flere meldinger, kanskje med korreksjoner
            i mellom. For &aring; f&aring; det fulle bildet m&aring; du lese gjennom hele
            samtalen og sette det sammen selv. Det er tidkrevende og feilutsatt.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            Umulig &aring; s&oslash;ke
          </h3>
          <p>
            Pr&oslash;v &aring; finne ut hvem som jobbet forrige onsdag ved &aring; s&oslash;ke i en
            Messenger-gruppe. Lykke til. S&oslash;kefunksjonen er laget for &aring; finne
            meldinger, ikke for &aring; gi deg et oversiktsbilde. Og n&aring;r du trenger
            &aring; sjekke historikken &ndash; for eksempel i forbindelse med l&oslash;nn eller
            en konflikt &ndash; har du ingen p&aring;litelig kilde.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            Ingen historikk du kan stole p&aring;
          </h3>
          <p>
            Folk kan slette meldinger. Samtaler kan arkiveres. Og n&aring;r noen forlater
            gruppa, forsvinner gjerne konteksten med dem. Du har ingen sporbar
            logg over hvem som godtok hvilken vakt, eller n&aring;r en endring ble gjort.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            Grensen mellom jobb og privat viskes ut
          </h3>
          <p>
            N&aring;r vaktplanen lever i Messenger, betyr det at jobb-meldinger dukker
            opp mellom private samtaler. Ansatte f&oslash;ler seg aldri helt fri fra
            jobben. Og for deg som leder betyr det at du f&aring;r sp&oslash;rsm&aring;l om
            vakter p&aring; alle d&oslash;gnets tider.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            N&aring;r det bryter sammen
          </h2>
          <p>
            Messenger funker greit n&aring;r du har to-tre ansatte og f&aring; endringer.
            Men det skalerer ikke. N&aring;r du f&aring;r flere ansatte, mer deltid og
            hyppigere endringer, begynner systemet &aring; knake i sammenf&oslash;yningene.
          </p>
          <p>
            Det vanlige varselet er at du begynner &aring; bruke tid p&aring; &aring; rydde opp.
            Du m&aring; gjenta informasjon, svare p&aring; de samme sp&oslash;rsm&aring;lene, og
            dobbeltsjekke at alle har f&aring;tt med seg endringene. Plutselig bruker
            du en time i uka bare p&aring; &aring; v&aelig;re menneskelig varslingssystem.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            Hva er alternativene?
          </h2>
          <p>
            Du trenger ikke g&aring; fra Messenger til et tungt bedriftssystem. Det
            finnes mellomting som gir deg oversikten du mangler uten &aring; v&aelig;re
            overkomplisert.
          </p>
          <p>
            Det viktigste er &aring; ha ett sted som er dedikert til vaktplanen &ndash;
            ikke blandet med alt annet. Et sted der:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Alle ser den oppdaterte planen uten &aring; lete</li>
            <li>Endringer varsles automatisk</li>
            <li>Du har en historikk du kan stole p&aring;</li>
            <li>Jobb og privat holdes adskilt</li>
          </ul>
          <p>
            Zplan er bygget for dette. Du f&aring;r en visuell oversikt over alle vakter,
            ansatte ser planen sin p&aring; mobilen, og n&aring;r noe endres f&aring;r de beskjed
            med en gang. Ingen scrolling gjennom gruppechat. Ingen memes i veien
            for viktig informasjon.
          </p>
          <p>
            Du kan fortsatt bruke Messenger til det det er best til &ndash; uformell
            kommunikasjon. Men vaktplanen fortjener sitt eget sted.
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
