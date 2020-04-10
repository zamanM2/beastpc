import React, { Component } from 'react'

export default class ProductDetail extends Component {

    constructor() {
        super();
      
      }

    render() {

        
        return (
            <div>
                {this.props.value.description}
                <br/>

                <a href = "/Store">Back to all items</a>

             
            </div>
        )
    }
}
