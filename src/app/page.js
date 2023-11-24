import Search from "@/components/Search/page";
import Marketplace from "@/pages/Marketplace/page";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen">
      <Search />

      <div className="flex w-full items-center justify-center">
        <Marketplace />
      </div>
    </main>
  );
}
