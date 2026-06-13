import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const links = [
  { id: 'home',      label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about',     label: 'About' },
  { id: 'contact',   label: 'Contact' },
];

function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressRef.current) progressRef.current.style.width = pct + '%';
      setScrolled(scrollTop > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: '3px', zIndex: 1100,
        background: 'rgba(192,115,122,0.12)', pointerEvents: 'none',
      }}>
        <div ref={progressRef} style={{
          height: '100%', width: '0%',
          background: 'linear-gradient(90deg, #c0737a, #e89aa3)',
          transition: 'width 0.1s linear',
          borderRadius: '0 2px 2px 0',
        }} />
      </div>

      <motion.nav
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ top: '3px' }}
      >
        <div className="nav-logo" onClick={() => setActivePage('home')}>NG.</div>

        <div className="nav-links">
          {links.map(link => (
            <button
              key={link.id}
              className={`nav-btn ${activePage === link.id ? 'active' : ''}`}
              onClick={() => setActivePage(link.id)}
            >
              {link.label}
              {activePage === link.id && (
                <motion.div className="nav-indicator" layoutId="nav-indicator" />
              )}
            </button>
          ))}
        </div>

        <button className="nav-cta" onClick={() => setActivePage('contact')}>
          Hire Me
        </button>
      </motion.nav>
    </>
  );
}

export default Navbar;
