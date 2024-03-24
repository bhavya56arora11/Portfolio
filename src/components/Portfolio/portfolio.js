import React, { useState } from "react";
import Items from "./items"; 
import { projects } from "./data";
import './portfolio.css'

const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects);

  return (
    <section className="portfolio section" id="work">
      <h2 className="section-title text-cs">Portfolio</h2>
      <p className="section-subtitle">
        My <span>Projects</span>
      </p>
      <div className="portfolio-container container grid">
        <Items projectItems={projectItems}/>
      </div>
    </section>
  );
};

export default Portfolio;
