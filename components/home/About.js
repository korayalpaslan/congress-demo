import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="py-20">
      <div className="wrapper flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-20">
        <div className="lg:w-1/2 flex flex-col space-y-5">
          <h1 className=" text-4xl lg:text-5xl font-bold leading-10 lg:leading-12">
            Emerging Technologies and Innovation
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            suscipit earum illo ut quasi numquam non provident aliquid
            reprehenderit, quibusdam dolorum ullam, ipsum eum ab maxime
            recusandae fugiat consequatur excepturi saepe! Aliquam non eaque,
            architecto, magnam quia a esse quas blanditiis reiciendis molestiae
            vero eos. Possimus ducimus sequi praesentium laboriosam!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            eius a quibusdam neque dicta, perspiciatis quo aliquid vel veritatis
            fuga.
          </p>
        </div>
        <div className="lg:w-1/2 relative min-h-[400px]">
          <Image
            src="/about.jpg"
            fill
            className="object-cover aspect-square rounded-2xl"
            alt="About_Picture"
          />
        </div>
      </div>
    </div>
  );
}
