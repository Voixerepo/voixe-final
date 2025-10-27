import Head from 'next/head'
import Link from 'next/link'
import { products } from '@/lib/products'

export default function Shop(){
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <Head><title>Shop — VOIXE</title></Head>
      <h1 className="text-3xl font-semibold">Shop</h1>
      <p className="text-neutral-600 mt-2">Luxury streetwear by Voixe.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {products.map(p => (
          <Link key={p.slug} href={`/product/${p.slug}`} className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border">
              <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition"/>
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="font-medium">{p.name}</p>
              <p className="text-neutral-700">${p.price}</p>
            </div>
            <p className="text-xs text-neutral-500">{p.edition}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
