// pages/_app.tsx
import type { AppProps } from 'next/app'
import '../styles/globals.css'                 // ← important
import { CartProvider } from '../components/CartProvider' // if you’re using the cart

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
