import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import HowFeeling from '../Pages/HowFeeling/HowFeeling';
import HowSupported from '../Pages/HowSupported/HowSupported';
import HowUnderstanding from '../Pages/HowUnderstanding/HowUnderstanding';
import ReviewFeedback from '../Pages/ReviewFeedback/ReviewFeedback';
import Comments from '../Pages/Comments/Comments';
import SuccessPage from '../Pages/SuccessPage/SuccessPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <br />
        <Router>
          <Route exact path="/" component={HowFeeling} />
          <Route exact path="/support" component={HowSupported} />
          <Route exact path="/understanding" component={HowUnderstanding} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review-feedback" component={ReviewFeedback} />
          <Route exact path="/success" component={SuccessPage} />
        </Router>
      </div>
    );
  }
}

export default App;
