import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const topics = [
  'Freelance project', 'Full-time role', 'Collaboration',
  'Mentorship', 'Just saying hi', 'Other',
];

const socials = [
 

  {
    icon: <FaLinkedin />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nobesuthu-gongo'
  },

  {
    icon: <FaInstagram />,
    name: 'Instagram',
    url: 'https://www.instagram.com/msuthulihle?igsh=bXpqc3ViN9zNXRw&utm_source=qr'
  },

  
];

function Contact() {
  const [selectedTopic, setSelectedTopic] = useState('Freelance project');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const formRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5vqxflv',
      'template_9dj74i4',
      formRef.current,
      'C4ZsUCf7tq7KJ9dvx'
    )
    .then(result => {
      console.log('Message sent:', result.text);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ firstName: '', lastName: '', email: '' });
      setMessage('');
    })
    .catch(error => {
      console.error('Error sending message:', error.text);
      alert('Oops! Something went wrong. Please try again.');
    });
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-inner">

        {/* HEADER */}
        <motion.div
          className="contact-header" data-reveal="up"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="contact-badge">Let's Connect ✦</div>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-sub">
            Got a project idea, collaboration, or just want to say hi? 
            I’d love to hear from you!
          </p>
        </motion.div>

        <div className="contact-layout">

          {/* LEFT PANEL */}
          <motion.div
            className="contact-left" data-reveal="left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="info-card">
              <div className="info-greeting">Hey there! 👋</div>
              <p className="info-text">
                Whether it’s a project, opportunity, or just networking, I’m all ears.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="ci-icon">✉️</div>
                  <div>
                    <div className="ci-label">Email</div>
                    <div className="ci-value">gongonobesuthu@gmail.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon">📍</div>
                  <div>
                    <div className="ci-label">Location</div>
                    <div className="ci-value">South Africa</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon">⏱️</div>
                  <div>
                    <div className="ci-label">Response time</div>
                    <div className="ci-value">Usually within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            

            <div className="socials-card">
              <div className="socials-label">Connect with me</div>
              <div className="socials-grid">
                {socials.map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="social-pill">
                    <span className="sp-icon">{s.icon}</span>
                    <span className="sp-name">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            className="form-card" data-reveal="right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h3 className="form-title">Send Me a Message</h3>
            <p className="form-sub">
              Fill out the form below, and I’ll get back to you as soon as possible.
            </p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label>First name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Nobesuthu"
                    value={form.firstName}
                    onChange={e => setForm({ ...form, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="field">
                  <label>Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Gongo"
                    value={form.lastName}
                    onChange={e => setForm({ ...form, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="hello@gmail.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="field">
                <label>Topic</label>
                <div className="topic-grid">
                  {topics.map(t => (
                    <button
                      type="button"
                      key={t}
                      className={`topic-btn ${selectedTopic === t ? 'sel' : ''}`}
                      onClick={() => setSelectedTopic(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <label>
                  Message <span className="char-count">{message.length} / 500</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project, timeline, or anything you’d like to discuss..."
                  value={message}
                  onChange={e => setMessage(e.target.value.slice(0, 500))}
                  required
                />
              </div>

              <input type="hidden" name="topic" value={selectedTopic} />

              <div className="form-footer">
                <button type="submit" className="btn-submit">
                  Send message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>

              {sent && (
                <motion.div
                  className="success-bar"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Message sent! Can’t wait to read it. I’ll get back to you shortly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
