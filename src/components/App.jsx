import React, { Component } from 'react';
import Feedback from './feedback';

class App extends Component {
  initialState = { good: 0, neutral: 0, bad: 0 };
  render() {
    return <Feedback initialState={this.initialState} />;
  }
}
export default App;
