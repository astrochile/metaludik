import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/content";

// Cuando el negocio tenga el widget/script de Google Reviews conectado,
// se reemplaza este bloque por el embed real (o por una llamada a la Places API).
const GOOGLE_REVIEWS_URL: string | null = null;

export default function Testimonials() {
  const hasReal = testimonials.length > 0;

  return (
    <section id="testimonios" className="scroll-mt-20 border-t border-line bg-paper-dim py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          number="07"
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
        />

        <div className="mt-12">
          {hasReal ? (
            <div className="grid gap-6 sm:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.author} delay={i * 0.08}>
                  <div className="h-full border border-line bg-paper p-6">
                    <p className="text-[15px] leading-relaxed text-ink/80">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="mt-4 text-sm font-semibold text-ink">{t.author}</p>
                    <p className="text-xs text-steel-mid">{t.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="flex flex-col items-start gap-4 border border-dashed border-line bg-paper p-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-lg font-bold text-ink">
                    Reseñas de Google — próximamente
                  </p>
                  <p className="mt-1 max-w-md text-sm text-ink/60">
                    Este espacio está preparado para mostrar las valoraciones y
                    reseñas reales de Metaludik en Google en cuanto estén
                    conectadas.
                  </p>
                </div>
                {GOOGLE_REVIEWS_URL && (
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange"
                  >
                    Ver reseñas en Google
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
