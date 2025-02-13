import React from "react";
import Header from "./Header/header";
import Intro from "./Intro/intro";
import About from "./About/about";
import Skills from "./Skills/skills";
import Qualifications from "./Qualifications/qualifications";
import Portfolio from "./Portfolio/portfolio";
import Footer from "./Footer/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Qualifications />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
