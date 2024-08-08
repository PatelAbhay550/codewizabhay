import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "These tutorials are amazing! They helped me land my first job as a web developer.",
    rating: 4,
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "Very comprehensive and easy to follow. I improved my coding skills significantly.",
    rating: 4,
  },
  {
    id: 3,
    name: "Bob Johnson",
    feedback: "Great resources and well-explained concepts. Highly recommend!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section py-20 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-md rounded-lg overflow-hidden p-5"
            >
              <div className="mb-4">
                <div className="flex items-center">
                  <div className="mr-3">
                    <img
                      src={`https://via.placeholder.com/50?text=${testimonial.name[0]}`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-yellow-500 ${
                            i < testimonial.rating
                              ? "fill-current"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
