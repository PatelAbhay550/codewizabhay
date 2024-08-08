import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaArrowRight,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const HeroSection = () => {
  return (
    <main className="hero-section pt-40 bg-gray-800 text-white py-20 px-10 flex flex-col md:flex-row items-center justify-between">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 cursor-default">
          Master Coding with Easy-to-Follow Tutorials
        </h1>
        <p className="text-xl md:text-2xl mb-8 cursor-default ">
          Learn HTML, CSS, JavaScript, React, Next.js, Python, and more with our
          comprehensive guides and resources.
        </p>
        <a
          href="/tutorials"
          className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-md text-lg"
        >
          Get Started <FaArrowRight className="ml-2" />
        </a>
      </div>
      {/* Icons Section */}
      <div className="flex flex-wrap justify-center md:justify-start md:w-1/2 gap-10">
        <div className="flex flex-col items-center">
          <FaHtml5 size={140} className="text-red-600 mb-2 cursor-pointer" />
          <span className="cursor-pointer">HTML</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt size={140} className="text-blue-600 mb-2 cursor-pointer" />
          <span className="cursor-pointer">CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <FaJs size={140} className="text-yellow-700 mb-2 cursor-pointer" />
          <span className="cursor-pointer">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <FaReact size={140} className="text-blue-700 mb-2 cursor-pointer" />
          <span className="cursor-pointer">React</span>
        </div>
        <div className="flex flex-col items-center">
          <SiNextdotjs
            size={140}
            className="text-gray-900 mb-2 cursor-pointer"
          />
          <span className="cursor-pointer">Next.js</span>
        </div>
        <div className="flex flex-col items-center">
          <FaPython size={140} className="text-green-700 mb-2 cursor-pointer" />
          <span className="cursor-pointer">Python</span>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
