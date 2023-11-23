import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const CreateProduct = ({
  addProduct,
  editProduct,
  selectedProduct,
  editingProduct,
}) => {
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

  const handleCreateOrUpdateProduct = async () => {
    try {
      const newProductWithId = {
        ...newProduct,
        id: uuidv4(),
      };

      // Make an Axios POST request to the server
      const response = await axios.post(
        "http://localhost:5000/api/products",
        newProductWithId
      );

      if (response.data.success) {
        // Add the new product directly to the state or update the existing product
        editingProduct
          ? editProduct(newProductWithId)
          : addProduct(newProductWithId);

        // Reset the input fields after creating or updating a product
        setNewProduct({
          productName: "",
          price: "",
          quantity: "",
          quality: "",
          shipping: "",
        });
      } else {
        console.error("Failed to add/update product:", response.data.message);
      }
    } catch (error) {
      console.error("Error creating/updating product:", error.message);
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
                className="bg-object text-gray-50 h-10 w-auto p-2 rounded-full"
              />
            </th>
            <th className="p-2">
              <input
                type="text"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                placeholder="Enter Price"
                className="bg-object text-gray-50 h-10 w-auto p-2 rounded-full"
              />
            </th>
            <th className="p-2">
              <input
                type="text"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
                placeholder="Enter Quantity"
                className="bg-object text-gray-50 h-10 w-auto p-2 rounded-full"
              />
            </th>

            <th className="p-2">
              <input
                type="text"
                name="quality"
                value={newProduct.quality}
                onChange={handleInputChange}
                placeholder="Enter Quality"
                className="bg-object text-gray-50 h-10 w-auto p-2 rounded-full"
              />
            </th>
            <th className="p-2">
              <input
                type="text"
                name="shipping"
                value={newProduct.shipping}
                onChange={handleInputChange}
                placeholder="Enter Shipping"
                className="bg-object text-gray-50 h-10 w-auto p-2 rounded-full"
              />
            </th>
            <th className="p-2">
              {/* Conditional rendering of "Update" or "Create" button */}
              <button
                className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-[5.8rem] py-2 rounded-full"
                onClick={handleCreateOrUpdateProduct}
              >
                {editingProduct ? "Update" : "Create"}
              </button>
            </th>
          </tr>
          <th className="p-2">
            <label htmlFor="Image">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleInputChange}
                className="hidden"
              />
              <div className="bg-object text-gray-50 h-40 w-80 p-2 rounded-xl cursor-pointer">
                {newProduct.image ? (
                  <img
                    src={URL.createObjectURL(newProduct.image)}
                    alt="Shipping Image"
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  <span>Upload Image</span>
                )}
              </div>
            </label>
          </th>
        </thead>
      </table>
    </div>
  );
};

export default CreateProduct;
