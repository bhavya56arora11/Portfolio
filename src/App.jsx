import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';
import Footer from './components/Footer/Footer';
import GhostCursor from './components/GhostCursor/GhostCursor';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Global Ghost Cursor Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <GhostCursor
          color="#B19EEF"
          brightness={2}
          edgeIntensity={0}
          trailLength={50}
          inertia={0.5}
          grainIntensity={0.05}
          bloomStrength={0.1}
          bloomRadius={1}
          bloomThreshold={0.025}
          fadeDelayMs={1000}
          fadeDurationMs={1500}
          zIndex={0}
        />
      </div>
      <Header />
      <main>
        <Intro />
        <Skills />
        <Projects />
        <Experience />
        <Interests />
        <Footer />
      </main>
    </div>
  );
}

export default App;