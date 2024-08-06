import Navbar from "./components/navbar"
import Home from "./pages/Home";
import Add from "./pages/Add";
import Blog from "./pages/Blog";
import Pages from "./pages/Pages";
import Promotion from "./pages/Promotion";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import Product from "./pages/Product"
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import{Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <> 
    <Navbar/>
<div className="container">
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/add" element={<Add/>}/>
<Route path="/blog" element={<Blog/>}/>
<Route path="/pages" element={<Pages/>}/>
<Route path="/promotion" element={<Promotion/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/basket" element={<Basket/>}/>
<Route path="/product/:id" element={<Product />} />
<Route path="*" element={ <div>Page Not Found!</div>  }/>
</Routes>
</div>
<br />
<br />
<Newsletter/>
<Footer/>

 </>
)}

export default App

