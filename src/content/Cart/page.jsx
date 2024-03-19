import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MinusCircle, PlusCircle, ShoppingCart, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Cart = ({}) => {
  const router = useRouter();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const updateCartItems = () => {
      const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
      setCart(cartItems);
    };

    updateCartItems();

    const cartChangeListener = () => {
      updateCartItems();
    };

    window.addEventListener("storage", cartChangeListener);

    return () => {
      window.removeEventListener("storage", cartChangeListener);
    };
  }, []);

  const handleIncrease = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleDecrease = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const calculateTotal = () => {
    if (!cart || !cart.length) {
      return 0;
    }

    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="text-gray-50 h-screen">
      <div className="">
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="mb-4 border-b pb-2">
              <div className="bg-input flex flex-col p-4 rounded-3xl">
                <p className="text-lg font-semibold">{item.productName}</p>
                <Image
                  src={item.imageUrl}
                  alt={item.productName}
                  className="mt-2 w-full h-32 object-cover rounded-lg mb-2"
                  width={150}
                  height={150}
                />
                <div className="flex flex-col justify-between text-gray-50">
                  <p>
                    Quantity:{" "}
                    <span className="text-orange-700">{item.quantity}</span>
                  </p>
                  <p>
                    Price:{" "}
                    <span className="text-green-600">R {item.price}</span>
                  </p>
                </div>
              </div>
              <div className="bg-input rounded-3xl flex items-center justify-between gap-2 mt-2 p-2">
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={() => handleIncrease(item.id)}
                  className="bg-blue-500 text-white p-1 rounded-full"
                >
                  <PlusCircle />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={() => handleDecrease(item.id)}
                  className="bg-amber-500 text-white p-1 rounded-full"
                >
                  <MinusCircle />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-gray-50 p-1 rounded-full"
                >
                  <XCircle />
                </motion.button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-50 text-center pt-2">Your cart is empty</p>
        )}
      </div>

      {/* Total and checkout */}
      <div className="pb-24 pt-0">
        {/* Total amount */}
        <div className="flex flex-row justify-between bg-input rounded-3xl mt-2 p-2 font-semibold">
          <p className="text-gray-50">Subtotal:</p>
          <p>
            <span className="text-green-600">R {calculateTotal()}</span>
          </p>
        </div>

        {/* Checkout button */}
        <div className="flex items-center justify-center mt-4">
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="flex flex-row bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-4 py-2 rounded-full"
            onClick={handleCheckout}
          >
            Checkout <ShoppingCart className="ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
