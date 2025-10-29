// components/CartDrawer.tsx
import React from 'react'
import { useCart } from '../context/CartContext'
import Link from 'next/link'

export default function CartDrawer() {
  const { items, subtotal, setQty, remove, isDrawerOpen, closeDrawer, clear } = useCart()

  return (
    <div
      aria-hidden={!isDrawerOpen}
      className={`fixed inset-0 z-50 ${isDrawerOpen ? '' : 'pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${isDrawerOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={closeDrawer}
      />
      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-[92vw] max-w-md bg-white text-black shadow-2xl transition-transform duration-300 ease-out
        ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg tracking-wider">YOUR CART ({items.length})</h2>
          <button onClick={closeDrawer} aria-label="Close cart">✕</button>
        </div>

        <div className="p-4 space-y-4 overflow-auto max-h-[calc(100%-140px)]">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-3xl">🛒</div>
              <p className="mt-3 tracking-wide">No items added</p>
              <Link className="underline mt-4 inline-block" href="/shop" onClick={closeDrawer}>
                Shop
              </Link>
            </div>
          ) : (
            items.map((i) => (
              <div key={`${i.id}-${i.size ?? ''}`} className="flex gap-3 border-b pb-3">
                <img
                  src={i.image ?? '/images/placeholder.png'}
                  alt={i.name}
                  className="h-16 w-16 object-cover bg-neutral-100"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="font-medium">{i.name}</div>
                    <div>${(i.price * i.qty).toFixed(2)}</div>
                  </div>
                  <div className="text-sm text-neutral-600">
                    {i.size ? <>Size: {i.size} • </> : null} ${i.price.toFixed(2)} ea
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="border px-2" onClick={() => setQty(i.id, i.size, Math.max(1, i.qty - 1))}>−</button>
                    <span className="w-6 text-center">{i.qty}</span>
                    <button className="border px-2" onClick={() => setQty(i.id, i.size, i.qty + 1)}>+</button>
                    <button className="ml-4 underline text-sm" onClick={() => remove(i.id, i.size)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between mb-3">
            <span className="tracking-wide">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex gap-3">
            <button className="w-1/2 border py-2" onClick={clear}>Clear</button>
            <Link href="/checkout" className="w-1/2 text-center bg-black text-white py-2">
              Checkout
            </Link>
          </div>
          <p className="text-xs text-neutral-500 mt-2">Taxes & shipping calculated at checkout.</p>
        </div>
      </aside>
    </div>
  )
}
