// components/TopBar.tsx
import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function TopBar() {
  const { openDrawer, items } = useCart()

  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-[0.5em] text-xl">VOIXE</Link>

        <nav className="hidden md:flex gap-6 tracking-wide">
          <Link href="/shop">Shop</Link>
          <Link href="/lookbook">Lookbook</Link>
          <Link href="/about">About</Link>
          <Link href="/verify">Verify</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="relative border px-3 py-2 tracking-wide"
            onClick={openDrawer}
            aria-label="Open cart"
          >
            Cart
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full h-5 w-5 grid place-items-center">
                {items.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
