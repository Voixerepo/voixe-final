import type { AppProps } from 'next/app'
import Head from 'next/head'

// Global CSS (relative path, no alias)
import '../styles/globals.css'

// Shared layout components (relative paths)
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="VOIXE — To express who you are without saying a word." />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
