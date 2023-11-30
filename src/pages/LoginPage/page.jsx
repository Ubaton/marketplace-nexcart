"use client";

import React, { useState } from "react";
import Login from "@/Security/Login/page";
import Registration from "@/Security/Registration/page";

const Security = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = (value) => {
    setIsLogin(value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="bg-object p-8 rounded-3xl shadow-md w-96">
        {isLogin ? (
          <Login onSwitch={handleSwitch} />
        ) : (
          <Registration onSwitch={handleSwitch} />
        )}
      </div>
    </div>
  );
};

export default Security;
