import React, { useState, useEffect } from "react";
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
import "./index.css";

const Sidebar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  // Load active link from local storage on component mount
  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
  };

  const login = () => {
    router.push("/login");
  };

  const logout = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/login");
    }, 4000);
  };

  return (
    <aside className="bg-secondary rounded-r-3xl text-white h-screen w-1/7 fixed top-0 left-0">
      <nav className="p-2">
        <ul className="divide-y divide-blue-500">
          <h1 className="text-4xl text-center font-extrabold pb-8">
            <Link href="/">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800">
                NexCart
              </span>
            </Link>
          </h1>
          <div className="p-2">
            <h1 className="text-xl font-extrabold">
              <span>Store</span>
            </h1>
            <span className="px-4">
              <li className="mb-2">
                <Link href="/dashboard">
                  <div
                    className={`flex flex-row items-center gap-2 cursor-pointer text-xl font-bold ${
                      activeLink === "/dashboard" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleLinkClick("/dashboard")}
                  >
                    <LayoutDashboard />
                    Dashboard
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/marketplace">
                  <div
                    className={`flex flex-row items-center gap-2 cursor-pointer text-xl font-bold ${
                      activeLink === "/marketplace" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleLinkClick("/marketplace")}
                  >
                    <Store />
                    Marketplace
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/favorites">
                  <div
                    className={`flex flex-row items-center gap-2 cursor-pointer text-xl font-bold ${
                      activeLink === "/favorites" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleLinkClick("/favorites")}
                  >
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
                <Link href="/orderhistory">
                  <div
                    className={`flex flex-row items-center gap-2 cursor-pointer text-xl font-bold ${
                      activeLink === "/orderhistory" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleLinkClick("/orderhistory")}
                  >
                    <History />
                    History
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/wallet">
                  <div
                    className={`flex flex-row items-center gap-2 cursor-pointer text-xl font-bold ${
                      activeLink === "/wallet" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleLinkClick("/wallet")}
                  >
                    <Wallet /> Wallet
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/settings">
                  <div
                    className={`flex flex-row items-center gap-2 cursor-pointer text-xl font-bold ${
                      activeLink === "/settings" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleLinkClick("/settings")}
                  >
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
                  <div
                    className={`flex flex-row items-center gap-2 cursor-pointer text-xl font-bold ${
                      activeLink === "/about" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleLinkClick("/about")}
                  >
                    <ShieldQuestion />
                    About
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <button onClick={logout} disabled={loading}>
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
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col justify-center items-center">
            <span class="loader"></span>
            <span className="text-white font-medium text-2xl">
              Logging out...
            </span>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
