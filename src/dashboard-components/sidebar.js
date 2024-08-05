

import React from 'react';
import { Link } from 'react-router-dom';


const routes = [
 
  { path: "/home", label: "Home" },
  { path: "/patients", label: "Patients" },
  { path: "/doctors", label: "Doctor" },
  { path: "/appointment", label: "Appointment" },
  { path: "/contact", label: "Contact" },
  { path: "/about", label: "About" }
];

const Sidebar = () => {
  return (
    <div className="font-serif border-1 border-gray-300 h-screen w-64 bg-secondary text-primary">
      <nav className="mt-0">
        <ul>
          {routes.map((route, index) => (
            <li key={index} className="mb-2">
              <Link to={route.path} className="block p-4 rounded hover:bg-blue-300">
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
