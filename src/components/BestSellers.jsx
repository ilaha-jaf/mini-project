import "./BestSellers.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 5;

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleNext = () => {
    if (startIndex + productsPerPage < products.length) {
      setStartIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prevIndex => prevIndex - 1);
    }
  };

  const displayedProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="arrivals-container">
      <h2>Best Sellers</h2>
      <hr />
      <div className="product-container">
      <div className="slider-controls">
      <button onClick={handlePrev} disabled={startIndex === 0}><FaChevronLeft /></button>
        {displayedProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p className="price">${product.price}</p>
          </div>
        ))}
              <button onClick={handleNext} disabled={startIndex + productsPerPage >= products.length}><FaChevronRight /></button>
      </div>
 
        
  
      </div>
    </div>
  );
};

export default BestSellers;
