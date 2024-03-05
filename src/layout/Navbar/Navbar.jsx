import styles from "./Navbar.module.css";
import logo from "../../images/logo.png";
import "../../index.css";
import BR from "../../images/br.png";
import USA from "../../images/usa.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../../i18n";
import { useDarkMode } from "../DarkModeContext";
import "../darkMode.css";

import { FaMoon, FaSun } from "react-icons/fa";
function Navbar({
  customClass,
  isChecked,
  about,
  contact,
  projects,
  formation,
  skills,
  sendData,
}) {
  const [icons, setIcons] = useState(<FaMoon className="icons moon" />);
  const [isDark, setIsDark] = useState(false);

  const { isDarkMode, toggleDarkMode } = useDarkMode(false);

  const toggleClick = () => {
    // Aqui o componente filho chama a função do pai e passa os dados
    sendData(isDarkMode);
    console.log(isDarkMode);
  };

  const handleClick = (e) => {
    if (isDarkMode) {
      setIcons(<FaMoon className="icons moon" />);
      toggleDarkMode(!isDark);
      setIsDark(!isDark);
      console.log(isDark);
      toggleClick(!isDarkMode);
    } else {
      setIcons(<FaSun className="icons sun" />);
      toggleDarkMode(!isDark);
      console.log(isDark);
      setIsDark(!isDark);
      toggleClick(!isDarkMode);
    }
  };

  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [mobOpen, setMobOpen] = useState(false);
  const handleMenu = (e) => {
    setMobOpen(!mobOpen);
  };

  return (
    <div
      className={`${styles.container} ${
        isChecked ? styles.navbarDay : styles.navbarNight
      }  ${styles[customClass]} ${
        mobOpen ? styles.mobileOpen : styles.container
      } ${isDarkMode ? "navbar-white" : "navbar-black"}`}
    >
      <a id="top" href="#top">
      <img className={styles.logo} src={logo} alt="Logo GW" />
      </a>
      <nav className={styles.navbar}>
        <ul
          className={`${styles.list} ${
            isDarkMode ? "text-light" : "text-dark"
          }`}
        >
          <li className={styles.item}>
            <a onClick={handleMenu} href="#about">
              {about}
            </a>
          </li>
          <li className={styles.item}>
            <a onClick={handleMenu} href="#skills">
              {skills}
            </a>
          </li>
          <li className={styles.item}>
            <a onClick={handleMenu} href="#formation">
              {formation}
            </a>
          </li>
          <li className={styles.item}>
            <a onClick={handleMenu} href="#projects">
              {projects}
            </a>
          </li>
          <li className={styles.item}>
            <a onClick={handleMenu} href="#contact">
              {contact}
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.right}>
        <div>
          <button
            onClick={() => changeLanguage("en")}
            className={styles.btn_usa}
          >
            <img src={USA} alt="" />
          </button>
          <button
            onClick={() => changeLanguage("pt")}
            className={styles.btn_br}
          >
            <img src={BR} alt="" />
          </button>
        </div>
        <div className={styles.darkDayMode}>
          <div className={styles.divInput}>
            <input
              className={`${styles.input} ${
                isDark ? styles.day : styles.night
              }`}
              type="checkbox"
              checked={isDarkMode}
              onChange={handleClick}
            />
          </div>
          <div
            className={`${styles.modes} ${isDark ? styles.day : styles.night}`}
          >
            <div className={styles.ball}>
              <label>{icons}</label>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.hamburguer} `}>
        <input
          id={styles.input}
          type="checkbox"
          checked={mobOpen}
          onChange={handleMenu}
        />
        <span className={styles.span}></span>
      </div>
    </div>
  );
}

export default Navbar;
