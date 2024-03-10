import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, CreditCard, Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    // Retrieve cart items from session storage
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

    // Filter out duplicate products based on their IDs
    const uniqueProducts = [];
    cartItems.forEach((item) => {
      if (!uniqueProducts.some((product) => product.id === item.id)) {
        uniqueProducts.push(item);
      }
    });

    // Set the order data with unique products
    setOrderData(uniqueProducts);
  }, []);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    router.push("/confirmation");
  };

  const handleBack = () => {
    router.push("/marketplace");
  };

  const calculateTotal = () => {
    return orderData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-primary min-h-screen mx-auto overflow-hidden">
      <div className="container mx-auto p-8">
        <div className="bg-object text-gray-50 p-8 rounded-3xl shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Checkout</h2>

          <div className="grid grid-cols-2 p-4">
            <div>
              {/* Payment Method Selection */}
              <div className="mb-6">
                {/* Payment Details Form (Placeholder) */}
                {paymentMethod === "creditCard" && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Credit Card Details
                    </h3>
                    {/* Add your credit card form or integrate with a third-party payment gateway */}
                    <p>Placeholder for credit card form</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              {/* Order Summary (Placeholder) */}
              <div className=" text-gray-50 mb-6">
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                <table className="w-full">
                  <thead className="text-left font-bold text-2xl">
                    <tr>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.productName}</td>
                        <td className="text-gray-50 text-center">
                          {item.quantity}
                        </td>
                        <td>
                          R{" "}
                          {typeof item.price === "number"
                            ? item.price.toFixed(2)
                            : item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold">Total:</p>
                  <p className="text-green-600 font-bold">
                    R {calculateTotal(orderData).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="flex flex-row bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-6 py-2 rounded-full transition"
            onClick={handleCheckout}
          >
            <CheckCircle size={24} className="mr-2" />
            Complete Purchase
          </button>
        </div>
      </div>
      <motion.button
        whileTap={{ scale: 0.8 }}
        className="flex flex-row bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-6 py-2 rounded-full transition"
        onClick={handleBack}
      >
        <Undo2 size={24} className="mr-2" />
        Back
      </motion.button>
    </div>
  );
};

export default Checkout;
