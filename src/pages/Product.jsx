import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useBasket } from '../Context'; 
import "./Product.css"
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1); 
  const { addToBasket } = useBasket(); 

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToBasket = (product) => {
    addToBasket({ ...product, quantity });
  };

  return (
    <div className="product-detail">
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <h2>{product.title}</h2>
        <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
        <p className="price">${product.price}</p>
        <p>Quantity:</p>
        <div className="quantity">
        <button className="decrement" onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button className="increment" onClick={handleIncrement}>+</button>
        </div>
        <button className="delete-btn" onClick={() => handleAddToBasket(product)}>Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;
