import Link from "next/link"

export default function Footer(){
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} VOIXE — To express who you are without saying a word.</p>
        <div className="flex gap-6">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/returns">Shipping & Returns</Link>
          <Link href="/verify" className="font-medium text-neutral-900">Verify</Link>
        </div>
      </div>
    </footer>
  )
}
