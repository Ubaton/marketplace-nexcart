"use client";

import MenuBar from "@/components/MenuBar/page";
import Sidebar from "@/components/SideBar/page";
import React, { useState, useEffect } from "react";

const OrderHistory = ({ selectedOrderId, onSelectProduct }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Function to fetch order history from the backend API
    const fetchOrderHistory = async () => {
      try {
        // Make a GET request to fetch order history data from your backend API
        const response = await fetch("http://localhost:5000/products");
        if (response.ok) {
          const data = await response.json();
          // Update the order history state with the fetched data
          setOrderHistory(data);
        } else {
          console.error("Failed to fetch order history:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    };

    // Call the fetchOrderHistory function to fetch order history data when the component mounts
    fetchOrderHistory();
  }, []);

  // Filter the order history array based on the selected order ID
  const selectedOrder = orderHistory.find(
    (order) => order.id === selectedOrderId
  );

  const handleSelectProduct = (product) => {
    // Handle the selected product
    console.log("Selected Product:", product);
  };

  return (
    <div className="flex items-center justify-center bg-primary h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col bg-object rounded-3xl text-gray-50 items-center justify-center pb-12 w-[760px] mr-8">
        <h2 className="text-3xl font-bold mb-4 p-2">Order History</h2>

        <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
          {selectedOrder && (
            <div key={selectedOrder.id} className="bg-input rounded-3xl p-4">
              <h3 className="text-xl font-semibold mb-2">
                Order ID: {selectedOrder.id}
              </h3>
              <p className="mb-2">Order Date: {selectedOrder.date}</p>

              {/* Display ordered products */}
              <ul className="list-disc pl-4">
                {selectedOrder.products &&
                  selectedOrder.products.map((product) => (
                    <li key={product.id} className="mb-2">
                      {product.name} - Quantity: {product.quantity} - Price:{" "}
                      <span className="text-green-600">R {product.price}</span>
                    </li>
                  ))}
              </ul>

              <p className="mt-2 font-semibold">
                Total:{" "}
                <span className="text-green-600">R {selectedOrder.total}</span>
              </p>
            </div>
          )}
        </div>
      </div>

      <MenuBar />
    </div>
  );
};

export default OrderHistory;
