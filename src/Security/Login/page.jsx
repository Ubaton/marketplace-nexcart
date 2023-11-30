"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = ({ onSwitch }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { email, password });
  };

  const handleRegistration = () => {
    router.push("/registration");
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
          <span className="flex justify-center p-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Sign in with Google
            </button>
          </span>

          <div className="flex flex-col items-center justify-center p-8">
            <h2 className="text-2xl text-gray-50 font-bold mb-4">Login</h2>
            <form>
              <span className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
                />
              </span>
            </form>
            <button
              type="button"
              onClick={handleLogin}
              className="mt-2 bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-4 py-2 rounded-full"
            >
              Login
            </button>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-50">
              Don't have an account?{" "}
              <span
                className="mt-4 text-sm text-blue-500 cursor-pointer"
                onClick={handleRegistration}
              >
                Register here.
              </span>
            </p>

            <p className="text-gray-50">
              Forgot your password?{" "}
              <span
                className="mt-2 text-sm text-blue-500 cursor-pointer"
                onClick={handleRegistration}
              >
                Click here.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
