import React, { useEffect, useRef, useState } from "react";
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
      // Log form data before sending to you
      const formData = new FormData(form.current);
      console.log("Form data being sent to owner:", Object.fromEntries(formData));

      // Send form data to me
      const ownerResponse = await emailjs.sendForm(
        "service_4vz5p52",
        "template_2xmzbam", // Template for owner email
        form.current,
        "R6lYSIjXyCK5mRIPQ"
      );
      console.log("Owner email sent successfully:", ownerResponse);

      // Send confirmation to the user
      const userResponse = await emailjs.send(
        "service_4vz5p52",
        "template_lxtaqac", // Template for user confirmation
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
    <form
      ref={form}
      className="w-full md:w-[70%] m-auto p-6 rounded-lg shadow-lg"
      onSubmit={sendEmail}
    >
      <div id="contact" className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-100">
          Contact Me
        </h2>
        <p className="text-gray-400">
          Cultivating connections, reach out and connect with me
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="mb-4 p-2 bg-green-100 text-center text-green-700 rounded">
          Message sent successfully, check your email for confirmation!
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          Failed to send message. Please try again.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            value={message.name}
            placeholder="Name"
            className="dust shadow-2xl bg-opacity-80 p-2 mb-6 w-full rounded"
            onChange={(e) => setMessage({ ...message, name: e.target.value })}
            required
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            value={message.phone}
            placeholder="Phone Number"
            className="dust shadow-2xl bg-opacity-80 p-2 mb-6 w-full rounded"
            onChange={(e) => setMessage({ ...message, phone: e.target.value })}
          />
          <input
            type="email"
            name="email"
            id="email"
            value={message.email}
            placeholder="Email"
            className="dust shadow-2xl bg-opacity-80 p-2 mb-6 w-full rounded"
            onChange={(e) => setMessage({ ...message, email: e.target.value })}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="service"
            id="service"
            value={message.service}
            placeholder="Service"
            className="dust shadow-2xl bg-opacity-80 p-2 mb-6 w-full rounded"
            onChange={(e) =>
              setMessage({ ...message, service: e.target.value })
            }
          />
          <textarea
            name="details"
            id="details"
            value={message.details}
            placeholder="Project details..."
            className="dust shadow-2xl bg-opacity-80 p-2 mb-6 w-full rounded h-45"
            rows="4"
            onChange={(e) =>
              setMessage({ ...message, details: e.target.value })
            }
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`font-semibold p-2 rounded border border-white ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white hover:text-black"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactMe;