import { useState, useEffect } from "react";

const useProjectData = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulating fetching data locally
    const mockProjectsData = [
      {
        title: "Project 1",
        imgUrl: "src/assets/images/project1.jpg",
        projectLink: "https://example.com/project1",
        codeLink: "https://github.com/example/project1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit jlasdlfl.",
        tags: ["ReactJS", "Tailwind CSS", ""],
      },
      {
        title: "Project 2",
        imgUrl: "src/assets/images/project2.jpg",
        projectLink: "https://example.com/project2",
        codeLink: "https://github.com/example/project2",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: ["NextJs", "Tailwind CSS"],
      },
      {
        title: "Project 3",
        imgUrl: "src/assets/images/project3.jpg",
        projectLink: "https://example.com/project3",
        codeLink: "https://github.com/example/project3",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        tags: ["React JS", "Sass"],
      },
      {
        title: "Project 4",
        imgUrl: "src/assets/images/project4.jpg",
        projectLink: "https://example.com/project4",
        codeLink: "https://github.com/example/project4",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        tags: ["Astro", "Tailwind CSS"],
      },
    ];

    setProjects(mockProjectsData);
  }, []);

  return projects;
};

export default useProjectData;
