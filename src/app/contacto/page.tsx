import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos por WhatsApp o correo. Metaludik, Rancagua, Región de O'Higgins.",
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow="Contacto" title="Hablemos de tu proyecto" />

        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-2">
            <a
              href={`https://wa.me/${brand.phoneHref}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between border border-line p-7 transition-colors hover:border-orange"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-graphite">
                  Canal preferido
                </span>
                <h2 className="mt-2 font-display text-2xl font-semibold uppercase text-ink">
                  WhatsApp
                </h2>
                <p className="mt-2 text-sm text-ink/70">{brand.phone}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange">
                Escribir ahora
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>

            <a
              href={`mailto:${brand.email}`}
              className="group flex flex-col justify-between border border-line p-7 transition-colors hover:border-orange"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-graphite">
                  Correo
                </span>
                <h2 className="mt-2 font-display text-2xl font-semibold uppercase text-ink">
                  Email
                </h2>
                <p className="mt-2 text-sm text-ink/70">{brand.email}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange">
                Enviar correo
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          </div>

          <div className="mt-10 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-graphite">
                Ubicación
              </h3>
              <p className="mt-2 text-sm text-ink/80">
                {brand.city}, {brand.region}
              </p>
              <p className="mt-1 text-sm text-ink/60">
                Atendemos fuera de {brand.city} coordinando la logística con
                anticipación.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-graphite">
                Horario
              </h3>
              <p className="mt-2 text-sm text-ink/80">{brand.hours}</p>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-graphite">
                Redes
              </h3>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm text-ink/80 hover:text-orange"
              >
                Instagram {brand.instagramHandle}
              </a>
            </div>
          </div>

          <div className="mt-12 border border-line bg-mist p-7 text-center sm:p-10">
            <p className="text-[15px] text-ink/75">
              ¿Ya tienes claro qué necesitas fabricar?
            </p>
            <Link
              href="/cotizar"
              className="mt-4 inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange"
            >
              Ir al formulario de cotización
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
