import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Capability from "@/components/home/Capability";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ScaleEvaluation from "@/components/home/ScaleEvaluation";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Process />
        <Capability />
        <FeaturedProjects />
        <ScaleEvaluation />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
