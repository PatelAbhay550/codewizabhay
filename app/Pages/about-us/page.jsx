import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us selection:bg-green-700 selection:text-white pt-20 bg-gray-50 min-h-screen">
      <nav className="px-11 fixed top-0 w-full py-3 z-30">
        <Navbar />
      </nav>
      <div className="container mx-auto px-4 mb-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          About Us
        </h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg leading-8 mb-4">
            Welcome to CodeWiz, where we provide comprehensive coding tutorials
            and resources for aspiring developers. Our goal is to make coding
            accessible and enjoyable for everyone, from beginners to seasoned
            professionals.
          </p>
          <p className="text-gray-700 text-lg leading-8 mb-4">
            Our team consists of experienced developers who are passionate about
            teaching and sharing their knowledge. We cover a wide range of
            programming languages and frameworks, including HTML, CSS,
            JavaScript, React, Next.js, Python, and more.
          </p>
          <p className="text-gray-700 text-lg leading-8">
            Thank you for visiting CodeWiz. We hope you find our tutorials
            helpful and inspiring. Feel free to explore and start your coding
            journey with us!
          </p>
        </div>
      </div>
      <footer className="2">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUs;
