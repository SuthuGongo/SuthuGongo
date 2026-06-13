# Nobesuthu Gongo — Portfolio

A fully functional React portfolio for a Full Stack Developer.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation & Running

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start

# 3. Open http://localhost:3000 in your browser
```

### Build for Production
```bash
npm run build
```

## Personalising Your Portfolio

### Add Your Photo
In `src/pages/Home.js`, replace the `<div className="avatar-placeholder">NG</div>` with:
```jsx
<img src="/your-photo.jpg" alt="Nobesuthu Gongo" />
```
Place your photo in the `public/` folder.

### Add Project Previews
On the **Portfolio** page, click any project card thumbnail to upload a preview image directly in the browser (no code needed).

### Add Certificate Images
On the **Portfolio → Certificates** tab, hover over the certificate icon and click to upload your certificate image.

### Update Contact Links
In `src/pages/Contact.js`, update the `socials` array with your real URLs:
```js
const socials = [
  { icon: '🐙', name: 'GitHub', url: 'https://github.com/YOUR_USERNAME' },
  { icon: '💼', name: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_PROFILE' },
  ...
];
```

### Update Your Email
In `src/pages/Contact.js`, replace `nobesuthu@email.com` with your real email.

### CV Download
In `src/pages/About.js`, replace the `href="#cv"` on the Download CV button with a link to your hosted CV PDF, e.g.:
```jsx
<a className="download-cv" href="/Nobesuthu_Gongo_CV.pdf" download>
```
And place your CV in the `public/` folder.

## Tech Stack
- React 18
- Framer Motion (animations)
- React Icons (tech stack icons)
- CSS Modules (per-page styles)
