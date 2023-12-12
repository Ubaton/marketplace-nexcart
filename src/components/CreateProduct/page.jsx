"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateProduct = ({ addProduct, editProduct, editingProduct }) => {
  const [newProduct, setNewProduct] = useState({
    productName: "",
    price: "",
    quantity: "",
    quality: "",
    shipping: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (editingProduct) {
      setNewProduct(editingProduct);
    } else {
      setNewProduct({
        productName: "",
        price: "",
        quantity: "",
        quality: "",
        shipping: "",
        imageUrl: "",
      });
    }
  }, [editingProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleCreateProduct = () => {
    // Validate that productName is not empty
    if (!newProduct.productName.trim()) {
      console.error("Product name cannot be empty");
      return;
    }

    axios
      .post("http://localhost:5000/create", newProduct)
      .then(() => {
        console.log("Product added successfully");
      })
      .catch((error) => {
        console.error("Error adding product:", error);

        if (error.response) {
          if (error.response.status === 404) {
            console.error(
              "The requested endpoint was not found. Check your server-side routing."
            );
          } else {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
            console.error("Response headers:", error.response.headers);
          }
        } else if (error.request) {
          console.error("No response received");
          console.error("Request data:", error.request);
        } else {
          console.error("Error setting up the request", error.message);
        }
      });
  };

  return (
    <div>
      <table className="flex items-center justify-start min-w-full table-auto pl-20">
        <thead className="flex flex-row pb-6">
          <tr className="grid grid-cols-2">
            <th className="p-2">
              <input
                type="text"
                name="productName"
                value={newProduct.productName}
                onChange={handleInputChange}
                placeholder="Enter Product Name"
                className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
              />
            </th>
            <th className="p-2">
              <input
                type="text"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                placeholder="Enter Price"
                className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
              />
            </th>
            <th className="p-2">
              <input
                type="text"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
                placeholder="Enter Quantity"
                className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
              />
            </th>

            <th className="p-2">
              <input
                type="text"
                name="quality"
                value={newProduct.quality}
                onChange={handleInputChange}
                placeholder="Enter Quality"
                className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
              />
            </th>
            <th className="p-2">
              <input
                type="text"
                name="shipping"
                value={newProduct.shipping}
                onChange={handleInputChange}
                placeholder="Enter Shipping"
                className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
              />
            </th>
            <th className="p-2">
              <button
                className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-[5.8rem] py-2 rounded-full"
                onClick={handleCreateProduct}
              >
                {editingProduct ? "Update" : "Create"}
              </button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CreateProduct;
