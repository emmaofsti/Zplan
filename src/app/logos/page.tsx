export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <h1 className="text-center text-3xl font-black mb-4">Logo-forslag</h1>
      <p className="text-center text-text-muted mb-16">Hvilken vibe liker du best?</p>

      <div className="mx-auto max-w-4xl grid gap-16">

        {/* APP ICON - Valgt konsept */}
        <div className="text-center space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Valgt — App-ikon</p>
          <div className="flex items-center justify-center gap-12">
            {/* Large preview */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-28 w-28 items-center justify-center rounded-[28px] bg-[#1a1a1a] shadow-2xl">
                <span className="text-6xl font-black">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">Z</span>
                    <span className="absolute bottom-1 left-0 z-0 h-4 w-full bg-yellow/40" />
                  </span>
                </span>
              </div>
              <span className="text-xs font-bold text-text-muted">512px</span>
            </div>

            {/* Medium */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1a1a1a] shadow-xl">
                <span className="text-3xl font-black">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">Z</span>
                    <span className="absolute bottom-0.5 left-0 z-0 h-2.5 w-full bg-yellow/40" />
                  </span>
                </span>
              </div>
              <span className="text-xs font-bold text-text-muted">64px</span>
            </div>

            {/* Small */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1a1a1a] shadow-lg">
                <span className="text-xl font-black">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">Z</span>
                    <span className="absolute bottom-0 left-0 z-0 h-1.5 w-full bg-yellow/40" />
                  </span>
                </span>
              </div>
              <span className="text-xs font-bold text-text-muted">40px</span>
            </div>

            {/* Favicon */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1a1a1a]">
                <span className="text-sm font-black">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">Z</span>
                    <span className="absolute bottom-0 left-0 z-0 h-1 w-full bg-yellow/40" />
                  </span>
                </span>
              </div>
              <span className="text-xs font-bold text-text-muted">Favicon</span>
            </div>
          </div>

          {/* Context: how it looks on phone home screen */}
          <div className="flex justify-center mt-4">
            <div className="rounded-3xl bg-gray-100 p-6 px-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1a1a1a] shadow-lg">
                    <span className="text-2xl font-black">
                      <span className="relative inline-block">
                        <span className="relative z-10 text-accent">Z</span>
                        <span className="absolute bottom-0 left-0 z-0 h-2 w-full bg-yellow/40" />
                      </span>
                    </span>
                  </div>
                  <span className="text-[10px] font-medium">Zplan</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 shadow-lg">
                    <span className="text-2xl text-white font-bold">f</span>
                  </div>
                  <span className="text-[10px] font-medium">Facebook</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 shadow-lg">
                    <span className="text-lg text-white font-bold">Vipps</span>
                  </div>
                  <span className="text-[10px] font-medium">Vipps</span>
                </div>
              </div>
              <p className="text-[10px] text-text-muted text-center mt-3">Hjemskjerm-preview</p>
            </div>
          </div>
        </div>

        <hr className="border-border" />

        {/* Logo 1: Clean bold */}
        <div className="text-center space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-text-muted">1 — Clean & Bold</p>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white font-black text-lg">
                Z
              </div>
              <span className="text-2xl font-black tracking-tight">Zplan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white font-black text-lg">
                Z
              </div>
              <span className="text-2xl font-black tracking-tight text-text-muted">plan</span>
            </div>
          </div>
          <div className="flex justify-center gap-8">
            {/* Dark bg variant */}
            <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-2xl px-6 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white font-black text-lg">
                Z
              </div>
              <span className="text-2xl font-black tracking-tight text-white">Zplan</span>
            </div>
          </div>
        </div>

        <hr className="border-border" />

        {/* Logo 2: Pill style */}
        <div className="text-center space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-text-muted">2 — Pill / Badge</p>
          <div className="flex items-center justify-center gap-8">
            <div className="rounded-full bg-accent px-6 py-2.5">
              <span className="text-xl font-black tracking-tight text-white">zplan</span>
            </div>
            <div className="rounded-full border-2 border-accent px-6 py-2.5">
              <span className="text-xl font-black tracking-tight text-accent">zplan</span>
            </div>
            <div className="rounded-full bg-gradient-to-r from-accent to-[#c94e68] px-6 py-2.5">
              <span className="text-xl font-black tracking-tight text-white">zplan</span>
            </div>
          </div>
        </div>

        <hr className="border-border" />

        {/* Logo 3: Grid/Calendar icon */}
        <div className="text-center space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-text-muted">3 — Kalender-ikon + tekst</p>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-xl border-2 border-accent overflow-hidden">
                <div className="h-3 bg-accent" />
                <div className="grid grid-cols-3 gap-[3px] p-[4px]">
                  <div className="h-2 rounded-[2px] bg-accent/30" />
                  <div className="h-2 rounded-[2px] bg-yellow/50" />
                  <div className="h-2 rounded-[2px] bg-accent/20" />
                  <div className="h-2 rounded-[2px] bg-yellow/40" />
                  <div className="h-2 rounded-[2px] bg-accent/40" />
                  <div className="h-2 rounded-[2px] bg-accent/15" />
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight">Zplan</span>
            </div>

            <div className="flex items-center gap-3 bg-[#1a1a1a] rounded-2xl px-6 py-4">
              <div className="relative h-11 w-11 rounded-xl border-2 border-accent overflow-hidden">
                <div className="h-3 bg-accent" />
                <div className="grid grid-cols-3 gap-[3px] p-[4px]">
                  <div className="h-2 rounded-[2px] bg-accent/40" />
                  <div className="h-2 rounded-[2px] bg-yellow/60" />
                  <div className="h-2 rounded-[2px] bg-accent/30" />
                  <div className="h-2 rounded-[2px] bg-yellow/50" />
                  <div className="h-2 rounded-[2px] bg-accent/50" />
                  <div className="h-2 rounded-[2px] bg-accent/20" />
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">Zplan</span>
            </div>
          </div>
        </div>

        <hr className="border-border" />

        {/* Logo 4: Highlight Z */}
        <div className="text-center space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-text-muted">4 — Highlighted Z</p>
          <div className="flex items-center justify-center gap-8">
            <span className="text-3xl font-black tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10">Z</span>
                <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-yellow/40" />
              </span>
              plan
            </span>

            <span className="text-3xl font-black tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">Z</span>
                <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-yellow/40" />
              </span>
              plan
            </span>

            <div className="bg-[#1a1a1a] rounded-2xl px-6 py-4">
              <span className="text-3xl font-black tracking-tight text-white">
                <span className="relative inline-block">
                  <span className="relative z-10 text-accent">Z</span>
                  <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-yellow/40" />
                </span>
                plan
              </span>
            </div>
          </div>
        </div>

        <hr className="border-border" />

        {/* Logo 5: Slash / divider */}
        <div className="text-center space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-text-muted">5 — Z / plan (slash)</p>
          <div className="flex items-center justify-center gap-8">
            <span className="text-2xl font-black tracking-tight">
              Z<span className="text-accent">/</span>plan
            </span>

            <span className="text-2xl font-black tracking-tight">
              <span className="text-accent">Z</span><span className="text-yellow font-light">/</span>plan
            </span>

            <div className="bg-[#1a1a1a] rounded-2xl px-6 py-4">
              <span className="text-2xl font-black tracking-tight text-white">
                Z<span className="text-accent">/</span>plan
              </span>
            </div>
          </div>
        </div>

        <hr className="border-border" />

        {/* Logo 6: Stacked / compact */}
        <div className="text-center space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-text-muted">6 — Stacked / Ikon-only</p>
          <div className="flex items-center justify-center gap-12">
            {/* App icon style */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-[#c94e68] shadow-lg shadow-accent/30">
                <span className="text-3xl font-black text-white">Z</span>
              </div>
              <span className="text-xs font-bold text-text-muted">App-ikon</span>
            </div>

            {/* With calendar hint */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-[#c94e68] shadow-lg shadow-accent/30 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-4 bg-white/20" />
                <span className="relative text-3xl font-black text-white mt-1">Z</span>
              </div>
              <span className="text-xs font-bold text-text-muted">Kalender-hint</span>
            </div>

            {/* Rounded */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/30">
                <span className="text-3xl font-black text-white">Z</span>
              </div>
              <span className="text-xs font-bold text-text-muted">Rund</span>
            </div>

            {/* Yellow accent */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1a1a1a] shadow-lg">
                <span className="text-3xl font-black text-yellow">Z</span>
              </div>
              <span className="text-xs font-bold text-text-muted">Mørk + gul</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
