import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-darkTeal bg-opacity-90 text-white">
      <div className="container flex items-center justify-between">
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
      </div>
    </nav>
  );
};

export default Navbar;
