import CreateProduct from "@/components/CreateProduct/page";
import ProductList from "@/components/ProductList/page";
import Sidebar from "@/components/SideBar/page";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex bg-primary min-h-screen flex-col items-center">
      <Sidebar />
      <div className="pt-20">
        <CreateProduct />
        <ProductList />
      </div>
    </div>
  );
};

export default Dashboard;
