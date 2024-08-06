import React, { createContext, useState, useContext } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [quantities, setQuantities] = useState({});

  const addToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,
    }));
  };

  const removeFromBasket = (productId) => {
    setBasket((prevBasket) => prevBasket.filter(product => product.id !== productId));
    setQuantities((prevQuantities) => {
      const { [productId]: _, ...rest } = prevQuantities;
      return rest;
    });
  };

  const incrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[productId] || 1;
      return {
        ...prevQuantities,
        [productId]: Math.max(currentQuantity - 1, 1),
      };
    });
  };

  const getTotalPrice = () => {
    return basket.reduce((total, product) =>
      total + parseFloat(product.price) * (quantities[product.id] || 1), 0
    );
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        incrementQuantity,
        decrementQuantity,
        getTotalPrice,
        quantities
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
