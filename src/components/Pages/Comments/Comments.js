import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    commentsInput: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onNextClick = (event) => {
    this.props.dispatch({
      type: 'SET_COMMENTS',
      payload: this.state,
    });
    this.props.history.push('/review-feedback');
  };
  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>

        <input
          onChange={this.onInputChange('commentsInput')}
          type="text"
          placeholder="Enter any comments"
        ></input>
        <button onClick={this.onNextClick}>Next</button>
      </div>
    );
  }
}

export default connect()(Comments);
