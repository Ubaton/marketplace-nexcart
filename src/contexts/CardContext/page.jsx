"use client";

import React from "react";
import productData from "../../app/productdata.json";

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
              <h2 className="text-xl font-bold">{product.productName}</h2>
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="mt-2 w-full h-32 object-cover"
              />
              <p>
                Price: R {product.price}, Quantity: {product.quantity}, Quality:{" "}
                {product.quality}, Shipping: {product.shipping}
              </p>
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
