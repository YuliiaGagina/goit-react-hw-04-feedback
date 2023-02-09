import {Item} from './StatisticListItem.styled'
const StatisticListItem = ({options})  =>{
    return(
         Object.entries(options).map(([key, value]) => {
        return <Item key={key}>{key}: {value}</Item>
       }))
}

export default StatisticListItem