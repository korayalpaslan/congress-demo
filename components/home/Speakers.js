import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";

export default function Speakers() {
  return (
    <div className="py-20">
      <div className="wrapper">
        <h1 className=" text-4xl lg:text-5xl font-bold leading-10 lg:leading-12 text-center">
          Invited Speakers
        </h1>
        <div className="grid lg:grid-cols-4 gap-10 py-10">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => {
            return (
              <Card className="h-[350px]" key={i}>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover object-top"
                  src={`/${i}.jpeg`}
                />
                <CardFooter className="absolute bg-white/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-sm">Dr. Jonathan Doe</p>
                  </div>
                  <Button
                    className="text-tiny"
                    color="primary"
                    radius="full"
                    size="sm"
                  >
                    BIO
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
