import Image from "next/image";
import React from "react";
import ScrollUp from "./ScrollUp";

export default function Header() {
  return (
    <>
      <div className="h-20 w-full bg-foreground text-background fixed top-0 z-50 ">
        <div className="wrapper flex h-full justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" width={40} height={40} alt="logo" />
            <span className="text-4xl font-bold">WCE 2025</span>
          </div>
          <div className="flex space-x-5 items-center">
            <p className="hidden lg:block">MENU</p>
            <div className={`hamburger mt-1`}>
              <span className="bg-background"></span>
              <span className="bg-background"></span>
              <span className="bg-background"></span>
            </div>
          </div>
        </div>
      </div>
      <ScrollUp />
    </>
  );
}
