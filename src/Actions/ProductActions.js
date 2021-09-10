export function getProduct() {  
  return dispatch => {  
      return dispatch({  
          type: 'GET_PRODUCT'  
      });  
  }  
};  

export function addProduct(data) {  
  return dispatch => {  
      return dispatch({  
          type: 'ADD_PRODUCT',  
          payload: data  
      });  
  }  
};  
export function editProduct(data) {  
  return dispatch => {  
      return dispatch({  
          type: 'EDIT_PRODUCT',  
          payload:data  
      });  
  }  
};  
 

export function deleteProduct(productId) {  
  return dispatch => {  
      return dispatch({  
          type: 'DELETE_PRODUCT',  
          payload:productId  
      });  
  }  
}; 