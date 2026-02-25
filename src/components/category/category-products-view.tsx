"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { toast } from "sonner";
import type { Category, Product } from "@/data/products";
import { categoryMeta } from "@/data/categories";
import { cn } from "@/lib/utils";

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
  const [cardSelectedOptions, setCardSelectedOptions] = useState<Record<number, string>>({});

  const handleAddToCart = (product: Product, variantIdx: number, optionId?: string) => {
    if (product.options && product.options.length > 0 && !optionId) {
      toast.error("Selecciona una opción", {
        description: "Por favor elige un tipo antes de agregar al carrito.",
        duration: 3000,
      });
      return;
    }

    let modifiedProduct = product;
    if (optionId && product.options) {
      const selectedOption = product.options.find((opt) => opt.id === optionId);
      if (selectedOption) {
        modifiedProduct = {
          ...product,
          name: `${product.name} - ${selectedOption.name}`,
        };
      }
    }

    addItem(modifiedProduct, variantIdx);
    const variantLabel = product.variants[variantIdx].label;
    const optionName = optionId ? product.options?.find((opt) => opt.id === optionId)?.name : "";

    toast.success("¡Agregado al carrito!", {
      description: `${product.name}${optionName ? ` - ${optionName}` : ""} (${variantLabel}) ya está listo para ti.`,
      icon: <ShoppingCart className="w-5 h-5 text-green-600" />,
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
    ? selectedProduct.options?.find((option) => option.id === selectedOptionId) ?? selectedProduct.options?.[0]
    : undefined;

  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <div className="relative left-6 top-6">
        <div className="relative h-24 w-24 rounded-full border-2 border-white bg-white/80 p-2 shadow-lg">
          <Image src="/logo.png" alt="Logo GOXA" fill className="object-contain" />
        </div>
      </div>

      <div className="fixed inset-0 -z-10">
        <Image src="/hero-4.png" alt="Paisaje de Oxapampa" fill priority className="object-cover" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-white/30 backdrop-blur-[0.5px]"
          aria-hidden
        />
      </div>

      <section className="relative overflow-hidden px-6 py-12">
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
            {products.map((product) => {
              const hasOptions = Boolean(product.options && product.options.length > 0);
              const selectedOptionForCard = hasOptions
                ? cardSelectedOptions[product.id] || product.options?.[0]?.id
                : undefined;

              return (
                <article
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-xl shadow-green-900/5 transition-all duration-500"
                >
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-white">
                    <Image
                      src={product.imageSrc}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      quality={90}
                      className="rounded-xl object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {product.popup && (
                      <button
                        type="button"
                        onClick={() => openProductModal(product)}
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-b from-black/70 to-black/20 text-center text-white opacity-0 transition duration-500 ease-out md:group-hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.4em]">Ver info</span>
                        <span className="text-[11px] text-white/80">Más sobre este producto</span>
                      </button>
                    )}
                    <div className="pointer-events-none absolute left-4 top-4 flex flex-col gap-2">
                      {product.badge && (
                        <div className="rounded-full border border-green-100 bg-white/95 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-green-900 shadow-sm backdrop-blur">
                          {product.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-start justify-between">
                      <span className="rounded-md bg-green-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-green-600">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold leading-tight text-green-950 transition-colors group-hover:text-green-700">
                      {product.name}
                    </h3>

                    <p className="mb-6 flex-1 text-sm text-gray-500">
                      {product.description}
                      <button className="ml-2 font-bold text-emerald-700" onClick={() => openProductModal(product)}>
                        Leer más
                      </button>
                    </p>

                    {hasOptions && product.id !== 14 && (
                      <div className="mb-4 space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wide text-green-700">
                          Elige tipo:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {product.options?.map((option) => {
                            const isSelected = option.id === selectedOptionForCard;
                            return (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => {
                                  setCardSelectedOptions((prev) => ({
                                    ...prev,
                                    [product.id]: option.id,
                                  }));
                                }}
                                className={cn(
                                  "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all",
                                  isSelected
                                    ? "border-2 border-green-600 bg-green-600 text-white"
                                    : "border-2 border-green-200 bg-white text-green-700 hover:border-green-400",
                                )}
                              >
                                {option.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

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
                              handleAddToCart(product, idx, selectedOptionForCard);
                            }}
                            className="relative z-20 rounded-lg border border-green-600 bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-all touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-500 active:scale-95"
                            aria-label={`Agregar ${variant.label} de ${product.name}`}
                          >
                            Agregar
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-sm text-slate-500">
            No hay productos disponibles en esta categoría por ahora.
          </p>
        )}
      </section>

      {selectedProduct?.popup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={closeModal} />
          <div className="relative z-10 max-h-[90vh] w-full max-w-[95vw] overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl shadow-emerald-900/10 ring-1 ring-emerald-100 lg:max-w-3xl">
            <div className="flex items-center justify-center gap-6">
              <div>
                <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">
                  {selectedProduct.category}
                </p>
                <h3 className="mt-2 text-center text-3xl font-bold text-green-950">{selectedProduct.popup.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{selectedProduct.popup.description}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeModal}
              className="absolute left-4 top-4 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-slate-500 shadow-lg shadow-slate-900/10 transition hover:bg-white hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:left-auto sm:right-6 sm:top-6"
            >
              <span className="sr-only">Cerrar</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.65fr,1fr]">
              <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-emerald-100 bg-emerald-50/40 p-1">
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
                          <ul className="list-disc space-y-1 pl-4">
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
