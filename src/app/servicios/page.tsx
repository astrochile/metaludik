import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import { services, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Corte plasma CNC, estructuras metálicas, soldadura y montajes, letreros corporativos y proyectos personalizados. Servicios reales de Metaludik en Rancagua.",
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Servicios"
          title="Cinco formas de trabajar el metal"
          lede="Desde el corte hasta la instalación en terreno. Esto es lo que hacemos, sin categorías vacías: cada bloque tiene proyectos reales detrás."
        />

        <div className="mx-auto max-w-7xl divide-y divide-line px-5 sm:px-8">
          {services.map((s, i) => {
            const related = projects.filter((p) => p.category === s.title).slice(0, 3);
            return (
              <section
                key={s.slug}
                id={s.slug}
                className="scroll-mt-24 py-16 sm:py-20"
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-5">
                    <span className="font-mono text-sm text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
                      {s.short}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-ink/75"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/cotizar"
                      className="mt-7 inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange"
                    >
                      Cotizar {s.title.toLowerCase()}
                    </Link>
                  </div>

                  <div className="lg:col-span-7">
                    {related.length > 0 ? (
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {related.map((p) => (
                          <Link
                            key={p.slug}
                            href={`/proyectos/${p.slug}`}
                            className="group relative aspect-square overflow-hidden bg-mist"
                          >
                            <Image
                              src={p.cover}
                              alt={p.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-3">
                              <span className="text-xs font-medium text-white">
                                {p.client}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="flex h-full min-h-[220px] items-center justify-center border border-dashed border-line bg-mist p-8 text-center">
                        <p className="max-w-xs text-sm text-graphite">
                          Estamos documentando más casos de esta categoría.
                          Cuéntanos tu proyecto y sé de los primeros en aparecer aquí.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
