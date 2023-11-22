import {
  AreaChart,
  ChevronDown,
  MessageCircle,
  PackageOpen,
  ShoppingCart,
  User2,
} from "lucide-react";
import React from "react";

const MenuBar = () => {
  return (
    <div>
      <aside className="hidden lg:block bg-secondary rounded-l-3xl text-white h-screen w-1/7 fixed top-0 right-0">
        <div className="p-4 space-y-12 ">
          <div className="flex flex-row space-x-3">
            <div className="flex items-center justify-center bg-object rounded-full w-10 h-10 ">
              <MessageCircle />
            </div>
            <div className="flex items-center justify-center bg-object rounded-full w-10 h-10 ">
              <ShoppingCart />
            </div>
            <div className="flex items-center justify-start bg-object rounded-full w-20 h-10 ">
              <span className="flex items-center justify-center rounded-full m-1 w-8 h-8 bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800">
                <User2 />
              </span>
              <span className="flex items-center justify-end ml-2">
                <ChevronDown />
              </span>
            </div>
          </div>
          <div className="bg-object rounded-3xl w-48 h-56">
            <h1 className="flex flex-row items-center justify-center p-2 gap-2 text-lg font-bold hover:text-gray-300">
              Networth
              <AreaChart />
            </h1>
          </div>
          <div className="bg-object rounded-3xl w-48 h-60">
            <h1 className="flex flex-row items-center justify-center p-2 gap-2 text-lg font-bold hover:text-gray-300">
              Products
              <PackageOpen />
            </h1>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className=" bg-secondary rounded-3xl w-44 h-10"></div>
              <div className=" bg-secondary rounded-3xl w-44 h-10"></div>
              <div className=" bg-secondary rounded-3xl w-44 h-10"></div>
              <div className=" bg-secondary rounded-3xl w-44 h-10"></div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MenuBar;
