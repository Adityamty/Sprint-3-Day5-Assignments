import React from 'react';
import './ProductCard.css';

function ProductCard({
  title = "iPhone 15",
  price = 1099,
  description = "Latest model with improved battery life."
}) {
  // Inline style object
  const cardStyle = {
    border: '1px solid #222',
    borderRadius: '10px',
    padding: '20px',
    margin: '16px auto',
    maxWidth: '350px',
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff"
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
