"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Facebook, Instagram, Music2 } from "lucide-react";
import { TikTokIcon } from "@/components/icons/tiktok-icon";

type Slide = { src: string; alt: string };

const navLinks = [

  { label: "PRODUCTOS", href: "/#productos" },
  { label: "QUIÉNES SOMOS", href: "/quienes-somos" },
];

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
      <div className="relative z-20 container mx-auto px-4 pt-32 pb-16 min-h-[92vh] flex items-center">
        <div className="relative w-full text-center">
          <div
            className=" inset-x-0 flex items-center justify-center rounded-full"
            style={{ top: "-2.5rem" }}
          >
            <img
              src="/logo.png"
              alt="Logo GOXA"
              className="w-40 h-40 rounded-full border border-white/25 object-cover shadow-lg"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/80x80/333/FFF?text=Logo";
              }}
            />
          </div>

          {/* Headline */}
          <h1 className="mt-7 text-white font-extrabold tracking-tight leading-[1.05] text-3xl sm:text-4xl md:text-5xl">
            <span className="block">Sabor real de Oxapampa, hecho para disfrutar
</span>
         
          </h1>

          {/* Subcopy */}
          <p className="mt-5 text-white font-bold text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Productos naturales con carácter gourmet: seleccionados, cuidados y
            listos para mejorar tu calidad de vida y salud
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#productos"
              className="px-10 py-4 rounded-full bg-amber-400 text-green-950 font-bold shadow-lg border border-white/25 transition text-lg sm:text-xl"
            >
              Compra en línea
            </Link>
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
        <a
          href="https://www.tiktok.com/@goxa_peru"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="hover:text-white transition"
        >
          <Music2 className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
