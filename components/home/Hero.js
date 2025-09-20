import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="h-[100svh] w-full relative">
      <Image
        src="/hero.jpg"
        className="object-cover object-bottom-right"
        alt="hero_image"
        fill
      />
      <div className="bg-gray-950/70 text-slate-50 absolute top-0 right-0 bottom-0 left-0">
        <div className="h-full w-full wrapper flex flex-col justify-center ">
          <h1 className="lg:max-w-2/3 text-4xl lg:text-5xl font-bold leading-10 lg:leading-16">
            World Congress on Emerging Technologies and Innovation 2025
          </h1>
          <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row mt-10">
            <div className="lg:w-1/2 flex space-x-5">
              <div className="w-1/2 lg:w-auto">
                <p className="lg:text-lg">April 14-16, 2026</p>
                <p className="font-light text-lg">İstanbul, Turkey</p>
              </div>
              <div>
                <Button className="bg-yellow-500 rounded-2xl font-bold text-blue-950">
                  REGISTER
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-5 text-sm">TIME REMAINING:</h2>
              <div className="grid grid-cols-4 gap-5">
                <div className="p-2 bg-gray-700/30 rounded-2xl flex flex-col items-center">
                  <p className="font-bold text-3xl text-yellow-200">15</p>
                  <p className="font-light">Days</p>
                </div>
                <div className="p-2 bg-gray-700/30 rounded-2xl flex flex-col items-center">
                  <p className="font-bold text-3xl text-yellow-200">04</p>
                  <p className="font-light">Hours</p>
                </div>
                <div className="p-2 bg-gray-700/30 rounded-2xl flex flex-col items-center">
                  <p className="font-bold text-3xl text-yellow-200">34</p>
                  <p className="font-light">Minutes</p>
                </div>
                <div className="p-2 bg-gray-700/30 rounded-2xl flex flex-col items-center">
                  <p className="font-bold text-3xl text-yellow-200">55</p>
                  <p className="font-light">Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
