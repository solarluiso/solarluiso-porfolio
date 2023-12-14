import React, { useState } from "react";
import PropTypes from "prop-types";
import backgroundImage from "../assets/images/contact-bg.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center pt-24"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="mb-6 text-center text-4xl font-bold">Contact Me</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
        <div className="flex flex-col gap-6 lg:flex-row">
          <input
            className="b_glow my-3 w-full rounded-lg border-2 border-[#115949] bg-slate-800 p-4 text-xl text-slate-500"
            placeholder="Enter Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="b_glow my-3 w-full rounded-lg border-2 border-[#115949] bg-slate-800 p-4 text-xl text-slate-500"
            placeholder="Enter Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          className="b_glow my-3 w-full rounded-lg border-2 border-[#115949] bg-slate-800 p-4 text-xl text-slate-500"
          placeholder="Enter Your Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols="20"
          rows="10"
        ></textarea>
        <button
          className="text-bold relative overflow-hidden rounded-lg border-2 border-[#115949] bg-[#115949] px-8 py-4 text-xl uppercase shadow-xl hover:bg-slate-900 hover:shadow-[#115949]"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
