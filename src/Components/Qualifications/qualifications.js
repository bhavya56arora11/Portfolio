import React from "react";
import "./qualifications.css";
import '../App.css';

export default function () {
  return (
    <section className="qualifications section">
      <h2 className="section-title">Qualifications</h2>
      <span className="section-subtitle">My personal journey</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div className="qualification-button qualification-active button--flex">
            Education
          </div>
        </div>
        <div className="qualification-sections">
          <div className="qualification-content qualification-content-active">
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Higher Education</h3>
                <span className="qualification-subtitle">D.A.V. Public School</span>
                <div className="qualification-calender">till 2022</div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
            <div></div>
            <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Btech Computer Science</h3>
                <span className="qualification-subtitle">NIT Kurukshetra</span>
                <div className="qualification-calender">2022-present</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
