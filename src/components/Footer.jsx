import "./Footer.css"
import { CiHeart } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
<div>
        <div className="footer-links">
        <a href="#">Blog</a>
        <a href="#">FAQs</a>
        <a href="#">Contact us</a>
        </div>
        <p className="footer-info">©2018 All Rights Reserverd. This template is made with <span><CiHeart /></span>  by <span>Colorlib</span> </p>

        </div>

    <div className="social-icons">
<a href="#"><GrFacebookOption /></a>
<a href="#"><FaTwitter /></a>
<a href="#"><FaInstagram /></a>
<a href="#"><FaSkype /></a>
<a href="#"><FaPinterest /></a>
    </div>
    </div>
    </div>
    );
  };
  
  export default Footer;