import Statistics from "../components/Statistics/Statistics";
import React from "react";
import FeedbackOptions from "../components/Feedback/FeedbackOptions";
import Title from "../components/Title/Title";
import Notification from "../components/Notification/Notification";
import styles from "../components/Feedback/Feedback.module.css";
import { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = ["good", "neutral", "bad"];

  const buttonFeedback = (event) => {
    switch (event) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100) + "%";
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Title title="PLease leave feedback">
          <FeedbackOptions
            onLeaveFeedback={buttonFeedback}
            name={state}
          ></FeedbackOptions>
        </Title>
        <Title title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Title>
      </div>
    </section>
  );
};

export default App;
