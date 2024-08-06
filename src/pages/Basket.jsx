import React, { useState, useEffect } from 'react';
import { useBasket } from '../Context';
import "./Basket.css";

const Basket = () => {
  const { basket, removeFromBasket } = useBasket();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    setQuantities(basket.reduce((acc, product) => {
      acc[product.id] = product.quantity || 1;
      return acc;
    }, {}));
  }, [basket]);

  const handleQuantityChange = (productId, change) => {
    setQuantities(prevQuantities => {
      const newQuantity = (prevQuantities[productId] || 1) + change;
      return {
        ...prevQuantities,
        [productId]: Math.max(newQuantity, 1),
      };
    });
  };

  const handleRemove = (productId) => {
    removeFromBasket(productId);
    setQuantities(prevQuantities => {
      const { [productId]: _, ...rest } = prevQuantities;
      return rest;
    });
  };

  const getTotalPrice = () => basket.reduce((total, product) =>
    total + parseFloat(product.price) * (quantities[product.id] || 1), 0
  );

  return (
    <div>
      <h2>Basket</h2>
      {basket.length === 0 ? (
        <p>Basket is empty</p>
      ) : (
        <div className="basket-container">
          {basket.map(({ id, title, image, price }) => (
            <div key={id} className="basket-card">
              <p>{title}</p>
              <img src={image} alt={title} />
              <p>Price: ${price}</p>
              <div className='quantity'>
                <button onClick={() => handleQuantityChange(id, 1)}>+</button>
                <p>{quantities[id]}</p>
                <button onClick={() => handleQuantityChange(id, -1)}>-</button>
              </div>
              <button className='delete-btn' onClick={() => handleRemove(id)}>Delete from Basket</button>
            </div>
          ))}
          <div className="total-price">
            <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
