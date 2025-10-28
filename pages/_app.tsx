import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import TopBar from '../components/TopBar'
import { CartProvider } from '../components/CartProvider'
import CartDrawer from '../components/CartDrawer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <CartProvider>
        <TopBar />
        {/* Drawer lives at root so it works from any page */}
        <CartDrawer />
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}
