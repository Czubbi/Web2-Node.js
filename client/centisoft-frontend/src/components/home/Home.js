import React, { Component } from 'react';
import Card from '../cards/Card.js';
import Footer from '../footer/Footer';
class Home extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="content-home">
        <div className="contentHeader">
            <h1>Welcome to CentiSoft<sup><span style={{fontSize:"14px"}}>&reg;</span></sup> Management Software</h1>
        </div>
        <div className="cardWrap">
          <Card onClick={()=>{window.location.replace("/customers")}}>
            <div>
              <i className="fas fa-user"></i>
              <h1>Customers</h1>
              <h4>Manage customers with ease.</h4>
              <h4>You can <b><span>view</span></b>, <b><span>create</span></b>, <b><span>delete</span></b> and <b><span>update</span></b> customers.</h4>
            </div>
          </Card>
          <Card>
            <div>
              <i className="fas fa-tasks"></i>
              <h1>Projects</h1>
              <h4>Manage projects and their tasks.</h4>
              <h4>You can <b><span>view</span></b>, <b><span>create</span></b>, <b><span>delete</span></b> and <b><span>update</span></b> projects.</h4>
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
        {this.props.children}
      </div>
    );
  }
}

export default Home;
