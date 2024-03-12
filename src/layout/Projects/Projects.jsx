import React, { useState } from "react";
import "./Projects.css";
import "../darkMode.css";
import { useDarkMode } from "../DarkModeContext";
import valorant from "../../images/valorantguide.png";
import cartao from "../../images/cartao.png";
import news from "../../images/news-page.png";
import i18n from "../../i18n";
function Projects({
  projectTitle,
  valorantTitle,
  valorantDesc,
  cardTitle,
  cardDesc,
  newsPageTitle,
  newsPageDesc,
}) {
  const { isDarkMode } = useDarkMode();
  const [positions, setPositions] = useState([
    {
      title: i18n.t(valorantTitle),
      description: i18n.t(valorantDesc),
      image: valorant,
      projectLink: "https://valorant-guide.vercel.app/index.html",
    },
    {
      title: i18n.t(cardTitle),
      description: i18n.t(cardDesc),
      image: cartao,
      projectLink: "https://interactive-card-form-six.vercel.app/",
    },
    {
      title: i18n.t(newsPageTitle),
      description: i18n.t(newsPageDesc),
      image: news,
      projectLink: "https://news-homepage-grid.vercel.app/",
    },
  ]);

  const handleRightClick = () => {
    const newPos = [...positions];
    const lastElement = newPos.pop();
    newPos.unshift(lastElement);
    setPositions(newPos);
  };

  const handleLeftClick = () => {
    const newPos = [...positions];
    const firstElement = newPos.shift();
    newPos.push(firstElement);
    setPositions(newPos);
  };

  return (
    <div
      id="projects"
      className={`containerProjects ${
        isDarkMode ? "projects-white" : "projects-black"
      }`}
    >
      <h1
        className={` titleProjects ${
          isDarkMode ? "title-dark" : "title-light"
        }`}
      >
        {projectTitle}
      </h1>
      <button className="btnLeft" onClick={handleLeftClick}>
        ⇐
      </button>
      {positions.map((project, index) => (
        <div
          key={index}
          className={`box ${
            index === 0
              ? "left"
              : index === positions.length - 1
              ? "right"
              : "center"
          } ${isDarkMode ? "box-black" : "box-white"}`}
        >
          <img
            className="imageProject"
            src={project.image}
            alt={project.title}
          />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a
            target="_blank"
            className={`projectLink ${
              isDarkMode ? "link-black" : "link-white"
            }`}
            href={project.projectLink}
          >
            Link do projeto
          </a>
        </div>
      ))}
      <button className="btnRight" onClick={handleRightClick}>
        ⇒
      </button>
    </div>
  );
}

export default Projects;
