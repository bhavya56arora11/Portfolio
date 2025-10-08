import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Intro.css';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const mm = gsap.matchMedia();
    
    mm.add('(min-width: 768px)', () => {
      gsap.to(videoRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'center top',
          scrub: 0.5,
        }
      });

      gsap.to(textRef.current, {
        scale: 0.8,
        opacity: 0,
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'center top',
          scrub: 0.5,
        }
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => setScrollProgress(self.progress),
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section 
      id="intro" 
      ref={containerRef} 
      className="intro-section"
    >
      {/* <div className="intro-video-container">
        <video
          ref={videoRef}
          className="intro-video"
          src="https://assets-global.website-files.com/5e18a1cc86ccdc5d5a0d353d/6436c09081e7055dd8e3e27c_Hero-2023-lg-transcode.mp4"
          data-wf-ignore="true"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          onError={(e) => console.error('Video failed to load:', e)}
        />
        
      </div> */}

      <div ref={overlayRef} className="intro-overlay" />

      <div className="intro-content">
        <div ref={textRef} className="intro-text">
          <h1 className="intro-title">
            Hi, I'm <span className="intro-name">Bhavya Arora</span>
          </h1>
          <p className="intro-subtitle">
            Software Developer
          </p>
          
          <div className="intro-scroll-indicator">
            <svg 
              className="intro-scroll-icon" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      
    </section>
  );
}