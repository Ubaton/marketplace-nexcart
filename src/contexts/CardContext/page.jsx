"use client";

import React, { useState } from "react";
import productData from "../../app/productdata.json";
import { Heart, Truck } from "lucide-react";
import AddToCart from "../AddToCart/page";
import Cart from "@/content/Cart/page";

const CardContext = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // Implement your logic to add the product to the cart
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update quantity
      updatedCart[existingProductIndex].quantity += product.quantity;
    } else {
      // Product doesn't exist in the cart, add it
      updatedCart.push({ ...product });
    }

    setCart(updatedCart);
    console.log("Adding to cart:", product);
  };

  const handleIncrease = (item) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingProductIndex !== -1) {
      // Increase the quantity of the existing item
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
      // Decrease the quantity of the existing item, but ensure it doesn't go below 1
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

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center pt-36 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full pt-2">
          {productData && productData.length > 0 ? (
            productData.map((product) => (
              <div
                key={product.id}
                className="bg-object text-gray-50 rounded-3xl shadow-lg p-4 hover:shadow-xl hover:shadow-indigo-950 transition-shadow duration-700"
              >
                <div className="flex flex-row">
                  <h2 className="text-xl font-bold">{product.productName}</h2>
                  <span className="flex text-rose-600 items-center">
                    <Heart />
                  </span>
                </div>
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  className="mt-2 w-full h-32 object-cover rounded-lg mb-2"
                />
                <div className="flex flex-col">
                  <p>Price: R {product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Quality:{product.quality}</p>
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
