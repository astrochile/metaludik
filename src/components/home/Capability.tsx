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
    <section className="metal-texture-dark border-t border-white/10 bg-graphite py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-orange">Capacidad y equipamiento</span>
            <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-[1.02] sm:text-5xl">
              Máquina industrial, criterio de taller
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}
