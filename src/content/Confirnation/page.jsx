import React from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const Confirmation = () => {
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
    </div>
  );
};

export default Confirmation;
