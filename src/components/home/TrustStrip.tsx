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
    <section className="border-b border-line bg-paper py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-5 text-sm font-medium text-steel-mid">
          Negocios e instituciones que ya confiaron en Metaludik
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-3">
          {CLIENTS.map((c) => (
            <span key={c} className="font-display text-lg font-semibold text-ink/65">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
