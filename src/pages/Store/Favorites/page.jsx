import React from "react";
import { Package, Truck } from "lucide-react";
import MenuBar from "@/components/MenuBar/page";
import Sidebar from "@/components/SideBar/page";

const Favorites = ({
  likedProducts,
  handleIncrease,
  handleDecrease,
  handleRemove,
}) => {
  return (
    <div className="bg-primary min-h-screen overflow-hidden">
      <h1 className="fixed bg-primary/30 backdrop-blur-md shadow-xl w-full text-4xl text-gray-50 text-center p-4 font-bold">
        Your Favorites
      </h1>
      <div className="flex items-center justify-center">
        <Sidebar />

        <div className="flex flex-wrap justify-center mt-28">
          {likedProducts && likedProducts.length > 0 ? (
            likedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-object w-[235px] text-gray-50 rounded-3xl shadow-lg p-4 m-4"
              >
                <h2 className="text-xl font-bold">{product.productName}</h2>
                <img
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
                      <Package size={18} className="text-orange-700" />
                    </span>
                  </p>
                  <p className="flex flex-row justify-between items-center">
                    Quality:{" "}
                    <span className="flex items-center">{product.quality}</span>
                  </p>
                  <div className="flex flex-row gap-2">
                    <p>{product.shipping}</p>
                    <span>
                      <Truck />
                    </span>
                  </div>
                </div>
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
