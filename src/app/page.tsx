"use client";

import Link from "next/link";
import ProductsSection from "@/components/landing/products-section";
import SiteFooter from "@/components/landing/site-footer";
import { StickyWhatsAppButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-emerald-100 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">
            Catálogo premium
          </p>
          <h1 className="mt-4 text-3xl font-extrabold text-green-950 md:text-4xl lg:text-5xl">
            Compra los productos más selectos desde Oxapampa
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-green-900/85">
            Explora miel pura, parrillas artesanales, bebidas energizantes y packs curados
            con historia. Todo está listo para agregar al carrito y recibirlo directo en Lima y
            provincia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/inicio"
              className="rounded-full bg-emerald-900 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-800"
            >
              Conocer la marca
            </Link>
            <Link
              href="/quienes-somos"
              className="rounded-full border border-emerald-900 px-8 py-3 text-base font-semibold text-emerald-900 transition hover:bg-emerald-100"
            >
              Ver nuestra historia
            </Link>
          </div>
        </div>
      </section>

      <ProductsSection />

      <StickyWhatsAppButton />

      <SiteFooter />
    </main>
  );
}
