import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  // Optional: Sample images (replace with your actual images in /public/images/)
  const images = [
    '/images/matte1.jpg',
    '/images/matte2.jpg',
    '/images/white1.jpg',
    '/images/white2.jpg',
    '/images/editorial1.jpg',
    '/images/editorial2.jpg',
  ]

  return (
    <main className="relative min-h-screen bg-white text-neutral-900 flex flex-col items-center justify-center overflow-hidden">
      <Head>
        <title>VOIXE — To express who you are without saying a word.</title>
        <meta
          name="description"
          content="VOIXE — Luxury streetwear. To express who you are without saying a word."
        />
      </Head>

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 bg-gradient-to-b from-white via-white to-neutral-100" />

      {/* Hero: brand + tagline */}
      <section className="text-center px-6 mt-20 md:mt-28">
        <h1
          className="animate-fadeUp-slow delay-100 font-extrabold tracking-[0.28em] text-6xl md:text-8xl"
          style={{ letterSpacing: '0.28em' }}
        >
          VOIXE
        </h1>

        <p className="animate-fadeUp delay-400 italic text-neutral-600 text-lg md:text-xl mt-3">
          “To express who you are without saying a word.”
        </p>

        <div className="animate-fadeUp delay-700 mt-10 flex gap-4 justify-center">
          <Link
            href="/shop"
            className="px-7 py-3 rounded-full bg-neutral-900 text-white text-sm tracking-wide hover:bg-neutral-800 transition hover-lift"
          >
            Shop Now
          </Link>
          <Link
            href="/lookbook"
            className="px-7 py-3 rounded-full border border-neutral-900 text-sm tracking-wide hover:bg-neutral-900 hover:text-white transition hover-lift"
          >
            Lookbook
          </Link>
        </div>
      </section>

      {/* Optional Image Grid (Lookbook preview) */}
      <section className="mt-20 grid grid-cols-2 md:grid-cols-6 gap-1 w-full max-w-6xl px-2">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden group">
            <Image
              src={src}
              alt={`VOIXE look ${index + 1}`}
              width={500}
              height={700}
              className="object-cover h-[60vh] w-full transition-all duration-[750ms] ease-[cubic-bezier(.19,.74,.24,1)] grayscale group-hover:grayscale-0 group-hover:scale-[1.04]"
            />
          </div>
        ))}
      </section>

      {/* Tiny footer accent */}
      <div className="animate-fadeUp delay-900 absolute bottom-8 text-[11px] md:text-xs text-neutral-400 tracking-widest">
        © {new Date().getFullYear()} VOIXE Studio
      </div>
    </main>
  )
}
