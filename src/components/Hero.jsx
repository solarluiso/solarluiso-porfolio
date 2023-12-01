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
      className="flex flex-col md:flex-row justify-center items-center text-white min-h-screen"
    >
      {/* Left side with heading, subheading, and button */}
      <div className="flex flex-col items-start mb-8 md:w-1/2 md:order-1">
        <h1 className="text-4xl font-bold mb-2">
          Hi,
          <br />I am Luiso
        </h1>
        <p className="text-lg mb-10">Web Developer</p>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-yellow-500 text-blue-800 px-4 py-2 rounded-full font-bold cursor-pointer"
        >
          Hire Me
        </motion.button>
      </div>

      {/* Centered profile image */}
      <div className="flex-shrink-0 md:w-1/2 mb-8 md:mb-0 md:order-2">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full mx-auto w-full md:w-40 h-40 object-cover"
        />
      </div>

      {/* Right side with information elements */}
      <div className="flex flex-col items-center md:w-1/2 md:order-3">
        <div className="mb-4">
          <p className="text-lg">Location: City, Country</p>
        </div>
        <div className="mb-4">
          <p className="text-lg">Services Offered:</p>
          <ul className="list-disc pl-4">
            <li>Web Development</li>
            <li>Frontend Design</li>
            <li>Freelancing</li>
          </ul>
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
    </motion.div>
  );
};

export default Hero;
