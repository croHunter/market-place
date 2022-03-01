import React from 'react';
import NavMenuIcon from '../nav-menu-icon/NavMenuIcon';
import './NavSection.css';
const NavSection = () => {
  return (
    <nav className="nav-section">
      <div className="nav-wrapper">
        <div className="nav__left">
          <img src="img/realstate-logo.png" alt="logo" />
        </div>
        <ul className="nav__mid">
          <li>Home</li>
          <li>Features</li>
          <li>Contact Us</li>
        </ul>
        <div className="nav__right">
          <button>Sign Up</button>
        </div>

        <NavMenuIcon />
      </div>
    </nav>
  );
};

export default NavSection;
