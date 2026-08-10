export default function ImagePlaceholder({
  index,
  label = "Vista del proyecto",
  className = "",
}: {
  index: number;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`metal-texture-dark relative flex h-full w-full flex-col justify-between overflow-hidden bg-graphite p-5 ${className}`}
    >
      <div className="absolute inset-y-0 left-0 w-[3px] bg-orange" aria-hidden />
      <span className="font-display text-6xl font-extrabold leading-none text-white/10 sm:text-7xl">
        {String(index).padStart(2, "0")}
      </span>
      <p className="text-xs font-medium uppercase text-white/40">{label}</p>
    </div>
  );
}
