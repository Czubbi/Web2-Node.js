import React, { Component } from 'react';
import Card from '../cards/Card.js';
import Footer from '../footer/Footer';
class Home extends Component {
  constructor(){
    super();
  }
  render() {
    return (
        <div className="modalWrapper">
            <div className="modalCard">
                <div onClick={(e)=>{e.stopPropagation();this.props.onFilterClick()}} className="modalExit">
                    <i style={{fontWeight:'bold',fontSize:30,color:'black'}}className="far fa-times"></i>
                </div>
                <h1>{this.props.title}</h1>
                <hr></hr>
                <div className="modalContent">
                    {this.props.children}
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
