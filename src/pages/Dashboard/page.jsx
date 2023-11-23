import React, { useState, useEffect } from "react";
import CreateProduct from "@/components/CreateProduct/page";
import ProductList from "@/components/ProductList/page";
import Sidebar from "@/components/SideBar/page";
import { v4 as uuidv4 } from "uuid"; // Import uuid

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // Track the product being edited

  const addProduct = (product) => {
    // Generate a unique ID using uuid
    const newProduct = { id: uuidv4(), ...product };
    setProducts([...products, newProduct]);
  };

  const editProduct = (updatedProduct) => {
    // Update the existing product in the products array
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editingProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const onEditProduct = (index) => {
    // Set the product being edited
    setEditingProduct(products[index]);
  };

  return (
    <div className="flex bg-primary min-h-screen flex-col items-center">
      <Sidebar />
      <div className="pt-10">
        <CreateProduct
          addProduct={addProduct}
          editProduct={editProduct}
          editingProduct={editingProduct}
        />
        <ProductList
          products={products}
          onEditProduct={onEditProduct}
          onDeleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
};

export default Dashboard;
