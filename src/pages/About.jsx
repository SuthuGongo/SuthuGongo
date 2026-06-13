import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-inner">

        <div className="about-header">
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About <span>Me</span></h2>
          <p className="section-sub">The person behind the code</p>
        </div>

        <div className="about-hero">
          <div className="about-avatar">
            <span>NG</span>
            {/* Replace with: <img src="/your-photo.jpg" alt="Nobesuthu Gongo" /> */}
          </div>
          <div className="about-intro">
            <h3>Hi, I'm Nobesuthu Gongo 👋</h3>
            <p>
              A passionate Full Stack Developer based in South Africa, with a love for crafting
              clean, meaningful digital experiences. I work across the full spectrum — from
              pixel-perfect UI design in Figma to scalable backend systems built with Django,
              ASP.NET and Java.
            </p>
            <p>
              I thrive in collaborative environments and enjoy solving complex problems with
              elegant, user-centred solutions. Whether it's a web app, mobile experience, or
              API architecture — I bring both technical rigour and creative thinking to every project.
            </p>
            <div className="about-tags">
              <span>Web Development</span>
              <span>Mobile Apps</span>
              <span>UI/UX Design</span>
              <span>API Architecture</span>
              <span>Database Design</span>
            </div>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-icon">💼</div>
            <h3>What I Do</h3>
            <ul>
              <li>Build responsive web applications with React & Django</li>
              <li>Develop cross-platform mobile apps (React Native)</li>
              <li>Design intuitive user interfaces in Figma</li>
              <li>Architect RESTful APIs & backend systems</li>
              <li>Manage relational (SQL) & NoSQL databases</li>
              <li>Integrate real-time cloud services via Firebase</li>
            </ul>
          </div>

          <div className="about-card">
            <div className="about-card-icon">🎓</div>
            <h3>Education</h3>
            <div className="edu-item">
              <div className="edu-degree">BSc Computer Science</div>
              <div className="edu-school">University — 2021 – 2024</div>
              <div className="edu-modules">
                Relevant modules: Software Engineering · Databases · Mobile Development ·
                Web Technologies · Algorithms & Data Structures · Human-Computer Interaction
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-icon">🌍</div>
            <h3>Beyond Code</h3>
            <p>
              When I'm not coding, I'm exploring new design trends, contributing to open-source
              projects, and mentoring junior developers. I stay current with the evolving tech
              landscape and love turning ideas into impactful digital products.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">🎯</div>
            <h3>Goals</h3>
            <p>
              I aim to build scalable, accessible software that genuinely improves people's lives.
              I'm continuously growing my skills in cloud architecture, AI integration, and advanced
              mobile development — always staying curious and driven.
            </p>
          </div>
        </div>

        <div className="availability-banner">
          <div className="avail-dot"></div>
          <div>
            <strong>Open to opportunities</strong>
            <span>Remote · Hybrid · On-site — South Africa & worldwide</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
