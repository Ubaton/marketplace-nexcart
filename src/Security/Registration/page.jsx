"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Registration = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    console.log("Registering with:", { email, password });
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="">
      <h2 className="text-2xl text-gray-50 font-bold mb-4">Register</h2>
      <form>
        <div className="grid grid-cols-2 space-x-4">
          <div className="flex flex-col p-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
            />
            <input
              type="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
            />
          </div>
          <div className="flex flex-col p-4">
            <input
              type="confirm_password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
            />
            <input
              type="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
            />
            <button
              type="button"
              onClick={handleRegister}
              className="w-full bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white p-2 rounded-full"
            >
              Register
            </button>
          </div>
        </div>
      </form>
      <p>
        Already have an account?{" "}
        <span
          className="mt-4 text-sm text-blue-500 cursor-pointer"
          onClick={handleLogin}
        >
          Login here.
        </span>
      </p>
    </div>
  );
};

export default Registration;
