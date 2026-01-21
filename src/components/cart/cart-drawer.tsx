"use client";

import { useCart } from "@/context/cart-context";
import { X, ShoppingBag, MessageCircle } from "lucide-react";
import CartItemComponent from "./cart-item";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "51998855069";

export default function CartDrawer() {
    const { isOpen, closeCart, items, totalPrice, clearCart } = useCart();
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

    const handleWhatsAppCheckout = () => {
        if (items.length === 0) return;

        let message = "*¡Hola! Quiero realizar el siguiente pedido:*%0A%0A";

        items.forEach((item) => {
            message += `• ${item.quantity}x ${item.productName} (${item.variantLabel}) - S/ ${(item.price * item.quantity).toFixed(2)}%0A`;
        });

        message += `%0A*Total: S/ ${totalPrice.toFixed(2)}*`;
        message += "%0A%0A¿Me podrían confirmar el stock y métodos de pago?";

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={closeCart}
            />

            {/* Drawer */}
            <div
                ref={drawerRef}
                className="relative z-50 w-full max-w-md bg-white shadow-xl flex flex-col h-full animate-in slide-in-from-right duration-300"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5 text-green-700" />
                        <h2 className="text-lg font-bold text-gray-900">Tu Carrito</h2>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {items.reduce((acc, item) => acc + item.quantity, 0)} items
                        </span>
                    </div>
                    <button
                        onClick={closeCart}
                        className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                            <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center">
                                <ShoppingBag className="h-8 w-8 text-gray-300" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Tu carrito está vacío</h3>
                                <p className="mt-1 text-gray-500">¡Agrega algunos productos deliciosos!</p>
                            </div>
                            <Button
                                onClick={closeCart}
                                variant="outline"
                                className="mt-4"
                            >
                                Seguir comprando
                            </Button>
                        </div>
                    ) : (
                        <div className="py-6 space-y-6">
                            {items.map((item) => (
                                <CartItemComponent key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-gray-100 p-6 bg-gray-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-base font-medium text-gray-900">Total Estimado</span>
                            <span className="text-xl font-bold text-green-700">S/ {totalPrice.toFixed(2)}</span>
                        </div>
                        <Button
                            className="w-full h-12 text-base font-bold bg-[#25D366] hover:bg-[#128C7E] flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                            onClick={handleWhatsAppCheckout}
                        >
                            <MessageCircle className="h-5 w-5 fill-current" />
                            Pedir por WhatsApp
                        </Button>
                        <p className="mt-4 text-xs text-center text-gray-500">
                            El pago y envío se coordinarán directamente por WhatsApp.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
