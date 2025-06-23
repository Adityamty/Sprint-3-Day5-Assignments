import React from 'react';
import ProductCard from './ProductCard';

function App() {
  return (
    <div>
      {/* Uses default props */}
      <ProductCard />

      {/* Custom product */}
      <ProductCard
        title="MacBook Pro"
        price={1999}
        description="Powerful performance in a sleek design."
      />
    </div>
  );
}

export default App;
