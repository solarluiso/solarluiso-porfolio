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
          projects.filter((project) => project.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center text-white min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        My Ambitious <span className="text-yellow-500">Projects</span>
      </h2>

      {/* Pills to categorize my applications */}
      <div className="flex flex-wrap justify-center space-x-2 mb-8">
        {["UI/UX", "Web App", "React JS", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(item)}
            className={`text-white px-4 py-2 rounded-full cursor-pointer transition duration-300 ${
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
        className="flex flex-wrap justify-center items-center"
      >
        {filterProjects.map((project, index) => (
          <motion.div
            className="flex flex-col w-[270px] bg-white p-4 m-4 rounded-lg hover:scale-105"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div className="relative" whileHover={{ scale: 1.05 }}>
              <img
                src={project.imgUrl}
                alt={project.title}
                className="w-full h-auto rounded-md"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80">
                <motion.a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-green-700 hover:text-green-500 cursor-pointer"
                >
                  <AiFillEye className="text-4xl" />
                </motion.a>
                <motion.a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-green-700 hover:text-green-500 cursor-pointer ml-4"
                >
                  <AiFillGithub className="text-4xl" />
                </motion.a>
              </div>
            </motion.div>

            <p className="text-black text-md mt-2 text-center">
              {project.description}
            </p>

            <div className="mt-4">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">
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
