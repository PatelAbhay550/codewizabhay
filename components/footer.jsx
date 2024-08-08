import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="selection:bg-green-700 selection:text-white w-full bg-[#181516] text-white py-10 px-5 border-t-4 border-green-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Quick Links */}
        <div className="mb-5 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="list-none">
            <li className="mb-2">
              <a href="/Pages/about-us" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/Pages/contact-us" className="hover:underline">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="/Pages/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="/Pages/terms-of-service" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-5 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              className="text-white hover:text-gray-400"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter Sign-Up */}
        <div>
          <h2 className="text-lg font-bold mb-4">
            Subscribe to our Newsletter
          </h2>
          <form>
            <input
              type="email"
              className="w-full px-3 py-2 mb-2 text-black rounded-md"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-400">
        &copy; {new Date().getFullYear()} CodeWiz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
