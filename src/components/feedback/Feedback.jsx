import React, { Component } from 'react';
import styles from './feedback.module.css';

class Feedback extends Component {
  static defaultProps = { initialState: { good: 0, neutral: 0, bad: 0 } };
  static propTypes = {
    //
  };

  state = this.props.initialState;

  buttonClickHandler = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };
  render() {
    return (
      <div className={styles.feedbackContainer}>
        <span className={styles.feedbackTitle}>Please leave your feedback</span>
        <div className={styles.feedbackControlContainer}>
          <button
            type="button"
            name="good"
            className={styles.feedbackButton}
            onClick={this.buttonClickHandler}
          >
            Good
          </button>
          <button
            type="button"
            name="neutral"
            className={styles.feedbackButton}
            onClick={this.buttonClickHandler}
          >
            Neutral
          </button>
          <button
            type="button"
            name="bad"
            className={styles.feedbackButton}
            onClick={this.buttonClickHandler}
          >
            Bad
          </button>
        </div>
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
          </ul>
        </div>
      </div>
    );
  }
}
export default Feedback;
