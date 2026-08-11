import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const SPECS = [
  { label: "Máquina", value: "Forsun, corte plasma CNC industrial" },
  { label: "Mesa de corte", value: "3 x 2 metros" },
  { label: "Acero al carbono", value: "hasta 35 mm de espesor" },
  { label: "Acero inoxidable", value: "hasta 10 mm de espesor" },
  { label: "Material principal", value: "Acero al carbono" },
  { label: "Material ocasional", value: "Acero inoxidable" },
];

export default function Capability() {
  return (
    <section id="capacidad" className="metal-texture-dark scroll-mt-20 border-t border-white/10 bg-graphite py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          number="05"
          eyebrow="Capacidad"
          title="Tenemos la tecnología para hacerlo"
          dark
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/proyectos/pieza-hexagonal.jpg"
                alt="Taller de fabricación metálica de Metaludik con máquina de corte plasma CNC"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:col-span-7">
            {SPECS.map((spec, i) => (
              <Reveal key={spec.label} delay={i * 0.05} y={12}>
                <div className="h-full bg-graphite p-6">
                  <p className="text-xs font-medium text-white/45">{spec.label}</p>
                  <p className="mt-2 font-display text-xl font-bold text-white">
                    {spec.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
