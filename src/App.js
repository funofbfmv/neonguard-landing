import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import About from './pages/About/About';  // Пример другой страницы
// import Contact from './pages/Contact/Contact';  // Пример другой страницы
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;