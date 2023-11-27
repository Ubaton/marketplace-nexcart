import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../CartContext/page";

const AddToCart = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Trigger the callback to add the product to the cart
    onAddToCart({ ...product, quantity });
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        className="w-12 h-8 text-gray-950 text-center rounded-lg"
      />
      <button
        onClick={handleAddToCart}
        className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-2 py-2 rounded-full"
      >
        <ShoppingCart />
      </button>
    </div>
  );
};

export default AddToCart;
