import Image from "next/image";
import Link from "next/link";

export default function ProjectImage({
  href,
  src,
  alt,
  label,
  category,
  className = "",
  cursorLabel = "Ver",
  priority = false,
}: {
  href: string;
  src: string;
  alt: string;
  label?: string;
  category?: string;
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
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.035]"
      />
      <div className="pointer-events-none absolute inset-0 bg-orange/0 mix-blend-multiply transition-colors duration-400 group-hover:bg-orange/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-transparent opacity-90 transition-opacity duration-400 group-hover:opacity-100" />
      {(label || category) && (
        <div className="absolute inset-x-0 bottom-0 p-5">
          {category && (
            <span className="text-xs font-semibold text-orange">{category}</span>
          )}
          {label && (
            <h3 className="mt-1 font-display text-lg font-bold uppercase leading-tight text-white">
              {label}
            </h3>
          )}
        </div>
      )}
    </Link>
  );
}
