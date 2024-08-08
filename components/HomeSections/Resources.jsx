import React from "react";

const resources = [
  {
    id: 1,
    title: "HTML Cheat Sheet",
    description: "A quick reference guide for HTML tags and attributes.",
    link: "https://blogger.googleusercontent.com/img/a/AVvXsEigS1f4Y5wcSsi2z8Gev5mduLwVGmYxiigEyIJz9T9aFFBwP1dO6KmX1Sekq9RTfoAk99Qtk38_h4VTsZAGRwbiw_IMHvJ8IpCYKAn05Udk6FBbo4fXmzCips_IkekHvgMPyR-zr_Vd9ZISkaXKcLOqT503ixgPGjwcgFPTNIPJjoAuNBAVhpDstUsK8VE=s16000",
    downloadable: true,
  },
  {
    id: 2,
    title: "CSS Flexbox Guide",
    description:
      "Learn how to use Flexbox for layout with this comprehensive guide.",
    link: "/resources/css-flexbox-guide",
    downloadable: false,
  },
  {
    id: 3,
    title: "JavaScript ES6 Features",
    description: "An overview of the new features introduced in ES6.",
    link: "/resources/javascript-es6-features",
    downloadable: true,
  },
  {
    id: 4,
    title: "React Hooks",
    description:
      "Understand the power of hooks in React for state and lifecycle management.",
    link: "/resources/react-hooks",
    downloadable: false,
  },
  {
    id: 5,
    title: "Next.js Best Practices",
    description: "Best practices for building applications with Next.js.",
    link: "/resources/nextjs-best-practices",
    downloadable: false,
  },
  {
    id: 6,
    title: "Python Quick Reference",
    description: "A handy reference for Python syntax and standard library.",
    link: "/resources/python-quick-reference",
    downloadable: true,
  },
];

const ResourcesSection = () => {
  return (
    <section className="resources-section py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {resources.map((resource) => (
            <a
              href={resource.link}
              key={resource.id}
              target="_blank"
              className="block bg-white shadow-md rounded-lg overflow-hidden p-5 hover:bg-gray-200 transition duration-200"
            >
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-gray-700 mb-4">{resource.description}</p>
              {resource.downloadable && (
                <span className="inline-block bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                  Download
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
