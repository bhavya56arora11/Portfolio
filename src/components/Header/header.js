import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import "./header.css";
import "../App.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const scrollTop = () => {
    animateScroll.scrollToTop({ duration: 100 });
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  return (
    <Parallax speed={-10}>
      <header className={`${scrollNav ? "scroll-header " : ""}header`}>
        <nav className="nav">
          <NavLink to="/" className="nav-logo" onClick={scrollTop}>
            Mr.Arora
          </NavLink>
          <div className={`nav-menu ${showMenu ? "show" : ""}`}>
            <div className="nav-data">
              <ul className="nav-list">
                {[
                  { name: "Home", id: "/" },
                  { name: "About", id: "about" },
                  { name: "Skills", id: "skills" },
                  { name: "Qualifications", id: "qualifications" },
                  { name: "Portfolio", id: "work" },
                  { name: "Contact", id: "footer" },
                ].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      to={item.id}
                      className="nav-link"
                      spy={true}
                      smooth={true}
                      offset={-40}
                      duration={50}
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="nav-btns">
            <div
              className={`nav-toggle ${showMenu ? "animate-toggle" : ""}`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>
    </Parallax>
  );
}