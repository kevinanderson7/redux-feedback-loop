import React, { Component } from 'react';
import { connect } from 'react-redux';

class HowUnderstanding extends Component {
  render() {
    return (
      <div>
        <h1>How Understanding Page</h1>
      </div>
    );
  }
}

export default connect()(HowUnderstanding);
