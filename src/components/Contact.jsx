import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center p-4 lg:p-20"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/18995097/pexels-photo-18995097/free-photo-of-stairs-light-city-art.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="mb-20 text-[52px] font-semibold uppercase leading-normal text-fuchsia-500">
        Contact Me
      </h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="flex flex-col gap-6 lg:flex-row">
          <input
            className="b_glow my-3 w-full rounded-lg border-2 border-fuchsia-800 bg-slate-800 p-4 text-xl text-slate-500"
            placeholder="Enter Your Name"
            type="text"
          />
          <input
            className="b_glow my-3 w-full rounded-lg border-2 border-fuchsia-800 bg-slate-800 p-4 text-xl text-slate-500"
            placeholder="Enter Your Email"
            type="email"
          />
        </div>
        <textarea
          className="b_glow my-3 w-full rounded-lg border-2 border-fuchsia-800 bg-slate-800 p-4 text-xl text-slate-500"
          placeholder="Wrtite Your Message..."
          name=""
          id=""
          cols="20"
          rows="10"
        ></textarea>
        <button
          className="text-bold relative overflow-hidden rounded-lg border-2 border-fuchsia-800 bg-fuchsia-800 px-8 py-4 text-xl uppercase shadow-xl hover:bg-slate-900 hover:shadow-fuchsia-800/50"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
