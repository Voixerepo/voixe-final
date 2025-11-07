import ProductCard from "../components/ProductCard";
import Animate from "../components/Animate";

const demo = [
  { slug: "tee-classic-white", name: "VOIXE Tee — Classic White", price: 45, image: "/images/tee-white.jpg" },
  { slug: "tee-matte-black",   name: "VOIXE Tee — Matte Black",   price: 55, image: "/images/tee-black.jpg" },
  { slug: "hoodie-studio",     name: "VOIXE Studio Hoodie",       price: 120, image: "/images/hoodie.jpg" }
];

export default function Shop() {
  return (
    <main className="page-wrap">
      <Animate as="h1" variant="fade-up">Shop</Animate>

      <div className="grid" style={{ marginTop: "1rem" }}>
        {demo.map((p, idx) => (
          <ProductCard key={p.slug} {...p} />
        ))}
      </div>
    </main>
  );
}
