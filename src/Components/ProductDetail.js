import React, { Component } from 'react'
import Cart from './Cart'

export default class ProductDetail extends Component {

    constructor() {
        super();
      
      }

    render() {

        
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
