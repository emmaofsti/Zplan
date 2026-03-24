import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Slik lager du en god vaktplan for liten butikk – Zplan blogg",
  description:
    "Praktiske tips for å lage en vaktplan som fungerer når du har få ansatte, mye deltid og stadig endringer. Unngå de vanligste tabbene.",
  keywords: [
    "vaktplan liten butikk",
    "vaktplan liten bedrift",
    "vaktplanlegging butikk",
    "turnus liten butikk",
  ],
  openGraph: {
    title: "Slik lager du en god vaktplan for liten butikk",
    description:
      "Praktiske tips for å lage en vaktplan som fungerer når du har få ansatte og mye deltid.",
    url: "https://zplan.no/blogg/vaktplan-liten-butikk",
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
            <span>14. mars 2026</span>
            <span className="h-1 w-1 rounded-full bg-text-muted" />
            <span>5 min lesetid</span>
          </div>
          <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-4xl">
            Slik lager du en god vaktplan for liten butikk
          </h1>
        </div>

        {/* Article body */}
        <div className="mt-10 space-y-6 text-base leading-relaxed text-text-secondary">
          <p>
            &Aring; lage vaktplan for en liten butikk h&oslash;res enkelt ut. Du har kanskje
            fem-seks ansatte, &aring;pent seks dager i uken, og trenger to p&aring; jobb til
            enhver tid. Hvor vanskelig kan det v&aelig;re?
          </p>
          <p>
            Ganske vanskelig, viser det seg. N&aring;r de fleste jobber deltid, alle har
            ulike &oslash;nsker, og noen plutselig blir syke p&aring; en l&oslash;rdag, kan
            selv den enkleste vaktplanen bli et puslespill. Her er noen konkrete tips som
            gj&oslash;r jobben lettere.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            Utfordringene med en liten butikk
          </h2>
          <p>
            Sm&aring; butikker har noen spesielle utfordringer som gj&oslash;r vaktplanlegging
            vanskeligere enn i st&oslash;rre bedrifter:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text">F&aring; ansatte betyr lite fleksibilitet.</strong>{" "}
              N&aring;r noen er borte, finnes det f&aring; andre &aring; ringe. Hver person er kritisk.
            </li>
            <li>
              <strong className="text-text">Mange deltidsansatte.</strong>{" "}
              Studenter, folk med annen jobb, foreldre med kort tilgjengelighet. Alle har ulike tider de kan jobbe.
            </li>
            <li>
              <strong className="text-text">Uforutsigbar hverdag.</strong>{" "}
              Sykdom, eksamener, barnehage som stenger tidlig &ndash; endringer kommer hele tiden.
            </li>
            <li>
              <strong className="text-text">Alt avhenger av &eacute;n person.</strong>{" "}
              Som regel er det eieren eller daglig leder som lager planen, og det er en jobb i seg selv.
            </li>
          </ul>

          <h2 className="text-2xl font-black text-text pt-4">
            Tips for &aring; lage en vaktplan som funker
          </h2>

          <h3 className="text-lg font-bold text-text pt-2">
            1. Samle tilgjengelighet f&oslash;r du planlegger
          </h3>
          <p>
            Den vanligste tabben er &aring; lage planen f&oslash;rst og sp&oslash;rre etterpå.
            Da ender du opp med masse bytter og frustrerte ansatte. Sp&oslash;r alle om
            tilgjengelighet f&oslash;r du setter opp neste uke. Gi en frist &ndash; for
            eksempel torsdag klokken 18 &ndash; og v&aelig;r konsekvent.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            2. Ha faste rammer
          </h3>
          <p>
            Selv om detaljene endrer seg fra uke til uke, b&oslash;r grunnstrukturen
            v&aelig;re den samme. Bestem hvor mange som trengs p&aring; ulike dager og
            tidspunkt. Ha faste vakttyper (for eksempel morgen, ettermiddag, hel dag)
            s&aring; alle vet hva som gjelder. Forutsigbarhet gj&oslash;r livet enklere for
            b&aring;de deg og de ansatte.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            3. Publiser planen tidlig
          </h3>
          <p>
            Jo tidligere folk vet n&aring;r de skal jobbe, jo f&aelig;rre endringer f&aring;r du.
            Pr&oslash;v &aring; ha neste ukes plan klar senest fredag. Da har ansatte helgen
            p&aring; &aring; planlegge livet sitt rundt vaktene, og du slipper panikk-meldinger
            p&aring; s&oslash;ndag kveld.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            4. Gj&oslash;r det lett &aring; bytte vakter
          </h3>
          <p>
            Uansett hvor god planen er, vil noen trenge &aring; bytte. Det er helt normalt.
            Problemet oppst&aring;r n&aring;r bytteprosessen er uoversiktlig &ndash; meldinger
            frem og tilbake, og du m&aring; holde styr p&aring; hvem som har avtalt hva.
            Ha en tydelig rutine: hvem kan bytte med hvem, og hvordan godkjennes det.
          </p>

          <h3 className="text-lg font-bold text-text pt-2">
            5. Fordel rettferdig
          </h3>
          <p>
            Ingen vil jobbe hver l&oslash;rdag. Pr&oslash;v &aring; fordele de mindre popul&aelig;re
            vaktene jevnt. Det handler ikke bare om rettferdighet, men ogs&aring; om
            trivsel. Ansatte som f&oslash;ler seg rettferdig behandlet er mer fleksible n&aring;r
            du trenger hjelp.
          </p>

          <h2 className="text-2xl font-black text-text pt-4">
            Vanlige tabber &aring; unng&aring;
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text">Planlegge for sent.</strong>{" "}
              Hvis planen kommer s&oslash;ndag kveld for uken som starter mandag, skaper det stress for alle.
            </li>
            <li>
              <strong className="text-text">Ikke ha backup-plan.</strong>{" "}
              Ha en liste over hvem du kan ringe hvis noen blir syke. Tenk p&aring; det f&oslash;r det skjer.
            </li>
            <li>
              <strong className="text-text">Alt g&aring;r gjennom deg.</strong>{" "}
              Hvis alle endringer m&aring; g&aring; via deg personlig, blir du flaskehalsen. Gi ansatte litt ansvar for &aring; l&oslash;se bytter seg imellom.
            </li>
            <li>
              <strong className="text-text">Ignorere tilbakemeldinger.</strong>{" "}
              Hvis de samme problemene dukker opp uke etter uke, er det verdt &aring; lytte og justere.
            </li>
          </ul>

          <h2 className="text-2xl font-black text-text pt-4">
            N&aring;r tipsene ikke er nok
          </h2>
          <p>
            Gode rutiner hjelper mye, men p&aring; et tidspunkt trenger du et verkt&oslash;y
            som st&oslash;tter deg. Et regneark eller en gruppemelding holder ikke n&aring;r
            ting begynner &aring; endre seg fort.
          </p>
          <p>
            Et enkelt vaktplan-verkt&oslash;y som Zplan lar deg sette opp vakter p&aring;
            minutter, samle tilgjengelighet digitalt og gi alle ansatte tilgang til
            den oppdaterte planen p&aring; mobilen. Det erstatter ikke gode rutiner, men
            det gj&oslash;r dem mye enklere &aring; f&oslash;lge.
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
