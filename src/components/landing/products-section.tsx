"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

type Category = "Todos" | "Mieles" | "Derivados" | "Packs";

type ProductVariant = {
  label: string;
  price: string;
};

type Product = {
  id: number;
  name: string;
  description: string;
  variants: ProductVariant[];
  imageSrc: string;
  alt: string;
  category: Category;
  badge?: "Top" | "Nuevo" | "Pack";
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
        name: "Miel de Abeja Oxapampa",
        description: "100% natural y pura, cosecha artesanal de selva central.",
        variants: [
          { label: "600g", price: "S/ 30" },
          { label: "1.3 kg", price: "S/ 55" },
        ],
        imageSrc: "/miel.jpg", // Mantén tus rutas de imagen
        alt: "Miel Oxapampa Goxa",
        category: "Mieles",
        badge: "Top",
      },
      {
        id: 2,
        name: "Esencia de Propóleo",
        description: "Productos FREY. Antibiótico natural para reforzar defensas.",
        variants: [{ label: "20ml", price: "S/ 24" }],
        imageSrc: "/propoleo.jpg",
        alt: "Esencia de Propóleo Frey",
        category: "Derivados",
      },
      {
        id: 3,
        name: "Polen de Abeja",
        description: "Granulado natural, superalimento rico en proteínas y vitaminas.",
        variants: [{ label: "320g", price: "S/ 25" }],
        imageSrc: "/polen.jpg",
        alt: "Polen Oxapampa Goxa",
        category: "Derivados",
        badge: "Nuevo",
      },
      {
        id: 4,
        name: "Goxa Power (Gel Natural)",
        description: "Mezcla potente de miel, polen, jalea real y propóleo.",
        variants: [
          { label: "250g", price: "S/ 25" },
          { label: "400g", price: "S/ 40" },
        ],
        imageSrc: "/gel.jpg",
        alt: "Goxa Power Gel",
        category: "Derivados",
      },
      {
        id: 5,
        name: "Pack Familiar Salud",
        description: "El combo ideal para proteger a toda la familia.",
        variants: [{ label: "Pack", price: "S/ 95" }],
        imageSrc: "/pack-energia.jpg",
        alt: "Pack Miel y derivados",
        category: "Packs",
        badge: "Pack",
      },
    ],
    []
  );


  const [active, setActive] = useState<Category>("Todos");

  const filtered = useMemo(() => {
    if (active === "Todos") return products;
    return products.filter((p) => p.category === active);
  }, [active, products]);

  return (
    <section id="productos" className="relative py-20 bg-gradient-to-b from-white via-green-50/70 to-white overflow-hidden">
      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-green-900 font-extrabold tracking-[0.35em] uppercase text-sm">Catálogo</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-green-950 tracking-tight">Nuestros Productos</h2>
        </div>



        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <article key={p.id} className="group relative overflow-hidden rounded-3xl bg-white/85 backdrop-blur border border-green-900/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

              {/* Imagen Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={p.imageSrc}
                  alt={p.alt}
                  fill
                  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
                  quality={85}
                  priority={p.id === 1} // solo el primer producto (mejora LCP)
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {p.badge && (
                  <div className="absolute top-4 left-4 rounded-full bg-green-950/85 text-white px-3 py-1 shadow-md backdrop-blur">
                    <span className="text-xs font-extrabold tracking-widest uppercase">{p.badge}</span>
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-green-950 text-center">{p.name}</h3>
                <p className="mt-2 text-sm text-green-950/70 text-center min-h-[40px]">{p.description}</p>

                {/* Sección de Precios/Variantes */}
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {p.variants.map((variant, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 min-w-[80px]">
                      <span className="text-[10px] uppercase font-bold text-amber-800">{variant.label}</span>
                      <span className="text-lg font-black text-green-950">{variant.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={buildWhatsAppLink(`Hola GOXA, me interesa ${p.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full gap-2 py-3 px-4 rounded-2xl bg-green-800 text-white font-extrabold transition-all hover:bg-green-900"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Pedir por WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}