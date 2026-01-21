"use client";


import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo-client';
import { CartProvider } from '@/context/cart-context';
import CartDrawer from '@/components/cart/cart-drawer';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        {children}
        <CartDrawer />
      </CartProvider>
    </ApolloProvider>
  );
} 