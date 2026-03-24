import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://zplan.no"; // Oppdater når domene er klart

export const metadata: Metadata = {
  title: "Zplan – Superenkel vaktplan for butikker",
  description:
    "Lag vaktplan på minutter – uten opplæring eller møter. Perfekt for små butikker med deltidsansatte. 249 kr/mnd, 14 dager gratis.",
  keywords: [
    "vaktplan",
    "vaktplan butikk",
    "enkel vaktplan",
    "vaktliste",
    "deltidsansatte vaktplan",
    "excel vaktplan alternativ",
    "vaktplan små bedrifter",
    "vaktplanlegging",
    "turnus butikk",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zplan – Superenkel vaktplan for butikker",
    description:
      "Slutt med Excel-kaos. Lag vaktplan på minutter – uten opplæring eller møter. 14 dager gratis.",
    url: siteUrl,
    siteName: "Zplan",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zplan – Superenkel vaktplan for butikker",
    description:
      "Slutt med Excel-kaos. Lag vaktplan på minutter – uten opplæring eller møter.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/app-icon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Zplan",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Superenkel vaktplan for butikker – kom i gang på minutter, uten møter eller opplæring.",
              offers: {
                "@type": "Offer",
                price: "249",
                priceCurrency: "NOK",
                priceValidUntil: "2026-12-31",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "1",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
