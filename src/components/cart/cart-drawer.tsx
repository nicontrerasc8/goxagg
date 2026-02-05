"use client";

import { useCart } from "@/context/cart-context";
import { X, ShoppingBag, ArrowRight, Heart, ShoppingCart } from "lucide-react";
import CartItemComponent from "./cart-item";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CartDrawer() {
    const { isOpen, closeCart, items, totalPrice } = useCart();
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end font-poppins">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-green-950/20 backdrop-blur-[2px] transition-opacity duration-300"
                onClick={closeCart}
            />

            {/* Drawer */}
            <div
                ref={drawerRef}
                className="relative z-50 w-full max-w-md bg-white shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-500 ease-out border-l border-green-50"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-green-50 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100/50 p-2 rounded-xl">
                            <ShoppingBag className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-green-950 leading-none">Mi Carrito</h2>
                            <p className="text-xs text-green-800/60 font-medium mt-1">
                                {items.length > 0 ? "¡Excelentes elecciones!" : "Esperando tus antojos"}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={closeCart}
                        className="p-2 text-green-800/40 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-2 bg-gradient-to-b from-white to-green-50/30">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-6 pb-20 animate-in fade-in zoom-in duration-500">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-100 rounded-full blur-xl opacity-50" />
                                <div className="relative h-24 w-24 bg-white border border-green-50 rounded-full flex items-center justify-center shadow-sm">
                                    <Heart className="h-10 w-10 text-rose-300 fill-rose-100" />
                                </div>
                            </div>
                            <div className="max-w-[240px]">
                                <h3 className="text-xl font-bold text-green-950">Tu carrito está vacío</h3>
                                <p className="mt-2 text-green-800/60 leading-relaxed">
                                    ¿Qué tal si empezamos con una deliciosa Miel o un Café de altura?
                                </p>
                            </div>
                            <Button
                                onClick={closeCart}
                                className="bg-green-800 text-white hover:bg-green-900 rounded-full px-8 py-6 h-auto font-bold shadow-lg hover:shadow-green-900/20 hover:-translate-y-1 transition-all duration-300"
                            >
                                Ver Productos <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    ) : (
                        <div className="py-6 space-y-6">
                            {/* Pro Tip / Didactic Message */}
                            <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-4 flex gap-3 items-start">
                                <span className="text-lg">💡</span>
                                <p className="text-sm text-amber-900/80 leading-snug">
                                    <strong>¿Sabías que?</strong> Nuestros productos son 100% naturales. ¡Llevas salud a tu mesa y mejoras tu calidad de vida!
                                </p>
                            </div>

                            <div className="space-y-4">
                                {items.map((item) => (
                                    <CartItemComponent key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-green-50 p-6 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.03)] z-20">
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between items-center text-sm text-green-800/60">
                                <span>Subtotal</span>
                                
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="text-lg font-bold text-green-950">Total Estimado</span>
                                <div className="text-right">
                                    <span className="block text-2xl font-extrabold text-green-700 leading-none">S/ {totalPrice.toFixed(2)}</span>
                                    <span className="text-[10px] text-green-800/40 font-medium">No incluye envío</span>
                                </div>
                            </div>
                        </div>
                                  <Button
                            variant="ghost"
                            className="w-full mb-4 border border-green-200 rounded-xl text-green-800 font-semibold"
                            onClick={closeCart}
                        >
                            Seguir comprando
                        </Button>
                    <Button
                        asChild
                        className="w-full relative h-[56px] text-lg font-bold bg-emerald-900 hover:bg-emerald-800 text-white rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <Link
                            href="/"
                            className="relative flex items-center justify-center gap-2"
                        >
                            <ShoppingCart className="h-6 w-6" />
                            Comprar
                        </Link>
                    </Button>
              
                    </div>
                )}
            </div>
        </div>
    );
}
