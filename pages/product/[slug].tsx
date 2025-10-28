import { useRouter } from 'next/router'
import Head from 'next/head'
import { getProduct } from '../../lib/products'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { useCart } from '../../components/CartProvider'

export default function ProductPage(){
  const { query, push } = useRouter()
  const product = getProduct(String(query.slug||''))
  const { addItem } = useCart()

  const [size, setSize] = useState<string>('M')
  const [qty, setQty] = useState<number>(1)

  const priceFmt = useMemo(
    () => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
    []
  )

  if(!product) return <main className="max-w-6xl mx-auto px-4 py-12"><p>Loading…</p></main>

  const onAdd = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      size,
      qty,
      image: product.images[0],
    })
    // Go to cart after adding (feel free to change to a toast)
    push('/cart')
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <Head><title>{product.name} — VOIXE</title></Head>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border">
            <Image src={product.images[0]} alt={product.name} width={1000} height={1200} className="w-full h-full object-cover"/>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((src, i) => (
              <div key={i} className="aspect-[4/5] rounded-xl overflow-hidden border">
                <Image src={src} alt={`${product.name} ${i+2}`} width={600} height={700} className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-neutral-600 mt-2">{product.edition}{product.color ? ` · ${product.color}` : ''}</p>
          <p className="text-2xl mt-4">{priceFmt.format(product.price)}</p>
          {product.tagline && <p className="italic mt-3 text-neutral-700">“{product.tagline}”</p>}
          <p className="mt-6 text-neutral-700">{product.description}</p>

          {/* Size */}
          <div className="mt-6">
            <p className="text-sm font-medium">Size</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.variants.map(v => (
                <button
                  key={v.label}
                  onClick={()=>setSize(v.label)}
                  className={`h-10 px-4 rounded-xl border ${size===v.label ? 'bg-neutral-900 text-white' : 'bg-white'}`}>
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-4">
            <p className="text-sm font-medium">Quantity</p>
            <div className="mt-2 inline-flex items-center rounded-xl border">
              <button
                onClick={()=>setQty(q => Math.max(1, q-1))}
                className="w-10 h-10 hover:bg-neutral-50"
                aria-label="Decrease quantity"
              >−</button>
              <span className="w-12 text-center select-none">{qty}</span>
              <button
                onClick={()=>setQty(q => Math.min(10, q+1))}
                className="w-10 h-10 hover:bg-neutral-50"
                aria-label="Increase quantity"
              >+</button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <button onClick={onAdd} className="h-11 px-6 rounded-2xl bg-neutral-900 text-white">
              Add to Cart
            </button>
            <Link href="/verify" className="h-11 px-6 rounded-2xl border flex items-center">Verify</Link>
          </div>

          <p className="text-xs text-neutral-500 mt-6">SKU: {product.sku}</p>
        </div>
      </div>
    </main>
  )
}
