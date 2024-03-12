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
import i18n from "../../i18n";
import { useState } from "react";
function Skills({
  skillsTitle,
  css,
  html,
  js,
  json,
  sass,
  jquery,
  react,
  git,
  github,
  api,
}) {
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
    <div
      id="skills"
      className={`  ${styles.divMainSkills} ${
        isDarkMode ? "light-mode" : "dark-mode"
      } `}
    >
      <h1 className={`${isDarkMode ? "title-dark" : "title-light"}`}>
        {skillsTitle}
      </h1>
      <div
        className={`${styles.containerSkills} ${
          isDarkMode ? "icon-hover-light" : "icon-hover-dark"
        }`}
      >
        <div
          onClick={() => handleTecnology(i18n.t(css), "CSS")}
          className={`divIcon ${styles.divIcon} `}
        >
          <DiCss3 className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology(i18n.t(html), "HTML")}
          className={`divIcon ${styles.divIcon} `}
        >
          <DiHtml5 className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology(i18n.t(js), "JavaScript")}
          className={`divIcon ${styles.divIcon} `}
        >
          <DiJavascript1 className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology(i18n.t(json), "JSON")}
          className={`divIcon ${styles.divIcon} `}
        >
          <TbJson className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology(i18n.t(sass), "SASS")}
          className={`divIcon ${styles.divIcon} `}
        >
          <FaSass className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology(i18n.t(jquery), "jQuery")}
          className={`divIcon ${styles.divIcon} `}
        >
          <DiJqueryLogo className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology(i18n.t(react), "React")}
          className={`divIcon ${styles.divIcon} `}
        >
          <DiReact className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology(i18n.t(git), "Git")}
          className={`divIcon ${styles.divIcon} `}
        >
          <FaGitAlt className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology(i18n.t(github), "Github")}
          className={`divIcon ${styles.divIcon} `}
        >
          <FaGithub className={styles.iconsSKills} />
        </div>
        <div
          onClick={() => handleTecnology(i18n.t(api), "API")}
          className={`divIcon ${styles.divIcon} `}
        >
          <TbApi className={styles.iconsSKills} />
        </div>
        <div
          className={`${styles.divText}  ${
            isDarkMode ? "lightOff" : "lightOn"
          }`}
        >
          <h1>{titleTech}</h1>
          <p>{technologies}</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
