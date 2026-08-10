import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import ProjectImage from "@/components/ProjectImage";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casos reales de Metaludik: letreros corporativos, estructuras metálicas, corte plasma CNC y proyectos personalizados en Rancagua.",
};

// composición editorial: alterna tamaños para que la grilla no se sienta uniforme
const SPANS = [
  "sm:col-span-2 lg:col-span-2 aspect-[16/10]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "sm:col-span-2 lg:col-span-2 aspect-[16/10]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "sm:col-span-2 lg:col-span-2 aspect-[16/10]",
];

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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06} className={SPANS[i % SPANS.length]}>
                <ProjectImage
                  href={`/proyectos/${p.slug}`}
                  src={p.cover}
                  alt={p.title}
                  label={p.client}
                  category={p.category}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
