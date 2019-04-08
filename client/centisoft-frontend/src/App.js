import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import CustomerMain from './components/customer/CustomerMain'

class App extends Component {
  constructor(){
    super();
      this.state={
        location:"",
    }
  }
  componentDidMount(){
    this.setState({location:window.location.href});
  }
  render() {
    if(this.state.location!="")
    {
      if(this.state.location.includes('customer'))
      {
        return(
          <div className="appContainer">
            <Navbar></Navbar>
            <CustomerMain>
            </CustomerMain>
          </div>
        )
      }
      else{
        return (
          <div className="appContainer">
            <Navbar></Navbar>
            <Home>
              <Footer></Footer>
            </Home>
          </div>
        );
      }
    }
    else return null;
  }
}

export default App;