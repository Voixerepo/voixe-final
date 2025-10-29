// context/CartContext.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

type CartItem = {
  id: string
  slug: string
  name: string
  price: number
  size?: string
  qty: number
  image?: string
}

type CartContextType = {
  items: CartItem[]
  add: (item: Omit<CartItem, 'qty'> & { qty?: number }) => void
  remove: (id: string, size?: string) => void
  clear: () => void
  setQty: (id: string, size: string | undefined, qty: number) => void
  subtotal: number
  isDrawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

const CartContext = createContext<CartContextType | null>(null)
const STORAGE_KEY = 'voixe_cart_v1'

function isBrowser() {
  return typeof window !== 'undefined'
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Load initial cart (SSR safe)
  useEffect(() => {
    if (!isBrowser()) return
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {}
  }, [])

  // Persist
  useEffect(() => {
    if (!isBrowser()) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {}
  }, [items])

  const add: CartContextType['add'] = (item) => {
    setItems((prev) => {
      const next = [...prev]
      const idx = next.findIndex(
        (i) => i.id === item.id && (i.size ?? '') === (item.size ?? '')
      )
      if (idx >= 0) {
        next[idx] = { ...next[idx], qty: next[idx].qty + (item.qty ?? 1) }
      } else {
        next.push({ ...item, qty: item.qty ?? 1 })
      }
      return next
    })
    setIsDrawerOpen(true) // open after add
  }

  const remove = (id: string, size?: string) =>
    setItems((prev) => prev.filter((i) => !(i.id === id && (i.size ?? '') === (size ?? ''))))

  const clear = () => setItems([])

  const setQty = (id: string, size: string | undefined, qty: number) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id && (i.size ?? '') === (size ?? '') ? { ...i, qty } : i))
    )

  const subtotal = useMemo(
    () => items.reduce((s, i) => s + i.price * i.qty, 0),
    [items]
  )

  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)

  const value: CartContextType = {
    items,
    add,
    remove,
    clear,
    setQty,
    subtotal,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}
