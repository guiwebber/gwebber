import React from "react";
import styles from "./Skills.module.css";
import "../../index.css";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiJqueryLogo,
} from "react-icons/di";
import { FaGitAlt, FaGithub, FaSass } from "react-icons/fa6";
import { TbApi, TbJson } from "react-icons/tb";
import { useDarkMode } from "../DarkModeContext";
import "../darkMode.css";
function Skills() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={` containerDefault ${styles.divMainSkills} ${
        isDarkMode ? "light-mode" : "dark-mode"
      } `}
    >
      <div className={styles.containerSkills}>
        <div className={`${styles.iconsFlex} `}>
          <div className={styles.divIcon}>
            <DiCss3 className={styles.iconsSKills} />
          </div>
          <div className={styles.divIcon}>
            <DiHtml5 className={styles.iconsSKills} />
          </div>
          <div className={styles.divIcon}>
            <DiJavascript1 className={styles.iconsSKills} />
          </div>
        </div>
        <div className={styles.divIcon}>
          <DiReact className={styles.iconsSKills} />
        </div>
        <div className={styles.divIcon}>
          <FaGitAlt className={styles.iconsSKills} />
        </div>
        <div className={styles.divIcon}>
          <FaGithub className={styles.iconsSKills} />
        </div>
        <div className={styles.divIcon}>
          <TbApi className={styles.iconsSKills} />
        </div>
        <div className={`${styles.iconsFlex} `}>
          <div className={styles.divIcon}>
            <TbJson className={styles.iconsSKills} />
          </div>

          <div className={styles.divIcon}>
            <FaSass className={styles.iconsSKills} />
          </div>
          <div className={styles.divIcon}>
            <DiJqueryLogo className={styles.iconsSKills} />
          </div>
        </div>
      </div>
      <div className={styles.textSkills}>
        <p>texto skillsss</p>
      </div>
    </div>
  );
}

export default Skills;
