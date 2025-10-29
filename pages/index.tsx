// pages/index.tsx
import Head from 'next/head'
import TopBar from '../components/TopBar'
import CartDrawer from '../components/CartDrawer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>VOIXE — To express who you are without saying a word.</title>
        <meta name="description" content="VOIXE Studio • Matte Black Edition & Classic White — minimal, expressive, confident."/>
      </Head>

      <TopBar />
      <CartDrawer />

      <main className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-5xl font-semibold tracking-[0.5em]">VOIXE</h1>
        <p className="mt-3 italic text-neutral-600">“To express who you are without saying a word.”</p>

        <div className="mt-8 flex gap-3">
          <Link href="/shop" className="bg-black text-white px-5 py-3">Shop Now</Link>
          <Link href="/lookbook" className="border px-5 py-3">Lookbook</Link>
        </div>
      </main>
    </>
  )
}
