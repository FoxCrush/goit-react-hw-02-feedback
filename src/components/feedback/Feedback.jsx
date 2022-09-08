import React, { Component } from 'react';

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
