import React from 'react';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout-grid">
      <header className="layout-header">
        <h1>My Website</h1>
      </header>
      <main className="layout-main">
        {children}
      </main>
      <footer className="layout-footer">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
