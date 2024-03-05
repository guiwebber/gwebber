import React from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BtnToTop.module.css";
function BtnToTop() {
  return (
    <a href="#top">
      <button className={styles.btn}>
        <FaArrowUp className={styles.iconBtn} />
      </button>
    </a>
  );
}

export default BtnToTop;
