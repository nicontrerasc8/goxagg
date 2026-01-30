"use client";

import HeroSection from "@/components/landing/hero-section";
import OregonWaySection from "@/components/landing/oregon-way-section";

import ProductsSection from "@/components/landing/products-section";
import { StickyWhatsAppButton } from "@/components/ui/whatsapp-button";
import { Facebook, Instagram } from "lucide-react";

const instagramComments = [
  { handle: "sofiacarreras1", text: "👏👏👏🍯❤️❤️ es excelente la miel que vendes!!! 😍😍" },
  { handle: "ruh.peru", text: "Son demasiado buenas, recomendación total!!" },
  { handle: "jackie_fuller_b", text: "Son espectaculares!!!" },
  { handle: "germanc00", text: "🔥🔥 buenazas recomendado" },
  { handle: "sandra.zarak", text: "Super ricas! Generosas, jugosas y de gran calidad" },
  { handle: "__robinsonc__", text: "Que tales burgers! 🔥 brutales" },
 
  { handle: "carlapenagos", text: "DELICIOSOOOO!! Super recomendado!" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <OregonWaySection />
      <section className="bg-gradient-to-b from-green-50 via-white to-green-50 py-18">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-green-950 mb-3">
              Lo que dicen en Instagram
            </h2>
            <p className="text-green-800/80 max-w-2xl mx-auto text-base md:text-lg">
              Comentarios reales de quienes prueban nuestros productos de Oxapampa.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {instagramComments.map((comment, index) => (
              <article
                key={`${comment.handle}-${index}`}
                className="bg-white border border-green-100 rounded-2xl p-6 shadow-[0_12px_30px_-20px_rgba(20,83,45,0.45)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-30px_rgba(20,83,45,0.45)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold uppercase tracking-wide">
                    IG
                  </div>
                  <p className="text-green-950 font-semibold text-lg tracking-tight">
                    @{comment.handle}
                  </p>
                </div>
                <p className="text-green-900/90 text-sm leading-relaxed">{comment.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ProductsSection />


      <StickyWhatsAppButton />

      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-poppins font-bold mb-3 tracking-wide">GOXA</h3>
            <p className="text-white/90 mb-4">Productos naturales y gourmet de Oxapampa</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-sm text-white/90">
              <span>📱 WhatsApp: +51 998 855 069</span>
   
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-8 border-t border-green-700 pt-8">
            <a
              href="https://www.facebook.com/people/Goxa/61566229425220/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Facebook"
              className="text-green-200 hover:text-white transition-colors duration-300"
            >
              <Facebook className="w-7 h-7" />
            </a>

            <a
              href="https://www.instagram.com/goxa_pe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              className="text-green-200 hover:text-white transition-colors duration-300"
            >
              <Instagram className="w-7 h-7" />
            </a>
          </div>

          <p className="mt-8 text-xs text-white/70">
            © {new Date().getFullYear()} GOXA. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
