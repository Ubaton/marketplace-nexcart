"use client";

import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiComponent = () => {
  const fire = (particleRatio, opts) => {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  };

  useEffect(() => {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [fire]);

  const defaults = {
    origin: { y: 0.7 },
  };

  const count = 200;

  return <div></div>;
};

export default ConfettiComponent;
