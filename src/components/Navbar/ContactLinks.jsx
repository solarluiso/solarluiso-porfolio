import React from "react";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const ContactLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-3xl" />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-3xl" />
      </a>
      <a
        href="https://discordapp.com/users/yourdiscordid"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord className="text-3xl" />
      </a>
    </div>
  );
};

export default ContactLinks;
