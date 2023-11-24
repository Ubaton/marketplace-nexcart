import MenuBar from "@/components/MenuBar/page";
import Sidebar from "@/components/SideBar/page";
import CardContext from "@/contexts/CardContext/page";
import React from "react";

const Favorites = () => {
  return (
    <div className="bg-primary min-h-screen overflow-hidden">
      <div className="flex items-center justify-center ">
        <Sidebar />
        <div className="container">
          <h1 className="text-2xl text-gray-50 text-center p-4 font-bold">
            Your Favorites
          </h1>
          <div className="">
            <CardContext />
          </div>
        </div>
        <MenuBar />
      </div>
    </div>
  );
};

export default Favorites;
