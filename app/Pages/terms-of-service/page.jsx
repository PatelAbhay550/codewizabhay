import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="terms-of-service pt-20 bg-gray-50 min-h-screen">
      <nav className="px-11 fixed top-0 w-full py-3 z-30">
        <Navbar />
      </nav>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Terms of Service
        </h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg leading-8 mb-4">
            Welcome to CodeWiz. These Terms of Service govern your use of our
            website. By accessing or using our website, you agree to be bound by
            these terms.
          </p>
          <p className="text-gray-700 text-lg leading-8 mb-4">
            We reserve the right to make changes to these terms at any time.
            Your continued use of the website after any changes constitutes your
            acceptance of the new terms.
          </p>
          <p className="text-gray-700 text-lg leading-8 mb-4">
            You may not use our website for any unlawful purpose or in a way
            that could damage, disable, overburden, or impair our website. You
            are responsible for ensuring that your use complies with all
            applicable laws and regulations.
          </p>
          <p className="text-gray-700 text-lg leading-8">
            If you have any questions about these terms, please contact us.
          </p>
        </div>
      </div>
      <footer className="2">
        <Footer />
      </footer>
    </div>
  );
};

export default TermsOfService;
