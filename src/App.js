import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  const homeRef      = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef     = useRef(null);
  const contactRef   = useRef(null);

  const refs = { home: homeRef, portfolio: portfolioRef, about: aboutRef, contact: contactRef };

  const handleSetPage = (page) => {
    refs[page]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observers = [];
    Object.entries(refs).forEach(([id, ref]) => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActivePage(id); },
        { threshold: 0.3 }
      );
      obs.observe(ref.current);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <Navbar activePage={activePage} setActivePage={handleSetPage} />
      <div ref={homeRef}><Home setActivePage={handleSetPage} /></div>
      <div ref={portfolioRef}><Portfolio setActivePage={handleSetPage} /></div>
      <div ref={aboutRef}><About setActivePage={handleSetPage} /></div>
      <div ref={contactRef}><Contact setActivePage={handleSetPage} /></div>
    </div>
  );
}

export default App;
