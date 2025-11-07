"use client";
import { useCart } from "../components/CartProvider";

export default function CartPage() {
  const { items, setQty, removeItem, subtotal } = useCart();

  return (
    <main className="page-wrap">
      <h1 className="fade-up" style={{textTransform:"lowercase", fontFamily:"ui-monospace, Menlo, Consolas, monospace"}}>cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="soft-in" style={{border:"1px dotted #bbb"}}>
          {items.map((it, i) => (
            <div key={`${it.slug}-${i}`} style={{display:"grid", gridTemplateColumns:"120px 1fr auto", gap:"1rem", padding:"1rem", borderBottom:"1px dotted #ddd"}}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.image || "/placeholder.png"} alt={it.name} style={{width:120, height:120, objectFit:"cover"}} />
              <div>
                <div style={{fontWeight:600}}>{it.name}</div>
                <div style={{fontSize:12, color:"#666"}}>{it.size ? `Size: ${it.size}` : null}</div>
                <div style={{display:"flex", gap:8, marginTop:8}}>
                  <button className="btn-outline" onClick={()=>setQty(i, Math.max(1, it.qty-1))}>-</button>
                  <span style={{minWidth:36, textAlign:"center", border:"1px solid #eee", borderRadius:8, padding:".25rem .5rem"}}>{it.qty}</span>
                  <button className="btn-outline" onClick={()=>setQty(i, it.qty+1)}>+</button>
                  <button className="btn-supreme-black" onClick={()=>removeItem(i)} style={{marginLeft:8}}>remove</button>
                </div>
              </div>
              <div style={{textAlign:"right"}}>${(it.price * it.qty).toFixed(2)}</div>
            </div>
          ))}

          <div style={{display:"flex", justifyContent:"flex-end", gap:12, padding:"1rem"}}>
            <div style={{border:"1px dotted #bbb", padding:".6rem .9rem"}}>subtotal: <strong>${subtotal.toFixed(2)}</strong></div>
            <a className="btn-supreme-red" href="/checkout">checkout now</a>
          </div>
        </div>
      )}
    </main>
  );
}
