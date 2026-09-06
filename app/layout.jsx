import "./globals.css";
import { Poppins, Newsreader } from "next/font/google";
import Script from "next/script";
import { site, sameAs } from "../lib/site";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";
import JsonLd from "../components/JsonLd";

// Only the weights actually used in the UI are requested: body is 400,
// `font-medium` is 500, `font-semibold` is 600. The serif is headings-only and
// always semibold, so a single weight and no italic keeps the font payload
// small (fonts were ~50% of the page weight before this was trimmed).
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: AI systems that get deployed`,
    template: `%s · ${site.name}`,
  },
  description: site.shortBio,
  alternates: { canonical: "/" },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  icons: {
    icon: [{ url: "/favicon.jpeg", type: "image/jpeg" }],
    shortcut: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: `${site.name}: AI systems that get deployed`,
    description: site.shortBio,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@risab_kshetri",
    title: `${site.name}: AI systems that get deployed`,
    description: site.shortBio,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#F6F6EF",
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Founder & AI Engineer",
  worksFor: { "@type": "Organization", name: site.org.name, url: site.org.url },
  sameAs,
  description: site.shortBio,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${newsreader.variable}`}>
      <body className="min-h-screen text-black-100">
        <JsonLd data={personLd} />
        <HeroBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
        {/* TODO(rishab): create the Plausible site for rishabchhetri.in (or swap
            this for `@vercel/analytics`). Until then this script 404s harmlessly. */}
        <Script
          defer
          data-domain={site.domain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
