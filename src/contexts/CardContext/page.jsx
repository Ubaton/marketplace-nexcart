"use client";

import Card from "@/constant/Card/page";
import React, { useEffect, useState } from "react";
import productData from "../../app/productdata.json";

const CardContext = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="pt-2">
        {productData && productData.length > 0 ? (
          productData.map((product) => (
            <Card key={product.id}>
              <h2>{product.productName}</h2>
              <p>
                Price: R {product.price}, Quantity: {product.quantity}, Quality:{" "}
                {product.quality}, Shipping: {product.shipping}
              </p>
              <img src={product.imageUrl} alt={product.productName} />
            </Card>
          ))
        ) : (
          <p className="text-2xl text-gray-50">No Product Available</p>
        )}
      </div>
    </div>
  );
};

export default CardContext;
