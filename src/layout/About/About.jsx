import React from "react";
import styles from "./About.module.css";
import "../../index.css";
import "../darkMode.css";
import me from "../../images/me.png";
import { useDarkMode } from "../DarkModeContext";
function About({ aboutTitle, aboutText }) {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      id="about"
      className={` ${styles.containerAbout}  ${
        isDarkMode ? "about-white" : "about-black"
      }`}
    >
      <div className="">
        <div className={styles.imgText}>
          <div className={styles.divImage}>
            <img className={styles.image} src={me} alt="Me" />
          </div>
          <div
            className={`${styles.divTextAbout} ${
              isDarkMode ? "about-white" : "about-black"
            }`}
          >
            <h1 className={styles.titleAbout}>{aboutTitle}</h1>
            <p className={styles.textAbout}>{aboutText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
