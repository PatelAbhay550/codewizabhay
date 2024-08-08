import Link from "next/link";
import React from "react";

const FeaturedTutorials = async () => {
  let data = [];
  let error = "";

  try {
    const res = await fetch("http://localhost:3000/api?collection=featured", {
      next: { revalidate: 3600 }, // Revalidate cache every hour (3600 seconds)
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    data = await res.json();
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-600">{error}</div>;
  }

  return (
    <section className="featured-tutorials py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Tutorials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={tutorial.thumbnail}
                alt={tutorial.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <Link href={`/tutorials/blogs/${tutorial.title}`}>
                  <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
                  <p className="text-gray-700">{tutorial.description}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTutorials;
