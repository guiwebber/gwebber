import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { useDarkMode } from "../DarkModeContext";
import puppet from "../../images/SP-studio.png";
import "../../i18n";
import "../darkMode.css";
function Contact({ phName, phEmail, phMessage, contactTitle, btnSend }) {
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
          <h2>Entre em contato</h2>
          <p className={styles.textContact}>
            Tem uma empresa ou pretende desenvolver um site, uma proposta de
            trabalho ou até mesmo uma crítica construtiva, sinta-se a vontade
            para me contatar através de um e-mail e assim que puder me sentirei
            grato em lhe responder!
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
          <h2>Encontre-me em minhas redes sociais</h2>
          <img className={styles.puppet} src={puppet} alt="" />
          <div className={styles.linksSocialMedia}>
            <a href="">
              <FaLinkedin
                className={`${styles.iconSocial} ${
                  isDarkMode ? "icon-light" : "icon-dark"
                }`}
              />
            </a>
            <a href="">
              <FaGithub
                className={`${styles.iconSocial} ${
                  isDarkMode ? "icon-light" : "icon-dark"
                }`}
              />
            </a>
            <a href="">
              <FaWhatsappSquare
                className={`${styles.iconSocial} ${
                  isDarkMode ? "icon-light" : "icon-dark"
                }`}
              />
            </a>
            <a href="">
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
