import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Decorative blobs */}
      <div className="blob blob-1" aria-hidden="true"></div>
      <div className="blob blob-2" aria-hidden="true"></div>

      <div className="home-container fade-up">
        <div className="home-left">
          <div className="badge">✦ Available for Opportunities</div>
          <h1>

            Hi, I'm <span>Nobesuthu</span><br />
            <em>Gongo</em>
          </h1>
          <p className="role">Full Stack Developer</p>
          <p className="desc">
            I craft elegant web &amp; mobile experiences — from pixel-perfect UI in Figma
            to scalable backend systems. Passionate about clean code and purposeful design.
          </p>
          <div className="buttons">
            <Link to="/portfolio">
              <button className="btn-primary">View My Work →</button>
            </Link>
            <Link to="/contact">
              <button className="btn-outline">Let's Talk</button>
            </Link>
          </div>
          <div className="stats">
            <div className="stat">
              <strong>10+</strong>
              <span>Technologies</span>
            </div>
            <div className="divider" aria-hidden="true"></div>
            <div className="stat">
              <strong>15+</strong>
              <span>Projects</span>
            </div>
            <div className="divider" aria-hidden="true"></div>
            <div className="stat">
              <strong>3+</strong>
              <span>Years Exp.</span>
            </div>
          </div>
        </div>

        <div className="home-right">
          <div className="avatar-wrap">
            <div className="avatar-ring"></div>
            <div className="avatar">
              <span>NG</span>
              {/* Replace <span>NG</span> with <img src="/your-photo.jpg" alt="Nobesuthu Gongo" /> */}
            </div>
            <div className="floating-badge badge-react">React</div>
            <div className="floating-badge badge-python">Python</div>
            <div className="floating-badge badge-figma">Figma</div>
          </div>
        </div>
      </div>

      {/* Tech scroll ticker */}
      <div className="ticker-wrap">
        <div className="ticker">
          {['Java', 'Python', 'React', 'Django', 'C#', 'ASP.NET', 'Firebase', 'MongoDB', 'SQL', 'Figma', 'Git', 'GitHub', 'Java', 'Python', 'React', 'Django', 'C#', 'ASP.NET', 'Firebase', 'MongoDB', 'SQL', 'Figma', 'Git', 'GitHub'].map((t, i) => (
            <span key={i} className="ticker-item">{t} <span className="dot-sep">✦</span></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
