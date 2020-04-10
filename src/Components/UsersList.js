import React, { Component } from 'react'

export default class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    
      }
    
      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
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
            <div>

 <div > 
     
 <h2>Beast PC Users</h2>
     {
        this.state.data.map(same => {
          return <div > 
              {same.name} | {same.email} </div>
        })
      } </div>
    
  }
                
            </div>
        )
    }
}
