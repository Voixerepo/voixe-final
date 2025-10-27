import Head from 'next/head'

const IMGS = [
  // Matte Black: studio + street (placeholders)
  'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=1600&auto=format&fit=crop',
  // Classic White
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
  // Details / back print vibes
  'https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922284-9d6b9b5e2fba?q=80&w=1600&auto=format&fit=crop',
]

export default function Lookbook(){
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <Head><title>Lookbook — VOIXE</title></Head>
      <h1 className="text-3xl font-semibold">Lookbook</h1>
      <p className="text-neutral-600 mt-2">Matte Black & Classic White on-body shots.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {IMGS.map((src, i)=>(
          <div key={i} className="rounded-2xl overflow-hidden aspect-[4/5] border">
            <img src={src} alt={`Look ${i+1}`} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </main>
  )
}
