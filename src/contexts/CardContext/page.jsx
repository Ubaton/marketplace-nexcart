"use client";
// import Card from "@/constant/Card/page";
import React, { useEffect, useState } from "react";
import productData from "../../app/productdata.json";

const CardContext = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full pt-2">
        {productData && productData.length > 0 ? (
          productData.map((product) => (
            // <Card>
            <div className=" bg-object text-gray-50 rounded-3xl shadow-lg p-4 w-44 h-72">
              <div key={product.id} className="p-4 rounded shadow-md">
                <h2 className="text-xl text-gray-50 font-bold">
                  {product.productName}
                </h2>
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  className="mt-2 w-full h-32 object-cover"
                />
                <p className="text-gray-50">
                  Price: R {product.price}, Quantity: {product.quantity},
                  Quality: {product.quality}, Shipping: {product.shipping}
                </p>
              </div>
            </div>

            // </Card>
          ))
        ) : (
          <p className="text-2xl text-gray-50">No Product Available</p>
        )}
      </div>
    </div>
  );
};

export default CardContext;
