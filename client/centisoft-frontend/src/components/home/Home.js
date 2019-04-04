import React, { Component } from 'react';
import Card from '../cards/Card.js';
class Home extends Component {
  constructor(){
    super();
  }
  sayHello=()=>{
    alert("Hello World");
  }
  render() {
    return (
      <div className="content">
        <div className="contentHeader">
            <h1>Welcome to CentiSoft<sup><span style={{fontSize:"14px"}}>&reg;</span></sup> Management Software</h1>
        </div>
        <div className="cardWrap">
          <Card onClick={()=>{window.location.replace("https://facebook.com")}}>
            <div>
              <h1>Customer</h1>
              <h4>Manage customers with ease.</h4>
              <h4><b><a href='https://facebook.com'>Add</a> <a href='https://facebook.com'>Delete</a> <a href='https://facebook.com'>Update</a></b></h4>
            </div>
          </Card>
          <Card>
            <div>
              <h1>Projects</h1>
              <h4>Manage projects and their tasks.</h4>
              <h4><b><a href='https://facebook.com'>Add</a> <a href='https://facebook.com'>Delete</a> <a href='https://facebook.com'>Update</a></b></h4>
            </div>
          </Card>
          <Card>
            <div>
              <h1>Developers</h1>
              <h4>Manage developers.</h4>
              <h4><b><a href='https://facebook.com'>Add</a> <a href='https://facebook.com'>Delete</a> <a href='https://facebook.com'>Update</a></b></h4>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
