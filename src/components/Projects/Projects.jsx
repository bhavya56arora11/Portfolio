import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./projects.css";
import { projects } from "./Data";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const total = projects.length;
    let isAnimating = false;

    const applySectionHeight = () => {
      section.style.height = `${window.innerHeight * total}px`;
    };
    applySectionHeight();

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${window.innerHeight * (total - 1)}`,
      pin: content,
      pinSpacing: false,
      onUpdate: (self) => {
        const overallProgress = self.progress || 0;
        const idx = Math.min(Math.floor(overallProgress * total), total - 1);

        if (idx !== activeProject && !isAnimating) {
          isAnimating = true;

          const timeline = gsap.timeline({
            onComplete: () => {
              isAnimating = false;
            },
          });

          timeline
            .to(".project-details, .project-image-container", {
              opacity: 0,
              y: -30,
              duration: 0.4,
              ease: "power2.in",
            })
            .call(() => {
              setActiveProject(idx);
            })
            .fromTo(
              ".project-details, .project-image-container",
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.1,
              }
            );
        }
      },
    });

    const onResize = () => {
      applySectionHeight();
      st.refresh();
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      st.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill && t.kill());
    };
  }, [activeProject, projects.length]);

  const jumpToProject = (index) => {
    const section = sectionRef.current;
    if (!section) return;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const target = sectionTop + index * window.innerHeight;

    gsap.to(".project-details, .project-image-container", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        setActiveProject(index);
        window.scrollTo({ top: Math.round(target), behavior: "smooth" });
        gsap.fromTo(
          ".project-details, .project-image-container",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
      },
    });
  };

  const getVisibleDots = () => {
    const total = projects.length;

    let start = activeProject - 2;
    let end = activeProject + 2;

    if (start < 0) {
      end += Math.abs(start);
      start = 0;
    }
    if (end >= total) {
      start -= end - total + 1;
      end = total - 1;
    }
    start = Math.max(0, start);
    end = Math.min(total - 1, end);

    const dots = [];
    for (let i = start; i <= end; i++) {
      const distanceFromActive = Math.abs(i - activeProject);
      dots.push({
        index: i,
        distance: distanceFromActive,
        isActive: i === activeProject,
      });
    }
    return dots;
  };

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div ref={contentRef} className="projects-content">
        <div className="projects-container">
          <div className="projects-left">
            <div className="projects-header">
              <span className="projects-badge">Portfolio</span>
              <h2 className="projects-title">Featured Projects</h2>
              <p className="projects-subtitle">
                Showcase of my recent work and experiments
              </p>
            </div>

            <div className="project-details">
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
                  {projects[activeProject].tech.map((t, i) => (
                    <span key={i} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {projects[activeProject].github && (
                  <a
                    href={projects[activeProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Code
                  </a>
                )}
                {projects[activeProject].live && (
                  <a
                    href={projects[activeProject].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="projects-right">
            <div className="project-image-container">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="project-image"
              />
              <div className="image-overlay" />
            </div>

            <div
              className="progress-dots"
              role="tablist"
              aria-label="Project navigation"
            >
              {getVisibleDots().map((dot, idx) => (
                <button
                  key={dot.index}
                  type="button"
                  className={`progress-dot ${
                    dot.isActive ? "active" : ""
                  } distance-${dot.distance}`}
                  onClick={() => jumpToProject(dot.index)}
                  aria-current={dot.isActive}
                  aria-label={`Go to project ${dot.index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
