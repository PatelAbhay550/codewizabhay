"use client";
import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoIosSearch, IoIosMenu, IoIosClose } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" shadow-lg w-full px-5 h-[60px] bg-[#181516] flex items-center justify-between rounded-md text-white">
      <Link href="/">
        <div className="logo text-xl font-bold cursor-pointer">
          {"<CodeWiz/>"}
        </div>
      </Link>
      <div className="hidden md:flex items-center">
        <ul className="menu flex items-center list-none gap-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => toggleDropdown(false)}
          >
            <a href="#">Tutorials</a>
            {isDropdownOpen && (
              <ul className="dropdown absolute top-full mt-2 bg-[#282828] text-white rounded-md shadow-lg py-2">
                <li className="px-4 py-2 hover:bg-[#3c3c3c] flex items-center">
                  <FaHtml5 className="mr-2" />
                  <a href="/tutorials/html-basics">HTML</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#3c3c3c] flex items-center">
                  <FaCss3Alt className="mr-2" />
                  <a href="/tutorials/css">CSS</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#3c3c3c] flex items-center">
                  <FaJs className="mr-2" />
                  <a href="/tutorials/javascript">JavaScript</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#3c3c3c] flex items-center">
                  <FaReact className="mr-2" />
                  <a href="/tutorials/react">React</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#3c3c3c] flex items-center">
                  <SiNextdotjs className="mr-2" />
                  <a href="/tutorials/nextjs">Next.js</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#3c3c3c] flex items-center">
                  <FaPython className="mr-2" />
                  <a href="/tutorials/python">Python</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>
            <a href="/videos">Videos</a>
          </li>
          <li>
            <a href="/newsletters">Newsletters</a>
          </li>
          <li>
            <a href="/Pages/about-us">About Us</a>
          </li>
        </ul>
        <div className="search ml-4">
          <IoIosSearch className="text-3xl font-bold cursor-pointer" />
        </div>
      </div>
      <div className="flex md:hidden items-center">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#181516] text-white flex flex-col items-center py-4 md:hidden">
          <ul className="menu flex flex-col items-center list-none gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li
              className="relative"
              onClick={() => toggleDropdown(!isDropdownOpen)}
            >
              <a href="#">Tutorials</a>
              {isDropdownOpen && (
                <ul className="dropdown bg-[#282828] text-white rounded-md shadow-lg py-2 mt-2 w-full">
                  <li className="px-4 py-2 hover:bg-[#3c3c3c] flex items-center">
                    <FaHtml5 className="mr-2" />
                    <a href="/tutorials/html">HTML</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#3c3c3c] flex items-center">
                    <FaCss3Alt className="mr-2" />
                    <a href="/tutorials/css">CSS</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#3c3c3c] flex items-center">
                    <FaJs className="mr-2" />
                    <a href="/tutorials/javascript">JavaScript</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#3c3c3c] flex items-center">
                    <FaReact className="mr-2" />
                    <a href="/tutorials/react">React</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#3c3c3c] flex items-center">
                    <SiNextdotjs className="mr-2" />
                    <a href="/tutorials/nextjs">Next.js</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#3c3c3c] flex items-center">
                    <FaPython className="mr-2" />
                    <a href="/tutorials/python">Python</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
            <li>
              <a href="/videos">Videos</a>
            </li>
            <li>
              <a href="/newsletters">Newsletters</a>
            </li>
            <li>
              <a href="/Pages/about-us">About Us</a>
            </li>
          </ul>
          <div className="search mt-4">
            <IoIosSearch className="text-3xl font-bold cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
