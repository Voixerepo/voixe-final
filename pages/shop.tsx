import ProductCard from "../components/ProductCard";

const demo = [
  {
    slug: "tee-classic-white",
    name: "VOIXE Tee — Classic White",
    price: 45,
    image: "/images/tee-white.jpg"
  },
  {
    slug: "tee-matte-black",
    name: "VOIXE Tee — Matte Black",
    price: 55,
    image: "/images/tee-black.jpg"
  },
  {
    slug: "hoodie-studio",
    name: "VOIXE Studio Hoodie",
    price: 120,
    image: "/images/hoodie.jpg"
  }
];

export default function Shop() {
  return (
    <main className="page-wrap">
      <h1 className="fade-up" style={{marginBottom:"1rem"}}>Shop</h1>
      <div className="grid">
        {demo.map((p) => (
          <ProductCard key={p.slug} {...p} />
        ))}
      </div>
    </main>
  );
}
