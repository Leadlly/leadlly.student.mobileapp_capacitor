"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Redirecting = () => {
  const [timeLeft, setTimeLeft] = useState(5);

  const router = useRouter();

  useEffect(() => {
    if (timeLeft < 1) {
      router.replace("/");
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeLeft]);
  return (
    <p className="text-sm text-primary font-medium">
      Redirecting in {timeLeft}s.
    </p>
  );
};

export default Redirecting;
