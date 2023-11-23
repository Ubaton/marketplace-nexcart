import Search from "@/components/Search/page";
import Marketplace from "@/pages/Marketplace/page";

export default function Home() {
  return (
    <main className="flex bg-primary min-h-screen flex-col items-center justify-between ">
      <Search />
      <div className="flex w-full items-center justify-center lg:flex">
        <Marketplace />
      </div>
    </main>
  );
}
