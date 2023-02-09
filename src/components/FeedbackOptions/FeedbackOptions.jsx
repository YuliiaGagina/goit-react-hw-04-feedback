import { Button } from "./FeedbackOptions.styled"
const FeedbackOptions = ({options , onLeaveFeedback}) =>{
  return(
   
    Object.entries(options).map(([key] ) => {
    return <Button key={key} onClick={()=>{onLeaveFeedback(key )}}>{key}</Button>
       })

    )  
}

export default FeedbackOptions;