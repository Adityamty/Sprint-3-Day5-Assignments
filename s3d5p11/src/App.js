import React from 'react';
import StatusBadge from './StatusBadge';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h2>Status Badges</h2>
      <div style={{ display: 'flex', gap: '16px' }}>
        <StatusBadge status="success" />
        <StatusBadge status="error" />
        <StatusBadge status="warning" />
      </div>
    </div>
  );
}

export default App;
