import React, { Component } from 'react';
import { connect } from 'react-redux';

class HowFeeling extends Component {
  render() {
    return (
      <div>
        <h1>How Feeling Page</h1>
      </div>
    );
  }
}

export default connect()(HowFeeling);
