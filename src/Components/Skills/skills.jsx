import React from "react";
import "./skills.css";
import List from "./list";
import '../App.css';

export default function Skill() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My technical level</span>

      <div>
<List />
      </div>
    </section>
  );
}
