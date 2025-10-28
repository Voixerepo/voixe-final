import Link from "next/link"
import { useCart } from "./CartProvider"

export default function CartButton() {
  const { count } = useCart()
  return (
    <Link href="/cart" className="relative">
      <span className="text-xs tracking-wide hover:text-neutral-900 transition">Cart</span>
      {count > 0 && (
        <span className="absolute -right-3 -top-2 min-w-[18px] h-[18px] px-1 rounded-full bg-neutral-900 text-white text-[10px] flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  )
}
