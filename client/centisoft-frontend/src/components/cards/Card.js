import React, { Component } from 'react';
class Card extends Component {
  constructor()
  {
    super();
  }
  render() {
    return (
      <div className="card" onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
