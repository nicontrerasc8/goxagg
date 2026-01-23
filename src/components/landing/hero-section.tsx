"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Facebook, Instagram } from "lucide-react";

type Slide = { src: string; alt: string };

export default function HeroSection() {
  const slides: Slide[] = useMemo(
    () => [
      { src: "/hero-1.png", alt: "Paisaje de Oxapampa" },

    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Header (estilo Oregon Foods) */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-[#2F4B39]/90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo GOXA"
              className="w-20 h-20 rounded-full border border-white/20 object-cover shadow"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/80x80/333/FFF?text=Logo";
              }}
            />
         
          </div>


          <nav className="flex items-center gap-6 text-sm font-medium text-white/90">
            <a href="#home" className="hover:text-white transition-colors">HOME</a>
            <a href="#productos" className="hover:text-white transition-colors">PRODUCTOS</a>
            <a href="#contacto" className="hover:text-white transition-colors">CONTACTO</a>
          </nav>
        </div>
      </div>

      {/* Slider background */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Overlays para look premium */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/25" />
      </div>

   

      {/* Contenido central */}
      <div className="relative z-20 container mx-auto px-4 pt-28 pb-16 min-h-[92vh] flex items-center">
        <div className="w-full text-center">
          {/* “Logo pill” */}
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full shadow-xl">
            <img
              src="/logo.png"
              alt="Logo GOXA"
              className="w-40 h-40 rounded-full border border-white/20 object-cover shadow"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/80x80/333/FFF?text=Logo";
              }}
            />
          </div>

          {/* Headline */}
          <h1 className="mt-7 text-white font-extrabold tracking-tight leading-[0.95] text-4xl sm:text-5xl md:text-7xl">
            Sabor real de Oxapampa,
            <span className="block text-white/90">hecho para disfrutar</span>
          </h1>

          {/* Subcopy */}
          <p className="mt-5 text-white font-bold text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Productos naturales con carácter gourmet: seleccionados, cuidados y
            listos para mejorar tu calidad de vida y salud
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#productos"
              className="px-7 py-3 rounded-full bg-amber-400 text-green-950 font-bold shadow-lg border border-white/25  transition"
            >
              Ver Productos
            </a>
            <a
              href="https://wa.me/51998855069"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-green-800 text-white font-semibold border border-white/25  transition"
            >
              Comprar por WhatsApp
            </a>
          </div>

    
        </div>
      </div>

      {/* Redes (abajo izquierda) */}
      <div className="absolute left-6 bottom-6 z-30 flex items-center gap-4 text-white/90">
        <span className="hidden sm:inline text-sm tracking-widest uppercase">Síguenos</span>
        <a
          href="https://www.facebook.com/people/Goxa/61566229425220/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-white transition"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/goxa_pe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-white transition"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
