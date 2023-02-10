import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
// import StatisticListItem from 'components/StatisticListItem/StatisticListItem';
import { Subtitle } from './Feedback.styled';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handelIncrement = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  };
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
        
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handelIncrement}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <>
            <Subtitle>Statistics</Subtitle>
            <Statistics
              options={this.state}
              countTotal={this.countTotalFeedback()}
              countPositiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          </>
        ) : (
          <Notification />
        )}
      
      </div>
    );
  }

 

}

Feedback.propTypes = {
    
}