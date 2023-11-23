import React, { useState } from "react";
import CreateProduct from "@/components/CreateProduct/page";
import ProductList from "@/components/ProductList/page";
import Sidebar from "@/components/SideBar/page";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  return (
    <div className="flex bg-primary min-h-screen flex-col items-center">
      <Sidebar />
      <div className="pt-10">
        <CreateProduct addProduct={addProduct} />
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Dashboard;
