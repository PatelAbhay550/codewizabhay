import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import React from "react";

const TutorialPage = async ({ params }) => {
  let data = [];
  let error = "";

  try {
    const queryParams = new URLSearchParams({
      title: params.name, // Include title if it exists
    });
    console.log(params.name);

    const url = `https://codewizabhay.vercel.app/api?collection=featured&title=${params.name}`;
    console.log("Fetching URL:", url); // Log URL for debugging

    const res = await fetch(url, {
      next: { revalidate: 3600 }, // Revalidate cache every hour (3600 seconds)
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    data = await res.json();
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-red-600">{`Error: ${error}`}</div>
    );
  }

  return (
    <>
      <nav className="px-11 fixed top-0 w-full py-3 z-30">
        <Navbar />
      </nav>
      <section className="w-full py-20 bg-gray-100">
        <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
          {data.length > 0 ? (
            <>
              <h1 className="text-4xl font-bold text-center mb-10">
                {data[0].title}
              </h1>
              <div className="flex flex-col items-center">
                <div className="md:w-1/2">
                  <img
                    src={data[0].thumbnail}
                    alt={data[0].title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 p-5">
                  <p className="text-gray-700 mb-4">{data[0].description}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500">No tutorials found</div>
          )}
        </div>
      </section>
      <footer className="2">
        <Footer />
      </footer>
    </>
  );
};

export default TutorialPage;
