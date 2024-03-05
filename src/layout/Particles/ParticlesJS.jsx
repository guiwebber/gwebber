import React from "react";
import './ParticlesJS.css'
function ParticlesJS(props) {
  particlesJS.load("particles-js", "particlesjs-config.json");
  return (
    <div id="particles-js">
      {props.children}
    </div>
  );
}

export default ParticlesJS;
