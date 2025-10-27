import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-neutral-900">
      <Head>
        <title>VOIXE — To express who you are without saying a word.</title>
        <meta
          name="description"
          content="VOIXE — Minimal, expressive, and confident fashion. To express who you are without saying a word."
        />
      </Head>

      {/* Top section */}
      <section className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h1 className="text-6xl font-extrabold tracking-wider">VOIXE</h1>
        <p className="italic text-neutral-600 text-lg mt-3">
          “To express who you are without saying a word.”
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/shop"
            className="px-6 py-3 rounded-2xl bg-neutral-900 text-white text-sm tracking-wide hover:bg-neutral-800 transition"
          >
            Shop Now
          </Link>
          <Link
            href="/lookbook"
            className="px-6 py-3 rounded-2xl border border-neutral-900 text-sm hover:bg-neutral-100 transition"
          >
            Lookbook
          </Link>
        </div>
      </section>

      {/* Background accent */}
      <div className="absolute inset-0 -z-10 opacity-5 bg-[radial-gradient(circle_at_center,_black,_transparent_70%)]" />
    </main>
  )
}
