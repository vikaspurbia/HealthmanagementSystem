// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './dashboard-components/sidebar';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Navbar from './dashboard-components/navbar';
import Pateints from './pages/pateints';
import Doctors from './pages/doctors';
import Appointment from './pages/appointment';



const routes = [
  { path: "/home", element: <Home /> },
  { path: "/patients", element: <Pateints/>  },
  { path: "/doctors", element: <Doctors />  },
  { path: "/appointment", element: <Appointment /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  

];

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex  bg-gray-100">
        <Sidebar />
        <div className="flex-grow p-10">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
