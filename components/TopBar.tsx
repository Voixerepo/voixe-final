import Link from "next/link"
import { useRouter } from "next/router"
import CartButton from "./CartButton"

export default function TopBar() {
  const { pathname } = useRouter()
  if (pathname === "/") return null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm supports-[backdrop-filter]:bg-white/60 topbar-shadow">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <nav className="hidden md:flex items-center gap-6 text-xs tracking-wide text-neutral-600">
          <Link href="/shop" className="hover:text-neutral-900 transition">Shop</Link>
          <Link href="/lookbook" className="hover:text-neutral-900 transition">Lookbook</Link>
          <Link href="/about" className="hover:text-neutral-900 transition">About</Link>
        </nav>
        <Link href="/" className="font-semibold tracking-[0.25em] text-sm text-neutral-900" style={{ letterSpacing: "0.25em" }}>VOIXE</Link>
        <nav className="flex items-center gap-6 text-xs tracking-wide text-neutral-600">
          <Link href="/verify" className="hover:text-neutral-900 transition">Verify</Link>
          <CartButton />
        </nav>
      </div>
    </header>
  )
}
