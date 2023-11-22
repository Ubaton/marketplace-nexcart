import Search from "@/components/Search/page";
import Index from "@/pages/Index/page";

export default function Home() {
  return (
    <main className="flex bg-primary min-h-screen flex-col items-center justify-between ">
      <Search />
      <div className="w-full items-center justify-between font-mono text-sm lg:flex">
        <Index />
      </div>
    </main>
  );
}
