"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Coffee, Flame, Gift, HeartPulse, LayoutGrid, ShoppingCart, Sparkles, Sunrise } from "lucide-react";
import { products, Category, Product } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

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
  {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    circleBg: string;
    accentBg: string;
    description: string;
  }
> = {
  Todos: {
    icon: LayoutGrid,
    circleBg: "bg-emerald-50 text-emerald-800",
    accentBg: "from-emerald-900 to-emerald-700",
    description: "Todo lo artesanal en un solo lugar",
  },
  Miel: {
    icon: Sparkles,
    circleBg: "bg-amber-50 text-amber-700",
    accentBg: "from-amber-900 to-amber-700",
    description: "Dulzura pura directamente de la colmena",
  },
  "Café y chocolates": {
    icon: Coffee,
    circleBg: "bg-amber-100 text-amber-900",
    accentBg: "from-amber-900 to-amber-800",
    description: "Rituales energizantes y chocolatería fina",
  },
  Desayunos: {
    icon: Sunrise,
    circleBg: "bg-slate-50 text-slate-700",
    accentBg: "from-slate-900 to-slate-500",
    description: "Comienzos suaves para cada mañana",
  },
  Parrillas: {
    icon: Flame,
    circleBg: "bg-red-50 text-red-700",
    accentBg: "from-red-900 to-red-700",
    description: "Sabores intensos para asados memorables",
  },
  Salud: {
    icon: HeartPulse,
    circleBg: "bg-emerald-50 text-emerald-700",
    accentBg: "from-emerald-900 to-emerald-600",
    description: "Cuidados botánicos y bienestar",
  },
  Packs: {
    icon: Gift,
    circleBg: "bg-indigo-50 text-indigo-700",
    accentBg: "from-indigo-900 to-indigo-700",
    description: "Regalos listos para compartir",
  },
};

