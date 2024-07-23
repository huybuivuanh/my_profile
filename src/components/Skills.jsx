import React from "react";
import "../styles/Skills.css";

function Skills({ icon, alternative, text }) {
  return (
    <div className="skills">
      <div className="link-container">
        <img src={icon} alt={alternative} className="skill-icon"></img>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default Skills;
