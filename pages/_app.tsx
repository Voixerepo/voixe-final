// pages/_app.tsx
import type { AppProps } from 'next/app'
import '../styles/globals.css'           // <-- keep this relative path working
import { CartProvider } from '../context/CartContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
