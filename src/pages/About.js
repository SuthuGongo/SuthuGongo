import { motion } from 'framer-motion';
import './About.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

function About() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-inner">
        <div className="about-header" data-reveal="up">
          <motion.h2 {...fadeUp(0.1)} className="section-title">
            About <span>Me</span>
          </motion.h2>
          <motion.p {...fadeUp(0.15)} className="section-sub">
            The person behind the code
          </motion.p>
        </div>

        <div className="about-layout">
          <motion.div {...fadeUp(0.2)} className="about-profile-card" data-reveal="left">
            <div className="about-avatar">NG</div>
            <h3>Nobesuthu Gongo</h3>
            <p className="about-role">Full Stack Developer</p>
            <p className="about-location">📍 South Africa</p>
            <div className="about-tags">
              <span className="tag">Web Development</span>
              <span className="tag">Mobile Apps</span>
              <span className="tag">UI/UX Design</span>
              <span className="tag">Backend Systems</span>
            </div>
            <a className="download-cv" href="SUTHU-CV.pdf" >
              Download CV ↓
            </a>
          </motion.div>

          <div className="about-cards-grid" data-reveal="right">
            <motion.div {...fadeUp(0.25)} className="about-card">
              <div className="about-card-icon">✨</div>
              <h4>My Story</h4>
               <p>
                I'm Nobesuthu, a Full Stack Developer who genuinely enjoys turning ideas into real,
                working products. For me, coding isn't just about functionality, it's about creating
                experiences that feel smooth, intuitive, and meaningful.
                <br /><br />
                I move comfortably between frontend and backend, bringing designs to life while also
                building the systems that power them behind the scenes.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="about-card">
              <div className="about-card-icon">🚀</div>
              <h4>What I Do</h4>
              <ul>
                <li>Build responsive web applications</li>
                <li>Develop cross-platform mobile apps</li>
                <li>Design intuitive UIs in Figma</li>
                <li>Architect RESTful APIs &amp; backends</li>
                <li>Manage SQL &amp; NoSQL databases</li>
                <li>Integrate real-time services</li>
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.35)} className="about-card">
              <div className="about-card-icon">🎓</div>
              <h4>Education</h4>
              <div className="edu-item">
                <strong>Diploma in ICT (App Dev)</strong>
                <span>2023 – 2025</span>
              </div>
             <br /><br />
             <p>Software Engineering, SDLC & Agile, Databases, Mobile & Web Dev.</p>
             <br /><br />
             <h4>Beyond Code</h4>
              <p>
              Exploring design ideas, experimenting with UI/UX, and keeping up with the latest tech trends.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="about-card">
  <div className="about-card-icon">💻</div>

  <h4>Skills</h4>

  <div className="skills-list">

    <div className="skill-item">
      <div className="skill-top">
        <span>React / Frontend</span>
        <span>90%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: '90%' }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>

    <div className="skill-item">
      <div className="skill-top">
        <span>Python / Django</span>
        <span>85%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: '85%' }}
          transition={{ duration: 1, delay: 0.1 }}
        />
      </div>
    </div>

    <div className="skill-item">
      <div className="skill-top">
        <span>Java Development</span>
        <span>82%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: '82%' }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>

    <div className="skill-item">
      <div className="skill-top">
        <span>Android Development</span>
        <span>80%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: '80%' }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </div>

    <div className="skill-item">
      <div className="skill-top">
        <span>UI/UX (Figma)</span>
        <span>88%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: '88%' }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
    </div>

  </div>
</motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;