import CombineReducer from '../reducers/CombineReducer';
import {createStore} from "redux";
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk" 
const store=createStore(CombineReducer, applyMiddleware(thunk));
export default store