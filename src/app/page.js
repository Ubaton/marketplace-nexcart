"use client";

import { useRouter } from "next/navigation";
import Search from "@/components/Search/page";
import Marketplace from "@/pages/Store/Marketplace/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home({ products }) {
  const router = useRouter();

  const isAuthenticated = true;

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return (
    <main className="flex justify-center bg-primary mr-10">
      <h1 className="fixed bg-primary/30 backdrop-blur-md shadow-xl w-full text-4xl text-gray-50 text-center p-4 font-bold">
        Marketplace
      </h1>
      <div className="container">
        <Search products={products} />
        <Marketplace />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}
