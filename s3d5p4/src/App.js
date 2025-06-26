import React from 'react';
import ProductCard from './ProductCard';

function App() {
  return (
    <div style={{ background: '#f5f6fa', minHeight: '100vh', padding: '40px' }}>
      {/* ProductCard with default props */}
      <ProductCard />

      {/* ProductCard with custom props */}
      <ProductCard
        title="MacBook Pro"
        price={1999}
        description="Powerful performance in a sleek design."
      />
    </div>
  );
}

export default App;
