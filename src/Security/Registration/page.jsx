"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
                <div className="flex flex-col space-y-4 p-4">
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
                <div className="flex flex-col space-y-4 p-4">
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
              <div className="flex items-center justify-center p-4">
                <div className="flex flex-row items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 border border-gray-800 rounded bg-gray-50 focus:ring-3 focus:ring-sky-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-sky-600 dark:ring-offset-gray-800"
                    required
                  />

                  <label
                    htmlFor="remember"
                    className="flex flex-row ml-2 text-xs text-gray-50 font-medium"
                  >
                    By clicking Register, I consent to the{" "}
                    <Link
                      href="/privacypolicy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mt-4 ml-2 text-blue-400 hover:text-blue-500 cursor-pointer">
                        Privacy Policy
                      </span>
                    </Link>
                    <p className="ml-2 text-xs text-gray-50 font-medium">
                      with
                    </p>
                    <Link
                      href="/termsandconditions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mt-4 ml-2 text-blue-400 hover:text-blue-500 cursor-pointer">
                        Terms And Conditions
                      </span>
                    </Link>
                    . *
                  </label>
                </div>
              </div>
            </form>
            <p className="text-gray-50 text-xs p-4">
              Already have an account?{" "}
              <span
                className="mt-4 text-blue-400 hover:text-blue-500 cursor-pointer"
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
