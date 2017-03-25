import React, { Component } from 'react';
import './terry.css';

class Terry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Terry"
    };
  }

  render() {
    return (
      <div className="Terry">
        <div className="Terry-header">
          <h2>Welcome to {this.state.name}'s component</h2>
        </div>
        <p className="Terry-intro">
          To get started, edit <code>src/Terry.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Terry;