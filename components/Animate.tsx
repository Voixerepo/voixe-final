"use client";
import React, { useEffect, useRef } from "react";

type AnimateProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
  variant?: "fade-up" | "slide-up" | "scale-in";
  delay?: 0 | 1 | 2 | 3 | 4;
};

export default function Animate({
  as: Tag = "div",
  variant = "fade-up",
  delay = 0,
  className = "",
  children,
  ...rest
}: AnimateProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("inview");
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? `delay-${delay}` : "";
  const combined = `${variant} ${delayClass} ${className}`.trim();

  return (
    <Tag ref={ref as any} className={combined} {...rest}>
      {children}
    </Tag>
  );
}
