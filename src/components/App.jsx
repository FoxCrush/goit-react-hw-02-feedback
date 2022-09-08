import React, { Component } from 'react';
import Feedback from './feedback';

class App extends Component {
  initialState = { good: 2, neutral: 1, bad: 3 };
  render() {
    return <Feedback initialState={this.initialState} />;
  }
}
export default App;
