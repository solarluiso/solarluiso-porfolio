import React from "react";
import { motion } from "framer-motion";

import profileImage from "../assets/images/profile-pic.png";

const Home = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex min-h-screen flex-col items-center justify-between text-white md:flex-row"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4069291/pexels-photo-4069291.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="app__container mx-32 flex shrink grow basis-auto flex-row flex-wrap items-stretch justify-start self-auto pt-24">
        {/* Left sided information elements */}
        <div className="flex max-w-sm flex-col items-start px-4 md:w-1/2 xl:ml-32">
          <h1 className="mb-1 text-4xl">
            Hi,
            <br />I am Luiso
          </h1>
          <p className="mb-6 text-4xl font-bold">Web Developer</p>
          <p className="mb-6 text-lg font-bold">
            I can assist you with the creation of websites and updating existing
            web applications.
          </p>
          <p className="mb-6 text-lg ">Based in Miami, USA </p>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer rounded-md bg-[#115949] px-5 py-2 font-bold text-white"
          >
            Learn More
          </motion.button>
        </div>

        {/* Right sided profile image */}
        {/* <div className="flex-shrink-0 md:w-1/2">
          <img
            src={profileImage}
            alt="Profile"
            className="mx-auto h-full w-full max-w-sm rounded-full object-cover"
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Home;
