import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const AddToCart = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        className="w-12 h-8 bg-input text-gray-50 text-center rounded-lg"
      />
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
