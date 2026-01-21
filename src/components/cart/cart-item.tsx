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
        <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <Image
                    src={item.imageSrc}
                    alt={item.productName}
                    fill
                    className="object-cover object-center"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3 className="line-clamp-1">{item.productName}</h3>
                        <p className="ml-4">S/ {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.variantLabel}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 text-gray-600 transition-colors"
                            aria-label="Decrease quantity"
                        >
                            <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-[2rem] text-center font-medium text-gray-900">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 text-gray-600 transition-colors"
                            aria-label="Increase quantity"
                        >
                            <Plus className="h-4 w-4" />
                        </button>
                    </div>

                    <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="font-medium text-red-500 hover:text-red-600 transition-colors flex items-center gap-1"
                    >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Eliminar</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
