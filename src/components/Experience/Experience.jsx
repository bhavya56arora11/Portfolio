import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';
import { experiences } from './Data';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const pathRef = useRef(null);
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
        }
      });

      // Animate path drawing
      gsap.from(pathRef.current, {
        strokeDashoffset: 2000,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      });

      timelineItemsRef.current.forEach((item, index) => {
        if (item) {
          const isLeft = index % 2 === 0;
          
          gsap.from(item, {
            x: isLeft ? -100 : 100,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'top 65%',
              toggleActions: 'play none none reverse',
            }
          });

          gsap.to(item, {
            y: -50,
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="experience-section">
      <div className="experience-container">
        <div ref={titleRef} className="experience-header">
          <h2 className="experience-title">Journey & Experience</h2>
          <p className="experience-subtitle">
            My educational background and professional path
          </p>
        </div>

        <div className="timeline-wrapper">
          <svg className="timeline-path" viewBox="0 0 100 2000" preserveAspectRatio="none">
            <path
              ref={pathRef}
              d="M 10 0 L 90 400 L 10 800 L 90 1200 L 10 1600 L 50 2000"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="2000"
              strokeDashoffset="0"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFB800" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#dc2626" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFB800" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          <div className="timeline-items">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={el => timelineItemsRef.current[index] = el}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${exp.type}`}
              >
                <div className="timeline-dot">
                  <div className="dot-inner"></div>
                  <div className="dot-ring"></div>
                </div>

                <div className="timeline-card">
                  <div className="card-header">
                    <span className={`card-badge ${exp.type}`}>
                      {exp.type === 'education' ? '🎓 Education' : '💼 Work'}
                    </span>
                    <span className="card-year">{exp.year}</span>
                  </div>

                  <h3 className="card-title">{exp.title}</h3>
                  <p className="card-institution">{exp.institution}</p>
                  <p className="card-description">{exp.description}</p>

                  <div className="card-achievements">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="achievement-item">
                        <span className="achievement-icon">▸</span>
                        <span className="achievement-text">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="experience-bg-element element-1"></div>
      <div className="experience-bg-element element-2"></div>
    </section>
  );
}