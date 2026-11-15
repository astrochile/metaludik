/**
 * Título pequeño de sección: número + línea naranja + texto.
 * Reemplaza la píldora naranja anterior. Tracking normal, sin mayúsculas forzadas.
 */
export default function Eyebrow({
  label,
  number,
  dark = false,
  className = "",
}: {
  label: string;
  number?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {number && (
        <span className="font-display text-sm font-bold tabular-nums text-orange">{number}</span>
      )}
      <span aria-hidden className="h-px w-8 bg-orange" />
      <span className={`text-sm font-semibold ${dark ? "text-white/70" : "text-steel-mid"}`}>
        {label}
      </span>
    </span>
  );
}
