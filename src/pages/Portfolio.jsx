import { useState, useRef, useEffect } from 'react';
import {
  FaJava, FaPython, FaReact, FaGitAlt, FaFigma, FaGithub, FaDatabase,
} from 'react-icons/fa';
import {
  SiDjango, SiFirebase, SiMongodb, SiCsharp, SiMicrosoftazure,
} from 'react-icons/si';
import './Portfolio.css';

const techStack = [
  { icon: <FaJava />,           name: 'Java',     color: '#b07219' },
  { icon: <FaPython />,         name: 'Python',   color: '#3572A5' },
  { icon: <FaReact />,          name: 'React',    color: '#61DAFB' },
  { icon: <SiDjango />,         name: 'Django',   color: '#092E20' },
  { icon: <SiCsharp />,         name: 'C#',       color: '#178600' },
  { icon: <SiMicrosoftazure />, name: 'ASP.NET',  color: '#512BD4' },
  { icon: <SiFirebase />,       name: 'Firebase', color: '#FFCA28' },
  { icon: <SiMongodb />,        name: 'MongoDB',  color: '#47A248' },
  { icon: <FaDatabase />,       name: 'SQL',      color: '#336791' },
  { icon: <FaFigma />,          name: 'Figma',    color: '#F24E1E' },
  { icon: <FaGitAlt />,         name: 'Git',      color: '#F05032' },
  { icon: <FaGithub />,         name: 'GitHub',   color: '#181717' },
];

const defaultProjects = [
  { id: 1, title: 'E-Commerce Platform',  type: 'Web App',    emoji: '🛒', desc: 'Full-stack shopping experience with payment integration and real-time inventory management.',         tags: ['React', 'Django', 'Firebase'],  image: null, liveLink: 'https://your-ecommerce-link.com' },
  { id: 2, title: 'Task Manager App',     type: 'Mobile App', emoji: '📱', desc: 'Cross-platform productivity app with offline sync, push notifications and team collaboration.',       tags: ['React Native', 'Firebase'],     image: null, liveLink: 'https://your-taskmanager-link.com' },
  { id: 3, title: 'Healthcare Portal',    type: 'Web App',    emoji: '🏥', desc: 'Patient management system with appointment scheduling, records and detailed reporting.',              tags: ['ASP.NET', 'SQL', 'C#'],         image: null, liveLink: 'https://your-healthcare-link.com' },
  { id: 4, title: 'Real-time Chat App',   type: 'Web App',    emoji: '💬', desc: 'Instant messaging with rooms, file sharing, user presence indicators and message history.',          tags: ['React', 'MongoDB'],             image: null, liveLink: 'https://your-chatapp-link.com' },
  { id: 5, title: 'Analytics Dashboard',  type: 'Dashboard',  emoji: '📊', desc: 'Interactive data visualisation dashboard with custom charts, filters and PDF export.',              tags: ['Python', 'Django', 'SQL'],      image: null, liveLink: 'https://your-dashboard-link.com' },
  { id: 6, title: 'Design Portfolio App', type: 'Mobile App', emoji: '🎨', desc: 'Mobile showcase app designed end-to-end in Figma, built with React Native.',                        tags: ['Figma', 'React Native'],        image: null, liveLink: 'https://your-portfolio-link.com' },
];

const defaultCerts = [
  { icon: '🏆', name: 'Meta Front-End Developer',        issuer: 'Meta / Coursera',                   year: '2024' },
  { icon: '☁️', name: 'Google Cloud Fundamentals',       issuer: 'Google',                             year: '2024' },
  { icon: '🐍', name: 'Python for Everybody',             issuer: 'University of Michigan / Coursera', year: '2023' },
  { icon: '⚛️', name: 'React — The Complete Guide',       issuer: 'Udemy',                             year: '2023' },
  { icon: '🔥', name: 'Firebase Developer Certification', issuer: 'Google',                             year: '2023' },
  { icon: '🎨', name: 'UI/UX Design Fundamentals',        issuer: 'Google / Coursera',                 year: '2022' },
];

// ── localStorage helpers ──────────────────────────────────────────────────────
const LS_KEY = 'portfolio_cert_images';

function loadCertImages() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveCertImage(index, dataUrl) {
  try {
    const current = loadCertImages();
    current[index] = dataUrl;
    localStorage.setItem(LS_KEY, JSON.stringify(current));
  } catch (e) {
    console.warn('Could not save cert image to localStorage:', e);
  }
}

function removeCertImage(index) {
  try {
    const current = loadCertImages();
    delete current[index];
    localStorage.setItem(LS_KEY, JSON.stringify(current));
  } catch {}
}
// ─────────────────────────────────────────────────────────────────────────────

