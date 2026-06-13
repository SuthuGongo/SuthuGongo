import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about"     element={<About />} />
        <Route path="/contact"   element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
