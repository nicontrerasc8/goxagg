"use client";

import { useCart } from "@/context/cart-context";
import { ShoppingBag } from "lucide-react";

export default function CartTrigger() {
    const { openCart, itemCount } = useCart();

    return (
        <button
            onClick={openCart}
            className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Abrir carrito"
        >
            <ShoppingBag className="h-6 w-6" />
            {itemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
                    {itemCount}
                </span>
            )}
        </button>
    );
}
