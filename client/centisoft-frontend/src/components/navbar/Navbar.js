import React, { Component } from 'react';
class Navbar extends Component {
  constructor(){
    super();
    this.state={
      text:"",
    }
  }
  sayHello=()=>{
    this.setState({text:"Hello World"});
  }
  render() {
    return (
      <div className="myNav">
        <ul>
            <li>CentiSoft</li>
            <li>Customers</li>
            <li>Projects</li>
            <li>Developers</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
