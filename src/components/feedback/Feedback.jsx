import React, { Component } from 'react';

class Feedback extends Component {
  state = this.props.initialState;
  buttonClickHandler = event => {
    console.log('click on any button', event.target.name);
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };
  render() {
    return (
      <div className="feedback">
        <div className="feedbackControl">
          <span>Please leave your feedback</span>
          <button type="button" name="good" onClick={this.buttonClickHandler}>
            Good
          </button>
          <button
            type="button"
            name="neutral"
            onClick={this.buttonClickHandler}
          >
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.buttonClickHandler}>
            Bad
          </button>
        </div>
        <div>
          <span>Statistics</span>
          <ul>
            <li>
              <span>{this.state.good}</span>
            </li>
            <li>
              <span>{this.state.neutral}</span>
            </li>
            <li>
              <span>{this.state.bad}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Feedback;
