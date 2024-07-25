// src/components/Sidebar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar= () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
 
      <nav className="mt-0">
        <ul>
          <li className="mb-2">
            <Link to="/" className="block p-4 rounded hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li className="mb-2">
          <Link to="/contact" className="block p-4 rounded hover:bg-gray-700">
              Contact
            </Link>
          </li>
          <li className="mb-2">
          <Link to="/about" className="block p-4 rounded hover:bg-gray-700">
              About
            </Link>          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
