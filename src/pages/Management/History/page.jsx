"use client";

import MenuBar from "@/components/MenuBar/page";
import Sidebar from "@/components/SideBar/page";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const OrderHistory = ({ selectedOrderId, onSelectProduct }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = () => {
    const bundledOrders =
      JSON.parse(localStorage.getItem("bundledOrders")) || [];
    setOrderHistory(bundledOrders);
  };

  const handleClearHistory = () => {
    localStorage.removeItem("bundledOrders");
    setOrderHistory([]);
  };

  const renderOrder = (order) => {
    return (
      <div
        key={order.bundledUpID}
        className="bg-input rounded-3xl p-4 w-[25rem]"
      >
        <h3 className="text-xl text-blue-500 font-semibold mb-2">
          Order ID: {order.bundledUpID}
        </h3>
        <div className="flex flex-row justify-between">
          <p className="text-amber-500 mb-2">
            Order Date: {order.datetime.date}
          </p>
          <p className="text-amber-500 mb-2">
            Order Time: {order.datetime.time}
          </p>
        </div>
        <ul className="list-disc pl-4">
          {order.products &&
            order.products.map((product) => (
              <li key={product.id} className="mb-2">
                {product.productName} - Quantity: {product.quantity} - Price:{" "}
                <span className="text-green-600">R {product.price}</span>
              </li>
            ))}
        </ul>
        <p className="mt-2 text-2xl font-bold">
          Total:{" "}
          <span className="text-green-600">
            R {calculateTotal(order.products)}
          </span>
        </p>
      </div>
    );
  };

  const calculateTotal = (products) => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div>
      <h1 className="fixed bg-primary/30 backdrop-blur-md shadow-xl w-full text-4xl text-gray-50 text-center p-4 font-bold">
        Order History
      </h1>
      <div className="flex items-center justify-center bg-primary h-screen overflow-y-auto pt-[44rem] pb-8">
        <Sidebar />
        <div className="flex flex-col bg-object rounded-3xl text-gray-50 items-center justify-center w-[56rem] mr-8 py-10">
          <div className="grid grid-cols-2 gap-4">
            {orderHistory.map((order) => renderOrder(order))}
          </div>
          <motion.button
            className="bg-red-600 text-gray-50 px-4 py-2 rounded-full my-4"
            onClick={handleClearHistory}
            whileTap={{ scale: 0.8 }}
          >
            Clear Order History
          </motion.button>
        </div>

        <MenuBar />
      </div>
    </div>
  );
};

export default OrderHistory;
