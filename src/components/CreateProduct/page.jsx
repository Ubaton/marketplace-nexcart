import React, { useState } from "react";

const CreateProduct = () => {
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
    <div className="flex items-center justify-center">
      <div className="pl-48">
        <div className="p-4 ">
          <table className="min-w-full table-auto">
            <thead className="grid grid-cols-2">
              <tr className="bg-darkgray">
                <span>
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
                </span>
                <span>
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
                      className="bg-blue-500 text-white px-4 py-2 rounded-full"
                      onClick={handleCreateProduct}
                    >
                      Create
                    </button>
                  </th>
                </span>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
