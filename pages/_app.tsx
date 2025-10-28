import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'              // ← this import is required

import TopBar from '../components/TopBar'   // ok if you have this

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TopBar />
      <Component {...pageProps} />
    </>
  )
}
