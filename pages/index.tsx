import Head from 'next/head'
import Link from 'next/link'

export default function Home(){
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <Head><title>VOIXE — To express who you are without saying a word.</title></Head>
      <h1 style={{fontWeight:700, fontSize:'3rem', letterSpacing:'0.02em'}}>VOIXE</h1>
      <p style={{marginTop:8, fontStyle:'italic', color:'#555'}}>To express who you are without saying a word.</p>
      <div style={{marginTop:20, display:'flex', gap:12}}>
        <Link href="/verify" className="rounded-2xl" style={{padding:'10px 18px', background:'#111', color:'#fff'}}>Verify</Link>
        <Link href="/returns" className="rounded-2xl" style={{padding:'10px 18px', border:'1px solid #111'}}>Shipping & Returns</Link>
      </div>
      <footer style={{marginTop:40, color:'#666'}}>
        © {new Date().getFullYear()} VOIXE — To express who you are without saying a word. ·
        <a href="/privacy" style={{marginLeft:8}}>Privacy</a> ·
        <a href="/terms" style={{marginLeft:8}}>Terms</a> ·
        <a href="/verify" style={{marginLeft:8}}>Verify</a>
      </footer>
    </div>
  )
}
