/* ─── Icon Components ─── */
function IconChat({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconFire({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2 2-4 2z" />
    </svg>
  );
}

function IconConfused({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2.5} />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2.5} />
    </svg>
  );
}

function IconBolt({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconRocket({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconCoin({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M14.5 9.5a3 3 0 0 0-5 0" />
      <line x1="12" y1="7" x2="12" y2="17" />
      <path d="M9.5 14.5a3 3 0 0 0 5 0" />
    </svg>
  );
}

function IconPhone({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={2.5} />
    </svg>
  );
}

function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconX({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconQuote({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Pricing />
      <WhyUs />
      <Comparison />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ─── Nav ─── */
function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-bg/60 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-xl font-black tracking-tight">
          <span className="relative inline-block">
            <span className="relative z-10 text-accent">Z</span>
            <span className="absolute bottom-0.5 left-0 z-0 h-2.5 w-full bg-yellow/40" />
          </span>
          plan
        </span>
        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="text-sm font-semibold text-text-secondary hover:text-text transition-colors"
          >
            Logg inn
          </a>
          <a
            href="/onboard"
            className="group flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 hover:gap-3"
          >
            Start gratis
            <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pt-40 md:pb-36">
      {/* Gradient blobs */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-gradient-to-br from-accent/15 via-yellow/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-40 h-[400px] w-[400px] rounded-full bg-yellow/10 blur-3xl" />
      <div className="pointer-events-none absolute top-60 -left-40 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-5 py-2 text-sm font-medium text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Enklere enn Excel. Billigere enn Smartplan.
        </div>

        <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl md:leading-[1.05]">
          Slutt med
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Excel-kaos</span>
            <span className="absolute bottom-2 left-0 z-0 h-4 w-full bg-yellow/30 md:bottom-3 md:h-5" />
          </span>
          <br />
          <span className="bg-gradient-to-r from-accent to-[#c94e68] bg-clip-text text-transparent">i vaktplanen</span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
          Lag vaktplan på minutter – uten opplæring eller møter.
          <br className="hidden md:block" />
          Perfekt for små butikker med deltidsansatte.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/onboard"
            className="group flex w-full items-center justify-center gap-2 sm:w-auto rounded-full bg-accent px-8 py-4 text-base font-bold text-white transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30 hover:gap-3 hover:-translate-y-0.5"
          >
            Start gratis i 14 dager
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <p className="mt-5 text-sm text-text-muted">
          Ingen binding. 249 kr/mnd etter prøveperiode.
        </p>

        {/* Mini mockup hint */}
        <div className="mx-auto mt-16 max-w-lg">
          <div className="rounded-2xl border border-border bg-white p-4 shadow-xl shadow-black/5">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-3 w-3 rounded-full bg-accent/30" />
              <div className="h-3 w-3 rounded-full bg-yellow/50" />
              <div className="h-3 w-3 rounded-full bg-green/30" />
              <div className="ml-auto h-2 w-20 rounded-full bg-border" />
            </div>
            <div className="grid grid-cols-7 gap-1.5">
              {["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"].map((d) => (
                <div key={d} className="text-center text-[10px] font-semibold text-text-muted uppercase">{d}</div>
              ))}
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className={`h-10 rounded-lg ${i === 0 ? "bg-accent/15 border-2 border-accent/30" : i === 2 ? "bg-yellow/20 border-2 border-yellow/40" : i === 4 ? "bg-accent/10" : "bg-bg-secondary"} transition-all`} />
              ))}
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={`r2-${i}`} className={`h-10 rounded-lg ${i === 1 ? "bg-yellow/20 border-2 border-yellow/40" : i === 3 ? "bg-accent/15 border-2 border-accent/30" : i === 5 ? "bg-yellow/15" : "bg-bg-secondary"} transition-all`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Problem ─── */
function Problem() {
  const problems = [
    {
      icon: <IconChat className="h-7 w-7 text-yellow" />,
      title: "Vaktene ligger i Messenger",
      desc: "Ingen vet hvem som jobber når. Meldinger forsvinner i chatten.",
      rotate: "-rotate-1",
    },
    {
      icon: <IconFire className="h-7 w-7 text-yellow" />,
      title: "Endringer skaper kaos",
      desc: "Noen bytter vakt, men beskjeden når ikke frem. Dobbeltbooking.",
      rotate: "rotate-1",
    },
    {
      icon: <IconConfused className="h-7 w-7 text-yellow" />,
      title: "Null oversikt",
      desc: "Du scroller gjennom Excel-ark og prøver å huske hvem som kan jobbe.",
      rotate: "-rotate-1",
    },
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/50 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-red-subtle px-4 py-1.5 text-sm font-semibold text-red">
            Høres kjent ut?
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
            Vaktplanlegging trenger
            <br className="hidden md:block" />
            ikke være <span className="relative inline-block"><span className="relative z-10">kaos</span><span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-yellow/30 md:h-4" /></span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border border-border bg-white p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 ${p.rotate}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow/15">
                {p.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Solution ─── */
function Solution() {
  const steps = [
    {
      num: "1",
      title: "Legg til ansatte",
      desc: "Skriv inn navn og kontaktinfo. Ferdig på sekunder.",
      color: "bg-accent/15 text-accent border-accent/20",
    },
    {
      num: "2",
      title: "Sett opp vakter",
      desc: "Dra og slipp, eller fyll ut raskt. Du bestemmer.",
      color: "bg-yellow/20 text-yellow-dark border-yellow/30",
    },
    {
      num: "3",
      title: "Ferdig",
      desc: "Alle ser planen sin. Endringer oppdateres i sanntid.",
      color: "bg-green/10 text-green border-green/20",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-green-subtle px-4 py-1.5 text-sm font-semibold text-green">
            Slik fungerer det
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
            Tre steg. Det er alt.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.num} className="relative text-center">
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
              )}
              <div className={`relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-2 ${s.color} text-2xl font-black`}>
                {s.num}
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pris" className="relative py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-secondary/30 via-bg-secondary/60 to-bg-secondary/30" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            Enkel pris
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
            Én plan. Ingen overraskelser.
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-md">
          {/* Glow behind card */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-yellow/10 to-accent/5 blur-2xl" />

          <div className="relative rounded-3xl border-2 border-accent/20 bg-white p-10 text-center shadow-xl">
            <div className="inline-block rounded-full bg-yellow/20 px-4 py-1 text-sm font-bold text-text">
              Alt inkludert
            </div>

            <div className="mt-6 flex items-baseline justify-center gap-1">
              <span className="text-6xl font-black tracking-tight">249</span>
              <span className="text-lg text-text-muted font-medium">kr/mnd</span>
            </div>

            <p className="mt-3 text-text-secondary">
              Ubegrenset ansatte. Ingen pris per bruker.
            </p>

            <ul className="mt-8 space-y-4 text-left">
              {[
                "14 dager gratis prøveperiode",
                "Ubegrenset antall ansatte",
                "Fungerer på mobil, nettbrett og PC",
                "Endringer i sanntid",
                "Ingen binding – avslutt når som helst",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/10">
                    <IconCheck className="h-3 w-3 text-green" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/onboard"
              className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 text-base font-bold text-white transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 hover:gap-3"
            >
              Start gratis i 14 dager
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <p className="mt-3 text-xs text-text-muted">
              Ingen betalingsinformasjon kreves.
            </p>

            <div className="mt-8 rounded-xl bg-bg-secondary p-5">
              <p className="text-sm font-bold">
                Trenger du hjelp med oppsettet?
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Vi setter opp alt for deg –{" "}
                <span className="font-bold text-text">1 500 kr</span>{" "}
                (engangspris)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Us ─── */
function WhyUs() {
  const reasons = [
    {
      icon: <IconBolt className="h-6 w-6 text-yellow" />,
      title: "Superenkelt",
      desc: "Ingen opplæring trengs. Hvis du kan bruke en kalender, kan du bruke Zplan.",
    },
    {
      icon: <IconRocket className="h-6 w-6 text-yellow" />,
      title: "Klart på minutter",
      desc: "Sett opp butikken din og første vaktplan på under 10 minutter.",
    },
    {
      icon: <IconCoin className="h-6 w-6 text-yellow" />,
      title: "Én fast pris",
      desc: "249 kr/mnd. Ingen pris per ansatt. Ingen overraskelser.",
    },
    {
      icon: <IconPhone className="h-6 w-6 text-yellow" />,
      title: "Funker overalt",
      desc: "Mobil, nettbrett, PC. Alle ser vaktene sine, alltid oppdatert.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-yellow/15 px-4 py-1.5 text-sm font-semibold text-text">
            Hvorfor Zplan
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
            Bygget for folk som
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-accent to-[#c94e68] bg-clip-text text-transparent">hater systemer</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group flex gap-5 rounded-2xl border border-border bg-white p-6 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-yellow/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow/15 transition-colors group-hover:bg-yellow/25">
                {r.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg">{r.title}</h3>
                <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Comparison ─── */
function Comparison() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/50 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            Sammenligning
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
            Slutt med overkill
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary text-lg">
            Du trenger ikke et system bygget for sykehus. Du trenger noe som bare funker.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:gap-6">
          {/* Other systems */}
          <div className="rounded-2xl border border-border bg-white p-6 md:p-8 opacity-60">
            <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
              Andre systemer
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Komplisert oppsett",
                "Krever opplæring",
                "Pris per ansatt",
                "Uker før du er i gang",
                "Funksjoner du aldri bruker",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-subtle mt-0.5">
                    <IconX className="h-3 w-3 text-red" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Zplan */}
          <div className="rounded-2xl border-2 border-accent/30 bg-white p-6 md:p-8 shadow-lg shadow-accent/5">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Zplan
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Klart på minutter",
                "Null opplæring",
                "Fast pris, alltid",
                "I gang samme dag",
                "Kun det du trenger",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/10 mt-0.5">
                    <IconCheck className="h-3 w-3 text-green" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Social Proof ─── */
function SocialProof() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="relative rounded-3xl bg-gradient-to-br from-accent/5 via-yellow/5 to-accent/5 p-10 md:p-16">
          <IconQuote className="mx-auto h-10 w-10 text-accent/20" />
          <p className="mt-6 text-2xl font-bold leading-relaxed md:text-3xl">
            Vi gikk fra kaos i Messenger til full kontroll over vaktene
            <span className="text-accent"> – på én ettermiddag.</span>
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
              BL
            </div>
            <div className="text-left">
              <p className="font-bold text-sm">Butikkleder</p>
              <p className="text-xs text-text-muted">Retailbutikk, Oslo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    {
      q: "Må jeg laste ned en app?",
      a: "Nei. Zplan fungerer i nettleseren – på mobil, nettbrett og PC. Du kan også legge den til på hjemskjermen som en app.",
    },
    {
      q: "Funker det på mobil?",
      a: "Ja. Zplan er bygget mobil-først. Ansatte kan sjekke vaktene sine fra telefonen.",
    },
    {
      q: "Kan jeg avslutte når som helst?",
      a: "Ja. Ingen binding, ingen oppsigelsestid. Du betaler månedlig og kan stoppe når du vil.",
    },
    {
      q: "Hvor lagres dataene mine?",
      a: "All data lagres sikkert i Europa med daglig backup. Vi følger GDPR.",
    },
    {
      q: "Hva om jeg har mange ansatte?",
      a: "Prisen er den samme uansett. 249 kr/mnd – om du har 3 eller 30 ansatte.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-secondary/30 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-2xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            FAQ
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
            Ofte stilte spørsmål
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-border bg-white p-6 transition-all hover:shadow-sm">
              <h3 className="font-bold">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─── */
function FinalCTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-[#c94e68] p-12 md:p-20 text-center text-white">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10" />

          <h2 className="relative text-3xl font-black tracking-tight md:text-5xl">
            Klar til å droppe Excel?
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-lg text-white/80">
            Prøv Zplan gratis i 14 dager. Ingen kredittkort. Ingen binding.
            Ingen møter.
          </p>
          <a
            href="/onboard"
            className="group relative mt-10 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-bold text-accent transition-all hover:shadow-xl hover:-translate-y-0.5 hover:gap-3"
          >
            Start gratis nå
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-text-muted sm:flex-row">
        <span className="font-black text-text">
          <span className="relative inline-block">
            <span className="relative z-10 text-accent">Z</span>
            <span className="absolute bottom-0 left-0 z-0 h-2 w-full bg-yellow/40" />
          </span>
          plan
        </span>
        <span>© 2026 Zplan. Alle rettigheter reservert.</span>
        <div className="flex gap-6">
          <a href="/blogg" className="transition hover:text-text">
            Blogg
          </a>
          <a href="#" className="transition hover:text-text">
            Personvern
          </a>
          <a href="#" className="transition hover:text-text">
            Vilkår
          </a>
          <a href="#" className="transition hover:text-text">
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
}
