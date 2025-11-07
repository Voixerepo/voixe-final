"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { ShoppingCart } from "lucide-react";

export default function TopBar() {
  const { setOpened, count } = useCart();

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-neutral-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="text-xl font-bold tracking-tight">
          VOIXE
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium tracking-tight">
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/lookbook" className="hover:underline">Lookbook</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        <button
          onClick={() => setOpened(true)}
          className="relative flex items-center gap-1 border border-neutral-900 px-3 py-1 text-sm font-mono uppercase hover:bg-neutral-900 hover:text-white transition"
          aria-label="Open cart"
        >
          <ShoppingCart size={15} />
          <span>Cart</span>
          {count > 0 && (
            <span className="ml-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-neutral-900 text-[10px] text-white">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
