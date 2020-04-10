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
            <div>
                {this.props.value[0].name}
                <br/>
                <button onClick={()=>this.handleClick(this.props.value[0])}>View Item </button>
            </div>
        )

        return (
            <div>
            
               
            </div>
        )
    }
}
