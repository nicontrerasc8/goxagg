"use client";

import { useCart } from "@/context/cart-context";
import { X, ShoppingBag, ArrowRight, Heart, XCircle } from "lucide-react";
import CartItemComponent from "./cart-item";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const ORDER_HISTORY_KEY = "goxa-order-history";
const MAX_ORDER_HISTORY = 12;

type OrderHistoryEntry = {
  id: string;
  placedAt: string;
  total: number;
  whatsappLink?: string;
  items: Array<{
    productName: string;
    variantLabel: string;
    quantity: number;
    price: number;
  }>;
};

export default function CartDrawer() {
    const { isOpen, closeCart, items, totalPrice, clearCart } = useCart();
    const drawerRef = useRef<HTMLDivElement>(null);
    const [orderHistory, setOrderHistory] = useState<OrderHistoryEntry[]>([]);
    const whatsappNumber = "51998855069";
    const whatsappLink = items.length
        ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent([
              "Hola, me gustaria hacer el siguiente pedido:",
              ...items.map((item) =>
                  `- ${item.quantity} x ${item.productName}${item.variantLabel ? ` (${item.variantLabel})` : ""}`
              ),
              `Total estimado: S/ ${totalPrice.toFixed(2)}`,
          ].join("\n"))}`
        : undefined;

    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = localStorage.getItem(ORDER_HISTORY_KEY);
        if (stored) {
            try {
                setOrderHistory(JSON.parse(stored));
            } catch (error) {
                console.error("No se pudo leer el historial de pedidos", error);
            }
        }
    }, []);

    const persistOrderHistory = () => {
        if (!whatsappLink || items.length === 0 || typeof window === "undefined") return;

        const nextEntry: OrderHistoryEntry = {
            id: `${Date.now()}`,
            placedAt: new Date().toISOString(),
            total: totalPrice,
            whatsappLink,
            items: items.map((item) => ({
                productName: item.productName,
                variantLabel: item.variantLabel,
                quantity: item.quantity,
                price: item.price,
            })),
        };

        try {
            const existing = localStorage.getItem(ORDER_HISTORY_KEY);
            const parsed: OrderHistoryEntry[] = existing ? JSON.parse(existing) : [];
            const next = [nextEntry, ...parsed].slice(0, MAX_ORDER_HISTORY);
            localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(next));
            setOrderHistory(next);
        } catch (error) {
            console.error("No se pudo guardar el pedido", error);
        }
    };

    const handleBuyClick = () => {
        persistOrderHistory();
    };

    const handleRepeatOrder = (entry: OrderHistoryEntry) => {
        if (entry.whatsappLink && typeof window !== "undefined") {
            window.open(entry.whatsappLink, "_blank", "noopener");
        }
    };

    const handleDeleteOrder = (entryId: string) => {
        const filtered = orderHistory.filter((entry) => entry.id !== entryId);
        setOrderHistory(filtered);
        if (typeof window !== "undefined") {
            localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(filtered));
        }
    };

    const formatOrderDate = (iso: string) => {
        try {
            return new Date(iso).toLocaleString("es-PE", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            });
        } catch {
            return iso;
        }
    };

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

                {orderHistory.length > 0 && (
                    <div className="border-t border-green-50 bg-white/70 px-6 py-4 text-sm text-slate-700">
                        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700">
                            <span>Pedidos guardados</span>
                            <span className="text-[11px] font-normal uppercase tracking-[0.3em] text-slate-400">
                                {orderHistory.length} registros
                            </span>
                        </div>
                        <div className="mt-3 space-y-3 max-h-56 overflow-y-auto pr-1">
                            {orderHistory.map((entry) => {
                                const summary = entry.items
                                    .map(
                                        (item) =>
                                            `${item.quantity}x ${item.productName}${
                                                item.variantLabel ? ` (${item.variantLabel})` : ""
                                            }`
                                    )
                                    .join(" - ");
                                return (
                                    <div
                                        key={entry.id}
                                        className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-3 shadow-sm"
                                    >
                                        <div className="flex items-center justify-between text-xs text-slate-600">
                                            <span>{formatOrderDate(entry.placedAt)}</span>
                                            <span className="font-semibold text-green-900">
                                                S/ {entry.total.toFixed(2)}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-[13px] text-slate-700 leading-snug">{summary}</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {entry.whatsappLink && (
                                                <button
                                                    type="button"
                                                    onClick={() => handleRepeatOrder(entry)}
                                                    className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-700 transition hover:border-emerald-400 hover:bg-emerald-50"
                                                >
                                                    Repetir pedido
                                                </button>
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteOrder(entry.id)}
                                                className="inline-flex items-center justify-center rounded-full border border-red-200 bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-red-700 transition hover:border-red-400 hover:bg-red-50"
                                            >
                                                Borrar pedido
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

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
                    <div className="mb-4 space-y-2">
                        <Button
                            variant="ghost"
                            className="w-full border border-green-200 rounded-xl text-green-800 font-semibold flex items-center justify-center gap-2"
                            onClick={clearCart}
                        >
                            <XCircle className="h-4 w-4" />
                            Vaciar carrito
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full border border-green-200 rounded-xl text-green-800 font-semibold flex items-center justify-center gap-2"
                            onClick={closeCart}
                        >
                            <ArrowRight className="h-4 w-4" />
                            Seguir comprando
                        </Button>
                    </div>
                    <Button
                        asChild
                        onClick={handleBuyClick}
                        className="w-full relative h-[56px] text-lg font-bold bg-emerald-900 hover:bg-emerald-800 text-white rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="relative flex items-center justify-center gap-2"
                        >
                            <ShoppingBag className="h-6 w-6" />
                            Comprar
                        </a>
                    </Button>
              
                    </div>
                )}
            </div>
        </div>
    );
}
