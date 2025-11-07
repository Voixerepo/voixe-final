import type { AppProps } from "next/app";
import "../styles/globals.css";
import { CartProvider } from "../components/CartProvider";
import TopBar from "../components/TopBar";
import CartDrawer from "../components/CartDrawer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <TopBar />
      <CartDrawer />
      <Component {...pageProps} />
    </CartProvider>
  );
}
