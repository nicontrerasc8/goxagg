"use client";

import HeroSection from "@/components/landing/hero-section";
import ProductsSection from "@/components/landing/products-section";
import BenefitsSection from "@/components/landing/benefits-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import ProcessSection from "@/components/landing/process-section";
import CTASection from "@/components/landing/cta-section";
import { StickyWhatsAppButton } from "@/components/ui/whatsapp-button";
import { Facebook, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section s */}
      <HeroSection />
      
      {/* Products Section */}
      <ProductsSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Final CTA Section */}
      <CTASection />
      
      {/* Sticky WhatsApp Button for Mobile */}
      <StickyWhatsAppButton />
      
      {/* Footer */}
      <footer className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-poppins font-bold mb-4">GOXA</h3>
            <p className="text-white mb-4">
              Productos naturales y gourmet de Oxapampa
            </p>
            <div className="flex justify-center gap-4 text-sm text-white">
              <span>📱 WhatsApp: +51 998 855 069</span>
              <span>📧 contacto@goxa.pe</span>
            </div>
          </div>
          
         <div className="mt-8 flex justify-center gap-8 border-t border-green-600 pt-8">
            
            <a 
              href="https://www.facebook.com/people/Goxa/61566229425220/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Síguenos en Facebook"
              className="text-green-300 hover:text-white transition-colors duration-300"
            >
              <Facebook className="w-7 h-7" />
            </a>
            
            <a 
              href="https://www.instagram.com/goxa_pe" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              className="text-green-300 hover:text-white transition-colors duration-300"
            >
              <Instagram className="w-7 h-7" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
