import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const scrollTop = () => {
    scroll.scrollToTop({ duration: 100 });
  };

  const changeNav = () => {
    setScrollNav(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  return (
    <header className={`${scrollNav ? "scroll-header" : ""} header`}>
      <nav className="nav">
        <div className="nav-logo" onClick={scrollTop}>
          Arora ji
        </div>

        <div className={`nav-menu ${showMenu ? "show" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="intro"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setShowMenu(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setShowMenu(false)}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setShowMenu(false)}
              >
                Projects
              </Link>
            </li>
              <li className="nav-item">
              <Link
                to="experience"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setShowMenu(false)}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="interests"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setShowMenu(false)}
              >
                Interests
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="footer"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setShowMenu(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`nav-toggle ${showMenu ? "animate-toggle" : ""}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
