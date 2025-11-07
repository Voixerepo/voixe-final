import { useRouter } from 'next/router'
import Head from 'next/head'
import { getProduct } from '../../lib/products'
import { useState } from 'react'
import { useCart } from '../../components/CartProvider'

export default function ProductPage() {
  const { query } = useRouter()
  const slug = String(query.slug || '')
  const product = getProduct(slug)
  const { addItem } = useCart()

  const [size, setSize] = useState<string | undefined>(product?.sizes?.[0])
  const [color, setColor] = useState<'Black' | 'White'>('Black')
  const [qty, setQty] = useState<number>(1)

  if (!product) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-20 text-center text-neutral-600">
        Product not found.
      </main>
    )
  }

  const handleAddToCart = () => {
    addItem({
      slug: product.slug,
      name: `${product.name} (${color})`,
      price: product.price,
      size: size ?? 'M',
      qty,
      image: product.image,
    })
  }

  return (
    <>
      <Head>
        <title>{product.name} — VOIXE</title>
      </Head>

      <main className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-2 gap-12">
        <div className="w-full overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover bg-neutral-100"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-medium tracking-tight">{product.name}</h1>
          <p className="mt-2 text-lg text-neutral-700">${product.price.toFixed(2)}</p>

          {/* Size Selection */}
          <div className="mt-8">
            <div className="uppercase text-xs font-medium text-neutral-600 tracking-wide mb-2">Size</div>
            <div className="flex flex-wrap gap-2">
              {product.sizes?.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSize(sz)}
                  className={`border px-4 py-2 text-sm rounded-md min-w-[44px] ${
                    size === sz
                      ? 'bg-black text-white border-black'
                      : 'border-neutral-300 hover:border-neutral-800'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-6">
            <div className="uppercase text-xs font-medium text-neutral-600 tracking-wide mb-2">Color</div>
            <div className="flex gap-3">
              {['Black', 'White'].map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c as 'Black' | 'White')}
                  className={`px-5 py-2 border rounded-md text-sm uppercase ${
                    color === c
                      ? 'bg-black text-white border-black'
                      : 'border-neutral-300 hover:border-neutral-800'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <div className="uppercase text-xs font-medium text-neutral-600 tracking-wide mb-2">Quantity</div>
            <div className="flex items-center border rounded-md w-fit">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-2 text-lg leading-none"
              >
                −
              </button>
              <span className="px-4 py-2 text-sm">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-2 text-lg leading-none"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-8 border border-black w-full py-3 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-all"
          >
            Add to Cart
          </button>

          {product.description && (
            <p className="mt-8 text-sm text-neutral-600 leading-relaxed border-t pt-6">
              {product.description}
            </p>
          )}
        </div>
      </main>
    </>
  )
}
