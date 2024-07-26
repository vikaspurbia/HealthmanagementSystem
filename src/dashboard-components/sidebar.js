import React from 'react';
import { Link } from 'react-router-dom';



const Sidebar= () => {
  return (
    <div className="font-serif  border-1 border-gray-300 h-screen w-64 bg-secondary text-primary">
 
      <nav className="mt-0">
        <ul>
          <li className="mb-2">
            <Link to="/" className="block p-4 rounded hover:bg-blue-300">
              Home 
            </Link>
          </li>
          <li className="mb-2">
          <Link to="/contact" className="block p-4 rounded hover:bg-blue-300">
              Contact
            </Link>
          </li>
          <li className="mb-2">
          <Link to="/about" className="block p-4 rounded hover:bg-blue-300">
              About
            </Link>          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
