import { ImagePlus } from "lucide-react";
import React, { useState } from "react";

const ImageUpload = () => {
  const [newProduct, setNewProduct] = useState({
    image: null,
  });

  const handleInputChange = (e) => {
    const file = e.target.files[0];

    setNewProduct({
      ...newProduct,
      image: file,
    });
  };

  return (
    <div className="flex justify-center">
      <div className="p-2">
        <label htmlFor="image">
          <div className="bg-object text-gray-50 h-[9.5rem] w-80 p-2 rounded-xl cursor-pointer">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
              className="hidden"
            />

            {newProduct.image ? (
              <img
                src={URL.createObjectURL(newProduct.image)}
                alt="Shipping Image"
                className="h-full w-full object-cover rounded-md"
              />
            ) : (
              <span className="flex justify-center items-center h-full">
                <ImagePlus size={40} />
              </span>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
