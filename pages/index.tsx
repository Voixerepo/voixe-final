import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import AnnouncementBar from '../components/AnnouncementBar'
import FooterMinimal from '../components/FooterMinimal'

export default function Home() {
  const images = [
    '/images/matte1.jpg',
    '/images/white1.jpg',
    '/images/editorial1.jpg',
    '/images/editorial2.jpg',
    '/images/matte2.jpg',
    '/images/white2.jpg',
  ]

  return (
    <main className="relative min-h-screen bg-white text-neutral-900 overflow-hidden">
      <Head>
        <title>VOIXE — To express who you are without saying a word.</title>
        <meta name="description" content="VOIXE — Luxury streetwear. To express who you are without saying a word." />
      </Head>

      <AnnouncementBar />

      {/* Hero */}
      <section className="text-center px-6 mt-16 md:mt-24">
        <h1 className="animate-fadeUp-slow delay-100 font-extrabold tracking-[0.28em] text-6xl md:text-8xl"
            style={{ letterSpacing: '0.28em' }}>
          VOIXE
        </h1>
        <p className="animate-fadeUp delay-400 italic text-neutral-600 text-lg md:text-xl mt-3">
          “To express who you are without saying a word.”
        </p>
        <div className="animate-fadeUp delay-700 mt-10 flex gap-4 justify-center">
          <Link href="/shop" className="px-7 py-3 rounded-full bg-neutral-900 text-white text-sm tracking-wide hover:bg-neutral-800 transition hover-lift">Shop Now</Link>
          <Link href="/lookbook" className="px-7 py-3 rounded-full border border-neutral-900 text-sm tracking-wide hover:bg-neutral-900 hover:text-white transition hover-lift">Lookbook</Link>
        </div>
      </section>

      {/* Editorial grid (distinct from refs: staggered & grayscale hover) */}
      <section className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-1 w-full max-w-6xl mx-auto px-2">
        {images.map((src, i) => (
          <div key={i} className={`overflow-hidden group ${i % 3 === 0 ? 'md:col-span-2' : ''}`}>
            <Image
              src={src}
              alt={`VOIXE editorial ${i+1}`}
              width={900}
              height={1200}
              className="object-cover h-[55vh] w-full transition-all duration-[800ms] ease-[cubic-bezier(.19,.74,.24,1)] grayscale group-hover:grayscale-0 group-hover:scale-[1.045]"
            />
          </div>
        ))}
      </section>

      <FooterMinimal />
    </main>
  )
}
