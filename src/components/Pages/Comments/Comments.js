import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  render() {
    return (
      <div>
        <h1>Comments Page</h1>
      </div>
    );
  }
}

export default connect()(Comments);
