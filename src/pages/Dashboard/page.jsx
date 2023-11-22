import CreateProduct from "@/components/CreateProduct/page";
import Sidebar from "@/components/SideBar/page";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex bg-primary min-h-screen flex-col items-center justify-between">
      <Sidebar />
      <CreateProduct />
    </div>
  );
};

export default Dashboard;
