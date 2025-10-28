import { useCart } from "./CartProvider"

export default function CartButton() {
  const { count, toggleCart } = useCart()
  return (
    <button onClick={toggleCart} className="relative" aria-label="Open cart">
      <span className="text-xs tracking-wide hover:text-neutral-900 transition">Cart</span>
      {count > 0 && (
        <span className="absolute -right-3 -top-2 min-w-[18px] h-[18px] px-1 rounded-full bg-neutral-900 text-white text-[10px] flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  )
}
