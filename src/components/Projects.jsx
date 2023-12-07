import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import useProjectData from "../data/ProjectData.jsx";

const Projects = () => {
  const projects = useProjectData();
  const [filterProjects, setFilterProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setFilterProjects(projects);
  }, [projects]);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterProjects(projects);
      } else {
        setFilterProjects(
          projects.filter((project) => project.tags.includes(item)),
        );
      }
    }, 500);
  };

  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col items-center justify-center bg-[rgba(24,26,27,0.15)] text-white"
    >
      <h2 className="mb-6 text-center text-4xl font-bold">
        Top <span className="text-yellow-500">Projects</span>
      </h2>

      {/* Pills to categorize my applications */}
      <div className="mb-8 flex flex-wrap justify-center space-x-2">
        {["Astro", "React JS", "NextJS", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(item)}
            className={`cursor-pointer rounded-full px-4 py-2 text-white transition duration-300 ${
              activeFilter === item
                ? "bg-teal-500" // #38a3a5
                : "bg-teal-700 hover:bg-teal-500" // #0f4c75
            } mb-2`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap items-center justify-center"
      >
        {filterProjects.map((project, index) => (
          <motion.div
            className="m-4 flex w-[270px] flex-col rounded-lg bg-white p-4 hover:scale-105"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div className="relative" whileHover={{ scale: 1.05 }}>
              <img
                src={project.imgUrl}
                alt={project.title}
                className="h-auto w-full rounded-md"
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-90 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <motion.a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="cursor-pointer text-green-700 hover:text-green-500"
                >
                  <AiFillEye className="text-4xl" />
                </motion.a>
                <motion.a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="ml-4 cursor-pointer text-green-700 hover:text-green-500"
                >
                  <AiFillGithub className="text-4xl" />
                </motion.a>
              </div>
            </motion.div>

            <p className="text-md mt-2 text-center text-black">
              {project.description}
            </p>

            <div className="mt-4 flex justify-center">
              <span className="rounded-full bg-green-500 px-2 py-1 text-sm text-white">
                {project.tags?.[0]}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
