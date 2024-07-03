"use client";

import Image from "next/image";
import { useState } from "react";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import { FiMenu } from "react-icons/fi";

type NavItem = {
  label: string;
  link?: string;
  menu?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "About",
    link: "#",
  },
  {
    label: "Resume",
    link: "#",
  },
  {
    label: "Portfolio",
    link: "#",
  },
];

export default function Header() {
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto flex justify-between px-4 py-5 text-sm lg:px-8">
      {/* <Image
          src={logo}
          alt="banner background"
          className="w-1/6 px-4"
        ></Image> */}
      <div className="hidden md:flex items-center gap-4 transition-all text-sm">
        {navItems.map((item, key) => (
          <Link
            key={key}
            href={item.link ?? "#"}
            className="relative group  px-2 py-3 transition-all hover:text-sky-800 hover:scale-125 cursor-pointer "
          >
            <p className="flex items-center gap-2 text-sm font-semibold">
              <span>{item.label}</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
