import "./LatestBlogs.css"
import blog1 from '../images/blog_1.jpg'
import blog2 from '../images/blog_2.jpg'
import blog3 from '../images/blog_3.jpg'
const LatestBlog = () => {
    return (
        <div className="body-content">
        <h2>Latest Blogs</h2>
        <hr />
        
        <div className="latest-container">
            
            <div>
            <img src={blog1} alt="" />
<div className="blog-appear">
    <p className="main-writing">Here are the trends I see coming this fall</p>
    <p>BY ADMIN | DEC 01, 2017</p>
    <a href="#">Read More</a>
</div>
            </div>
            <div>
            <img src={blog2} alt="" />
            <div className="blog-appear">
    <p className="main-writing">Here are the trends I see coming this fall</p>
    <p>BY ADMIN | DEC 01, 2017</p>
    <a href="#">Read More</a>
</div>
            </div>
            <div>
            <img src={blog3} alt="" />
            <div className="blog-appear">
    <p className="main-writing">Here are the trends I see coming this fall</p>
    <p>BY ADMIN | DEC 01, 2017</p>
    <a href="#">Read More</a>
</div>
            </div>
    </div>
    </div>
    );
  };
  
  export default LatestBlog;