import './App.css';
import React, { Component } from 'react';
// import propTypes from 'PropTypes';

class App extends Component {
  static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  buttonClickHandler = e => {
    const type = e.target.name;
    this.setState(currentState => {
      return {
        [type]: currentState[type] + 1,
      };
    });
  };

  render() {
    const { good } = this.state;
    const totalFeedbacks = Object.values(this.state).reduce(
      (acc, value) => acc + value,
    );
    const positiveFeedbackPercentage = (good / totalFeedbacks) * 100;
    console.log('~ positiveFeedbackPercentage', positiveFeedbackPercentage);

    return (
      <section className="feedbackSection">
        <h2>Please leave feedback</h2>
        <button
          className="feedbackButton"
          onClick={this.buttonClickHandler}
          name="good"
        >
          Good
        </button>
        <button
          className="feedbackButton"
          onClick={this.buttonClickHandler}
          name="neutral"
        >
          Neutral
        </button>
        <button
          className="feedbackButton"
          onClick={this.buttonClickHandler}
          name="bad"
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <ul className="feedbackList">
          <li className="feedbackListItem">Good: {this.state.good}</li>
          <li className="feedbackListItem">Neutral: {this.state.neutral}</li>
          <li className="feedbackListItem">Bad: {this.state.bad}</li>
        </ul>
        <span>Total feedbacks: {totalFeedbacks}</span>
      </section>
    );
  }
}

export default App;
