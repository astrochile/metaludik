import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageSweep from "@/components/PageSweep";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProjectImage from "@/components/ProjectImage";
import { Reveal, RevealMask } from "@/components/Reveal";
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
  return { title: project.title, description: project.problem };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const [img02, img03, img04] = project.images;
  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return (
    <>
      <PageSweep />
      <Header />
      <main>
        <section className="relative h-[62vh] min-h-[420px] w-full overflow-hidden bg-ink">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-10 sm:px-8">
            <Link href="/proyectos" className="text-xs font-medium text-white/60 hover:text-white">
              ← Todos los proyectos
            </Link>
            <span className="mt-4 block text-sm font-semibold text-orange">
              {project.category}
            </span>
            <h1 className="mt-2 max-w-2xl text-balance font-display text-3xl font-extrabold leading-[1.03] text-white sm:text-5xl">
              {project.title}
            </h1>
            <span className="mt-2 block text-sm text-white/55">{project.location}</span>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-14 lg:col-span-8">
              <Reveal>
                <h2 className="text-sm font-semibold text-orange">El problema</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{project.problem}</p>
              </Reveal>

              <RevealMask className="aspect-[16/10] w-full">
                {img02 ? (
                  <div className="relative h-full w-full">
                    <Image src={img02} alt={project.title} fill className="object-cover" />
                  </div>
                ) : (
                  <ImagePlaceholder index={2} />
                )}
              </RevealMask>

              <Reveal>
                <h2 className="text-sm font-semibold text-orange">El proceso</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{project.process}</p>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <RevealMask className="aspect-[4/5]">
                  {img03 ? (
                    <div className="relative h-full w-full">
                      <Image src={img03} alt={project.title} fill className="object-cover" />
                    </div>
                  ) : (
                    <ImagePlaceholder index={3} />
                  )}
                </RevealMask>
                <RevealMask className="aspect-[4/5]" delay={0.08}>
                  {img04 ? (
                    <div className="relative h-full w-full">
                      <Image src={img04} alt={project.title} fill className="object-cover" />
                    </div>
                  ) : (
                    <ImagePlaceholder index={4} />
                  )}
                </RevealMask>
              </div>

              <Reveal>
                <h2 className="text-sm font-semibold text-orange">El resultado</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{project.result}</p>
              </Reveal>

              <RevealMask className="aspect-[16/10] w-full">
                <div className="relative h-full w-full">
                  <Image src={project.cover} alt={project.title} fill className="object-cover" />
                </div>
              </RevealMask>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 border border-line p-6">
                <dl className="space-y-5">
                  <div>
                    <dt className="text-xs font-medium text-steel-mid">Cliente</dt>
                    <dd className="mt-1 font-display text-lg font-bold text-ink">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-steel-mid">Ubicación</dt>
                    <dd className="mt-1 text-sm text-ink/80">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-steel-mid">Material</dt>
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
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold uppercase text-ink">
                  Otros proyectos de {project.category.toLowerCase()}
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {related.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 0.06} className="aspect-[4/5]">
                    <ProjectImage
                      href={`/proyectos/${p.slug}`}
                      src={p.cover}
                      alt={p.title}
                      label={p.client}
                      className="h-full"
                    />
                  </Reveal>
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
