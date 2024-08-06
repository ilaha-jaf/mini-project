import "./Header.css"
import myImage from '../images/slider_1.jpg';
const Header = () => {
    return (
        <header>
            <div className="imgContainer">
                <img src={myImage} alt="Spring/Summer Collection" />
                
            </div>
            <div className="header-content">
                    <p>Spring / Summer Collection 2017</p>
                    <h1>Get up to 30% Off New Arrivals</h1>
                    <button>Shop Now</button>
                </div>
        </header>
    );
};

export default Header;