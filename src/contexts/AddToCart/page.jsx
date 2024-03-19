import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const AddToCart = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    const itemToAdd = { ...product, quantity: 1 }; // Fixed quantity of 1

    // Retrieve existing cart items from session storage or initialize an empty array
    const existingCartItems =
      JSON.parse(sessionStorage.getItem("cartItems")) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = existingCartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      existingCartItems[existingProductIndex].quantity += 1;
    } else {
      // If the product doesn't exist, add it to the cart
      existingCartItems.push(itemToAdd);
    }

    // Store the updated cart items in session storage
    sessionStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    // Call the onAddToCart function to update the cart state in the parent component
    onAddToCart(itemToAdd);

    // Trigger a custom event to notify the cart component of the update
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Listen for changes in the session storage and trigger the handleAddToCart function
  useEffect(() => {
    const handleStorageChange = () => {
      handleAddToCart();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={handleAddToCart}
        className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-2 py-2 rounded-full"
      >
        <ShoppingCart />
      </motion.button>
    </div>
  );
};

export default AddToCart;
