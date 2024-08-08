"use client";
// pages/resources/html-basics/[chapterId]/index.js
import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const chapters = [
  {
    id: 1,
    title: "Introduction to HTML",
    content: "This is the content of Introduction to HTML.",
  },
  {
    id: 2,
    title: "HTML Elements",
    content: "This is the content of HTML Elements.",
  },
  {
    id: 3,
    title: "HTML Attributes",
    content: "This is the content of HTML Attributes.",
  },
  {
    id: 4,
    title: "HTML Headings",
    content: "This is the content of HTML Headings.",
  },
  {
    id: 5,
    title: "HTML Paragraphs",
    content: "This is the content of HTML Paragraphs.",
  },
  { id: 6, title: "HTML Links", content: "This is the content of HTML Links." },
  { id: 7, title: "HTML Lists", content: "This is the content of HTML Lists." },
  {
    id: 8,
    title: "HTML Images",
    content: "This is the content of HTML Images.",
  },
  {
    id: 9,
    title: "HTML Tables",
    content: "This is the content of HTML Tables.",
  },
  {
    id: 10,
    title: "HTML Forms",
    content: "This is the content of HTML Forms.",
  },
  {
    id: 11,
    title: "HTML Media",
    content: "This is the content of HTML Media.",
  },
  {
    id: 12,
    title: "HTML Semantics",
    content: "This is the content of HTML Semantics.",
  },
  {
    id: 13,
    title: "HTML Block and Inline Elements",
    content: "This is the content of HTML Block and Inline Elements.",
  },
  {
    id: 14,
    title: "HTML Iframes",
    content: "This is the content of HTML Iframes.",
  },
  {
    id: 15,
    title: "HTML Forms and Input",
    content: "This is the content of HTML Forms and Input.",
  },
  {
    id: 16,
    title: "HTML Input Attributes",
    content: "This is the content of HTML Input Attributes.",
  },
  {
    id: 17,
    title: "HTML Form Elements",
    content: "This is the content of HTML Form Elements.",
  },
  {
    id: 18,
    title: "HTML Form Attributes",
    content: "This is the content of HTML Form Attributes.",
  },
];

const ChapterPage = () => {
  const router = useRouter();
  const { chapterId } = router.query;

  if (!chapterId) {
    return <div>Loading...</div>;
  }

  const chapter = chapters.find((chap) => chap.id === parseInt(chapterId));

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <>
      <nav className="px-11 fixed top-0 w-full py-3 z-30">
        <Navbar />
      </nav>
      <div className="pt-24 pb-8 px-5 bg-[#1E1E1E] text-white min-h-screen">
        <div className="container mx-auto mt-16">
          <h1 className="text-4xl font-bold mb-4">{chapter.title}</h1>
          <div>{chapter.content}</div>
        </div>
      </div>
      <footer className="mt-8">
        <Footer />
      </footer>
    </>
  );
};

export default ChapterPage;
