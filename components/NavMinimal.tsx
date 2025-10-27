import Link from 'next/link'

export default function NavMinimal() {
  return (
    <nav className="flex gap-6 text-xs text-neutral-500 mt-10 mb-6 tracking-wide uppercase">
      <Link href="/shop" className="hover:text-black transition">Shop</Link>
      <Link href="/lookbook" className="hover:text-black transition">Lookbook</Link>
      <Link href="/verify" className="hover:text-black transition">Verify</Link>
      <Link href="/contact" className="hover:text-black transition">Contact</Link>
    </nav>
  )
}
