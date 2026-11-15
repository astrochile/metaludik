import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import ProjectImage from "@/components/ProjectImage";
import { Reveal } from "@/components/Reveal";
import { services, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Corte plasma CNC, fabricación metálica, letreros, proyectos especiales y excavaciones con miniexcavadora. Servicios de Metaludik en Rancagua.",
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Servicios"
          title="Lo que hacemos"
          lede="Del corte a la instalación en terreno, y ahora también excavaciones. Soldadura y montaje son parte de todo lo que hacemos."
        />

        <div className="mx-auto max-w-7xl divide-y divide-line px-5 sm:px-8">
          {services.map((s, i) => {
            const related = projects.filter((p) => p.category === s.title).slice(0, 3);
            return (
              <section key={s.slug} id={s.slug} className="scroll-mt-24 py-16 sm:py-20">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
                  <Reveal className="lg:col-span-5">
                    <span className="font-display text-sm font-bold text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-ink/70">{s.short}</p>
                    <ul className="mt-6 space-y-2.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
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
                  </Reveal>

                  <div className="lg:col-span-7">
                    {related.length > 0 ? (
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {related.map((p) => (
                          <Reveal key={p.slug} y={14} className="aspect-square">
                            <ProjectImage
                              href={`/proyectos/${p.slug}`}
                              src={p.cover}
                              alt={p.title}
                              label={p.client}
                              className="h-full"
                            />
                          </Reveal>
                        ))}
                      </div>
                    ) : (
                      <Reveal y={14} className="relative aspect-[4/3] w-full overflow-hidden bg-graphite">
                        <Image
                          src={s.photo}
                          alt={s.photoAlt}
                          fill
                          sizes="(min-width: 1024px) 58vw, 100vw"
                          className="object-cover"
                        />
                      </Reveal>
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
