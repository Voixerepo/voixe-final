import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-neutral-900 flex flex-col items-center justify-center overflow-hidden">
      <Head>
        <title>VOIXE — To express who you are without saying a word.</title>
        <meta name="description" content="VOIXE — Luxury streetwear. To express who you are without saying a word." />
      </Head>

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 bg-gradient-to-b from-white via-white to-neutral-100" />

      {/* Hero: brand + tagline */}
      <section className="text-center px-6">
        <h1
          className="animate-fadeUp delay-100 font-extrabold tracking-[0.28em] text-6xl md:text-8xl"
          style={{ letterSpacing: '0.28em' }}
        >
          VOIXE
        </h1>

        <p className="animate-fadeUp delay-250 italic text-neutral-600 text-lg md:text-xl mt-3">
          “To express who you are without saying a word.”
        </p>

        <div className="animate-fadeUp delay-500 mt-10 flex gap-4 justify-center">
          <Link
            href="/shop"
            className="px-7 py-3 rounded-full bg-neutral-900 text-white text-sm tracking-wide hover:bg-neutral-800 transition"
          >
            Shop Now
          </Link>
          <Link
            href="/lookbook"
            className="px-7 py-3 rounded-full border border-neutral-900 text-sm tracking-wide hover:bg-neutral-900 hover:text-white transition"
          >
            Lookbook
          </Link>
        </div>
      </section>

      {/* Tiny footer accent */}
      <div className="animate-fadeUp delay-500 absolute bottom-8 text-[11px] md:text-xs text-neutral-400 tracking-widest">
        © {new Date().getFullYear()} VOIXE Studio
      </div>
    </main>
  )
}
