"use client";

import React, { useState } from "react";
import Select from "react-select";
import MenuBar from "@/components/MenuBar/page";
import Sidebar from "@/components/SideBar/page";

const productFilterOptions = [
  { value: "Electronics", label: "Electronics" },
  { value: "Furniture", label: "Furniture" },
  { value: "Clothing", label: "Clothing" },
  { value: "Books", label: "Books" },
  { value: "Appliances", label: "Appliances" },
  { value: "Toys", label: "Toys" },
  { value: "Sports Equipment", label: "Sports Equipment" },
  { value: "Beauty Products", label: "Beauty Products" },
  { value: "Home Decor", label: "Home Decor" },
  { value: "Kitchenware", label: "Kitchenware" },
  { value: "Jewelry", label: "Jewelry" },
  { value: "Outdoor Gear", label: "Outdoor Gear" },
];

const Settings = () => {
  // State to manage user settings
  const [userSettings, setUserSettings] = useState({
    address: {
      houseNumber: "",
      streetName: "",
      townSuburb: "",
      city: "",
      stateProvince: "",
      country: "",
      zipCode: "",
    },
    deliveryLocation: "",
    productFilters: [],
  });

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserSettings({
      ...userSettings,
      address: {
        ...userSettings.address,
        [name]: value,
      },
    });
  };

  // Function to handle changes in product filters dropdown
  const handleProductFilterChange = (selectedFilters) => {
    setUserSettings({
      ...userSettings,
      productFilters: selectedFilters.map((filter) => filter.value),
    });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Perform the necessary logic to update user settings
    // You can use API calls or other methods to update the backend
    console.log("User Settings Updated:", userSettings);
  };

  return (
    <div className="bg-primary">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center min-h-screen ">
          <Sidebar />
          <div className="bg-object rounded-3xl p-4 mr-8">
            <h2 className="text-3xl text-gray-50 font-bold mb-4 p-2">
              Settings
            </h2>

            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-4 text-gray-50">Address</h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="houseNumber"
                  value={userSettings.address.houseNumber}
                  onChange={handleInputChange}
                  placeholder="House Number"
                  className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-full p-2 rounded-full"
                />
                <input
                  type="text"
                  name="streetName"
                  value={userSettings.address.streetName}
                  onChange={handleInputChange}
                  placeholder="Street Name"
                  className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-full p-2 rounded-full"
                />
                <input
                  type="text"
                  name="townSuburb"
                  value={userSettings.address.townSuburb}
                  onChange={handleInputChange}
                  placeholder="Town/Suburb"
                  className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-full p-2 rounded-full"
                />
                <input
                  type="text"
                  name="city"
                  value={userSettings.address.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-full p-2 rounded-full"
                />
                <input
                  type="text"
                  name="stateProvince"
                  value={userSettings.address.stateProvince}
                  onChange={handleInputChange}
                  placeholder="State/Province"
                  className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-full p-2 rounded-full"
                />
                <input
                  type="text"
                  name="country"
                  value={userSettings.address.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-full p-2 rounded-full"
                />
                <input
                  type="text"
                  name="zipCode"
                  value={userSettings.address.zipCode}
                  onChange={handleInputChange}
                  placeholder="ZIP/Postal Code"
                  className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-full p-2 rounded-full"
                />
              </div>
            </div>

            <hr></hr>

            <div className="p-4 mb-8">
              <label className="text-3xl text-gray-50 font-bold mb-4 p-4">
                Product Filters
              </label>
              <Select
                isMulti
                options={productFilterOptions}
                value={productFilterOptions.filter((option) =>
                  userSettings.productFilters.includes(option.value)
                )}
                onChange={handleProductFilterChange}
                className="p-2"
              />
            </div>

            <button
              className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-[5.8rem] py-2 rounded-full mb-4"
              onClick={handleSubmit}
            >
              Update Settings
            </button>
            <hr></hr>

            <div className="flex flex-col justify-start text-left text-gray-50 p-4 mb-8">
              <h1 className="text-3xl text-center text-gray-50 font-bold mb-4 p-4">
                Your Current Address
              </h1>
              {userSettings.address &&
              Object.keys(userSettings.address).length > 0 ? (
                <div>
                  <p className="p-2">
                    <span className="absolute">House Number:</span>
                    <span className="flex flex-col justify-end text-right p-2">
                      {userSettings.address.houseNumber}
                    </span>
                  </p>
                  <p className="p-2">
                    <span className="absolute">Street Name:</span>
                    <span className="flex flex-col justify-end text-right p-2">
                      {userSettings.address.streetName}
                    </span>
                  </p>
                  <p className="p-2">
                    <span className="absolute">Town/Suburb:</span>
                    <span className="flex flex-col justify-end text-right p-2">
                      {userSettings.address.townSuburb}
                    </span>
                  </p>
                  <p className="p-2">
                    <span className="absolute">City:</span>
                    <span className="flex flex-col justify-end text-right p-2">
                      {userSettings.address.city}
                    </span>
                  </p>
                  <p className="p-2">
                    <span className="absolute">State/Province:</span>
                    <span className="flex flex-col justify-end text-right p-2">
                      {userSettings.address.stateProvince}
                    </span>
                  </p>
                  <p className="p-2">
                    <span className="absolute">Country:</span>
                    <span className="flex flex-col justify-end text-right p-2">
                      {userSettings.address.country}
                    </span>
                  </p>
                  <p className="p-2">
                    <span className="absolute">ZIP/Postal Code:</span>
                    <span className="flex flex-col justify-end text-right p-2">
                      {userSettings.address.zipCode}
                    </span>
                  </p>
                </div>
              ) : (
                <p>No address data available</p>
              )}
            </div>
          </div>
          <MenuBar />
        </div>
      </div>
    </div>
  );
};

export default Settings;
