import SectionHeading from "@/components/SectionHeading";
import ProjectsGallery from "@/components/ProjectsGallery";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          number="03"
          eyebrow="Proyectos"
          title="Trabajos que hablan por nosotros"
          lede="Ideas que pasaron del diseño al metal."
        />
        <div className="mt-10">
          <ProjectsGallery />
        </div>
      </div>
    </section>
  );
}
