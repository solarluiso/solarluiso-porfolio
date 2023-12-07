import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar fixed z-[2] flex w-full items-center justify-between border border-solid border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.25)] px-8 py-4 text-white backdrop-blur-sm">
      <div className="app__navbar-logo flex items-center justify-start">
        <h1 className="font-medium uppercase text-[#b7b1a8]">Luiso</h1>
      </div>
      <ul className="app__navbar-links flex flex-1 list-none items-center justify-end max-md:hidden">
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <li
            key={`link-${item}`}
            className="app__list group mx-4 my-0 flex cursor-pointer flex-col items-center "
          >
            <div className="mb-[5px] h-[5px] w-[5px] rounded-[50%] bg-transparent group-hover:bg-[#86e8d2]" />
            <a
              href={`#${item}`}
              className="flex-col font-medium uppercase text-[#b7b1a8] no-underline transition-all duration-[0.3s] ease-[ease-in-out] hover:text-[#86e8d2]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu relative flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#b7b1a8] md:hidden">
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          className="h-[70%] w-[70%] text-white"
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-[5] flex h-screen w-4/5 flex-col items-end justify-end bg-white bg-cover bg-repeat p-4 shadow-[0px_0px_20px_rgba(168,168,168,0.15)] md:hidden"
          >
            <HiX
              onClick={() => setToggle(false)}
              className="mx-4 my-2 h-[35px] w-[35px] text-[#86e8d2]"
            />
            <ul className="m-0 flex h-full w-full list-none flex-col items-start justify-start p-0">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <li key={item} className="m-4">
                    <a
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                      className="text-base font-medium uppercase text-[#b7b1a8] no-underline transition-all duration-[0.3s] ease-[ease-in-out] hover:text-[#86e2d2]"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
