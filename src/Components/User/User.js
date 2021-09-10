import "./User.css";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import store from "../../Store/ConfigureStore";
import { deleteUser, editUser, getUser} from "../../Actions/UserActions";
import { useState } from "react";
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const User=(props)=>{
  console.log(props,"deep");
const [openUpdate,setOpenUpdate]=useState(false);
const [user,setUser]=useState(props.object);
//  console.log(props);
const dispatch=useDispatch();
  let mystate=useSelector((state)=>state.UserReducer);
  console.log(mystate);

  const handleDelete=(id)=>{
     if(window.confirm("Are you sure to delete?")){
      dispatch(editUser(user));
     } 
      // props.setUsers(store.getState().users);
 //     console.log(store.getState(),"yeah");
  }
  const handleUpdateChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value});
  }
  const handleUpdate=()=>{
      
    setOpenUpdate(true);

  }
  const handleCloseUpdate=()=>{
      setOpenUpdate(false);
  }
  const handleSubmitUpdate=()=>{
          if(window.confirm("are You aure to update?")){
            dispatch(editUser(user));
            handleCloseUpdate();
          }
  }
  return(
     <div className="user_card">
       <div>
              <div>
                {props.object.name}
              </div>
              <div>
                {props.object.username}
              </div>
              <div>
                {props.object.email}
              </div>
              <div>
                {props.object.website}
              </div>
       </div>
       <div>
        
       </div>
       <div>
      
         <button className="btn btn-danger mt-2" onClick={()=>{handleDelete(props.object.id)}}>Delete</button>
         <button className="btn btn-success mt-2 ml-2" onClick={()=>{handleUpdate(props.object.id)}}>Update</button>
       </div>
       <Dialog open={openUpdate} onClose={handleCloseUpdate} aria-labelledby="form-dialog-title">
        
        <DialogContent>
          <DialogContentText>
          Update
          </DialogContentText>
         <input  className="form-control" placeholder="email here" type="email" name="email" value={user.email} onChange={handleUpdateChange}/>
         <br/>
         <input className="form-control" type="text" value={user.username} name="username" onChange={handleUpdateChange}/>
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
export default User;