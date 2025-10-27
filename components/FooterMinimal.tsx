import Link from "next/link"

export default function FooterMinimal() {
  return (
    <footer className="w-full mt-20 mb-10 border-t border-neutral-200 pt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] md:text-xs text-neutral-500">
        {/* Left section — brand line */}
        <p className="tracking-wide text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-neutral-800 font-medium">VOIXE Studio</span> — To express who you are without saying a word.
        </p>

        {/* Right section — footer links */}
        <nav className="flex flex-wrap items-center justify-center gap-5">
          <Link href="/shop" className="hover:text-neutral-900 transition">Shop</Link>
          <Link href="/lookbook" className="hover:text-neutral-900 transition">Lookbook</Link>
          <Link href="/about" className="hover:text-neutral-900 transition">About</Link>
          <Link href="/privacy" className="hover:text-neutral-900 transition">Privacy</Link>
          <Link href="/terms" className="hover:text-neutral-900 transition">Terms</Link>
          <Link href="/returns" className="hover:text-neutral-900 transition">Returns</Link>
          <Link href="/contact" className="hover:text-neutral-900 transition">Contact</Link>
          <Link href="/verify" className="text-neutral-900 font-medium transition">Verify</Link>
        </nav>
      </div>

      {/* Authenticity note */}
      <div className="max-w-6xl mx-auto px-4 mt-6 text-center md:text-left text-[11px] text-neutral-400 leading-relaxed">
        <p>
          Each VOIXE piece includes a serialized tag and QR code.{" "}
          <Link href="/verify" className="underline hover:text-neutral-700 transition">
            Verify authenticity
          </Link>{" "}
          to ensure your item is genuine.
        </p>
      </div>
    </footer>
  )
}
