import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type CartItem = {
  slug: string
  name: string
  price: number
  image: string
  size: string
  qty: number
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (slug: string, size: string) => void
  setQty: (slug: string, size: string, qty: number) => void
  clear: () => void
  count: number
  subtotal: number
  // drawer UI
  opened: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

// safe default so SSR never crashes
const noop = () => {}
const defaultCtx: CartContextType = {
  items: [],
  addItem: noop,
  removeItem: noop,
  setQty: noop,
  clear: noop,
  count: 0,
  subtotal: 0,
  opened: false,
  openCart: noop,
  closeCart: noop,
  toggleCart: noop,
}

const CartContext = createContext<CartContextType>(defaultCtx)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem("voixe_cart")
      if (raw) setItems(JSON.parse(raw))
    } catch {}
  }, [])
  useEffect(() => {
    try {
      localStorage.setItem("voixe_cart", JSON.stringify(items))
    } catch {}
  }, [items])

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const i = prev.findIndex(p => p.slug === item.slug && p.size === item.size)
      if (i >= 0) {
        const copy = [...prev]
        copy[i] = { ...copy[i], qty: copy[i].qty + item.qty }
        return copy
      }
      return [...prev, item]
    })
  }

  const removeItem = (slug: string, size: string) =>
    setItems(prev => prev.filter(p => !(p.slug === slug && p.size === size)))

  const setQty = (slug: string, size: string, qty: number) =>
    setItems(prev =>
      prev.map(p =>
        p.slug === slug && p.size === size ? { ...p, qty: Math.max(1, qty) } : p
      )
    )

  const clear = () => setItems([])

  const { count, subtotal } = useMemo(() => {
    const count = items.reduce((n, i) => n + i.qty, 0)
    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
    return { count, subtotal }
  }, [items])

  const value: CartContextType = {
    items, addItem, removeItem, setQty, clear, count, subtotal,
    opened,
    openCart: () => setOpened(true),
    closeCart: () => setOpened(false),
    toggleCart: () => setOpened(o => !o),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
