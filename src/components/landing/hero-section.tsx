"use client";

// Importamos React y los iconos necesarios de lucide-react
import React from 'react';
import { MessageCircle, Truck, Shield, Star, Facebook, Instagram } from "lucide-react";

// NOTA: Como no tengo acceso a tu componente "@/components/ui/whatsapp-button",
// he creado un botón estándar <button> y le he aplicado estilos de Tailwind
// para que se parezca a un botón de WhatsApp.

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans text-black">
      {/* Fondo con Gradiente Mejorado:
        Usamos un gradiente más oscuro y "natural" que va de un verde oscuro
        a un gris oscuro y de vuelta a un verde esmeralda.
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-200 via-green-500 opacity-95"></div>
      
      {/* Contenedor principal del contenido */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Logo del Cliente:
            Añadido según tu petición. w-48 es ~192px, muy cercano a 200px.
            Tiene bordes redondeados, una sombra y un borde sutil.
            Añadido un onError para un fallback por si 'logo.jpg' no carga.
          */}
          <img 
            src="logo.jpg" 
            alt="Logo Oxapampa Gourmet"
            className="w-48 h-48 mx-auto mb-6 rounded-full shadow-2xl border-4 border-white/20 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/200x200/333/FFF?text=Logo";
              e.currentTarget.onerror = null; 
            }}
          />

          {/* Trust Badges (Insignias de Confianza) - Estilo Mejorado:
            Ahora usan un fondo semitransparente con backdrop-blur para un 
            efecto "glassmorphism" moderno.
          */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            <div className="flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-black/90 shadow-lg">
              <Truck className="w-4 h-4 mr-2 text-amber-300" />
              Envíos a Lima
            </div>
            <div className="flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-black/90 shadow-lg">
              <Shield className="w-4 h-4 mr-2 text-amber-300" />
              Productos Frescos
            </div>
            <div className="flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-black/90 shadow-lg">
              <Star className="w-4 h-4 mr-2 text-amber-300" />
              Calidad Garantizada
            </div>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight shadow-text">
            Productos Naturales y Gourmet de{" "}
            <span className="text-yellow-400 block sm:inline">Oxapampa</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-black/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Mieles 100% naturales, carnes artesanales y orquídeas únicas
          </p>

          {/* Botón de CTA (WhatsApp) - Estilo Mejorado:
            Un botón más grande y claro con un color verde distintivo 
            y efectos hover sutiles.
          */}
          <div className="mb-12">
            <button className="flex items-center justify-center mx-auto bg-green-500 hover:bg-green-600 text-black font-bold text-lg sm:text-xl px-8 py-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 group">
              <MessageCircle className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-12" />
              <span>Comprar por WhatsApp</span>
            </button>
          </div>

          {/* Elementos de Confianza Adicionales - Layout Mejorado:
            Usamos flex-row en pantallas grandes para que se vea más limpio.
          */}
          <div className="text-black/80 text-base sm:text-lg flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center">
            <p className="flex items-center justify-center">
              <span className="text-2xl mr-2">🌱</span>
              <span>Productos 100% Naturales</span>
            </p>
            <p className="flex items-center justify-center">
              <span className="text-2xl mr-2">🚚</span>
              <span>Envío Gratis a Lima</span>
            </p>
            <p className="flex items-center justify-center">
              <span className="text-2xl mr-2">⭐</span>
              <span>Calidad Garantizada</span>
            </p>
          </div>
           {/* ----- INICIO: Botones de Redes Sociales ----- */}
          <div className="mt-12 flex justify-center gap-8">
            <a 
              href="https://www.facebook.com/people/Goxa/61566229425220/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Síguenos en Facebook"
              className="text-black/70 hover:text-blue-600 transition-colors duration-300"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a 
              href="https://www.instagram.com/goxa_pe" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              className="text-black/70 hover:text-pink-600 transition-colors duration-300"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>
          {/* ----- FIN: Botones de Redes Sociales ----- */}
        </div>
      </div>

      {/* Indicador de Scroll (Decorativo):
        Mantenido del diseño original, es un buen detalle.
      */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 animate-bounce">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}