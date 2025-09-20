"use client";

import { useState, useEffect } from "react";

export function useCountDown() {
  const countDownDate = new Date("2025-10-14T08:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(null); // avoid SSR hydration mismatch

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = countDownDate - now;
    const total = Math.max(difference, 0);

    return {
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((total % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((total % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    // Only runs on client
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}
