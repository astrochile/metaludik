import type { Metadata } from "next";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://metaludik.cl"),
  title: {
    default: "Metaludik — Ideas que toman forma en metal",
    template: "%s — Metaludik",
  },
  description:
    "Corte plasma CNC, soldadura calificada y fabricación metálica a medida en Rancagua. De la idea al proyecto instalado.",
  keywords: [
    "corte plasma cnc Rancagua",
    "fabricación metálica Rancagua",
    "letreros corporativos Rancagua",
    "soldadura calificada O'Higgins",
    "estructuras metálicas Rancagua",
  ],
  openGraph: {
    title: "Metaludik — Ideas que toman forma en metal",
    description:
      "Corte plasma CNC, soldadura calificada y fabricación metálica a medida en Rancagua.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
