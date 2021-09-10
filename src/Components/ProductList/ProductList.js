import { useSelector } from "react-redux";
import Product from "../Product/Product";

const ProductList=(props)=>{

  return(
         <div>
           {
             Object.keys(props.myproducts).map((idx)=>{
               return(
                 <div key={idx}>
                    <Product  product={props.myproducts[idx]}/>
                 </div>
                
               )
             })
           }
           
        </div>
    
  )
}
export default ProductList;