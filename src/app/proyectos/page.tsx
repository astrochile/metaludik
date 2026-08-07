import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casos reales de Metaludik: letreros corporativos, estructuras metálicas, corte plasma CNC y proyectos personalizados en Rancagua.",
};

export default function ProyectosPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Proyectos"
          title="Casos reales, no una galería"
          lede="Cada proyecto acá fue fabricado, soldado y muchas veces instalado por Metaludik. Con permiso del cliente antes de publicarlo."
        />

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link key={p.slug} href={`/proyectos/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-orange">
                      {p.category}
                    </span>
                    <h2 className="mt-1 font-display text-lg font-semibold uppercase leading-tight text-white">
                      {p.client}
                    </h2>
                    <span className="mt-1 block text-xs text-white/60">
                      {p.location}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