export default function ProductsSection() {
  const { addItem, itemCount, openCart }: any = useCart();
  const [active, setActive] = useState<Category>("Todos");
  const gridRef = React.useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    if (active === "Todos") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  const activeLabel = active === "Todos" ? "Todo el catálogo" : active;
  const handleAddToCart = (product: typeof products[0], variantIdx: number) => {
    addItem(product, variantIdx);
    const variantLabel = product.variants[variantIdx].label;

    toast.success("Â¡Agregado al carrito!", {
      description: `${product.name} (${variantLabel}) ya estÃ¡ listo para ti.`,
      icon: <ShoppingCart className="w-5 h-5 text-green-600" />,
      duration: 3000,
      className: "bg-white border-green-100"
    });
  };

  const closePopup = () => setSelectedProduct(null);

  return (
    <section id="productos" className="relative py-20  overflow-hidden">
      <button
        type="button"
        onClick={openCart}
        className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-emerald-200 bg-gradient-to-br from-white/90 to-emerald-50 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-900 shadow-[0_20px_40px_-20px_rgba(4,73,45,0.9)] transition duration-200 hover:border-emerald-300 hover:shadow-[0_25px_60px_-25px_rgba(4,73,45,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:gap-3"
        aria-label="Abrir carrito"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white shadow-inner shadow-emerald-900/30">
          <ShoppingCart className="h-4 w-4" />
        </div>
        <span className="hidden text-xs uppercase tracking-[0.3em] text-emerald-600 sm:inline">
          Carrito
        </span>
        <span className="inline-flex h-6 min-w-[24px] items-center justify-center rounded-full border border-white bg-emerald-600 px-2 text-[11px] font-bold text-white shadow-lg shadow-emerald-900/40">
          {itemCount}
        </span>
      </button>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto text-center space-y-4 rounded-[2rem] bg-white/90 p-8 shadow-2xl shadow-emerald-900/10 border border-white/60 backdrop-blur-md mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 shadow-inner shadow-emerald-100">
            <Sparkles className="w-4 h-4 mr-2 text-emerald-600" /> Categorias
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-green-950 tracking-tight">
            Nuestros Productos
          </h2>
          <p className="text-sm text-slate-600">
            Explora lo mejor de la cocina artesanal desde Oxapampa: mieles, cafés, desayunos y packs premium.
          </p>
     

        {/* CategorÃ­as */}
       
  <span className="pointer-events-none absolute -left-6 -top-10 hidden h-32 w-32 rounded-full bg-emerald-200/60 blur-3xl sm:block" />
  <span className="pointer-events-none absolute right-6 -bottom-10 hidden h-36 w-36 rounded-full bg-amber-200/70 blur-3xl lg:block" />

  <div className="relative flex justify-center">
    <div className="grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {categoryOrder.map((cat) => {
        const meta = categoryMeta[cat];
        const isActive = active === cat;

        const handleClick = () => {
          setActive(cat);
          gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        };

        return (
          <button
            key={cat}
            type="button"
            onClick={handleClick}
            className={cn(
              "group relative flex flex-col items-center gap-3 rounded-[2rem] px-4 py-5 text-center transition-all duration-300",
              isActive
                ? `bg-gradient-to-br ${meta.accentBg} text-white shadow-[0_20px_50px_-30px_rgba(4,73,45,0.6)] scale-[1.04]`
                : "bg-white border border-emerald-100 hover:-translate-y-1 hover:shadow-lg"
            )}
          >
            {/* Icono */}
            <div
              className={cn(
                "flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-inner transition-all duration-300",
                isActive
                  ? "bg-white/20"
                  : "bg-emerald-50 group-hover:bg-emerald-100"
              )}
            >
              <meta.icon
                className={cn(
                  "h-9 w-9 transition-colors duration-300",
                  isActive ? "text-white" : "text-emerald-600"
                )}
              />
            </div>

            {/* Título */}
            <span
              className={cn(
                "text-sm font-bold uppercase tracking-wide",
                isActive ? "text-white" : "text-slate-900"
              )}
            >
              {cat}
            </span>

            {/* Descripción */}
            <span
              className={cn(
                "text-xs leading-snug",
                isActive ? "text-white/90" : "text-slate-500"
              )}
            >
              {meta.description}
            </span>
          </button>
        );
      })}
    </div>
  </div>
</div>

        {/* Resumen dinÃ¡mico */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-[0.3em] mb-2">
            {activeLabel}
          </p>
    
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((p) => (
           <article key={p.id} className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-green-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/10 hover:border-green-200/50">

  {/* Imagen Container */}
  <div className="relative w-full aspect-[4/5] overflow-hidden bg-white rounded-xl">
    <Image
      src={p.imageSrc}
      alt={p.alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
      quality={90}
      className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105 rounded-xl"
    />
    {p.popup && (
      <button
        type="button"
        onClick={() => setSelectedProduct(p)}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-b from-black/70 to-black/20 text-center text-white opacity-0 transition duration-500 ease-out group-hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        <span className="text-xs font-semibold tracking-[0.4em] uppercase">
          Ver info
        </span>
        <span className="text-[11px] text-white/80">Más sobre este producto</span>
      </button>
    )}
    {/* Badges */}
    <div className="absolute top-4 left-4 flex flex-col gap-2">
      {p.badge && (
        <div className="rounded-full bg-white/95 text-green-900 px-3 py-1 text-xs font-extrabold tracking-widest uppercase shadow-sm backdrop-blur border border-green-100">
          {p.badge}
        </div>
      )}
    </div>
  </div>

  {/* Contenido */}
  <div className="p-6 flex flex-col flex-1">
    <div className="flex justify-between items-start mb-2">
      <span className="text-[10px] font-bold tracking-wider text-green-600 uppercase bg-green-50 px-2 py-1 rounded-md">
        {p.category}
      </span>
    </div>

    <h3 className="text-xl font-bold text-green-950 mb-2 leading-tight group-hover:text-green-700 transition-colors">
      {p.name}
    </h3>

    <p className="text-sm text-gray-500 mb-6 line-clamp-2 leading-relaxed flex-1">
      {p.description}
    </p>

    {/* Presentaciones */}
    <div className="flex flex-col gap-2">
      {p.variants.map((variant, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between rounded-lg border border-green-100 bg-green-50/80 px-4 py-3"
        >
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-green-900">
              {variant.label}
            </span>
            <span className="text-lg font-bold text-green-800">
              {variant.price}
            </span>
          </div>
          
          <button
            onClick={() => handleAddToCart(p, idx)}
            className="rounded-lg border border-green-600 bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 active:scale-95"
            aria-label={`Agregar ${variant.label} de ${p.name}`}
          >
            Agregar
          </button>
        </div>
      ))}
    </div>
  </div>
</article>
          ))}
        </div>

        {selectedProduct?.popup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={closePopup}
            />
            <div className="relative z-10 w-full max-w-[95vw] lg:max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl shadow-emerald-900/10 ring-1 ring-emerald-100">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">
                    {selectedProduct.category}
                  </p>
                <h3 className="mt-2 text-3xl font-bold text-green-950">
                  {selectedProduct.popup.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{selectedProduct.popup.description}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={closePopup}
              className="absolute top-4 right-4 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-slate-500 shadow-lg shadow-slate-900/10 transition hover:bg-white hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:top-6 sm:right-6"
            >
              <span className="sr-only">Cerrar</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

              <div className="mt-8 grid gap-6 lg:grid-cols-[0.65fr,1fr]">
                <div className="relative min-h-[220px] overflow-hidden rounded-[1.5rem] border border-emerald-100 bg-emerald-50/40 flex items-center justify-center p-1">
                  <div className="relative h-full w-full max-w-[280px]">
                    <Image
                      src={selectedProduct.imageSrc}
                      alt={selectedProduct.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {selectedProduct.popup.sections.map((section) => (
                      <div
                        key={section.heading}
                        className="rounded-2xl border border-emerald-100 bg-white/90 p-4"
                      >
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                          {section.heading}
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                          {section.points.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-700" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {selectedProduct.popup.notes && (
                    <div className="space-y-2 rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/30 p-4 text-sm text-emerald-700">
                      {selectedProduct.popup.notes.map((note) => (
                        <p key={note}>{note}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
