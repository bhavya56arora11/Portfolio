import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./skills.css";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef([]);

  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { icon: "/Portfolio/assets/Icons/atom.png" },
        { icon: "/Portfolio/assets/Icons/js.png" },
        { icon: "/Portfolio/assets/Icons/html-5.png" },
        { icon: "/Portfolio/assets/Icons/css-3.png" },
      ],
    },
    {
      category: "Programming",
      skills: [
        { icon: "/Portfolio/assets/Icons/c++.png" },
        { icon: "/Portfolio/assets/Icons/java.png" },
        { icon: "/Portfolio/assets/Icons/python.png" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { icon: "/Portfolio/assets/Icons/node-js.png" },
        { icon: "/Portfolio/assets/Icons/mongodb.png" },
        { icon: "/Portfolio/assets/Icons/sql-server.png" },
        { icon: "/Portfolio/assets/Icons/django.png" },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 0.6,
        },
      });

      skillsRef.current.forEach((card) => {
        if (card) {
          gsap.from(card, {
            y: 60,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 65%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <div className="skills-container">
        <div ref={titleRef} className="skills-header">
          <h2 className="skills-title">Skills &amp; Expertise</h2>
          <p className="skills-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, catIndex) => (
            <div
              key={catIndex}
              ref={(el) => (skillsRef.current[catIndex] = el)}
              className="card"
            >
              <div className="boxshadow" />
              <div className="main">
                <div className="top" />
                <div className="left side" />
                <div className="right side" />
                <div className="title">{category.category}</div>
                <div className="skill-items-wrapper">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <img
                        src={skill.icon}
                        alt={`${category.category} icon`}
                        className="skill-icon"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
