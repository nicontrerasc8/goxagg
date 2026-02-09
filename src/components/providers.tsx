"use client";


import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo-client';
import { CartProvider } from '@/context/cart-context';
import CartDrawer from '@/components/cart/cart-drawer';
import FloatingCartMenu from "@/components/ui/floating-cart-menu";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        {children}
        <CartDrawer />
        <FloatingCartMenu />
        <Toaster />
      </CartProvider>
    </ApolloProvider>
  );
} 
