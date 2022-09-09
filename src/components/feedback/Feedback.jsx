import React, { Component } from 'react';
import styles from './feedback.module.css';
import FeedbackControls from './feedbackControls';

class Feedback extends Component {
  static defaultProps = { initialState: { good: 0, neutral: 0, bad: 0 } };
  static propTypes = {
    //
  };

  state = this.props.initialState;

  countTotalFeedback = () => {
    const totalFeedbackCount = Object.values(this.state).reduce(
      (current, acc) => current + acc,
      0
    );
    console.log('countTotalFeedback', totalFeedbackCount);
    return totalFeedbackCount;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.floor(
      (100 * this.state.good) /
        Object.values(this.state).reduce((current, acc) => current + acc, 0)
    );
    console.log('countPositiveFeedbackPercentage', percentage);
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
        <FeedbackControls onButtonClick={this.buttonClickHandler} />

        <div className={styles.statisticsContainer}>
          <span className={styles.statisticsTitle}>Statistics</span>
          <ul>
            <li className={styles.statisticsItem}>
              <span className={styles.statisticsItemTitle}>
                Good {this.state.good}
              </span>
            </li>
            <li className={styles.statisticsItem}>
              <span className={styles.statisticsItemTitle}>
                Neutral {this.state.neutral}
              </span>
            </li>
            <li className={styles.statisticsItem}>
              <span className={styles.statisticsItemTitle}>
                Bad {this.state.bad}
              </span>
            </li>
            <span className={styles.statisticsItemTitle}>
              {this.countTotalFeedback()}
            </span>
            <span className={styles.statisticsItemTitle}>
              {this.countPositiveFeedbackPercentage()}
            </span>
          </ul>
        </div>
      </div>
    );
  }
}
export default Feedback;
