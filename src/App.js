import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Products from './Components/ProductInfo';
import Store from './Components/Store';
import UsersList from './Components/UsersList';
import Checkout from './Components/Checkout'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {



  constructor() {

    super();
    
    this.productInfoAccess = new Products();
    this.state = {
      productData: [],
    
    
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteClicked = this.deleteClicked.bind(this);

  }

  componentDidMount() {
 //    this.productInfoAccess = ;

    let productInfo =  this.productInfoAccess.dataArray///this.productInfoAccess.dataArray; 

    console.log(productInfo);

    this.setState({
      productData: productInfo

    })
    
    
  }

  deleteClicked(productID) {
    this.productInfoAccess.deleteProductWithID(productID);

    let productInfo =  this.productInfoAccess.dataArray///this.productInfoAccess.dataArray; 

    console.log(productInfo);

    this.setState({
      productData: productInfo

    })


  }

  handleSubmit(event){
     //alert('The form was submitted');
     event.preventDefault();
     

    let nameInput = document.getElementById("nameInput").value;
    nameInput = nameInput.trim();

    if(nameInput === "")
    {
      alert('name field is blank');
      return;
    }
    console.log(nameInput.value);

    let imageURLInput = document.getElementById("imageURLInput").value;
    imageURLInput = imageURLInput.trim();

    if(imageURLInput === "")
    {
      alert('Image URL field is blank');
      return;
    }
    console.log(imageURLInput.value);

    let priceInput = document.getElementById("priceInput").value;
    priceInput = priceInput.trim();

    if(priceInput === "")
    {
      alert('price field is blank');
      return;
    }
    console.log(priceInput.value);


    let descriptionInput = document.getElementById("descriptionInput").value;
    descriptionInput = descriptionInput.trim();

    if(descriptionInput === "")
    {
      alert('description field is blank');
      return;
    }
    console.log(descriptionInput.value);

    let idInput = document.getElementById("idInput").value;
    idInput = idInput.trim();

    if(idInput === "")
    {
      alert('id field is blank');
      return;
    }
    console.log(idInput.value);

    if(!this.productInfoAccess.updateProductWithID(idInput,nameInput,priceInput,imageURLInput,descriptionInput))
    {
      this.productInfoAccess.createProduct(nameInput,priceInput,imageURLInput,descriptionInput,idInput);
    }

    let productInfo =  this.productInfoAccess.dataArray///this.productInfoAccess.dataArray; 

    console.log(productInfo);

    this.setState({
      productData: productInfo

    })
     
 }

  render() {
    return (
      <div className = "App">

        
      
<Router>
<div className = "nav">
  <nav>
    <ul className= "link">
      
        <Link to="/">Home</Link> |
      
        <Link to="/Store">Store</Link> |
     
        <Link to="/Cart">Cart</Link> |

        <Link to="/UsersList"> Admin Users List</Link> |
      
        <Link to="/AdminAddProductManager">Admin Product Manager</Link> |
          
    </ul>
  </nav>

  
  <Switch>
  <Route path="/Cart">
      <Cart
     
      />
    </Route>
    <Route path="/Store">
      <Store value = {this.state.productData}/>
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
              {product.name} | {product.id} | <button onClick={() => this.deleteClicked(product.id)}>delete</button>
                </div>
           
        })
        
      } 

        <div>
        <br/><br/>
        <h2>Add Product Or Enter a existing ID to Update</h2>
        <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input id="nameInput" type="text" />   
                    </label>
                    <br/><br/>
                    <label>
                        Image URL:
                        <input id="imageURLInput" type="text"  />   
                    </label>
                          <br/><br/>
                    <label>
                        Price:
                        <input id="priceInput" type="text"  />   
                    </label>
                    <br/><br/>
                    <label>
                    Description:
                        <input id="descriptionInput" type="text"  />   
                    </label>
                    <br/><br/>
                    <label>
                    ID:
                        <input id="idInput" type="text"  />   
                    </label>
                    <br/><br/>

                    <input type="Submit" value="Submit" />
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
