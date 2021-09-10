const initialstate = {    
  products:[]   
};    
  
const ProductReducer = (state = initialstate, action) => {    
  switch (action.type) {    
      case 'GET_PRODUCTS':    
          return {    
              ...state    
          };    
      case 'ADD_PRODUCT':    
          return {    
              ...state,    
              products: state.products.concat(action.payload)    
          };    
      case 'EDIT_PRODUCT':    
          return {    
              ...state,    
              products: state.products.map(    
                  (content, i) => content.id === action.payload.id ? {...content, productname : action.payload.productname,price: action.payload.price}    
                                          : content)    
          };    
      case 'DELETE_PRODUCT':    
          return {        
              products: state.products.filter(item => item.id !== action.payload)    
          };    
          
      case 'GET_PRODUCT_BY_ID':
        return state;
      default:    
          return state;    
  }    
};    
  
export default ProductReducer; 