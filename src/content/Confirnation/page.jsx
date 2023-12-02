"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Confetti from "./Confetti ";

const Confirmation = () => {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    // Display the message and start the spinner
    setRedirecting(true);

    // Redirect to the home page after 4 seconds
    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 4000);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div className=" bg-primary ">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center min-h-screen overflow-hidden">
          <div className="mb-4">
            <CheckCircle
              size={48}
              className="text-green-500 inline-block m-8"
            />
            <h2 className="text-gray-50 text-2xl font-bold mb-4">
              Order Confirmed!
            </h2>
            <p className="text-gray-50">
              Thank you for your order. Your purchase has been confirmed.
            </p>
            <p className="text-gray-50">
              You will receive an email with the order details shortly.
            </p>
            {/* Display the message and spinner */}
            {redirecting && (
              <div className="mt-8">
                <p className="text-gray-50">
                  You will be redirected to your order page
                </p>
                <div className="spinner"></div>
                <Confetti />
              </div>
            )}
            <div className="mt-8">
              <Link href="/">
                <span className="text-blue-500 hover:underline">
                  Back to Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add a simple CSS spinner */}
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid #0fc458;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
          margin: 16px auto;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Confirmation;
