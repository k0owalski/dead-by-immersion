import PropTypes from 'prop-types';

import StyledHamburger from "./StyledHamburger";

const Hamburger = ({ isActive, handleClick }) => (
  <StyledHamburger className={`hamburger ${isActive && 'is-active'}`} type="button" onClick={handleClick}>
    <span className="hamburger-inner" />
  </StyledHamburger>
);

Hamburger.propTypes = {
  isActive: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

Hamburger.defaultProps = {
  isActive: false
};

export default Hamburger;
