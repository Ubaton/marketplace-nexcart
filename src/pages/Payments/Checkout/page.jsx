"use client";

import Checkout from "@/content/Checkout/page";
import { useState } from "react";

const CheckoutPage = () => {
  const [cart, setCart] = useState(/* Your cart data here */);

  const handleCheckout = (cart) => {
    // Your checkout logic using the cart data
    console.log("Checkout with cart:", cart);
    // Redirect to the confirmation page or perform further actions
    // router.push("/confirmation");
  };

  return (
    <div>
      <Checkout cart={cart} onCheckout={handleCheckout} />
    </div>
  );
};

export default CheckoutPage;
