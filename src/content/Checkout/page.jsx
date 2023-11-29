"use client";

import React, { useState } from "react";
import { CheckCircle, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    // Redirect to a confirmation page or perform further actions
    router.push("/confirmation");
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6">Checkout</h2>

        {/* Payment Method Selection */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>
          <div className="flex items-center space-x-4">
            <div
              className={`cursor-pointer p-4 border ${
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
            <h3 className="text-xl font-semibold mb-4">Credit Card Details</h3>
            {/* Add your credit card form or integrate with a third-party payment gateway */}
            <p>Placeholder for credit card form</p>
          </div>
        )}

        {/* Order Summary (Placeholder) */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          {/* Display order items and total amount */}
          <p>Placeholder for order summary</p>
        </div>

        {/* Checkout Button */}
        <button
          className="flex flex-row bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-6 py-2 rounded-full transition"
          onClick={handleCheckout}
        >
          <CheckCircle size={24} className="mr-2" />
          Complete Purchase
        </button>
      </div>
    </div>
  );
};

export default Checkout;
