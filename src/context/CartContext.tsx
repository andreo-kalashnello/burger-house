"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface CartContextValue {
  itemCount: number;
  addItem: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [itemCount, setItemCount] = useState(2);

  const value = useMemo(
    () => ({
      itemCount,
      addItem: () => setItemCount((current) => current + 1),
    }),
    [itemCount],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
