import React from "react";
import './ParticlesJS.css'
function ParticlesJS(props) {
  particlesJS.load("particles-container", "particlesjs-config.json");
  return (
    <div id="particles-container">
      {props.children}
    </div>
  );
}

export default ParticlesJS;
