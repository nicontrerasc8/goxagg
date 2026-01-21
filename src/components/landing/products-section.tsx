"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { products, Category } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";

export default function ProductsSection() {
  const { addItem, openCart } = useCart();
  const [active, setActive] = useState<Category>("Todos");

  const filtered = useMemo(() => {
    if (active === "Todos") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  const handleAddToCart = (product: typeof products[0], variantIdx: number) => {
    addItem(product, variantIdx);
  };

  return (
    <section id="productos" className="relative py-20 bg-gradient-to-b from-white via-green-50/70 to-white overflow-hidden">
      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-green-900 font-extrabold tracking-[0.35em] uppercase text-sm">Catálogo</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-green-950 tracking-tight">Nuestros Productos</h2>
        </div>

        {/* Filter Buttons (Optional/Simple) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(["Todos", "Mieles", "Derivados", "Packs"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${active === cat
                  ? "bg-green-800 text-white shadow-lg"
                  : "bg-white text-green-800 border border-green-100 hover:bg-green-50"
                }`}
            >
              {cat}
            </button>
          ))}
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                  priority={p.id === 1}
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

                {/* Sección de Variantes y Botones */}
                <div className="mt-6 flex flex-col gap-3">
                  {p.variants.map((variant, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-amber-50/50 border border-amber-100 rounded-xl p-3">
                      <div className="flex flex-col">
                        <span className="text-xs uppercase font-bold text-amber-800">{variant.label}</span>
                        <span className="text-lg font-black text-green-950">{variant.price}</span>
                      </div>
                      <Button
                        onClick={() => handleAddToCart(p, idx)}
                        size="sm"
                        className="bg-green-800 hover:bg-green-900 text-white font-bold rounded-lg h-9"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Agregar
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
