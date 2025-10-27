import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavMinimal from '../components/NavMinimal'

const images = [
  '/images/matte1.jpg',
  '/images/matte2.jpg',
  '/images/white1.jpg',
  '/images/white2.jpg',
  '/images/editorial1.jpg',
  '/images/editorial2.jpg',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center">
      <Head>
        <title>VOIXE — To express who you are without saying a word.</title>
      </Head>

      {/* Logo and tagline */}
      <div className="mt-12 mb-8">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-[0.3em] animate-fadeIn">
          VOIXE
        </h1>
        <p className="italic text-neutral-600 mt-3 text-lg animate-fadeInSlow">
          “To express who you are without saying a word.”
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-1 w-full max-w-6xl px-2">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden group">
            <Image
              src={src}
              alt={`VOIXE look ${index + 1}`}
              width={500}
              height={700}
              className="object-cover h-[60vh] w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
            />
          </div>
        ))}
      </div>

      {/* Bottom navigation */}
      <NavMinimal />
    </main>
  )
}
