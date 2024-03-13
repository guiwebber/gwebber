import React from "react";
import styles from "./Apresentation.module.css";
import { useState } from "react";
import "../../index.css";
import "../darkMode.css";
import { useDarkMode } from "../DarkModeContext";
import { FaLinkedin, FaGithub, FaWhatsappSquare, FaReact  } from "react-icons/fa";

import "../../i18n";
function Apresentation({ apresentation, dev }) {
  const { isDarkMode } = useDarkMode();
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = (e) => {
    if (e.target.checked) {
      setIsChecked(!isChecked);
    }
  };
  return (
    <div
      id="apresentation"
      className={` ${styles.containerApresentation}  `}
    >
      <div className={styles.subContainer}>

      <FaReact className={styles.iconReact}/>
      <h1
        className={`${styles.title} ${isDarkMode ? "name-dark" : "name-light"}`}
        >
        Guilherme Webber
      </h1>
      <div className={styles.divDev}>
        <h2
          className={`${styles.block} ${styles.textDev} ${
            isDarkMode ? "subtitle-dark" : "subtitle-light"
          }`}
          >
          {dev}
        </h2>
        <div className={styles.iconsSocial}>
          <a target="_blank" href="https://github.com/guiwebber">
            <FaGithub className={styles.icon} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/guilherme-webber-00052318a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin className={styles.icon} />
          </a>
          <a target="_blank" href="https://wa.me/+5554991406029">
            <FaWhatsappSquare className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
    </div>
    // </ParticlesJS>
  );
}

export default Apresentation;
