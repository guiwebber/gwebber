import React from "react";
import styles from "./Projects.module.css";
import "../darkMode.css";
import { useDarkMode } from "../DarkModeContext";
function Projects() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${styles.containerProjects} ${
        isDarkMode ? "projects-white" : "projects-black"
      }`}
    >
      DIV PROJECTS
    </div>
  );
}

export default Projects;
