import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "../components/CartProvider"

export default function CartPage() {
  const { items, removeItem, setQty, clear, subtotal } = useCart()

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <Head><title>Cart — VOIXE</title></Head>
      <h1 className="text-3xl font-semibold tracking-tight">Your Cart</h1>

      {items.length === 0 ? (
        <div className="mt-8 text-neutral-600">
          Your cart is empty. <Link className="underline" href="/shop">Shop products</Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 mt-8">
          <div className="space-y-6">
            {items.map((i) => (
              <div key={`${i.slug}-${i.size}`} className="flex gap-4 border rounded-2xl p-3">
                <div className="w-24 h-28 overflow-hidden rounded-xl">
                  <Image src={i.image} alt={i.name} width={300} height={380} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{i.name}</p>
                  <p className="text-xs text-neutral-500">Size: {i.size}</p>
                  <div className="mt-2 inline-flex items-center rounded-xl border">
                    <button onClick={()=>setQty(i.slug, i.size, i.qty-1)} className="w-8 h-8">−</button>
                    <span className="w-10 text-center">{i.qty}</span>
                    <button onClick={()=>setQty(i.slug, i.size, i.qty+1)} className="w-8 h-8">+</button>
                  </div>
                </div>
                <div className="text-right">
                  <p>${(i.price * i.qty).toFixed(2)}</p>
                  <button onClick={()=>removeItem(i.slug, i.size)} className="text-xs text-red-600 mt-2">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <aside className="border rounded-2xl p-5 h-fit">
            <h2 className="font-medium mb-3">Order Summary</h2>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-neutral-500 mt-2">Shipping & taxes calculated at checkout.</p>
            <button className="mt-4 w-full h-11 rounded-2xl bg-neutral-900 text-white">Checkout (coming soon)</button>
            <button onClick={clear} className="mt-3 w-full h-10 rounded-2xl border">Clear Cart</button>
            <Link href="/shop" className="block text-center mt-3 underline text-sm">Continue Shopping</Link>
          </aside>
        </div>
      )}
    </main>
  )
}

