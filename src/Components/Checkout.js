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


       return total;
       
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
                <img src = "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" length="75px" width="75px" />
                <PayPal 
                />
            </div>)
        }

        if(this.state.creditCardPayment){
            return(<div>
                <img src = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fsteveolenski%2Ffiles%2F2016%2F07%2FMastercard_new_logo-1200x865.jpg" length="75px" width="75px" />
                  
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
              <button className = "button" onClick={()=>this.handlePayPalClick()}>
              <img src = "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" length="45px" width="45px" />Pay With Paypal</button>
              <br/>  
              <button className = "button" onClick={()=>this.handleCreditCardClick()}>
              <img src = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fsteveolenski%2Ffiles%2F2016%2F07%2FMastercard_new_logo-1200x865.jpg" length="35px" width="35px" />
              Pay With Credit Card</button>
            </div>
        )
    }
}

export default  Checkout