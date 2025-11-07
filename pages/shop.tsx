import Head from "next/head"
import ProductCard from "../components/ProductCard"
import { products } from "../lib/products"

export default function Shop() {
  return (
    <>
      <Head><title>Shop — VOIXE</title></Head>

      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Shop</h1>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(p => (
            <ProductCard key={p.id} id={p.id} />
          ))}
        </div>
      </main>
    </>
  )
}
