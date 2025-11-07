"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { ShoppingCart, Search, User } from "lucide-react"; // optional icons from lucide-react

export default function TopBar() {
  const { setOpened, items } = useCart();
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-neutral-200 topbar-shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* LEFT — Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          VOIXE
        </Link>

        {/* CENTER — Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium tracking-tight">
          <Link href="/shop" className="hover:underline">
            Shop
          </Link>
          <Link href="/lookbook" className="hover:underline">
            Lookbook
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        {/* RIGHT — Icons + Cart */}
        <div className="flex items-center gap-5">
          <button
            className="hover:text-neutral-700"
            aria-label="Search"
            onClick={() => console.log("search clicked")}
          >
            <Search size={18} />
          </button>

          <button
            className="hover:text-neutral-700"
            aria-label="User account"
            onClick={() => console.log("user clicked")}
          >
            <User size={18} />
          </button>

          {/* CART BUTTON */}
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
      </div>
    </header>
  );
}
