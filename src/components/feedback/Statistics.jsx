import React from 'react';
import PropTypes from 'prop-types';
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

Statistics.propTypes = {
  values: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
