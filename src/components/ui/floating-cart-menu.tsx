"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";
import type { Category } from "@/data/products";
import { categoryOrder, getCategorySlug } from "@/data/categories";

const NAV_LINKS = [
  { href: "/", label: "Compra en línea" },
  { href: "/inicio", label: "Conocer más" },
  { href: "/quienes-somos", label: "¿Quiénes somos?" },
];

const CATEGORY_NAMES = categoryOrder;

const triggerClasses =
  "flex items-center gap-2 rounded-full border border-emerald-200 bg-gradient-to-br from-white/90 to-emerald-50 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-900 shadow-[0_20px_40px_-20px_rgba(4,73,45,0.9)] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:gap-3";

const menuButtonClasses =
  "flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-white/90 text-emerald-700 shadow-lg transition hover:border-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300";

const WHATSAPP_LINK =
  "https://wa.me/51998855069?text=Hola%20GOXA%2C%20quisiera%20hacer%20una%20consulta.";

export default function FloatingCartMenu() {
  const { openCart, itemCount } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (category: Category) => {
    setMenuOpen(false);
    const slug = getCategorySlug(category);
    if (!slug) {
      return;
    }
    router.push(`/categoria/${slug}`);
  };

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const triggerContent = (
    <>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white shadow-inner shadow-emerald-900/30">
        <ShoppingCart className="h-4 w-4" />
      </div>
      <span className="hidden text-xs uppercase tracking-[0.3em] text-emerald-600 sm:inline">Carrito</span>
      <span className="inline-flex h-6 min-w-[24px] items-center justify-center rounded-full border border-white bg-emerald-600 px-2 text-[11px] font-bold text-white shadow-lg shadow-emerald-900/40">
        {itemCount}
      </span>
    </>
  );

  return (
    <>
      <div
        ref={containerRef}
        className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full p-1 focus-within:outline-none sm:px-0"
        aria-live="polite"
      >
        {isHome ? (
          <button type="button" onClick={openCart} className={triggerClasses} aria-label="Abrir carrito">
            {triggerContent}
          </button>
        ) : (
          <Link href="/" className={triggerClasses} aria-label="Volver al inicio">
            {triggerContent}
          </Link>
        )}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Mostrar opciones de navegación"
          className={menuButtonClasses}
        >
          <Menu className="h-5 w-5" />
        </button>

        {menuOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
            <div
              className={cn(
                "relative ml-auto flex h-full w-full max-w-none flex-col justify-start gap-6 overflow-auto rounded-tl-[28px] rounded-bl-[28px] bg-white px-6 py-8 shadow-[0_-20px_40px_-10px_rgba(4,73,45,0.3)] transition-all duration-300 ease-out sm:max-w-sm",
                "sm:ring-1 sm:ring-emerald-100"
              )}
            >
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition hover:border-emerald-200 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                aria-label="Cerrar el menú"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="mt-12 flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-full bg-gradient-to-br from-emerald-700/90 to-emerald-500 px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-2xl transition hover:from-emerald-600 hover:to-emerald-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-6 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700">
                <p className="text-[10px] tracking-[0.5em] text-emerald-500">Categorías</p>
                {CATEGORY_NAMES.map((category) => (
                  <button
                    key={`cat-${category}`}
                    type="button"
                    onClick={() => handleCategoryClick(category)}
                    className="rounded-full bg-gradient-to-br from-emerald-700/90 to-emerald-500 px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-2xl transition hover:from-emerald-600 hover:to-emerald-500"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-6 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_18px_35px_-15px_rgba(0,0,0,0.65)] transition hover:scale-105 hover:bg-whatsapp-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </>
  );
}
