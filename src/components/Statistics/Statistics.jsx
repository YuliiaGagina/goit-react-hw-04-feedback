import { ListStatistics, Countings } from "components/Feedback/Feedback.styled";
import StatisticListItem from 'components/StatisticListItem/StatisticListItem';
import PropTypes from 'prop-types';

const  Statistics = ({options, countTotal, countPositiveFeedback }) =>{
    
    return( <>
        <ListStatistics>
         <StatisticListItem options={options}/>
          </ListStatistics>
          <Countings>Total: {countTotal}</Countings>
          <Countings>Positive feedback: {countPositiveFeedback}%</Countings>
          </>
    )
}

Statistics.propTypes = {
    options : PropTypes.object.isRequired,
    countTotal: PropTypes.number.isRequired,
    countPositiveFeedback: PropTypes.number.isRequired,
}



export default Statistics;