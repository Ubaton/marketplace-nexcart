import Search from "@/components/Search/page";
import Marketplace from "@/pages/Store/Marketplace/page";

export default function Home({ products }) {
  return (
    <main className="bg-primary min-h-screen">
      <Search />
      <div className="flex w-full items-center justify-center">
        <Marketplace />
      </div>
    </main>
  );
}
