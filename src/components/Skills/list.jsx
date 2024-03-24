import React from "react";
import htmlIcon from "../../Icons/html-5.png";
import cssIcon from "../../Icons/css-3.png";
import jsIcon from "../../Icons/js.png";
import reactIcon from "../../Icons/atom.png";
import nodeIcon from "../../Icons/node-js.png";
import mongoIcon from "../../Icons/mongodb.png";
import sqlIcon from "../../Icons/sql-server.png";
import cIcon from "../../Icons/c++.png";
import javaIcon from "../../Icons/java.png";
import pythonIcon from "../../Icons/python.png";

const List = () => {
  return (
    <section className="skills-container container">
      <h3 className="skills-title">Frontend skills</h3>
      <div className="skill-box">
        <div className="skills-group">
          <div className="skills-data">
            <img src={htmlIcon}></img>

            <div>
              <h3 className="skills-name">Html</h3>
            </div>
          </div>
          <div className="skills-data">
            <img src={cssIcon}></img>

            <div>
              <h3 className="skills-name">CSS</h3>
            </div>
          </div>
          <div className="skills-data">
            <img src={jsIcon}></img>

            <div>
              <h3 className="skills-name">Javascript</h3>
            </div>
          </div>
          <div className="skills-data">
            <img src={reactIcon}></img>

            <div>
              <h3 className="skills-name">ReactJs</h3>
            </div>
          </div>
        </div>
      </div>

      <h3 className="skills-title">Backend Skills</h3>
      <div className="skill-box">
        <div className="skills-group">
          <div className="skills-data">
            <img src={nodeIcon}></img>

            <div>
              <h3 className="skills-name">Node js</h3>
            </div>
          </div>
          <div className="skills-data">
            <img src={mongoIcon}></img>

            <div>
              <h3 className="skills-name">Mongo</h3>
            </div>
          </div>
          <div className="skills-data">
            <img src={sqlIcon}></img>

            <div>
              <h3 className="skills-name">SQL</h3>
            </div>
          </div>
        </div>

        <h3 className="skills-title">Programming Skills</h3>
        <div className="skill-box">
          <div className="skills-group">
            <div className="skills-data">
              <img src={cIcon}></img>

              <div>
                <h3 className="skills-name">C++</h3>
              </div>
            </div>
            <div className="skills-data">
              <img src={javaIcon}></img>

              <div>
                <h3 className="skills-name">Java</h3>
              </div>
            </div>
            <div className="skills-data">
              <img src={pythonIcon}></img>

              <div>
                <h3 className="skills-name">Python</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
