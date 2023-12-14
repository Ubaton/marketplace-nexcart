"use client";

import React, { useState, useEffect } from "react";
import CardContext from "@/contexts/CardContext/page";
import { SearchIcon } from "lucide-react";

const Search = () => {
  const [cart, setCart] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filterProducts = () => {
      if (products) {
        const lowerCaseSearchInput = searchInput.toLowerCase();
        const filtered = products.map((product) => ({
          ...product,
          highlightedName: highlightSearchTerm(
            product.productName,
            lowerCaseSearchInput
          ),
        }));

        setFilteredProducts(filtered);
      }
    };

    filterProducts();
  }, [searchInput, products]);

  const highlightSearchTerm = (product, searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Check if the search term matches the product name or ID
    const productNameMatch =
      product.productName &&
      product.productName.toLowerCase().includes(lowerCaseSearchTerm);
    const productIdMatch = String(product.id).includes(lowerCaseSearchTerm);

    if (productNameMatch || productIdMatch) {
      // Highlight the matched part
      const highlightedName = (product.productName ?? "").replace(
        new RegExp(`(${lowerCaseSearchTerm})`, "ig"),
        (match, p1) => `<span className="bg-yellow-300">${p1}</span>`
      );

      return <span dangerouslySetInnerHTML={{ __html: highlightedName }} />;
    }

    // If no match, return the original product name
    return product.productName;
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const fetchProducts = async () => {
    try {
      let apiUrl = "http://localhost:5000/products";

      if (searchTerm) {
        apiUrl += `?search=${searchTerm}`;
      }

      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(
          data.map((product) => ({
            ...product,
            highlightedName: highlightSearchTerm(
              product.productName,
              searchTerm
            ),
          }))
        );
      } else {
        console.error("Error fetching products:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm]);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="fixed top-[5.6rem]">
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchProducts();
              }
            }}
            className="bg-input border-2 border-indigo-950 text-gray-50 h-10 rounded-full w-[660px] pl-10"
          />
          <button
            className={`ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white cursor-pointer`}
            onClick={() => fetchProducts()}
          >
            Search
          </button>
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
