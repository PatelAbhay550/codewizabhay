import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { FaDownload } from "react-icons/fa";

const Resources = () => {
  return (
    <>
      <div className="pt-24 pb-8 px-5 bg-[#1E1E1E] text-white min-h-screen selection:bg-green-700 selection:text-white">
        <nav className="px-11 fixed top-0 w-full py-3 z-30">
          <Navbar />
        </nav>
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-4 cursor-default">
            Resources
          </h1>
          <p className="text-center text-lg cursor-default">
            Explore our collection of valuable coding resources to aid your
            learning journey.
          </p>
        </header>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search Resources..."
            className="p-2 rounded-l-md w-2/3 md:w-1/3 focus:outline-none text-black"
          />
          <button className="p-2 bg-green-500 rounded-r-md hover:bg-green-600">
            Search
          </button>
        </div>

        {/* Resource Categories */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 cursor-default">
            Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#282828] p-4 rounded-md hover:bg-[#3c3c3c]">
              <h3 className="text-2xl font-semibold mb-2 cursor-default">
                Cheat Sheets
              </h3>
              <p>
                Quick reference guides for various programming languages and
                frameworks.
              </p>
            </div>
            <div className="bg-[#282828] p-4 rounded-md hover:bg-[#3c3c3c]">
              <h3 className="text-2xl font-semibold mb-2 cursor-default">
                Tools
              </h3>
              <p>
                Useful tools and utilities to enhance your coding efficiency.
              </p>
            </div>
            <div className="bg-[#282828] p-4 rounded-md hover:bg-[#3c3c3c]">
              <h3 className="text-2xl font-semibold mb-2 cursor-default">
                External Links
              </h3>
              <p>
                Curated list of valuable external resources for deeper learning.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 cursor-default">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#282828] p-4 rounded-md flex items-center justify-between hover:bg-[#3c3c3c]">
              <div>
                <h3 className="text-2xl font-semibold mb-2 cursor-default">
                  HTML Cheat Sheet
                </h3>
                <p>A comprehensive guide to HTML tags and attributes.</p>
              </div>
              <FaDownload className="text-3xl cursor-pointer hover:text-green-500" />
            </div>
            <div className="bg-[#282828] p-4 rounded-md flex items-center justify-between hover:bg-[#3c3c3c]">
              <div>
                <h3 className="text-2xl font-semibold mb-2 cursor-default">
                  CSS Grid Cheat Sheet
                </h3>
                <p>Master CSS Grid with this handy reference.</p>
              </div>
              <FaDownload className="text-3xl cursor-pointer hover:text-green-500" />
            </div>
            <div className="bg-[#282828] p-4 rounded-md flex items-center justify-between hover:bg-[#3c3c3c]">
              <div>
                <h3 className="text-2xl font-semibold mb-2 cursor-default">
                  JavaScript Tools
                </h3>
                <p>Essential tools for every JavaScript developer.</p>
              </div>
              <FaDownload className="text-3xl cursor-pointer hover:text-green-500" />
            </div>
          </div>
        </section>
      </div>
      <footer className="2">
        <Footer />
      </footer>
    </>
  );
};

export default Resources;
