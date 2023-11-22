import Sidebar from "@/components/SideBar/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-primary min-h-screen flex-col items-center justify-between ">
      <div className="w-full items-center justify-between font-mono text-sm lg:flex">
        <Sidebar />
      </div>
    </main>
  );
}
