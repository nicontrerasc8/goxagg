"use client";

import { useCart, CartItem } from "@/context/cart-context";
import { Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
    item: CartItem;
}

export default function CartItemComponent({ item }: CartItemProps) {
    const { updateQuantity, removeItem } = useCart();

    return (
        <div className="group flex gap-4 p-3 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-100">
            {/* Image */}
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50">
                <Image
                    src={item.imageSrc}
                    alt={item.productName}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between py-1">
                <div>
                    <div className="flex justify-between items-start">
                        <h3 className="text-base font-bold text-green-950 line-clamp-2 leading-tight">
                            {item.productName}
                        </h3>
                        <p className="text-base font-bold text-green-700 whitespace-nowrap">
                            S/ {(item.price * item.quantity).toFixed(2)}
                        </p>
                    </div>
                    <p className="mt-1 text-xs text-green-800/60 font-medium bg-green-50 inline-block px-2 py-0.5 rounded-md">
                        {item.variantLabel}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-3">
                    {/* Quantity Control */}
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-7 w-7 flex items-center justify-center rounded-md bg-white shadow-sm border border-gray-100 text-gray-600 hover:text-green-700 hover:border-green-200 transition-all disabled:opacity-50"
                            aria-label="Decrease quantity"
                        >
                            <Minus className="h-3 w-3" />
                        </button>
                        <span className="min-w-[1rem] text-center text-sm font-semibold text-gray-900">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-7 w-7 flex items-center justify-center rounded-md bg-white shadow-sm border border-gray-100 text-gray-600 hover:text-green-700 hover:border-green-200 transition-all"
                            aria-label="Increase quantity"
                        >
                            <Plus className="h-3 w-3" />
                        </button>
                    </div>

                    {/* Remove Button */}
                    <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
                        title="Eliminar del carrito"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
