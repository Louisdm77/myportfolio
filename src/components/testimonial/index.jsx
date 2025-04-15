import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Tobi",
      role: "CEO, LuxWears",
      quote: "Akwaji transformed our landing page into a stunning, user-friendly experience. His attention to detail is unmatched!",
    },
    {
      name: "Sarah Smith",
      role: "Founder, Pawsome Pets",
      quote: "Working with Akwaji was a breeze. He delivered a responsive website that our users love. Highly recommend!",
    },
    {
      name: "Mike Johnson",
      role: "Manager, BuildMasters",
      quote: "Akwaji’s expertise in React  made our platform seamless and efficient. Amazing work!",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          What Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-900 rounded-xl p-6 shadow-lg"
            >
              <FaQuoteLeft className="text-teal-500 text-3xl mb-4" />
              <p className="text-gray-300 mb-4">{testimonial.quote}</p>
              <div className="text-right">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;