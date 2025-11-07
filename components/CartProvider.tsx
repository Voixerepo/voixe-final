"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  slug: string;
  name: string;
  image: string;
  price: number;
  size?: string;
  qty: number;
};

type CartContextType = {
  opened: boolean;
  setOpened: (v: boolean) => void;
  toggleCart: () => void;
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  setQty: (index: number, qty: number) => void;
  clear: () => void;
  subtotal: number;
  count: number;
};

const CartCtx = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("voixe_cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("voixe_cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const i = prev.findIndex((x) => x.slug === item.slug && x.size === item.size);
      if (i >= 0) {
        const clone = [...prev];
        clone[i] = { ...clone[i], qty: clone[i].qty + item.qty };
        return clone;
      }
      return [...prev, item];
    });
    setOpened(true);
  };

  const removeItem = (index: number) => setItems((prev) => prev.filter((_, i) => i !== index));
  const setQty = (index: number, qty: number) =>
    setItems((prev) => {
      const clone = [...prev];
      clone[index] = { ...clone[index], qty: Math.max(1, qty) };
      return clone;
    });
  const clear = () => setItems([]);

  const subtotal = useMemo(() => items.reduce((s, it) => s + it.price * it.qty, 0), [items]);
  const count = useMemo(() => items.reduce((n, it) => n + it.qty, 0), [items]);

  const toggleCart = () => setOpened((v) => !v);

  return (
    <CartCtx.Provider
      value={{ opened, setOpened, toggleCart, items, addItem, removeItem, setQty, clear, subtotal, count }}
    >
      {children}
    </CartCtx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
