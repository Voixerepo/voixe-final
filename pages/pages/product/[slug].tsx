import { useRouter } from 'next/router'
import Head from 'next/head'
import { getProduct } from '@/lib/products'
import Link from 'next/link'
import { useState } from 'react'

export default function ProductPage(){
  const { query } = useRouter()
  const product = getProduct(String(query.slug||''))

  const [size, setSize] = useState('M')

  if(!product) return <main className="max-w-6xl mx-auto px-4 py-12"><p>Loading…</p></main>

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <Head><title>{product.name} — VOIXE</title></Head>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover"/>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((src, i) => (
              <div key={i} className="aspect-[4/5] rounded-xl overflow-hidden border">
                <img src={src} alt={`${product.name} ${i+2}`} className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-neutral-600 mt-2">{product.edition}</p>
          <p className="text-2xl mt-4">${product.price}</p>

          {product.tagline && <p className="italic mt-3 text-neutral-700">“{product.tagline}”</p>}

          <p className="mt-6 text-neutral-700">{product.description}</p>

          <div className="mt-6">
            <p className="text-sm font-medium">Size</p>
            <div className="mt-2 flex gap-2">
              {product.variants.map(v => (
                <button
                  key={v.label}
                  onClick={()=>setSize(v.label)}
                  className={`h-10 px-4 rounded-xl border ${size===v.label ? 'bg-neutral-900 text-white' : 'bg-white'}`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="h-11 px-6 rounded-2xl bg-neutral-900 text-white">Add to Bag</button>
            <Link href="/verify" className="h-11 px-6 rounded-2xl border flex items-center">Verify</Link>
          </div>

          <p className="text-xs text-neutral-500 mt-6">SKU: {product.sku}</p>
        </div>
      </div>
    </main>
  )
}
