import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    );
  }
}

export default App;