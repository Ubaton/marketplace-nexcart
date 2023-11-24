import React, { useState, useEffect } from "react";
import CreateProduct from "@/components/CreateProduct/page";
import ProductList from "@/components/ProductList/page";
import Sidebar from "@/components/SideBar/page";
import { v4 as uuidv4 } from "uuid"; // Import uuid
import ImageUpload from "@/constant/ImageUpload/page";
import productData from "../../../app/productdata.json";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Load products from local storage when the component mounts
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts([...storedProducts, ...productData]); // Combine local storage and JSON data
  }, []);

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
    setEditingProduct(products[index]);
  };

  return (
    <div className="flex flex-col items-center  pb-8 bg-primary min-h-screen overflow-auto">
      <Sidebar />
      <div className="pt-10">
        <div className="flex flex-row">
          <CreateProduct
            addProduct={addProduct}
            editProduct={editProduct}
            editingProduct={editingProduct}
          />
          <ImageUpload />
        </div>
        <ProductList
          products={products}
          onEditProduct={onEditProduct}
          onDeleteProduct={deleteProduct}
          setSelectedProduct={setSelectedProduct}
        />
      </div>
    </div>
  );
};

export default Dashboard;
