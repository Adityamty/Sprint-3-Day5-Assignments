import React from 'react';
import './ProductCard.css';

function ProductCard({
  title = "iPhone 15",
  price = 1099,
  description = "Latest model with improved battery life."
}) {
  // Inline style for the card container
  const cardStyle = {
    border: '1px solid #222',
    borderRadius: '12px',
    padding: '24px',
    margin: '24px auto',
    maxWidth: '350px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
  };

  return (
    <div className="product-card" style={cardStyle}>
      <h2 className="product-title">{title}</h2>
      <p className="product-price">Price: ${price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
}

export default ProductCard;
