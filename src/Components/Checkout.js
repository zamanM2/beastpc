import React, { Component } from 'react'

  

class Checkout extends Component {
    constructor() {
        super();

    }

      checkOut(){
        let item1 =  1085;
     
        let item2 =  1655;
                     
       let item3 =  1649;
                    
       let item4 =  99 ; 
   
       let item5 = 20;
                     
                     
       let item6 = 73;
       
       let total = item1 + item2 + item3 + item4 + item5 + item6;

       return total;
       
      }

     
    render() {
       
        return (
            <div>
                {/* {console.log(checkOut)} */}
            </div>
        )
    }
}

export default  Checkout