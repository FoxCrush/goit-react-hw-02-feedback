import React, { Component } from 'react';
import styles from './feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class Feedback extends Component {
  static defaultProps = { initialState: { good: 0, neutral: 0, bad: 0 } };

  state = this.props.initialState;

  countTotalFeedback = () => {
    const totalFeedbackCount = Object.values(this.state).reduce(
      (current, acc) => current + acc,
      0
    );
    return totalFeedbackCount;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.floor(
      (100 * this.state.good) /
        Object.values(this.state).reduce((current, acc) => current + acc, 0)
    );
    return percentage;
  };

  buttonClickHandler = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.countPositiveFeedbackPercentage();
      this.countTotalFeedback();
    }
  }

  render() {
    return (
      <div className={styles.feedbackContainer}>
        <span className={styles.feedbackTitle}>Please leave your feedback</span>
        <FeedbackOptions onButtonClick={this.buttonClickHandler} />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            values={this.state}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        ) : (
          <span className={styles.noStatisticsNotification}>
            There is no feedback
          </span>
        )}
      </div>
    );
  }
}

export default Feedback;
