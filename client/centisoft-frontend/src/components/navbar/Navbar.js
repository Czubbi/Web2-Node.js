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
        <div className="myNavLogo">
            <div>
                <span className="logo">Centi<span style={{color:"white"}}>Soft</span></span>
                {/*<img style={{width:"100px"}} src={process.env.PUBLIC_URL + '/images/logo.png'}/>*/}
            </div>
            <div>
                <hr></hr>
            </div>
        </div>
        <div className="myNavEntries">
            <ul>
                <li className="menuEntry"><i className="fas fa-user"></i>&emsp;Customers</li>
                <li className="menuEntry"><i className="fas fa-tasks"></i>&emsp;Projects</li>
                <li className="menuEntry"><i className="fas fa-code-branch"></i>&emsp;Developers</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
