import { useState } from 'react';
import './Contact.css';

const topics = ['Freelance project', 'Full-time role', 'Collaboration', 'Mentorship', 'Just saying hi', 'Other'];

function Contact() {
  const [selectedTopic, setSelectedTopic] = useState('Freelance project');
  const [message, setMessage]             = useState('');
  const [submitted, setSubmitted]         = useState(false);
  const [form, setForm]                   = useState({ firstName: '', lastName: '', email: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <div className="contact-inner">

        <div className="contact-header">
          <span className="section-label">Let's Connect ✦</span>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-sub">Have a project in mind, a collaboration idea?<br />My inbox is always open.</p>
        </div>

        <div className="contact-layout">

          {/* LEFT PANEL */}
          <div className="contact-left">
            <div className="info-card">
              <div className="info-greeting">Hi, I'm Nobesuthu 👋</div>
              <p className="info-text">
                Based in South Africa, available for remote work and local opportunities.
                I typically respond within 24 hours.
              </p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="ci-icon">✉️</div>
                  <div className="ci-text">
                    <div className="ci-label">Email</div>
                    <div className="ci-value">gongonobesuthu@gmail.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon">📍</div>
                  <div className="ci-text">
                    <div className="ci-label">Location</div>
                    <div className="ci-value">South Africa</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon">⏱️</div>
                  <div className="ci-text">
                    <div className="ci-label">Response time</div>
                    <div className="ci-value">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="avail-pill">
              <div className="avail-dot"></div>
              <span>Currently available for new projects</span>
            </div>

            <div className="socials-card">
              <div className="socials-title">Find me on</div>
              <div className="social-grid">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-pill">
                  <span className="sp-icon">🐙</span><span>GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill">
                  <span className="sp-icon">💼</span><span>LinkedIn</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-pill">
                  <span className="sp-icon">🐦</span><span>Instagram</span>
                </a>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="social-pill">
                  <span className="sp-icon">🎨</span><span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="form-card">
            <div className="form-title">Send a Message</div>
            <p className="form-sub">Fill in the details below and I'll get back to you shortly.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label>First name</label>
                  <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Nobesuthu" required />
                </div>
                <div className="field">
                  <label>Last name</label>
                  <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Gongo" required />
                </div>
              </div>

              <div className="field">
                <label>Email address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="hello@gmail.com" required />
              </div>

              <div className="field">
                <label>What's this about?</label>
                <div className="topic-grid">
                  {topics.map(t => (
                    <button
                      type="button"
                      key={t}
                      className={`topic-btn ${selectedTopic === t ? 'sel' : ''}`}
                      onClick={() => setSelectedTopic(t)}
                    >{t}</button>
                  ))}
                </div>
              </div>

              <div className="field">
                <label>Message</label>
                <textarea
                  placeholder="Tell me about your project, timeline, or anything you'd like to discuss..."
                  value={message}
                  onChange={e => setMessage(e.target.value.slice(0, 500))}
                  required
                />
                <div className="char-count">{message.length} / 500 characters</div>
              </div>

              <div className="submit-row">
                <button type="submit" className="btn-submit">
                  Send message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>

              {submitted && (
                <div className="success-bar">
                  ✅ Message sent! I'll be in touch within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
