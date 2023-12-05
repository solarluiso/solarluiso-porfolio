import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar fixed z-[2] flex w-full items-center justify-between border border-solid border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.25)] px-8 py-4 backdrop-blur-sm">
      <div className="app__navbar-logo flex items-center justify-start">
        <h1 className="text-xl font-bold">Luiso</h1>
      </div>
      <ul className="app__navbar-links">
        {["hero", "about", "skills", "projects", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <div className="container flex items-center justify-between">
  <h1 className="text-xl font-bold">Luiso</h1>
  <ul className="flex space-x-4">
    <li>
      <a href="#hero">Home</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#projects">Projects</a>
    </li>
    <li>
      <a href="#skills">Skills</a>
    </li>
  </ul>
</div> */
}
