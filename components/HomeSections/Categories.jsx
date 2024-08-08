import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const categories = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 size={50} className="text-red-600" />,
    link: "/tutorials/html",
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt size={50} className="text-blue-600" />,
    link: "/tutorials/css",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJs size={50} className="text-yellow-500" />,
    link: "/tutorials/javascript",
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact size={50} className="text-blue-500" />,
    link: "/tutorials/react",
  },
  {
    id: 5,
    name: "Next.js",
    icon: <SiNextdotjs size={50} className="text-gray-900" />,
    link: "/tutorials/nextjs",
  },
  {
    id: 6,
    name: "Python",
    icon: <FaPython size={50} className="text-green-500" />,
    link: "/tutorials/python",
  },
];

const CategoriesSection = () => {
  return (
    <section className="categories-section py-20 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <a
              href={category.link}
              key={category.id}
              className="block bg-white shadow-md rounded-lg overflow-hidden text-center p-5 hover:bg-gray-100 transition duration-200"
            >
              <div className="flex justify-center mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold">{category.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
