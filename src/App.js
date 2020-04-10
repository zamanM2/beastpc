import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Products from './Components/ProductInfo';
import Reviews from './Components/Reviews';
import Store from './Components/Store';
import UsersList from './Components/UsersList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {


  constructor() {

    super();
    let productInfoAccess;
    this.productInfoAccess = null;
    this.state = {
      productData: [],
    
    };

  }

  componentDidMount() {
     this.productInfoAccess = new Products();

    let productInfo = this.productInfoAccess.dataArray; 

    console.log(productInfo);

    this.setState({
      productData: productInfo
    })
    
  }

  render() {
    return (
      <div className = "App">
        Hello World
      


<Router>
<div className = "nav">
  <nav>
    <ul>
      
        <Link to="/">Home</Link>
      
        <Link to="/Store">Store</Link>
     
        <Link to="/Cart">Cart</Link>

        <Link to="/Reviews">Reviews</Link>

        <Link to="/UsersList"> Admin Users List</Link>
      
        <Link to="/AdminAddProductManager">Admin Product Manager</Link>
      
      
    </ul>
  </nav>

  
  <Switch>
  <Route path="/Cart">
      <Cart/>
    </Route>
    <Route path="/Store">
      <Store value = {this.state.productData}/>
    </Route>
    <Route path="/Products">
      <Products />
    </Route>
    <Route path="/Reviews">
      <Reviews />
    </Route>
    <Route path="/UsersList">
      <UsersList />
    </Route>
    <Route path="/AdminAddProductManager">
      <div>
      <h2>Product List</h2>
     {
      // console.log(this.state.productData)
       this.state.productData.map(product => {
          return <div > 
              {product.name} | {product.id} | <button>delete</button>
                </div>
           
        })
        
      } 

        <div>
        <br/><br/>
        <h2>Add Product Or Enter a existing ID to Update</h2>
        <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />   
                    </label>
                    <br/><br/>
                    <label>
                        Image URL:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />   
                    </label>
                          <br/><br/>
                    <label>
                        Price:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />   
                    </label>
                    <br/><br/>
                    <label>
                    Description:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />   
                    </label>
                    <br/><br/>
                    <label>
                    ID:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />   
                    </label>
                    <br/><br/>

                    <input type="Submit" value="Search" />
                </form>
                 
        </div>

      </div>
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
