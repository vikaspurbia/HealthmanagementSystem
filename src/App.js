// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './dashboard-components/sidebar';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Navbar from './dashboard-components/navbar';



function App () {
  return (
    
    <Router>
        <Navbar/>
      <div className="flex">
        <Sidebar />
        <div className="flex p-10">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
