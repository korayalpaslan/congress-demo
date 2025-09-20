import React from "react";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="wrapper border-t border-t-gray-300/30">
        <div className="pt-20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="w-full mb-5">
              <div className="flex items-center mb-5">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={400}
                  height={400}
                  className="w-[40px]"
                />
                <h1 className="text-4xl font-bold ml-2">WCE 2026</h1>
              </div>
              <div className="mb-5 text-sm">
                <h1 className="font-bold">Address</h1>
                <p className="font-light">Feneryolu Mahallesi No:34, Kadıköy</p>
              </div>
              <div className="text-sm">
                <h1 className="font-bold">Contact</h1>
                <p className="font-light">info@wce2026.com</p>
              </div>
            </div>
            <div>
              <ul className="mb-10 text-left md:text-right">
                <li className="font-light mb-3  cursor-pointer lg:text-sm">
                  About Congress
                </li>
                <li className="font-light mb-3 cursor-pointer lg:text-sm">
                  Invited Speakers
                </li>
                <li className="font-light mb-3 cursor-pointer lg:text-sm">
                  Schedule & Agenda
                </li>
              </ul>
              <ul className="flex">
                <li className="text-lg mb-3 mr-3 hover:text-primary transition-all duration-300 cursor-pointer">
                  <Instagram />
                </li>
                <li className="text-lg mb-3 mr-3 hover:text-primary transition-all duration-300 cursor-pointer">
                  <Linkedin />
                </li>
                <li className="text-lg mb-3 mr-3 hover:text-primary transition-all duration-300 cursor-pointer">
                  <Twitter />
                </li>
                <li className="text-lg hover:text-primary transition-all duration-300 cursor-pointer">
                  <Youtube />
                </li>
              </ul>
            </div>
          </div>
          <div className="pb-6 flex flex-col md:flex-row justify-between items-start">
            <ul className="mb-10 text-left md:text-left md:order-2 md:flex lg:text-sm">
              <li className="font-light mb-3 underline md:mr-2 lg:text-sm">
                Privacy Policy
              </li>
              <li className="font-light mb-3 underline md:mr-2 lg:text-sm">
                Terms & Conditions
              </li>
              <li className="font-light mb-3 underline">Cookies Policy</li>
            </ul>
            <p className="font-light lg:text-sm">
              &#169; WCE 2026 | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
