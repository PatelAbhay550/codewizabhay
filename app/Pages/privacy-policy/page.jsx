import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy pt-20 bg-gray-50 min-h-screen">
      <nav className="px-11 fixed top-0 w-full py-3 z-30">
        <Navbar />
      </nav>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Privacy Policy
        </h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg leading-8 mb-4">
            At CodeWiz, we respect your privacy and are committed to protecting
            your personal information. This Privacy Policy outlines our
            practices regarding the collection, use, and disclosure of your
            information.
          </p>
          <p className="text-gray-700 text-lg leading-8 mb-4">
            We collect personal information that you provide to us when you
            register on our website, participate in activities, or contact us.
            We use this information to provide you with services and improve
            your experience on our website.
          </p>
          <p className="text-gray-700 text-lg leading-8 mb-4">
            We do not share your personal information with third parties for
            their own marketing purposes. Your data is only used for the
            purposes outlined in this Privacy Policy.
          </p>
          <p className="text-gray-700 text-lg leading-8">
            If you have any questions or concerns about our Privacy Policy,
            please contact us.
          </p>
        </div>
      </div>
      <footer className="2">
        <Footer />
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
