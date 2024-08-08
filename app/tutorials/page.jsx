import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const tutorials = [
  {
    id: 1,
    title: "HTML Basics",
    description: "Learn the basics of HTML.",
    icon: <FaHtml5 className="text-4xl text-orange-600" />,
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    description: "Understand the fundamentals of CSS.",
    icon: <FaCss3Alt className="text-4xl text-blue-600" />,
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "Master the essentials of JavaScript.",
    icon: <FaJs className="text-4xl text-yellow-600" />,
  },
  {
    id: 4,
    title: "React Introduction",
    description: "Get started with React.",
    icon: <FaReact className="text-4xl text-blue-400" />,
  },
  {
    id: 5,
    title: "Next.js Guide",
    description: "Learn Next.js step-by-step.",
    icon: <SiNextdotjs className="text-4xl text-black" />,
  },
  {
    id: 6,
    title: "Python Basics",
    description: "Begin your Python journey.",
    icon: <FaPython className="text-4xl text-green-600" />,
  },
];

const Tutorials = () => {
  return (
    <>
      <div className="pt-24 px-5 pb-8 bg-[#1E1E1E] text-white min-h-screen">
        <nav className="px-11 fixed top-0 w-full py-3 z-30">
          <Navbar />
        </nav>
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-4">Tutorials</h1>
          <p className="text-center text-lg">
            Explore our tutorials to learn various programming languages and
            frameworks.
          </p>
        </header>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search Tutorials..."
            className="p-2 rounded-l-md w-2/3 md:w-1/3 focus:outline-none text-black"
          />
          <button className="p-2 bg-blue-500 rounded-r-md hover:bg-blue-600">
            Search
          </button>
        </div>

        {/* Categories Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {tutorials.map((tutorial) => (
              <Link
                key={tutorial.id}
                href={`/tutorials/${tutorial.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <div className="bg-[#282828] p-4 rounded-md flex flex-col items-center text-center hover:bg-[#3c3c3c] cursor-pointer">
                  {tutorial.icon}
                  <h3 className="text-2xl font-semibold mt-2">
                    {tutorial.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Tutorials */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Featured Tutorials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <Link
                key={tutorial.id}
                href={`/tutorials/${tutorial.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <div className="bg-[#282828] p-4 rounded-md flex flex-col justify-between hover:bg-[#3c3c3c] cursor-pointer">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {tutorial.title}
                    </h3>
                    <p>{tutorial.description}</p>
                  </div>
                  {tutorial.icon}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <footer className="2">
        <Footer />
      </footer>
    </>
  );
};

export default Tutorials;
