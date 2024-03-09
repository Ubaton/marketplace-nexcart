import Login from "@/Security/Login/page";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <main>
      <Login />
      <ToastContainer />
    </main>
  );
};

export default Home;
