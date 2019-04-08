import React, { Component } from 'react';
class Footer extends Component {
  constructor(){
    super();
  }
  render() {
    return (
        <div className="customerCard">
            {this.props.children}
        </div>
      );
  }
}

export default Footer;