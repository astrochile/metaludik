import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Cotizar",
  description:
    "Cuéntanos qué necesitas fabricar. Envía tu idea, un diseño o un archivo de referencia y te respondemos por WhatsApp.",
};

export default function CotizarPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Cotizar"
          title="Cuéntanos qué necesitas fabricar"
          lede="Completa el formulario con el mayor detalle posible. Si tienes un diseño, logo o archivo de referencia, mejor — así la cotización es más precisa."
        />
        <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
          <QuoteForm />
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
