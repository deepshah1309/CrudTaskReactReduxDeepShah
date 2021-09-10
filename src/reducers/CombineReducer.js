import { combineReducers } from 'redux'

import UserReducer from './UserReducer'
import ProductReducer from './ProductReducer'
import AuthUserReducer from './AuthUserReducer';
export default combineReducers({
   AuthUserReducer,
    ProductReducer,
  UserReducer
})