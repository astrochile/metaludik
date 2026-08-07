import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.problem,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[56vh] min-h-[380px] w-full overflow-hidden bg-ink">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-10 sm:px-8">
            <Link
              href="/proyectos"
              className="text-xs font-medium text-white/70 hover:text-white"
            >
              ← Todos los proyectos
            </Link>
            <span className="mt-4 block font-mono text-xs uppercase tracking-[0.2em] text-orange">
              {project.category}
            </span>
            <h1 className="mt-2 max-w-2xl text-balance font-display text-3xl font-semibold uppercase leading-[1.05] text-white sm:text-5xl">
              {project.title}
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-8">
              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-orange">
                  El problema
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
                  {project.problem}
                </p>
              </div>
              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-orange">
                  El proceso
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
                  {project.process}
                </p>
              </div>
              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-orange">
                  El resultado
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
                  {project.result}
                </p>
              </div>

              {project.gallery.length > 1 && (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {project.gallery.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-square overflow-hidden bg-mist"
                    >
                      <Image src={src} alt={project.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="border border-line p-6">
                <dl className="space-y-5">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-widest text-graphite">
                      Cliente
                    </dt>
                    <dd className="mt-1 font-display text-lg text-ink">
                      {project.client}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-widest text-graphite">
                      Ubicación
                    </dt>
                    <dd className="mt-1 text-sm text-ink/80">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-widest text-graphite">
                      Material
                    </dt>
                    <dd className="mt-1 text-sm text-ink/80">{project.material}</dd>
                  </div>
                </dl>
                <Link
                  href="/cotizar"
                  className="mt-6 flex items-center justify-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange"
                >
                  Quiero algo parecido
                </Link>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="mt-20 border-t border-line pt-12">
              <h2 className="font-display text-2xl font-semibold uppercase text-ink">
                Otros proyectos de {project.category.toLowerCase()}
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {related.map((p) => (
                  <Link key={p.slug} href={`/proyectos/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist">
                      <Image
                        src={p.cover}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 font-display text-base uppercase text-ink">
                      {p.client}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
