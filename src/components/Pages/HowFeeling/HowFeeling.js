import React, { Component } from 'react';
import { connect } from 'react-redux';

class HowFeeling extends Component {
  state = {
    feelingInput: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };
  onNextClick = (event) => {
    //dispatch feelingInput to store
    //go to next page
    if (this.state.feelingInput === '') {
      alert('Please enter a number');
      return;
    } else {
      this.props.dispatch({
        type: 'SET_FEELING',
        payload: this.state,
      });
      this.props.history.push('/understanding');
    }
  };

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <h3>
          On a scale of 1-5, 5 being the best and 1 being the worst, how do you
          feel about today's content?
        </h3>
        <input
          type="number"
          onChange={this.onInputChange('feelingInput')}
          placeholder="Enter a number"
        ></input>
        <button onClick={this.onNextClick}>Next</button>
      </div>
    );
  }
}

export default connect()(HowFeeling);
