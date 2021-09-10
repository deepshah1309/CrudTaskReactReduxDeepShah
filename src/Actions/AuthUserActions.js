export function getAuthUser() {  
  return dispatch => {  
      return dispatch({  
          type: 'GET_USER'  
      });  
  }  
};  