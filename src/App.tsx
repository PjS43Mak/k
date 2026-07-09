/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import CareerVision from './components/CareerVision';
import Activities from './components/Activities';
import Strengths from './components/Strengths';
import Commitment from './components/Commitment';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'goal', 'activities', 'strengths', 'commitment'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="portfolio-app" className="bg-slate-950 min-h-screen text-slate-100 selection:bg-sky-500/30 selection:text-sky-300">
      {/* Scroll Spy Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Document Flow */}
      <main>
        <Hero />
        <AboutMe />
        <CareerVision />
        <Activities />
        <Strengths />
        <Commitment />
      </main>

      {/* Corporate Technical Footer */}
      <Footer />
    </div>
  );
}

