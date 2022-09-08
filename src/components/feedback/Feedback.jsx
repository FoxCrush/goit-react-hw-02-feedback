import React, { Component } from 'react';

class Feedback extends Component {
  state = this.props.initialState;
  buttonClickHandler = e => {
    console.log('click on Good button', e.currentTarget.children.value);
  };
  render() {
    return (
      <div className="feedback">
        <div className="feedbackControl">
          <span>Please leave your feedback</span>
          <button type="button" onClick={this.buttonClickHandler}>
            Good
          </button>
          <button type="button" onClick={this.buttonClickHandler}>
            Neutral
          </button>
          <button type="button" onClick={this.buttonClickHandler}>
            Bad
          </button>
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
