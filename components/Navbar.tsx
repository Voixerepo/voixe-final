import Link from "next/link"

export default function Navbar(){
  return (
    <header className="w-full border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">VOIXE</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/shop">Shop</Link>
          <Link href="/lookbook">Lookbook</Link>
          <Link href="/verify">Verify</Link>
        </nav>
      </div>
    </header>
  )
}
