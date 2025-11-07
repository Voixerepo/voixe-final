"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { ShoppingCart } from "lucide-react";

export default function TopBar() {
  const { setOpened, count } = useCart();

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="text-xl font-bold tracking-tight">VOIXE</Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/shop">Shop</Link>
          <Link href="/lookbook">Lookbook</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button onClick={() => setOpened(true)} className="btn-outline" aria-label="Open cart">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <ShoppingCart size={15} />
            Cart{count ? ` (${count})` : ""}
          </span>
        </button>
      </div>
    </header>
  );
}
