import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { useCart } from "../../components/CartProvider"

type Product = {
  slug: string
  name: string
  price: number
  images: string[]
  sizes: string[]
  description?: string
}

export default function ProductPage({ product }: { product: Product }) {
  const { addItem, openCart } = useCart()
  const [size, setSize] = useState(product.sizes?.[0] ?? "M")
  const [qty, setQty] = useState(1)

  const onAddToBag = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      size,
      qty,
      image: product.images?.[0] ?? "/placeholder.jpg",
    })
    // ← Immediately open the slide-in cart drawer
    openCart()
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Head><title>{product.name} — VOIXE</title></Head>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Gallery */}
        <section className="space-y-4">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl card-shadow">
            <Image
              src={product.images?.[0] ?? "/placeholder.jpg"}
              alt={product.name}
              width={1200}
              height={1500}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Add more thumbnails if you like */}
        </section>

        {/* Info */}
        <section>
          <h1 className="text-2xl font-semibold tracking-tight">{product.name}</h1>
          <p className="mt-1 text-neutral-600">${product.price.toFixed(2)}</p>

          {/* Size picker */}
          <div className="mt-6">
            <label className="text-sm font-medium">Size</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {(product.sizes ?? ["S","M","L","XL"]).map(s => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-10 px-4 rounded-xl border text-sm ${
                    size === s ? "border-neutral-900" : "border-neutral-300 hover:border-neutral-500"
                  }`}
                  aria-pressed={size === s}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty */}
          <div className="mt-4">
            <label className="text-sm font-medium">Quantity</label>
            <div className="mt-2 inline-flex items-center rounded-xl border">
              <button
                className="w-10 h-10"
                onClick={() => setQty(q => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >−</button>
              <span className="w-12 text-center">{qty}</span>
              <button
                className="w-10 h-10"
                onClick={() => setQty(q => q + 1)}
                aria-label="Increase quantity"
              >+</button>
            </div>
          </div>

          {/* Add to bag */}
          <div className="mt-6 flex gap-3">
            <button className="btn btn-primary w-full" onClick={onAddToBag}>
              Add to Bag
            </button>
          </div>

          {/* Description */}
          {product.description && (
            <p className="mt-6 text-sm text-neutral-600 leading-relaxed">
              {product.description}
            </p>
          )}
        </section>
      </div>
    </main>
  )
}
