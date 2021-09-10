import "./AddProduct.css";
import {useState} from "react";
import { uuid } from 'uuidv4';
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Actions/ProductActions";

const AddProduct=(props)=>{
  const dispatch=useDispatch();
  const mystateofproduct=useSelector((state)=>state.ProductReducer);
  console.log(mystateofproduct.products);
  const [product,setProduct]=useState(
    {
      id:"",
      productname:"",
      price:"",
      email:""
    });
  const handleChangeProduct=(e)=>{
      setProduct({...product,[e.target.name]:e.target.value})
      localStorage.setItem("products",mystateofproduct.products);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(product.productname!=="" && product.email!=="" && product.price!==""){
      var data={
        id:uuid(),
        productname:product.productname,
        price:product.price,
        email:product.email
      }
      setProduct( {
        id:"",
        productname:"",
        price:"",
        email:""
      })
        dispatch(addProduct(data))
    }   
    props.setOpen(!props.open);
  
  }
  return(
    <div className="bg-light set-grid">
     
      <form onSubmit={handleSubmit}>
      <h1>Add Product!!(The one step to set your product)</h1>
  <div className="mb-3">
    <label for="productName" class="form-label">Product Name</label>
    <input type="text" class="form-control" name="productname" id="productname" value={product.productname} onChange={handleChangeProduct} />
    
  </div>
  <div className="mb-3">
    <label for="price" className="form-label">Price</label>
    <input type="text" class="form-control" name="price" id="price" value={product.price} onChange={handleChangeProduct} />
  </div>
  <div className="mb-3">
  <label for="price" className="form-label">User-email</label>
        <div><input type="email" name="email" id="useremail" className="form-control" value={product.email} onChange={handleChangeProduct}/></div>
  </div>
  <button class="btn btn-success" onSubmit={handleSubmit}>Submit</button>
</form>
    </div>
  )
}
export default AddProduct;