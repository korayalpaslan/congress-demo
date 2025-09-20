"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollUp = () => {
  const [showArrow, setshowArrow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowArrow(true);
      } else {
        setshowArrow(false);
      }
    });
  }, [showArrow]);
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {showArrow && (
        <div className="flex flex-col space-y-4">
          <div className="fixed z-50 h-8 w-8 bottom-5 right-5 cursor-pointer text-foreground bg-yellow-300 rounded-full flex flex-col justify-center items-center">
            <ArrowUp onClick={scrollToTopHandler} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollUp;
