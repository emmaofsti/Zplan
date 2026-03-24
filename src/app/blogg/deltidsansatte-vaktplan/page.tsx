import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vaktplan med deltidsansatte – slik unngår du kaos – Zplan blogg",
  description:
    "Deltidsansatte gjør vaktplanlegging vanskeligere. Ulik tilgjengelighet, bytteforespørsler og kommunikasjonsproblemer. Her er tipsene som hjelper.",
  keywords: [
    "deltidsansatte vaktplan",
    "vaktplan deltid",
    "turnus deltidsansatte",
    "planlegge vakter deltid",
  ],
  openGraph: {
    title: "Vaktplan med deltidsansatte – slik unngår du kaos",
    description:
      "Deltidsansatte gjør vaktplanlegging vanskeligere. Her er tipsene som hjelper.",
    url: "https://zplan.no/blogg/deltidsansatte-vaktplan",
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
            <span>10. mars 2026</span>
            <span className="h-1 w-1 rounded-full bg-text-muted" />
            <span>5 min lesetid</span>
          </div>
          <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-4xl">
            Vaktplan med deltidsansatte &ndash; slik unng&aring;r du kaos
          </h1>
        </div>

        {/* Article body */}
        <div className="mt-10 space-y-6 text-base leading-relaxed text-text-secondary">
          <p>
            Har du noen gang sittet med vaktplanen og f&oslash;lt at du legger et puslespill
            med brikker som stadig endrer form? Da er sjansen stor for at du har mange
            deltidsansatte. Og du er i godt selskap &ndash; de fleste sm&aring; butikker i
            Norge har nettopp dette problemet.
          </p>
          <p>
            Deltidsansatte er fantastisk for fleksibilitet. Du f&aring;r dekket travle
            tider uten &aring; betale for fulle stillinger. Men n&aring;r det kommer til
            planlegging, bringer de med seg en helt egen type hodepine.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            Hvorfor deltid gj&oslash;r planlegging vanskeligere
          </h2>

          <h3 className="text-lg font-bold text-text pt-2">
            Alle har ulike tider
          </h3>
          <p>
            En student kan bare jobbe ettermiddager. En annen har barn og m&aring; hente i
            barnehagen klokka tre. En tredje har en annen jobb og kan bare jobbe
            tirsdager og torsdager. N&aring;r du skal f&aring; alle disse puslespillbrikkene til
            &aring; passe, er det ikke rart det tar tid.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            Tilgjengeligheten endrer seg
          </h3>
          <p>
            I motsetning til fulltidsansatte, endrer deltidsfolk gjerne tilgjengeligheten
            sin fra uke til uke. Eksamensperioder, feriejobber, sykdom i familien &ndash;
            det er alltid noe. Du kan ikke bare kopiere forrige ukes plan og forvente
            at den funker.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            Kommunikasjonen sprekker
          </h3>
          <p>
            Med fem-seks deltidsansatte som ikke er p&aring; jobb samtidig, er det vanskelig
            &aring; n&aring; alle med beskjeder. Du sender en melding i gruppa, men to av dem
            sjekker ikke telefonen f&oslash;r neste dag. Endringer faller mellom stolene.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            Slik h&aring;ndterer du tilgjengelighet
          </h2>
          <p>
            Den viktigste tingen du kan gj&oslash;re er &aring; f&aring; tilgjengeligheten p&aring;
            plass f&oslash;r du lager planen. Det h&oslash;res opplagt ut, men det er
            overraskende mange som gj&oslash;r det motsatte &ndash; lager planen f&oslash;rst,
            s&aring; begynner runden med &quot;kan du bytte?&quot;.
          </p>
          <p>
            Sett en fast frist for n&aring;r ansatte m&aring; melde inn tilgjengelighet.
            V&aelig;r tydelig p&aring; at fristen er reell &ndash; de som ikke melder inn,
            regnes som tilgjengelige. Det h&oslash;res strengt ut, men det gir deg noe
            &aring; jobbe med i stedet for &aring; jage folk.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            H&aring;ndtere bytteforespørsler
          </h2>
          <p>
            Bytter kommer til &aring; skje. Det er bare &aring; akseptere. Sp&oslash;rsm&aring;let er
            hvordan du h&aring;ndterer dem uten &aring; miste oversikten.
          </p>
          <p>
            Noen butikker lar ansatte bytte seg imellom s&aring; lenge vakten er dekket.
            Det funker bra hvis du har en enkel m&aring;te &aring; holde oversikten p&aring; hvem
            som faktisk jobber. Problemet med Messenger-bytter er at du m&aring; scrolle
            gjennom en lang chat for &aring; finne ut hvem som endte opp med vakten.
          </p>
          <p>
            Et bedre system er &aring; ha ett sted der alle bytter registreres &ndash;
            enten det er et enkelt skjema, en delt kalender, eller et vaktplan-verkt&oslash;y
            som h&aring;ndterer det for deg.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            Tips for &aring; holde alle forn&oslash;yde
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text">Fordel popul&aelig;re og upopul&aelig;re vakter jevnt.</strong>{" "}
              Ingen &oslash;nsker &aring; jobbe hver l&oslash;rdag. Hvis &eacute;n person alltid f&aring;r de d&aring;rligste vaktene, mister du dem fort.
            </li>
            <li>
              <strong className="text-text">Respekter &oslash;nskene deres.</strong>{" "}
              Du kan ikke alltid gi alle det de vil, men &aring; ta hensyn til preferanser viser at du bryr deg. Det bygger lojalitet.
            </li>
            <li>
              <strong className="text-text">V&aelig;r forutsigbar.</strong>{" "}
              Publiser planen til same tid hver uke. Gi folk tid til &aring; planlegge rundt vaktene.
            </li>
            <li>
              <strong className="text-text">Gi ros n&aring;r noen stepper opp.</strong>{" "}
              N&aring;r en ansatt tar en ekstra vakt p&aring; kort varsel, si takk. Sm&aring; ting betyr mye.
            </li>
            <li>
              <strong className="text-text">Ha en buffer.</strong>{" "}
              Hvis mulig, ha en eller to ansatte som kan ringe p&aring; kort varsel. Det reduserer stresset enormt.
            </li>
          </ul>

          <h2 className="text-2xl font-black text-text pt-4">
            N&aring;r det blir for mye &aring; holde styr p&aring;
          </h2>
          <p>
            Gode rutiner tar deg langt, men p&aring; et tidspunkt trenger du hjelp av
            et verkt&oslash;y. S&aelig;rlig n&aring;r du har mange deltidsansatte, er det verdifullt
            &aring; ha et system som holder oversikten for deg &ndash; tilgjengelighet,
            vakter, endringer og varsler p&aring; ett sted.
          </p>
          <p>
            Zplan er laget for akkurat denne situasjonen. Ansatte melder inn
            n&aring;r de kan jobbe, du setter opp vakter med et par klikk, og alle f&aring;r
            oppdatert plan rett p&aring; mobilen. N&aring;r noen bytter en vakt, oppdateres
            planen automatisk.
          </p>
          <p>
            Mindre tid p&aring; planlegging, mer tid p&aring; det som betyr noe &ndash; &aring;
            drive butikken.
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
