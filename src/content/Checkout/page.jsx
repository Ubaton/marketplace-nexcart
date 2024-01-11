"use client";

import React, { useState } from "react";
import { CheckCircle, CreditCard, Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [orderData, setOrderData] = useState(/* Your order data here */);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCheckout = (cart) => {
    router.push("/confirmation");
  };

  const handleBack = () => {
    router.push("/marketplace");
  };

  const calculateTotal = (orderData) => {
    if (!orderData || orderData.length === 0) {
      return 0;
    }

    return orderData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-primary min-h-screen mx-auto overflow-hidden">
      <div className=" container mx-auto p-8">
        <div className="bg-object text-gray-50 p-8 rounded-3xl shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Checkout</h2>

          <div className="grid grid-cols-2 p-4">
            <div>
              {/* Payment Method Selection */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  Select Payment Method
                </h3>
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex flex-row cursor-pointer p-4 border ${
                      paymentMethod === "creditCard" ? "border-blue-500" : ""
                    }`}
                    onClick={() => handlePaymentMethodChange("creditCard")}
                  >
                    <CreditCard size={24} />
                    <span className="ml-2">Credit Card</span>
                  </div>
                  {/* Add more payment methods as needed */}
                </div>
              </div>

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

            <div>
              {/* Order Summary (Placeholder) */}
              <div className=" text-gray-50 mb-6">
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                {orderData &&
                  orderData.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center mb-2"
                    >
                      <p>{item.productName}</p>
                      <p className="text-gray-50">Quantity: {item.quantity}</p>
                      <p>Price: R {item.price.toFixed(2)}</p>
                    </div>
                  ))}
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold">Total:</p>
                  <p>${calculateTotal(orderData).toFixed(2)}</p>
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
      <button
        className="flex flex-row bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-6 py-2 rounded-full transition"
        onClick={handleBack}
      >
        <Undo2 size={24} className="mr-2" />
        Back
      </button>
    </div>
  );
};

export default Checkout;
