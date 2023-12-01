import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-about text-white h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        About Me
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
        rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </p>
      <a
        href="#projects"
        className="bg-accent text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-hover-accent transition duration-300"
      >
        View Projects
      </a>
    </section>
  );
};

export default About;
