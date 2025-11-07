import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartDrawer() {
  const { opened, setOpened, items, setQty, removeItem, subtotal } = useCart();

  return (
    <aside
      className="fixed inset-0 z-50"
      aria-hidden={!opened}
      style={{ pointerEvents: opened ? "auto" : "none" }}
    >
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          opened ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setOpened(false)}
      />

      {/* panel (kept right side for simplicity, Supreme vibe styling) */}
      <div
        data-open={opened}
        className={`voixe-drawer absolute right-0 top-0 h-full w-full max-w-[420px] bg-white 
                    overflow-hidden border-l border-neutral-200`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-dotted border-neutral-300 px-4 py-3">
          <div className="font-mono text-sm tracking-tight">cart</div>
          <button
            onClick={() => setOpened(false)}
            className="text-neutral-500 hover:text-black"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* items */}
        <div className="h-[calc(100%-170px)] overflow-auto px-4">
          {items.length === 0 ? (
            <div className="py-10 text-center font-mono text-sm text-neutral-500">
              0 items in cart
            </div>
          ) : (
            <ul className="divide-y divide-dotted divide-neutral-300">
              {items.map((it, i) => (
                <li key={`${it.slug}-${i}`} className="py-4">
                  <div className="grid grid-cols-[80px,1fr,auto] gap-3 items-start">
                    <div className="h-20 w-20 overflow-hidden border border-dotted border-neutral-300 rounded">
                      <Image
                        src={it.image}
                        alt={it.name}
                        width={160}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="font-mono text-[13px] leading-4">
                        {it.name}
                      </div>
                      {it.size && (
                        <div className="mt-1 font-mono text-[12px] text-neutral-500">
                          Size: {it.size}
                        </div>
                      )}

                      <div className="mt-2 inline-flex items-center gap-2">
                        <button
                          className="h-7 w-7 border border-dotted border-neutral-400 text-sm"
                          onClick={() => setQty(i, it.qty - 1)}
                          aria-label="Decrease"
                        >
                          −
                        </button>
                        <span className="h-7 min-w-[2rem] text-center font-mono text-sm leading-7">
                          {it.qty}
                        </span>
                        <button
                          className="h-7 w-7 border border-dotted border-neutral-400 text-sm"
                          onClick={() => setQty(i, it.qty + 1)}
                          aria-label="Increase"
                        >
                          +
                        </button>

                        <button
                          className="ml-3 font-mono text-[12px] underline decoration-1 underline-offset-2"
                          onClick={() => removeItem(i)}
                        >
                          remove
                        </button>
                      </div>
                    </div>

                    <div className="text-sm font-mono tabular-nums">
                      ${ (it.price * it.qty).toFixed(2) }
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* footer */}
        <div className="border-t border-dotted border-neutral-300 px-4 py-3">
          <div className="flex items-center justify-between font-mono text-sm">
            <span>subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <p className="mt-2 font-mono text-[12px] text-red-600">
            * free shipping on all orders over $250, some exceptions may apply
          </p>

          <div className="mt-3 flex gap-2">
            <Link
              href="/shop"
              onClick={() => setOpened(false)}
              className="btn-supreme-black flex-1"
            >
              keep shopping
            </Link>
            <Link
              href="/cart"
              onClick={() => setOpened(false)}
              className="btn-supreme-red flex-1"
            >
              checkout now
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
