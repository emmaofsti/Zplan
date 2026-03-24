export default function BrandGuide() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-6xl font-black tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">Z</span>
              <span className="absolute bottom-2 left-0 z-0 h-5 w-full bg-yellow/40" />
            </span>
            plan
          </span>
          <h1 className="mt-6 text-2xl font-bold text-text-muted">Brand Guide</h1>
          <p className="mt-2 text-text-muted">Versjon 1.0 — Mars 2026</p>
        </div>

        {/* ─── LOGO ─── */}
        <Section title="Logo">
          <p className="text-text-secondary mb-8">
            Logoen er en ren typografisk logo. Z-en er alltid rosa (accent) med en gul highlight-strek bak.
            &quot;plan&quot; er alltid svart (eller hvit på mørk bakgrunn).
          </p>

          <div className="grid grid-cols-2 gap-6">
            {/* Light bg */}
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-border p-8 bg-white">
              <span className="text-3xl font-black tracking-tight">
                <span className="relative inline-block">
                  <span className="relative z-10 text-accent">Z</span>
                  <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-yellow/40" />
                </span>
                plan
              </span>
              <span className="text-xs text-text-muted">Lys bakgrunn</span>
            </div>

            {/* Dark bg */}
            <div className="flex flex-col items-center gap-3 rounded-2xl p-8 bg-[#1a1a1a]">
              <span className="text-3xl font-black tracking-tight text-white">
                <span className="relative inline-block">
                  <span className="relative z-10 text-accent">Z</span>
                  <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-yellow/40" />
                </span>
                plan
              </span>
              <span className="text-xs text-[#8a8a8a]">Mørk bakgrunn</span>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-bg-secondary p-6">
            <h4 className="font-bold text-sm mb-3">Regler</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>— Z-en skal alltid ha den gule highlight-streken</li>
              <li>— Aldri endre fargene på Z eller highlight</li>
              <li>— Minimum størrelse: 14px font</li>
              <li>— Alltid bruk Inter Black (900) for logoen</li>
              <li>— Ikke legg logo på busy/mønstret bakgrunn</li>
            </ul>
          </div>
        </Section>

        {/* ─── APP IKON ─── */}
        <Section title="App-ikon">
          <p className="text-text-secondary mb-8">
            App-ikonet bruker svart bakgrunn med rosa Z og gul highlight. Brukes som favicon, PWA-ikon og på hjemskjerm.
          </p>

          <div className="flex items-end gap-8 justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-24 w-24 items-center justify-center rounded-[22px] bg-[#1a1a1a] shadow-xl">
                <span className="text-5xl font-black">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">Z</span>
                    <span className="absolute bottom-1 left-0 z-0 h-3.5 w-full bg-yellow/40" />
                  </span>
                </span>
              </div>
              <span className="text-xs text-text-muted">512px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1a1a1a] shadow-lg">
                <span className="text-2xl font-black">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">Z</span>
                    <span className="absolute bottom-0.5 left-0 z-0 h-2 w-full bg-yellow/40" />
                  </span>
                </span>
              </div>
              <span className="text-xs text-text-muted">64px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1a1a1a]">
                <span className="text-sm font-black">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">Z</span>
                    <span className="absolute bottom-0 left-0 z-0 h-1 w-full bg-yellow/40" />
                  </span>
                </span>
              </div>
              <span className="text-xs text-text-muted">Favicon</span>
            </div>
          </div>
        </Section>

        {/* ─── FARGER ─── */}
        <Section title="Farger">
          <p className="text-text-secondary mb-8">
            Zplan bruker en varm, pastell palett med rosa som aksent og gul som sekundær farge. Svart tekst for lesbarhet.
          </p>

          <h4 className="font-bold text-sm mb-4">Primærfarger</h4>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <ColorSwatch color="#e8728a" name="Rosa / Accent" code="#e8728a" desc="CTA, linker, logo" />
            <ColorSwatch color="#f5c842" name="Gul / Sekundær" code="#f5c842" desc="Highlights, ikoner" />
            <ColorSwatch color="#1a1a1a" name="Svart / Tekst" code="#1a1a1a" desc="Overskrifter, brødtekst" />
          </div>

          <h4 className="font-bold text-sm mb-4">Nøytrale</h4>
          <div className="grid grid-cols-4 gap-4 mb-8">
            <ColorSwatch color="#ffffff" name="Hvit" code="#ffffff" desc="Bakgrunn" border />
            <ColorSwatch color="#fef9f4" name="Varm hvit" code="#fef9f4" desc="Sekundær bg" />
            <ColorSwatch color="#4a4a4a" name="Grå" code="#4a4a4a" desc="Brødtekst" />
            <ColorSwatch color="#8a8a8a" name="Lys grå" code="#8a8a8a" desc="Muted tekst" />
          </div>

          <h4 className="font-bold text-sm mb-4">Funksjonsfarger</h4>
          <div className="grid grid-cols-3 gap-4">
            <ColorSwatch color="#16a34a" name="Grønn" code="#16a34a" desc="Suksess, checkmarks" />
            <ColorSwatch color="#dc2626" name="Rød" code="#dc2626" desc="Feil, kryss" />
            <ColorSwatch color="#d45e76" name="Accent hover" code="#d45e76" desc="Knapp hover" />
          </div>
        </Section>

        {/* ─── TYPOGRAFI ─── */}
        <Section title="Typografi">
          <p className="text-text-secondary mb-8">
            Vi bruker Inter for alt. Clean, lesbar, og fungerer i alle størrelser.
          </p>

          <div className="space-y-6">
            <div className="rounded-xl border border-border p-6">
              <span className="text-xs text-text-muted font-medium">H1 — Inter Black, 48-72px</span>
              <p className="text-5xl font-black tracking-tight mt-2">Slutt med Excel-kaos</p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <span className="text-xs text-text-muted font-medium">H2 — Inter Black, 30-40px</span>
              <p className="text-3xl font-black tracking-tight mt-2">Tre steg. Det er alt.</p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <span className="text-xs text-text-muted font-medium">H3 — Inter Bold, 18-20px</span>
              <p className="text-lg font-bold mt-2">Vaktene ligger i Messenger</p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <span className="text-xs text-text-muted font-medium">Body — Inter Regular, 16px</span>
              <p className="text-base text-text-secondary leading-relaxed mt-2">
                Lag vaktplan på minutter – uten opplæring eller møter.
                Perfekt for små butikker med deltidsansatte.
              </p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <span className="text-xs text-text-muted font-medium">Small — Inter Medium, 14px</span>
              <p className="text-sm font-medium text-text-muted mt-2">
                Ingen binding. 249 kr/mnd etter prøveperiode.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-bg-secondary p-6">
            <h4 className="font-bold text-sm mb-3">Font-vekter i bruk</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="font-normal">Regular (400) — brødtekst</span>
              <span className="font-medium">Medium (500) — labels, small text</span>
              <span className="font-semibold">Semibold (600) — knapper, links</span>
              <span className="font-bold">Bold (700) — H3, kort-titler</span>
              <span className="font-extrabold">Extrabold (800) — priser</span>
              <span className="font-black">Black (900) — H1, H2, logo</span>
            </div>
          </div>
        </Section>

        {/* ─── KNAPPER ─── */}
        <Section title="Knapper">
          <p className="text-text-secondary mb-8">
            Primærknappen er alltid rosa med hvit tekst, pill-form (full runding). Pil-ikon er valgfritt men anbefalt på CTA.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <a className="group flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25">
              Start gratis i 14 dager
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white">
              Start gratis
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <a className="flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-accent border-2 border-accent/20">
              Sekundær knapp
            </a>
            <a className="rounded-full bg-[#1a1a1a] px-8 py-3.5 text-base font-bold text-white">
              Mørk knapp
            </a>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-accent to-[#c94e68] p-8">
            <a className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-accent">
              Invertert (på farget bg)
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </Section>

        {/* ─── IKONER ─── */}
        <Section title="Ikoner">
          <p className="text-text-secondary mb-8">
            Vi bruker enkle line-ikoner (stroke, 1.5px). Ikoner vises i gul (#f5c842) på en lys gul bakgrunn.
          </p>

          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "Chat", d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
              { name: "Lyn", d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
              { name: "Telefon", d: "M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" },
              { name: "Flamme", d: "M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2 2-4 2z" },
            ].map((icon) => (
              <div key={icon.name} className="flex flex-col items-center gap-2 rounded-xl border border-border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow/15">
                  <svg className="h-6 w-6 text-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon.d} />
                  </svg>
                </div>
                <span className="text-xs text-text-muted">{icon.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-bg-secondary p-6">
            <h4 className="font-bold text-sm mb-3">Ikon-regler</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>— Stroke-stil, ikke filled</li>
              <li>— 1.5px stroke-width</li>
              <li>— Farge: #f5c842 (gul) i ikon-bokser</li>
              <li>— Bakgrunn: rgba(245, 200, 66, 0.15)</li>
              <li>— Rounded xl (12px) på bakgrunns-boksen</li>
            </ul>
          </div>
        </Section>

        {/* ─── VISUELLE EFFEKTER ─── */}
        <Section title="Visuelle effekter">
          <p className="text-text-secondary mb-8">
            Zplan bruker noen gjentakende visuelle grep for å gi personlighet.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-6">
              <h4 className="font-bold text-sm mb-4">Highlight-strek</h4>
              <p className="text-2xl font-black">
                Vi gjør{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">viktige ord</span>
                  <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-yellow/30" />
                </span>
                {" "}tydelige
              </p>
              <p className="mt-3 text-xs text-text-muted">Gul strek (30% opacity) under nøkkelord</p>
            </div>

            <div className="rounded-xl border border-border p-6">
              <h4 className="font-bold text-sm mb-4">Gradient-tekst</h4>
              <p className="text-2xl font-black bg-gradient-to-r from-accent to-[#c94e68] bg-clip-text text-transparent">
                Rosa gradient
              </p>
              <p className="mt-3 text-xs text-text-muted">Fra #e8728a til #c94e68</p>
            </div>

            <div className="rounded-xl border border-border p-6">
              <h4 className="font-bold text-sm mb-4">Pulserende dot</h4>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                </span>
                <span className="text-sm text-text-secondary">Brukes i badges</span>
              </div>
            </div>

            <div className="rounded-xl border border-border p-6">
              <h4 className="font-bold text-sm mb-4">Kort-hover</h4>
              <div className="rounded-xl border border-border p-4 transition-all hover:shadow-md hover:-translate-y-1 hover:border-accent/20 cursor-pointer">
                <p className="text-sm font-semibold">Hover meg</p>
                <p className="text-xs text-text-muted mt-1">Shadow + lift + border-farge</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ─── TONE OF VOICE ─── */}
        <Section title="Tone of voice">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-green/5 border border-green/20 p-6">
              <h4 className="font-bold text-sm text-green mb-4">Slik snakker vi</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>— Enkelt og rett på sak</li>
                <li>— Uformelt, som en venn</li>
                <li>— Konkret, ikke abstrakt</li>
                <li>— &quot;Ferdig på minutter&quot;</li>
                <li>— &quot;Du er i gang samme dag&quot;</li>
                <li>— &quot;Noe som bare funker&quot;</li>
              </ul>
            </div>

            <div className="rounded-xl bg-red-subtle border border-red/20 p-6">
              <h4 className="font-bold text-sm text-red mb-4">Slik snakker vi IKKE</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>— Buzzwords (&quot;AI-drevet&quot;, &quot;synergier&quot;)</li>
                <li>— Korporat (&quot;enterprise-løsning&quot;)</li>
                <li>— Overdrivelser (&quot;revolusjonerende&quot;)</li>
                <li>— Teknisk sjargong</li>
                <li>— Lange, kompliserte setninger</li>
                <li>— &quot;Kontakt oss for en demo&quot;</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-bg-secondary p-6">
            <h4 className="font-bold text-sm mb-3">Posisjonering i én setning</h4>
            <p className="text-lg font-bold">
              &quot;Superenkel vaktplan for butikker – kom i gang på minutter, uten møter eller opplæring&quot;
            </p>
          </div>
        </Section>

        {/* ─── SPACING ─── */}
        <Section title="Spacing & Layout">
          <div className="rounded-xl bg-bg-secondary p-6">
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>— <strong className="text-text">Max-width:</strong> 1280px (5xl) for innhold, 700px for artikler</li>
              <li>— <strong className="text-text">Seksjon-padding:</strong> py-24 (96px) / md:py-32 (128px)</li>
              <li>— <strong className="text-text">Kort border-radius:</strong> 16px (2xl)</li>
              <li>— <strong className="text-text">Knapp border-radius:</strong> full (pill)</li>
              <li>— <strong className="text-text">Mobil-first:</strong> Alltid design mobil først</li>
              <li>— <strong className="text-text">Font:</strong> Inter, system-ui, sans-serif</li>
            </ul>
          </div>
        </Section>

      </div>
    </div>
  );
}

/* ─── Helper Components ─── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-black tracking-tight">{title}</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {children}
    </section>
  );
}

function ColorSwatch({ color, name, code, desc, border = false }: { color: string; name: string; code: string; desc: string; border?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`h-20 rounded-xl ${border ? "border border-border" : ""}`}
        style={{ backgroundColor: color }}
      />
      <div>
        <p className="font-bold text-sm">{name}</p>
        <p className="text-xs text-text-muted font-mono">{code}</p>
        <p className="text-xs text-text-muted">{desc}</p>
      </div>
    </div>
  );
}
