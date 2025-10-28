import Head from "next/head"
import { useCart } from "../components/CartProvider"

export default function Checkout() {
  const { items, subtotal, clear } = useCart()

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <Head><title>Checkout — VOIXE</title></Head>

      <h1 className="text-2xl font-semibold tracking-tight">Checkout</h1>
      {items.length === 0 ? (
        <p className="mt-6 text-neutral-600">Your cart is empty.</p>
      ) : (
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 mt-8">
          {/* shipping/contact (mock) */}
          <section className="space-y-4">
            <h2 className="font-medium">Contact</h2>
            <input className="w-full border rounded-xl h-11 px-3" placeholder="Email" />
            <h2 className="font-medium mt-6">Shipping</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <input className="border rounded-xl h-11 px-3" placeholder="First name" />
              <input className="border rounded-xl h-11 px-3" placeholder="Last name" />
              <input className="sm:col-span-2 border rounded-xl h-11 px-3" placeholder="Address" />
              <input className="border rounded-xl h-11 px-3" placeholder="City" />
              <input className="border rounded-xl h-11 px-3" placeholder="ZIP" />
            </div>
            <h2 className="font-medium mt-6">Payment</h2>
            <p className="text-sm text-neutral-600">
              Payments will be enabled soon. For now this is a demo checkout.
            </p>
            <button
              onClick={() => { clear(); alert("Order placed — demo only!") }}
              className="mt-4 h-11 px-6 rounded-2xl bg-neutral-900 text-white"
            >
              Place Order (Demo)
            </button>
          </section>

          {/* order summary */}
          <aside className="border rounded-2xl p-5 h-fit">
            <h3 className="font-medium mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              {items.map(i => (
                <div key={`${i.slug}-${i.size}`} className="flex justify-between">
                  <span className="truncate">{i.name} × {i.qty} ({i.size})</span>
                  <span>${(i.qty * i.price).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm mt-4 pt-4 border-t">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-neutral-500 mt-2">
              Taxes & shipping calculated at fulfillment.
            </p>
          </aside>
        </div>
      )}
    </main>
  )
}
