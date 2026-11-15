import Image from "next/image";
import Link from "next/link";

export default function ProjectImage({
  href,
  src,
  alt,
  label,
  category,
  location,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "",
  cursorLabel = "Ver",
  priority = false,
}: {
  href: string;
  src: string;
  alt: string;
  label?: string;
  category?: string;
  location?: string;
  sizes?: string;
  className?: string;
  cursorLabel?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      data-cursor={cursorLabel}
      className={`group relative block w-full overflow-hidden bg-graphite ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.035]"
      />
      <div className="pointer-events-none absolute inset-0 bg-orange/0 mix-blend-multiply transition-colors duration-400 group-hover:bg-orange/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-transparent opacity-90 transition-opacity duration-400 group-hover:opacity-100" />
      {(label || category) && (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
          <div>
            {category && (
              <span className="text-xs font-semibold text-orange transition-colors duration-300 group-hover:text-white">
                {category}
              </span>
            )}
            {label && (
              <h3 className="mt-1 font-display text-xl font-bold leading-tight text-white">{label}</h3>
            )}
            {location && <p className="mt-1 text-xs text-white/60">{location}</p>}
          </div>
          <span
            aria-hidden
            className="flex shrink-0 items-center gap-2 text-sm font-semibold text-white"
          >
            <span className="hidden -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:inline">
              Ver proyecto
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-ink">
              →
            </span>
          </span>
        </div>
      )}
    </Link>
  );
}
