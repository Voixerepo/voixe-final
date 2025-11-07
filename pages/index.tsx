export default function Home() {
  return (
    <main className="page-wrap">
      <h1 className="fade-up" style={{marginBottom:8}}>VOIXE</h1>
      <p className="fade-up" style={{fontStyle:"italic", color:"#444"}}>“To express who you are without saying a word.”</p>
      <div style={{marginTop:16, display:"flex", gap:10}}>
        <a className="btn-supreme-black" href="/shop">shop</a>
        <a className="btn-outline" href="/lookbook">lookbook</a>
      </div>
    </main>
  );
}
