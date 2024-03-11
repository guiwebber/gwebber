import React, { useState } from "react";
import "./Projects.css";
import "../darkMode.css";
import { useDarkMode } from "../DarkModeContext";

function Projects() {
  const { isDarkMode } = useDarkMode();
  const [positions, setPositions] = useState([
    {
      title: "Valorant Guide",
      description:
        "Projeto utilizando a api de valorant, e utilizando as tecnologias HTML, CSS e JavaScript",
      image: "../../src/images/valorantguide.png",
      projectLink: "https://valorant-guide.vercel.app/index.html",
    },
    {
      title: "Cartão interativo",
      description:
        "Projeto com intuito de criar uma página de cadastro de cartão de crédito, com interatividade, utilizando HTMl, CSS e JavaScript",
      image: "../../src/images/cartao.png",
      projectLink: "https://interactive-card-form-six.vercel.app/",
    },
    {
      title: "Página principal de notícias",
      description:
        "Projeto focado em uma landing page, focada em posicionamento de elementos, utilizando somente HTML e CSS ",
      image: "../../src/images/news-page.png",
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
      className={`containerProjects ${
        isDarkMode ? "projects-white" : "projects-black"
      }`}
    >
      <button className="btnLeft" onClick={handleLeftClick}>
        ⬅
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
        ⮕
      </button>
    </div>
  );
}

export default Projects;
