import React from "react";
import { motion } from "framer-motion";

import useSkillData from "../data/SkillData";
import backgroundImage from "../assets/images/about-bg.jpg";

const About = () => {
  const skills = useSkillData();

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-end justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="app__container mx-36 flex shrink grow basis-auto flex-col self-auto pt-36">
        {/* Bio */}
        <div>
          <h2 className="mb-4 text-4xl font-bold">About Me</h2>
          <p className="mb-8 max-w-md text-lg">
            With a passion for coding, I strive to create unique and functional
            websites that leave a lasting impression on users. I continuously
            expand my knowledge and skills to deliver exceptional results for my
            clients.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="mb-4 text-4xl font-bold">My Skills</h2>
          <div className="flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4">
            <motion.div className="flex flex-1 flex-wrap items-start justify-start">
              {skills.map((skill) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 2 }}
                  className="app__skills-item flex flex-col items-center justify-center space-y-2 pr-8"
                  key={skill.name}
                >
                  <div className="app__flex text-4xl">{skill.icon}</div>
                  <p className="p-text flex items-center justify-center">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
