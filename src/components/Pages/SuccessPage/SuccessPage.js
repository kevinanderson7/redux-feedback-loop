import React, { Component } from 'react';
import { connect } from 'react-redux';

class SuccessPage extends Component {
  render() {
    return (
      <div>
        <h1>Success!</h1>

        <button onClick={this.onNextClick}>Leave New Feedback</button>
      </div>
    );
  }
}

export default connect()(SuccessPage);
