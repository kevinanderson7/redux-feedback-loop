import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {
  render() {
    return (
      <div>
        <h1>Review Feedback Page</h1>
        <ul>
          <li></li>
        </ul>
        <button>Submit</button>
      </div>
    );
  }
}

export default connect()(ReviewFeedback);
