import React from "react";
import styles from "./Footer.module.css";
import { useDarkMode } from "../DarkModeContext";
import "../../index.css";
import logo from "../../images/logo.png";
function Footer() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${styles.divFooter}  ${
        isDarkMode ? "footer-white" : "footer-black"
      }`}
    >
      <div className="containerDefault">
        <img className={styles.logo} src={logo} alt="" />
      </div>
      <div className={styles.copy}>
        <p>&copy; Template by Guilherme Webber - Front-end Developer</p>
      </div>
    </div>
  );
}

export default Footer;
