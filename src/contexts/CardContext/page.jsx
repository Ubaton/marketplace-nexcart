"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heart, Package, Truck } from "lucide-react";
import AddToCart from "../AddToCart/page";
import Cart from "@/content/Cart/page";

const CardContext = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server on component mount
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += product.quantity;
    } else {
      updatedCart.push({ ...product });
    }

    setCart(updatedCart);

    if (product.isLiked) {
      setLikedProducts([...likedProducts, product]);
    }
  };

  const handleToggleLike = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, isLiked: !product.isLiked }
        : product
    );

    setProducts(updatedProducts);
  };

  const handleIncrease = (item) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    }
  };

  const handleDecrease = (item) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity = Math.max(
        1,
        updatedCart[existingProductIndex].quantity - 1
      );
      setCart(updatedCart);
    }
  };

  const handleRemove = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  useEffect(() => {
    console.log("Liked Products:", likedProducts);
  }, [likedProducts]);

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-center pt-36 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full pt-2">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className={`bg-object w-[235px] text-gray-50 rounded-3xl shadow-lg p-4 
                  hover:shadow-xl hover:shadow-indigo-950 transition-shadow duration-700`}
              >
                <div className="flex flex-row justify-between items-center">
                  <h2 className="text-xl font-bold">{product.productName}</h2>
                  <span
                    className={`flex items-center cursor-pointer ${
                      product.isLiked ? "text-rose-600" : "text-gray-500"
                    }`}
                    onClick={() => handleToggleLike(product.id)}
                  >
                    <Heart />
                  </span>
                </div>
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
                  <AddToCart product={product} onAddToCart={handleAddToCart} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-2xl text-gray-50">No Product Available</p>
          )}
        </div>
      </div>
      <div className="">
        <Cart
          cart={cart}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
      </div>
    </div>
  );
};

export default CardContext;
