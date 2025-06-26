import React, { useState } from 'react';
import Home from './Home';
import About from './About';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <nav style={{ textAlign: 'center', margin: '16px' }}>
        <button onClick={() => setPage('home')} style={{ marginRight: '8px' }}>Home</button>
        <button onClick={() => setPage('about')}>About</button>
      </nav>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
    </div>
  );
}

export default App;
