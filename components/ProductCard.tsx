import Link from "next/link"
import Image from "next/image"
import { products as catalog } from "../lib/products"
import { useCart } from "./CartProvider"

type Props = {
  id: string
}

export default function ProductCard({ id }: Props) {
  const { addItem } = useCart()
  const p = catalog.find(x => x.id === id)
  if (!p) return null

  const onQuickAdd = (size: string) => {
    addItem({
      slug: p.slug,
      name: `${p.name} — ${size}`,
      price: p.price,
      size,
      qty: 1,
      image: p.image
    })
  }

  return (
    <div className="group relative">
      <Link href={`/product/${p.slug}`} className="block overflow-hidden rounded-2xl bg-neutral-100">
        {/* Use Image if you prefer optimization (make sure domain is allowed) */}
        <Image
          src={p.image}
          alt={p.name}
          width={1200}
          height={1500}
          className="h-[420px] w-full object-cover transition-[transform,filter] duration-[900ms] ease-[cubic-bezier(.19,.74,.24,1)] group-hover:scale-[1.04] group-hover:grayscale-0 grayscale"
          priority={false}
        />
      </Link>

      {/* name + price */}
      <div className="mt-3 flex items-center justify-between">
        <Link href={`/product/${p.slug}`} className="text-sm font-medium hover:underline">
          {p.name}
        </Link>
        <div className="text-sm">${p.price.toFixed(2)}</div>
      </div>

      {/* desktop quick-add overlay */}
      <div
        className="
          pointer-events-none absolute inset-x-3 bottom-3 hidden 
          translate-y-3 opacity-0 transition-all duration-300
          group-hover:translate-y-0 group-hover:opacity-100
          md:block
        "
      >
        <div className="pointer-events-auto rounded-xl bg-white/90 backdrop-blur-md border shadow-sm p-2">
          <div className="flex flex-wrap gap-2">
            {(p.sizes ?? ["S","M","L","XL"]).map(sz => (
              <button
                key={sz}
                className="h-9 min-w-[44px] rounded-md border px-3 text-xs tracking-wide hover:bg-neutral-900 hover:text-white transition"
                onClick={() => onQuickAdd(sz)}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* mobile quick add (tap to reveal) */}
      <details className="mt-2 md:hidden">
        <summary className="list-none">
          <button className="w-full h-9 rounded-xl border text-xs tracking-wide">Quick Add</button>
        </summary>
        <div className="mt-2 flex flex-wrap gap-2">
          {(p.sizes ?? ["S","M","L","XL"]).map(sz => (
            <button
              key={sz}
              className="h-9 min-w-[44px] rounded-md border px-3 text-xs tracking-wide"
              onClick={() => onQuickAdd(sz)}
            >
              {sz}
            </button>
          ))}
        </div>
      </details>
    </div>
  )
}
