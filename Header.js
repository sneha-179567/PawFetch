import React from "react";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <title>Online PawFetch.com</title>
      <header className="Header">
    <img
      src="https://i.pinimg.com/736x/50/6c/56/506c569448e64cebac21f6b7395d4e02--logos.jpg"
      alt="PawFetch Logo"
    />
    <div className="search-box">
  <input type="text" placeholder="Select your PawFetch........." />
</div>
  </header>
      <nav>
        {/* Left - Logo */}
        <div></div>
      </nav>
    </header>
    
  );
}

export default Header;
