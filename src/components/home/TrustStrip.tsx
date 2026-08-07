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
    <section className="border-b border-line bg-mist py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-graphite">
          Negocios e instituciones que ya confiaron en Metaludik
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-3">
          {CLIENTS.map((c) => (
            <span
              key={c}
              className="font-display text-lg uppercase tracking-wide text-ink/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
