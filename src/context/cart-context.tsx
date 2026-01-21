"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
    id: string; // Unique ID composed of productId + variantLabel
    productId: number;
    productName: string;
    variantLabel: string;
    price: number; // Numeric price
    quantity: number;
    imageSrc: string;
}

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    itemCount: number;
    totalPrice: number;
    openCart: () => void;
    closeCart: () => void;
    addItem: (product: Product, variantIndex: number, quantity?: number) => void;
    removeItem: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        setIsMounted(true);
        const savedCart = localStorage.getItem("goxa-cart");
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Error parsing cart data", e);
            }
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("goxa-cart", JSON.stringify(items));
        }
    }, [items, isMounted]);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const addItem = (product: Product, variantIndex: number, quantity = 1) => {
        const variant = product.variants[variantIndex];
        const price = parseFloat(variant.price.replace(/[^\d.]/g, ""));
        const itemId = `${product.id}-${variant.label}`;

        setItems((prev) => {
            const existing = prev.find((item) => item.id === itemId);
            if (existing) {
                return prev.map((item) =>
                    item.id === itemId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [
                ...prev,
                {
                    id: itemId,
                    productId: product.id,
                    productName: product.name,
                    variantLabel: variant.label,
                    price,
                    quantity,
                    imageSrc: product.imageSrc,
                },
            ];
        });
        setIsOpen(true);
    };

    const removeItem = (itemId: string) => {
        setItems((prev) => prev.filter((item) => item.id !== itemId));
    };

    const updateQuantity = (itemId: string, quantity: number) => {
        if (quantity < 1) {
            removeItem(itemId);
            return;
        }
        setItems((prev) =>
            prev.map((item) =>
                item.id === itemId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => setItems([]);

    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                isOpen,
                itemCount,
                totalPrice,
                openCart,
                closeCart,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
