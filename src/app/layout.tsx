import type { Metadata } from "next";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
import "@fontsource/archivo/900.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { brand, services } from "@/lib/content";

const SITE_URL = "https://metaludik.cl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Metaludik — Fabricación metálica y corte plasma CNC en Rancagua",
    template: "%s — Metaludik",
  },
  description:
    "Metaludik, taller de Samik Garrido en Rancagua: corte plasma CNC, fabricación metálica, letreros, proyectos a medida y excavaciones con miniexcavadora.",
  keywords: [
    "Metaludik",
    "Samik Garrido",
    "fabricación metálica Rancagua",
    "corte plasma CNC Rancagua",
    "corte CNC Rancagua",
    "estructuras metálicas Rancagua",
    "soldadura Rancagua",
    "letreros metálicos Rancagua",
    "rejas metálicas Rancagua",
    "parrillas metálicas Rancagua",
    "excavaciones Rancagua",
    "miniexcavadora Rancagua",
    "metalistería",
    "fabricación a medida",
  ],
  openGraph: {
    title: "Metaludik — Fabricación metálica y corte plasma CNC en Rancagua",
    description:
      "Corte plasma CNC, estructuras metálicas, soldadura, letreros metálicos y proyectos personalizados. Taller de Samik Garrido en Rancagua.",
    url: SITE_URL,
    siteName: "Metaludik",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Metaludik — fabricación metálica en Rancagua" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metaludik — Fabricación metálica y corte plasma CNC en Rancagua",
    description:
      "Corte plasma CNC, estructuras metálicas, soldadura, letreros metálicos y proyectos personalizados en Rancagua.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Metaludik",
  alternateName: "Metalmecánica Tecnológica S.G.A.",
  description:
    "Taller de fabricación metálica en Rancagua: corte plasma CNC, fabricación metálica, letreros, proyectos a medida y excavaciones con miniexcavadora.",
  url: SITE_URL,
  telephone: brand.phone,
  email: brand.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: brand.city,
    addressRegion: brand.region,
    addressCountry: "CL",
  },
  areaServed: "Rancagua, Región de O'Higgins, Chile",
  founder: {
    "@type": "Person",
    name: "Samik Garrido",
  },
  sameAs: [brand.instagram],
  makesOffer: [...services.map((s) => s.title), "Soldadura y montaje"].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
