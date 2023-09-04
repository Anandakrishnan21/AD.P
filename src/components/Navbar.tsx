"use client";
import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { navLinks } from "@/utils/constants";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`w-full sticky top-0 z-[1] p-2 bg-white text-black ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
        <div className="text-xl font-medium">
          <Link href="#intro">
            <p>AD.P</p>
          </Link>
        </div>
        <div className=" hidden md:block">
          <ul className="list-none flex flex-row space-x-10 text-xl font-medium">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.id}>
                <li className="text-base">{link.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleButton}>
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="p-2 md:hidden">
          <div className="w-full">
            <ul className="list-none flex flex-col space-y-5 text-lg bg-black text-white rounded p-4">
              {navLinks.map((link) => (
                <Link href={link.url} key={link.id}>
                  <li className="text-base hover:bg-gray-900 duration-500 rounded p-2">
                    {link.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
