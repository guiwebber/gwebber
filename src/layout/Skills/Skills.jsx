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
import { useState } from "react";
function Skills() {
  const [technologies, setTecnologies] = useState(
    "Clique nas tecnologias para um breve resumo."
  );
  const [titleTech, setTitleTech] = useState();

  const handleTecnology = (text, title) => {
    setTecnologies(text);
    setTitleTech(title);
  };

  const { isDarkMode } = useDarkMode();
  return (
    <div id="skills"
      className={`  ${styles.divMainSkills} ${
        isDarkMode ? "light-mode" : "dark-mode"
      } `}
    >
      <div
        className={`${styles.containerSkills} ${
          isDarkMode ? "icon-hover-light" : "icon-hover-dark"
        }`}
      >
        <div
          onClick={() => handleTecnology("css é blablabla", "CSS")}
          className={`divIcon ${styles.divIcon} `}
        >
          <DiCss3 className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology("html é blablabla", "HTML")}
          className={`divIcon ${styles.divIcon} `}
        >
          <DiHtml5 className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology("js é blablabla", "JavaScript")}
          className={`divIcon ${styles.divIcon} `}
        >
          <DiJavascript1 className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology("json é blabla", "JSON")}
          className={`divIcon ${styles.divIcon} `}
        >
          <TbJson className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology("sass é blabla", "SASS")}
          className={`divIcon ${styles.divIcon} `}
        >
          <FaSass className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology("jquery é blabla", "jQuery")}
          className={`divIcon ${styles.divIcon} `}
        >
          <DiJqueryLogo className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology("react é blabla", "React")}
          className={`divIcon ${styles.divIcon} `}
        >
          <DiReact className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology("git é blabla", "Git")}
          className={`divIcon ${styles.divIcon} `}
        >
          <FaGitAlt className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology("github é balblalbalbla", "Github")}
          className={`divIcon ${styles.divIcon} `}
        >
          <FaGithub className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology("api", "API")}
          className={`divIcon ${styles.divIcon} `}
        >
          <TbApi className={styles.iconsSKills} />
        </div>
        <div className={`${styles.divText}  ${isDarkMode ?  'lightOff' : 'lightOn' }`}>
          <h1>{titleTech}</h1>
          <p>{technologies}</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
