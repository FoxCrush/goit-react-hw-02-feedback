import { Fragment } from 'react/cjs/react.production.min';

const FeedbackOptions = ({ buttonClickHandler }) => (
  <Fragment>
    <button
      className="feedbackButton"
      onClick={() => {
        buttonClickHandler('good');
      }}
    >
      Good
    </button>
    <button
      className="feedbackButton"
      onClick={() => {
        buttonClickHandler('neutral');
      }}
    >
      Neutral
    </button>
    <button
      className="feedbackButton"
      onClick={() => {
        buttonClickHandler('bad');
      }}
    >
      Bad
    </button>
  </Fragment>
);

// class FeedbackOptions extends Component {
//     render() {
//         return (
//             <Fragment>
//         <button
//           className="feedbackButton"
//           onClick={()=>{this.props.buttonClickHandler('good')}}
//         >
//           Good
//         </button>
//         <button
//           className="feedbackButton"
//           onClick={()=>{this.props.buttonClickHandler('neutral')}}
//         >
//           Neutral
//         </button>
//         <button
//           className="feedbackButton"
//           onClick={()=>{this.props.buttonClickHandler('bad')}}
//         >
//           Bad
//         </button>
//             </Fragment>
//         )
//     }
// }

export default FeedbackOptions;
