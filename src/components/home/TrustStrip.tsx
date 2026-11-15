import { Counter } from "@/components/Reveal";

// Franja compacta de confianza (brief maestro): 4 datos + clientes reales.
const FACTS = [
  { value: 15, suffix: "+", label: "años de oficio" },
  { value: 100, suffix: "+", label: "proyectos" },
  { text: "3 × 2 m", label: "CNC industrial" },
  { text: "Rancagua", label: "Región de O'Higgins" },
] as const;

const CLIENTS = [
  "La Masa Madre",
  "Clínica Dental Omnia",
  "Licorería Iturriaga",
  "Liceo Bicentenario Oscar Castro Z.",
  "Almacén La Familia",
  "Jardín Infantil de Bucalemu",
];

export default function TrustStrip() {
  return (
    <section aria-label="Metaludik en cifras" className="border-y border-white/10 bg-graphite text-white">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {FACTS.map((f, i) => (
          <div
            key={f.label}
            className={`flex flex-col gap-1 px-5 py-6 sm:px-8 sm:py-8 ${
              i % 2 === 1 ? "border-l border-white/10" : ""
            } ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""} ${
              i === 2 ? "lg:border-l" : ""
            }`}
          >
            <dd className="order-1 font-display text-3xl font-extrabold tabular-nums sm:text-4xl">
              {"text" in f ? f.text : <Counter value={f.value} suffix={f.suffix} />}
            </dd>
            <dt className="order-2 flex items-center gap-2 text-sm text-white/60">
              <span aria-hidden className="h-px w-4 bg-orange" />
              {f.label}
            </dt>
          </div>
        ))}
      </dl>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:gap-8">
          <p className="shrink-0 text-sm text-white/45">Ya confiaron en nosotros</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
            {CLIENTS.map((c) => (
              <li key={c} className="text-sm font-semibold text-white/75">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
