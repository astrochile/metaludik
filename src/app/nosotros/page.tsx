import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import { stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Samik Garrido, soldador calificado con 15 años de oficio, fundó Metaludik hace 3 años en Rancagua. Esta es la historia detrás del nombre.",
};

const TIMELINE = [
  {
    year: "Formación",
    text: "Samik se forma como soldador, principalmente en el rubro minero, con cursos de introducción y calificaciones específicas para procesos de extracción de cobre.",
  },
  {
    year: "15 años de oficio",
    text: "Acumula experiencia en soldadura, fabricación metálica, montajes y corte plasma, dominando distintos procesos de soldadura.",
  },
  {
    year: "Hace 3 años",
    text: "Decide abrir su propio taller, primero bajo el nombre Metalmecánica.",
  },
  {
    year: "Nace Metaludik",
    text: "Cambia el nombre para llegar a todo tipo de cliente — industrial y particular — y darle un toque más lúdico a la marca: METAL + LÚDICO.",
  },
  {
    year: "Hoy",
    text: "Metaludik es un equipo de dos personas, con máquina de corte plasma CNC industrial (Forsun) y más de 100 proyectos realizados.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Nosotros"
          title="Metal + lúdico = Metaludik"
        />

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/proyectos/brasero-corraleros.jpg"
                  alt="Trabajo de corte y fabricación de Metaludik"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-ink/80">
                <p>
                  <strong className="text-ink">Samik Garrido</strong> lleva 15
                  años en el oficio de la soldadura. Su formación viene
                  principalmente del rubro minero — cursos de introducción a la
                  soldadura y calificaciones específicas para procesos de
                  extracción de cobre — y hoy domina distintos procesos de
                  soldadura.
                </p>
                <p>
                  Hace 3 años decidió abrir su propio taller. Al principio operó
                  bajo el nombre &ldquo;Metalmecánica&rdquo;, pero pronto sintió
                  que ese nombre lo encasillaba: quería llegar tanto a clientes
                  industriales como a personas particulares, y quería que la
                  marca tuviera un poco más de su propia personalidad — alegre,
                  cercana, creativa. Así nació{" "}
                  <strong className="text-ink">Metaludik</strong>: METAL +
                  LÚDICO.
                </p>
                <p>
                  Hoy Metaludik es un equipo de dos personas que trabaja con una
                  máquina de corte plasma CNC industrial (Forsun, mesa de 3 x 2
                  metros) y soldadura calificada, acompañando cada proyecto
                  desde la idea hasta la instalación en terreno — para
                  comercios, instituciones, empresas y también para quienes
                  buscan un proyecto personal o familiar.
                </p>
              </div>

              <blockquote className="mt-8 border-l-2 border-orange pl-5">
                <p className="font-display text-2xl italic leading-snug text-ink">
                  &ldquo;Cortamos ideas y el metal cobra vida — juntos
                  construimos futuro.&rdquo;
                </p>
                <cite className="mt-2 block font-mono text-xs not-italic uppercase tracking-widest text-graphite">
                  Samik Garrido, fundador de Metaludik
                </cite>
              </blockquote>

              <Link
                href="/cotizar"
                className="mt-8 inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange"
              >
                Conversemos tu proyecto
              </Link>
            </div>

            <aside className="lg:col-span-5">
              <div className="border border-line bg-mist p-7">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-orange">
                  Metaludik en cifras
                </h2>
                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <dd className="font-display text-4xl font-semibold text-ink">
                        {s.value}
                        <span className="text-orange">{s.suffix}</span>
                      </dd>
                      <dt className="mt-1 text-xs leading-snug text-graphite">
                        {s.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>

              <ol className="mt-10 space-y-7 border-l border-line pl-6">
                {TIMELINE.map((item) => (
                  <li key={item.year} className="relative">
                    <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-orange" />
                    <p className="font-mono text-xs uppercase tracking-widest text-graphite">
                      {item.year}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/75">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
