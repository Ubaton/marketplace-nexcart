"use client";

import React, { useState } from "react";
// import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  // const router = useRouter()

  // const logout = () => {
  //   router.push("/logout")
  // }

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in with:", { email, password });
  };

  const handleRegister = () => {
    // Implement your registration logic here
    console.log("Registering with:", { email, password });
  };

  const handleForgetPassword = () => {
    // Implement your forget password logic here
    console.log("Forget password for:", email);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {isLogin ? (
          <>
            <h2 className="text-2xl text-gray-50 font-bold mb-4">Login</h2>
            <form>
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
              <button
                type="button"
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white p-2 rounded-full"
              >
                Login
              </button>
            </form>
            <p
              className="mt-4 text-sm text-blue-500 cursor-pointer"
              onClick={() => setIsLogin(false)}
            >
              Don't have an account? Register here.
            </p>
            <p
              className="mt-2 text-sm text-blue-500 cursor-pointer"
              onClick={() => setIsLogin(false)}
            >
              Forgot your password? Click here.
            </p>
          </>
        ) : (
          <div className="bg-object p-4 rounded-3xl">
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
                    onChange={(e) => setphone(e.target.value)}
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
            <p
              className="mt-4 text-sm text-blue-500 cursor-pointer"
              onClick={() => setIsLogin(true)}
            >
              Already have an account? Login here.
            </p>
          </div>
        )}

        {!isLogin && (
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Forgot your password? Enter your email:
            </p>
            <form>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-2 border-indigo-950 text-gray-50 h-10 w-auto p-2 rounded-full"
              />
              <button
                type="button"
                onClick={handleForgetPassword}
                className="w-auto bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white p-2 rounded-full"
              >
                Reset Password
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
