import React, { Component } from 'react'

import Checkout from './Checkout'
class Cart extends Component {

    constructor() {
        super();
        this.state = {
            cartItems: [],
            toCheckout: false 
          }
    }

    componentDidMount() {
        
        console.log(this.props.cartArray);
       /// newCart.push(newItem);

       this.setState({
        
        cartItems: this.props.cartArray
    });


    }

    handleClick = () => {

        this.setState({
            toCheckout: true,
       
        });
    }


    render() {

        if(this.state.toCheckout){
            return(
                <Checkout value = {this.state.cartItems}/>
            )
        }


        return (
            <div>
                <h2>Item In The Cart</h2>
     {
         this.state.cartItems.map(value => {
          return <div > 
              {value.name}
              <br/> 
              <img src = {value.imageURL} length="50px" width="50px" />
              <br/> 
              Price: {value.price}
              <br/>  <br/> 
              {/* Description: {value.description}
              <br/> */}
              <button onClick={()=>this.handleClick()}>Check Out </button>
              <br/>  <br/> 
              </div>
        })
      }
               
               <button onClick={()=>this.props.onCartChange()}>Back to all items </button>
            </div>
        )
    }
}

export default Cart
