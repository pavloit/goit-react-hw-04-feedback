import React, { useState } from "react";
import Feedback from './feedback/FeedBack'
import Statistics from "./statistics/Statistics";
import Section from './section/Section'
import Notification from './notification/Notification'

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  function handleFeedback(type) {
    if (type === 'good') return setGood((prev) => prev +=1)
    if (type === 'neutral') return setNeutral((prev) => prev +=1)
    if (type === 'bad') return setBad((prev) => prev +=1)
    }

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    const percentage = (good / countTotalFeedback() * 100)
    return percentage
  };
  
  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  }

  return (   
  <div style={centerStyle}>
    <Section title="Please leave feedback">
      <Feedback options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
    </Section>
    <Section title="Statistics">
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
    </div>
  )
}