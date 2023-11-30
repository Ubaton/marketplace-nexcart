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
    <div className="bg-primary">
      <div className="flex  items-center justify-center min-h-screen overflow-hidden">
        <div className="bg-object rounded-3xl p-8">
          <div>
            <h1 className="text-4xl text-center font-extrabold ">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800">
                NexCart
              </span>
            </h1>
            <p className="text-center text-white mt-1">
              Your Ultimate Shopping Experience
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8">
            <h2 className="text-2xl text-gray-50 font-bold mb-4">Register</h2>
            <form>
              <div className="grid grid-cols-2 space-x-4">
                <div className="flex flex-col">
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
                    type="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
                  />
                  <input
                    type="confirm_password"
                    placeholder="Confirm Password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
            <p className="text-gray-50">
              Already have an account?{" "}
              <span
                className="mt-4 text-sm text-blue-500 cursor-pointer"
                onClick={handleLogin}
              >
                Login here.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
