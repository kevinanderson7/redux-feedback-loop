import React, { Component } from 'react';
import { connect } from 'react-redux';

class HowUnderstanding extends Component {
  state = {
    understandingInput: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };
  onNextClick = (event) => {
    //dispatch understandingInput to store
    //go to next page
    if (this.state.understandingInput === '') {
      alert('Please enter a number');
      return;
    } else {
      this.props.dispatch({
        type: 'SET_UNDERSTANDING',
        payload: this.state,
      });
      this.props.history.push('/support');
    }
  };

  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <h3>
          On a scale of 1-5, 5 being the best and 1 being the worst, how well do
          you feel like you understood today's content?
        </h3>
        <input
          type="number"
          onChange={this.onInputChange('understandingInput')}
          placeholder="Enter a number"
        ></input>
        <button onClick={this.onNextClick}>Next</button>
      </div>
    );
  }
}

export default connect()(HowUnderstanding);
