import React from "react";
import { ShoppingCart } from "lucide-react";

const AddToCart = ({ product, onAddToCart, setCartItemCount }) => {
  const handleAddToCart = () => {
    onAddToCart({ ...product });
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <button
        onClick={() => {
          handleAddToCart();
          onAddToCart({ ...product });
          // Increment count
          setCartItemCount((prevCount) => prevCount + 1);
        }}
        className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-2 py-2 rounded-full"
      >
        <ShoppingCart />
      </button>
    </div>
  );
};

export default AddToCart;
