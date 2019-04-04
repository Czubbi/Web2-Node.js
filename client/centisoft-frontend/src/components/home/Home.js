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
              <i className="fas fa-user"></i>
              <h1>Customers</h1>
              <h4>Manage customers with ease.</h4>
              <h4>You can <b><span>view</span></b>, <b><span>create</span></b>, <b><span>delete</span></b> and <b><span>update</span></b> developers.</h4>
            </div>
          </Card>
          <Card>
            <div>
              <i className="fas fa-tasks"></i>
              <h1>Projects</h1>
              <h4>Manage projects and their tasks.</h4>
              <h4>You can <b><span>view</span></b>, <b><span>create</span></b>, <b><span>delete</span></b> and <b><span>update</span></b> developers.</h4>
            </div>
          </Card>
          <Card>
            <div>
              <i className="fas fa-code-branch"></i>
              <h1>Developers</h1>
              <h4>Manage developers.</h4>
              <h4>You can <b><span>view</span></b>, <b><span>create</span></b>, <b><span>delete</span></b> and <b><span>update</span></b> developers.</h4>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
