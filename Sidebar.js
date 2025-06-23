import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuSlide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-button" onClick={menuSlide}>
        ☰ Menu
      </button>
      {isOpen && (
        <div className="sidebar">
          <ul>
            <li><Link to="/login"  onClick={menuSlide}>Login</Link></li>
            <li><Link to="/Home" onClick={menuSlide}>Home</Link></li>
            <li><Link to="/about" onClick={menuSlide}>About</Link></li>
            <li><Link to="/Pets" onClick={menuSlide}>Pets</Link></li>
            <li><Link to="/signin" onClick={menuSlide}>Sign In</Link></li>
            <li><Link to="/Contact" onClick={menuSlide}>Contact</Link></li>
            
          </ul>
          <button className="close-button" onClick={menuSlide}>
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default Sidebar;
