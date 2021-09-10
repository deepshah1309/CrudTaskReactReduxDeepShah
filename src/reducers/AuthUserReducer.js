const initialstate = {    
  authuser:{username:"deepshah1309@gmail.com",password:"1234"}   
};    
  
const AuthUserReducer = (state = initialstate, action) => {    
  switch (action.type) {    
      case 'GET_USER':    
          return {    
              ...state    
          };    
    
      default:    
          return state;    
  }    
};    
  
export default AuthUserReducer; 