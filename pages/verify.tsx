import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type VerifyResult = { ok: boolean; message: string }

export default function VerifyPage(){
  const { query } = useRouter()
  const [checking, setChecking] = useState(false)
  const [result, setResult] = useState<VerifyResult | null>(null)

  useEffect(()=>{
    const code = (query.code as string) || ''
    if(!code) return
    setChecking(true)
    fetch(`/api/verify?code=${encodeURIComponent(code)}`)
      .then(r=>r.json())
      .then((res:VerifyResult)=> setResult(res))
      .catch(()=> setResult({ ok:false, message:'Network error. Try again.'}))
      .finally(()=> setChecking(false))
  }, [query.code])

  return (
    <div className="min-h-screen" style={{padding:'60px 20px'}}>
      <Head><title>Verify Authenticity — VOIXE</title><meta name="robots" content="noindex"/></Head>
      <h1 style={{fontSize:'2rem', fontWeight:600}}>Verify Authenticity</h1>
      <p style={{color:'#555', marginTop:6}}>Scan the QR or enter your code to confirm your product is authentic.</p>

      <form
        onSubmit={(e)=>{ e.preventDefault(); const code=(e.currentTarget.elements.namedItem('code') as HTMLInputElement).value.trim(); window.location.href = `/verify?code=${encodeURIComponent(code)}`; }}
        style={{marginTop:16, display:'flex', gap:8}}
      >
        <input name="code" placeholder="VOIXE-0001" defaultValue={(query.code as string)||''} style={{flex:1, height:44, border:'1px solid #ccc', borderRadius:12, padding:'0 12px'}}/>
        <button style={{height:44, padding:'0 14px', borderRadius:12, background:'#111', color:'#fff'}}>Check</button>
      </form>

      <div style={{marginTop:24}}>
        {checking && <p>Checking code…</p>}
        {!checking && result && (
          <div style={{padding:16, borderRadius:12, border:`2px solid ${result.ok ? '#16a34a' : '#dc2626'}`, background: result.ok ? '#f0fdf4' : '#fef2f2'}}>
            <p style={{fontWeight:600, fontSize:'1.1rem'}}>{result.ok ? '✅ Verified' : '❌ Not Verified'}</p>
            <p style={{marginTop:6}}>{result.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}
