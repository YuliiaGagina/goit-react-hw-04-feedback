
import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
// import StatisticListItem from 'components/StatisticListItem/StatisticListItem';
import { Subtitle } from './Feedback.styled';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';



export function Feedback() {
  const [points, setPoints] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
    
  

  
  
const  handelIncrement = value => {
    setPoints(prevState => ({
    ...prevState,
      [value]: prevState[value] + 1,
    }));
  };
    // this.setState(prevState => ({
    //   [value]: prevState[value] + 1,
    // }));

  const  countTotalFeedback = () => {
      return Object.values(points).reduce((acc, item) => acc + item, 0);
    };

    const  countPositiveFeedbackPercentage = () => {
      if (countTotalFeedback() === 0) {
        return 0;
      } else {
        return Math.round((points.good / countTotalFeedback()) * 100);
      }
    };
    
    return (
      <div>
        <Section title="Please leave feedback">
        
          <FeedbackOptions
            options={points}
            onLeaveFeedback={handelIncrement}
          />
        </Section>
        {countTotalFeedback() > 0 ? (
          <>
            <Subtitle>Statistics</Subtitle>
            <Statistics
              options={points}
              countTotal={countTotalFeedback()}
              countPositiveFeedback={countPositiveFeedbackPercentage()}
            />
          </>
        ) : (
          <Notification />
        )}
      
      </div>
    );

  };

Feedback.propTypes = {
    
}

// Feedback.propTypes = {
    
// }