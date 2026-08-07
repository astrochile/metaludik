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
    <section className="border-t border-line bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-orange">
            Capacidad y equipamiento
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-semibold uppercase leading-[1.02] sm:text-5xl">
            Máquina industrial, criterio de taller
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {SPECS.map((spec) => (
            <div key={spec.label} className="bg-ink p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-white/50">
                {spec.label}
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-white">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
