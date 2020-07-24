import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>

        <input type="text" placeholder="Enter any comments"></input>
        <button>Next</button>
      </div>
    );
  }
}

export default connect()(Comments);
