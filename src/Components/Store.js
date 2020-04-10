import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';


function theFunction() {
    console.log("helloworld");
}

export default class Store extends Component {
    state = {
        toProductdetail: false
      }


    handleClick = () => {
        this.setState({
            toProductdetail: true
        });
    }


    render() {

        if (this.state.toProductdetail === true) {
            return <Redirect to='/ProductDetail' />
          }

        console.log(this.props.value);
        return (
            <div>
                <a href="#" onClick={this.handleClick}>Item</a>
            </div>
        )
    }
}
