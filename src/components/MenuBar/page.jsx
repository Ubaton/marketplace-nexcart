"use client";

import React, { useState } from "react";
import {
  AreaChart,
  ChevronDown,
  MessageCircle,
  PackageOpen,
  PanelTop,
  ShoppingCart,
  User2,
} from "lucide-react";
import Link from "next/link";
import Cart from "../Cart/page";

const Viewpanel = () => (
  <div className="space-y-12">
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
    <div className="bg-object rounded-3xl w-48 h-56">
      <h1 className="flex flex-row items-center justify-center p-2 gap-2 text-lg font-bold hover:text-gray-300">
        Networth
        <AreaChart />
      </h1>
    </div>
  </div>
);

const ChartMessageView = () => (
  <div>
    <h1>Charting with</h1>
  </div>
);

const ShoppingCartView = () => (
  <div>
    <Cart />
  </div>
);

const UserSettingsView = () => (
  // Add your User Settings view here
  // Modify this component based on your requirements
  <div>User Settings View</div>
);

const MenuBar = () => {
  const [activeIcon, setActiveIcon] = useState("message");

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  const getViewComponent = () => {
    switch (activeIcon) {
      case "viewpanel":
        return <Viewpanel />;
      case "message":
        return <ChartMessageView />;
      case "cart":
        return <ShoppingCartView />;
      case "user":
        return <UserSettingsView />;
      default:
        return null;
    }
  };

  return (
    <aside className="hidden lg:block bg-secondary rounded-l-3xl text-white h-screen w-1/7 fixed top-0 right-0">
      <div className="p-4 space-y-12 ">
        <div className="flex flex-row space-x-3">
          <div
            id="viewpanel"
            className={`flex items-center justify-start bg-object rounded-full w-10 h-10 ${
              activeIcon === "viewpanel" ? "active" : ""
            }`}
            onClick={() => handleIconClick("viewpanel")}
          >
            <span className="flex items-center justify-center rounded-full m-1 w-8 h-8 bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800">
              <PanelTop />
            </span>
          </div>
          <div
            id="chart-message"
            className={`flex items-center justify-center bg-object rounded-full w-10 h-10 ${
              activeIcon === "message" ? "active" : ""
            }`}
            onClick={() => handleIconClick("message")}
          >
            <span className="flex items-center justify-center rounded-full m-1 w-8 h-8 bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800">
              <MessageCircle />
            </span>
          </div>
          <div
            id="shopping-cart"
            className={`flex items-center justify-center bg-object rounded-full w-10 h-10 ${
              activeIcon === "cart" ? "active" : ""
            }`}
            onClick={() => handleIconClick("cart")}
          >
            <span className="flex items-center justify-center rounded-full m-1 w-8 h-8 bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800">
              <ShoppingCart />
            </span>
          </div>
          <div
            id="user-settings"
            className={`flex items-center justify-start bg-object rounded-full w-10 h-10 ${
              activeIcon === "user" ? "active" : ""
            }`}
            onClick={() => handleIconClick("user")}
          >
            <span className="flex items-center justify-center rounded-full m-1 w-8 h-8 bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800">
              <User2 />
            </span>
          </div>
        </div>
        <div className="space-y-12" id="viewpanel">
          {getViewComponent()}
        </div>
      </div>
    </aside>
  );
};

export default MenuBar;
