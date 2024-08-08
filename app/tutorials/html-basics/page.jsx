// pages/tutorials/html-basics/index.js
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const chapters = [
  {
    id: 1,
    title: "Introduction to HTML",
    description: "Learn the basics of HTML and how it structures a webpage.",
    link: "/tutorials/html-basics/1",
  },
  {
    id: 2,
    title: "HTML Elements",
    description: "Discover various HTML elements and their uses.",
    link: "/tutorials/html-basics/2",
  },
  {
    id: 3,
    title: "HTML Attributes",
    description: "Understand HTML attributes and how to use them.",
    link: "/tutorials/html-basics/3",
  },
  {
    id: 4,
    title: "HTML Headings",
    description: "Learn about HTML headings and their significance.",
    link: "/tutorials/html-basics/4",
  },
  {
    id: 5,
    title: "HTML Paragraphs",
    description: "Understand how to use paragraphs to structure text.",
    link: "/tutorials/html-basics/5",
  },
  {
    id: 6,
    title: "HTML Links",
    description: "Learn how to create hyperlinks in HTML.",
    link: "/tutorials/html-basics/6",
  },
  {
    id: 7,
    title: "HTML Lists",
    description: "Discover how to create ordered and unordered lists.",
    link: "/tutorials/html-basics/7",
  },
  {
    id: 8,
    title: "HTML Images",
    description: "Embed images into your HTML documents.",
    link: "/tutorials/html-basics/8",
  },
  {
    id: 9,
    title: "HTML Tables",
    description: "Create tables to organize data in a tabular format.",
    link: "/tutorials/html-basics/9",
  },
  {
    id: 10,
    title: "HTML Forms",
    description: "Learn how to create forms to collect user inputs.",
    link: "/tutorials/html-basics/10",
  },
  {
    id: 11,
    title: "HTML Media",
    description: "Embed images, audio, and video in your webpages.",
    link: "/tutorials/html-basics/11",
  },
  {
    id: 12,
    title: "HTML Semantics",
    description:
      "Use semantic HTML to improve the structure and accessibility of your webpages.",
    link: "/tutorials/html-basics/12",
  },
  {
    id: 13,
    title: "HTML Block and Inline Elements",
    description: "Understand the difference between block and inline elements.",
    link: "/tutorials/html-basics/13",
  },
  {
    id: 14,
    title: "HTML Iframes",
    description: "Learn how to embed content with iframes.",
    link: "/tutorials/html-basics/14",
  },
  {
    id: 15,
    title: "HTML Forms and Input",
    description: "Detailed guide on form elements and input types.",
    link: "/tutorials/html-basics/15",
  },
  {
    id: 16,
    title: "HTML Input Attributes",
    description: "Learn about the various attributes for input elements.",
    link: "/tutorials/html-basics/16",
  },
  {
    id: 17,
    title: "HTML Form Elements",
    description: "Discover the different form elements and their uses.",
    link: "/tutorials/html-basics/17",
  },
  {
    id: 18,
    title: "HTML Form Attributes",
    description: "Learn about the attributes used in form elements.",
    link: "/tutorials/html-basics/18",
  },
];

const HTMLBasics = () => {
  return (
    <>
      <nav className="px-11 fixed top-0 w-full py-3 z-30">
        <Navbar />
      </nav>
      <div className="pt-24 pb-8 px-5 bg-[#1E1E1E] text-white min-h-screen">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-4">HTML Basics</h1>
          <p className="text-center text-lg">
            Explore the fundamentals of HTML to build and structure webpages
            effectively.
          </p>
        </header>

        {/* Chapters List */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Chapters</h2>
          <div className="flex flex-col gap-6">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="bg-[#282828] p-4 rounded-md hover:bg-[#3c3c3c]"
              >
                <h3 className="text-2xl font-semibold mb-2">{chapter.title}</h3>
                <p className="mb-2">{chapter.description}</p>
                <a
                  href={chapter.link}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
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

export default HTMLBasics;
