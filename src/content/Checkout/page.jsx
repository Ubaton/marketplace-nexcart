import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import PaymentMethodSelection from "@/Security/PaymentMethodSelection/page";

const Checkout = () => {
  const router = useRouter();
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

    const uniqueProducts = [];
    cartItems.forEach((item) => {
      if (!uniqueProducts.some((product) => product.id === item.id)) {
        uniqueProducts.push(item);
      }
    });

    setOrderData(uniqueProducts);
  }, []);

  const handleCheckout = () => {
    bundleAndSaveOrder(orderData);

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

  const bundleAndSaveOrder = (orderData) => {
    const bundledOrders =
      JSON.parse(localStorage.getItem("bundledOrders")) || [];

    const formatDatetime = (datetimeString) => {
      const datetime = new Date(datetimeString);

      const date = datetime.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      const time = datetime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      return { date, time };
    };

    const bundledUpID = new Date().getTime();

    const newBundledOrder = {
      bundledUpID,
      datetime: formatDatetime(new Date().toISOString()),
      products: orderData,
    };

    bundledOrders.push(newBundledOrder);

    localStorage.setItem("bundledOrders", JSON.stringify(bundledOrders));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-primary min-h-screen mx-auto overflow-hidden">
      <div className="container mx-auto p-8">
        <div className="bg-object text-gray-50 p-8 rounded-3xl shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Checkout</h2>

          <div className="grid grid-cols-2 p-4">
            <div>
              <PaymentMethodSelection />
            </div>

            <div className="p-4 rounded-lg">
              <div className="text-gray-50 mb-6">
                <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
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
                <div className="flex justify-between items-center text-2xl mt-4">
                  <p className="font-bold">Total:</p>
                  <p className="text-green-600 font-bold">
                    R {calculateTotal().toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <span className="flex justify-end">
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="flex flex-row bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-6 py-2 rounded-full transition"
              onClick={handleCheckout}
            >
              <CheckCircle size={24} className="mr-2" />
              Complete Purchase
            </motion.button>
          </span>
        </div>
      </div>

      <motion.button
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
