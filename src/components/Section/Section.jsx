import { Title } from 'components/Feedback/Feedback.styled';
import PropTypes from 'prop-types'

const Section = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      <div>{children}</div>
      {/* {сhildren} */}
    </div>
  );
};

Section.prorTypes = {
    title : PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Section;
