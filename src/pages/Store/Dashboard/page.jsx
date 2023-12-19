import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateProduct from "@/components/CreateProduct/page";
import ProductList from "@/components/ProductList/page";
import Sidebar from "@/components/SideBar/page";
import { v4 as uuidv4 } from "uuid"; // Import uuid
import ImageUpload from "@/constant/ImageUpload/page";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
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
    const newProduct = { id: uuidv4(), ...product };
    setProducts([...products, newProduct]);
  };

  const editProduct = (updatedProduct) => {
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
    <div>
      <h1 className="fixed bg-primary/30 backdrop-blur-md shadow-xl w-full text-4xl text-gray-50 text-center p-4 font-bold">
        Dashboard
      </h1>
      <div className="mx-auto pb-8 bg-primary min-h-screen overflow-auto">
        <Sidebar />

        <div className="flex flex-col justify-center items-center pt-[4.7rem]">
          <div className="flex flex-row">
            <CreateProduct
              addProduct={addProduct}
              editProduct={editProduct}
              editingProduct={editingProduct}
              likedProducts={likedProducts}
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
    </div>
  );
};

export default Dashboard;
