import React from "react";
import { motion } from "framer-motion";

import useSkillData from "../data/SkillData";

const About = () => {
  const skills = useSkillData();

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-start space-y-8 bg-[rgba(24,26,27,0.45)] text-white sm:flex-row sm:space-x-8 sm:space-y-0"
    >
      <div>
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          About Me
        </h2>
        <p className="mb-8 text-sm sm:text-lg md:text-xl lg:text-2xl">
          With a passion for coding, I strive to create unique and functional
          websites that leave a lasting impression on users. I continuously
          expand my knowledge and skills to deliver exceptional results for my
          clients.
        </p>
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          My Skills
        </h2>
        <div className="flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4">
          <motion.div className="flex flex-1 flex-wrap items-start justify-start">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item flex flex-col items-center justify-center space-y-2 pr-8"
                key={skill.name}
              >
                <div className="app__flex text-6xl">{skill.icon}</div>
                <p className="p-text flex items-center justify-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
