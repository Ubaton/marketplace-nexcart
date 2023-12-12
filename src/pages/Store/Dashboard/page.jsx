import React, { useState, useEffect } from "react";
import axios from "axios";
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

  useEffect(() => {
    // Fetch data from your API or database
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
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
    <div className="mx-auto pb-8 bg-primary min-h-screen overflow-auto">
      <Sidebar />
      <h1 className="text-4xl text-gray-50 text-center p-2 font-bold">
        Dashboard
      </h1>
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex flex-row">
          <CreateProduct
            addProduct={addProduct}
            editProduct={editProduct}
            editingProduct={editingProduct}
          />
          <ImageUpload />
        </div>
        <div>
          <ProductList
            products={products}
            onEditProduct={onEditProduct}
            onDeleteProduct={deleteProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
