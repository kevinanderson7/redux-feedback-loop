import React, { Component } from 'react';
import { connect } from 'react-redux';

class HowFeeling extends Component {
  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <h3>
          On a scale of 1-5, 5 being the best and 1 being the worst, how do you
          feel about today's content?
        </h3>
        <input placeholder="Enter a number"></input>
        <button>Next</button>
      </div>
    );
  }
}

export default connect()(HowFeeling);
