import Link from "next/link"

export default function FooterMinimal() {
  return (
    <footer className="w-full mt-10 mb-8">
      <div className="max-w-6xl mx-auto px-4 text-[11px] md:text-xs text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="tracking-wide">
          © {new Date().getFullYear()} <span className="text-neutral-800">VOIXE Studio</span> — To express who you are without saying a word.
        </p>

        <nav className="flex items-center gap-5">
          <Link href="/privacy" className="hover:text-neutral-900 transition">Privacy</Link>
          <Link href="/terms" className="hover:text-neutral-900 transition">Terms</Link>
          <Link href="/returns" className="hover:text-neutral-900 transition">Shipping & Returns</Link>
          <Link href="/verify" className="text-neutral-900 font-medium">Verify</Link>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-3 text-[11px] text-neutral-400">
        <p>
          Scan the QR on your tag or enter the code on the <Link href="/verify" className="underline hover:text-neutral-700">Verify</Link> page to confirm authenticity.
        </p>
      </div>
    </footer>
  )
}
