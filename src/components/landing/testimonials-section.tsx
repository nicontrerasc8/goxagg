"use client";

import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  place: string;
  text: string;
  rating: 4 | 5;
};

function initials(name: string) {
  const parts = name.trim().split(" ");
  const a = parts[0]?.[0] ?? "G";
  const b = parts[1]?.[0] ?? "X";
  return (a + b).toUpperCase();
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Valeria R.",
      place: "Lima",
      text: "Se nota la calidad desde que lo pruebas. Compré miel y polen, y el sabor es súper auténtico. Recomendadísimo.",
      rating: 5,
    },
    {
      name: "Javier M.",
      place: "San Borja",
      text: "La presentación es bonita y el producto llega bien. Me gustó que responden rápido por WhatsApp.",
      rating: 5,
    },
    {
      name: "Camila S.",
      place: "Surco",
      text: "Los packs son buenazos para regalo. Me encantó el enfoque natural y el sabor de Oxapampa.",
      rating: 5,
    },
    {
      name: "Rodrigo P.",
      place: "Miraflores",
      text: "Buen producto y buena atención. Se siente artesanal y de confianza.",
      rating: 4,
    },
    {
      name: "Andrea L.",
      place: "La Molina",
      text: "Probé propóleo y miel: excelente. Se volvió parte de mi rutina.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#F4F1EA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-amber-700 font-bold tracking-[0.2em] uppercase">
            Reseñas
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-green-900 tracking-tight">
            Lo que dicen de GOXA
          </h2>
          <p className="mt-4 text-green-950/70 max-w-2xl mx-auto">
            Testimonios reales (por ahora genéricos). Luego los cambiamos por tus reseñas reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white shadow-lg border border-green-900/10 p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-800 text-white flex items-center justify-center font-bold">
                  {initials(t.name)}
                </div>
                <div>
                  <p className="font-bold text-green-950">{t.name}</p>
                  <p className="text-sm text-green-950/60">{t.place}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? "text-amber-500" : "text-gray-300"}`}
                    fill={i < t.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <p className="mt-4 text-green-950/80 leading-relaxed">
                “{t.text}”
              </p>
            </div>
          ))}
        </div>

        <div id="contacto" className="mt-14 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-green-800 text-white font-bold shadow-lg hover:bg-green-900 transition"
          >
            Compra en línea
          </Link>
        </div>
      </div>
    </section>
  );
}
