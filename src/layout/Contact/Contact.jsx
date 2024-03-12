import React from "react";
import styles from "./Contact.module.css";
import { useDarkMode } from "../DarkModeContext";
import { FaLinkedin } from "react-icons/fa";

import "../darkMode.css";
function Contact() {
  
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${styles.mainContact} ${
        isDarkMode ? "title-dark" : "title-light"
      }`}
    >
      <h1>Contatos</h1>
    </div>
  );
}

export default Contact;
