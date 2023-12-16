import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"; // Importing Font Awesome icons

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex h-16 w-full flex-row items-stretch justify-between gap-10 bg-darkGray bg-cover bg-center p-6 text-white transition-all duration-300"
      style={{
        backgroundImage:
          "url('https://www.dafont.com/forum/attach/orig/9/6/962328.jpg')",
      }}
    >
      <h2>Logo</h2>
      <p>© 2023 Your Company Name</p>
      <div className="flex gap-4">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedinIn size={24} />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <a
            href="mailto:your-email@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope size={24} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
