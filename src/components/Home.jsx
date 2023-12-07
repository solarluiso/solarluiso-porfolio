import React from "react";
import { motion } from "framer-motion";

import profileImage from "../assets/images/profileImage.jpg";

const Home = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex min-h-screen flex-col items-center justify-between text-white md:flex-row"
    >
      <div className="app__container mx-32 flex shrink grow basis-auto flex-row flex-wrap items-stretch justify-start self-auto pt-24">
        {/* Left sided with heading, subheading, and button + information elements*/}
        <div className="flex max-w-sm flex-col items-start px-4 md:w-1/2 xl:ml-32">
          <h1 className="mb-2 text-4xl">
            Hi,
            <br />I am Luiso
          </h1>
          <p className="mb-10 text-4xl font-bold">Web Developer</p>
          <div className="mb-4">
            <p className="mb-10 text-lg ">
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
                className="rounded-[5px] bg-[#115949] px-5 py-2.5 font-[bold] text-white no-underline"
              >
                Learn More
              </a>
            </p>
          </div>
        </div>
        {/* Right sided profile image */}
        <div className="flex-shrink-0 md:w-1/2">
          <img
            src={profileImage}
            alt="Profile"
            className="mx-auto h-80 w-full rounded-full object-cover md:w-40"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
