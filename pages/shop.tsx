// pages/shop.tsx
import Head from 'next/head'
import TopBar from '../components/TopBar'
import CartDrawer from '../components/CartDrawer'
import { useCart } from '../context/CartContext'
import { products } from '../lib/products'

export default function Shop() {
  const { add } = useCart()

  return (
    <>
      <Head><title>Shop — VOIXE</title></Head>
      <TopBar />
      <CartDrawer />

      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-wide">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map(p => (
            <div key={p.id} className="group">
              <a href={`/product/${p.slug}`}>
                <img src={p.image} alt={p.name} className="w-full aspect-square object-cover bg-neutral-100"/>
                <div className="mt-3 flex justify-between">
                  <div className="font-medium">{p.name}</div>
                  <div>${p.price.toFixed(2)}</div>
                </div>
              </a>
              <div className="mt-3 flex gap-2">
                {p.sizes?.map(sz => (
                  <button
                    key={sz}
                    className="border px-3 py-1 text-sm"
                    onClick={() => add({ id: p.id + '-' + sz, slug: p.slug, name: `${p.name} — ${sz}`, price: p.price, size: sz, image: p.image })}
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
