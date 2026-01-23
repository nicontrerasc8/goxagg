"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Coffee, Flame, Gift, HeartPulse, LayoutGrid, ShoppingCart, Sparkles, Sunrise } from "lucide-react";
import { products, Category } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";

const categoryOrder: Category[] = [
  "Todos",
  "Miel",
  "Café y chocolates",
  "Desayunos",
  "Parrillas",
  "Salud",
  "Packs",
];

const categoryMeta: Record<Category, { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; iconBg: string }> = {
  Todos: {
    icon: LayoutGrid,
    iconBg: "border border-emerald-100 bg-emerald-50 text-emerald-600",
  },
  Miel: {
    icon: Sparkles,
    iconBg: "border border-amber-100 bg-amber-50 text-amber-600",
  },
  "Café y chocolates": {
    icon: Coffee,
    iconBg: "border border-amber-200 bg-amber-50 text-amber-700",
  },
  Desayunos: {
    icon: Sunrise,
    iconBg: "border border-slate-200 bg-white text-slate-700",
  },
  Parrillas: {
    icon: Flame,
    iconBg: "border border-red-100 bg-red-50 text-red-600",
  },
  Salud: {
    icon: HeartPulse,
    iconBg: "border border-emerald-100 bg-emerald-50 text-emerald-700",
  },
  Packs: {
    icon: Gift,
    iconBg: "border border-indigo-100 bg-indigo-50 text-indigo-600",
  },
};

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

        {/* Categorías */}
        <div className="relative mb-10">
          <span className="pointer-events-none absolute -left-4 -top-6 hidden h-24 w-24 rounded-2xl bg-emerald-100/60 blur-3xl sm:block" />
          <span className="pointer-events-none absolute right-4 -bottom-8 hidden h-28 w-28 rounded-3xl bg-amber-100/70 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-[32px] border border-green-100 bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/70 p-6 shadow-[0_30px_60px_-30px_rgba(16,185,129,0.6)]">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {categoryOrder.map((cat) => {
                const meta = categoryMeta[cat];
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className={`group flex flex-col items-center gap-4 rounded-[24px] border p-4 text-center transition-all duration-200 ${isActive
                        ? "border-transparent bg-white shadow-[0_15px_40px_rgba(16,185,129,0.25)]"
                        : "border border-green-100 bg-white/80 hover:bg-white"
                      }`}
                  >
                    <span
                      className={`flex h-20 w-20 items-center justify-center rounded-[26px] ${isActive
                          ? "border border-transparent bg-gradient-to-br from-green-900 to-emerald-800 text-white shadow-[0_15px_40px_rgba(16,185,129,0.35)]"
                          : `${meta.iconBg}`
                        }`}
                    >
                      <meta.icon className="h-10 w-10" />
                    </span>
                    <span className="text-sm font-semibold text-green-900">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((p) => (
            <article key={p.id} className="group relative overflow-hidden rounded-3xl bg-white/85 backdrop-blur border border-green-900/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

              {/* Imagen Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={p.imageSrc}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  quality={85}
                  priority={p.id === 1}
                  className="object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
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
