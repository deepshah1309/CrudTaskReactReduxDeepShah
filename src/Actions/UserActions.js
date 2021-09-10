export function getUser() {  
  return dispatch => {  
      return dispatch({  
          type: 'GET_USER'  
      });  
  }  
};  

export function addUser(data) {  
  return dispatch => {  
      return dispatch({  
          type: 'ADD_USER',  
          payload: data  
      });  
  }  
};  

export function editUser(data) {  
  return dispatch => {  
      return dispatch({  
          type: 'EDIT_USER',  
          payload: data  
      });  
  }  
};  

export function deleteUser(userId) {  
  return dispatch => {  
      return dispatch({  
          type: 'DELETE_USER',  
          payload: userId  
      });  
  }  
}; 