import React, { Component } from 'react'
import ProductDetail from './ProductDetail'


export default class Store extends Component {
    state = {
        toProductdetail: false,
        clickedItem : {}
      }


    handleClick = (item) => {
        console.log(item);
        this.setState({
            toProductdetail: true,
            clickedItem: item
        });
    }

    render() {

        if (this.state.toProductdetail === true) {
            return(
            <div>
            <ProductDetail value = {this.state.clickedItem}/>
            </div>
            )

          }

        console.log(this.props.value);

        if(this.props.value.length > 0)
        return (
            <div className ="store">
                {/* {this.props.value[0].name}
                <br/>
                <button onClick={()=>this.handleClick(this.props.value[0])}>View Item </button> */}

<h2>Beast PC Users</h2>
     {
        this.props.value.map(value => {
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
