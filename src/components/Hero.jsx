import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profileImage from "../assets/images/profileImage.jpg";

const Hero = () => {
  return (
    <motion.div
      id="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" flex min-h-screen flex-col items-center justify-between bg-darkTeal text-white md:flex-row"
    >
      <div className="app__container flex shrink grow basis-auto flex-row flex-wrap items-stretch justify-start self-auto">
        {/* Left sided with heading, subheading, and button + information elements*/}
        <div className="flex flex-col items-start md:w-1/2">
          <h1 className="mb-2 text-4xl">
            Hi,
            <br />I am Luiso
          </h1>
          <p className="mb-10 text-4xl font-bold">Web Developer</p>
          <div className="mb-4">
            <p className="text-lg">
              Based in Miami, USA <br />I can assist you with the creation of
              websites and updating existing web applications
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg">
              <a
                href="/your-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500"
              >
                Download CV
              </a>
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
        {/* Right sided profile image */}
        <div className="flex-shrink-0 md:w-1/2">
          <img
            src={profileImage}
            alt="Profile"
            className="mx-auto h-40 w-full rounded-full object-cover md:w-40"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
