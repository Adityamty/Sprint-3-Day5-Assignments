import React from 'react';

function NavItem({ label, active, onClick }) {
  return (
    <li
      className={`nav-item${active ? ' active' : ''}`}
      onClick={onClick}
      style={{
        padding: '10px 20px',
        cursor: 'pointer',
        borderBottom: active ? '2px solid #1976d2' : '2px solid transparent',
        color: active ? '#1976d2' : '#222',
        fontWeight: active ? 'bold' : 'normal',
        transition: 'border 0.2s, color 0.2s'
      }}
    >
      {label}
    </li>
  );
}

export default NavItem;
