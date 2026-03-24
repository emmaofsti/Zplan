import Link from "next/link";

function IconArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function BloggLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full bg-bg/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">Z</span>
              <span className="absolute bottom-0.5 left-0 z-0 h-2.5 w-full bg-yellow/40" />
            </span>
            plan
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/blogg"
              className="text-sm font-medium text-text-secondary transition hover:text-text"
            >
              Blogg
            </Link>
            <a
              href="/#pris"
              className="group flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 hover:gap-3"
            >
              Start gratis
              <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 pt-20">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-text-muted sm:flex-row">
          <Link href="/" className="font-black text-text">
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">Z</span>
              <span className="absolute bottom-0 left-0 z-0 h-2 w-full bg-yellow/40" />
            </span>
            plan
          </Link>
          <span>&copy; 2026 Zplan. Alle rettigheter reservert.</span>
          <div className="flex gap-6">
            <Link href="/blogg" className="transition hover:text-text">
              Blogg
            </Link>
            <a href="#" className="transition hover:text-text">
              Personvern
            </a>
            <a href="#" className="transition hover:text-text">
              Vilk&aring;r
            </a>
            <a href="#" className="transition hover:text-text">
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
