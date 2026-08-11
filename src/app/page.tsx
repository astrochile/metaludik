import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Services from "@/components/home/Services";
import ProjectsSection from "@/components/home/ProjectsSection";
import Process from "@/components/home/Process";
import Capability from "@/components/home/Capability";
import ScaleEvaluation from "@/components/home/ScaleEvaluation";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 01 — Impacto */}
        <Hero />
        <TrustStrip />
        {/* 02 — Servicios */}
        <Services />
        {/* 03 — Proyectos */}
        <ProjectsSection />
        {/* 04 — Proceso */}
        <Process />
        {/* 05 — Capacidad */}
        <Capability />
        <ScaleEvaluation />
        {/* 06 — Nosotros */}
        <About />
        {/* 07 — Testimonios */}
        <Testimonials />
        <Faq />
        {/* 08 — Cotización */}
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
