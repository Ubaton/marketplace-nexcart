"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  History,
  LayoutDashboard,
  PackageSearch,
  Store,
  Wallet,
  FileCog,
  ShieldQuestion,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const login = () => {
    router.push("/login");
  };

  return (
    <aside className="bg-secondary rounded-r-3xl text-white h-screen w-1/7 fixed top-0 left-0">
      <nav className="p-2">
        <ul className="divide-y divide-blue-500">
          <h1 className="text-4xl text-center font-extrabold pb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800">
              NexCart
            </span>
          </h1>
          <div className="p-2">
            <h1 className="text-xl font-extrabold">
              <span>Store</span>
            </h1>
            <span className="px-4">
              <li className="mb-2">
                <Link href="/dashboard">
                  <div className="flex flex-row items-center gap-2 cursor-pointer text-xl font-bold hover:text-blue-500">
                    <LayoutDashboard />
                    Dashboard
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/">
                  <div className="flex flex-row items-center gap-2 cursor-pointer text-xl font-bold hover:text-blue-500">
                    <Store />
                    Marketplace
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/favorites">
                  <div className="flex flex-row items-center gap-2 cursor-pointer text-xl font-bold hover:text-blue-500">
                    <Heart /> Favorites
                  </div>
                </Link>
              </li>
            </span>
          </div>

          <div className="p-2">
            <h1 className="text-xl font-bold">
              <span>Management</span>
            </h1>
            <span className="px-4">
              <li className="mb-2">
                <Link href="/order-history">
                  <div className="flex flex-row items-center gap-2 cursor-pointer text-xl font-bold hover:text-blue-500">
                    <History />
                    History
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/wallet">
                  <div className="flex flex-row items-center gap-2 cursor-pointer text-xl font-bold hover:text-blue-500">
                    <Wallet /> Wallet
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/products">
                  <div className="flex flex-row items-center gap-2 cursor-pointer text-xl font-bold hover:text-blue-500">
                    <PackageSearch />
                    Products
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/settings">
                  <div className="flex flex-row items-center gap-2 cursor-pointer text-xl font-bold hover:text-blue-500">
                    <FileCog /> Settings
                  </div>
                </Link>
              </li>
            </span>
          </div>
          <div className="p-2">
            <span className="px-4">
              <li className="mb-2">
                <Link href="/about">
                  <div className="flex flex-row items-center gap-2 cursor-pointer text-xl font-bold hover:text-blue-500">
                    <ShieldQuestion />
                    About
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <button onClick={login}>
                  <div className="flex flex-row items-center gap-2 cursor-pointer text-xl font-bold">
                    <LogOut />
                    Logout
                  </div>
                </button>
              </li>
            </span>
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
