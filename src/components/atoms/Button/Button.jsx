import PropTypes from 'prop-types'
import StyledButton from "./StyledButton";

function Button({ title }) {
  return (
    <StyledButton className="button" to="/">
      {title}
    </StyledButton>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired
}

export default Button;
