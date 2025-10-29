// pages/product/[slug].tsx
import { useRouter } from 'next/router'
import Head from 'next/head'
import TopBar from '../../components/TopBar'
import CartDrawer from '../../components/CartDrawer'
import { getProduct } from '../../lib/products'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'

export default function ProductPage() {
  const { query } = useRouter()
  const slug = String(query.slug || '')
  const product = getProduct(slug)
  const [size, setSize] = useState<string | undefined>(product?.sizes?.[0])
  const { add } = useCart()

  if (!product) {
    return (
      <>
        <TopBar />
        <main className="mx-auto max-w-6xl px-4 py-20">Not found.</main>
      </>
    )
  }

  return (
    <>
      <Head><title>{product.name} — VOIXE</title></Head>
      <TopBar />
      <CartDrawer />

      <main className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-2 gap-12">
        <img src={product.image} alt={product.name} className="w-full bg-neutral-100 object-cover"/>
        <div>
          <h1 className="text-3xl font-medium">{product.name}</h1>
          <p className="mt-2 text-neutral-700">${product.price.toFixed(2)}</p>

          {product.sizes?.length ? (
            <div className="mt-6">
              <div className="mb-2 text-sm">Size</div>
              <div className="flex gap-2">
                {product.sizes.map(sz => (
                  <button
                    key={sz}
                    className={`border px-3 py-2 text-sm ${size === sz ? 'bg-black text-white' : ''}`}
                    onClick={() => setSize(sz)}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <button
            className="mt-8 bg-black text-white px-6 py-3"
            onClick={() => add({ id: product.id + '-' + (size ?? ''), slug: product.slug, name: product.name, price: product.price, size, image: product.image })}
          >
            Add to Bag
          </button>
        </div>
      </main>
    </>
  )
}
