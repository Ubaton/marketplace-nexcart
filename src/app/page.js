import Search from "@/components/Search/page";
import { CartProvider } from "@/contexts/CartContext/page";
import Marketplace from "@/pages/Store/Marketplace/page";

export default function Home({ products }) {
  return (
    <CartProvider>
      <main className="flex justify-center bg-primary mr-10">
        <div className="container">
          <Search />
          <Marketplace />
        </div>
      </main>
    </CartProvider>
  );
}
