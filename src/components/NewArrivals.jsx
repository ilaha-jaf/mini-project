import { Link } from "react-router-dom";
import "./NewArrivals.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useBasket } from '../Context';

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeButton, setActiveButton] = useState("All");

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data); 
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleButtonClick = (category) => {
    setActiveButton(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  const { addToBasket } = useBasket();

  const handleAddToBasket = (product) => {
    addToBasket(product);
  };

  return (
    <div className="arrivals-container">
      <h2>New Arrivals</h2>
      <hr />
      <div className="button-container">
        {["All", "Women's", "Accessories", "Men's"].map(category => (
          <button
            key={category}
            className={activeButton === category ? "active" : ""}
            onClick={() => handleButtonClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-container">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <Link to={`/product/${product.id}`}>{product.title}</Link>
            <p className="price">${product.price}</p>
            <button className="add-to-basket" onClick={() => handleAddToBasket(product)}>Add to Basket</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
