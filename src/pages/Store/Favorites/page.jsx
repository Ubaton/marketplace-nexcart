import React, { useEffect, useState } from "react";
import {
  MinusCircle,
  Package,
  Package2,
  PlusCircle,
  XCircle,
} from "lucide-react";
import MenuBar from "@/components/MenuBar/page";
import Sidebar from "@/components/SideBar/page";
import Image from "next/image";

const Favorites = ({ handleIncrease, handleDecrease, handleRemove }) => {
  // State to hold the liked products from local storage
  const [likedProducts, setLikedProducts] = useState([]);

  // Retrieve liked products from local storage on component mount
  useEffect(() => {
    const storedLikedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];
    setLikedProducts(storedLikedProducts);
  }, []);

  // Function to filter out duplicate products based on ID
  const filterDuplicateProducts = (products) => {
    const uniqueProductIds = new Set();
    return products.filter((product) => {
      if (uniqueProductIds.has(product.id)) {
        return false; // Product ID already exists, filter out
      }
      uniqueProductIds.add(product.id);
      return true; // Product ID is unique, keep it
    });
  };

  // Apply filtering to the likedProducts array
  const uniqueLikedProducts = filterDuplicateProducts(likedProducts);

  return (
    <div className="bg-primary min-h-screen overflow-hidden">
      <h1 className="fixed bg-primary/30 backdrop-blur-md shadow-xl w-full text-4xl text-gray-50 text-center p-4 font-bold">
        Your Favorites
      </h1>
      <div className="flex items-center justify-center">
        <Sidebar />

        <div className="grid grid-cols-3  mt-28">
          {uniqueLikedProducts && uniqueLikedProducts.length > 0 ? (
            uniqueLikedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-object w-[235px] text-gray-50 rounded-3xl shadow-lg p-4 m-4"
              >
                <h2 className="text-xl font-bold">{product.productName}</h2>
                <Image
                  src={product.imageUrl}
                  alt={product.productName}
                  className="mt-2 w-full h-32 object-cover rounded-lg mb-2"
                />
                <div className="flex flex-col">
                  <p className="flex flex-row justify-between items-center">
                    Price:{" "}
                    <span className="flex text-green-600 items-center">
                      R {product.price}
                    </span>
                  </p>
                  <p className="flex flex-row justify-between items-center">
                    Quantity:{" "}
                    <span className="flex text-orange-700 flex-row items-center gap-1">
                      {product.quantity}
                      <Package2 size={18} className="text-orange-700" />
                    </span>
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <button
                      className="bg-blue-500 text-white p-1 rounded-full"
                      onClick={() => handleIncrease(product)}
                    >
                      <PlusCircle />
                    </button>
                    <button
                      className="bg-amber-500 text-white p-1 rounded-full"
                      onClick={() => handleDecrease(product)}
                    >
                      <MinusCircle />
                    </button>
                    <button
                      className="bg-red-500 text-gray-50 p-1 rounded-full"
                      onClick={() => handleRemove(product)}
                    >
                      <XCircle />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-2xl text-gray-50">No liked products available</p>
          )}
        </div>

        <MenuBar />
      </div>
    </div>
  );
};

export default Favorites;
