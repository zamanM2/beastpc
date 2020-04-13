import React, { Component } from 'react'
import Cart from './Cart'

export default class ProductDetail extends Component {
   

    constructor() {
        super();
        this.state = {
            toCartList: false,
            clickedItem : []
          }
      }


      handleCartChangeP(evt) {

        console.log("lets go product detail");
        this.props.onCartChange();
      }

      toCart = () => {

        this.setState({
            toCartList: true,
            clickedItem: this.props.value
        });
    }

    render() {

        if (this.state.toCartList === true) {
            return(
            <div>
            <Cart value = {this.state.clickedItem} cartArray =  {this.props.cartArray} onCartChange = {this.props.onCartChange} />
            </div>
            )

          }

        
        return (
            <div>
                
                {this.props.value.name}
                <br/>
                <img src = {this.props.value.imageURL} length="300px" width="300px" />
                <br/>
                {this.props.value.description}
                <br/><br/>
                <button onClick={()=>this.toCart()}>Add To Cart</button>
                <br/><br/>
                <a href = "/Store">Back to all items</a>

             
            </div>
        )
    }
}
