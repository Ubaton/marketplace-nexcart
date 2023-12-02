"use client";

import MenuBar from "@/components/MenuBar/page";
import Sidebar from "@/components/SideBar/page";
import React, { useState, useEffect } from "react";

const dummyTransactionHistory = [
  { id: 1, type: "Deposit", amount: 100, date: "2023-01-01" },
  { id: 2, type: "Withdrawal", amount: 50, date: "2023-01-05" },
  // Add more transactions as needed
];

// Dummy product data for illustration (replace with actual data from your backend)
const dummyProducts = [
  { id: 1, name: "Product A", value: 50, dateSold: "2023-01-02" },
  { id: 2, name: "Product B", value: 30, dateSold: "2023-01-03" },
  // Add more products as needed
];

const Wallet = () => {
  const [transactionHistory, setTransactionHistory] = useState(
    dummyTransactionHistory
  );
  const [addFundsAmount, setAddFundsAmount] = useState(0);
  const [withdrawFundsAmount, setWithdrawFundsAmount] = useState(0);

  const handleAddFunds = () => {
    // Add logic to send a request to your backend to add funds
    // Update the transaction history accordingly
  };

  const handleWithdrawFunds = () => {
    // Add logic to send a request to your backend to withdraw funds
    // Update the transaction history accordingly
  };

  useEffect(() => {
    // Fetch transaction history from your backend API
    // Update the transactionHistory state
    // Example:
    // fetchTransactionHistory().then(data => setTransactionHistory(data));
  }, []);

  // Placeholder for Net Worth calculation
  const calculateNetWorth = () => {
    const totalDeposits = transactionHistory
      .filter((transaction) => transaction.type === "Deposit")
      .reduce((total, transaction) => total + transaction.amount, 0);

    const totalWithdrawals = transactionHistory
      .filter((transaction) => transaction.type === "Withdrawal")
      .reduce((total, transaction) => total + transaction.amount, 0);

    // Placeholder for other calculations, investments, etc.

    return totalDeposits - totalWithdrawals;
  };

  // Placeholder for calculating total product value and total value of products sold
  const calculateProductValues = (timeFrame) => {
    // Adjust this logic based on your actual data structure and requirements
    const productsInTimeFrame = dummyProducts.filter(
      (product) =>
        // For example, consider products sold in the past 2 days
        // You may need to adjust this based on your specific use case
        new Date(product.dateSold) >= new Date(new Date().getTime() - timeFrame)
    );

    const totalProductValue = productsInTimeFrame.reduce(
      (total, product) => total + product.value,
      0
    );
    const totalValueOfProductsSold = productsInTimeFrame.reduce(
      (total, product) => total + product.value,
      0
    );

    return { totalProductValue, totalValueOfProductsSold };
  };

  return (
    <div className="flex items-center justify-center bg-primary h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col text-gray-50 items-center justify-center w-[760px] mr-8">
        <div className="bg-object rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">Wallet</h2>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-4">
              <p className="mb-4">Current Balance: RX.XX</p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Add Funds</h3>
                <div className="flex flex-col space-y-4">
                  <input
                    type="number"
                    value={addFundsAmount}
                    onChange={(e) => setAddFundsAmount(e.target.value)}
                    className="border border-input bg-input p-2 mr-2 rounded-full text-gray-50"
                  />
                  <button
                    onClick={handleAddFunds}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full"
                  >
                    Add Funds
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Withdraw Funds</h3>
                <div className="flex flex-col space-y-4">
                  <input
                    type="number"
                    value={withdrawFundsAmount}
                    onChange={(e) => setWithdrawFundsAmount(e.target.value)}
                    className="border border-input bg-input p-2 mr-2 rounded-full text-gray-50"
                  />
                  <button
                    onClick={handleWithdrawFunds}
                    className="bg-green-500 text-white px-4 py-2 rounded-full"
                  >
                    Withdraw Funds
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Transaction History
                </h3>
                <ul className="list-disc pl-4">
                  {transactionHistory.map((transaction) => (
                    <li key={transaction.id} className="mb-2">
                      {transaction.type} - R{transaction.amount} -{" "}
                      {transaction.date}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Net Worth</h3>
                <p className="mb-2">Total Deposits: R{calculateNetWorth()}</p>
                <p className="mb-2">
                  Total Withdrawals: R{calculateNetWorth()}
                </p>
                <p className="mb-2">
                  Total Product Value: R
                  {calculateProductValues(Infinity).totalProductValue}
                </p>
                <p className="mb-2">
                  Total Value of Products Sold (2 days): R
                  {
                    calculateProductValues(2 * 24 * 60 * 60 * 1000)
                      .totalValueOfProductsSold
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuBar />
    </div>
  );
};

export default Wallet;
