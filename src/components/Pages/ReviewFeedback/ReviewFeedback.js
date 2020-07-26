import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class ReviewFeedback extends Component {
  confirmFeedback = (event) => {
    console.log('Clicking submit of data');
    const dataForServer = {
      feeling: this.props.store.feelingReducer.feelingInput,
      understanding: this.props.store.understandingReducer.understandingInput,
      support: this.props.store.supportReducer.supportInput,
      comments: this.props.store.commentsReducer.commentsInput,
    };
    Axios.post('/feedback', dataForServer)
      .then((response) => {
        console.log('server post: ', response.data);
        //call to GET
        this.props.history.push('/success');
      })
      .catch((error) => {
        console.log('error during server post', error);
      });
  };

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
        <button onClick={this.confirmFeedback}>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ReviewFeedback);
