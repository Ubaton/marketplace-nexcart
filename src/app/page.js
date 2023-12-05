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
