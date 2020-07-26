import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

        <TextField
          label="Enter comments"
          id="outlined-basic"
          variant="outlined"
          onChange={this.onInputChange('commentsInput')}
          type="text"
        ></TextField>
        <Button variant="contained" onClick={this.onNextClick}>
          Next
        </Button>
      </div>
    );
  }
}

export default connect()(Comments);
