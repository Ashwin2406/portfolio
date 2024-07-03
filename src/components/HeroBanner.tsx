import React from "react";
import Image from "next/image";
import background from "../assets/backgrounds/bg4.jpg";
import { Dock, DockIcon } from "./Dock";

import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Header from "./Header";

export default function HeroBanner() {
  const SocialDock = () => {
    return (
      <Dock>
        <DockIcon>
          <FaLinkedin className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <MdOutlineMailOutline className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <FaInstagram className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <FaWhatsapp className="h-6 w-6" />
        </DockIcon>
      </Dock>
    );
  };
  return (
    <div className="flex relative">
      <Image className="absolute top-0 z-0" alt="background" src={background} />
      <div className="w-full h-screen text-white bg-gradient-to-r from-black to-transparent absolute">
        {/* <Header /> */}
        <div className="self-start  flex ">
          <div className="h-96 max-w-screen-2xl mx-auto flex self-start flex-col justify-center items-start px-36">
            <h1 className="text-l  font-bold ">HELLO</h1>
            <h1 className="text-4xl  font-bold">I AM ASHWIN BERNARD</h1>
            <p className="text-base text-sm mt-2 py-4">
              With three years of expertise, I am a software engineer that
              enjoys developing efficient, elegant, and user-friendly solutions.
            </p>
          </div>
        </div>
        <SocialDock />
      </div>
    </div>
  );
}
