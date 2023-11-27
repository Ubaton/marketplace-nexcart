// Import necessary components and styles
import React, { useState } from "react";
import { PackageMinus, PackagePlus } from "lucide-react";
import { useCart } from "../../contexts/CartContext/page";

const Cart = ({ selectedProducts }) => {
  const { cart, removeFromCart, updateQuantity, calculateTotal } = useCart();

  return (
    <div className="bg-object rounded-3xl w-48 h-[28rem] text-gray-50 p-4">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.productName}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
            </div>
          ))}
          <p>Total: ${calculateTotal()}</p>
        </div>
      )}
      <button
        onClick={() =>
          addToCart({
            id: 1,
            productName: "Product 1",
            price: 10.99,
          })
        }
      >
        <span className="">
          <PackagePlus />
        </span>
      </button>
    </div>
  );
};

export default Cart;
