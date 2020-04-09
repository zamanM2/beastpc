import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Products from './Components/Products';
import Reviews from './Components/Reviews';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div>
        Hello World
      


<Router>
<div className = "nav">
  <nav>
    <ul>
      
        <Link to="/">Home</Link>
      
     
        <Link to="/Store">Store</Link>
     
        <Link to="/Cart">Cart</Link>

        <Link to="/Reviews">Reviews</Link>
      
      
    </ul>
  </nav>

  
  <Switch>
  <Route path="/Cart">
      <Cart/>
    </Route>
    <Route path="/Products">
      <Products />
    </Route>
    <Route path="/Reviews">
      <Reviews />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
</div>
</Router>
</div>
    );
  }
}


export default App;
