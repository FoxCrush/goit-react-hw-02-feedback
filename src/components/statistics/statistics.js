import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import styles from './statistics.module.css';
class Statistics extends Component {
  render() {
    return (
      <Fragment>
        <h2>Statistics</h2>
        <ul className={styles.feedbackList}>
          <li className={styles.feedbackListItem}>Good: 'good'</li>
          <li className={styles.feedbackListItem}>Neutral: 'neu'</li>
          <li className={styles.feedbackListItem}>Bad: bad</li>
        </ul>
        <div className={styles.overallFeedbackStatContainer}>
          <span className={styles.feedbackStatItem}>Total feedbacks: </span>
          <span className={styles.feedbackStatItem}>Positive feedback: %</span>
        </div>
      </Fragment>
    );
  }
}

export default Statistics;
// {positiveFeedbackPercentage>1 ? positiveFeedbackPercentage : '0'} {totalFeedbacks}
