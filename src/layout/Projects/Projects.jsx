import React, { useState } from "react";
import "./Projects.css";
import "../darkMode.css";
import { useDarkMode } from "../DarkModeContext";
function Projects() {
  const [positions, setPositions] = useState(['a', 'b', 'c']);

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

  const getPositionStyle = (index) => {
    const positionIndex = positions.findIndex((pos, idx) => idx === index);
    const top = positionIndex * 100; // assuming 100px height for each div
    return { position: 'absolute', top: `${top}px` };
  };

  return (
    <div className="containerProjects" style={ { position: 'relative', height: `${positions.length * 100}px` }}>
      {positions.map((position, index) => (
        <div key={index} className="box" style={getPositionStyle(index)}>
          {position}
        </div>
      ))}

      <button onClick={handleLeftClick}>Move Left</button>
      <button onClick={handleRightClick}>Move Right</button>
    </div>
  );
};

export default Projects;
