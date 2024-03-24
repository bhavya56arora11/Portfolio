import React from "react";
import "./intro.css";
import { Link } from "react-scroll";

function intro() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="Hi">Hi</span>
        <span className="introText">
          I am<span className="introName"> Bhavya Arora</span><br></br>A Web Developer
        </span>
      </div>
      <video autoPlay muted loop className="introVid">
        <source
          src="https://assets-global.website-files.com/5e18a1cc86ccdc5d5a0d353d/6436c09081e7055dd8e3e27c_Hero-2023-lg-transcode.mp4"
          data-wf-ignore="true"
        ></source>
      </video>
    </section>
  );
}

export default intro;
