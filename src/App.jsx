import React, { useState } from "react";
import Navbar from "./layout/Navbar/Navbar";
import "./index.css";

import { useTranslation } from "react-i18next";
import "./i18n";

import Apresentation from "./layout/Apresentation/Apresentation";
import About from "./layout/About/About";
import Skills from "./layout/Skills/Skills";
import Footer from "./layout/Footer/Footer";
import BtnToTop from "./layout/btnToTop/BtnToTop";
import Projects from "./layout/Projects/Projects";
import Contact from "./layout/Contact/Contact";
import "./layout/darkMode.css";
import { DarkModeProvider } from "./layout/DarkModeContext";
import AOSEffect from "./layout/AOSEffect/AOSEffect";
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
        <AOSEffect data_aos="fade-left">
          <About
            aboutText={t("aboutText.text")}
            aboutTitle={t("aboutTitle.text")}
          />
        </AOSEffect>
        <AOSEffect data_aos="fade-right">
          <Skills
            skillsTitle={t("skillsTitle.text")}
            css={t("css.text")}
            js={t("js.text")}
            react={t("react.text")}
            json={t("json.text")}
            sass={t("sass.text")}
            jquery={t("jquery.text")}
            git={t("git.text")}
            github={t("github.text")}
            html={t("html.text")}
            api={t("api.text")}
          />
        </AOSEffect>
        <AOSEffect data_aos="fade-right">
          <Projects
            projectTitle={t("projectTitle.text")}
            valorantDesc={t("valorantDesc.text")}
            valorantTitle={t("valorantTitle.text")}
            cardTitle={t("cardTitle.text")}
            cardDesc={t("cardDesc.text")}
            newsPageTitle={t("newsPageTitle.text")}
            newsPageDesc={t("newsPageDesc.text")}
            projectBtn={t("projectBtn.text")}
          />
        </AOSEffect>
        <AOSEffect data_aos="fade-down">
          <Contact
            contactTitle={t("contactTitle.text")}
            phEmail={t("phEmail.text")}
            phMessage={t("phMessage.text")}
            phName={t("phName.text")}
            btnSend={t("btnSend.text")}
            findMe={t("findMe.text")}
            subTitleContact={t("subTitleContact.text")}
            textContact={t("textContact.text")}
            
          />
        </AOSEffect>
      </div>
      <Footer />
      <BtnToTop />
    </DarkModeProvider>
  );
}

export default App;
