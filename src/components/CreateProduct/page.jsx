import React, { useState, useEffect } from "react";
import axios from "axios";
// import { response } from "express";

const CreateProduct = ({ addProduct, editProduct, editingProduct }) => {
  const [newProduct, setNewProduct] = useState({
    productName: "",
    price: "",
    quantity: "",
    quality: "",
    shipping: "",
  });

  useEffect(() => {
    // Set the input fields with the values of the editingProduct when editing
    if (editingProduct) {
      setNewProduct(editingProduct);
    } else {
      // Reset the input fields when not editing
      setNewProduct({
        productName: "",
        price: "",
        quantity: "",
        quality: "",
        shipping: "",
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

  const productName = "ExampleProduct";
  const price = 10.99;
  const quantity = 5;
  const quality = "High";
  const shipping = "Express";

  const handleCreateProduct = () => {
    axios
      .post("http://localhost:3000/create", {
        productName: productName,
        price: price,
        quantity: quantity,
        quality: quality,
        shipping: shipping,
      })
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

  // const handleCreateProduct = async () => {
  //   const response = await fetch("/api/fetchdata", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newProduct),
  //   });

  //   const data = await response.json();

  //   if (response.ok) {
  //   } else {
  //     console.error(data.message);
  //   }

  //   setNewProduct({
  //     productName: "",
  //     price: "",
  //     quantity: "",
  //     quality: "",
  //     shipping: "",
  //   });
  // };

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
