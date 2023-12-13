"use client";

import React, { useState } from "react";
import Select from "react-select";
import MenuBar from "@/components/MenuBar/page";
import Sidebar from "@/components/SideBar/page";

const productFilterOptions = [
  "Electronics",
  "Furniture",
  "Clothing",
  "Books",
  "Appliances",
  "Toys",
  "Sports Equipment",
  "Beauty Products",
  "Home Decor",
  "Kitchenware",
  "Jewelry",
  "Outdoor Gear",
].map((value) => ({ value, label: value }));

const Settings = () => {
  const [userSettings, setUserSettings] = useState({
    address: {
      HOUSENUMBER: "",
      STREET: "",
      SUBURB: "",
      CITY: "",
      PROVINCE: "",
      COUNTRY: "",
      CODE: "",
    },
    deliveryLocation: "",
    productFilters: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserSettings((prevSettings) => ({
      ...prevSettings,
      address: {
        ...prevSettings.address,
        [name]: value,
      },
    }));
  };

  const handleProductFilterChange = (selectedFilters) => {
    setUserSettings((prevSettings) => ({
      ...prevSettings,
      productFilters: selectedFilters.map((filter) => filter.value),
    }));
  };

  const handleSubmit = () => {
    console.log("User Settings Updated:", userSettings);
  };

  return (
    <div className="bg-primary p-8">
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
                {Object.entries(userSettings.address).map(
                  ([fieldName, fieldValue]) => (
                    <input
                      key={fieldName}
                      type="text"
                      name={fieldName}
                      value={fieldValue}
                      onChange={handleInputChange}
                      placeholder={fieldName.replace(/([A-Z])/g, " $1").trim()}
                      className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-full p-2 rounded-full"
                    />
                  )
                )}
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
                  {Object.entries(userSettings.address).map(
                    ([label, value]) => (
                      <p key={label} className="p-2">
                        <span className="absolute">{label}:</span>
                        <span className="flex flex-col justify-end text-right p-2">
                          {value}
                        </span>
                      </p>
                    )
                  )}
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
