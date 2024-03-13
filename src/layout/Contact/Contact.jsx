import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { useDarkMode } from "../DarkModeContext";
import puppet from "../../images/SP-studio.png";
import "../../i18n";
import "../darkMode.css";
function Contact({ phName, phEmail, phMessage, contactTitle, btnSend, contact, findMe, textContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { isDarkMode } = useDarkMode();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init("dnxHT1l7StqvPDwZm");

    const serviceID = "default_service";
    const templateID = "template_y5ktjt5";

    const templateParams = {
      to_name: "Gui webber",
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams)
      .then((response) => {
        console.log(
          "Email enviado com sucesso",
          response.status,
          response.text
        );
        alert("Sua mensagem foi enviada, obrigado!");

        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "Oops! Algo deu errado com sua mensagem, por favor atualize e mandar novamente"
        );
      });
  };

  return (
    <div className={styles.mainContact}>
      <h1 className={`${isDarkMode ? "title-dark" : "title-light"}`}>
        {contactTitle}
      </h1>
      <div className={styles.subContact}>
        <div className={styles.divForm}>
          <h2>{contact}</h2>
          <p className={styles.textContact}>
            {textContact}
          </p>
          <form className={styles.form} id="form" onSubmit={sendEmail}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={phName}
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={phEmail}
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={phMessage}
              required
            />
            <button type="submit" className={styles.btnSend} id="btn-submit">
              {btnSend}
            </button>
          </form>
        </div>
        <div className={styles.divSocial}>
          <h2>{findMe}</h2>
          <img className={styles.puppet} src={puppet} alt="" />
          <div className={styles.linksSocialMedia}>
            <a target="_blank" href="https://www.linkedin.com/in/guilherme-webber-00052318a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin
                className={`${styles.iconSocial} ${
                  isDarkMode ? "icon-light" : "icon-dark"
                }`}
              />
            </a>
            <a target="_blank" href="https://github.com/guiwebber">
              <FaGithub
                className={`${styles.iconSocial} ${
                  isDarkMode ? "icon-light" : "icon-dark"
                }`}
              />
            </a>
            <a target="_blank" href="https://wa.me/+5554991406029">
              <FaWhatsappSquare
                className={`${styles.iconSocial} ${
                  isDarkMode ? "icon-light" : "icon-dark"
                }`}
              />
            </a>
            <a target="_blank" href="mailto:guiz1n.webber@gmail.com">
              <SiGmail
                className={`${styles.iconSocial} ${
                  isDarkMode ? "icon-light" : "icon-dark"
                }`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
