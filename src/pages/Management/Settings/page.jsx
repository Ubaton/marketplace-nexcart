"use client";

import React, { useState } from "react";
import Select from "react-select";

const productFilterOptions = [
  { value: "Electronics", label: "Electronics" },
  { value: "Furniture", label: "Furniture" },
  // Add more options as needed
];

const Settings = () => {
  const [userSettings, setUserSettings] = useState({
    address: "",
    deliveryLocation: "",
    productFilters: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserSettings({
      ...userSettings,
      [name]: value,
    });
  };

  const handleProductFilterChange = (selectedFilters) => {
    setUserSettings({
      ...userSettings,
      productFilters: selectedFilters.map((filter) => filter.value),
    });
  };

  const handleSubmit = () => {
    // Perform the necessary logic to update user settings
    // You can use API calls or other methods to update the backend
    console.log("User Settings Updated:", userSettings);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 p-2">Settings</h2>

      <div className="mb-8">
        <label className="block text-gray-50 text-sm font-semibold mb-2">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={userSettings.address}
          onChange={handleInputChange}
          className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
        />
      </div>

      <div className="mb-8">
        <label className="block text-gray-50 text-sm font-semibold mb-2">
          Delivery Location
        </label>
        <input
          type="text"
          name="deliveryLocation"
          value={userSettings.deliveryLocation}
          onChange={handleInputChange}
          className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
        />
      </div>

      <div className="mb-8">
        <label className="block text-gray-50 text-sm font-semibold mb-2">
          Product Filters
        </label>
        <Select
          isMulti
          options={productFilterOptions}
          value={productFilterOptions.filter((option) =>
            userSettings.productFilters.includes(option.value)
          )}
          onChange={handleProductFilterChange}
        />
      </div>

      <button
        className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-[5.8rem] py-2 rounded-full"
        onClick={handleSubmit}
      >
        Update Settings
      </button>
    </div>
  );
};

export default Settings;
