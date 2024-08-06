import { Link } from "react-router-dom";
import "./navbar.css"
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
export default function Navbar() {
    return (
        <div>

            <nav className="nav">
                <p>COLO<span>SHOP</span></p>
                <ul className="navbar">
                    <Link to="/" className="site-title">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/promotion">Promotion</Link>
                    <Link to="/pages">Pages</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/add">Add</Link>
                    <Link to="/search"><CiSearch/></Link>
                    <Link to="/user"><FaUser /></Link>
                    <Link to="/basket"><FaShoppingBasket /></Link>
                </ul>
            </nav>
        </div>
    );
}