import React, { Component } from 'react';

class Feedback extends Component {
  state = this.props.initialState;
  render() {
    return (
      <div className="feedback">
        <div className="feedbackControl">
          <span>Please leave your feedback</span>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <div>
          <span>Statistics</span>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Feedback;
