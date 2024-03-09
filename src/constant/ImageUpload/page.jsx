"use client";

import { ImagePlus } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

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

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", newProduct.image);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData
      );
      console.log("Image uploaded successfully:", response.data.imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-row space-x-4 p-2">
        <label htmlFor="image">
          <div className="bg-object text-gray-50 h-[9.5rem] w-64 p-2 rounded-xl cursor-pointer">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
              className="hidden"
            />

            {newProduct.image ? (
              <Image
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
        <button
          onClick={handleUpload}
          className=" bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-2 h-[9.5rem] rounded-xl"
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
