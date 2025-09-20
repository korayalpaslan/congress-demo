import React from "react";
import { Card, CardHeader, CardBody, Button } from "@heroui/react";

export default function Registration() {
  return (
    <div className="py-20">
      <div className="wrapper">
        <h1 className=" text-4xl lg:text-5xl font-bold leading-10 lg:leading-12 text-center mb-5">
          Registration
        </h1>
        <p className="text-center lg:w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse
          repellendus assumenda harum fuga nihil hic voluptas. Culpa, delectus
          ipsum!
        </p>
        <div className="grid lg:grid-cols-3 max-w-[900px] mx-auto gap-10 py-10">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Early Bird</h4>
              <h4 className="font-bold text-2xl mb-5">300 €</h4>
              <small className="text-default-500 text-sm mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                sequi consequuntur cum?
              </small>
              <ul className="space-y-2 list-disc ml-4 text-default-500 text-sm mb-10">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
              <Button className="w-full bg-yellow-300">REGISTER NOW</Button>
            </CardHeader>
            <CardBody className="overflow-visible py-2"></CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Standard</h4>
              <h4 className="font-bold text-2xl mb-5">350 €</h4>
              <small className="text-default-500 text-sm mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                sequi consequuntur cum?
              </small>
              <ul className="space-y-2 list-disc ml-4 text-default-500 text-sm mb-10">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
              <Button className="w-full">REGISTER NOW</Button>
            </CardHeader>
            <CardBody className="overflow-visible py-2"></CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Priority</h4>
              <h4 className="font-bold text-2xl mb-5">450 €</h4>
              <small className="text-default-500 text-sm mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                sequi consequuntur cum?
              </small>
              <ul className="space-y-2 list-disc ml-4 text-default-500 text-sm mb-10">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
              <Button className="w-full">REGISTER NOW</Button>
            </CardHeader>
            <CardBody className="overflow-visible py-2"></CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
