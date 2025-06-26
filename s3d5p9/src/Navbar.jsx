import React, { useState } from 'react';
import NavItem from './NavItem';
import './Navbar.css';

const navItems = ['Home', 'About', 'Services', 'Contact'];

function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <nav className="navbar">
      <div className="navbar-brand">MySite</div>
      <ul className="nav-list">
        {navItems.map(item => (
          <NavItem
            key={item}
            label={item}
            active={activeTab === item}
            onClick={() => setActiveTab(item)}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
