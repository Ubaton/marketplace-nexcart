"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (!newProduct.productName.trim()) {
      console.error("Product name cannot be empty");
      return;
    }

    if (editingProduct) {
      // If editing an existing product, send a PUT request to update it
      axios
        .put(`http://localhost:5000/update/${editingProduct.id}`, newProduct)
        .then(() => {
          console.log("Product updated successfully");
          toast.success("Product has been updated", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          // Reset input fields
          setNewProduct({
            productName: "",
            price: "",
            quantity: "",
            quality: "",
            shipping: "",
            imageUrl: "",
          });
          // Update editingProduct state with the newProduct
          editProduct(newProduct);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error updating product:", error);
          // Display appropriate error messages
        });
    } else {
      // If not editing, create a new product
      axios
        .post("http://localhost:5000/create", newProduct)
        .then(() => {
          console.log("Product added successfully");
          toast.success("Product has been created", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });

          // Reset input fields
          setNewProduct({
            productName: "",
            price: "",
            quantity: "",
            quality: "",
            shipping: "",
            imageUrl: "",
          });
        })
        .catch((error) => {
          // Handle errors
          console.error("Error adding product:", error);
          // Display appropriate error messages
        });
    }
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
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-[5.8rem] py-2 rounded-full"
                onClick={handleCreateProduct}
              >
                {editingProduct ? "Update" : "Create"}
              </motion.button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CreateProduct;
