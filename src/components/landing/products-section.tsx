"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { MessageCircle, Sparkles, Leaf, ShieldCheck, Truck } from "lucide-react";

type Category = "Todos" | "Mieles" | "Derivados" | "Packs";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  alt: string;
  category: Category;
  badge?: "Top" | "Nuevo" | "Pack";
  whatsappText?: string;
};

const WHATSAPP_NUMBER = "51998855069";

function buildWhatsAppLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export default function ProductsSection() {
  const products: ReadonlyArray<Product> = useMemo(
    () => [
      {
        id: 1,
        name: "Miel Pura de Oxapampa",
        description: "100% natural, sin aditivos. Cosecha fresca.",
        price: "S/ 25",
        imageSrc: "/miel.jpg",
        alt: "Frasco de miel pura",
        category: "Mieles",
        badge: "Top",
        whatsappText: "Hola GOXA, quiero Miel Pura de Oxapampa.",
      },
      {
        id: 2,
        name: "Propóleo Concentrado",
        description: "Ideal para reforzar defensas y vías respiratorias.",
        price: "S/ 30",
        imageSrc: "/propoleo.jpg",
        alt: "Propóleo concentrado",
        category: "Derivados",
        badge: "Nuevo",
        whatsappText: "Hola GOXA, quiero Propóleo Concentrado.",
      },
      {
        id: 3,
        name: "Polen de Flores",
        description: "Energía y vitaminas. Flora silvestre.",
        price: "S/ 45",
        imageSrc: "/polen.jpg",
        alt: "Polen de flores",
        category: "Derivados",
        whatsappText: "Hola GOXA, quiero Polen de Flores.",
      },
      {
        id: 4,
        name: "Gel de Jalea Real",
        description: "Concentrado para vitalidad y concentración.",
        price: "S/ 35",
        imageSrc: "/gel.jpg",
        alt: "Gel de jalea real",
        category: "Derivados",
        whatsappText: "Hola GOXA, quiero Gel de Jalea Real.",
      },
      {
        id: 5,
        name: "Pack Miel + Polen + Propóleo",
        description: "Combinación ideal para tu rutina diaria.",
        price: "S/ 95",
        imageSrc: "/pack-energia.jpg",
        alt: "Pack de miel, polen y propóleo",
        category: "Packs",
        badge: "Pack",
        whatsappText: "Hola GOXA, quiero el Pack Miel + Polen + Propóleo.",
      },
      {
        id: 6,
        name: "Pack Total Salud",
        description: "Miel, propóleo, polen y jalea real. Completo.",
        price: "S/ 120",
        imageSrc: "/pack-salud.jpg",
        alt: "Pack total salud",
        category: "Packs",
        badge: "Pack",
        whatsappText: "Hola GOXA, quiero el Pack Total Salud.",
      },
    ],
    []
  );

  const categories: Category[] = ["Todos", "Mieles", "Derivados", "Packs"];
  const [active, setActive] = useState<Category>("Todos");

  const filtered = useMemo(() => {
    if (active === "Todos") return products;
    return products.filter((p) => p.category === active);
  }, [active, products]);

  return (
    <section
      id="productos"
      className="relative py-20 bg-gradient-to-b from-white via-green-50/70 to-white overflow-hidden"
    >
      {/* Fondo decorativo suave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-green-700/15 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header premium */}
        <div className="text-center mb-10">
          <p className="text-green-900 font-extrabold tracking-[0.35em] uppercase text-sm">
            Catálogo
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-green-950 tracking-tight">
            Nuestros Productos
          </h2>

          <p className="mt-4 text-green-950/70 max-w-2xl mx-auto leading-relaxed">
            Productos naturales y gourmet de Oxapampa, seleccionados con cuidado y tradición.
          </p>

         
        </div>

        {/* Tabs de categorías */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={[
                  "px-5 py-2 rounded-full text-sm font-bold transition-all",
                  "border shadow-sm",
                  isActive
                    ? "bg-green-900 text-white border-green-900"
                    : "bg-white/70 text-green-950 border-green-900/10 hover:bg-white",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Grid premium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-3xl bg-white/85 backdrop-blur
                         border border-green-900/10 shadow-lg
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Top subtle border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40" />

              {/* Imagen */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={p.imageSrc}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay suave para look pro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Precio pill */}
                <div className="absolute top-4 right-4 rounded-full bg-amber-400 text-green-950 px-3 py-1 shadow-md">
                  <span className="text-sm font-extrabold">{p.price}</span>
                </div>

                {/* Badge */}
                {p.badge && (
                  <div className="absolute top-4 left-4 rounded-full bg-green-950/85 text-white px-3 py-1 shadow-md backdrop-blur">
                    <span className="text-xs font-extrabold tracking-widest uppercase">
                      {p.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-extrabold text-green-950">
                  {p.name}
                </h3>

                <p className="mt-2 text-sm text-green-950/70 min-h-[44px] leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-6">
                  <a
                    href={buildWhatsAppLink(p.whatsappText || `Hola GOXA, quiero ${p.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 py-3 px-4 rounded-2xl
                               bg-green-800 text-white font-extrabold
                               transition-all duration-300 hover:bg-green-900 hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar por WhatsApp
                  </a>

                  <p className="mt-3 text-xs text-green-950/55">
                    Respuesta rápida • Confirmación de stock por WhatsApp
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      

        {/* Nota pequeña */}
        <p className="mt-6 text-center text-xs text-green-950/50">
          Tip: Para mejor calidad en web, usa imágenes en JPG/WEBP de ~1200px de alto.
        </p>
      </div>
    </section>
  );
}
