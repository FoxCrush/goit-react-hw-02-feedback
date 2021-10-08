import React, { Component } from 'react';
import Statistics from 'components/statistics/';
import FeedbackOptions from 'components/feedback-options';

class StatSection extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  buttonClickHandler = buttonType => {
    this.setState(currentState => {
      return {
        [buttonType]: currentState[buttonType] + 1,
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
        <FeedbackOptions buttonClickHandler={this.buttonClickHandler} />
        {totalFeedbacks >= 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positiveFeedbackPercentage={positiveFeedbackPercentage}
            totalFeedbacks={totalFeedbacks}
          />
        ) : (
          <p>No Feedback Given</p>
        )}
      </section>
    );
  }
}

export default StatSection;
