import { Title } from "components/Feedback/Feedback.styled";




const Section = ({title, сhildren}) =>{
  
    return (<>
    <Title>{title}</Title>
    {сhildren}
    </>
    );
    
}

export default Section