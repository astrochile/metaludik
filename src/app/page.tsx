import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Process from "@/components/home/Process";
import Capability from "@/components/home/Capability";
import About from "@/components/home/About";
import IdeaQuote from "@/components/home/IdeaQuote";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

// Landing principal (brief maestro). Responde en orden:
// ¿Qué hace Metaludik? → ¿Pueden hacer lo que necesito? → ¿Se nota que saben? → ¿Cómo los contacto?
// Secciones que salieron del Home pero se conservan en el código:
// ProjectsSection (galería con filtros), ScaleEvaluation y Testimonials.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        {/* 01 — Qué hacemos */}
        <Services />
        {/* 02 — Proyectos */}
        <FeaturedProjects />
        {/* 03 — Cómo trabajamos */}
        <Process />
        {/* 04 — Capacidad técnica */}
        <Capability />
        {/* 05 — Nosotros */}
        <About />
        {/* 06 — CTA humano + cotización rápida (#contacto) */}
        <IdeaQuote />
        <Faq />
        {/* Cierre */}
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
