import React, { Component } from 'react';
import { connect } from 'react-redux';

class HowSupported extends Component {
  render() {
    return (
      <div>
        <h1>How well are you being supported?</h1>
        <h3>
          On a scale of 1-5, 5 being the most and 1 being the least, how
          supported do you feel today?
        </h3>
        <input placeholder="Enter a number"></input>
        <button>Next</button>
      </div>
    );
  }
}

export default connect()(HowSupported);
