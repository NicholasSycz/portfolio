import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from './components/Education';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from './components/Projects';

const App: React.FC = () => {
    const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  return (
    <Router>
      <div className="min-h-screen relative overflow-x-hidden transition-colors duration-300">
        <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[120px] rounded-full animate-blob"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-500/10 dark:bg-amber-500/10 blur-[120px] rounded-full animate-blob animation-delay-2000"></div>
        </div>

        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Skills />
                  <Education />
                  <Experience />
                  <Projects />
                </>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
