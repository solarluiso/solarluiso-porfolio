import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center text-white min-h-screen"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        About Me
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
        rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </p>
    </section>
  );
};

export default About;
