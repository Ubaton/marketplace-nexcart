"use client";

import MenuBar from "@/components/MenuBar/page";
import Sidebar from "@/components/SideBar/page";
import React, { useState, useEffect } from "react";

const dummyOrderHistory = [
  {
    id: 1,
    date: "2023-01-10",
    products: [
      { id: 101, name: "Product A", quantity: 2, price: 25 },
      { id: 102, name: "Product B", quantity: 1, price: 30 },
    ],
    total: 80,
  },
  {
    id: 2,
    date: "2023-01-15",
    products: [
      { id: 103, name: "Product C", quantity: 1, price: 40 },
      { id: 104, name: "Product D", quantity: 3, price: 15 },
    ],
    total: 85,
  },
];

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState(dummyOrderHistory);

  useEffect(() => {
    // Fetch order history from your backend API
    // Update the orderHistory state
    // Example:
    // fetchOrderHistory().then(data => setOrderHistory(data));
  }, []);

  return (
    <div className="flex items-center justify-center bg-primary h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col bg-object rounded-3xl text-gray-50 items-center justify-center w-[760px] mr-8">
        <h2 className="text-3xl font-bold mb-4 p-2">Order History</h2>

        {orderHistory.map((order) => (
          <div key={order.id} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Order ID: {order.id}</h3>
            <p className="mb-2">Order Date: {order.date}</p>

            {/* Display ordered products */}
            <ul className="list-disc pl-4">
              {order.products.map((product) => (
                <li key={product.id} className="mb-2">
                  {product.name} - Quantity: {product.quantity} - Price: $
                  {product.price}
                </li>
              ))}
            </ul>

            <p className="mt-2 font-semibold">Total: ${order.total}</p>
          </div>
        ))}
      </div>
      <MenuBar />
    </div>
  );
};

export default OrderHistory;