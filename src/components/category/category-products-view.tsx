"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { toast } from "sonner";
import type { Category, Product } from "@/data/products";
import { categoryMeta } from "@/data/categories";

type CategoryProductsViewProps = {
  category: Category;
  products: Product[];
};

export default function CategoryProductsView({ category, products }: CategoryProductsViewProps) {
  const { addItem } = useCart();
  const meta = categoryMeta[category];
  const Icon = meta.icon;

  const handleAddToCart = (product: Product, variantIdx: number) => {
    addItem(product, variantIdx);
    const variantLabel = product.variants[variantIdx].label;

    toast.success("¡Agregado al carrito!", {
      description: `${product.name} (${variantLabel}) ya está listo para ti.`,
      icon: <ShoppingCart className="w-5 h-5 text-white" />,
      duration: 3000,
      className: "bg-white border-green-100",
    });
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <div className="relative left-6 top-6">
        <div className="relative h-24 w-24 rounded-full border-2 border-white bg-white/80 p-2 shadow-lg">
          <Image src="/logo.png" alt="Logo GOXA" fill className="object-contain" />
        </div>
      </div>

      <div className="fixed inset-0 -z-10">
        <Image
          src="/hero-4.png"
          alt="Paisaje de Oxapampa"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-white/30 backdrop-blur-[0.5px]" aria-hidden />
      </div>

      <section className={`relative overflow-hidden px-6 py-12 `}>
        <div className="container mx-auto flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20  shadow-lg">
              <Icon className="h-6 w-6" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.4em]">{category}</span>
          </div>
          <div className="max-w-3xl space-y-4">
           
           
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full border border-emerald-300 bg-emerald-600 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-700"
              >
                Volver al catálogo
              </Link>
              <Link
                href="/"
                className="rounded-full border border-emerald-600 bg-emerald-500 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-600"
              >
                Explorar todo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          
          <span className="text-sm text-slate-500">{products.length} productos disponibles</span>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-green-900/5 transition-all duration-500"
              >
                <div className="relative w-full overflow-hidden rounded-[2rem] bg-white px-4 py-4">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={product.imageSrc}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="p-4 object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  {product.badge && (
                    <span className="absolute top-4 left-4 rounded-full border border-white bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700 shadow-lg">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600">
                    {product.category}
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-green-950">{product.name}</h2>
                    <p className="text-sm text-slate-500">{product.description}</p>
                  </div>

                  <div className="mt-auto space-y-3">
                    {product.variants.map((variant, idx) => (
                      <div
                        key={`${product.id}-${variant.label}`}
                        className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50/80 px-4 py-3"
                      >
                        <div>
                          <p className="text-sm font-semibold text-green-900">{variant.label}</p>
                          <p className="text-lg font-bold text-green-800">{variant.price}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleAddToCart(product, idx)}
                          className="rounded-lg border border-green-600 bg-green-600 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-green-700"
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
        ) : (
          <p className="text-center text-sm text-slate-500">No hay productos disponibles en esta categoría por ahora.</p>
        )}
      </section>
    </div>
  );
}
