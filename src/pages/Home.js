import { motion } from 'framer-motion';
import './Home.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

function Home({ setActivePage }) {
  return (
    <div className="home">
      <div className="home-bg-circle circle1" />
      <div className="home-bg-circle circle2" />

      <div className="home-container">
        <div className="home-left">
          
 <div className="stars">
  {Array.from({ length: 60 }).map((_, i) => (
    <span
      key={i}
      className="star"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${4 + Math.random() * 6}s`,
        fontSize: `${6 + Math.random() * 6}px`,
        opacity: Math.random() * 0.6 + 0.2,
      }}
    >
      ✦
    </span>
  ))}
</div>
          <motion.h1 {...fadeUp(0.2)}>
            Hi, I'm <span>Nobesuthu</span><br />Gongo
          </motion.h1>

          <motion.div {...fadeUp(0.25)} className="role-line">
            <span className="role-text">Full Stack Developer</span>
          </motion.div>

          <motion.p {...fadeUp(0.3)}>
            Crafting elegant web &amp; mobile experiences.
            Passionate about building solutions that are as beautiful as they are functional.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="home-buttons">
            <button className="btn-primary" onClick={() => setActivePage('portfolio')}>
              View My Work
            </button>
            <button className="btn-outline" onClick={() => setActivePage('contact')}>
              Let's Talk
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="stats">
            <div className="stat">
              <strong>15+</strong>
              <span>Projects Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>10+</strong>
              <span>Technologies</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="home-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="avatar-wrap">
            <img src="SUTHU.jpg" alt="Nobesuthu Gongo" />
            <div className="avatar-ring" />
          </div>

          <motion.div
            className="float-card card-react"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>⚛️</span> React & Django
          </motion.div>

          <motion.div
            className="float-card card-design"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span>🎨</span> UI/UX Design
          </motion.div>

          <motion.div
            className="float-card card-mobile"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <span>📱</span> Mobile Apps
          </motion.div>
        </motion.div>
      </div>
        </div>
  );
}


export default Home;
