import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaGitAlt, FaFigma, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiFirebase, SiMongodb, SiDotnet, SiSqlite } from 'react-icons/si';

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
.pf{--r:#B56B72;--rd:#8a4f55;--rp:#f5e8e9;--rm:#deb8bb;--ink:#18100f;--ink2:#5a3d3f;--bg:#faf5f5;--white:#ffffff;--br:rgba(181,107,114,0.15);min-height:100vh;background:var(--bg);padding:96px 24px 80px;font-family:'Outfit',sans-serif;color:var(--ink)}
.pf-inner{max-width:1060px;margin:0 auto}
.pf-hd{text-align:center;margin-bottom:56px}
.pf-label{display:inline-flex;align-items:center;gap:10px;font-size:0.68rem;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--r);margin-bottom:16px}
.pf-label::before,.pf-label::after{content:'';display:block;width:28px;height:1px;background:var(--rm)}
.pf-h1{font-family:'Playfair Display',serif;font-size:clamp(2.4rem,5vw,3.6rem);font-weight:700;line-height:1.1;color:var(--ink);margin:0 0 14px;letter-spacing:-0.5px}
.pf-h1 em{font-style:italic;color:var(--r)}
.pf-sub{font-size:0.9rem;color:var(--ink2);line-height:1.75;max-width:420px;margin:0 auto;font-weight:300}
.pf-tabs{display:flex;justify-content:center;margin-bottom:48px}
.pf-tabs-inner{display:inline-flex;background:var(--white);border:1px solid var(--br);border-radius:60px;padding:5px;gap:4px;box-shadow:0 4px 24px rgba(181,107,114,0.09)}
.pf-tab{padding:11px 28px;border-radius:50px;border:none;background:transparent;font-family:'Outfit',sans-serif;font-size:0.82rem;font-weight:500;color:var(--ink2);cursor:pointer;transition:all 0.28s;white-space:nowrap}
.pf-tab:hover:not(.pf-tab--on){background:var(--rp);color:var(--r)}
.pf-tab--on{background:var(--r);color:#fff;box-shadow:0 4px 16px rgba(181,107,114,0.35)}
.cr-wrap{overflow:hidden;border-radius:20px;margin-bottom:20px}
.cr-track{display:flex;transition:transform 0.58s cubic-bezier(.4,0,.2,1);will-change:transform}
.cr-slide{min-width:100%;padding:3px;box-sizing:border-box}
.cr-card{background:var(--white);border-radius:18px;overflow:hidden;display:grid;grid-template-columns:1fr 1fr;min-height:370px;border:1px solid var(--br);box-shadow:0 12px 48px rgba(181,107,114,0.11)}
.cr-vis{position:relative;background:var(--rp);display:flex;align-items:center;justify-content:center;overflow:hidden;cursor:pointer;min-height:260px}
.cr-vis img{width:100%;height:100%;object-fit:cover;display:block}
.cr-emoji{font-size:86px;z-index:1;position:relative;transition:transform .4s;user-select:none}
.cr-ov{position:absolute;inset:0;background:rgba(139,66,72,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;opacity:0;transition:opacity .3s;z-index:2}
.cr-vis:hover .cr-ov{opacity:1}
.cr-vis:hover .cr-emoji{transform:scale(0.78)}
.cr-ov-title{font-family:'Playfair Display',serif;font-size:1.15rem;font-style:italic;color:rgba(255,255,255,0.95);text-align:center;padding:0 22px}
.cr-ov-btn{background:rgba(255,255,255,0.14);color:#fff;border:1px solid rgba(255,255,255,0.38);padding:9px 22px;border-radius:40px;font-size:0.72rem;font-weight:600;letter-spacing:1.4px;text-transform:uppercase;cursor:pointer;font-family:'Outfit',sans-serif;transition:background .2s}
.cr-ov-btn:hover{background:rgba(255,255,255,0.26)}
.cr-body{padding:46px 42px;display:flex;flex-direction:column;justify-content:center}
.cr-idx{font-family:'Playfair Display',serif;font-size:4rem;font-weight:400;color:var(--rm);line-height:1;margin-bottom:6px;letter-spacing:-3px}
.cr-type{font-size:0.65rem;font-weight:600;text-transform:uppercase;letter-spacing:2.5px;color:var(--r);margin-bottom:9px}
.cr-title{font-family:'Playfair Display',serif;font-size:1.75rem;font-weight:700;color:var(--ink);line-height:1.2;margin-bottom:13px}
.cr-desc{font-size:0.85rem;color:var(--ink2);line-height:1.85;margin-bottom:22px;font-weight:300}
.cr-chips{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:26px}
.chip{background:var(--rp);color:var(--rd);font-size:0.67rem;font-weight:600;padding:5px 13px;border-radius:40px;letter-spacing:0.5px}
.cr-btn{display:inline-flex;align-items:center;gap:8px;background:var(--ink);color:#fff;border:none;padding:13px 26px;border-radius:40px;font-family:'Outfit',sans-serif;font-size:0.75rem;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;text-decoration:none;cursor:pointer;width:fit-content;transition:all .25s}
.cr-btn:hover{background:var(--r);transform:translateY(-2px)}
.cr-ctrl{display:flex;align-items:center;justify-content:space-between;padding:0 3px;margin-bottom:50px}
.cr-dots{display:flex;gap:8px;align-items:center}
.cr-dot{width:7px;height:7px;border-radius:50%;background:var(--rm);cursor:pointer;border:none;padding:0;transition:all .32s ease}
.cr-dot.on{background:var(--r);width:22px;border-radius:4px}
.cr-arrows{display:flex;gap:8px}
.cr-arr{width:44px;height:44px;border-radius:50%;border:1px solid var(--br);background:var(--white);cursor:pointer;font-size:16px;color:var(--r);display:flex;align-items:center;justify-content:center;transition:all .22s;font-family:'Outfit',sans-serif}
.cr-arr:hover{background:var(--r);color:#fff;border-color:var(--r)}
.cr-count{font-family:'Playfair Display',serif;font-size:1rem;font-weight:400;color:var(--ink2);letter-spacing:1px;font-style:italic}
.ct-list{display:flex;flex-direction:column;gap:9px;max-width:740px;margin:0 auto}
.ct-card{display:flex;align-items:center;gap:16px;background:var(--white);border-radius:14px;padding:15px 20px;border:1px solid var(--br);transition:box-shadow .25s,transform .2s,border-color .2s}
.ct-card:hover{box-shadow:0 6px 28px rgba(181,107,114,0.13);border-color:var(--rm);transform:translateX(5px)}
.ct-n{font-family:'Playfair Display',serif;font-size:1.7rem;font-weight:400;color:var(--rm);min-width:34px;text-align:right;line-height:1;font-style:italic}
.ct-thumb{width:54px;height:54px;border-radius:10px;overflow:hidden;flex-shrink:0;cursor:pointer;position:relative;background:var(--rp);border:1px solid var(--br)}
.ct-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.ct-ph{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:1.5rem}
.ct-hov{position:absolute;inset:0;background:rgba(139,66,72,0.84);color:#fff;font-size:1rem;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;border-radius:10px}
.ct-thumb:hover .ct-hov{opacity:1}
.ct-info{flex:1;min-width:0}
.ct-name{font-weight:600;font-size:0.9rem;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:3px}
.ct-iss{font-size:0.75rem;color:var(--ink2);font-weight:300}
.ct-yr{display:inline-block;margin-top:5px;font-family:'Playfair Display',serif;font-size:0.82rem;color:var(--r);font-style:italic}
.ct-vbtn{width:36px;height:36px;border-radius:9px;border:1px solid var(--br);background:var(--rp);color:var(--rd);font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s,color .2s,border-color .2s}
.ct-vbtn:hover{background:var(--r);color:#fff;border-color:var(--r)}
.lb{position:fixed;inset:0;background:rgba(18,8,8,0.72);z-index:1000;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);animation:fadeIn .2s ease}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.lb-in{background:#fff;border-radius:18px;padding:26px;max-width:660px;width:92%;max-height:88vh;overflow-y:auto;position:relative;animation:slideUp .24s ease}
@keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}
.lb-in img{width:100%;border-radius:10px;display:block}
.lb-lbl{text-align:center;margin-top:13px;font-family:'Playfair Display',serif;font-size:0.95rem;font-style:italic;color:var(--ink2)}
.lb-x{position:absolute;top:13px;right:13px;width:30px;height:30px;border-radius:8px;border:1px solid var(--br);background:var(--rp);color:var(--ink);font-size:0.85rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s}
.lb-x:hover{background:var(--rm)}
.tk-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}
.tk-card{background:var(--white);border-radius:14px;padding:22px 8px 16px;display:flex;flex-direction:column;align-items:center;gap:9px;border:1px solid var(--br);cursor:default;transition:border-color .2s,box-shadow .2s,transform .2s}
.tk-card:hover{border-color:var(--r);box-shadow:0 8px 24px rgba(181,107,114,0.16);transform:translateY(-4px)}
.tk-icon{font-size:1.9rem;display:flex}
.tk-name{font-size:0.67rem;font-weight:500;letter-spacing:0.6px;text-transform:uppercase;color:var(--ink2)}
@media(max-width:860px){.cr-card{grid-template-columns:1fr}.cr-vis{min-height:220px}.cr-body{padding:28px 24px}.cr-idx{display:none}.tk-grid{grid-template-columns:repeat(4,1fr)}}
@media(max-width:560px){.ct-list{max-width:100%}.tk-grid{grid-template-columns:repeat(3,1fr)}.cr-count{display:none}.ct-n{display:none}.pf-tabs-inner{border-radius:14px;flex-wrap:wrap}.pf-tab{border-radius:10px}}
`;

const techStack = [
  { icon: <FaJava />,    name: 'Java',     color: '#b07219' },
  { icon: <FaPython />,  name: 'Python',   color: '#3572A5' },
  { icon: <FaReact />,   name: 'React',    color: '#61DAFB' },
  { icon: <SiDjango />,  name: 'Django',   color: '#092E20' },
  { icon: <SiDotnet />,  name: 'C#',       color: '#512BD4' },
  { icon: <SiDotnet />,  name: 'ASP.NET',  color: '#7B5EA7' },
  { icon: <SiFirebase />,name: 'Firebase', color: '#FFCA28' },
  { icon: <SiMongodb />, name: 'MongoDB',  color: '#47A248' },
  { icon: <SiSqlite />,  name: 'SQL',      color: '#003B57' },
  { icon: <FaFigma />,   name: 'Figma',    color: '#F24E1E' },
  { icon: <FaGitAlt />,  name: 'Git',      color: '#F05032' },
  { icon: <FaGithub />,  name: 'GitHub',   color: '#1a1a1a' },
];

const projects = [
  { id:1, emoji:'🛒', title:'Own Your Shape',  tag:'Web App',    desc:'Full-stack gymwear & swimwear e-commerce store with user authentication, PIN email verification, product catalogue, cart, promo codes, checkout and order confirmation emails.', chips:['React','Django','PostgreSQL','REST API','Cloudinary'], liveLink:'https://own-your-shape.vercel.app', image:'/gymswim.png' },
  { id:2, emoji:'📱', title:'Task Manager App',     tag:'Mobile App', desc:'Cross-platform productivity app with offline sync, push notifications, and real-time team collaboration features.',                              chips:['React Native','Firebase'],           liveLink:'https://your-taskmanager-link.com' },
  { id:3, emoji:'🏥', title:'Healthcare Portal',    tag:'Web App',    desc:'Patient management system with appointment scheduling, medical records management and detailed analytics reporting.',                             chips:['ASP.NET','SQL','C#'],                liveLink:'https://your-healthcare-link.com' },
  { id:4, emoji:'💬', title:'Chat Application',     tag:'Web App',    desc:'Real-time messaging with rooms, file sharing, user presence indicators and full message history search.',                                         chips:['React','Firebase','MongoDB'],        liveLink:'https://your-chatapp-link.com' },
  { id:5, emoji:'📊', title:'Analytics Dashboard',  tag:'Dashboard',  desc:'Interactive data visualisation with custom charts, filters, date ranges, and PDF export functionality.',                                           chips:['Python','Django','SQL'],             liveLink:'https://your-dashboard-link.com' },
  { id:6, emoji:'🎨', title:'Design Portfolio App', tag:'Mobile App', desc:'Mobile showcase app designed end-to-end in Figma and built with React Native, featuring smooth transitions.',                                   chips:['Figma','React Native'],             liveLink:'https://your-portfolio-link.com' },
];

const defaultCerts = [
  { icon:'🏆', name:'Meta Front-End Developer',        issuer:'Meta / Coursera',                   year:'2024' },
  { icon:'☁️', name:'Google Cloud Fundamentals',       issuer:'Google',                             year:'2024' },
  { icon:'🐍', name:'Python for Everybody',             issuer:'University of Michigan / Coursera', year:'2023' },
  { icon:'⚛️', name:'React — The Complete Guide',       issuer:'Udemy',                             year:'2023' },
  { icon:'🔥', name:'Firebase Developer Certification', issuer:'Google',                             year:'2023' },
  { icon:'🎨', name:'UI/UX Design Fundamentals',        issuer:'Google / Coursera',                 year:'2022' },
];

const LS = 'pf_cert_imgs';
const loadImgs = () => { try { return JSON.parse(localStorage.getItem(LS) || '{}'); } catch { return {}; } };
const saveImg  = (i, url) => { try { const c = loadImgs(); c[i] = url; localStorage.setItem(LS, JSON.stringify(c)); } catch {} };

function Carousel() {
  const [cur, setCur]   = useState(0);
  const [prev, setPrev] = useState({});
  const fileRefs        = useRef({});
  const timerRef        = useRef(null);
  const total           = projects.length;

  const goTo = useCallback((n) => {
    setCur(c => { const nx = typeof n === 'function' ? n(c) : n; return ((nx % total) + total) % total; });
  }, [total]);

  const stop  = useCallback(() => clearInterval(timerRef.current), []);
  const start = useCallback(() => {
    stop();
    timerRef.current = setInterval(() => setCur(c => (c + 1) % total), 4500);
  }, [total, stop]);

  useEffect(() => { start(); return stop; }, [start, stop]);

  const onFile = (id, e) => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = ev => setPrev(p => ({ ...p, [id]: ev.target.result }));
    r.readAsDataURL(f);
  };

  return (
    <div onMouseEnter={stop} onMouseLeave={start}>
      <div className="cr-wrap">
        <div className="cr-track" style={{ transform:`translateX(-${cur * 100}%)` }}>
          {projects.map((p, i) => {
            const src = p.image || prev[p.id] || null;
            return (
              <div className="cr-slide" key={p.id}>
                <div className="cr-card">
                  <div className="cr-vis" onClick={() => fileRefs.current[p.id]?.click()}>
                    {src ? <img src={src} alt={p.title} /> : <span className="cr-emoji">{p.emoji}</span>}
                    <div className="cr-ov">
                      <div className="cr-ov-title">{p.title}</div>
                      {p.liveLink && (
                        <button className="cr-ov-btn" onClick={e => { e.stopPropagation(); window.open(p.liveLink, '_blank'); }}>
                          View Live Demo
                        </button>
                      )}
                      <button className="cr-ov-btn" onClick={e => { e.stopPropagation(); fileRefs.current[p.id]?.click(); }}>
                        + Screenshot
                      </button>
                    </div>
                    <input ref={el => fileRefs.current[p.id] = el} type="file" accept="image/*" style={{ display:'none' }} onChange={e => onFile(p.id, e)} />
                  </div>
                  <div className="cr-body">
                    <div className="cr-idx">{String(i + 1).padStart(2, '0')}</div>
                    <div className="cr-type">{p.tag}</div>
                    <div className="cr-title">{p.title}</div>
                    <p className="cr-desc">{p.desc}</p>
                    <div className="cr-chips">{p.chips.map(c => <span key={c} className="chip">{c}</span>)}</div>
                    {p.liveLink && <a className="cr-btn" href={p.liveLink} target="_blank" rel="noreferrer">↗ Live Demo</a>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cr-ctrl">
        <div className="cr-dots">
          {projects.map((_, i) => (
            <button key={i} className={`cr-dot${i === cur ? ' on' : ''}`} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
        <span className="cr-count">{String(cur + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <div className="cr-arrows">
          <button className="cr-arr" onClick={() => goTo(cur - 1)} aria-label="Prev">←</button>
          <button className="cr-arr" onClick={() => goTo(cur + 1)} aria-label="Next">→</button>
        </div>
      </div>
    </div>
  );
}

function CertCard({ cert, index, onChange }) {
  const ref = useRef();
  const [lb, setLb] = useState(false);
  const onFile = e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = ev => onChange(index, ev.target.result);
    r.readAsDataURL(f);
  };
  return (
    <>
      <motion.div className="ct-card"
        initial={{ opacity:0, x:-14 }} animate={{ opacity:1, x:0 }}
        transition={{ duration:0.3, delay:index * 0.06 }}>
        <div className="ct-n">{String(index + 1).padStart(2, '0')}</div>
        <div className="ct-thumb" onClick={() => ref.current.click()} title="Upload certificate">
          {cert.image ? <img src={cert.image} alt={cert.name} /> : <div className="ct-ph">{cert.icon}</div>}
          <div className="ct-hov">↑</div>
        </div>
        <input ref={ref} type="file" accept="image/*,application/pdf" style={{ display:'none' }} onChange={onFile} />
        <div className="ct-info">
          <div className="ct-name">{cert.name}</div>
          <div className="ct-iss">{cert.issuer}</div>
          <div className="ct-yr">{cert.year}</div>
        </div>
        {cert.image && <button className="ct-vbtn" onClick={() => setLb(true)} title="View">↗</button>}
      </motion.div>
      {lb && (
        <div className="lb" onClick={() => setLb(false)}>
          <div className="lb-in" onClick={e => e.stopPropagation()}>
            <button className="lb-x" onClick={() => setLb(false)}>✕</button>
            <img src={cert.image} alt={cert.name} />
            <p className="lb-lbl">{cert.name} · {cert.issuer} · {cert.year}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState('projects');
  const [certs, setCerts] = useState(() => {
    const saved = loadImgs();
    return defaultCerts.map((c, i) => ({ ...c, image: saved[i] ?? null }));
  });
  const onCertImg = (i, url) => {
    saveImg(i, url);
    setCerts(p => p.map((c, j) => j === i ? { ...c, image: url } : c));
  };
  const tabs = [
    { k:'projects',     l:'🗂 Projects'     },
    { k:'certificates', l:'🏆 Certificates' },
    { k:'stack',        l:'⚡ Tech Stack'   },
  ];
  return (
    <>
      <style>{css}</style>
      <motion.div className="pf" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }}>
        <div className="pf-inner" data-reveal="up">
          <div className="pf-hd" style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
            <div className="pf-label">Selected Work</div>
            <h2 className="pf-h1">My <em>Portfolio</em></h2>
            <p className="pf-sub">A curated showcase of projects, certifications and the tools I work with</p>
          </div>
          <div className="pf-tabs">
            <div className="pf-tabs-inner">
              {tabs.map(({ k, l }) => (
                <button key={k} className={`pf-tab${tab === k ? ' pf-tab--on' : ''}`} onClick={() => setTab(k)}>{l}</button>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait">
            {tab === 'projects' && (
              <motion.div key="projects" initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} transition={{ duration:0.3 }}>
                <Carousel />
              </motion.div>
            )}
            {tab === 'certificates' && (
              <motion.div key="certs" initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} transition={{ duration:0.3 }}>
                <div className="ct-list">
                  {certs.map((c, i) => <CertCard key={i} cert={c} index={i} onChange={onCertImg} />)}
                </div>
              </motion.div>
            )}
            {tab === 'stack' && (
              <motion.div key="stack" initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} transition={{ duration:0.3 }}>
                <div className="tk-grid">
                  {techStack.map((t, i) => (
                    <motion.div key={i} className="tk-card"
                      initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }}
                      transition={{ delay:i * 0.04, duration:0.24 }}
                      whileHover={{ y:-5, scale:1.07 }}>
                      <span className="tk-icon" style={{ color:t.color }}>{t.icon}</span>
                      <span className="tk-name">{t.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}