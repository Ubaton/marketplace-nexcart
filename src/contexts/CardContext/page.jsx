"use client";

import Card from "@/constant/Card/page";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CardContext = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use Axios to make a GET request to your Express.js server
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="fixed top-10">
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              title={product.productName}
              description={`Price: ${product.price}, Quantity: ${product.quantity}, Quality: ${product.quality}, Shipping: ${product.shipping}`}
              imageUrl={product.imageUrl}
            />
          ))
        ) : (
          <p>No Product Available</p>
        )}
      </div>
    </div>
  );
};

export default CardContext;
