"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";
import Animate from "./Animate";

type Props = {
  slug: string;
  name: string;
  price: number;
  image: string;
  sizes?: string[];
};

export default function ProductCard({
  slug,
  name,
  price,
  image,
  sizes = ["S", "M", "L", "XL"],
}: Props) {
  const { addItem } = useCart();
  const [activeSize, setActiveSize] = useState<string>("");

  const add = (size: string) => {
    setActiveSize(size);
    addItem({
      slug: `${slug}-${size}`,
      name: `${name} — ${size}`,
      image,
      price,
      size,
      qty: 1,
    });
  };

  return (
    <Animate variant="slide-up" className="card card-lift">
      <Link href={`/product/${slug}`} className="card-media" aria-label={name}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} />
      </Link>

      {/* non-overlapping size strip */}
      <div className="size-overlay">
        {sizes.map((s) => (
          <button
            key={s}
            className="size-chip"
            aria-pressed={activeSize === s}
            onClick={() => add(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="card-body">
        <div style={{ fontWeight: 600 }}>{name}</div>
        <div>${price.toFixed(2)}</div>
      </div>
    </Animate>
  );
}
