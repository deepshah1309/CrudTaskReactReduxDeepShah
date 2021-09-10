import { useDispatch } from "react-redux";
import { deleteProduct, editProduct } from "../../Actions/ProductActions";

//My customised css
import "./Product.css";
import Button from '@material-ui/core/Button';

//Material UI Imports
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import {useState} from "react";
const Product=(props)=>{
  const [openUpdate,setOpenUpdate]=useState(false);
  const [product,setProduct]=useState(props.product);
 
  const dispatch=useDispatch();

  //dispatch

  //deleteMethod for product
  const deleteTheProduct=(id)=>{
  
    if(window.confirm("Are u sure to delete that product")){
 
      dispatch(deleteProduct(id));
    }

  }

  //updating and tracking changes
  const handleUpdateChange=(e)=>{
    setProduct({...product,[e.target.name]:e.target.value});
}
  const handleUpdate=()=>{
      
    setOpenUpdate(true);

  }
  const handleCloseUpdate=()=>{
      setOpenUpdate(false);
  }
  const handleSubmitUpdate=()=>{
       
            dispatch(editProduct(product));

            handleCloseUpdate();
         
  }
  return(
    <div className="product_card">
      <div>
         {props.product.email}
      </div>
      <div>
         {props.product.productname}
      </div>
      <div>
        {props.product.price}
      </div>
      <div>
        <button className="btn btn-danger" onClick={()=>{deleteTheProduct(props.product.id)}}>delete</button>
        <button className="btn btn-success" onClick={()=>{handleUpdate(props.product.id)}}>Update</button>
      </div>
      <Dialog open={openUpdate} onClose={handleCloseUpdate} aria-labelledby="form-dialog-title">
        
        <DialogContent>
          <DialogContentText>
          Update
          </DialogContentText>
         <input  className="form-control" type="text" name="productname" value={product.productname} onChange={handleUpdateChange}/>
         <br/>
         <input className="form-control" type="text" value={product.price} name="price" onChange={handleUpdateChange}/>
         <br/>
         <button onClick={()=>{handleSubmitUpdate()}} className="btn pl-2 ml-2 btn-dark text-white">Update</button>
        </DialogContent>
        <DialogActions>
      
          <Button onClick={handleCloseUpdate} color="primary">
             close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default Product;