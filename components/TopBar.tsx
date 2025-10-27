import Link from "next/link"
import { useRouter } from "next/router"

export default function TopBar() {
  const { pathname } = useRouter()

  // Hide on the homepage hero
  if (pathname === "/") return null

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      role="navigation"
      aria-label="Primary"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Left links */}
        <nav className="hidden md:flex items-center gap-6 text-xs tracking-wide text-neutral-600">
          <Link href="/shop" className="hover:text-neutral-900">Shop</Link>
          <Link href="/lookbook" className="hover:text-neutral-900">Lookbook</Link>
        </nav>

        {/* Center brand */}
        <Link
          href="/"
          className="font-semibold tracking-[0.25em] text-sm text-neutral-900"
          style={{ letterSpacing: "0.25em" }}
          aria-label="VOIXE — Home"
        >
          VOIXE
        </Link>

        {/* Right links */}
        <nav className="flex items-center gap-6 text-xs tracking-wide text-neutral-600">
          <Link href="/verify" className="hover:text-neutral-900">Verify</Link>
          <Link href="/returns" className="hover:text-neutral-900 hidden md:inline">Support</Link>
        </nav>
      </div>
    </header>
  )
}
