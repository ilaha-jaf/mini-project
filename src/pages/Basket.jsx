import React from 'react';
import { useBasket } from '../Context';
import "./Basket.css";

const Basket = () => {
  const { basket, removeFromBasket, incrementQuantity, decrementQuantity, getTotalPrice, quantities } = useBasket();

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
                <button onClick={() => incrementQuantity(id)}>+</button>
                <p>{quantities?.[id] || 1}</p>
                <button onClick={() => decrementQuantity(id)}>-</button>
              </div>
              <button className='delete-btn' onClick={() => removeFromBasket(id)}>Delete from Basket</button>
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
