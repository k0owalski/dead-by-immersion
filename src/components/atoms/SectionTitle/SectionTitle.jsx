import PropTypes from 'prop-types';

import StyledSectionTitle from "./StyledSectionTitle";


const SectionTitle = ({ title }) => <StyledSectionTitle>{title}</StyledSectionTitle>;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionTitle;
