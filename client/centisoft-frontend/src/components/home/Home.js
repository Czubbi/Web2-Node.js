import React, { Component } from 'react';
class Home extends Component {
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
      <div className="content">
        <div className="contentHeader">
            <h1>Welcome to CentiSoft<sup><span style={{fontSize:"14px"}}>&reg;</span></sup> Management Software</h1>
        </div>
      </div>
    );
  }
}

export default Home;
