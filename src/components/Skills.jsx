import React from "react";
import { motion } from "framer-motion";

import useSkillData from "../data/SkillData";

const Skills = () => {
  const skills = useSkillData();

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center text-white min-h-screen"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        My Skills
      </h2>
      <div className="flex flex-row md:flex-col">
        <motion.div className="flex flex-1 flex-wrap justify-start items-start mr-5 md:mr-0">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item flex flex-col justify-center items-center"
              key={skill.name}
            >
              <div className="app__flex text-6xl">{skill.icon}</div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
