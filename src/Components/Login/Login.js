import { useSelector } from "react-redux";
import { useState } from "react";
import "./Login.css";
const Login=()=>{
  const [user,setUser]=useState({email:"",password:""});
  const mystate=useSelector((state)=>state);
  console.log(mystate.AuthUserReducer.authuser.username);
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  const handleSubmit=(e)=>{
        e.preventDefault();
    if(user.email===mystate.AuthUserReducer.authuser.username && user.password===mystate.AuthUserReducer.authuser.password){
     
      localStorage.setItem("email",user.email);
      window.location = "http://localhost:3000/userList";
    }
    else{
      alert("Not Authorized");
    }

  }
  return(
    <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" onSubmit={handleSubmit}>
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label for="username" className="text-info">Email:</label><br/>
                                <input type="email" name="email" id="username" className="form-control" value={user.email} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-info">Password:</label><br/>
                                <input type="password" name="password" value={user.password} onChange={handleChange} id="password" className="form-control"/>
                            </div>
                            
                          
                                <button className="btn btn-success text-white" onSubmit={handleSubmit}>Register</button>
                         
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Login;