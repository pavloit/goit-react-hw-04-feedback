import React, { Component } from "react";
import Feedback from './feedback/FeedBack'
import Statistics from "./statistics/Statistics";
import Section from './section/Section'
import Notification from './notification/Notification'


export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  };
  
  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
  }

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
  
  countPositiveFeedbackPercentage = () => { 
    const percentage = (this.state.good / this.countTotalFeedback() * 100)
    return percentage
  } ;


  render() {
   const centerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    };

    return (
        <div style={centerStyle}>
            <Section title="Please leave feedback">
                <Feedback options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
            </Section>
            <Section title="Statistics">
                {this.countTotalFeedback() > 0 ? (
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
      </div>
    );
  }
}
