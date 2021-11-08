import PropTypes from 'prop-types';
import styles from "../Feedback/Feedback.module.css";

const Title = ({ title, children }) => {
    return (
        <div>
        <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    )
}

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired
}