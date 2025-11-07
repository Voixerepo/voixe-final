import { useRouter } from "next/router";
import Head from "next/head";
import ProductCard from "../../components/ProductCard";

const catalog: Record<string, {name:string; price:number; image:string}> = {
  "tee-classic-white": { name:"VOIXE Tee — Classic White", price:45, image:"/images/tee-white.jpg" },
  "tee-matte-black": { name:"VOIXE Tee — Matte Black", price:55, image:"/images/tee-black.jpg" },
  "hoodie-studio": { name:"VOIXE Studio Hoodie", price:120, image:"/images/hoodie.jpg" }
};

export default function ProductPage() {
  const { query } = useRouter();
  const slug = String(query.slug || "");
  const p = catalog[slug];

  if (!p) return <main className="page-wrap">Not found.</main>;

  return (
    <>
      <Head><title>{p.name} | VOIXE</title></Head>
      <main className="page-wrap">
        <div className="grid">
          <ProductCard slug={slug} name={p.name} price={p.price} image={p.image} />
        </div>
      </main>
    </>
  );
}
