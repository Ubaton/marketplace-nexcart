import { useRouter } from "next/navigation";
import Search from "@/components/Search/page";
import Marketplace from "@/pages/Store/Marketplace/page";

export default function Home({ products }) {
  const router = useRouter();

  const isAuthenticated = true;

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return (
    <main className="flex justify-center bg-primary mr-10">
      <div className="container">
        <Search products={products} />
        <Marketplace />
      </div>
    </main>
  );
}
