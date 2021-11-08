import PropTypes from 'prop-types';
import styles from "./Feedback.module.css";

const FeedbackOptions = ({ onLeaveFeedback, name}) => {
    return (
      <div>
        {name.map((itemName, id) => (
          <button key={id} type="button" onClick={() => onLeaveFeedback(itemName)} className={styles.button}>
            {itemName}
          </button>
        ))}
      </div>
    )
}
  
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  name: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}