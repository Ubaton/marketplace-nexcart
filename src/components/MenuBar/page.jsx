"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  PanelTop,
  ShoppingCart,
  User2,
} from "lucide-react";
import Link from "next/link";
import Cart from "../../content/Cart/page";
import ViewPanelPage from "../../content/ViewPanelPage/page";
import Profile from "../../content/Profile/page";
import Chat from "@/content/Chat/page";

const Viewpanel = () => (
  <div>
    <ViewPanelPage />
  </div>
);

const ChatMessageView = () => (
  <div>
    <Chat />
  </div>
);

const ShoppingCartView = () => (
  <div>
    <Cart />
  </div>
);

const UserSettingsView = () => (
  <div>
    <Profile />
  </div>
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
        return <ChatMessageView />;
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
