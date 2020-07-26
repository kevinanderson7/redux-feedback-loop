import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class HowSupported extends Component {
  state = {
    supportInput: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onNextClick = (event) => {
    if (this.state.supportInput === '') {
      alert('Please enter a number');
      return;
    } else {
      this.props.dispatch({
        type: 'SET_SUPPORT',
        payload: this.state,
      });
      this.props.history.push('/comments');
    }
  };

  render() {
    return (
      <div>
        <h1>How well are you being supported?</h1>
        <h3>
          On a scale of 1-5, 5 being the most and 1 being the least, how
          supported do you feel today?
        </h3>
        <TextField
          label="Enter a number"
          id="outlined-basic"
          variant="outlined"
          onChange={this.onInputChange('supportInput')}
        ></TextField>
        <Button variant="contained" onClick={this.onNextClick}>
          Next
        </Button>
      </div>
    );
  }
}

export default connect()(HowSupported);
