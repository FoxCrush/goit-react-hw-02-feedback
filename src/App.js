import './App.css';
import React, { Component } from 'react';
import Statistics from 'components/statistics/';
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
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = Object.values(this.state).reduce(
      (acc, value) => acc + value,
    );
    const positiveFeedbackPercentage = (
      (good / totalFeedbacks) *
      100
    ).toFixed();

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
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      </section>
    );
  }
}

export default App;
