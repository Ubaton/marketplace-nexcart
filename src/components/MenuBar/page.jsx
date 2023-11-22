import { ChevronDown, MessageCircle, ShoppingCart, User2 } from "lucide-react";
import React from "react";

const MenuBar = () => {
  return (
    <div>
      <aside className="hidden lg:block bg-secondary rounded-l-3xl text-white h-screen w-1/7 fixed top-0 right-0 overflow-y-auto">
        <div className="p-4 space-y-12">
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
          <div className="bg-object rounded-3xl w-48 h-56"></div>
          <div className="bg-object rounded-3xl w-48 h-56"></div>
        </div>
      </aside>
    </div>
  );
};

export default MenuBar;
