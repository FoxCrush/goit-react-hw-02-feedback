import React from 'react';
import styles from './feedback.module.css';

const Statistics = ({
  values,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <div className={styles.statisticsContainer}>
    <span className={styles.statisticsTitle}>Statistics</span>
    <ul>
      <li className={styles.statisticsItem}>
        <span className={styles.statisticsItemTitle}>Good: {values.good}</span>
      </li>
      <li className={styles.statisticsItem}>
        <span className={styles.statisticsItemTitle}>
          Neutral: {values.neutral}
        </span>
      </li>
      <li className={styles.statisticsItem}>
        <span className={styles.statisticsItemTitle}>Bad: {values.bad}</span>
      </li>
      <ul className={styles.totalStatistics}>
        <li>Total: {countTotalFeedback()}</li>
        <li>Positive feedback: {`${countPositiveFeedbackPercentage()} %`}</li>
      </ul>
    </ul>
  </div>
);
export default Statistics;
