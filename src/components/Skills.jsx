import React from "react";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAstro } from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center text-white min-h-screen"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        My Skills
      </h2>
      <div className="flex space-x-4">
        <FaReact className="text-6xl" />
        <SiAstro className="text-6xl" />
        <SiNextdotjs className="text-6xl" />
        <SiTailwindcss className="text-6xl" />
        <FaFigma className="text-6xl" />
      </div>
    </section>
  );
};

export default Skills;
