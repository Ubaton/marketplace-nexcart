"use client";

import React, { useState } from "react";
import CardContext from "@/contexts/CardContext/page";
import { SearchIcon } from "lucide-react";

const Search = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Function to handle product selection in CardContext
  const handleProductSelection = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const handleAddToCart = (product) => {
    // Your implementation to handle adding to the cart
    console.log("Adding to cart:", product);
  };

  const addToCart = (product) => {
    // Your logic to update the cart
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="fixed top-20">
        <div className="relative">
          <div className="flex items-center gap-2 text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2">
            <span>
              <SearchIcon />
            </span>
          </div>
          <input
            type="text"
            id="search-input"
            placeholder="Search"
            className="bg-input border-2 border-indigo-950 text-gray-50 h-10 rounded-full w-[720px] pl-10"
          />
        </div>
      </div>
      <CardContext onAddToCart={addToCart} />
    </div>
  );
};

export default Search;
