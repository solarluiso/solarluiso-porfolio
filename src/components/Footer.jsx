import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex h-3/4 w-full flex-row items-stretch gap-10 bg-darkGray bg-cover bg-center p-6 text-white transition-all duration-300"
      style={{
        backgroundImage:
          "url('https://www.dafont.com/forum/attach/orig/9/6/962328.jpg')",
      }}
    >
      <h2>Footer</h2>
    </section>
  );
};

export default Footer;
