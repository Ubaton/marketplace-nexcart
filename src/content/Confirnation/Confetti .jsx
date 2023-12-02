"use client";

import React, { useEffect } from "react";
import confetti from "react-dom-confetti";

const Confetti = ({ active }) => {
  const config = {
    angle: 90,
    spread: 45,
    startVelocity: 45,
    elementCount: 50,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 0,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    opacity: 0.8,
    onComplete: () => console.log("Confetti finished!"),
  };

  useEffect(() => {
    if (active) {
      confetti(config);
    }
  }, [active]);

  return null;
};

export default Confetti;
