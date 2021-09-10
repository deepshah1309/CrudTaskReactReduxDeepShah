import "./MainPage.css";
import Img from "../../../src/imgs.png";
const MainPage=()=>{

    return (
      <div className="bg-white text-white h-100 makeHeight">
        <div className="img">
          <img src={Img} height="100%" width="90%"></img>
        </div>
        <div className="innerBox text-dark">
           <h3>Just one step to be a part</h3>
           <br></br>
           <div>
           <button className="btn btn-secondary text-white" onClick={()=>{window.location="/userlogin"}}>Login</button>
           <button  className=" mt-3 btn btn-success text-white">Get started</button>
           </div>
           
        </div>
      </div>
    )


}
export default MainPage;