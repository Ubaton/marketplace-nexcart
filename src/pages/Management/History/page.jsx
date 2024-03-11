"use client";

import MenuBar from "@/components/MenuBar/page";
import Sidebar from "@/components/SideBar/page";
import React, { useState, useEffect } from "react";

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

  const renderOrder = (order) => {
    return (
      <div key={order.bundledUpID} className="bg-input rounded-3xl p-4 w-auto">
        <h3 className="text-xl text-blue-500 font-semibold mb-2">
          Order ID: {order.bundledUpID}
        </h3>
        <divc className="flex flex-row justify-between">
          <p className="text-amber-500 mb-2">
            Order Date: {order.datetime.date}
          </p>
          <p className="text-amber-500 mb-2">
            Order Time: {order.datetime.time}
          </p>
        </divc>
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
    <div className="flex items-center justify-center bg-primary h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col bg-object rounded-3xl text-gray-50 items-center justify-center pb-12 w-[980px] mr-8 px-12">
        <h2 className="text-3xl font-bold mb-4 p-2">Order History</h2>

        <div className="grid grid-cols-2 gap-4">
          {orderHistory.map((order) => renderOrder(order))}
        </div>
      </div>

      <MenuBar />
    </div>
  );
};

export default OrderHistory;
