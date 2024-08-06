import "./Content.css"
import banner1 from '../images/banner_1.jpg'
import banner2 from '../images/banner_2.jpg'
import banner3 from '../images/banner_3.jpg'
const Content = () => {
    return (
        <div className="content-container">
            <div>
            <img src={banner1} alt="" />
<a href="#">WOMEN'S</a>
            </div>
            <div>
            <img src={banner2} alt="" />
<a href="#">ACCESSORIES</a>
            </div>
            <div>
            <img src={banner3} alt="" />
<a href="#">MEN'S</a>
            </div>
    </div>
    );
  };
  
  export default Content;