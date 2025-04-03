import React from "react";

const ContactMe = () => {
  return (
    <form className="w-full md:w-[70%] m-auto p-6 rounded-lg shadow-lg">
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-100">
          Contact Me
        </h2>
        <p className="text-gray-400">
          Cultivating connections, reach out and connect with me
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="dust shadow-2xl bg-opacity-80 p-2 mb-6 w-full rounded"
          />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className="dust shadow-2xl bg-opacity-80 p-2 mb-6 w-full rounded"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="dust shadow-2xl bg-opacity-80 p-2 mb-6 w-full rounded"
          />
        </div>
        <div>
          <input
            type="text"
            name="service"
            id="service"
            placeholder="Service"
            className="dust shadow-2xl bg-opacity-80 p-2 mb-6 w-full rounded"
          />

          <textarea
            name="project"
            id="project"
            placeholder="Project details..."
            className="dust shadow-2xl bg-opacity-80 p-2 mb-6 w-full rounded h-45"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className=" font-semibold p-2 rounded  border border-white "
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactMe;
