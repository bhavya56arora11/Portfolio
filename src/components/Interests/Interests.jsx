import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Interests.css';
import { interests } from './Data';

gsap.registerPlugin(ScrollTrigger);

export default function Interests() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

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

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.08,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              end: 'top 70%',
              toggleActions: 'play none none reverse',
            }
          });

          gsap.to(card, {
            y: -30,
            scrollTrigger: {
              trigger: card,
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
    <section id="interests" ref={sectionRef} className="interests-section-bento">
      <div className="interests-container-bento">
        <div ref={titleRef} className="interests-header-bento">
          <h2 className="interests-title-bento">Beyond Code</h2>
          <p className="interests-subtitle-bento">
            Things that inspire and excite me
          </p>
        </div>

        <div className="bento-grid">
          {interests.map((interest, index) => (
            interest.type === 'image' ? (
              <div
                key={interest.id}
                ref={el => cardsRef.current[index] = el}
                className={`bento-image ${interest.size}`}
              >
                <img 
                  src={interest.src} 
                  alt={interest.alt}
                  className="bento-img"
                />
                <div className="image-ice-overlay"></div>
              </div>
            ) : (
              <div
                key={interest.id}
                ref={el => cardsRef.current[index] = el}
                className={`bento-card ${interest.size}`}
              >
                <div className="bento-content">
                  <div className="bento-icon">{interest.icon}</div>
                  <span className="bento-category">{interest.category}</span>
                  <h3 className="bento-title">{interest.title}</h3>
                  <p className="bento-description">{interest.description}</p>
                  <div className="bento-quote">
                    <span className="quote-mark">"</span>
                    <p className="quote-text">{interest.quote}</p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      <div className="ice-crystal ice-1"></div>
      <div className="ice-crystal ice-2"></div>
      <div className="ice-crystal ice-3"></div>
    </section>
  );
}