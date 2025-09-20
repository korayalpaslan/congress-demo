"use client";
import React, { useState } from "react";
import { Tabs, Tab } from "@heroui/react";

const agenda = [
  {
    day: 1,
    date: "14 April 2026",
    content: [
      {
        title: "08:00 - 09:00 | Registration & Welcome Coffee",
        description:
          "Start your day by registering and networking over coffee with fellow innovators, researchers, and industry leaders.",
      },
      {
        title: "09:00 - 10:30 | Opening Remarks & Congress Overview",
        description:
          "An official welcome by the organizing committee and a brief overview of the goals, themes, and structure of the congress.",
      },
      {
        title:
          "10:30 - 12:30 | Panel Discussion: AI, Robotics, and the Future of Work",
        description:
          "An official welcome by the organizing committee and a brief overview of the goals, themes, and structure of the congress.",
      },
      {
        title: "12:30 - 14:00 | Lunch Break",
        description: "",
      },
      {
        title: "14:15 - 16:15 | Startup Spotlight: Emerging Tech Innovators",
        description:
          "Early-stage startups pitch breakthrough technologies and ideas transforming their sectors.",
      },
    ],
  },
  {
    day: 2,
    date: "15 April 2026",
    content: [
      {
        title: "08:30 - 09:00 | Morning Coffee & Networking",
        description: "",
      },
      {
        title: "09:00 - 10:00 | Keynote: Building Resilient Tech Ecosystems",
        description:
          "A global policy leader shares insights into how nations and corporations can foster sustainable innovation.",
      },
      {
        title: "10:00 - 12:00 | Panel Discussion: Blockchain Beyond Crypto",
        description:
          "Explore real-world applications of decentralized technologies in supply chain, identity, governance, and more.",
      },
      {
        title: "12:00 - 14:00 | Lunch Break",
        description: "",
      },
      {
        title:
          "14:00 - 15:30 | Regional Spotlight: Innovations from Southeast Asia & Africa",
        description:
          "Exploring unique, scalable technologies solving local and global challenges.",
      },
    ],
  },
  {
    day: 3,
    date: "16 April 2026",
    content: [
      {
        title: "08:30 - 09:00 | Morning Coffee & Networking",
        description: "",
      },
      {
        title:
          "09:00 - 10:00 | Keynote: Humanity in the Age of AGI (Artificial General Intelligence)",
        description:
          "Philosophical and technical perspectives on the role of AGI in society.",
      },
      {
        title:
          "10:00 - 11:00 | Roundtable: Education & Skills for the Future Workforce",
        description:
          "How education systems must evolve to prepare for the jobs of the future.",
      },
      {
        title: "11:00 - 11:30 | Break & Group Photo",
        description: "",
      },
      {
        title: "11:30 - 12:00 | Closing Ceremony & Farewell",
        description:
          "Final words, acknowledgments, and future congress announcements.",
      },
    ],
  },
];

export default function Agenda() {
  const [selected, setSelected] = useState("1");

  return (
    <div className="py-20">
      <div className="wrapper flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-20">
        <div className="lg:w-1/4 flex flex-col space-y-5">
          <h1 className=" text-4xl lg:text-5xl font-bold leading-10 lg:leading-12">
            Schedule & Agenda
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            eius a quibusdam neque dicta, perspiciatis quo aliquid vel veritatis
            fuga.
          </p>
        </div>
        <div className="lg:w-3/4">
          <div className="flex w-full flex-col">
            <Tabs
              aria-label="Options"
              classNames={{
                tabList:
                  "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-[#172554]",
                tab: "px-0 h-12 lg:w-[300px]",
                tabContent:
                  "group-data-[selected=true]:text-[#172554] group-data-[selected=true]:font-bold",
              }}
              color="primary"
              variant="underlined"
            >
              {agenda.map((day) => {
                return (
                  <Tab key={day.day} title={day.date}>
                    <ul className="space-y-5 mt-5 lg:w-3/4">
                      {day.content.map((agenda, i) => {
                        return (
                          <li key={i}>
                            <p className="font-bold">{agenda.title}</p>
                            <p>{agenda.description}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </Tab>
                );
              })}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
