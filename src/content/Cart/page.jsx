import React from "react";
import { MinusCircle, PlusCircle, ShoppingCart, XCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Cart = ({ cart, onIncrease, onDecrease, onRemove }) => {
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className=" bg-object text-gray-50 rounded-3xl p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="mb-4 border-b pb-2">
            <div className="flex flex-col p-2">
              <p className="text-lg font-semibold">{item.productName}</p>
              <img
                src={item.imageUrl}
                alt={item.productName}
                className="mt-2 w-full h-32 object-cover rounded-lg mb-2"
              />
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <div className="flex gap-2 mt-2 p-2">
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
          onClick={handleCheckout}
        >
          Checkout <ShoppingCart className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
