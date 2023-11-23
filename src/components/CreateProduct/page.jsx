import React, { useState } from "react";

const CreateProduct = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    productName: "",
    price: "",
    quantity: "",
    quality: "",
    shipping: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleCreateProduct = () => {
    // Implement your logic to handle the creation of a new product
    console.log("New Product:", newProduct);
    addProduct(newProduct); // Add the new product directly
    // Reset the input fields after creating a new product
    setNewProduct({
      productName: "",
      price: "",
      quantity: "",
      quality: "",
      shipping: "",
    });
  };

  return (
    <div>
      <table className="flex items-center justify-start min-w-full table-auto pl-20">
        <thead className="pb-6">
          <tr className="grid grid-cols-2 ">
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
              <button
                className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-[5.8rem] py-2 rounded-full"
                onClick={handleCreateProduct}
              >
                Create
              </button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CreateProduct;
