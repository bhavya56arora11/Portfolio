import React from "react";
import Info from "./info";
import "./about.css";
import image from "./image.jpg";
import cv from "./Bhavya_Arora.pdf"
import "../App.css";

function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My introduction</span>

      <div className="about-container container grid">
        <img className="about-img" src={image}></img>
        <div className="about-data">
          <Info />

          <a href={cv} download="Bhavya Arora.pdf">
            <div class="button">
              Download CV<span class="button-border"></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;