import Link from "next/link"
import Image from "next/image"
import { useCart } from "./CartProvider"

export default function CartDrawer() {
  const { opened, closeCart, items, setQty, removeItem, subtotal } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity ${opened ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />
      <aside
        className="fixed right-0 top-0 z-[70] h-full w-[92vw] max-w-[420px] bg-white voixe-drawer"
        data-open={opened ? "true" : "false"}
        role="dialog"
        aria-modal="true"
        aria-label="Your Cart"
      >
        <div className="flex items-center justify-between h-14 px-5 border-b">
          <h2 className="text-sm font-medium tracking-wide">Your Cart {items.length ? `(${items.length})` : ''}</h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-xl leading-none">×</button>
        </div>

        <div className="h-[calc(100%-56px-156px)] overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center mt-16">
              <div className="text-5xl mb-3">🛍️</div>
              <p className="text-sm tracking-wide">No items added</p>
              <Link href="/shop" onClick={closeCart} className="mt-4 text-xs underline">
                Shop
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((i) => (
                <div key={`${i.slug}-${i.size}`} className="flex gap-3 border rounded-2xl p-3">
                  <div className="w-20 h-24 overflow-hidden rounded-xl">
                    <Image src={i.image} alt={i.name} width={260} height={320} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{i.name}</p>
                    <p className="text-xs text-neutral-500">Size: {i.size}</p>
                    <div className="mt-2 inline-flex items-center rounded-xl border">
                      <button className="w-8 h-8" onClick={() => setQty(i.slug, i.size, Math.max(1, i.qty - 1))}>−</button>
                      <span className="w-10 text-center">{i.qty}</span>
                      <button className="w-8 h-8" onClick={() => setQty(i.slug, i.size, i.qty + 1)}>+</button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">${(i.price * i.qty).toFixed(2)}</p>
                    <button onClick={() => removeItem(i.slug, i.size)} className="text-[11px] text-red-600 mt-2">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t p-5">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <p className="text-[11px] text-neutral-500 mt-2">Taxes & shipping calculated at checkout.</p>
          <Link
            href="/checkout"
            className={`mt-4 block w-full h-11 rounded-2xl text-center leading-[44px] ${items.length ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-500 pointer-events-none'}`}
            onClick={items.length ? undefined : (e)=>e.preventDefault()}
          >
            Checkout
          </Link>
        </div>
      </aside>
    </>
  )
}
