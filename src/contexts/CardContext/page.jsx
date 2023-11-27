"use client";

import React from "react";
import productData from "../../app/productdata.json";
import { Heart, Truck } from "lucide-react";

const CardContext = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 space-y-4 w-full pt-2">
        {productData && productData.length > 0 ? (
          productData.map((product) => (
            <div
              key={product.id}
              className="bg-object text-gray-50 rounded-3xl shadow-lg p-4"
            >
              <div className="flex flex-row">
                <h2 className="text-xl font-bold">{product.productName}</h2>
                <span className="flex items-center">
                  <Heart />
                </span>
              </div>
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="mt-2 w-full h-32 object-cover"
              />
              <div className="flex flex-col">
                <p>
                  Price: R {product.price}, Quantity: {product.quantity},
                </p>
                <p>Quality:{product.quality},</p>
                <div className="flex flex-row gap-2">
                  <p>{product.shipping}</p>
                  <span>
                    <Truck />
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-2xl text-gray-50">No Product Available</p>
        )}
      </div>
    </div>
  );
};

export default CardContext;
