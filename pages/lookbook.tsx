import Head from 'next/head'
import Image from 'next/image'

const IMGS = [
  '/images/matte1.jpg',
  '/images/editorial3.jpg',
  '/images/white1.jpg',
  '/images/editorial4.jpg',
  '/images/matte2.jpg',
  '/images/white2.jpg',
]

export default function Lookbook(){
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <Head><title>Lookbook — VOIXE</title></Head>
      <h1 className="text-3xl font-semibold">Lookbook</h1>
      <p className="text-neutral-600 mt-2">Matte Black & Classic White — selected on-body shots.</p>

      <div className="mt-8 columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {IMGS.map((src, i)=>(
          <div key={i} className="mb-4 break-inside-avoid rounded-2xl overflow-hidden border">
            <Image src={src} alt={`Look ${i+1}`} width={1200} height={1600} className="w-full h-auto object-cover"/>
          </div>
        ))}
      </div>
    </main>
  )
}
