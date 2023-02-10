import {Item} from './StatisticListItem.styled';
import PropTypes from 'prop-types'
const StatisticListItem = ({options})  =>{
    return(
         Object.entries(options).map(([key, value]) => {
        return <Item key={key}>{key}: {value}</Item>
       }))
}

StatisticListItem.PropTypes = {
    options : PropTypes.object.isRequired,
}

export default StatisticListItem