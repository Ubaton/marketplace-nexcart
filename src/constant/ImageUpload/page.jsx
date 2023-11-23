import React, { useState } from "react";

const ImageUpload = () => {
  const [newProduct, setNewProduct] = useState({
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="p-2">
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
      </div>
    </div>
  );
};

export default ImageUpload;
