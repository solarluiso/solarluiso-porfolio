import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex h-3/4 w-full flex-row items-stretch gap-10 bg-darkGray p-6 text-white transition-all duration-300"
    >
      <h2>Footer</h2>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer rounded-full bg-yellow-500 px-4 py-2 font-bold text-blue-800"
      >
        Hire Me
      </motion.button>
    </section>
  );
};

export default Footer;
