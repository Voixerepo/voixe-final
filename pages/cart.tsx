import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../components/CartProvider";

export default function CartPage() {
  const { items, setQty, removeItem, subtotal } = useCart();

  return (
    <>
      <Head><title>Cart — VOIXE</title></Head>

      <main className="mx-auto max-w-4xl px-4 py-12">
        {/* logo row feel */}
        <div className="text-center mb-6">
          <div className="inline-block px-4 py-1 bg-red-600 text-white font-semibold tracking-wide">
            VOIXE
          </div>
          <div className="font-mono text-[12px] text-neutral-500 mt-2">
            {new Date().toLocaleString()}
          </div>
        </div>

        <section className="border border-dotted border-neutral-400">
          <header className="border-b border-dotted border-neutral-400 px-4 py-2 text-center font-mono text-sm">
            cart
          </header>

          {items.length === 0 ? (
            <div className="px-4 py-10 text-center font-mono text-sm text-neutral-500">
              0 items in your cart.
            </div>
          ) : (
            <ul>
              {items.map((it, i) => (
                <li
                  key={`${it.slug}-${i}`}
                  className="grid grid-cols-[120px,1fr,auto] gap-4 px-4 py-4 border-b border-dotted border-neutral-300 items-center"
                >
                  <div className="h-24 w-24 overflow-hidden border border-dotted border-neutral-300">
                    <Image
                      src={it.image}
                      alt={it.name}
                      width={240}
                      height={240}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="font-mono text-sm leading-5">
                      {it.name}
                    </div>
                    {it.size && (
                      <div className="font-mono text-[12px] text-neutral-500">
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
                        className="ml-3 btn-supreme-black px-3 py-1 text-[12px]"
                        onClick={() => removeItem(i)}
                      >
                        remove
                      </button>
                    </div>
                  </div>

                  <div className="text-right font-mono text-sm tabular-nums">
                    ${ (it.price * it.qty).toFixed(2) }
                  </div>
                </li>
              ))}
            </ul>
          )}

          <footer className="px-4 py-4">
            <div className="ml-auto w-full sm:w-80 border border-dotted border-neutral-400 p-3">
              <div className="flex items-center justify-between font-mono text-sm">
                <span>subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <p className="mt-3 font-mono text-[12px] text-red-600">
              * free shipping on all orders over $250, some exceptions may apply
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-end">
              <Link href="/shop" className="btn-supreme-black sm:w-auto text-center">
                keep shopping
              </Link>
              <button className="btn-supreme-red sm:w-auto">
                checkout now
              </button>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
