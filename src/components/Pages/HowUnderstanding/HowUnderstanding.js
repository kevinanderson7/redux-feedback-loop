import React, { Component } from 'react';
import { connect } from 'react-redux';

class HowUnderstanding extends Component {
  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <h3>
          On a scale of 1-5, 5 being the best and 1 being the worst, how well do
          you feel like you understood today's content?
        </h3>
        <input placeholder="Enter a number"></input>
        <button>Next</button>
      </div>
    );
  }
}

export default connect()(HowUnderstanding);
