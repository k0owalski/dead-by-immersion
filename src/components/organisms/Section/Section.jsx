import PropTypes from 'prop-types';

import StyledSection from "./StyledSection";

const Section = ({ children }) => (
  <StyledSection>
    {children}
  </StyledSection>
);

Section.propTypes = {
  children: PropTypes.element
};

Section.defaultProps = {
  children: null
};

export default Section;
