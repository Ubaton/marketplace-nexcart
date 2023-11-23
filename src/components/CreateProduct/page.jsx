import React, { useState, useEffect } from "react";

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
    image: null,
  });

  // Update the state when the selectedProduct prop changes
  useEffect(() => {
    if (selectedProduct) {
      setNewProduct(selectedProduct);
    } else {
      // Reset the state if no product is selected (creating a new product)
      setNewProduct({
        productName: "",
        price: "",
        quantity: "",
        quality: "",
        shipping: "",
        image: null,
      });
    }
  }, [selectedProduct]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      // Handle image file
      setNewProduct({
        ...newProduct,
        [name]: files[0], // Update image field with the file object
      });
    } else {
      // Handle other input fields
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
  };

  // Use useEffect to update the input fields when editingProduct changes
  useEffect(() => {
    if (editingProduct) {
      setNewProduct(editingProduct);
    }
  }, [editingProduct]);

  const handleCreateOrUpdateProduct = () => {
    if (selectedProduct) {
      // If in edit mode, call the editProduct function
      editProduct(newProduct);
    } else {
      // If not in edit mode, call the addProduct function
      addProduct(newProduct);
    }

    // Reset the input fields after creating/updating a product
    setNewProduct({
      productName: "",
      price: "",
      quantity: "",
      quality: "",
      shipping: "",
      image: null,
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
                onClick={handleCreateOrUpdateProduct}
              >
                {selectedProduct ? "Update" : "Create"}
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
