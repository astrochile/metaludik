import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

// Solo lo más relevante (brief maestro). El detalle técnico completo vive en el dossier PDF.
const SPECS = [
  { value: "CNC Forsun", label: "Corte plasma industrial" },
  { value: "3 × 2 m", label: "Mesa de corte" },
  { value: "Hasta 35 mm", label: "En acero al carbono" },
  { value: "Soldadura", label: "Armado y uniones en taller" },
  { value: "Montaje", label: "Instalación en terreno" },
];

export default function Capability() {
  return (
    <section
      id="capacidad"
      className="metal-texture-dark scroll-mt-20 border-t border-white/10 bg-graphite py-20 text-white sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-6">
          <SectionHeading number="04" eyebrow="Capacidad técnica" title="Tenemos el equipo para hacerlo." dark />

          <dl className="mt-10 border-t border-white/10">
            {SPECS.map((spec, i) => (
              <Reveal key={spec.value} delay={i * 0.04} y={8}>
                <div className="flex items-baseline justify-between gap-6 border-b border-white/10 py-4">
                  <dt className="font-display text-2xl font-bold text-white sm:text-3xl">{spec.value}</dt>
                  <dd className="text-right text-sm text-white/55">{spec.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.2}>
            <a
              href="/docs/metaludik-dossier-corte-cnc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange"
            >
              Ver dossier técnico de corte CNC (PDF)
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/proyectos/maquina-cnc.jpg"
              alt="Máquina de corte plasma CNC Forsun del taller Metaludik en Rancagua"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
