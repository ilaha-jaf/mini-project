import "./Add.css"
import axios from "axios"
import {useEffect} from 'react'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const AddProduct=()=> {
const [products,setProducts]=useState([]);
const [title,setTitle]=useState('')
const [price,setPrice]=useState('')
const [image,setImage]=useState('')
const [category,setCategory]=useState('')

const BASE_URL="http://localhost:5000/products"

useEffect(()=>{
axios.get(`${BASE_URL}`)
.then(response=>{
    setProducts(response.data)
    
})
.catch(error=>{
    console.log(error);
    
})
})


const handleSubmit =(event)=>{
    event.preventDefault();

axios.post(`${BASE_URL}`,{title,price,image,category})
.then(response=>{
console.log(response);
location.reload()
})
.catch(error=>{
    console.log(error);
    
})
}

const handleDelete=(id)=>{
    if (window.confirm("Are you sure you want to delete it?")) {
        axios.delete(`${BASE_URL}/${id}`)
.then(response=>{
console.log(response);

})
.catch(error=>{
    console.log(error);
    
})
    }
}

  return (
      <div>
<form className='products' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Product Title:</label>
        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="text" id="image" value={image} onChange={e => setImage(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" value={category} onChange={e => setCategory(e.target.value)} required />
      </div>
      <button>Submit</button>
    </form>
        <br />
        <br />
  <h1>Customers  Table</h1>
    <table className="table table-striped table-bordered">
        <thead>
            <tr>
            <th>Product Title</th>
            <th>Price</th>
            <th>image</th>
            <th>Category</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {
                products?.map((i)=>{ 
return <tr key={i.id}>
<td>{i.title}</td>
<td>${i.price}</td>
<td><img src={i.image} alt="" /></td>
<td>{i.category }</td>
<td>
    <button className="delete-btn" onClick={()=>handleDelete(i.id)}>Delete</button>
</td>
       </tr>
                })
            }
       
        </tbody>
    </table>
  </div>
  )
}

export default AddProduct
