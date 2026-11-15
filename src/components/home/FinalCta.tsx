import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/content";

// Cierre del Home. Reutiliza el video CNC del Hero (mismo archivo, ya en caché).
export default function FinalCta() {
  const wa = `https://wa.me/${brand.phoneHref}?text=${encodeURIComponent(
    "Hola Metaludik, quiero cotizar un proyecto."
  )}`;

  return (
    <section id="cierre" className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0" aria-hidden>
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/brand/hero-poster.jpg"
        >
          <source src="/video/cnc-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pt-40">
        <Reveal>
          <div aria-hidden className="h-px w-16 bg-orange" />
          <h2 className="mt-6 max-w-4xl text-balance font-display text-5xl font-extrabold leading-[0.98] sm:text-7xl lg:text-8xl">
            Hagamos algo en metal.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 text-lg text-white/70 sm:text-xl">Cuéntanos qué tienes en mente.</p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 bg-orange px-7 py-4 text-[15px] font-semibold text-ink transition-colors hover:bg-white"
          >
            Cotizar mi proyecto
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>

        <ul className="mt-20 flex flex-col gap-3 border-t border-white/15 pt-6 text-[15px] text-white/70 sm:mt-28 sm:flex-row sm:flex-wrap sm:gap-x-10">
          <li>
            {brand.city} · {brand.region}
          </li>
          <li>
            <a href={`tel:+${brand.phoneHref}`} className="transition-colors hover:text-orange">
              {brand.phone}
            </a>
          </li>
          <li>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-orange"
            >
              Instagram {brand.instagramHandle}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
