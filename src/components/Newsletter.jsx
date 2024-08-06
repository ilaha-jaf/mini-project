import "./Newsletter.css"
const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <div className="newsletter">
            <div>
       <h3>Newsletter</h3>
       <p>Subscribe to our newsletter and get 20% off your first purchase</p>
       </div>
       <div>
        <input type="email" id="email" placeholder="Your email"/>
        <button className="newsletter-btn">Subscribe</button>
      </div>
      </div>
    </div>
    );
  };
  
  export default Newsletter;