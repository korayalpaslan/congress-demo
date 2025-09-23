import React from "react";
import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="bg-foreground text-background py-20">
      <div className="wrapper">
        <h1 className=" text-4xl lg:text-5xl font-bold leading-10 lg:leading-12 text-center mb-5">
          Sponsors
        </h1>
        <ul className="pt-5 pb-10 grid grid-cols-2 justify-items-center md:flex md:flex-wrap md:justify-center gap-10">
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] h-[100px] flex justify-center items-center">
            <Image
              src="/sponsor.png"
              width={300}
              height={200}
              className="w-full"
              alt="Sponsor Logo"
            />
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] h-[100px] flex justify-center items-center">
            <Image
              src="/sponsor2.png"
              width={300}
              height={200}
              className="w-full"
              alt="Sponsor Logo"
            />
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] h-[100px] flex justify-center items-center">
            <Image
              src="/sponsor3.png"
              width={300}
              height={200}
              className="w-full"
              alt="Sponsor Logo"
            />
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] h-[100px] flex justify-center items-center">
            <Image
              src="/sponsor.png"
              width={300}
              height={200}
              className="w-full"
              alt="Sponsor Logo"
            />
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] h-[100px] flex justify-center items-center">
            <Image
              src="/sponsor2.png"
              width={300}
              height={200}
              className="w-full"
              alt="Sponsor Logo"
            />
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] h-[100px] flex justify-center items-center">
            <Image
              src="/sponsor3.png"
              width={300}
              height={200}
              className="w-full"
              alt="Sponsor Logo"
            />
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] h-[100px] flex justify-center items-center">
            <Image
              src="/sponsor.png"
              width={300}
              height={200}
              className="w-full"
              alt="Sponsor Logo"
            />
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] h-[100px] flex justify-center items-center">
            <Image
              src="/sponsor2.png"
              width={300}
              height={200}
              className="w-full"
              alt="Sponsor Logo"
            />
          </li>
          <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] h-[100px] flex justify-center items-center">
            <Image
              src="/sponsor3.png"
              width={300}
              height={200}
              className="w-full"
              alt="Sponsor Logo"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
