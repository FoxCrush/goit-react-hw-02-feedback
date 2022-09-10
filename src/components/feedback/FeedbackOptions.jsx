import React from 'react';
import PropTypes from 'prop-types';
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

FeedbackControls.propTypes = { onButtonClick: PropTypes.func.isRequired };
export default FeedbackControls;
