import React, { Component } from 'react';

import './Product.css';

class Product extends Component {
  state = {
    showDescription: false,
  };

  showDescriptionHandler = () => {
    this.setState(prevState => {
      return {
        showDescription: !prevState.showDescription,
      };
    });
  };

  render() {
    const { showDescription } = this.state;

    return (
      <div className="card" onClick={this.showDescriptionHandler}>
        <div className="card-header">{this.props.title}</div>
        {showDescription && (
          <div className="card-body">
            <p className="card-text">{this.props.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Product;
