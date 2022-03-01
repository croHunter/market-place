import React, { useState } from 'react';
import './NavMenuIcon.css';
const NavMenuIcon = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="nav-menu">
      <input
        type="checkbox"
        className="menu-button"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <div className="icon-wrapper">
        <div className="hamburger">
          <span className="hamburger-line first"></span>
          <span className="hamburger-line second"></span>
          <span className="hamburger-line third"></span>
        </div>
      </div>
      <div className="item-list">
        <div>Home</div>
        <div>Features</div>
        <div>Contact Us</div>
        <div>
          <button className="menu-connect-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default NavMenuIcon;
