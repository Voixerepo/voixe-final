"use client";
import { useCart } from "./CartProvider";

export default function CartButton() {
  const { count, toggleCart } = useCart(); // now exists on the context

  return (
    <button onClick={toggleCart} className="relative" aria-label="Open cart">
      <span className="text-xs tracking-wide hover:text-neutral-900 transition">
        Cart{count ? ` (${count})` : ""}
      </span>
    </button>
  );
}
