import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";
import { projects } from "./Data";

export default function Projects() {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom > windowHeight) {
        const scrolledIntoSection = Math.abs(rect.top);

        const maxScroll = sectionHeight - windowHeight;
        const progress = Math.min(scrolledIntoSection / maxScroll, 1);

        const index = Math.min(
          Math.floor(progress * projects.length),
          projects.length - 1
        );

        if (index !== activeProject) {
          setActiveProject(Math.max(0, index));
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeProject, projects.length]);

  const scrollToProject = (index) => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;

    const maxScroll = sectionHeight - windowHeight;
    const targetProgress = index / projects.length;
    const targetScroll = sectionTop + maxScroll * targetProgress;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" ref={sectionRef} className="projects-sticky-section">
      <div className="projects-sticky-content">
        <div className="projects-container">
          <div className="projects-left">
            <div className="projects-header">
              <span className="projects-badge">Portfolio</span>
              <h2 className="projects-title">Featured Projects</h2>
              <p className="projects-subtitle">
                Showcase of my recent work and experiments
              </p>
            </div>

            <div className="project-details" key={`details-${activeProject}`}>
              <div className="project-category">
                {projects[activeProject].category}
              </div>
              <h3 className="project-title">{projects[activeProject].title}</h3>
              <p className="project-description">
                {projects[activeProject].description}
              </p>

              <div className="project-tech">
                <span className="tech-label">Tech Stack:</span>
                <div className="tech-tags">
                  {projects[activeProject].tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
              {(projects[activeProject].github) && (
                <a
                  href={projects[activeProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                
                  <svg
                    className="link-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              )}
              {(projects[activeProject].live) && ( 
                <a
                  href={projects[activeProject].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link primary"
                >
                  <svg
                    className="link-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>
              )}
              </div>
            </div>
          </div>

          <div className="projects-right">
            <div
              className="project-image-container"
              key={`img-${activeProject}`}
            >
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="project-image"
              />
              <div className="image-overlay"></div>
            </div>

            <div className="progress-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`progress-dot ${
                    index === activeProject ? "active" : ""
                  } ${index < activeProject ? "completed" : ""}`}
                  onClick={() => scrollToProject(index)}
                  aria-label={`Go to project ${index + 1}`}
                >
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}