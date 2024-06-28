import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Water from './components/pages/Water';
import Heating from './components/pages/Heating';
import Cooling from './components/pages/Cooling';
import Maintenance from './components/pages/Maintenance';
import Plumbing from './components/pages/Plumbing';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/heating' element={<Heating />} />
          <Route path='/cooling' element={<Cooling />} />
          <Route path='/maintenance' element={<Maintenance />} />
          <Route path='/water' element={<Water />} />
          <Route path='/plumbing' element={<Plumbing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;