import React, { useState, createContext, useContext } from "react";
import Navbar from "./layout/Navbar/Navbar";
import "./index.css";

import { useTranslation } from "react-i18next";
import "./i18n";

import Apresentation from "./layout/Apresentation/Apresentation";
import About from "./layout/About/About";
import Skills from "./layout/Skills/Skills";
import Footer from "./layout/Footer/Footer";
import BtnToTop from "./layout/btnToTop/BtnToTop";
import NewComponent from "./layout/newComponent/NewComponent";
import "./layout/darkMode.css";
import { DarkModeProvider } from "./layout/DarkModeContext";
function App() {
  const { t } = useTranslation();
  const [dadosRecebidos, setDadosRecebidos] = useState(true);
  const receberDadosDoFilho = (dados) => {
    setDadosRecebidos(dados);
  };
  return (
    <DarkModeProvider>
      <Navbar
        sendData={receberDadosDoFilho}
        customClass="teste"
        about={t("about.text")}
        contact={t("contact.text")}
        projects={t("projects.text")}
        formation={t("formation.text")}
        skills={t("skills.text")}
      />
      <div
        className={`container ${dadosRecebidos ? "dark-mode" : "light-mode"}`}
      >
        <Apresentation
          apresentation={t("apresentation.text")}
          dev={t("dev.text")}
        />
        <About
          aboutText={t("aboutText.text")}
          aboutTitle={t("aboutTitle.text")}
        />
        <Skills />
      </div>
      <Footer />
      <BtnToTop/>
      <NewComponent/>
    </DarkModeProvider>
  );
}

export default App;
