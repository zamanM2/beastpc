import React, { Component } from 'react'
import PayPal from './PayPal';
import CreditCard from './CreditCard';

  

class Checkout extends Component {
    constructor() {
        super();
        this.checkOut = this.checkOut.bind(this);
        this.state = {
            totalPrice: 0,
            paypalPayment:false,
            creditCardPayment:false
          
          }
    }

    checkOut(){
        let item1Array =  this.props.value;
        let total = 0;
     
        for(let i = 0; i < item1Array.length; i++)
        {
            total = total + item1Array[i].price;
        }
       
        console.log(total);

        this.setState({
        
            totalPrice: total
        });


      }
    
      handlePayPalClick()
      {
        this.setState({
        
            paypalPayment: true
        });
      }

      handleCreditCardClick()
      {
        this.setState({
        
            creditCardPayment: true
        });
      }


    componentDidMount() {
        
    
       this.checkOut();


    }


     
    render() {
       

        if(this.state.paypalPayment){
            return(<div>
                <PayPal />
            </div>)
        }

        if(this.state.creditCardPayment){
            return(<div>
            <CreditCard />
            </div>)
        }

        return (
            <div>
                {
         this.props.value.map(value => {
          return <div > 
              {value.name}
              <br/> 
              <img src = {value.imageURL} length="50px" width="50px" />
              <br/> 
              Price: {value.price}
              <br/>  <br/> 
              {/* Description: {value.description}
              <br/> */}
           
              <br/>  <br/>
             

               
              </div>
        })
        
      }

        <h2>Total:<br/>
                {this.state.totalPrice}
              </h2>
              <br/>  <br/>
              <button onClick={()=>this.handlePayPalClick()}>Pay With Paypal</button>
              <br/>  
              <button onClick={()=>this.handleCreditCardClick()}>Pay With Credit Card</button>
            </div>
        )
    }
}

export default  Checkout