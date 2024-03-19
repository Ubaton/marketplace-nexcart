import React, { useState } from "react";
import { motion } from "framer-motion";

const PaymentMethodSelection = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handlePaymentSubmit = () => {
    console.log("Payment submitted for:", selectedPaymentMethod);
  };

  return (
    <div className="max-w-lg bg-input shadow-lg p-4  rounded-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Payment Method Selection</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="flex flex-row justify-between items-center space-x-4 pb-4">
          <div className="flex flex-col items-center justify-center space-y-2">
            <label
              htmlFor="paypal"
              className="flex justify-center bg-tertiary w-20 h-12 rounded-md py-2"
            >
              PayPal
            </label>
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value={"paypal"}
              checked={selectedPaymentMethod === "paypal"}
              onChange={handlePaymentMethodChange}
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <label
              htmlFor="visa"
              className="flex justify-center bg-tertiary w-20 h-12 rounded-md py-2"
            >
              Visa
            </label>
            <input
              type="radio"
              id="visa"
              name="paymentMethod"
              value={"visa"}
              checked={selectedPaymentMethod === "visa"}
              onChange={handlePaymentMethodChange}
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <label
              htmlFor="ozow"
              className="flex justify-center bg-tertiary w-20 h-12 rounded-md py-2"
            >
              Ozow
            </label>
            <input
              type="radio"
              id="ozow"
              name="paymentMethod"
              value={"ozow"}
              checked={selectedPaymentMethod === "ozow"}
              onChange={handlePaymentMethodChange}
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <label
              htmlFor="payshap"
              className="flex justify-center bg-tertiary w-20 h-12 rounded-md py-2"
            >
              Payshap
            </label>
            <input
              type="radio"
              id="payshap"
              name="paymentMethod"
              value={"payshap"}
              checked={selectedPaymentMethod === "payshap"}
              onChange={handlePaymentMethodChange}
            />
          </div>
        </div>
        <span className="pt-2">
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="flex flex-row bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-6 py-2 rounded-full transition"
            type="submit"
          >
            Approve Payment
          </motion.button>
        </span>
      </form>
    </div>
  );
};

export default PaymentMethodSelection;
