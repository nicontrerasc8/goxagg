"use client";

import Image from "next/image";
import Link from "next/link";
import ProductsSection from "@/components/landing/products-section";
import SiteFooter from "@/components/landing/site-footer";
import { StickyComprarButton } from "@/components/ui/cta-button";

export default function Home() {
  return (
    <main className="relative text-slate-900">
      {/* Fondo global */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/hero-4.png"
          alt="Paisaje de Oxapampa"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 backdrop-blur-[0.5px]"
          aria-hidden
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen">
        <section className="border-b border-emerald-100 bg-gradient-to-b from-emerald-50 via-white/80 to-white/60">
          <div className="container mx-auto px-4 py-12 lg:py-20">
            <div className="mx-auto max-w-4xl text-center space-y-8">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">
                Catálogo premium
              </p>
              <h1 className="text-3xl font-extrabold text-green-950 md:text-4xl lg:text-5xl">
          Compra los productos más selectos desde Oxapampa
              </h1>
              <p className="text-lg text-green-900/85 leading-relaxed">
Haz tu pedido de miel pura, polen, yogurt y quesos   gourmet, parrillas de carne de pastura, chocolates 75% cacao.
Todo listo para agregar a tu carrito y recibirlo en Lima y provincias!              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="#productos"
                  className="rounded-full bg-emerald-900 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-800"
                >
                  Ver catálogos y comprar
                </Link>
    
              </div>
 
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-[0.2em]">
              <Link
                href="/inicio"
                className="rounded-full border border-slate-200 bg-white/80 px-7 py-2 text-slate-700 transition hover:border-slate-300"
              >
                Conocer más
              </Link>
              <Link
                href="/quienes-somos"
                className="rounded-full border border-slate-200 bg-white/80 px-7 py-2 text-slate-700 transition hover:border-slate-300"
              >
                ¿Quiénes somos?
              </Link>
            </div>
          </div>
        </section>

        <ProductsSection />
        <StickyComprarButton />
        <SiteFooter />
      </div>
    </main>
  );
}
