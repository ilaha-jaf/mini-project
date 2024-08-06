import React, { createContext, useState, useContext } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  const removeFromBasket = (productId) => {
    setBasket((prevBasket) => prevBasket.filter(product => product.id !== productId));
  };

  const getTotalPrice = () => {
    return basket.reduce((total, product) => total + parseFloat(product.price), 0);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, getTotalPrice }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
