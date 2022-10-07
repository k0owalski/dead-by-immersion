import PropTypes from 'prop-types';
import StyledButton from "./StyledButton";

function Button({ title, to }) {
  return (
    <StyledButton className="button" to={to}>
      {title}
    </StyledButton>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string
};

Button.defaultProps = {
  to: ''
};

export default Button;
