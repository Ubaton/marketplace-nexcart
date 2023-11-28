import Search from "@/components/Search/page";
import Marketplace from "@/pages/Store/Marketplace/page";

export default function Home({ products }) {
  return (
    <main className="flex justify-center bg-primary mr-10">
      <div className="container">
        <Search products={products} />
        <Marketplace />
      </div>
    </main>
  );
}
