import React from "react";
import { FaPlay } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Introduction to HTML",
    description: "A beginner's guide to HTML and building web pages.",
    thumbnail: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "/videos/introduction-to-html",
  },
  {
    id: 2,
    title: "CSS Grid Layout",
    description: "Learn how to create complex layouts with CSS Grid.",
    thumbnail: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "/videos/css-grid-layout",
  },
  {
    id: 3,
    title: "JavaScript Async/Await",
    description:
      "Understand asynchronous programming with async/await in JavaScript.",
    thumbnail: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "/videos/javascript-async-await",
  },
  {
    id: 4,
    title: "React State Management",
    description:
      "An overview of state management in React using hooks and context.",
    thumbnail: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "/videos/react-state-management",
  },
  {
    id: 5,
    title: "Next.js Server-side Rendering",
    description: "Learn how to implement server-side rendering with Next.js.",
    thumbnail: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "/videos/nextjs-server-side-rendering",
  },
  {
    id: 6,
    title: "Python Data Structures",
    description:
      "A guide to understanding and using data structures in Python.",
    thumbnail: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "/videos/python-data-structures",
  },
];

const LatestVideos = () => {
  return (
    <section className="latest-videos py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Latest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video) => (
            <a
              href={video.link}
              key={video.id}
              className="block bg-white shadow-md rounded-lg overflow-hidden hover:bg-gray-200 transition duration-200"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                  <FaPlay size={50} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-700">{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;
