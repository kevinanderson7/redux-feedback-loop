import React, { Component } from 'react';
import { connect } from 'react-redux';

class SuccessPage extends Component {
  render() {
    return (
      <div>
        <h1>Success!</h1>

        <button onClick={this.onNextClick}>Next</button>
      </div>
    );
  }
}

export default connect()(SuccessPage);
