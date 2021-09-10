import './App.css';
import MainPage from './Components/MainPage/MainPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import UserList from './Components/UserList/UserList';
import ProductList from './Components/ProductList/ProductList';
import AddProduct from './Components/Product/AddProduct';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login';
function App() {
  return (
    
    <Router>
      <Switch>
        {/** Routing techniques for Deep CRUD APP  and store is managed in the provider redux*/}
        <Route exact path="/">
            <NavBar/>
            <div><MainPage/></div>
        </Route>
        <Route exact path="/user/add">
            <div>User add</div>
        </Route>
        <Route exact path="/:id/product">
            <ProductList/>
        </Route>
        <Route exact path="/userList">
        <NavBar/>
          <UserList/>
        </Route>
        <Route exact path="/userlogin">
                 <Login/>
        </Route>
        <Route exact path="/product/add">
           <AddProduct/>
           <ProductList/>
        </Route>
        
      </Switch>
    </Router>
 
  );
}

export default App;
