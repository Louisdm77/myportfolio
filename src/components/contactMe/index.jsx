import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [message, setMessage] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const form = useRef();

  useEffect(() => {
    console.log("Current message state:", message);
  }, [message]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(form.current);
      console.log("Form data being sent to owner:", Object.fromEntries(formData));

      const ownerResponse = await emailjs.sendForm(
        "service_4vz5p52",
        "template_2xmzbam",
        form.current,
        "R6lYSIjXyCK5mRIPQ"
      );
      console.log("Owner email sent successfully:", ownerResponse);

      const userResponse = await emailjs.send(
        "service_4vz5p52",
        "template_lxtaqac",
        {
          user_name: message.name,
          user_email: message.email,
          user_phone: message.phone,
          user_service: message.service,
          user_details: message.details,
          to_email: message.email,
        },
        "R6lYSIjXyCK5mRIPQ"
      );
      console.log("User confirmation sent successfully:", userResponse);

      setSubmitStatus("success");
      setMessage({ name: "", phone: "", email: "", service: "", details: "" });
    } catch (error) {
      console.error("FAILED...", error.text);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-teal-500/10 z-0"></div>
      <div className="container mx-auto px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ y: -10 }}
          className="max-w-lg mx-auto bg-gray-900 p-10 rounded-2xl shadow-2xl border border-teal-500/30"
        >
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 p-4 bg-green-500 text-white rounded-lg text-center"
            >
              Message sent successfully, check your email for confirmation!
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 p-4 bg-red-500 text-white rounded-lg text-center"
            >
              Failed to send message. Please try again.
            </motion.div>
          )}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                id="name"
                value={message.name}
                placeholder="Your Name"
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                onChange={(e) => setMessage({ ...message, name: e.target.value })}
                required
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                value={message.phone}
                placeholder="Phone Number"
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                onChange={(e) => setMessage({ ...message, phone: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                id="email"
                value={message.email}
                placeholder="Email Address"
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                onChange={(e) => setMessage({ ...message, email: e.target.value })}
                required
              />
              <input
                type="text"
                name="service"
                id="service"
                value={message.service}
                placeholder="Service Needed"
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                onChange={(e) => setMessage({ ...message, service: e.target.value })}
              />
            </div>
            <textarea
              name="details"
              id="details"
              value={message.details}
              placeholder="Project Details..."
              className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 h-40"
              onChange={(e) => setMessage({ ...message, details: e.target.value })}
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full bg-teal-500 text-white font-medium p-4 rounded-full hover:bg-teal-600 transition-colors duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactMe;