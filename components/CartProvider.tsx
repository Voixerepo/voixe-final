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
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // load / persist
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

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, setQty, clear, count, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>")
  return ctx
}

