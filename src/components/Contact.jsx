import React from "react";

import backgroundImage from "../assets/images/contact-bg.jpg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center pt-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="mb-6 text-center text-4xl font-bold">Contact Me</h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="flex flex-col gap-6 lg:flex-row">
          <input
            className="b_glow my-3 w-full rounded-lg border-2 border-[#115949] bg-slate-800 p-4 text-xl text-slate-500"
            placeholder="Enter Your Name"
            type="text"
          />
          <input
            className="b_glow my-3 w-full rounded-lg border-2 border-[#115949] bg-slate-800 p-4 text-xl text-slate-500"
            placeholder="Enter Your Email"
            type="email"
          />
        </div>
        <textarea
          className="b_glow my-3 w-full rounded-lg border-2 border-[#115949] bg-slate-800 p-4 text-xl text-slate-500"
          placeholder="Wrtite Your Message..."
          name=""
          id=""
          cols="20"
          rows="10"
        ></textarea>
        <button
          className="text-bold relative overflow-hidden rounded-lg border-2 border-[#115949] bg-[#115949] px-8 py-4 text-xl uppercase shadow-xl hover:bg-slate-900 hover:shadow-fuchsia-800/50"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
