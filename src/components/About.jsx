import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center bg-darkGray text-white"
    >
      <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
        About Me
      </h2>
      <p className="mb-8 text-lg md:text-xl lg:text-2xl">
        With a passion for coding, I strive to create unique and functional
        websites that leave a lasting impression on users. I continuously expand
        my knowledge and skills to deliver exceptional results for my clients.
      </p>
    </section>
  );
};

export default About;
