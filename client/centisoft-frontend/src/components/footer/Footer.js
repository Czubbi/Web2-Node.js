import React, { Component } from 'react';
class Footer extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="footer">
        <h3>CentiSoft&reg; {new Date().getFullYear()}</h3>
      </div>
    );
  }
}

export default Footer;