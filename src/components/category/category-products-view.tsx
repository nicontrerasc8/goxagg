"use client";

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

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

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedOptionId(product.options?.[0]?.id ?? null);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedOptionId(null);
  };

  const activeModalOption = selectedProduct
    ? selectedProduct.options?.find((option) => option.id === selectedOptionId) ??
      selectedProduct.options?.[0]
    : undefined;

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
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 shadow-lg">
              <Icon className="h-6 w-6" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.4em]">{category}</span>
          </div>
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#productos"
                className="rounded-full border border-emerald-300 bg-emerald-600 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-700"
              >
                Volver al catálogo
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
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-xl shadow-green-900/5 transition-all duration-500"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-white rounded-xl">
                  <Image
                    src={product.imageSrc}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw"
                    className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105 rounded-xl"
                  />
                  {product.popup && (
                    <button
                      type="button"
                      onClick={() => openProductModal(product)}
                      className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-b from-black/70 to-black/20 text-center text-white opacity-0 transition duration-500 ease-out md:group-hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                    >
                      <span className="text-xs font-semibold tracking-[0.4em] uppercase">
                        Ver info
                      </span>
                      <span className="text-[11px] text-white/80">Más sobre este producto</span>
                    </button>
                  )}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                    {product.badge && (
                      <div className="rounded-full bg-white/95 text-green-900 px-3 py-1 text-xs font-extrabold tracking-widest uppercase shadow-sm backdrop-blur border border-green-100">
                        {product.badge}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold tracking-wider text-green-600 uppercase bg-green-50 px-2 py-1 rounded-md">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-green-950 mb-2 leading-tight group-hover:text-green-700 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-6">
                    {product.description}
                    <button
                      className="text-emerald-700 font-bold ml-2"
                      onClick={() => openProductModal(product)}
                    >
                      Leer más
                    </button>
                  </p>

                  <div className="flex flex-col gap-2">
                    {product.variants.map((variant, idx) => (
                      <div
                        key={`${product.id}-${variant.label}`}
                        className="flex items-center justify-between rounded-lg border border-green-100 bg-green-50/80 px-4 py-3"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-green-900">{variant.label}</span>
                          <span className="text-lg font-bold text-green-800">{variant.price}</span>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product, idx);
                          }}
                          className="rounded-lg relative z-20 border border-green-600 bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2 focus:ring-green-500 active:scale-95 touch-manipulation"
                          aria-label={`Agregar ${variant.label} de ${product.name}`}
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

      {selectedProduct?.popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={closeModal} />
          <div className="relative z-10 w-full max-w-[95vw] lg:max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl shadow-emerald-900/10 ring-1 ring-emerald-100">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">
                  {selectedProduct.category}
                </p>
                <h3 className="mt-2 text-3xl font-bold text-green-950">{selectedProduct.popup.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{selectedProduct.popup.description}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeModal}
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
                {selectedProduct.options && (
                  <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.options.map((option) => {
                        const isActive = option.id === activeModalOption?.id;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setSelectedOptionId(option.id)}
                            className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                              isActive
                                ? "border border-emerald-900 bg-emerald-900 text-white"
                                : "border border-emerald-500 bg-white text-emerald-700 hover:bg-emerald-50"
                            }`}
                            aria-pressed={isActive}
                          >
                            {option.name}
                          </button>
                        );
                      })}
                    </div>

                    {activeModalOption && (
                      <div className="space-y-2 rounded-2xl border border-emerald-200 bg-white p-4 text-sm text-slate-600">
                        <p>{activeModalOption.description}</p>
                        {activeModalOption.benefits && (
                          <ul className="list-disc space-y-1 pl-4 text-[10px] text-slate-500">
                            {activeModalOption.benefits.map((benefit) => (
                              <li key={benefit}>{benefit}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                )}
                <div className="grid gap-4 md:grid-cols-2">
                  {selectedProduct.popup.sections.map((section) => (
                    <div key={section.heading} className="rounded-2xl border border-emerald-100 bg-white/90 p-4">
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
  );
}
