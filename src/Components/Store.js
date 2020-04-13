import React, { Component } from 'react'
import ProductDetail from './ProductDetail'


export default class Store extends Component {
   
    constructor(){
        super();
    this.state = {
        toProductdetail: false,
        clickedItem : {},
        cartArray : [],
      }
      this.handleCartChangeS = this.handleCartChangeS.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (item) => {
        console.log(item);
        let newArray = this.state.cartArray;
        newArray.push(item);

        console.log(newArray);

        this.setState({
            toProductdetail: true,
            clickedItem: item,
            cartArray : newArray
        });
    }

    handleCartChangeS(evt) {
        //setTitle(evt.target.value)
        console.log("lets go store");
        this.setState({
            toProductdetail: false,
       
        });
      }

    render() {

        if (this.state.toProductdetail === true) {
            return(
            <div>
            <ProductDetail value = {this.state.clickedItem} cartArray = {this.state.cartArray} onCartChange = {this.handleCartChangeS}  />
            </div>
            )

          }

        console.log(this.props.value.dataArray);

        if(this.props.value.dataArray.length > 0)
        return (
            <div className ="store">
                {/* {this.props.value[0].name}
                <br/>
                <button onClick={()=>this.handleClick(this.props.value[0])}>View Item </button> */}

<h2>Beast PC Products</h2>
     {
        this.props.value.dataArray.map(value => {
          return <div > 
              {value.name}
              <br/> 
              <img src = {value.imageURL} length="300px" width="300px" />
              <br/> 
              Price: {value.price}
              <br/>  <br/> 
              {/* Description: {value.description}
              <br/> */}
              <button className = "button" onClick={()=>this.handleClick(value)}>View Item </button>
              <br/>  <br/> 
              </div>
        })
      }

            </div>
        )

        return (
            <div>
            
               
            </div>
        )
    }
}
