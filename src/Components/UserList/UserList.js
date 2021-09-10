import User from "../User/User";
import React, { useEffect } from "react";


import {useSelector} from "react-redux";
import store from "../../Store/ConfigureStore";
import "./UserList.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddProduct from "../Product/AddProduct";
import { useState } from "react";
import Product from "../Product/Product";
const UserList=()=>{
  const [openProductList,setOpenProductList]=useState(false);
  const mystate=useSelector((state)=>state.UserReducer);
  const myproducts=useSelector((state)=>state.ProductReducer);
  const updatedArray=[];

  const v=localStorage.getItem("email");
  console.log(v,"got");
  console.log(updatedArray);
 console.log(myproducts,"PRODUCTS");
 useEffect(()=>{

 },[mystate,myproducts])
 const [updateUser,setUpdateUser]=useState({
   email:"",
   username:"",
   id:"",
   
 })
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleProductList=()=>{
    setOpenProductList(true);
  }
  const handleCloseProducts=()=>{
    setOpenProductList(false);
  }
  

  return (
    v!=="" || v!==undefined ?(
      <div className="userlist_back">
      <div className="btn-grids">
      <div><button className="mt-2 btn btn-primary text-white" onClick={handleClickOpen}>Add product</button></div>
      <div><button  className="mt-2 btn btn-success text-white" onClick={handleProductList}>Products</button></div>
      </div>
    
      {
        Object.keys(mystate.users).map((idx)=>{
       
          return (
             <User object={mystate.users[idx]} />         
          )
        })
      }
     
     <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Add Your products
          </DialogContentText>
         <AddProduct onClose={handleClose} setOpen={setOpen} open={open}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
           Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog onClose={handleCloseProducts} aria-labelledby="customized-dialog-title" open={openProductList}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloseProducts}>
         Products
        </DialogTitle>
        <DialogContent dividers>
          {
            myproducts.products.map((product,idx)=>{
              return(
                <div key={idx}><Product openProductList={openProductList} setOpenProductList={setOpenProductList} product={product}/></div>
             )
            
          }
            )
        }
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseProducts} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>

     
    </div>
    ):("sorry you are not authorized")
  )
    
  
}

export default UserList; 
