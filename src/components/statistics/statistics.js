// import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import styles from './statistics.module.css';
// class Statistics extends Component {
//   render() {
//       console.log(this)
//     const { totalFeedbacks, positiveFeedbackPercentage, good, bad, neutral } = this.props;

//       return (
//       <Fragment>
//         <h2>Statistics</h2>
//         <ul className={styles.feedbackList}>
//                   <li className={styles.feedbackListItem}>Good: {good}</li>
//                   <li className={styles.feedbackListItem}>Neutral: { neutral }</li>
//                   <li className={styles.feedbackListItem}>Bad: {bad}</li>
//         </ul>
//         <div className={styles.overallFeedbackStatContainer}>
//           <span className={styles.feedbackStatItem}>Total feedbacks: {totalFeedbacks}</span>
//           <span className={styles.feedbackStatItem}>Positive feedback: {positiveFeedbackPercentage>1 ? positiveFeedbackPercentage : '0'}%</span>
//         </div>
//       </Fragment>
//     );
//   }
// }
function Statistics(props) {
  const { totalFeedbacks, positiveFeedbackPercentage, good, bad, neutral } =
    props;

  return (
    <Fragment>
      <h2>Statistics</h2>
      <ul className={styles.feedbackList}>
        <li className={styles.feedbackListItem}>Good: {good}</li>
        <li className={styles.feedbackListItem}>Neutral: {neutral}</li>
        <li className={styles.feedbackListItem}>Bad: {bad}</li>
      </ul>
      <div className={styles.overallFeedbackStatContainer}>
        <span className={styles.feedbackStatItem}>
          Total feedbacks: {totalFeedbacks}
        </span>
        <span className={styles.feedbackStatItem}>
          Positive feedback:{' '}
          {positiveFeedbackPercentage > 1 ? positiveFeedbackPercentage : '0'}%
        </span>
      </div>
    </Fragment>
  );
}

export default Statistics;
