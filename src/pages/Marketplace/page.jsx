import MenuBar from "@/components/MenuBar/page";
import Sidebar from "@/components/SideBar/page";
import CardContext from "@/contexts/CardContext/page";
import React from "react";

const Marketplace = () => {
  return (
    <div>
      <Sidebar />
      <div className="mt-20">
        <CardContext />
      </div>
      <MenuBar />
    </div>
  );
};

export default Marketplace;
