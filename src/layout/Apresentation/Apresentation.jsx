import React from "react";
import styles from "./Apresentation.module.css";
import { useState } from "react";
import "../../index.css";
import "../darkMode.css";
import { useDarkMode } from "../DarkModeContext";
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
      className={` containerDefault ${styles.containerApresentation}  `}
    >
      <h1
        className={`${styles.title} ${
          isDarkMode ? "name-dark" : "name-light"
        }`}
      >
        Guilherme Webber
      </h1>
      <div className={styles.divDev}>
        <h2 className={`${styles.block} ${styles.textDev} ${isDarkMode ? 'subtitle-dark' : 'subtitle-light'}`}>{dev}</h2>
      </div>
    </div>
    // </ParticlesJS>
  );
}

export default Apresentation;
