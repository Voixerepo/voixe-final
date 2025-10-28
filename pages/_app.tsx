// pages/_app.tsx
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

import TopBar from '../components/TopBar'
import { CartProvider } from '../components/CartProvider'  // ← same file as your useCart

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* CartProvider MUST wrap TopBar and Component */}
      <CartProvider>
        <TopBar />
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}
