import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

// ⬇️ Import the new top bar
import TopBar from '../components/TopBar'

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

      {/* --- Sticky navigation bar (hidden on '/') --- */}
      <TopBar />

      {/* --- Page content --- */}
      <Component {...pageProps} />
    </>
  )
}
