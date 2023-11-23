import React, { useState, useEffect } from "react";
import CreateProduct from "@/components/CreateProduct/page";
import ProductList from "@/components/ProductList/page";
import Sidebar from "@/components/SideBar/page";
import { v4 as uuidv4 } from "uuid"; // Import uuid
import ImageUpload from "@/constant/ImageUpload/page";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Load products from local storage when the component mounts
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
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
    <div className="flex bg-primary min-h-screen flex-col items-center">
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
