import React, { Component } from 'react';
import { connect } from 'react-redux';

class HowSupported extends Component {
  render() {
    return (
      <div>
        <h1>How Supported Page</h1>
      </div>
    );
  }
}

export default connect()(HowSupported);
