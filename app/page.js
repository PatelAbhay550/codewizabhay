import CategoriesSection from "@/components/HomeSections/Categories";
import FeaturedTutorials from "@/components/HomeSections/Featured";
import Footer from "@/components/footer";
import HeroSection from "@/components/HomeSections/Hero";
import Navbar from "@/components/navbar";
import ResourcesSection from "@/components/HomeSections/Resources";
import TestimonialsSection from "@/components/HomeSections/Testimonial";
import LatestVideos from "@/components/HomeSections/Videos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "@/components/CustomToast";

export default function Home() {
  const notify = (message, type) => {
    toast(<CustomToast message={message} type={type} />, {
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <main className="selection:bg-green-700 selection:text-white">
        <nav className="sm:px-11 px-8 fixed top-0 w-full py-3 z-30">
          <Navbar />
        </nav>
        <section>
          <HeroSection />
          <FeaturedTutorials />
          <CategoriesSection />
          <ResourcesSection />
          <LatestVideos />
          <TestimonialsSection />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
