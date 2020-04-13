import React, { Component } from 'react'

export default class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    
      }
    
      componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        fetch(proxyurl + 'https://jsonplaceholder.typicode.com/users')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
             console.log(data);
            this.setState({
              data
            })
          })
      }
    

    render() {
        return (
            <div className = "user-list">

 <div  > 
     
 <h2>BeastPC Users</h2>
     {
        this.state.data.map(same => {
          return <div className = "json" > 
              {same.name} | {same.email} 
              <br/><br/>
              <br/><br/>
              </div>
              
        })
      } </div>
    
  
                
            </div>
        )
    }
}
