"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  PanelRight,
  ShoppingCart,
  User2,
} from "lucide-react";
import ViewPanelPage from "@/content/ViewPanelPage/page";
import Profile from "@/content/Profile/page";
import Chat from "@/content/Chat/page";
import Cart from "@/content/Cart/page";

const icons = {
  viewpanel: <PanelRight />,
  message: <MessageCircle />,
  cart: <ShoppingCart />,
  user: <User2 />,
};

const views = {
  viewpanel: <ViewPanelPage />,
  message: <Chat />,
  cart: <Cart />,
  user: <Profile />,
};

const MenuBar = () => {
  const [activeIcon, setActiveIcon] = useState("viewpanel");

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <aside className="hidden lg:block bg-secondary rounded-l-3xl text-white h-screen w-1/7 fixed top-0 right-0">
      <div className="p-4 space-y-12 ">
        <div className="flex flex-row space-x-3">
          {Object.keys(icons).map((icon) => (
            <div
              key={icon}
              className={`flex items-center justify-${
                icon === "viewpanel" ? "start" : "center"
              } bg-object rounded-full w-10 h-10 cursor-pointer ${
                activeIcon === icon ? "active" : ""
              }`}
              onClick={() => handleIconClick(icon)}
            >
              <span className="flex items-center justify-center rounded-full m-1 w-8 h-8 bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800">
                {icons[icon]}
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-12" id="viewpanel">
          {views[activeIcon]}
        </div>
      </div>
    </aside>
  );
};

export default MenuBar;
