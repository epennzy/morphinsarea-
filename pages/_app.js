import { CartProvider } from "@/context/CartContext";
import { SavedProvider } from "@/context/SavedContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <SavedProvider>
        <Component {...pageProps} />
      </SavedProvider>
    </CartProvider>
  );
}