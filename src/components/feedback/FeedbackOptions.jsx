import React from 'react';
import styles from './feedback.module.css';

const FeedbackControls = ({ onButtonClick }) => (
  <div className={styles.feedbackControlContainer}>
    <button
      type="button"
      name="good"
      className={styles.feedbackButton}
      onClick={onButtonClick}
    >
      Good
    </button>
    <button
      type="button"
      name="neutral"
      className={styles.feedbackButton}
      onClick={onButtonClick}
    >
      Neutral
    </button>
    <button
      type="button"
      name="bad"
      className={styles.feedbackButton}
      onClick={onButtonClick}
    >
      Bad
    </button>
  </div>
);
export default FeedbackControls;
