import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {
  render() {
    return (
      <div>
        <h1>Review Feedback Page</h1>
        <ul>
          <li>
            How do you feel? {'  '}
            {this.props.store.feelingReducer.feelingInput}
          </li>
          <li>
            How well do you feel you understood content?{'  '}
            {this.props.store.understandingReducer.understandingInput}
          </li>
          <li>
            How supported do you feel?{'  '}
            {this.props.store.supportReducer.supportInput}
          </li>
          <li>
            Additional comments: {'   '}
            {this.props.store.commentsReducer.commentsInput}
          </li>
        </ul>
        <button>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ReviewFeedback);
