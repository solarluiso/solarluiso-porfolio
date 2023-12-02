import { useState, useEffect } from "react";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAstro } from "react-icons/si";

const useSkillData = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Simulating fetching data locally
    const mockSkillsData = [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Astro",
        icon: <SiAstro />,
      },
      {
        name: "Nextjs",
        icon: <SiNextdotjs />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        name: "Figma",
        icon: <FaFigma />,
      },
    ];

    setSkills(mockSkillsData);
  }, []);

  return skills;
};

export default useSkillData;
