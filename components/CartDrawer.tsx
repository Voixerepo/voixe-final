"use client";
import { useCart } from "./CartProvider";
import Image from "next/image";

export default function CartDrawer() {
  const { opened, setOpened, items, setQty, removeItem, subtotal } = useCart();

  return (
    <>
      <div
        className="drawer-backdrop"
        data-open={opened}
        onClick={() => setOpened(false)}
      />
      <aside className="drawer" data-open={opened} aria-hidden={!opened}>
        <div className="cart-head">
          <strong>Your Cart {items.length ? `(${items.length})` : ""}</strong>
          <button onClick={() => setOpened(false)} aria-label="Close">✕</button>
        </div>

        <div className="cart-list">
          {items.length === 0 && <div style={{color:"#777"}}>Your cart is empty.</div>}
          {items.map((it, i) => (
            <div className="cart-item soft-in" key={`${it.slug}-${i}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.image || "/placeholder.png"} alt={it.name} />
              <div>
                <div style={{fontWeight:600}}>{it.name}</div>
                <div style={{fontSize:12, color:"#666"}}>
                  {it.size ? `Size: ${it.size}` : null}
                </div>
                <div style={{display:"flex", gap:6, marginTop:6}}>
                  <button className="btn-outline" onClick={() => setQty(i, Math.max(1, it.qty - 1))}>-</button>
                  <div style={{minWidth:36, textAlign:"center", border:"1px solid #eee", borderRadius:8, padding:".25rem .5rem"}}>{it.qty}</div>
                  <button className="btn-outline" onClick={() => setQty(i, it.qty + 1)}>+</button>
                </div>
              </div>
              <div style={{textAlign:"right"}}>
                <div>${(it.price * it.qty).toFixed(2)}</div>
                <button style={{fontSize:12, color:"#c00"}} onClick={() => removeItem(i)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-foot">
          <div style={{display:"flex", justifyContent:"space-between", marginBottom:10}}>
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
          <a className="checkout-btn" href="/cart">Checkout</a>
        </div>
      </aside>
    </>
  );
}