function ProjectCard({ project, onImageChange }) {
  const inputRef = useRef();
  return (
    <div className="project-card">
      <div className="card-thumb" onClick={() => inputRef.current.click()} title="Click to upload a project screenshot">
        {project.image
          ? <img src={project.image} alt={project.title} />
          : (
            <div className="card-thumb-placeholder">
              <span className="card-emoji">{project.emoji}</span>
              <span className="upload-hint">Click to add screenshot</span>
            </div>
          )
        }
      </div>
      <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }}
        onChange={e => {
          const file = e.target.files[0]; if (!file) return;
          const reader = new FileReader();
          reader.onload = ev => onImageChange(project.id, ev.target.result);
          reader.readAsDataURL(file);
        }}
      />
      <div className="card-body">
        <div className="card-tag">{project.type}</div>
        <div className="card-title">{project.title}</div>
        <div className="card-desc">{project.desc}</div>
      </div>
      <div className="card-footer">
        {project.tags.map(t => <span key={t} className="chip">{t}</span>)}
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link-btn">🔗 Live</a>
        )}
      </div>
    </div>
  );
}

function CertCard({ cert, index, onImageChange }) {
  const inputRef = useRef();
  const [lightbox, setLightbox] = useState(false);

  const handleFile = e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => onImageChange(index, ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="cert-card">
        {/* Thumbnail / upload zone */}
        <div className="cert-thumb" onClick={() => inputRef.current.click()} title="Upload certificate image">
          {cert.image
            ? <img src={cert.image} alt={cert.name} className="cert-thumb-img" />
            : (
              <div className="cert-thumb-placeholder">
                <span className="cert-thumb-icon">{cert.icon}</span>
              </div>
            )
          }
          <div className="cert-thumb-hover">📄</div>
        </div>

        <input ref={inputRef} type="file" accept="image/*,application/pdf" style={{ display: 'none' }} onChange={handleFile} />

        {/* Info */}
        <div className="cert-info">
          <div className="cert-name">{cert.name}</div>
          <div className="cert-issuer">{cert.issuer}</div>
          <div className="cert-year-badge">{cert.year}</div>
        </div>

        {/* View button — only shown when image is uploaded */}
        {cert.image && (
          <button className="cert-view-btn" onClick={() => setLightbox(true)} title="View certificate">↗</button>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="cert-lightbox" onClick={() => setLightbox(false)}>
          <div className="cert-lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="cert-lightbox-close" onClick={() => setLightbox(false)}>✕</button>
            <img src={cert.image} alt={cert.name} />
            <p className="cert-lightbox-label">{cert.name} · {cert.issuer} · {cert.year}</p>
          </div>
        </div>
      )}
    </>
  );
}

function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects]   = useState(defaultProjects);

  // Initialise certs — merge defaultCerts with any saved images from localStorage
  const [certs, setCerts] = useState(() => {
    const saved = loadCertImages();
    return defaultCerts.map((c, i) => ({ ...c, image: saved[i] ?? null }));
  });

  const handleProjectImage = (id, dataUrl) =>
    setProjects(prev => prev.map(p => p.id === id ? { ...p, image: dataUrl } : p));

  const handleCertImage = (index, dataUrl) => {
    saveCertImage(index, dataUrl);                          // persist to localStorage
    setCerts(prev => prev.map((c, i) => i === index ? { ...c, image: dataUrl } : c));
  };

  return (
    <div className="portfolio-page">
      <div className="portfolio-inner">
        <div className="portfolio-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Creative <span>Portfolio</span></h2>
          <p className="section-sub">Projects, certifications and the technologies I work with</p>
        </div>

        <div className="tabs-wrap">
          <div className="tabs">
            {[
              { key: 'projects',      label: 'Projects'     },
              { key: 'certificates',  label: 'Certificates' },
              { key: 'stack',         label: 'Tech Stack'   },
            ].map(({ key, label }) => (
              <button key={key} className={`tab-btn ${activeTab === key ? 'active' : ''}`} onClick={() => setActiveTab(key)}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="tab-content">

          {activeTab === 'projects' && (
            <>
              <p className="tab-hint">💡 Click on any project image to upload your own screenshot</p>
              <div className="projects-grid">
                {projects.map(p => <ProjectCard key={p.id} project={p} onImageChange={handleProjectImage} />)}
              </div>
            </>
          )}

          {activeTab === 'certificates' && (
            <>
              <p className="tab-hint">💡 Click the thumbnail to upload — images are saved and will persist after refresh</p>
              <div className="certs-list">
                {certs.map((c, i) => <CertCard key={i} cert={c} index={i} onImageChange={handleCertImage} />)}
              </div>
            </>
          )}

          {activeTab === 'stack' && (
            <div className="tech-grid">
              {techStack.map((t, i) => (
                <div key={i} className="tech-card" style={{ '--accent': t.color }}>
                  <div className="tech-icon">{t.icon}</div>
                  <div className="tech-name">{t.name}</div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Portfolio;
