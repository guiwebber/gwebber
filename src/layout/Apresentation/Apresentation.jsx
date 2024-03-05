import React from "react";
import styles from "./Apresentation.module.css";
import { useState } from "react";
import "../../index.css";
import "../darkMode.css";
import { useDarkMode } from "../DarkModeContext";
import ParticlesJS from "../Particles/ParticlesJS";
import { useTranslation } from "react-i18next";
import "../../i18n";
function Apresentation({ apresentation, dev }) {
  const { isDarkMode } = useDarkMode();
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = (e) => {
    if (e.target.checked) {
      setIsChecked(!isChecked);
    }
    const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  };
  return (
    <ParticlesJS>
      <div id="apresentation" className={` containerDefault ${styles.containerApresentation}  `}>
        <h2 className={styles.block}>{apresentation}</h2>
        <h1
          className={`${styles.title} ${
            isDarkMode ? "title-light" : "title-dark "
          }`}
        >
          Guilherme Webber
        </h1>
        <h2 className={styles.block}>{dev}</h2>
      </div>
    </ParticlesJS>
  );
}

export default Apresentation;
