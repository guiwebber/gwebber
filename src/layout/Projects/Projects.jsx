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
      <div className={styles.subContainer}>
        <div className={styles.projects}>Aqui 3</div>
        <div className={styles.projects}> Aqui 2</div>
      </div>
    </div>
  );
}

export default Projects;
