import Head from 'next/head'
import Link from 'next/link'
import { products } from '../lib/products'
import { useCart } from '../components/CartProvider'

export default function Shop() {
  const { addItem } = useCart()

  return (
    <>
      <Head><title>Shop — VOIXE</title></Head>

      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-wide">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map(p => (
            <div key={p.id} className="group">
              <Link href={`/product/${p.slug}`}>
                <img src={p.image} alt={p.name} className="w-full aspect-square object-cover bg-neutral-100"/>
                <div className="mt-3 flex justify-between">
                  <div className="font-medium">{p.name}</div>
                  <div>${p.price.toFixed(2)}</div>
                </div>
              </Link>
              <div className="mt-3 flex gap-2">
                {(p.sizes ?? ['S','M','L','XL']).map(sz => (
                  <button
                    key={sz}
                    className="border px-3 py-1 text-sm"
                    onClick={() => addItem({
                      slug: p.slug, name: `${p.name} — ${sz}`, price: p.price, size: sz, qty: 1, image: p.image
                    })}
                  >
                    Add {sz}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
