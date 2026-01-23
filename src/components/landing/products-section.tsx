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

const categoryMeta: Record<
  Category,
  { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; circleBg: string; accentBg: string }
> = {
  Todos: {
    icon: LayoutGrid,
    circleBg: "bg-emerald-50 text-emerald-800",
    accentBg: "from-emerald-900 to-emerald-700",
  },
  Miel: {
    icon: Sparkles,
    circleBg: "bg-amber-50 text-amber-700",
    accentBg: "from-amber-900 to-amber-700",
  },
  "Café y chocolates": {
    icon: Coffee,
    circleBg: "bg-amber-100 text-amber-900",
    accentBg: "from-amber-900 to-amber-800",
  },
  Desayunos: {
    icon: Sunrise,
    circleBg: "bg-slate-50 text-slate-700",
    accentBg: "from-slate-900 to-slate-500",
  },
  Parrillas: {
    icon: Flame,
    circleBg: "bg-red-50 text-red-700",
    accentBg: "from-red-900 to-red-700",
  },
  Salud: {
    icon: HeartPulse,
    circleBg: "bg-emerald-50 text-emerald-700",
    accentBg: "from-emerald-900 to-emerald-600",
  },
  Packs: {
    icon: Gift,
    circleBg: "bg-indigo-50 text-indigo-700",
    accentBg: "from-indigo-900 to-indigo-700",
  },
};

export default function ProductsSection() {
  const { addItem, openCart }:any = useCart();
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
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
              {categoryOrder.map((cat) => {
                const meta = categoryMeta[cat];
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className={`group relative flex flex-col items-center gap-3 rounded-[32px] border p-3 pt-6 text-center transition-all duration-200 ${isActive
                        ? "border-transparent bg-white shadow-[0_18px_60px_rgba(16,185,129,0.25)]"
                        : "border border-green-100 bg-white/80 hover:bg-white"
                      }`}
                  >
                    <span
                      className={`flex h-[140px] w-[140px] items-center justify-center rounded-full text-3xl transition-all duration-200 ${isActive
                          ? `bg-gradient-to-br ${meta.accentBg} text-white shadow-[0_25px_60px_rgba(16,185,129,0.35)]`
                          : `${meta.circleBg} shadow-lg`
                        }`}
                    >
                      <meta.icon className={`${isActive ? "h-12 w-12" : "h-10 w-10"}`} />
                    </span>
                    <span className="text-sm font-semibold text-green-900 uppercase tracking-[0.3em]">{cat}</span>
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
