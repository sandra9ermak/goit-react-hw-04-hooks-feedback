import PropTypes from 'prop-types';
import styles from "./Statistics.module.css";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}) => {
  return (
      <div>
        <ul>
          <li className={styles.liItem}>Good: {good}</li>
          <li className={styles.liItem}>Neutral: {neutral}</li>
          <li className={styles.liItem}>Bad: {bad}</li>
          <li className={styles.liItem}>Total: {total}</li>
          <li className={styles.liItem}>Positive feedback: {positivePercentage}</li>
        </ul>
      </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
}
