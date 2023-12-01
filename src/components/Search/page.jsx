"use client";

import React, { useState, useEffect } from "react";
import CardContext from "@/contexts/CardContext/page";
import { SearchIcon } from "lucide-react";

const Search = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Function to filter products based on the search input
    const filterProducts = () => {
      if (products) {
        const lowerCaseSearchInput = searchInput.toLowerCase();
        const filtered = products.filter((product) =>
          product.productName.toLowerCase().startsWith(lowerCaseSearchInput)
        );
        setFilteredProducts(filtered);
      }
    };

    // Call the filter function
    filterProducts();
  }, [searchInput, products]);

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
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="bg-input border-2 border-indigo-950 text-gray-50 h-10 rounded-full w-[760px] pl-10"
          />
        </div>
      </div>
      <CardContext
        products={searchInput.trim() === "" ? products : filteredProducts}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default Search;
