import React from "react";
import { MinusCircle, PlusCircle, ShoppingCart, XCircle } from "lucide-react";

const Cart = ({ cart, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="mb-4 border-b border-gray-300 pb-2">
            <p className="text-lg font-semibold">{item.productName}</p>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => onIncrease(item)}
                className="bg-blue-500 text-white p-1 rounded-full"
              >
                <PlusCircle />
              </button>
              <button
                onClick={() => onDecrease(item)}
                className="bg-red-500 text-white p-1 rounded-full"
              >
                <MinusCircle />
              </button>
              <button
                onClick={() => onRemove(item)}
                className="bg-black text-gray-50 p-1 rounded-full"
              >
                <XCircle />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Your cart is empty</p>
      )}
      <div className="flex items-center justify-center mt-4">
        <button
          className=" flex flex-row bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-4 py-2 rounded-full"
          onClick={() => {
            // Implement your checkout logic or navigation to the checkout page
          }}
        >
          Checkout <ShoppingCart className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
