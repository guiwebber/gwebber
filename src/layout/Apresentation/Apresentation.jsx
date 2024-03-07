import React from "react";
import styles from "./Apresentation.module.css";
import { useState } from "react";
import "../../index.css";
import "../darkMode.css";
import { useDarkMode } from "../DarkModeContext";
// import ParticlesJS from "../Particles/ParticlesJS";
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
    // <ParticlesJS>

    <div
      id="apresentation"
      className={` containerDefault ${styles.containerApresentation}  `}
    >
      <div className={styles.divHello}>
        <h2 className={`${styles.block} ${styles.textHello}`}>{apresentation}</h2>
      </div>
      <h1
        className={`${styles.title} ${
          isDarkMode ? "title-light" : "title-dark "
        }`}
      >
        Guilherme Webber
      </h1>
      <div className={styles.divDev}>
        <h2 className={`${styles.block} ${styles.textDev}`}>{dev}</h2>
      </div>
    </div>
    // </ParticlesJS>
  );
}

export default Apresentation;
